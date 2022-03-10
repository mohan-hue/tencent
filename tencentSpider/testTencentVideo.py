# -*- coding: utf-8 -*-
import execjs
import re
import requests
import json
import pprint

HEADERS = {
    'accept': 'application/json, text/javascript, */*; q=0.01',
    'accept-encoding': 'gzip, deflate, br',
    'accept-language': 'zh-CN,zh;q=0.9,ja;q=0.8',
    'content-type': 'text/plain',
    'origin': 'https://v.qq.com',
    'referer': 'https://v.qq.com/',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': "Windows",
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
    'User-Agent': 'Mozilla/5.0 (X11; U; Linux x86_64; zh-CN; rv:1.9.2.10) Gecko/20100922 Ubuntu/10.10 (maverick) Firefox/3.6.10'
}

HEADERS_USE = {
    'User-Agent': 'Mozilla/5.0 (X11; U; Linux x86_64; zh-CN; rv:1.9.2.10) Gecko/20100922 Ubuntu/10.10 (maverick) Firefox/3.6.10'
}

with open("tencentJs1.js", "r", encoding="gbk") as f:
    js_code = f.read()

result1 = requests.get('https://v.qq.com/channel/choice', headers=HEADERS_USE)
# pprint.pprint(result)
# print(result1.status_code, result1.encoding)
# html = result1.text.encode("ISO-8859-1", 'ignore').decode("ISO-8859-1", 'ignore')
html = result1.content.decode("utf-8")
# print(html)
indexUrlList = re.findall('<a href="(//v.qq.com/channel/.*?)"', html, re.S)
# print(indexUrlList)
for index in range(0, len(indexUrlList)):
    indexUrlList[index] = 'https:' + indexUrlList[index]
# print(indexUrlList)
twoResponse = requests.get(indexUrlList[4], headers=HEADERS_USE)
towHtml = twoResponse.content.decode("utf-8")
# print(towHtml)
cartoonList = re.findall('<a href="(https://v.qq.com/x/cover/.*?.html)', towHtml, re.S)
# 页面中可能存在重复url，需要去重
print(list(set(cartoonList)), len(list(set(cartoonList))))
threeResponse = requests.get(cartoonList[0], headers=HEADERS_USE)
print(threeResponse.status_code, threeResponse.encoding)
threeHtml = threeResponse.content.decode("utf-8")
# print(threeHtml)
vidList = re.findall('var COVER_INFO = (.*?)var COLUMN_INFO', threeHtml, re.S)
vidList = json.loads(vidList[0])
# 这是视频vid
pprint.pprint(vidList['nomal_ids'])  # 还可以查看是否是VIP视频
# 这是视频名称
print(vidList['title'])
'[{"F":2,"V":"w0034a9x5wj"},{"F":7,"V":"i0034s3sd9z"}]'
videoUrl = cartoonList[0][0:-5] + '/' + vidList['nomal_ids'][0]['V'] + '.html'
print(videoUrl)

# ------------以下是获取视频的ckey、guid

# target_url = "http://v.qq.com/txp/iframe/player.html?origin=https%3A%2F%2Fmp.weixin.qq.com&chid=17&vid=s3306hychob&autoplay=false&full=true&show1080p=false&isDebugIframe=false"
'guid, flowid, platform, sdtfrom, appVer, tm, vid, ckey'
# target_url = "https://v.qq.com/x/cover/tfc35o92twfe3vi/r0034cy0nt6.html"
target_url = videoUrl
vinfoparam = 'spsrt=1&charge=0&defaultfmt=auto&otype=ojson&guid={}&flowid={}&platform={}&sdtfrom={}&defnpayver=1&appVer={}&host=v.qq.com&refer=v.qq.com&sphttps=1&tm={}&spwm=4&vid={}&defn=&fhdswitch=0&show1080p=1&isHLS=1&dtype=3&sphls=2&spgzip=1&dlver=2&drm=32&hdcp=1&spau=1&spaudio=15&defsrc=1&encryptVer=9.1&cKey={}'
data = {}
data["buid"] = "vinfoad"
guid = execjs.compile(js_code).call('createGUID')
# 区分腾讯视频还是公众号视频
if "mp.weixin.qq.com" in target_url:
    vid = re.compile(r"&vid=(.*?)&").findall(target_url)[0]  # ?非贪婪
    plateform = "70201"
    flowid = guid + '_' + plateform
    sdtfrom = "v1104"
    appVer = "3.4.40"
    tm = execjs.compile(js_code).call('getTime')
    ckey = execjs.compile(js_code).call('getCKey', plateform, appVer, vid)
else:
    vid = target_url.split("/")[-1].split(".")[0]
    plateform = "10201"
    flowid = guid + '_' + plateform
    sdtfrom = "v1010"
    appVer = "3.5.57"
    tm = execjs.compile(js_code).call('getTime')
    ckey = execjs.compile(js_code).call('getCKey', plateform, appVer, vid)

data["vinfoparam"] = vinfoparam.format(guid, flowid, plateform, sdtfrom, appVer, tm, vid, ckey)
'url, url, appver, vid, flowid, guid, '
adparam = "pf=in&ad_type=LD%7CKB%7CPVL&pf_ex=pc&url={}&refer={}&ty=web&plugin=1.0.0&v={}&vid={}&pt=&flowid={}&vptag=www_baidu_com&pu=0&chid=0&adaptor=2&dtype=1&live=0&resp_type=json&guid={}&req_type=1&from=0&appversion=1.0.173&platform=10201&tpid=3"
data['adparam'] = adparam.format(target_url, target_url, appVer, vid, flowid, guid)
print(data["vinfoparam"])
print('-' * 200)
print(data["adparam"])
result = requests.post('https://vd.l.qq.com/proxyhttp', data=json.dumps(data), headers=HEADERS)
import subprocess

if result.json().get("errCode") == 0:
    # 这是获取m3u8文件
    url = json.loads(result.json()['vinfo'])["vl"]["vi"][0]["ul"]["ui"][0]['url']
    print('看看', result.text)
    cmd = f'E:/ffmpeg/ffmpeg/bin/ffmpeg.exe -i {url} -acodec copy -vcodec copy -absf aac_adtstoasc video.mp4'
    subprocess.Popen(cmd, shell=True)

"""
ffmpeg在线合成.ts格式的m3u8视频文件
                (这段为需要合成的m3u8视频地址, 特别强调，有参数的.m3u8链接地址需要使用双引号)
ffmpeg -i https://iqiyi.cdn9-okzy.com/20200817/14102_affc3951/index.m3u8 -acodec copy -vcodec copy -absf aac_adtstoasc video.mp4

url地址: https://ltssjy.qq.com/uwMROfz2r5zAoaQXGdGnC2df644E7D3uP8M8pmtgwsRK9nEL/mDu3eYxyz2ONn1FsOhS35rC82dpOo5jlTRZpNgfj2Jypqky-F1FUrhmcC3n-ziCNOq0eRPYmXoSoP0T5wChTLb9cTJWUmY6lPP7V0GhXjQciKFJMrUJdN9aB1uarUOh5KQHiiKZxtGjM3w47KJ6ExItIaZoGsGmt2LqQpMAMeetHFMANylj3Ig/r0034cy0nt6.321002.ts.m3u8?ver=4


腾讯集数信息在源代码的COVER_INFO这个变量里面

https://v.qq.com/x/cover/  这是视频播放进入页面前面部分，后面只需加个vid.html

//v.qq.com/channel/  这个是频道选择，有动漫、电视、电影等等
"""
