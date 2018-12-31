import axios from 'axios';

// action types
const GET_TEAM_LIST = 'GET_TEAM_LIST';

// action creators
const getTeamList = teamList => ({
  type: GET_TEAM_LIST,
  teamList
});

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
