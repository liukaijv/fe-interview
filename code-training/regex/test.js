import {
    isIMEI,
    isUrl,
    isHan,
    isDecimal2,
    isHtmlTag,
    isStrongPassword,
    isStrongPassword2,
    isDate,
} from "./index";

test('isUrl', () => {
    expect(isUrl('http://www.baidu.com')).toBe(true);
    expect(isUrl('http://www.baidu.com/')).toBe(true);
    expect(isUrl('https://www.baidu.com')).toBe(true);
    expect(isUrl('https://www.baidu.com:443')).toBe(true);
});

test('isHan', () => {
    expect(isHan("瞄瞄")).toBe(true);
})

test('isDecimal2', () => {
    expect(isDecimal2(11.22)).toBe(true);
    expect(isDecimal2(11.332)).toBe(false);
})

test('isHtmlTag', () => {
    expect(isHtmlTag('<span>a</span>')).toBe(true);
})


test('isStrongPassword', () => {
    expect(isStrongPassword('aaaaaaa')).toBe(false)
    expect(isStrongPassword('A41414dfafaf&')).toBe(true)
})

test('isStrongPassword2', () => {
    expect(isStrongPassword2('aaaa')).toBe(false)
    expect(isStrongPassword2('aaaaaaa')).toBe(false)
    expect(isStrongPassword2('A41414dfafaf&')).toBe(true)
    expect(isStrongPassword2('A41414dfafaf&11111111111111111111111')).toBe(false)
})

test('isDate',()=>{
    expect(isDate('2012-10-06')).toBe(true);
    expect(isDate('2012-1-06')).toBe(false);
    expect(isDate('2012-1-1')).toBe(false);
})
