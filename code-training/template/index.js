export function simpleTpl(tpl, data) {
    let reg = /<%\=([^=%>]+)?%>/g;
    let code = `var r=[];\n`;
    let match;
    let cursor = 0;

    let add = (line, js) => {
        if (js) {
            code += `r.push(${line});\n`;
        } else {
            code += `r.push("${line.replace(/"/, '\\\\"')}");\n`;
        }
    }

    while (match = reg.exec(tpl)) {
        add(tpl.slice(cursor, match.index));
        add(`this.${match[1]}`, true);
        cursor = match.index + match[0].length;
    }
    add(tpl.substr(cursor, tpl.length - cursor));
    code += 'return r.join("");';
    // console.log(code);
    return new Function(code).apply(data);
}
