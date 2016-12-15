## About

這個專案底下有分成三個部分：

- bin
    - admin: admin 設定的資料儲存 (port: 3000)
    - server: pusher 的 server (port: 5000)
    - web: 前端網站 (port: 8080)

## COMMAND LINE

### HOW TO START FOR DEV MODE

```
npm run admin
npm run dev:server
# for web
npm start
```

### HOW TO START FOR PROD MODE

```
npm run admin
npm run prod:server

# for web
npm run build
npm prod:start
```

### HOＷ TO RUN TEST FOR SERVER

```
npm test
```

## NOTE

為了避免開發資料與線上資料混用影響，

有透過 `./config.js` 切換頻道的前綴，

如果想要讓開發模式時使用實際資料，

記得將 `puseher.channelPrefix` 的 'dev.' 換成 ''。
