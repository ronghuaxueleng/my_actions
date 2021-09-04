/**
 * 京喜财富岛
 * 包含雇佣导游，建议每小时1次
 *
 * 此版本暂定默认帮助HelloWorld，帮助助力池
 * export HELP_HW = true    // 帮助HelloWorld
 * export HELP_POOL = true  // 帮助助力池
 *
 * 使用jd_env_copy.js同步js环境变量到ts
 * 使用jd_ts_test.ts测试环境变量
 */

import axios from 'axios';
import USER_AGENT, {requireConfig, TotalBean, getBeanShareCode, getFarmShareCode, getRandomNumberByRange, wait, requestAlgo, decrypt, getJxToken} from './TS_USER_AGENTS';
import {Md5} from 'ts-md5'
import * as dotenv from 'dotenv';

const notify = require('./sendNotify')
dotenv.config()
let cookie: string = '', res: any = '', shareCodes: string[] = [], isCollector: Boolean = false;

let HELP_HW: string = process.env.HELP_HW ? process.env.HELP_HW : "true";
console.log('帮助HelloWorld:', HELP_HW)
let HELP_POOL: string = process.env.HELP_POOL ? process.env.HELP_POOL : "true";
console.log('帮助助力池:', HELP_POOL)

interface Params {
  strBuildIndex?: string,
  ddwCostCoin?: number,
  taskId?: number,
  dwType?: string,
  configExtra?: string,
  strStoryId?: string,
  triggerType?: number,
  ddwTriggerDay?: number,
  ddwConsumeCoin?: number,
  dwIsFree?: number,
  ddwTaskId?: string,
  strShareId?: string,
  strMarkList?: string,
  dwSceneId?: string,
  strTypeCnt?: string,
  dwUserId?: number,
  ddwCoin?: number,
  ddwMoney?: number,
  dwPrizeLv?: number,
  dwPrizeType?: number,
  strPrizePool?: string,
  dwFirst?: number,
  dwIdentityType?: number,
  strBussKey?: string,
  strMyShareId?: string,
  ddwCount?: number,
  __t?: number,
  strBT?: string,
  dwCurStageEndCnt?: number,
  dwRewardType?: number,
  dwRubbishId?: number,
  strPgtimestamp?: number,
  strPhoneID?: string,
  strPgUUNum?: string
}

let UserName: string, index: number;
!(async () => {
  await requestAlgo();
  let cookiesArr: any = await requireConfig();
  for (let i = 0; i < cookiesArr.length; i++) {
    cookie = cookiesArr[i];
    UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)![1])
    index = i + 1;
    let {isLogin, nickName}: any = await TotalBean(cookie)
    if (!isLogin) {
      notify.sendNotify(__filename.split('/').pop(), `cookie已失效\n京东账号${index}：${nickName || UserName}`)
      continue
    }
    console.log(`\n开始【京东账号${index}】${nickName || UserName}\n`);

    try {
      await makeShareCodes();
    } catch (e) {
      console.log(e)
    }
    let token: any = getJxToken(cookie)

    // 离线
    res = await api('user/QueryUserInfo',
      '_cfd_t,bizCode,ddwTaskId,dwEnv,ptag,source,strMarkList,strPgUUNum,strPgtimestamp,strPhoneID,strShareId,strZone',
      {
        ddwTaskId: '',
        strShareId: '',
        strMarkList: 'guider_step,collect_coin_auth,guider_medal,guider_over_flag,build_food_full,build_sea_full,build_shop_full,build_fun_full,medal_guider_show,guide_guider_show,guide_receive_vistor,daily_task,guider_daily_task',
        strPgtimestamp: token.strPgtimestamp,
        strPhoneID: token.strPhoneID,
        strPgUUNum: token.strPgUUNum
      })
    console.log('离线收益:', res.Business.ddwCoin)
    await wait(2000)

    // 升级建筑
    while (1) {
      res = await api('user/QueryUserInfo',
        '_cfd_t,bizCode,ddwTaskId,dwEnv,ptag,source,strMarkList,strPgUUNum,strPgtimestamp,strPhoneID,strShareId,strZone',
        {
          ddwTaskId: '',
          strShareId: '',
          strMarkList: 'guider_step,collect_coin_auth,guider_medal,guider_over_flag,build_food_full,build_sea_full,build_shop_full,build_fun_full,medal_guider_show,guide_guider_show,guide_receive_vistor,daily_task,guider_daily_task',
          strPgtimestamp: token.strPgtimestamp,
          strPhoneID: token.strPhoneID,
          strPgUUNum: token.strPgUUNum
        })
      let wallet: number = res.ddwCoinBalance
      console.log('金币余额:', wallet)
      let build: string = '', minLV: number = 99999
      for (let b of ['food', 'fun', 'shop', 'sea']) {
        res = await api('user/GetBuildInfo', '_cfd_t,bizCode,dwEnv,dwType,ptag,source,strBuildIndex,strZone', {strBuildIndex: b})
        await wait(2000)
        if (res.dwBuildLvl <= minLV) {
          minLV = res.dwBuildLvl
          build = b
        }
      }
      console.log('最低等级建筑:', minLV, build)

      res = await api('user/GetBuildInfo', '_cfd_t,bizCode,dwEnv,dwType,ptag,source,strBuildIndex,strZone', {strBuildIndex: build})
      console.log(`${build}升级需要:`, res.ddwNextLvlCostCoin)
      await wait(2000)
      if (res.dwCanLvlUp === 1 && res.ddwNextLvlCostCoin * 2 <= wallet) {
        res = await api('user/BuildLvlUp', '_cfd_t,bizCode,ddwCostCoin,dwEnv,ptag,source,strBuildIndex,strZone', {ddwCostCoin: res.ddwNextLvlCostCoin, strBuildIndex: build})
        await wait(2000)
        if (res.iRet === 0) {
          console.log(`升级成功`)
          await wait(2000)
        }
      } else {
        break
      }
      await wait(3000)
    }

    // 珍珠
    res = await api('user/ComposeGameState', '', {dwFirst: 1})
    let strDT: string = res.strDT, strMyShareId: string = res.strMyShareId
    console.log(`已合成${res.dwCurProgress}个珍珠`)
    for (let i = 0; i < 8 - res.dwCurProgress; i++) {
      console.log('继续合成')
      let RealTmReport: number = getRandomNumberByRange(10, 20)
      console.log('本次合成需要上报：', RealTmReport)
      for (let j = 0; j < RealTmReport; j++) {
        res = await api('user/RealTmReport', '',
          {dwIdentityType: 0, strBussKey: 'composegame', strMyShareId: strMyShareId, ddwCount: 5})
        if (res.iRet === 0)
          console.log(`游戏中途上报${j + 1}：OK`)
        await wait(5000)
      }
      res = await api('user/ComposeGameAddProcess', '__t,strBT,strZone', {__t: Date.now(), strBT: strDT})
      console.log('游戏完成，已合成', res.dwCurProgress)
      console.log('游戏完成，等待3s')
      await wait(3000)
    }
    await wait(2000)

    // 珍珠领奖
    res = await api('user/ComposeGameState', '', {dwFirst: 1})
    for (let stage of res.stagelist) {
      if (res.dwCurProgress >= stage.dwCurStageEndCnt && stage.dwIsAward === 0) {
        let awardRes: any = await api('user/ComposeGameAward', '__t,dwCurStageEndCnt,strZone', {
          __t: Date.now(),
          dwCurStageEndCnt: stage.dwCurStageEndCnt
        })
        console.log('珍珠领奖：', awardRes.ddwCoin, awardRes.addMonety)
        await wait(3000)
      }
    }
    await wait(2000)

    // 签到 助力奖励
    res = await api('story/GetTakeAggrPage', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')
    let employee: any = res.Data.Employee.EmployeeList.filter((e: any) => {
      return e.dwStatus === 0
    })
    for (let emp of employee) {
      let empRes: any = await api('story/helpdraw', '_cfd_t,bizCode,dwEnv,dwUserId,ptag,source,strZone', {dwUserId: emp.dwId})
      if (empRes.iRet === 0)
        console.log('助力奖励领取成功：', empRes.Data.ddwCoin)
      await wait(1000)
    }
    if (res.Data.Sign.dwTodayStatus === 0) {
      console.log('今日未签到')
      for (let sign of res.Data.Sign.SignList) {
        if (sign.dwDayId === res.Data.Sign.dwTodayId) {
          res = await api('story/RewardSign',
            '_cfd_t,bizCode,ddwCoin,ddwMoney,dwEnv,dwPrizeLv,dwPrizeType,ptag,source,strPgUUNum,strPgtimestamp,strPhoneID,strPrizePool,strZone',
            {
              ddwCoin: sign.ddwCoin,
              ddwMoney: sign.ddwMoney,
              dwPrizeLv: sign.dwBingoLevel,
              dwPrizeType: sign.dwPrizeType,
              strPrizePool: sign.strPrizePool,
              strPgtimestamp: token.strPgtimestamp,
              strPhoneID: token.strPhoneID,
              strPgUUNum: token.strPgUUNum
            })
          if (res.iRet === 0)
            console.log('签到成功：', res.Data.ddwCoin, res.Data.ddwMoney, res.Data.strPrizePool)
          else
            console.log('签到失败：', res)
          break
        }
      }
    } else {
      console.log('今日已经签到')
    }
    await wait(2000)

    // 船来了
    res = await api('user/QueryUserInfo', '_cfd_t,bizCode,ddwTaskId,dwEnv,ptag,source,strShareId,strZone', {
      ddwTaskId: '',
      strShareId: '',
      strMarkList: 'undefined'
    })
    if (res.StoryInfo.StoryList) {
      if (res.StoryInfo.StoryList[0].Special) {
        console.log(`船来了，乘客是${res.StoryInfo.StoryList[0].Special.strName}`)
        let shipRes: any = await api('story/SpecialUserOper', '_cfd_t,bizCode,ddwTriggerDay,dwEnv,dwType,ptag,source,strStoryId,strZone,triggerType', {
          strStoryId: res.StoryInfo.StoryList[0].strStoryId,
          dwType: '2',
          triggerType: 0,
          ddwTriggerDay: res.StoryInfo.StoryList[0].ddwTriggerDay
        })
        console.log('正在下船，等待30s')
        await wait(30000)
        shipRes = await api('story/SpecialUserOper', '_cfd_t,bizCode,ddwTriggerDay,dwEnv,dwType,ptag,source,strStoryId,strZone,triggerType', {
          strStoryId: res.StoryInfo.StoryList[0].strStoryId,
          dwType: '3',
          triggerType: 0,
          ddwTriggerDay: res.StoryInfo.StoryList[0].ddwTriggerDay
        })
        if (shipRes.iRet === 0)
          console.log('船客接待成功')
        else
          console.log('船客接待失败', shipRes)
      }

      isCollector = false
      if (res.StoryInfo.StoryList[0].Collector) {
        console.log('收藏家出现')
        // TODO 背包满了再卖给收破烂的
        res = await api('story/CollectorOper', '_cfd_t,bizCode,dwEnv,ptag,source,strZone,strStoryId,dwType,ddwTriggerDay', {strStoryId: res.StoryInfo.StoryList[0].strStoryId, dwType: '2', ddwTriggerDay: res.StoryInfo.StoryList[0].ddwTriggerDay})
        console.log(res)
        await wait(1000)
        isCollector = true
        // 清空背包
        res = await api('story/querystorageroom', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')
        let bags: number[] = []
        for (let s of res.Data.Office) {
          bags.push(s.dwType)
          bags.push(s.dwCount)
        }
        await wait(1000)
        let strTypeCnt: string = ''
        for (let n = 0; n < bags.length; n++) {
          if (n % 2 === 0)
            strTypeCnt += `${bags[n]}:`
          else
            strTypeCnt += `${bags[n]}|`
        }
        if (bags.length !== 0) {
          res = await api('story/sellgoods', '_cfd_t,bizCode,dwEnv,dwSceneId,ptag,source,strTypeCnt,strZone',
            {dwSceneId: isCollector ? '2' : '1', strTypeCnt: strTypeCnt})
          console.log('卖贝壳收入:', res.Data.ddwCoin, res.Data.ddwMoney)
        }
      }
      await wait(2000)
    }

    // 清空背包
    res = await api('story/querystorageroom', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')
    let bags: number[] = []
    for (let s of res.Data.Office) {
      bags.push(s.dwType)
      bags.push(s.dwCount)
    }
    await wait(1000)
    let strTypeCnt: string = ''
    for (let n = 0; n < bags.length; n++) {
      if (n % 2 === 0)
        strTypeCnt += `${bags[n]}:`
      else
        strTypeCnt += `${bags[n]}|`
    }
    if (bags.length !== 0) {
      res = await api('story/sellgoods', '_cfd_t,bizCode,dwEnv,dwSceneId,ptag,source,strTypeCnt,strZone',
        {dwSceneId: isCollector ? '2' : '1', strTypeCnt: strTypeCnt})
      console.log('卖贝壳收入:', res.Data.ddwCoin, res.Data.ddwMoney)
    }

    // 垃圾🚮
    res = await api('story/QueryRubbishInfo', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')
    if (res.Data.StoryInfo.StoryList.length !== 0) {
      console.log('有垃圾')
      await api('story/RubbishOper', '_cfd_t,bizCode,dwEnv,dwRewardType,dwType,ptag,source,strZone', {
        dwType: '1',
        dwRewardType: 0
      })
      await wait(1000)
      for (let j = 1; j < 9; j++) {
        res = await api('story/RubbishOper', '_cfd_t,bizCode,dwEnv,dwRewardType,dwRubbishId,dwType,ptag,source,strZone', {
          dwType: '2',
          dwRewardType: 0,
          dwRubbishId: j
        })
        await wait(1500)
      }
    }
    await wait(2000)

    // 任务➡️
    let tasks: any
    tasks = await api('story/GetActTask', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')
    await wait(2000)
    for (let t of tasks.Data.TaskList) {
      if ((t.dwOrderId === 1 || t.dwOrderId === 2) && t.dwCompleteNum < t.dwTargetNum && t.strTaskName != '热气球接待20位游客') {
        console.log('开始任务:', t.strTaskName)
        res = await api('DoTask', '_cfd_t,bizCode,configExtra,dwEnv,ptag,source,strZone,taskId', {taskId: t.ddwTaskId})
        await wait(t.dwLookTime * 1000)
        if (res.ret === 0) {
          console.log('任务完成')
        } else {
          console.log('任务失败', res)
        }
      }
    }

    tasks = await api('story/GetActTask', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')
    await wait(2000)
    for (let t of tasks.Data.TaskList) {
      if (t.dwCompleteNum === t.dwTargetNum && t.dwAwardStatus === 2) {
        res = await api('Award', '_cfd_t,bizCode,configExtra,dwEnv,ptag,source,strZone,taskId', {taskId: t.ddwTaskId})
        await wait(1000)
        if (res.ret === 0) {
          console.log(`领奖成功:`, JSON.parse(res.data.prizeInfo.trim()).ddwCoin)
        } else {
          console.log('领奖失败', res)
        }
      }
    }

    tasks = await api('story/GetActTask', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')
    await wait(2000)
    if (tasks.Data.dwStatus === 3) {
      res = await api('story/ActTaskAward', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')
      if (res.ret === 0) {
        console.log('100财富任务完成')
      }
    }
    await wait(2000)

    // 导游
    res = await api('user/EmployTourGuideInfo', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')
    if (!res.TourGuideList) {
      console.log('手动雇佣4个试用导游')
    } else {
      for (let e of res.TourGuideList) {
        if (e.strBuildIndex !== 'food' && e.ddwRemainTm === 0) {
          let employ: any = await api('user/EmployTourGuide', '_cfd_t,bizCode,ddwConsumeCoin,dwEnv,dwIsFree,ptag,source,strBuildIndex,strZone',
            {ddwConsumeCoin: e.ddwCostCoin, dwIsFree: 0, strBuildIndex: e.strBuildIndex})
          if (employ.iRet === 0)
            console.log(`雇佣${e.strBuildIndex}导游成功`)
          if (employ.iRet === 2003)
            break
          await wait(1000)
        }
      }
    }
    await wait(2000)

    // 任务⬇️
    tasks = await mainTask('GetUserTaskStatusList', '_cfd_t,bizCode,dwEnv,ptag,source,strZone,taskId', {taskId: 0});
    for (let t of tasks.data.userTaskStatusList) {
      if (t.dateType === 2) {
        // 每日任务
        if (t.awardStatus === 2 && t.completedTimes === t.targetTimes) {
          console.log(1, t.taskName)
          res = await mainTask('Award', '_cfd_t,bizCode,dwEnv,ptag,source,strZone,taskId', {taskId: t.taskId})
          console.log(res)
          if (res.ret === 0) {
            console.log(`${t.taskName}领奖成功:`, res.data.prizeInfo)
          }
          await wait(2000)
        } else if (t.awardStatus === 2 && t.completedTimes < t.targetTimes && ([1, 2, 3, 4].includes(t.orderId))) {
          console.log('做任务:', t.taskId, t.taskName, t.completedTimes, t.targetTimes)
          res = await mainTask('DoTask', '_cfd_t,bizCode,configExtra,dwEnv,ptag,source,strZone,taskId', {
            taskId: t.taskId,
            configExtra: ''
          })
          console.log('做任务:', res)
          await wait(5000)
        }
      }
    }
    await wait(2000)

    for (let b of ['fun', 'shop', 'sea', 'food']) {
      res = await api('user/CollectCoin', '_cfd_t,bizCode,dwEnv,dwType,ptag,source,strBuildIndex,strZone', {strBuildIndex: b, dwType: '1'})
      console.log(`${b}收金币:`, res.ddwCoin)
      await wait(1000)
    }
  }

  // 获取随机助力码
  if (HELP_HW === 'true') {
    try {
      let {data} = await axios.get("https://api.sharecode.ga/api/HW_CODES", {timeout: 10000})
      shareCodes = [
        ...shareCodes,
        ...data.jxcfd
      ]
      console.log('获取HelloWorld助力码成功')
    } catch (e) {
      console.log('获取HelloWorld助力码出错')
    }
  }
  if (HELP_POOL === 'true') {
    try {
      let {data} = await axios.get('https://api.sharecode.ga/api/jxcfd/20', {timeout: 10000})
      console.log('获取到20个随机助力码:', data.data)
      shareCodes = [...shareCodes, ...data.data]
    } catch (e) {
      console.log('获取助力池失败')
    }
  } else {
    console.log('你的设置是不帮助助力池')
  }
  for (let i = 0; i < cookiesArr.length; i++) {
    for (let j = 0; j < shareCodes.length; j++) {
      cookie = cookiesArr[i]
      console.log(`账号${i + 1}去助力:`, shareCodes[j])
      res = await api('story/helpbystage', '_cfd_t,bizCode,dwEnv,ptag,source,strShareId,strZone', {strShareId: shareCodes[j]})
      console.log('助力:', res)
      if (res.iRet === 2232 || res.sErrMsg === '今日助力次数达到上限，明天再来帮忙吧~') {
        break
      }
      await wait(3000)
    }
  }
})()

function api(fn: string, stk: string, params: Params = {}) {
  return new Promise(async resolve => {
    let url = `https://m.jingxi.com/jxbfd/${fn}?strZone=jxbfd&bizCode=jxbfd&source=jxbfd&dwEnv=7&_cfd_t=${Date.now()}&ptag=&_ste=1&_=${Date.now()}&sceneval=2&_stk=${encodeURIComponent(stk)}`
    if (['GetUserTaskStatusList', 'Award', 'DoTask'].includes(fn)) {
      url = `https://m.jingxi.com/newtasksys/newtasksys_front/${fn}?strZone=jxbfd&bizCode=jxbfddch&source=jxbfd&dwEnv=7&_cfd_t=${Date.now()}&ptag=&_stk=${encodeURIComponent(stk)}&_ste=1&_=${Date.now()}&sceneval=2`
    }
    if (Object.keys(params).length !== 0) {
      let key: (keyof Params)
      for (key in params) {
        if (params.hasOwnProperty(key))
          url += `&${key}=${params[key]}`
      }
    }
    url += '&h5st=' + decrypt(stk, url)
    let {data} = await axios.get(url, {
      headers: {
        'Host': 'm.jingxi.com',
        'Referer': 'https://st.jingxi.com/',
        'User-Agent': USER_AGENT,
        'Cookie': cookie
      }
    })
    resolve(data)
  })
}

function mainTask(fn: string, stk: string, params: Params = {}) {
  return new Promise(async resolve => {
    let url = `https://m.jingxi.com/newtasksys/newtasksys_front/${fn}?strZone=jxbfd&bizCode=jxbfd&source=jxbfd&dwEnv=7&_cfd_t=${Date.now()}&ptag=&_stk=${encodeURIComponent(stk)}&_ste=1&_=${Date.now()}&sceneval=2`
    if (Object.keys(params).length !== 0) {
      let key: (keyof Params)
      for (key in params) {
        if (params.hasOwnProperty(key))
          url += `&${key}=${params[key]}`
      }
    }
    url += '&h5st=' + decrypt(stk, url)
    let {data} = await axios.get(url, {
      headers: {
        'X-Requested-With': 'com.jd.pingou',
        'Referer': 'https://st.jingxi.com/',
        'Host': 'm.jingxi.com',
        'User-Agent': USER_AGENT,
        'Cookie': cookie
      }
    })
    resolve(data)
  })
}

function makeShareCodes() {
  return new Promise<void>(async (resolve, reject) => {
    let bean: string = await getBeanShareCode(cookie)
    let farm: string = await getFarmShareCode(cookie)
    res = await api('user/QueryUserInfo', '_cfd_t,bizCode,ddwTaskId,dwEnv,ptag,source,strShareId,strZone', {
      ddwTaskId: '',
      strShareId: '',
      strMarkList: 'undefined'
    })
    console.log('助力码:', res.strMyShareId)
    shareCodes.push(res.strMyShareId)
    let pin: string = cookie.match(/pt_pin=([^;]*)/)![1]
    pin = Md5.hashStr(pin)
    axios.get(`https://api.sharecode.ga/api/autoInsert?db=jxcfd&code=${res.strMyShareId}&bean=${bean}&farm=${farm}&pin=${pin}`, {timeout: 10000})
      .then(res => {
        if (res.data.code === 200)
          console.log('已自动提交助力码')
        else
          console.log('提交失败！已提交farm和bean的cookie才可提交cfd')
        resolve()
      })
      .catch((e) => {
        reject('访问助力池出错')
      })
  })
}