import { combineReducers } from 'redux';

const searchReducer = (state: any = 0, action: any) => {
    if (action.type === 'KEYWORD_INPUT') {
        return { ...state, keyword: action.keyword };
    }

    if (action.type === 'SEARCH_LOADING') {
        return { ...state, loading: action.loading };
    }

    if (action.type === 'SEARCH_RESULT') {
        return { ...state, data: action.data };
    }

    return state;
}


export const reducers = combineReducers({ searchReducer });

