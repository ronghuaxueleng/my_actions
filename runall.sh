#!/usr/bin/env bash
## Author: SuperManito
## Modified: 2021-09-11

ShellDir=${JD_DIR}
. $ShellDir/share.sh

function ChooseRunMod() {
    local Input1 Input2
    echo -e ''
    echo -e '1)   依次执行'
    echo -e '2)   迅速执行'
    echo -e '3)   指定执行'
    while true; do
        read -p "$(echo -e '\n\033[34m└ 请选择执行类型 [ 1-3 ]：\033[0m')" Input1
        case $Input1 in
        1)
            RunMode="now"
            break
            ;;
        2)
            RunMode="rapid"
            break
            ;;
        3)
            while true; do
                read -p "$(echo -e '\n\033[34m└ 请输入要执行的账号（序号）：\033[0m')" Input2
                case $Input2 in
                [1-9] | [1-9][0-9] | [1-9][0-9][0-9])
                    Import_Config_Not_Check
                    local Tmp=Cookie$Input2
                    if [[ -z ${!Tmp} ]]; then
                        echo -e "\n$ERROR 账号不存在！"
                    else
                        RunMode=$Input2
                        break
                    fi
                    ;;
                *)
                    echo -e "\n$ERROR 输入错误！"
                    ;;
                esac
            done
            break
            ;;
        esac
        echo -e "\n$ERROR 输入错误！"
    done
}

function Main() {
    local Input3 Input4 ScriptType Tmp1 Tmp2
    local FileTmp=$ShellDir/.runall_tmp.sh
    local ShieldingKeywords="AGENTS|Cookie|cookie|Token|ShareCodes|sendNotify|JDJR|validate|ZooFaker|MovementFaker|tencentscf|api_test|app.|main.|jd_update.js|jd_env_copy.js|index.js|.json|ql.js|jdEnv"
    case $Arch in
    armv7l | armv6l)
        ScriptType=".js\b"
        ;;
    *)
        if [ -x /usr/bin/python3 ]; then
            Tmp1="|\.py\b"
        else
            Tmp1=""
        fi
        if [ -x /usr/bin/ts-node ]; then
            Tmp2="|\.ts\b"
        else
            Tmp2=""
        fi
        ScriptType="\.js\b${Tmp1}${Tmp2}"
        ;;
    esac
    [ -f $FileTmp ] && rm -rf $FileTmp

    echo -e ''
    echo -e '1)   Scripts 仓库的脚本'
    echo -e '2)   Scripts 目录下的所有脚本'
    echo -e '3)   指定路径下的所有脚本（非递归）'
    while true; do
        read -p "$(echo -e '\n\033[34m└ 请选择需要执行的脚本范围 [ 1-3 ]：\033[0m')" Input3
        case $Input3 in
        1)
            if [[ -s $ListTaskUser ]]; then
                cat $ListTaskUser >$FileTmp
            else
                echo "\n$ERROR 请先更新！"
            fi
            break
            ;;
        2)
            ls $ScriptsDir | egrep "${ScriptType}" | grep -Ev "/|${ShieldingKeywords}" | perl -pe "{s|\.js||; s|\.py||; s|\.ts||}" | sort -u >$FileTmp
            break
            ;;
        3)
            if [[ ! -z ${OwnRepoUrl1} ]]; then
                echo -e "\n$ScriptsDir"
                ls $OwnDir | egrep -v "node_modules|package" | perl -pe "{s|^|$OwnDir/|g}"
            fi
            while true; do
                read -p "$(echo -e '\n\033[34m└ 请输入路径：\033[0m')" Input4
                local AbsolutePath=$(echo "$Input4" | perl -pe "{s|/jd/||; s|^*|$ShellDir/|;}")
                if [ ! -z $Input4 ] && [ -d $AbsolutePath ]; then
                    break
                else
                    echo -e "\n$ERROR 目录不存在或输入有误！"
                fi
            done
            ls $AbsolutePath | egrep "${ScriptType}" | grep -Ev "/|${ShieldingKeywords}" | perl -pe "{s|^|$AbsolutePath/|g; s|//|/|;}" | sort -u >$FileTmp
            [ ! -s $FileTmp ] && rm -rf $FileTmp
            break
            ;;
        esac
        echo -e "\n$ERROR 输入错误！"
    done
    if [ -f $FileTmp ]; then
        ## 去除不适合在此执行的活动脚本
        local ExcludeScripts="bean_change joy_reward blueCoin jd_delCoupon jd_family jd_crazy_joy jd_try jd_cfdtx"
        for del in ${ExcludeScripts}; do
            sed -i "/$del/d" $FileTmp
        done

        ## 补全命令
        sed -i "s/^/$TaskCmd &/g" $FileTmp
        sed -i "s/$/& $RunMode/g" $FileTmp
        sed -i '1i\#!/bin/env bash' $FileTmp

        echo -e "\n[\033[32mTips\033[0m] Ctrl + Z 跳过执行当前脚本，Ctrl + C 停止执行，倒计时 3 秒后开始...\n"
        sleep 1 && echo -e "3..."
        sleep 1 && echo -e "2.."
        sleep 1 && echo -e "1."
        sleep 1 && echo -e ''
        echo -e "[$(date "+%Y-%m-%d %H:%M:%S")] 脚本执行开始\n"
        . $FileTmp
        echo -e "\n[$(date "+%Y-%m-%d %H:%M:%S")] 脚本执行结束\n"
        rm -rf $FileTmp
    else
        echo -e "\n$ERROR 该路径下未检测到任何脚本，请检查原因后重试！\n"
    fi
}

ChooseRunMod
Main
