import axios from 'axios';
import listSorter from './listSorter';

// action types
const GET_UNIVERSE_LIST = 'GET_UNIVERSE_LIST';

// action creators
const getUniverseList = universeList => ({
  type: GET_UNIVERSE_LIST,
  universeList
});

// thunk creators
export const universeThunk = () => {
  return async dispatch => {
    let tempResponse = await axios.get('/api/universe');
    let response = listSorter(tempResponse.data, 'universeName');
    const action = getUniverseList(response);
    dispatch(action);
  };
};

// reducer
const initialState = [];

const universeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_UNIVERSE_LIST:
      return action.universeList;
    default:
      return state;
  }
};

export default universeReducer;
