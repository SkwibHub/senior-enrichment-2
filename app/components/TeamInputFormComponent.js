import React, { Component } from 'react';

class TeamInputFormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    await this.props.retrieveUniverseData();
    this.setState({ loading: false });
    console.log('PROPS UNIVERSE', this.props.universe); //------------
    console.log('PROPS UNIVERSE', this.props.universe[0].universeName); //-------------
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    // await this.props.enterNewTeam(this.state);

    this.setState({
      teamName: '',
      teamURL: '',
      universeName: ''
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <br />
        <h4>TEST</h4>
        <label>
          <span className='labelClass'>Team Name:</span>
          <br />
          <input
            type='text'
            name='teamName'
            className='formField'
            onChange={this.handleChange}
            value={this.state.teamName}
          />
        </label>
        <br />
        <br />
        <label>
          <span className='labelClass'>Team Image URL:</span>
          <br />
          <input
            type='text'
            name='teamURL'
            className='formField'
            onChange={this.handleChange}
            value={this.state.teamURL}
          />
        </label>
        <br />
        <br />
        <label>
          <span className='labelClass'>Universe:</span>
          <br />
          <select
            type='text'
            name='universeName'
            className='formField'
            onChange={this.handleChange}
            value={this.state.universeName}
          >
            {this.props.universe.map(u => (
              <option key={u.id}>{u.universeName}</option>
            ))}
          </select>
        </label>
        <br />
        <br />
        <button type='submit'>Submit</button>
      </form>
    );
  }
}

export default TeamInputFormComponent;
