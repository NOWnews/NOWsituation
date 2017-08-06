export default class admin {

    // 建構式
    constructor() {
    }

    get = () => {
        let promise = this.mongo.db('situation-admin')
            .collection('info')
            .find({})
            .sort({createdAt: -1})
            .limit(1)
            .toArray();

        return promise.then((result) => {
            return Promise.resolve(body);
        });
    }
};
