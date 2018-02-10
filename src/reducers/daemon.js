import { generateParagraph, generateHeadline } from "../data/wordgenerator";
import { leaders } from '../data/leaders';

const initialState = {
    hellos: 1,
    headings: 1,
    text: 1,
    button: 1,
    floskel: 0,
    partyProgram: [],
    search: [],
    partyLeader: {
      leaders: [...leaders].sort(function() { return 0.5 - Math.random() }),
      boxes: 0
    }
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
      case 'MENU':
        switch (action.data) {
          case 'var-politik':
            return {...state, floskel: state.floskel + 1};
          case 'partiprogram':
            return {...state, partyProgram: [...state.partyProgram, generateParagraph()] };
          default:
            return state;
        }
      case 'PARTYLEADER_LIKE':
        return {...state, 
          partyLeader: {
            ...state.partyLeader,
            boxes: state.partyLeader.boxes + 1
          }
        };
      case 'PARTYLEADER_DISLIKE':
        return {...state, 
            partyLeader: {
              ...state.partyLeader,
              boxes: 1,
              leaders: state.partyLeader.leaders.slice(1)
            }
          };
      default:
        return state
    }
  }

  export default daemon