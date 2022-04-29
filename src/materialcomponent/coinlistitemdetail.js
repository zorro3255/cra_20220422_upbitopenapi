import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import News from '../component/news';
import Header from '../component/header';
import { Navigation } from '../component/navigation';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const CSSBlock = styled.div`
.title{
    background-color:#eeeeee;
    width: 50%;
}

@media screen and (min-width:800px){
    .title{
        width: 25%;
    }
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

    AddComma(num){
        return String(num).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    
    AddDash(date){
        return String(date).toString().replace(/\B(?=(\d{2})+(?!\d))/g, "-");
    }

    AddColon(time){
        return String(time).toString().replace(/\B(?=(\d{2})+(?!\d))/g, ":");
    }

    render() {
        console.log(this.props);
        const { trade_date_kst, trade_time_kst, opening_price, high_price, low_price, trade_price } = this.state.data;
        return (
            <React.Fragment>
                <Navigation />
                <Header title="상세정보" />
                <CSSBlock>
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <TableBody>
                                <TableRow>
                                    <TableCell className="title">종목구분</TableCell>
                                    <TableCell>{this.props.match.params.name}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="title">최근 거래 일자(KST)</TableCell>
                                    <TableCell>{trade_date_kst}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="title">최근 거래 시각(KST)</TableCell>
                                    <TableCell>{this.AddColon(trade_time_kst)}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="title">시가</TableCell>
                                    <TableCell>{this.AddComma(opening_price)}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="title">고가</TableCell>
                                    <TableCell>{this.AddComma(high_price)}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="title">저가</TableCell>
                                    <TableCell>{this.AddComma(low_price)}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="title">종가</TableCell>
                                    <TableCell>{this.AddComma(trade_price)}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </CSSBlock>
                <News market={this.props.location.search.replace('?korean_name=', '')} />
            </React.Fragment>
        );
    }
}

export default CoinListItemDetail;