import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const CSSBlock = styled.span`
.warning{
    color: red;
}
`;

class CoinListItem extends React.Component {
    render() {
        const { market, korean_name, english_name, market_warning } = this.props.data;
        return (
            <React.Fragment>
                <tr>
                    <td>{market}</td><td><Link to={{pathname:`/detail/${market}?korean_name=${encodeURIComponent(korean_name)}`}}>{korean_name}({english_name})</Link>{market_warning === 'CAUTION' ?<CSSBlock><span className="warning">*</span></CSSBlock> : null}</td>
                </tr>
            </React.Fragment>
        );
    }
}

export default CoinListItem;