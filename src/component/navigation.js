import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CSSBlock = styled.div`
ol, ul {
    list-style-type: none;
}

.lnb_menu {
    position: relative;
    z-index: 5900;
    border-bottom: 1px solid #ebeeef;
    -webkit-box-shadow: 0 1px 4px 0 rgb(0 0 0 / 5%);
    box-shadow: 0 1px 4px 0 rgb(0 0 0 / 5%);
    outline: 0;
    letter-spacing: -.25px;
    background-color: #fff;
}

li {
    text-align: -webkit-match-parent;
}

a:-webkit-any-link {
    color: -webkit-link;
    cursor: pointer;
}

.lnb_menu li a{
    display: 'block';
    float: 'left';
    overflow: 'hidden';
    position: 'relative';
    height: '51px';
    padding: '0 12px';
    fontSize: '1.5rem';
    lineHeight: '51px';
    color: '#202020';
    fontWeight: '500';
    whiteSpace: 'nowrap';
    textDecoration: 'none';
}
`;

class Navigation extends React.Component {
    render() {
        return (
            <React.Fragment>
                <CSSBlock>
                <div class="lnb_group">
                    <div class="lnb_menu">
                        <ul role="tablist" class="base">
                            <li role="presentation" class="menu">
                                <Link to="/">메인목록</Link></li></ul> </div></div>
                                </CSSBlock>
            </React.Fragment>
        );
    }
}

export { Navigation };