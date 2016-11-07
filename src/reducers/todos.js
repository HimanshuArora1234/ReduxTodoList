const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case 'TOGGLE_TODO':
      return state.map(toggle => {
        if(toggle.id === action.id) {
          return Object.assign({}, toggle, {completed: !toggle.completed});
        }
        return toggle;
      })
      default:
        return state;
  }
};

export default todos;
