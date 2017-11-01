const isTruth = window.location.pathname === '/truth';

export function setDeviceRate (source, deviceRate) {

        source.deviceRate = deviceRate;

        if (isTruth) {
            return;
        }

        /*
          22:00 - 12:30 mobile x2
          14:30 - 17:30 mobile x2

          代表以下區間為正常值
          12:31 - 14:30
          17:31 - 22:00
        */
        const date = new Date()
        const h = date.getHours();
        const min = date.getMinutes();
        if (
            (h === 12 && min > 30) || (h === 13) || (h === 14 && min <= 30) ||
            (h === 17 && min > 30) || (h > 17 && h <= 22)
        ) {
          // 流量尖峰時間，不需要加乘
          return;
        }
        source.deviceRate.mobile = parseInt(deviceRate.mobile) * 2;
}

export function setSexRate (ta, female) {
    // 為了讓比例約為 66 : 34
    // 目前比例差不多是
    const maxNum = 36;
    const minNum = 34;
    female = isTruth ? female : Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum; 
    ta.female = female;
    ta.male = 100 - ta.female;
    return;
}
