const Reducer = (state, action) => {
  switch (action.type) {
    case "SELECT_SECTION":
      return {
        ...state,
        activeSection: action.payload,
      };
    case "ADD_MESSAGE":
      return {
        ...state,
        sections: state.sections.map((section) => {
          if (section.id === state.activeSection) {
            section.messages.push(action.payload);
          }
          return section
        }),
      };
    case 'UPDATE_MESSAGE_ID':
      return {
        ...state,
        sections: state.sections.map((section) => {
          if (section.id === state.activeSection) {
            section.currentId += 1;
          }
          return section
        })
      }
    default:
      return state;
  }
};

export default Reducer;
