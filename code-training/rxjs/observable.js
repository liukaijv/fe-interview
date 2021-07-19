import {Observer} from "./observer";

export class Observable {
    constructor(publishFn) {
        this.publish = publishFn;
    }

    subscribe(observer) {
        let obr;
        if (observer instanceof Observer) {
            obr = observer;
        } else if (typeof observer === "function") {
            obr = new Observer(observer, null, null);
        }
        this.publish(obr);
        return obr;
    }
}
