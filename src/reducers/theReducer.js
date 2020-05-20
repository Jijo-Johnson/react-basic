import json from '../blogList.json';
const initState = {
    blogs:[...json]
}

const theReducer = (state = initState, action) => {
    console.log(state);
    return state;
}

export default theReducer;