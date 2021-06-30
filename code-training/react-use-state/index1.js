let memoryStates = [];
let index = 0;

const render = () => {
    console.log(memoryStates)
}

export function useState1(initialState) {
    memoryStates[index] = memoryStates[index] || initialState;
    let currentIndex = index;

    function setState(newState) {
        memoryStates[currentIndex] = newState;
        render();
    }

    index++;
    return [memoryStates[currentIndex], setState];
}
