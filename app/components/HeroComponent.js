import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HeroInputFormComponent from './HeroInputFormComponent.js';

class HeroComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    await this.props.retrieveHeroData();
    this.setState({ loading: false });
  }

  async handleSubmit(id) {
    event.preventDefault();
    await this.props.removeHeroData(id);
    console.log('DELETING');
  }

  render() {
    if (this.state.loading) {
      return <div className="superhero-header">LOADING....</div>;
    }

    return (
      <div>
        <div className="teamComponent">
          <br />
          <h1 className="component-header">SUPER HEROES</h1>
          {this.props.hero.map(h => (
            <div className="teamContainer">
              <div>
                <img
                  src={`images/${h.teamURL}`}
                  key={'heroimage' + h.id}
                  className="bigLogo"
                />
              </div>
              <div>
                <Link
                  to={`/hero/${h.id}`}
                  key={'name' + h.id}
                  className="teamLinkName"
                >
                  {`  ${h.teamName}`}
                </Link>
              </div>
              <div>
                <img
                  src={`images/${h.universeURL}`}
                  key={'img' + h.id}
                  className="smallLogo"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="deleteButton"
                  onClick={() => this.handleSubmit(h.id)}
                  value={h.id}
                >
                  DELETE
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="formComponent">
          <h1 className="component-header">NEW TEAM FORM</h1>
          <div>
            <HeroInputFormComponent
              insertHeroData={this.props.insertHeroData}
              retrieveTeamData={this.props.retrieveTeamData}
              retrieveUniverseData={this.props.retrieveUniverseData}
              universe={this.props.universe}
            />
          </div>
          <div>
            <img src="images/unaffiliated.png" className="formImage" />
          </div>
        </div>
      </div>
    );
  }
}

export default HeroComponent;
