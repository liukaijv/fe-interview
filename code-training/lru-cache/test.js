import {LRUCache} from "./index";

test('LRUCache', () => {
    let lru = new LRUCache(10);
    lru.set('a', 1);
    lru.set('b', 2)
    expect(lru.size).toEqual(2);

    lru.set('c', 3)

    let nodeB = lru.get('b');

    expect(nodeB.value).toEqual(2);

})
