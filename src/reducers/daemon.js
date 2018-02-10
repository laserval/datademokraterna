
const initialState = {
    hellos: 1,
    headings: 1,
    text: 1,
    button: 1,
    floskel: 1,
    partyProgram: 1,
    search: []
}

function modify(key, mod, state) {
  const next = {};
  next[key] = mod(state[key]);
  return {...state, ...next};
}

const daemon = (state = initialState, action) => {
    switch (action.type) {
      case 'SEARCH':
        return {...state, search: [...state.search, ...action.data] };
      case 'DRIVE':
        return modify(action.data.key, (a) => a+1, state);
      case 'LESS':
        return modify(action.data.key, (a) => a-1, state);
      default:
        return state
    }
  }

  export default daemon