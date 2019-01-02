import axios from 'axios';
import listSorter from './listSorter';

// action types
const GET_HERO_LIST = 'GET_HERO_LIST';
const GET_SINGLE_HERO = 'GET_SINGLE_HERO';

// action creators
const getHeroList = teamHero => ({
  type: GET_HERO_LIST,
  teamHero
});

const getSingleHero = singleHero => ({
  type: GET_SINGLE_HERO,
  singleHero
});

// thunk creators
export const heroThunk = () => {
  return async dispatch => {
    let tempResponse = await axios.get('/api/hero');
    let response = listSorter(tempResponse.data, 'heroName');
    const action = getHeroList(response);
    dispatch(action);
  };
};

export const singleHeroThunk = id => {
  return async dispatch => {
    const response = await axios.get(`/api${id}`);
    const action = getSingleHero(response.data);
    dispatch(action);
  };
};

export const addNewHeroThunk = team => {
  return async dispatch => {
    await axios.post(`api/hero/add`, team);
    let tempResponse = await axios.get('/api/hero');
    let response = listSorter(tempResponse.data, 'heroName');
    const action = getHeroList(response);
    dispatch(action);
  };
};

export const removeHeroThunk = id => {
  return async dispatch => {
    await axios.delete(`/api/hero/${id}`);
    let tempResponse = await axios.get('/api/hero');
    let response = listSorter(tempResponse.data, 'heroName');
    const action = getHeroList(response);
    dispatch(action);
  };
};

// reducer
const initialState = [];

const heroReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_HERO_LIST:
      return action.heroList;
    case GET_SINGLE_HERO:
      return action.singleHero;
    default:
      return state;
  }
};

export default heroReducer;
