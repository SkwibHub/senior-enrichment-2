import axios from 'axios';

// action types
const GET_UNIVERSE_LIST = 'GET_UNIVERSE_LIST';

// action creators
const getUniverseList = universeList => ({
  type: GET_UNIVERSE_LIST,
  universeList
});

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
