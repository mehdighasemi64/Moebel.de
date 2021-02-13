import { Action } from '../types/index';

const initState = {
    CityId: 0
}

const city = (state = initState, action: Action) => {

    switch (action.type) {

        case "FILTER_CITYID":
            debugger;
            var s = Object.assign({}, state);                                    
            s.CityId = action.item;
            return s;

        default:
            return state;
    }
}

export default city;