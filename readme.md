## About

這個專案底下有分成三個部分：

- bin
    - server: pusher 的 server (port: 5000)
    - web: 前端網站 (port: 8080)

## NOTIC

1. 為了避免開發資料與線上資料混用影響，

有透過 `./config.js` 切換頻道的前綴，

如果想要讓開發模式時使用實際資料，

記得將 `puseher.channelPrefix` 的 'dev.' 換成 ''。


2. 版本
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


