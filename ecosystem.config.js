module.exports = {
  apps : [{
    name        : "Server",
    script      : "./bin/server.js",
    watch       : true,
    env: {
      "NODE_ENV": "production",
    },
    env_production : {
       "NODE_ENV": "production"
    }
  },{
    name        : "Web",
    script      : "./bin/web.js",
    watch       : true,
    env: {
      "NODE_ENV": "production",
    },
    env_production : {
       "NODE_ENV": "production"
    }
  }]
}
