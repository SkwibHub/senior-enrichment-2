import { connect } from 'react-redux';

import SingleTeamComponent from './SingleTeamComponent';
import TeamInputFormComponent from './TeamInputFormComponent'; //-----------
import { singleTeamThunk } from '../reducers/teamReducer.js';
import { universeThunk } from '../reducers/universeReducer.js';

const mapStateToProps = state => ({
  team: state.team,
  universe: state.universe
});

const mapDispatchToProps = dispatch => ({
  retrieveSingleTeamData: id => dispatch(singleTeamThunk(id)),
  retrieveUniverseData: () => dispatch(universeThunk())
});

const Team = connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleTeamComponent, TeamInputFormComponent);

export default Team;
