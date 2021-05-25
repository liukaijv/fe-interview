export function simpleTpl(tpl, data) {
    let reg = /<%([^%>]+)?%>/g;
    let code = `var r=[];\n`;
    let match;
    let cursor = 0;
    let plain = '';

    while (match = reg.exec(tpl)) {
        plain = tpl.slice(cursor, match.index);
        if (plain != '') {
            code += `r.push("${plain.replace(/"/g, '\\"')}");\n`;
        }

        if (/(if|for|else|switch|case|break|\{|\})(.*)?/g.test(match[1])) {
            code += `${match[1]}\n`;
        } else if (/^\=(.*)?/g.test(match[1])) {
            code += `r.push(${match[1].replace('=', '')});\n`;
        }

        cursor = match.index + match[0].length;
    }
    plain = tpl.substr(cursor, tpl.length - cursor);
    if (plain != '') {
        code += `r.push("${plain.replace(/"/g, '\\"')}");\n`;
    }
    code += 'return r.join("");';
    // console.log(code);
    return new Function(code).apply(data);
}
