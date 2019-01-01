import axios from 'axios';

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
    const response = await axios.get('/api/team');
    const action = getTeamList(response.data);
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
