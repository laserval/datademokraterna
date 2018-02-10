import { generateParagraph, generateHeadline } from "../data/wordgenerator";

const initialState = {
    hellos: 1,
    headings: 1,
    text: 1,
    button: 1,
    floskel: 1,
    partyProgram: [generateParagraph()],
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
        const articles = action.data.map((e) => {
          return {
            headline: generateHeadline(e),
            paragraph: generateParagraph(e)
          };
        });
        return {...state, search: [...state.search, ...articles],  };
      case 'DRIVE':
        if (action.data.key === 'partyProgram') {
          return {...state, partyProgram: [...state.partyProgram, generateParagraph()] };
        } else {
          return modify(action.data.key, (a) => a+1, state);
        }
      case 'LESS':
        return modify(action.data.key, (a) => a-1, state);
      default:
        return state
    }
  }

  export default daemon