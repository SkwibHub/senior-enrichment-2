import { connect } from 'react-redux';

import HeroComponent from './HeroComponent';
import HeroInputFormComponent from './HeroInputFormComponent';
import {
  HeroThunk,
  addNewHeroThunk,
  removeHeroThunk
} from '../reducers/heroReducer.js';
import { universeThunk } from '../reducers/universeReducer.js';

const mapStateToProps = state => ({
  hero: state.hero,
  universe: state.universe
});

const mapDispatchToProps = dispatch => ({
  retrieveHeroData: () => dispatch(HeroThunk()),
  retrieveUniverseData: () => dispatch(universeThunk()),
  insertHeroData: Hero => dispatch(addNewHeroThunk(Hero)),
  removeHeroData: id => dispatch(removeHeroThunk(id))
});

const Hero = connect(
  mapStateToProps,
  mapDispatchToProps
)(HeroComponent, HeroInputFormComponent);

export default Hero;
