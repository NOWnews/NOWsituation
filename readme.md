## ABOUT

這個專案底下有分成兩個部分：

- bin
    - server: pusher 結合 crawler server (port: 5000)
    - web: 前端 Vue 網站 (port: 8080)

## NOTICE

1. 為了避免開發資料與線上資料混用影響，

有透過 `./config.js` 切換頻道的前綴，

如果想要讓開發模式時使用實際資料，

記得將 `puseher.channelPrefix` 的 'dev.' 換成 ''。

ex: `channelPrefix: isProd ? '' : '',`

2. 版本最低限制
```
node: v7.6.0 (要支援 async)
npm: 4.1.2
```

## COMMAND LINE

### How To Start For Dev Mode

```
npm run dev:server
# for web
npm start
```

### How To Start For Prod Mode

```
npm run prod:server

# for web
npm run build
npm run prod:web
```

### How To Run Test For Data Source

```
npm test
```

## STRUCTURE

```
.
├── /bin/                       # 啟動檔
├── /server/                    # server 的相關程式碼
│   ├── /admin/                 # 取得 admin api 表單相關資料 
│   ├── /fans/                  # 取得 weibo 與 fb 相關粉絲人數
│   ├── /googleApis/            # 取得 GA 資料，可分為即時與統計
│   ├── /news/                  # 取得各家新聞頭條
│   ├── /rank/                  # 取得 Alexa 排名資料
│   ├── /index.js               #
│   ├── /initData.js            # admin 表單初始化儲存資料
│   └── /pusher.js              # 串接 pusher 並取得各來源資料
│
├── /test/                      # 針對各來源的 spec
├── /web/                       # Vue 的相關網站程式碼
│   ├── /assets                 # 靜態檔案
│   │   ├── /image/             
│   │   ├── /style/             
│   │   └── /video/   
│   │
│   ├── /components             # 各頁面的元件
│   │   ├── /about/             # 業績、佈告欄頁面元件
│   │   └── /main/              # 首頁元件
│   │
│   ├── /lib/                   # 共用函示
│   ├── /views/                 # 頁面：佈告欄、表單、登入、首頁
│   └── /main.js                # Vue router 設定
│
├── /.babelrc                   # 
├── /.gitignore                 # 
├── /CHANGELOG.md               # 程式版本 Log 
├── /config.js                  # 設定檔
├── /document.md                # admin api 文件
├── /global.js                  # 全域變數
├── /index.html                 # Vue SPA 基底頁面
├── /manifest.json              #
├── /nodemon.json               # 
├── /package.json               # 
├── /readme.md                  #
├── /server.js                  # server 機器相關設定
├── /web.js                     # web 機器相關設定
└── /webpack.config.js          # webpack 相關設定
```

## WEB PAGE

1. 首頁 * 魔術數字
http://10.20.200.190:8080/
*** PS 魔術數字的設定在 /lib/filter.js ***

2. 首頁（真實數字）
http://10.20.200.190:8080/truth

3. 業績、佈告欄
http://10.20.200.190:8080/about

4. 業績、佈告欄表單頁面
http://10.20.200.190:8080/form
