import { connect } from 'react-redux';

import TeamComponent from './TeamComponent';
import { teamThunk } from '../reducers/teamReducer.js';

const mapStateToProps = state => ({
  team: state.team
});

const mapDispatchToProps = dispatch => ({
  retrieveTeamData: () => dispatch(teamThunk())
});

const Team = connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamComponent);

export default Team;
