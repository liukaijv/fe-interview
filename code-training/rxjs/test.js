import {Observable} from "./observable";
import {Observer} from "./observer";

test('rx', () => {

    let observable = new Observable(function (observer) {
        observer.next('aa');
        observer.next('bb');
        observer.complete();
        observer.next('cc');
        return () => {
            console.log('unSubscribe')
        }
    });

    let observer = observable.subscribe(new Observer(
        value => console.log('observer1', value),
        err => console.error(err),
        () => console.log('completed'),
    ));

    let observer2 = observable.subscribe(value => console.log('observer2', value));

})
