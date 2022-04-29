import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CSSBlock = styled.div`
.Nlnb_inner:after {
    display: table;
    clear: both;
    content: '';
}

.Nlnb {
    height: 39px;
    border-bottom: 1px solid #e5e5e5;
    background-color: #fff;
}

.Nlnb .Nnav .Nnav_item {
    display: inline-block;
    position: relative;
    font-size: 12pt;
    color: #2b2b2c;
    line-height: 39px;
    font-weight: bold;
}

.Nlnb .Nnav .Nnav_cell {
    position: relative;
    float: left;
    margin-right: 20px;
}

.Nlnb .Nnav .Nnav_item_active {
    color: #03c75a;
}

.Nlnb .Nnav .Nnav_item_active:after,
.Nlnb .Nnav .Nmore .Nnav_item_active .Nnav_txt:after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
    border-bottom: 3px solid #03c75a;
}

.Nlnb .Nnav .Nmore .Nnav_item_active:after {
    display: none;
}

ul, ol {
    list-style: none
}

a {
    text-decoration: none;
    color: inherit;
}
`;

class Navigation extends React.Component {
    render() {
        return (
            <React.Fragment>
                <CSSBlock>
                    <div class="Nlnb">
                        <ul class="Nnav">
                            <li class="Nnav_cell"><Link to="/">코인리스트</Link></li>
                            <li class="Nnav_cell"><Link to="/guide">안내</Link></li>
                        </ul>
                    </div>
                </CSSBlock>
            </React.Fragment>
        );
    }
}

export { Navigation };