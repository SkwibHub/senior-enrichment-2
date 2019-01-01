import axios from 'axios';
import listSorter from './listSorter';

// action types
const GET_TEAM_LIST = 'GET_TEAM_LIST';

// action creators
const getTeamList = teamList => ({
  type: GET_TEAM_LIST,
  teamList
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
    default:
      return state;
  }
};

export default teamReducer;
