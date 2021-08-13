/*
 * @Author: Jerrykuku https://github.com/jerrykuku
 * @Date: 2021-1-8
 * @Version: v0.0.2
 * @thanks: FanchangWang https://github.com/FanchangWang
 */

var express = require('express');
var session = require('express-session');
var compression = require('compression');
var bodyParser = require('body-parser');
var got = require('got');
var path = require('path');
var fs = require('fs');
var {
    execSync,
    exec
} = require('child_process');
const {
    createProxyMiddleware
} = require('http-proxy-middleware');
const random = require('string-random');

var rootPath = path.resolve(__dirname, '..')
// config.sh 文件所在目录
var confFile = path.join(rootPath, 'config/config.sh');
// config.sh.sample 文件所在目录
var sampleFile = path.join(rootPath, 'sample/config.sh.sample');
// crontab.list 文件所在目录
var crontabFile = path.join(rootPath, 'config/crontab.list');
// config.sh 文件备份目录
var confBakDir = path.join(rootPath, 'config/bak/');
// auth.json 文件目录
var authConfigFile = path.join(rootPath, 'config/auth.json');
// account.json 文件目录
var accountFile = path.join(rootPath, 'config/account.json');
// bot.json 文件所在目录
var botFile = path.join(rootPath, 'config/bot.json');
// diy.sh 文件目录
var diyFile = path.join(rootPath, 'config/diy.sh');
// diy_server.js 文件目录
var diyServerFile = path.join(rootPath, 'config/diy_server.js');
// 日志目录
var logPath = path.join(rootPath, 'log/');
// 脚本目录
var ScriptsPath = path.join(rootPath, 'scripts/');

var authError = '错误的用户名密码，请重试';
var loginFaild = '请先登录!';

var configString = 'config sample crontab diy bot account';

var s_token, cookies, guid, lsid, lstoken, okl_token, token, userCookie = ''

function praseSetCookies(response) {
    s_token = response.body.s_token
    guid = response.headers['set-cookie'][0]
    guid = guid.substring(guid.indexOf('=') + 1, guid.indexOf(';'))
    lsid = response.headers['set-cookie'][2]
    lsid = lsid.substring(lsid.indexOf('=') + 1, lsid.indexOf(';'))
    lstoken = response.headers['set-cookie'][3]
    lstoken = lstoken.substring(lstoken.indexOf('=') + 1, lstoken.indexOf(';'))
    cookies = 'guid=' + guid + '; lang=chs; lsid=' + lsid + '; lstoken=' + lstoken + '; '
}

function getCookie(response) {
    var TrackerID = response.headers['set-cookie'][0]
    TrackerID = TrackerID.substring(TrackerID.indexOf('=') + 1, TrackerID.indexOf(';'))
    var pt_key = response.headers['set-cookie'][1]
    pt_key = pt_key.substring(pt_key.indexOf('=') + 1, pt_key.indexOf(';'))
    var pt_pin = response.headers['set-cookie'][2]
    pt_pin = pt_pin.substring(pt_pin.indexOf('=') + 1, pt_pin.indexOf(';'))
    var pt_token = response.headers['set-cookie'][3]
    pt_token = pt_token.substring(pt_token.indexOf('=') + 1, pt_token.indexOf(';'))
    var pwdt_id = response.headers['set-cookie'][4]
    pwdt_id = pwdt_id.substring(pwdt_id.indexOf('=') + 1, pwdt_id.indexOf(';'))
    var s_key = response.headers['set-cookie'][5]
    s_key = s_key.substring(s_key.indexOf('=') + 1, s_key.indexOf(';'))
    var s_pin = response.headers['set-cookie'][6]
    s_pin = s_pin.substring(s_pin.indexOf('=') + 1, s_pin.indexOf(';'))
    cookies = 'TrackerID=' + TrackerID + '; pt_key=' + pt_key + '; pt_pin=' + pt_pin + '; pt_token=' + pt_token + '; pwdt_id=' + pwdt_id + '; s_key=' + s_key + '; s_pin=' + s_pin + '; wq_skey='
    var userCookie = 'pt_key=' + pt_key + ';pt_pin=' + pt_pin + ';';
    console.log('\n############  登录成功，获取到 Cookie  #############\n\n');
    console.log('Cookie1="' + userCookie + '"\n');
    console.log('\n####################################################\n\n');
    return userCookie;
}
const LOGIN_UA = "Mozilla/5.0 (iPhone; CPU iPhone OS 13_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 SP-engine/2.14.0 main%2F1.0 baiduboxapp/11.18.0.16 (Baidu; P2 13.3.1) NABar/0.0";

async function step1() {
    try {
        s_token,
        cookies,
        guid,
        lsid,
        lstoken,
        okl_token,
        token = ''
        let timeStamp = (new Date()).getTime()
        let url = 'https://plogin.m.jd.com/cgi-bin/mm/new_login_entrance?lang=chs&appid=300&returnurl=https://wq.jd.com/passport/LoginRedirect?state=' + timeStamp + '&returnurl=https://home.m.jd.com/myJd/newhome.action?sceneval=2&ufc=&/myJd/home.action&source=wq_passport'
        const response = await got(url, {
            responseType: 'json',
            headers: {
                'Connection': 'Keep-Alive',
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json, text/plain, */*',
                'Accept-Language': 'zh-cn',
                'Referer': 'https://plogin.m.jd.com/login/login?appid=300&returnurl=https://wq.jd.com/passport/LoginRedirect?state=' + timeStamp + '&returnurl=https://home.m.jd.com/myJd/newhome.action?sceneval=2&ufc=&/myJd/home.action&source=wq_passport',
                'User-Agent': LOGIN_UA,
                'Host': 'plogin.m.jd.com'
            }
        });

        praseSetCookies(response)
    }
    catch (error) {
        cookies = '';
        console.log(error.response.body);
    }
};

async function step2() {
    try {
        if (cookies == '') {
            return 0;
        }
        let timeStamp = (new Date()).getTime()
        let url = 'https://plogin.m.jd.com/cgi-bin/m/tmauthreflogurl?s_token=' + s_token + '&v=' + timeStamp + '&remember=true'
        const response = await got.post(url, {
            responseType: 'json',
            json: {
                'lang': 'chs',
                'appid': 300,
                'returnurl': 'https://wqlogin2.jd.com/passport/LoginRedirect?state=' + timeStamp + '&returnurl=//home.m.jd.com/myJd/newhome.action?sceneval=2&ufc=&/myJd/home.action',
                'source': 'wq_passport'
            },
            headers: {
                'Connection': 'Keep-Alive',
                'Content-Type': 'application/x-www-form-urlencoded; Charset=UTF-8',
                'Accept': 'application/json, text/plain, */*',
                'Cookie': cookies,
                'Referer': 'https://plogin.m.jd.com/login/login?appid=300&returnurl=https://wqlogin2.jd.com/passport/LoginRedirect?state=' + timeStamp + '&returnurl=//home.m.jd.com/myJd/newhome.action?sceneval=2&ufc=&/myJd/home.action&source=wq_passport',
                'User-Agent': LOGIN_UA,
                'Host': 'plogin.m.jd.com',
            }
        });
        token = response.body.token
        okl_token = response.headers['set-cookie'][0]
        okl_token = okl_token.substring(okl_token.indexOf('=') + 1, okl_token.indexOf(';'))
        var qrUrl = 'https://plogin.m.jd.com/cgi-bin/m/tmauth?appid=300&client_type=m&token=' + token;
        return qrUrl;
    } catch (error) {
        console.log(error.response.body);
        return 0;
    }
}

var i = 0;

async function checkLogin() {
    try {
        if (cookies == '') {
            return 0;
        }
        let timeStamp = (new Date()).getTime()
        let url = 'https://plogin.m.jd.com/cgi-bin/m/tmauthchecktoken?&token=' + token + '&ou_state=0&okl_token=' + okl_token;
        const response = await got.post(url, {
            responseType: 'json',
            form: {
                lang: 'chs',
                appid: 300,
                returnurl: 'https://wqlogin2.jd.com/passport/LoginRedirect?state=1100399130787&returnurl=//home.m.jd.com/myJd/newhome.action?sceneval=2&ufc=&/myJd/home.action',
                source: 'wq_passport',
            },
            headers: {
                'Referer': 'https://plogin.m.jd.com/login/login?appid=300&returnurl=https://wqlogin2.jd.com/passport/LoginRedirect?state=' + timeStamp + '&returnurl=//home.m.jd.com/myJd/newhome.action?sceneval=2&ufc=&/myJd/home.action&source=wq_passport',
                'Cookie': cookies,
                'Connection': 'Keep-Alive',
                'Content-Type': 'application/x-www-form-urlencoded; Charset=UTF-8',
                'Accept': 'application/json, text/plain, */*',
                'User-Agent': LOGIN_UA,
            }
        });

        return response;
    } catch (error) {
        console.log(error.response.body);
        let res = {};
        res.body = {
            check_ip: 0,
            errcode: 222,
            message: '出错'
        };
        res.headers = {};
        return res;
    }
}

/**
 * 检查 config.sh 以及 config.sh.sample 文件是否存在
 */
function checkConfigFile() {
    if (!fs.existsSync(confFile)) {
        console.error(rootPath);
        console.error('脚本启动失败，config.sh 文件不存在！');
        process.exit(1);
    }
    if (!fs.existsSync(sampleFile)) {
        console.error('脚本启动失败，config.sh.sample 文件不存在！');
        process.exit(1);
    }
}

/**
 * 检查 config/bak/ 备份目录是否存在，不存在则创建
 */
function mkdirConfigBakDir() {
    if (!fs.existsSync(confBakDir)) {
        fs.mkdirSync(confBakDir);
    }
}

/**
 * 备份 config.sh 文件
 */
function bakConfFile(file) {
    mkdirConfigBakDir();
    let date = new Date();
    let bakConfFile =
        confBakDir +
        file +
        '_' +
        date.getFullYear() +
        '-' +
        (date.getMonth() + 1) +
        '-' +
        date.getDate() +
        '-' +
        date.getHours() +
        '-' +
        date.getMinutes() +
        '-' +
        date.getMilliseconds();
    let oldConfContent = '';
    switch (file) {
        case 'config.sh':
            oldConfContent = getFileContentByName(confFile);
            fs.writeFileSync(bakConfFile, oldConfContent);
            break;
        case 'crontab.list':
            oldConfContent = getFileContentByName(crontabFile);
            fs.writeFileSync(bakConfFile, oldConfContent);
            break;
        case 'diy.sh':
            oldConfContent = getFileContentByName(diyFile);
            fs.writeFileSync(bakConfFile, oldConfContent);
            break;
        case 'bot.json':
            oldConfContent = getFileContentByName(botFile);
            fs.writeFileSync(bakConfFile, oldConfContent);
            break;
        case 'account.json':
            oldConfContent = getFileContentByName(accountFile);
            fs.writeFileSync(bakConfFile, oldConfContent);
            break;
        default:
            break;
    }
}

/**
 * 将 post 提交内容写入 config.sh 文件（同时备份旧的 config.sh 文件到 bak 目录）
 * @param content
 */
function saveNewConf(file, content) {
    bakConfFile(file);
    switch (file) {
        case 'config.sh':
            fs.writeFileSync(confFile, content);
            break;
        case 'crontab.list':
            fs.writeFileSync(crontabFile, content);
            execSync('crontab ' + crontabFile);
            break;
        case 'diy.sh':
            fs.writeFileSync(diyFile, content);
            break;
        case 'bot.json':
            fs.writeFileSync(botFile, content);
            break;
        case 'account.json':
            fs.writeFileSync(accountFile, content);
            break;
        default:
            break;
    }
}

/**
 * 获取文件内容
 * @param fileName 文件路径
 * @returns {string}
 */
function getFileContentByName(fileName) {
    if (fs.existsSync(fileName)) {
        return fs.readFileSync(fileName, 'utf8');
    }
    return '';
}

/**
 * 获取目录中最后修改的文件的路径
 * @param dir 目录路径
 * @returns {string} 最新文件路径
 */
function getLastModifyFilePath(dir) {
    var filePath = '';

    if (fs.existsSync(dir)) {
        var lastmtime = 0;

        var arr = fs.readdirSync(dir);

        arr.forEach(function (item) {
            var fullpath = path.join(dir, item);
            var stats = fs.statSync(fullpath);
            if (stats.isFile()) {
                if (stats.mtimeMs >= lastmtime) {
                    filePath = fullpath;
                }
            }
        });
    }
    return filePath;
}

function getPath(request, page) {
    if (!!request.headers["user-agent"].match(/AppleWebKit.*Mobile.*/)) {
        return path.join(__dirname + '/public/mobile/' + page)
    }
    return path.join(__dirname + '/public/' + page)
}

var app = express();
// gzip压缩
app.use(compression({
    level: 6,
    filter: shouldCompress
}));

//设置跨域访问
app.all("*", function (req, res, next) {
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Origin", "*");
    //允许的header类型
    res.header("Access-Control-Allow-Headers", "content-type");
    //跨域允许的请求方式
    res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
    if (req.method.toLowerCase() === 'options')
        res.send(200); //让options尝试请求快速结束
    else
        next();
})

function shouldCompress(req, res) {
    if (req.headers['x-no-compression']) {
        // don't compress responses with this request header
        return false;
    }

    // fallback to standard filter function
    return compression.filter(req, res);
}

app.use(
    session({
        secret: 'secret',
        name: `connect.${Math.random()}`,
        resave: true,
        saveUninitialized: true,
    })
);
app.use(bodyParser.json({
    limit: '50mb'
}));
app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: true
}));
app.use(express.static(path.join(__dirname, 'public')));

// ttyd proxy
app.use(
    '/shell',
    createProxyMiddleware({
        target: 'http://localhost:7681',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
            '^/shell': '/',
        },
        onProxyReq(proxyReq, req, res) {
            if (!req.session.loggedin) {
                res.redirect('/');
            }
        },
    })
);

/**
 * 登录页面
 */
app.get('/', function (request, response) {
    if (request.session.loggedin) {
        response.redirect('./home');
    } else {
        response.sendFile(getPath(request, 'auth.html'));
    }
});

/**
 * 用户名密码
 */
app.get('/changepwd', function (request, response) {
    if (request.session.loggedin) {
        response.sendFile(getPath(request, 'pwd.html'));
    } else {
        response.redirect('/');
    }
});

/**
 * terminal
 */
app.get('/terminal', function (request, response) {
    if (request.session.loggedin) {
        response.sendFile(getPath(request, 'terminal.html'));
    } else {
        response.redirect('/');
    }
});

/**
 * 获取二维码链接
 */

app.get('/qrcode', function (request, response) {
    if (request.session.loggedin) {
        (async () => {
            try {
                await step1();
                const qrurl = await step2();
                if (qrurl != 0) {
                    response.send({
                        err: 0,
                        qrcode: qrurl
                    });
                } else {
                    response.send({
                        err: 1,
                        msg: '错误'
                    });
                }
            } catch (err) {
                response.send({
                    err: 1,
                    msg: err
                });
            }
        })();
    } else {
        response.send({
            err: 1,
            msg: loginFaild
        });
    }
});

/**
 * 获取返回的cookie信息
 */

app.get('/cookie', function (request, response) {
    if (request.session.loggedin && cookies != '') {
        (async () => {
            try {
                const cookie = await checkLogin();
                if (cookie.body.errcode == 0) {
                    let ucookie = getCookie(cookie);
                    let autoReplace = request.query.autoReplace && request.query.autoReplace === 'true';
                    if (autoReplace) {
                        updateCookie(ucookie);
                    }
                    response.send({
                        err: 0,
                        cookie: ucookie
                    });
                } else {
                    response.send({
                        err: cookie.body.errcode,
                        msg: cookie.body.message
                    });
                }
            } catch (err) {
                response.send({
                    err: 1,
                    msg: err
                });
            }
        })();
    } else {
        response.send({
            err: 1,
            msg: loginFaild
        });
    }
});

/**
 * 获取各种配置文件api
 */

app.get('/api/config/:key', function (request, response) {
    if (request.session.loggedin) {
        let content = "";
        if (configString.indexOf(request.params.key) > -1) {
            switch (request.params.key) {
                case 'config':
                    content = getFileContentByName(confFile);
                    break;
                case 'bot':
                    content = getFileContentByName(botFile);
                    break;
                case 'sample':
                    content = getFileContentByName(sampleFile);
                    break;
                case 'crontab':
                    content = getFileContentByName(crontabFile);
                    break;
                case 'diy':
                    content = getFileContentByName(diyFile);
                    break;
                case 'account':
                    content = getFileContentByName(accountFile);
                    break;
                default:
                    break;
            }
            response.setHeader('Content-Type', 'text/plain');
            response.send(content);
        } else {
            response.send('no config');
        }
    } else {
        response.send(loginFaild);
    }
});

/**
 * 首页 配置页面
 */
app.get('/home', function (request, response) {
    if (request.session.loggedin) {
        response.sendFile(getPath(request, 'home.html'));
    } else {
        response.redirect('/');
    }
});

/**
 * 对比 配置页面
 */
app.get('/diff', function (request, response) {
    if (request.session.loggedin) {
        response.sendFile(getPath(request, 'diff.html'));
    } else {
        response.redirect('/');
    }
});

/**
 * crontab 配置页面
 */
app.get('/crontab', function (request, response) {
    if (request.session.loggedin) {
        response.sendFile(getPath(request, 'crontab.html'));
    } else {
        response.redirect('/');
    }
});

/**
 * 自定义脚本 页面
 */
app.get('/diy', function (request, response) {
    if (request.session.loggedin) {
        response.sendFile(getPath(request, 'diy.html'));
    } else {
        response.redirect('/');
    }
});

/**
 * Bot 页面
 */
app.get('/bot', function (request, response) {
    if (request.session.loggedin) {
        response.sendFile(getPath(request, 'bot.html'));
    } else {
        response.redirect('/');
    }
});

/**
 * 通知备注 页面
 */
app.get('/remarks', function (request, response) {
    if (request.session.loggedin) {
        response.sendFile(getPath(request, 'remarks.html'));
    } else {
        response.redirect('/');
    }
});

/**
 * 手动执行脚本 页面
 */
app.get('/run', function (request, response) {
    if (request.session.loggedin) {
        response.sendFile(getPath(request, 'run.html'));
    } else {
        response.redirect('/');
    }
});

app.post('/runCmd', function (request, response) {
    if (request.session.loggedin) {
        const cmd = `cd ${rootPath};` + request.body.cmd;
        const delay = request.body.delay || 0;
        // console.log('before exec');
        // exec maxBuffer 20MB
        exec(cmd, {
            maxBuffer: 1024 * 1024 * 20
        }, (error, stdout, stderr) => {
            // console.log(error, stdout, stderr);
            // 根据传入延时返回数据，有时太快会出问题
            setTimeout(() => {
                if (error) {
                    console.error(`执行的错误: ${error}`);
                    response.send({
                        err: 1,
                        msg: stdout ? `${stdout}${error}` : `${error}`,
                    });
                    return;
                }

                if (stdout) {
                    // console.log(`stdout: ${stdout}`)
                    response.send({
                        err: 0,
                        msg: `${stdout}`
                    });
                    return;
                }

                if (stderr) {
                    console.error(`stderr: ${stderr}`);
                    response.send({
                        err: 1,
                        msg: `${stderr}`
                    });
                    return;
                }

                response.send({
                    err: 0,
                    msg: '执行结束，无结果返回。'
                });
            }, delay);
        });
    } else {
        response.redirect('/');
    }
});

/**
 * 使用jsName获取最新的日志
 */
app.get('/runLog/:jsName', function (request, response) {
    if (request.session.loggedin) {
        const jsName = request.params.jsName;
        let logFile;
        if (jsName === 'git_pull' || jsName === 'ttyd' || jsName === 'rmlog' || jsName === 'hangup' || jsName === 'cfd_loop' || jsName === 'exsc') {
            logFile = path.join(rootPath, `log/${jsName}.log`);
        } else {
            let pathUrl = `log/${jsName}/`;
            if (!fs.existsSync(path.join(rootPath, pathUrl))) {
                pathUrl = `log/jd_${jsName}/`;
            }
            logFile = getLastModifyFilePath(
                path.join(rootPath, pathUrl)
            );
        }

        if (logFile) {
            const content = getFileContentByName(logFile);
            response.setHeader('Content-Type', 'text/plain');
            response.send(content);
        } else {
            response.send('no logs');
        }
    } else {
        response.send(loginFaild);
    }
});

/**
 * auth
 */
app.post('/auth', function (request, response) {
    let username = request.body.username;
    let password = request.body.password;
    fs.readFile(authConfigFile, 'utf8', function (err, data) {
        if (err) console.log(err);
        var con = JSON.parse(data);
        if (username && password) {
            if (username == con.user && password == con.password) {
                request.session.loggedin = true;
                request.session.username = username;
                response.send({
                    err: 0
                });
            } else {
                response.send({
                    err: 1,
                    msg: authError
                });
            }
        } else {
            response.send({
                err: 1,
                msg: '请输入用户名密码!'
            });
        }
    });
});

/**
 * change pwd
 */
app.post('/changepass', function (request, response) {
    if (request.session.loggedin) {
        let username = request.body.username;
        let password = request.body.password;
        let config = {
            user: username,
            password: password,
            cookieApiToken: random(32)
        };
        if (username && password) {
            fs.writeFile(authConfigFile, JSON.stringify(config), function (err) {
                if (err) {
                    response.send({
                        err: 1,
                        msg: '写入错误请重试!'
                    });
                } else {
                    response.send({
                        err: 0,
                        msg: '更新成功!'
                    });
                }
            });
        } else {
            response.send({
                err: 1,
                msg: '请输入用户名密码!'
            });
        }
    } else {
        response.send(loginFaild);
    }
});

/**
 * change pwd
 */
app.get('/logout', function (request, response) {
    request.session.destroy();
    response.redirect('/');
});

/**
 * save config
 */

app.post('/api/save', function (request, response) {
    if (request.session.loggedin) {
        let postContent = request.body.content;
        let postfile = request.body.name;
        saveNewConf(postfile, postContent);
        response.send({
            err: 0,
            title: '保存成功! ',
            msg: '将自动刷新页面查看修改后的 ' + postfile + ' 文件<br>每次保存都会生成备份',
        });
    } else {
        response.send({
            err: 1,
            title: '保存失败! ',
            msg: loginFaild
        });
    }
});

/**
 * 日志查询 页面
 */
app.get('/log', function (request, response) {
    if (request.session.loggedin) {
        response.sendFile(getPath(request, 'tasklog.html'));
    } else {
        response.redirect('/');
    }
});

/**
 * 日志列表
 */
app.get('/api/logs', function (request, response) {
    if (request.session.loggedin) {
        var fileList = fs.readdirSync(logPath, 'utf-8');
        var dirs = [];
        var rootFiles = [];
        for (var i = 0; i < fileList.length; i++) {
            var stat = fs.lstatSync(logPath + fileList[i]);
            // 是目录，需要继续
            if (stat.isDirectory()) {
                var fileListTmp = fs.readdirSync(logPath + '/' + fileList[i], 'utf-8');
                fileListTmp.reverse();
                var dirMap = {
                    dirName: fileList[i],
                    files: fileListTmp,
                };
                dirs.push(dirMap);
            } else {
                rootFiles.push(fileList[i]);
            }
        }

        dirs.push({
            dirName: '@',
            files: rootFiles,
        });
        var result = {
            dirs
        };
        response.send(result);
    } else {
        response.redirect('/');
    }
});

/**
 * 日志文件
 */
app.get('/api/logs/:dir/:file', function (request, response) {
    if (request.session.loggedin) {
        let filePath;
        if (request.params.dir === '@') {
            filePath = logPath + request.params.file;
        } else {
            filePath = logPath + request.params.dir + '/' + request.params.file;
        }
        var content = getFileContentByName(filePath);
        response.setHeader('Content-Type', 'text/plain');
        response.send(content);
    } else {
        response.redirect('/');
    }
});

/**
 * 查看脚本 页面
 */
app.get('/viewScripts', function (request, response) {
    if (request.session.loggedin) {
        response.sendFile(getPath(request, 'viewScripts.html'));
    } else {
        response.redirect('/');
    }
});

/**
 * 脚本列表
 */
app.get('/api/scripts', function (request, response) {
    if (request.session.loggedin) {
        var fileList = fs.readdirSync(ScriptsPath, 'utf-8');
        var dirs = [];
        var rootFiles = [];
        var excludeRegExp = /(git)|(node_modules)|(icon)/;
        for (var i = 0; i < fileList.length; i++) {
            var stat = fs.lstatSync(ScriptsPath + fileList[i]);
            // 是目录，需要继续
            if (stat.isDirectory()) {
                var fileListTmp = fs.readdirSync(
                    ScriptsPath + '/' + fileList[i],
                    'utf-8'
                );
                fileListTmp.reverse();

                if (excludeRegExp.test(fileList[i])) {
                    continue;
                }

                var dirMap = {
                    dirName: fileList[i],
                    files: fileListTmp,
                };
                dirs.push(dirMap);
            } else {
                if (excludeRegExp.test(fileList[i])) {
                    continue;
                }

                rootFiles.push(fileList[i]);
            }
        }

        dirs.push({
            dirName: '@',
            files: rootFiles,
        });
        var result = {
            dirs
        };
        response.send(result);
    } else {
        response.redirect('/');
    }
});

/**
 * 脚本文件
 */
app.get('/api/scripts/:dir/:file', function (request, response) {
    if (request.session.loggedin) {
        let filePath;
        if (request.params.dir === '@') {
            filePath = ScriptsPath + request.params.file;
        } else {
            filePath = ScriptsPath + request.params.dir + '/' + request.params.file;
        }
        var content = getFileContentByName(filePath);
        response.setHeader('Content-Type', 'text/plain');
        response.send(content);
    } else {
        response.redirect('/');
    }
});

function updateCookie(cookie, userMsg = '无', response) {
    if (cookie) {
        const content = getFileContentByName(confFile);
        const lines = content.split('\n');
        const pt_pin = cookie.match(/pt_pin=.+?;/)[0];
        let updateFlag = false;
        let lastIndex = 0;
        let maxCookieCount = 0;
        let CK_AUTO_ADD = false
        if (content.match(/CK_AUTO_ADD=".+?"/)) {
            CK_AUTO_ADD = content.match(/CK_AUTO_ADD=".+?"/)[0].split('"')[1]
        }
        for (var i = 0; i < lines.length; i++) {
            var line = lines[i];
            if (line.startsWith('Cookie')) {
                maxCookieCount = Math.max(
                    Number(line.split('=')[0].split('Cookie')[1]),
                    maxCookieCount
                );
                lastIndex = i;
                if (line.match(/pt_pin=.+?;/) && line.match(/pt_pin=.+?;/)[0] === pt_pin) {
                    const head = line.split('=')[0];
                    lines[i] = [head, '=', '"', cookie, '"'].join('');
                    updateFlag = true;
                    var lineNext = lines[i + 1];
                    if (
                        lineNext.match(/上次更新：/)
                    ) {
                        const bz = lineNext.split('备注：')[1];
                        lines[i + 1] = ['## ', pt_pin, ' 上次更新：', new Date().toLocaleDateString(), ' 备注：', bz ? bz : userMsg].join('');
                    } else {
                        const newLine = ['## ', pt_pin, ' 上次更新：', new Date().toLocaleDateString(), ' 备注：', userMsg].join('');
                        lines.splice(lastIndex + 1, 0, newLine);
                    }
                }
            }
        }
        let CookieCount = Number(maxCookieCount) + 1;
        if (!updateFlag && CK_AUTO_ADD === 'true') {
            lastIndex ++;
            let newLine = [
                'Cookie',
                CookieCount,
                '=',
                '"',
                cookie,
                '"',
            ].join('');
            //提交备注
            lines.splice(lastIndex + 1, 0, newLine);
            newLine = ['## ', pt_pin, ' 上次更新：', new Date().toLocaleDateString(), ' 备注：', userMsg].join('');
            lines.splice(lastIndex + 2, 0, newLine);
        }
        saveNewConf('config.sh', lines.join('\n'));
        if (response) {
            response.send({
                err: 0,
                msg: updateFlag ?
                    `[更新成功]\n当前用户量:(${maxCookieCount})` : CK_AUTO_ADD === 'true' ? `[新的Cookie]\n当前用户量:(${CookieCount})` : `服务器配置不自动添加Cookie\n如需启用请添加export CK_AUTO_ADD="true"`,
                //`[更新成功]\n本服用户量:(${maxCookieCount})` : `非本服用户\n本服用户量:(${CookieCount})`,
            });
        }
    } else {
        if (response) {
            response.send({
                msg: '参数错误',
                err: -1
            });
        }
    }
}

/**
 * 更新已经存在的人的cookie & 自动添加新用户
 * */
app.post('/updateCookie', function (request, response) {
    fs.readFile(authConfigFile, 'utf8', function (err, data) {
        if (err) console.log(err);
        let con = JSON.parse(data);
        let token = request.headers["api-token"]
        if (token && token !== '' && token === con.cookieApiToken) {
            updateCookie(request.body.cookie, request.body.userMsg, response);
        } else {
            response.send({
                msg: '非法调用',
                err: -1
            });
        }
    })
});

checkConfigFile();

// 调用自定义api
try {
    require.resolve(diyServerFile);
    const diyServer = require(diyServerFile);
    if (typeof diyServer === 'function') {
        diyServer(app);
        console.log('调用自定义api成功');
    }
} catch (e) {
    console.error('调用自定义api失败');
}

app.listen(5678, () => {
    console.log('应用正在监听 5678 端口!');
});
