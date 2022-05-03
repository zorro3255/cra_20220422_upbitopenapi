import React from 'react';
import axios from 'axios';
import '../component/coin.css';
import Header from '../component/header';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {Link} from 'react-router-dom';
import {Navigation} from '../component/navigation';
import {SettingConsumer} from '../context/context';

class CoinList extends React.Component {
    state = {
        data: [],
        sortField: '',
        sortOrder: '',
        searchWord: '',
        call: false
    }

    tempSearhWord = '';

    FilterAndSortData(data) {
        return data.filter(item => item.market.indexOf('KRW-') > -1 && (item.korean_name.indexOf(this.state.searchWord) > -1 || item.english_name.indexOf(this.state.searchWord) > -1)).sort((a, b) => a.korean_name > b.korean_name ? -1 : 1);
    }

    getData = () => {
        const url = 'https://api.upbit.com/v1/market/all?isDetails=true';
        axios.get(url).then(response => {
            this.setState({ data: this.FilterAndSortData(response.data), call: true });
        }).catch(error => console.error(error));
    };

    componentDidMount() {
        this.getData();
    }

    onClick = (e) => {
        this.setSearchWord(this.tempSearchWord);
    };

    setSearchWord = (searchWord) => {
        this.setState({ searchWord: searchWord }, this.getData);
    };

    onKeyUp = (e) => {
        if (e.keyCode === 13) {
            this.setSearchWord(e.target.value);
        }
    };

    onBlur = (e) => {
        this.tempSearchWord = e.target.value;
    };

    render() {
        return (
            <React.Fragment>
                <Navigation />
                <Header title="코인목록" />
                <div className='search'>
                    <TextField label="암호화폐명" onKeyUp={this.onKeyUp} onBlur={this.onBlur} /> <Button variant="contained" color="primary" onClick={this.onClick}>검색</Button>
                </div>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>업비트 제공<br />시장 정보</TableCell>
                                <TableCell>암호화폐명</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.data.length === 0 && !this.state.call ? <TableRow key='nodata'><TableCell align="center" colSpan="2">
                                Loading...</TableCell></TableRow> : (this.state.data.length === 0 && this.state.call ? <TableRow key='nodata'><TableCell align="center" colSpan="2">
                                    검색결과가 없습니다.</TableCell></TableRow> : this.state.data.map(item => (<TableRow key={item.market}>
                                        <TableCell scope="row">{item.market}</TableCell>
                                        <TableCell align="left"><Link to={{pathname:`/detail/${item.market}?korean_name=${encodeURIComponent(item.korean_name)}`}}><SettingConsumer>{value => {let name = value.state.lang === 'en' ? item.english_name : item.korean_name; return name;}}</SettingConsumer>{item.market_warning === 'CAUTION' ? <span className="warning">*</span> : null}</Link></TableCell>
                                    </TableRow>)))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </React.Fragment>
        );
    }
}

export default CoinList;