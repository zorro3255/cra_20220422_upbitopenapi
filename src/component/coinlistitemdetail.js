import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import News from './news';
import Header from './header';
import {Navigation} from './navigation';

const CSSBlock = styled.div`
.title{
    background-color:#cccccc;
    width:30%;
    font-size: 10pt;
    padding 0px 5px;
}

.body{
    padding 0px 5px;
}
`;

class CoinListItemDetail extends React.Component {
    state = {
        data: {}
    }

    getData = () => {
        const { name } = this.props.match.params;
        const url = 'https://api.upbit.com/v1/ticker?markets=' + name;
        axios.get(url).then(response => { this.setState({ data: response.data[0] }); }).catch(error => console.error(error));
    };

    componentDidMount() {
        this.getData();
    }

    render() {
        console.log(this.props);
        const { trade_date_kst, trade_time_kst, opening_price, high_price, low_price, trade_price } = this.state.data;
        return (
            <React.Fragment>
                <CSSBlock>
                <Navigation />
                <Header title="상세정보" />
                    <table className="tbl">
                        <thead>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="title">종목구분</td>
                                <td className="body">{this.props.match.params.name}</td>
                            </tr>
                            <tr>
                                <td className="title">최근 거래 일자(KST)</td><td className="body">{trade_date_kst}</td>
                            </tr>
                            <tr>
                                <td className="title">최근 거래 시각(KST)</td><td className="body">{trade_time_kst}</td>
                            </tr>
                            <tr>
                                <td className="title">시가</td><td className="body">{opening_price}</td>
                            </tr>
                            <tr>
                                <td className="title">고가</td><td className="body">{high_price}</td>
                            </tr>
                            <tr>
                                <td className="title">저가</td><td className="body">{low_price}</td>
                            </tr>
                            <tr>
                                <td className="title">종가</td><td className="body">{trade_price}</td>
                            </tr>
                        </tbody>
                    </table>
                </CSSBlock>
                <News market={this.props.location.search.replace('?korean_name=', '')} />
            </React.Fragment>
        );
    }
}

export default CoinListItemDetail;