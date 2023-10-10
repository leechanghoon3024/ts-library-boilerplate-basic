import './index.css';

class MyLibrary {
    constructor() {
        console.log('Library constructor loaded');
    }
    test() {
        console.log('dd');
    }

    myMethod = (): boolean => {
        console.log('Library method fired');
        return true;
    };
}

export default MyLibrary;
