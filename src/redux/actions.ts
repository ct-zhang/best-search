export function keywordAction(keyword: string = '') {
    return {
        type: 'KEYWORD_INPUT',
        keyword
    };
}

export function loadingAction(loading: boolean) {
    return {
        type: 'SEARCH_LOADING',
        loading
    };
}

export function resultAction(data: any) {
    return {
        type: 'SEARCH_RESULT',
        data
    };
}