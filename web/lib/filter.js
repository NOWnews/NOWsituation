const isTruth = window.location.pathname === '/truth';

export function thousandth (n) {
    n += "";
    var arr = n.split(".");
    var re = /(\d{1,3})(?=(\d{3})+$)/g;
    return arr[0].replace(re, "$1,") + (arr.length == 2 ? "." + arr[1] : "");
}

export function thousandthWithMaigcNumber (n) {
    const magicNumber = isTruth ? 1 : 7;
    return thousandth(n * magicNumber);
}

export function thousandthWithMaigcNumberForPageView (n) {
    const magicNumber = isTruth ? 1 : 2;
    return thousandth(n * magicNumber);
}

export function ellipsisTop10 (string) {
    const stringLength = 18;

    if (!string) {
        return string;
    }

    if (window.innerWidth > 800) {
        return string;
    }

    if (string.length <= stringLength) {
        return string;
    }

    return string.slice(0, stringLength) + "...";
}

export function ellipsisHeadline (string, index) {
    let stringLength = 16;

    if (!string) {
        return string;
    }

    if (window.innerWidth > 800) {
        return string;
    }
    // 挑第一筆 ET 頭條只會顯示單行
    if (index === 4) {
        stringLength = 8;
    }

    if (string.length <= stringLength) {
        return string;
    }

    return string.slice(0, stringLength) + "...";
}
