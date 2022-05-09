import React from 'react';
import axios from 'axios';
import '../component/coin.css';
import Header from '../component/header';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
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
        //const list = data.filter(item => item.market.indexOf('KRW-') > -1 && (item.korean_name.indexOf(this.state.searchWord) > -1 || item.english_name.indexOf(this.state.searchWord) > -1)).map(item => item.market);
        //console.log(list.join(','));
        return data.filter(item => item.market.indexOf('KRW-') > -1 && (item.korean_name.indexOf(this.state.searchWord) > -1 || item.english_name.indexOf(this.state.searchWord) > -1)).sort((a, b) => a.korean_name > b.korean_name ? -1 : 1);
    }

    getData = () => {
        const url = 'https://api.upbit.com/v1/market/all?isDetails=true';
        const url2 = 'https://api.upbit.com/v1/ticker?markets=';
        axios.get(url).then(response => {
            const aaa = response.data;
            const url3 = `${url2}${this.FilterAndSortData(response.data).map(item => item.market).join(',')}`;
            //console.log(url3);
            axios.get(url3).then(response => { /*console.log(response.data);*/ this.setState({ data: response.data.map(item => {
                const bbb = aaa.filter(item1 => item1.market===item.market)[0]; return {...item, ...bbb};
            }), call: true }) 
        })}
        ).catch(error => console.error(error));
    };

    componentDidMount() {
        this.getData();
        setInterval(() => {/*console.log('호출');*/ this.getData();}, 10000);
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

    AddComma(num){
        return String(num).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    render() {
        return (
            <React.Fragment>
                <Navigation />
                <Header title="코인목록" />
                <div className='search'>
                    <TextField label="암호화폐명" onKeyUp={this.onKeyUp} onBlur={this.onBlur} /> <Button variant="contained" color="primary" onClick={this.onClick}>검색</Button>
                </div>
                <TableContainer>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>업비트 제공<br />시장 정보</TableCell>
                                <TableCell>암호화폐명</TableCell>
                                <TableCell>현재가</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.data.length === 0 && !this.state.call ? <TableRow key='nodata'><TableCell align="center" colSpan="2">
                                Loading...</TableCell></TableRow> : (this.state.data.length === 0 && this.state.call ? <TableRow key='nodata'><TableCell align="center" colSpan="2">
                                    검색결과가 없습니다.</TableCell></TableRow> : this.state.data.map(item => (<TableRow key={item.market}>
                                        <TableCell scope="row">{item.market}</TableCell>
                                        <TableCell align="left"><Link to={{pathname:`/detail/${item.market}?korean_name=${encodeURIComponent(item.korean_name)}`}}><SettingConsumer>{value => {let name = value.state.lang === 'en' ? item.english_name : item.korean_name; return name;}}</SettingConsumer>{item.market_warning === 'CAUTION' ? <span className="warning" style={this.props.style}>*</span> : null}</Link></TableCell>
                                        <TableCell align="right">{this.AddComma(item.trade_price)}</TableCell>
                                    </TableRow>)))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </React.Fragment>
        );
    }
}

export default CoinList;