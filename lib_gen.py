# -*- coding: utf-8 -*-
"""
*/10 * * * * lib_gen.py
"""
import requests
import json


def gen(token):
    url = "https://liblib-api.vibrou.com/gateway/sd-api/generate/image"

    payload = json.dumps({
        "checkpointId": 125488,
        "generateType": 1,
        "frontCustomerReq": {
            "frontId": "63a9fa37-fa50-4525-a263-25026592cdb3",
            "windowId": "",
            "tabType": "txt2img",
            "conAndSegAndGen": "gen"
        },
        "text2img": {
            "prompt": ",1girl,chinese new year,photorealistic,photography,jewelry,indoors,red sweater,simple background,tassel,lantern,make up,Chinese fan,hair ornament,dress ",
            "negativePrompt": "text,chinese red packet,leg,(worst quality, low quality:2), monochrome, zombie,overexposure, watermark,text,bad anatomy,bad hand,extra hands,extra fingers,too many fingers,fused fingers,bad arm,distorted arm,extra arms,fused arms,extra legs,missing leg,disembodied leg,extra nipples, detached arm, liquid hand,inverted hand,disembodied limb, small breasts, loli, oversized head,extra body,completely nude,",
            "extraNetwork": "",
            "samplingMethod": 24,
            "samplingStep": 30,
            "width": 512,
            "height": 768,
            "imgCount": 1,
            "cfgScale": 5,
            "seed": -1,
            "seedExtra": 0,
            "hiResFix": 0,
            "restoreFaces": 0,
            "tiling": 0,
            "clipSkip": 2
        },
        "adetailerEnable": 0,
        "adetailerList": [
            {
                "adetailerModelVerId": 0,
                "prompt": "",
                "negativePrompt": "",
                "detection": {
                    "threshold": 0.3,
                    "maskMinAreaRatio": 0,
                    "maskMaxAreaRatio": 1
                },
                "maskPreprocessing": {
                    "maskXOffset": 0,
                    "maskYOffset": 0,
                    "maskScaling": 4,
                    "maskMergeMode": 1
                },
                "inpainting": {
                    "maskBlur": 4,
                    "denoisingStrength": 0.4,
                    "onlyMasked": True,
                    "onlyMaskedPaddingPixels": 32,
                    "separateWH": False,
                    "separateSteps": True,
                    "adetailerSteps": 25,
                    "separateCFGScale": False,
                    "separateNoiseMultiplier": False,
                    "restoreFacesAfterADetailer": False
                }
            }
        ],
        "additionalNetwork": [
            {
                "modelId": 323847,
                "type": 0,
                "modelName": "搞笑历史插画",
                "modelVersionName": "v1.0",
                "weight": 0.8
            },
            {
                "modelId": 914436,
                "type": 0,
                "modelName": "美女-欧美纯欲风沙滩露背基础百搭低胸露脐纯色露背性感吊带背心",
                "modelVersionName": "v2",
                "weight": 0.8
            },
            {
                "modelId": 912732,
                "type": 0,
                "modelName": "美女-水手服款裙子？",
                "modelVersionName": "v1",
                "weight": 0.8
            },
            {
                "modelId": 911010,
                "type": 0,
                "modelName": "真实系，亚洲美女脸型",
                "modelVersionName": "v1",
                "weight": 0.8
            },
            {
                "modelId": 881106,
                "type": 0,
                "modelName": "美女脸型-乐乐",
                "modelVersionName": "v1",
                "weight": 0.8
            },
            {
                "modelId": 848395,
                "type": 0,
                "modelName": "美女商务装深V长袖衬衫",
                "modelVersionName": "v1",
                "weight": 0.8
            },
            {
                "modelId": 834677,
                "type": 0,
                "modelName": "美女V领低胸紧身上衣",
                "modelVersionName": "v1",
                "weight": 0.8
            },
            {
                "modelId": 834652,
                "type": 0,
                "modelName": "#美女#性感拉链连帽长袖短款上衣",
                "modelVersionName": "v1",
                "weight": 0.8
            },
            {
                "modelId": 834610,
                "type": 0,
                "modelName": "美女T恤上衣短袖",
                "modelVersionName": "v1",
                "weight": 0.8
            },
            {
                "modelId": 807445,
                "type": 0,
                "modelName": "真实系-亚洲美女脸型-悦悦",
                "modelVersionName": "v1",
                "weight": 0.8
            },
            {
                "modelId": 806574,
                "type": 0,
                "modelName": "裙子配美女",
                "modelVersionName": "v1",
                "weight": 0.8
            },
            {
                "modelId": 794683,
                "type": 0,
                "modelName": "美女性感吊带背心",
                "modelVersionName": "v1",
                "weight": 0.8
            }
        ],
        "taskQueuePriority": 0
    })
    headers = {
        'authority': 'liblib-api.vibrou.com',
        'accept': 'application/json, text/plain, */*',
        'accept-language': 'zh-CN,zh;q=0.9',
        'content-type': 'application/json',
        'dnt': '1',
        'origin': 'https://www.liblib.art',
        'referer': 'https://www.liblib.art/v4/editor',
        'sec-ch-ua': '"Chromium";v="119", "Not?A_Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
        'token': token,
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.6045.160 Safari/537.36'
    }

    response = requests.request("POST", url, headers=headers, data=payload)

    print(response.text)


if __name__ == '__main__':
    tokens = [
        'd1894681b7c5438b9051b840431e9b59',
        '3cc0cddb72874db49eb02f60d81fbf31',
        '5035e42609394bdfa3ddaee8b88a1b78',
        '66149bee12304248beb571d1c0d9e553',
        '5dfe53b85ed947a6a92586182768a84e'
    ]
    for token in tokens:
        try:
            gen(token)
        except Exception as e:
            print(e)
