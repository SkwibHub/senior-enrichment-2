import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SingleTeamUpdateFormComponent from './SingleTeamUpdateFormComponent.js';

class SingleTeamComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  async componentDidMount() {
    await this.props.retrieveSingleTeamData(this.props.location.pathname);
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return <div className='superhero-header'>LOADING....</div>;
    }

    const heroes = this.props.team.heroKey;
    const team = this.props.team.teamKey;
    const universe = this.props.team.universeKey[0];

    console.log('Render team here.');
    console.log('TEAM', team);
    console.log('HERO', heroes);
    console.log('UNIVERSE', universe);

    return (
      <div>
        <div className='teamComponent'>
          <br />
          <h1 className='component-header'>TEAM ROSTER</h1>
          <br />
          <div className='singleTeamContainer'>
            <img className='bigLogo' src={`/images/${team.teamURL}`} />
            <h4 className='singleTeamName'>{team.teamName}</h4>
            <img className='smallLogo' src={`/images/${team.universeURL}`} />
          </div>
          {mapHeroes(heroes)}
        </div>

        {/*START OF CHANGE TO UPDATER COMPONENT*/}
        <div className='formComponent'>
          <h1 className='component-header'>UPDATE TEAM FORM</h1>
          <div>
            <SingleTeamUpdateFormComponent
              insertTeamData={this.props.insertTeamData}
              retrieveUniverseData={this.props.retrieveUniverseData}
              universe={this.props.universe}
              team={team}
            />
          </div>
          <div>
            <img src='images/unaffiliated.png' className='formImage' />
          </div>
        </div>
        {/*END OF CHANGE TO UPDATER COMPONENT*/}
      </div>
    );
  }
}

const mapHeroes = heroes => {
  if (heroes.length < 1) {
    return (
      <div>
        <h2 className='noListingHere'>No heroes on this team's roster.</h2>
      </div>
    );
  } else {
    return (
      <div>
        {heroes.map((h, index) => (
          <div className='smallHeroContainer'>
            <div>
              <div>
                <img src={`images/${h.imageURL}`} className='smallHeroImage' />
              </div>
              <div>
                <Link
                  to={'/hero/' + h.id}
                  key={index}
                  className='smallHeroLinkName'
                >
                  {h.alias}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
};

export default SingleTeamComponent;
