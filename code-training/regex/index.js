// 手机IMEI
export function isIMEI(value) {
    return /^\d{15,17}$/.test(value);
}

// 网址
export function isUrl(value) {
    return /^https?:\/\/[\w-]+(\.[\w-]+)+(:\d{1,5})?\/?$/.test(value);
}

// 汉字
export function isHan(value) {
    return /^[\u4e00-\u9fa5]+$/.test(value);
}

// 两位小数
export function isDecimal2(value) {
    value = '' + value;
    return /^[1-9][0-9]*(\.[0-9]{0,2})?$/.test(value);
}

// html
export function isHtmlTag(value) {
    return /^<(\w+)>[^>]*<\/\1>$/.test(value);
}

// 密码强度
// 密码强度校验，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
export function isStrongPassword(value) {
    return /^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*?])\S*$/.test(value)
}

// 密码强度
// 密码强度校验，最6-20位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
export function isStrongPassword2(value) {
    return /^(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*?])\S{6,20}$/.test(value)
}

// 日期
export function isDate(value) {
    return /^[1-9][0-9]{3}-\d{2}-\d{2}$/.test(value);
}
