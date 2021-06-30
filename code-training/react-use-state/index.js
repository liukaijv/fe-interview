let memoryState;

const render = () => {
    console.log(memoryState)
}

export function useState(initialState) {
     memoryState = memoryState || initialState;

    function setState(newState) {
        memoryState = newState;
        render();
    }

    return [memoryState, setState];
}
