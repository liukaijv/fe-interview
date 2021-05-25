export function simpleTpl(tpl, data) {
    let reg = /<%([^%>]+)?%>/g;
    let code = `var r=[];\n`;
    let match;
    let cursor = 0;

    let add = (line, js) => {
        if (js) {
            if (/(if|for|else|switch|case|break|\{|\})(.*)?/g.test(line)) {
                code += `${line}\n`;
            } else if (/^\=(.*)?/g.test(line)) {
                code += `r.push(${line.replace('=', '')});\n`;
            }
        } else {
            if (line !== '') {
                code += `r.push("${line.replace(/"/g, '\\"')}");\n`;
            }
        }
    }

    while (match = reg.exec(tpl)) {
        add(tpl.slice(cursor, match.index));
        add(match[1], true);
        cursor = match.index + match[0].length;
    }
    add(tpl.substr(cursor, tpl.length - cursor));
    code += 'return r.join("");';
    // console.log(code);
    return new Function(code).apply(data);
}
