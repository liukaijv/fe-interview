export function createLock() {
    let status = false;
    const acquire = () => {
        if (status === true) {
            return false
        }
        status = true;
        return true;
    }
    const release = () => {
        status = false;
    }

    return {
        status,
        acquire,
        release,
    }
}
