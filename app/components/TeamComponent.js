import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TeamComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  async componentDidMount() {
    await this.props.retrieveTeamData();
    this.setState({ loading: false });
  }

  render() {
    return (
      <div>
        <div className='teamComponent'>
          <h1>Super Teams</h1>
          {this.props.team.map((team, index) => (
            <div className='teamContainer'>
              <div>
                <img src={`images/${team.teamURL}`} className='bigLogo' />
              </div>
              <div>
                <Link to={`/team/${team.id}`} key={index}>
                  {`  ${team.teamName}`}
                </Link>
              </div>
              <div>
                <img src={`images/${team.universeURL}`} className='smallLogo' />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default TeamComponent;
