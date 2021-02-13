import { Action } from '../types/index';

const initState = {
    items: []
}

const weather = (state = initState, action: Action) => {

    switch (action.type) {

        case "INITIAL_WEATHERLIST":
            debugger;
            var s = Object.assign({}, state);
            for (var i = 0; i < action.item.length; i++) {
                s.items.push(action.item[i]);
            }
            return s;

        default:
            return state;
    }
}

export default weather;