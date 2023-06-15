import React, { Component } from 'react';

import { Searchbar } from 'components/Searchbar/Searchbar';

const API_KEY = '35579706-8f6d810a90183242eb7243061';

export class App extends Component {
  state = {
    value: '',
  };

  componentDidUpdate(prevState) {
    if (prevState !== this.state) {
      try {
        fetch(
          `https://pixabay.com/api/?q=${this.state.value}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
        );
      } catch (error) {}
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    const userRequest = e.target.elements[1].value;

    if (this.state.value === userRequest) {
      return;
    }

    this.setState({
      value: userRequest,
    });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleSubmit}></Searchbar>
      </>
    );
  }
}
