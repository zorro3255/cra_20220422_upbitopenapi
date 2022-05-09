import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h1 style={this.props.style}>{this.props.title}</h1>
            </React.Fragment>
        );
    }
}

Header.propTypes = {
    title: PropTypes.string,
    style: PropTypes.object
};

Header.defaultProps={
    title: "title을 입력하세요."
}

export default Header;