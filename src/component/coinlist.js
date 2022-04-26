import React from 'react';
import CoinListItem from './coinlistitem';
import axios from 'axios';
import './coin.css';
import Header from './header';

class CoinList extends React.Component {
    state = {
        data: [],
        searchword: ""
    }

    getData = () => {
        const url = 'https://api.upbit.com/v1/market/all?isDetails=true';
        axios.get(url).then(response => { this.setState({ data: response.data.filter(item => item.market.indexOf('KRW-') > -1 && (item.korean_name.indexOf(this.state.searchword) > -1 || item.english_name.indexOf(this.state.searchword) > -1)).sort((a, b) => a.korean_name > b.korean_name ? -1 : 1) }); }).catch(error => console.error(error));
    };

    componentDidMount() {
        this.getData();
    }

    onClick = (e) => {
        this.setState({ searchword: this.search.value }, this.getData);
    };

    onKeyUp = (e) => {
        if (e.keyCode === 13) {
            this.onClick();
        }
    };

    render() {
        return (
            <React.Fragment>
                <Header title="코인목록" />
                <div className='search'>
                    암호화폐명: <input type='text' ref={ref => this.search = ref} onKeyUp={this.onKeyUp} /> <button type='button' onClick={this.onClick}>검색</button>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>업비트 제공<br />시장 정보</th>
                            <th>암호화폐 한글명(영문명)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.length === 0 ? <tr><td colSpan="2">Loading...</td></tr> : this.state.data.map(item => <CoinListItem data={item} key={item.market} />)}
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}

export default CoinList;