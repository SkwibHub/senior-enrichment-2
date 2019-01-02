import { connect } from 'react-redux';

import SingleHeroComponent from './SingleHeroComponent';
import SingleHeroUpdateFormComponent from './SingleHeroUpdateFormComponent';
import { singleHeroThunk } from '../reducers/heroReducer.js';
import { universeThunk } from '../reducers/universeReducer.js';

const mapStateToProps = state => ({
  hero: state.hero,
  universe: state.universe
});

const mapDispatchToProps = dispatch => ({
  retrieveSingleHeroData: id => dispatch(singleHeroThunk(id)),
  retrieveUniverseData: () => dispatch(universeThunk())
});

const Hero = connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleHeroComponent, SingleHeroUpdateFormComponent);

export default Hero;
