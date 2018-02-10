import { generateParagraph, generateHeadline } from "../data/wordgenerator";
import { leaders } from '../data/leaders';
import { products } from '../data/products';

const initialState = {
    floskel: 0,
    partyProgram: [],
    search: [],
    partyLeader: {
      leaders: [...leaders].sort(function() { return 0.5 - Math.random() }),
      boxes: 0
    },
    quiz: 0,
    hardToRead: false,
    contactUs: 0,
    webshop: {
      products: [...products].sort(function() { return 0.5 - Math.random() }),
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
          case 'valkompisen':
            return {...state, quiz: state.quiz + 1 };
          case 'var-partiledare':
            return {...state, 
              partyLeader: {
                ...state.partyLeader,
                boxes: state.partyLeader.boxes + 1
              }
            };
          case 'webshop':
            return {...state, 
              webshop: {
                ...state.webshop,
                boxes: state.webshop.boxes + 1
              }
            };
          case 'kontakta-oss':
            return {...state, contactUs: state.contactUs + 1 };
          case 'svarlast':
            return {...state, hardToRead: true };
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
      case 'WEBSHOP_LIKE':
        return {...state, 
          webshop: {
            ...state.webshop,
            boxes: state.webshop.boxes + 1
          }
        };
      case 'WEBSHOP_DISLIKE':
        return {...state, 
          webshop: {
              ...state.webshop,
              boxes: 1,
              products: state.webshop.products.slice(1)
            }
          };
      default:
        return state
    }
  }

  export default daemon;