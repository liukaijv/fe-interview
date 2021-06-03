export function jsonp({url, params, callback}) {
    return new Promise((resolve, reject) => {
        let script = document.createElement('script');
        window[callback] = function (data) {
            resolve(data);
            document.body.removeChild(script);
        }
        params = {...params, callback};
        let queries = Object.keys(params).reduce((prev, cur, index) => {
            prev = `${prev}${index === 0 ? '' : '&'}${cur}=${params[cur]}`;
            return prev;
        }, '')

        script.src = `${url}?${queries}`;
        document.body.appendChild(script);
    })
}
