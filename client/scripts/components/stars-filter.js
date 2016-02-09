import React from 'react';
import { Input } from 'react-bootstrap';

export default React.createClass({
    displayName: 'StarsFilter',

    propTypes: {
        onChange: React.PropTypes.func.isRequired
    },

    handleChangeFromInput () {
        let value = this.refs.input.getValue();
        this.props.onChange(value);
    },

    handleChangeMaxInput () {
        let value = this.refs.inp.getValue();
        this.props.onChangeMax(value);
    },

    render() {
        return (
            <div>
                <Input type="text" placeholder="Stars from" onChange={this.handleChangeFromInput} ref="input" />
                <Input type="text" placeholder="Stars to" onChange={this.handleChangeMaxInput} ref="inp" />
            </div>
        );
    }
});
