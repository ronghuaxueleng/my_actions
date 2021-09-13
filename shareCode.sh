#!/bin/bash

phones=(${phone//@/ })
passwords=(${password//@/ })
api_ids=(${api_id//@/ })
api_hashs=(${api_hash//@/ })
sharedCodesJsonPaths=(${sharedCodesJsonPath//@/ })

for ((i = 0; i < ${#phones[@]}; i++)); do
    /usr/bin/python3 /jd/shareCode.py ${phones[i]} ${passwords[i]} ${api_ids[i]} ${api_hashs[i]} ${sharedCodesJsonPaths[i]}
done

# /usr/bin/python3 /jd/verificationShareCodeUrl.py ${sharedCodesJsonPaths[0]}