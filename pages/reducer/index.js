import Types from '../action/types'
const defaultState = {index:1};
export default function (state = defaultState,action) {
    switch (action.type){
        case Types.BANNER_CLICK:
            return {
                ...state,
                index:action.index
            };
        default:
            return state;
    }

}