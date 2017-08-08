import google from 'googleapis'

export default class Googleapis {
    constructor() {
        let { clientEmail, privateKey } = config.server.google;
        this._jwtClient = new google.auth.JWT(
            clientEmail,
            null,
            privateKey,
            ['https://www.googleapis.com/auth/analytics.readonly'],
            null
        );
        this._analyticsData = google.analytics('v3').data;
    }


    getAuthorize = () => {
        return new Promise((resolve, reject) => {
            this._jwtClient.authorize((err, tokens) => {
                if (err) {
                    return reject(err);
                }
                return resolve(tokens);
            });
        });
    }

    getAnalytics = (params) => {
        return new Promise((resolve, reject) => {
            this.setParams(params);
            this._analyticsData.ga.get(params, (err, response) => {
                if (err) {
                    return reject(err);
                }
                return resolve(response);
            });
        });
    }

    getRealtime = (params) => {
        return new Promise((resolve, reject) => {
            this.setParams(params);
            this._analyticsData.realtime.get(params, (err, response) => {
                if (err) {
                    return reject(err);
                }
                return resolve(response);
            });
        });
    }


    setParams = (params) => {
        params.auth = this._jwtClient;
        params.ids = config.server.google.id;
        return
    }
}

