const defaultValue = {
    newsletters: {},
    layout: {},
    themes: {}
};

const reducer = (state = defaultValue, action ) => {
    switch (action.type) {
        case 'newsletters.store':
            return {
                ...state,
                newsletters: action.newsletters,
            };
        case 'themes.store':
            return {
                ...state,
                themes: action.themes,
            };
        case 'layout.store':
            return {
                ...state,
                layout: action.layout,
            };
        default:
            return state;
    }
};

export default reducer;
