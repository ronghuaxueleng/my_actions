#!/usr/bin/env bash

. /jd/config/config.sh

## 用户数量UserSum
function Count_UserSum() {
    for ((i = 1; i <= 35; i++)); do
        Tmp=Cookie$i
        CookieTmp=${!Tmp}
        [[ ${CookieTmp} ]] && UserSum=$i || break
    done
}

## 组合Cookie和互助码子程序
function Combin_Sub() {
    CombinAll=""
    for ((i = 1; i <= ${UserSum}; i++)); do
        for num in ${TempBlockCookie}; do
            if [[ $i -eq $num ]]; then
                continue 2
            fi
        done
        Tmp1=$1$i
        Tmp2=${!Tmp1}
        case $# in
        1)
            CombinAll="${CombinAll}&${Tmp2}"
            ;;
        2)
            CombinAll="${CombinAll}&${Tmp2}@$2"
            ;;
        3)
            if [ $(($i % 2)) -eq 1 ]; then
                CombinAll="${CombinAll}&${Tmp2}@$2"
            else
                CombinAll="${CombinAll}&${Tmp2}@$3"
            fi
            ;;
        4)
            case $(($i % 3)) in
            1)
                CombinAll="${CombinAll}&${Tmp2}@$2"
                ;;
            2)
                CombinAll="${CombinAll}&${Tmp2}@$3"
                ;;
            0)
                CombinAll="${CombinAll}&${Tmp2}@$4"
                ;;
            esac
            ;;
        esac
    done
    echo ${CombinAll} | perl -pe "{s|^&||; s|^@+||; s|&@|&|g; s|@+|@|g}"
}


JD_COOKIE=$(Count_UserSum && Combin_Sub Cookie)
# echo ${JD_COOKIE}
# sed -i -E 's/(JD_COOKIE\s?=\s?").+(")/\1$JD_COOKIE\2/g' OpenCardConfig.ini

perl -i -pe "s|(JD_COOKIE\s?=\s?').*(')|\1${JD_COOKIE}\2|" OpenCardConfig.ini
/usr/bin/python3 /jd/OpenCard/jd_OpenCard.py