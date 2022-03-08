#!/bin/bash

phones=(${phone//@/ })
passwords=(${password//@/ })
api_ids=(${api_id//@/ })
api_hashs=(${api_hash//@/ })
sharedCodesJsonPaths=(${sharedCodesJsonPath//@/ })

for ((i = 0; i < ${#phones[@]}; i++)); do
    /usr/local/bin/python3 /jd/shareCode.py ${phones[i]} ${passwords[i]} ${api_ids[i]} ${api_hashs[i]} ${sharedCodesJsonPaths[i]} '@JD_ShareCode_Bot' 'true'
done

# /usr/local/bin/python3 /jd/verificationShareCodeUrl.py ${sharedCodesJsonPaths[0]}