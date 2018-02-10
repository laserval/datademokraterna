
const initialState = {
    hellos: 1,
    headings: 1,
    text: 1,
    button: 1,
    logo: 1
}

function modify(key, mod, state) {
  const next = {};
  next[key] = mod(state[key]);
  return {...state, ...next};
}

const daemon = (state = initialState, action) => {
    switch (action.type) {
      case 'DRIVE':
        return modify(action.data.key, (a) => a+1, state);
      case 'LESS':
        return modify(action.data.key, (a) => a-1, state);
      default:
        return state
    }
  }
  
  export default daemon