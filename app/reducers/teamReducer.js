import axios from 'axios';
import listSorter from './listSorter';

// action types
const GET_TEAM_LIST = 'GET_TEAM_LIST';
const GET_SINGLE_TEAM = 'GET_SINGLE_TEAM';

// action creators
const getTeamList = teamList => ({
  type: GET_TEAM_LIST,
  teamList
});

const getSingleTeam = singleTeam => ({
  type: GET_SINGLE_TEAM,
  singleTeam
});

// thunk creators
export const teamThunk = () => {
  return async dispatch => {
    let tempResponse = await axios.get('/api/team');
    let response = listSorter(tempResponse.data, 'teamName');
    const action = getTeamList(response);
    dispatch(action);
  };
};

export const singleTeamThunk = id => {
  return async dispatch => {
    console.log('THUNK ID', id);
    const response = await axios.get(`/api${id}`);
    console.log('THUNK DATA', response.data);
    const action = getSingleTeam(response.data);
    dispatch(action);
  };
};

export const addNewTeamThunk = team => {
  return async dispatch => {
    console.log('DURING THUNK', team);
    await axios.post(`api/team/add`, team);
    let tempResponse = await axios.get('/api/team');
    let response = listSorter(tempResponse.data, 'teamName');
    const action = getTeamList(response);
    dispatch(action);
  };
};

// reducer
const initialState = [];

const teamReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TEAM_LIST:
      return action.teamList;
    case GET_SINGLE_TEAM:
      return action.singleTeam;
    default:
      return state;
  }
};

export default teamReducer;
