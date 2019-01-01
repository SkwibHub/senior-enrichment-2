import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TeamInputFormComponent from './TeamInputFormComponent.js';

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
        <div className="teamComponent">
          <br />
          <h1 className="component-header">SUPER TEAMS</h1>
          {this.props.team.map((team, index) => (
            <div className="teamContainer">
              <div>
                <img src={`images/${team.teamURL}`} className="bigLogo" />
              </div>
              <div>
                <Link
                  to={`/team/${team.id}`}
                  key={index}
                  className="teamLinkName"
                >
                  {`  ${team.teamName}`}
                </Link>
              </div>
              <div>
                <img src={`images/${team.universeURL}`} className="smallLogo" />
              </div>
            </div>
          ))}
        </div>
        <div className="formComponent">
          <h1 className="component-header">NEW TEAM FORM</h1>
          <div>
            <TeamInputFormComponent />
          </div>
          <div>
            <img src="images/unaffiliated.png" className="formImage" />
          </div>
        </div>
      </div>
    );
  }
}

export default TeamComponent;
