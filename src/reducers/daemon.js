
const initialState = {
    hellos: 1,
    headings: 1
}

const daemon = (state = initialState, action) => {
    switch (action.type) {
      case 'DRIVE':
        const key = action.data.key;
        const next = {};
        next[key] = state[key] + 1;
        return {...state, ...next};
      default:
        return state
    }
  }
  
  export default daemon