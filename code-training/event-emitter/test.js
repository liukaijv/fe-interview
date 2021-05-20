import {EventEmitter} from "./index";

test('EventEmitter', () => {

    let emitter = new EventEmitter();

    let handler1 = function (data) {
        console.log(1, data);
    }

    let handler2 = function (data) {
        console.log(2, data);
    }

    let handler3 = function (data) {
        console.log(3, data);
    }

    emitter.on('foo', handler1);
    emitter.once('foo', handler2);
    emitter.once('foo', handler3);

    emitter.emit('foo', '3 handler');

    emitter.off('foo', handler1);

    emitter.emit('foo', '1 handler');

    emitter.offAll('foo');

    emitter.emit('foo', 'no thing');

    console.log('size: ' + emitter.eventSize('foo'));

});
