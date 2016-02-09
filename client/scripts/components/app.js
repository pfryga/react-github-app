import React from 'react';

import Search from './search';
import Results from './results';
import LangFilter from './lang-filter';
import StarsFilter from './stars-filter';

import repositories from '../api/repositories';

export default React.createClass({
    displayName: 'App',

    getInitialState () {
        return {
            query: '',
            language: null,
            minStars: undefined,
            maxStars: undefined
        }
    },

    handleFilterChange(language) {
        this.setState({ language });
    },

    handleSubmit(query) {
        this.setState({ query });
    },

    handleFromInputChange(minStars) {
        this.setState({ minStars });
    },

    handleMaxInputChange(maxStars) {
        this.setState({ maxStars });
    },

    render() {
        return (
            <div className="app">
                <h1>allegro.de</h1>
                <Search onSubmit={this.handleSubmit} />
                <LangFilter onChange={this.handleFilterChange} />
                <StarsFilter onChange={this.handleFromInputChange} onChangeMax={this.handleMaxInputChange} />
                <Results query={this.state.query} language={this.state.language} minStars={this.state.minStars} maxStars={this.state.maxStars} />
            </div>
        );
    }
});
