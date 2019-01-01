import { connect } from 'react-redux';

import TeamComponent from './TeamComponent';
import TeamInputFormComponent from './TeamInputFormComponent';
import { teamThunk, addNewTeamThunk } from '../reducers/teamReducer.js';
import { universeThunk } from '../reducers/universeReducer.js';

const mapStateToProps = state => ({
  team: state.team,
  universe: state.universe
});

const mapDispatchToProps = dispatch => ({
  retrieveTeamData: () => dispatch(teamThunk()),
  retrieveUniverseData: () => dispatch(universeThunk()),
  insertTeamData: team => dispatch(addNewTeamThunk(team))
});

const Team = connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamComponent, TeamInputFormComponent);

export default Team;
