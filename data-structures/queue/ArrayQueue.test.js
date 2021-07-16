import {ArrayQueue} from "./ArrayQueue";

test('ArrayQueue', () => {
    let queue = new ArrayQueue(4);

    expect(queue.isEmpty()).toEqual(true);

    queue.offer(1);
    queue.offer(2);
    queue.offer(3);
    queue.offer(4);

    expect(queue.size()).toEqual(4);
    expect(queue.isFull()).toEqual(true);
    expect(queue.isEmpty()).toEqual(false);
    expect(queue.peek()).toEqual(4);
    expect(queue.poll()).toEqual(4);
    expect(queue.size()).toEqual(3);

})
