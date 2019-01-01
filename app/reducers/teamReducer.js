import axios from 'axios';

// action types
const GET_TEAM_LIST = 'GET_TEAM_LIST';

// action creators
const getTeamList = teamList => ({
  type: GET_TEAM_LIST,
  teamList
});

// teamName sort function
const teamNameSorter = teamArray => {
  for (let i = 0; i < teamArray.length - 1; i++) {
    for (let j = i; j < teamArray.length - 1; j++) {
      if (teamArray[j].teamName > teamArray[j + 1].teamName) {
        let temp = teamArray[j];
        teamArray[j] = teamArray[j + 1];
        teamArray[j + 1] = temp;
      }
    }
  }
  return teamArray;
};

// thunk creators
export const teamThunk = () => {
  return async dispatch => {
    let tempResponse = await axios.get('/api/team');
    let response = teamNameSorter(tempResponse.data);
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
