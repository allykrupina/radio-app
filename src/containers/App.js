import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Page from './Page';
import Header from '../components/Header';
import Track from '../components/Track';
import Donate from '../components/Donate';
import '../App.css';

const API = 'https://itunes.apple.com/us/rss/topsongs/limit=100/json';

class App extends Component {
  state = {
    tracksArray: [],
  };

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(data => this.setState({ tracksArray: data.feed.entry }));
  }

  getData = (id, status) => {
    this.setState({ [id.toString()]: status });
  }

  render() {
    const { tracksArray } = this.state;

    return (
      <Router>
        <div className="main">
          <Header/>
          <Route exact path='/' component={() => <Page tracksArray={tracksArray} />} />
          <Route exact path='/donate' component={() => <Donate/> } />
          {tracksArray.map(track => {
            const id = track.id.attributes['im:id'].toString();
            return (
              <Route exact key={id} path={`/${id}`} component={() =>
                <Track item={track} id={id} getData = {this.getData} count={this.state[id]} />
              }/>
            )
          })}
        </div>
      </Router>
    );
  }
}

export default App;
