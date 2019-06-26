const defaultValue = {
  newsletters: {}
};

const reducer = (state = defaultValue, action ) => {
    switch (action.type) {
        case 'newsletters.store':
            return { ...state, newsletters: action.newsletters };
        default:
            return state;
    }
};

export default reducer;
