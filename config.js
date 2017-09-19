const isProd = process.env.NODE_ENV === 'production';
module.exports = {
    pusher: {
        appId: '250247',
        key: '6a300271d86955a4fbe7',
        secret: 'b30f63250e9549698531',
        encrypted: true,
        channelPrefix: isProd ? '' : '',
    },
    server: {
        google: {
            id: 'ga:106152872',
            type: 'service_account',
            projectId: 'nownewsga-1244',
            privateKeyId: 'd78799ae8d82e6f8a734e1bdd93a64138cb5365a',
            privateKey: '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCMQXUE5/uwwoNm\nyKKFwvgxJNUUDUaCiDMZfxR7ebAE9WzmslLVNnMyJDbamxCJGcNBUva9SLRcVnOD\nMpFhWN4fbqo0Y7rnUwDFwpV9fpYg+IpHNsB2hvdx0CGfvSlgXQkItzVUciL/ALQy\nF+1ukDfEveJ/b38sQY/xnrAI8xVbUGLr1N5NLlPNlnHL9yuVuDTVnjxWePyiJ+36\nTJK9IYj7xTxdhENpseslPDxrgxDuay6npKxNfSb45nnTu71EiVQIX7ZrG6NRCNNr\nuQktoIqd8oN8lU7iS0ikcwYuQAcmsphjcCqZWsmNapCC1os+Qsrw7R7cNGvuPYNc\nX9lgASP5AgMBAAECggEAFrIc6n9TliXTt5Ut33FOUj2AkW8YgtThV/XdbaGiXxsL\n1UTz7HaUK3/6tGM1SMo3c2GmdbjHHs4KgSd0qQkFYJa6yiF9RCOFU3sKT7VlO86c\nKavtdwCeF/ezCTNF98b2SEfFRHX3vcXyYszGagbCT37eoPp83L97OIESQVB8mzrn\n4hu0QS2/2gUp0I+ESjFjZvlswsRib7VWqB69XU2DxAOKbVJZ5WAr9HgU28sTl9+Q\nMFEOM9INQj4gz8vTwnnYRabu5dnBz6uhNJswnFAlSOvL0Is+Ubwnf+bw54mIwOML\nbYmoSYlJzaFlJWWR9TRxwpb4W8S2lbyeqf2apF3hgQKBgQDasN2OP+EVVMqqEGOx\neURKZayvnBv/A79+yfZhTVpTOCDfu6br4ePlwHyeXF7AdNcCdRNr5/BkyrqxOrNk\nVf/H5JSLvei5p4cITPbnuUo7ekvpuzE2Rt8QzUXvcp4Rfnrt2/wEsLKZeTrJGT+g\n8621E1OMupFVZVBLyGIBqIRn8QKBgQCkLwC35zWcVP8nNhm4fqkIVmJJsBOHdBKV\n0z63v4OX7VLbJqljaesZ67xsT3/dygIN7e7HoSTur8RYIids/ARHbTigVoWlrMFU\n7Vv3gwtE2qzJZhHU8chaaDIpq8MrKhGpsb6AjFVbVsI9McL2GdvpZlU1d0hQlGNS\ngMtNo6HEiQKBgQCF0eqRTCeIrQ0iycqnZARU3iiwgP9kqj94707ztajK+bKsFaEM\nAHs7MPFQ2kckz5puJ4QN6KzikGdzYe86O6G8CPSZGkmZqZjojGgd3fU9thVT3jc7\n9lwzZNkhr+pn3BSPDqkFmbaAUX2WZvvXmqU2A7CBkfyy278p0GGgkCUNkQKBgQCN\nUEd2AnOKUz4qKc6Jlbs3ieKfOgYVGDrG6kOZNCW3pnUiW2yAPLI2ZUiQkPylkTGj\ne5+CA5keN/rvQLZef6vPLpsGpnHx33en+YSmzQvt/6moz0mZ12FzLyu94jDh/hul\ny28EhcUSEOKueR4tZKR7h7DfjAOaF55FbMWP1b9uwQKBgGnZs7L+K5sBi9xuLUIH\np7XNsgR8z0TIwFJmLtK9FYaCR8PTXVeQS+2JBrzxKW3DKuMkdEfbvrH0VQQUMw0I\nbwvK4+U+/T9mBEevkRCTdYoPCDlik8PpkfTjHl6xxJ9EtVvSv8r46yoNAVgaBQLD\nN4o/tJdyfUP5bq9OP4aeb4M/\n-----END PRIVATE KEY-----\n',
            clientEmail: 'nownews-ga@nownewsga-1244.iam.gserviceaccount.com',
            clientId: '111246974837463261767',
            authUri: 'https://accounts.google.com/o/oauth2/auth',
            tokenUri: 'https://accounts.google.com/o/oauth2/token',
            authProviderX509CertUrl: 'https://www.googleapis.com/oauth2/v1/certs',
            clientX509CertUrl: 'https://www.googleapis.com/robot/v1/metadata/x509/nownews-ga%40nownewsga-1244.iam.gserviceaccount.com'
        },
    },
    web: {
        apiServer: isProd ? 'http://10.20.200.190:5000' : 'http://127.0.0.1:5000',
        mapsApiKey: 'AIzaSyDw2LzthzsRls-oPyKRDPHFz8_WFivsXcM'
    }

};
