import React from 'react';
import { Input } from 'react-bootstrap';

export default React.createClass({
    displayName: 'StarsFilter',

    propTypes: {
        starsFrom: React.PropTypes.string,
        starsTo: React.PropTypes.string
    },

    handleChange () {

    },

    render() {
        return (
            <div>
                <Input type="text" placeholder="Stars from" ref="inputFrom"></Input>
                <Input type="text" placeholder="Stars to" ref="inputTo"></Input>
            </div>
        );
    }
});
