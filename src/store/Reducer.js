const Reducer = (state, action) => {
    switch (action.type) {
        case 'SELECT_SECTION':
            return {
                ...state,
                activeSection: action.payload,
            }
        default: return state
    }
}

export default Reducer;