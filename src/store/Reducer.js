const Reducer = (state, action) => {
  switch (action.type) {
    case "SET_STORE":
      return {
        ...action.payload,
      };
    case "SELECT_SECTION":
      return {
        ...state,
        activeSection: action.payload,
      };
    case "ADD_SECTION":
      return {
        ...state,
        sections: [...state.sections, action.payload],
      };
    case "UPDATE_SECTION_ID":
      return {
        ...state,
        currentId: state.currentId + 1,
      };
    case "ADD_MESSAGE":
      return {
        ...state,
        sections: state.sections.map((section) => {
          if (section.id === state.activeSection) {
            section.messages.push(action.payload);
          }
          return section;
        }),
      };
    case "UPDATE_MESSAGE_ID":
      return {
        ...state,
        sections: state.sections.map((section) => {
          if (section.id === state.activeSection) {
            section.currentId += 1;
          }
          return section;
        }),
      };
    default:
      return state;
  }
};

export default Reducer;
