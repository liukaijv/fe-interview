export function range(n, from = 0) {
    return (new Array(n)).fill(0).map((i, index) => (index + from));
}
