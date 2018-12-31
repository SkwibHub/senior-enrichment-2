import axios from 'axios';

// action types
const GET_HERO_LIST = 'GET_HERO_LIST';

// action creators
const getHeroList = heroList => ({
  type: GET_HERO_LIST,
  heroList
});

// reducer
const initialState = [];

const heroReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_HERO_LIST:
      return action.heroList;
    default:
      return state;
  }
};

export default heroReducer;
