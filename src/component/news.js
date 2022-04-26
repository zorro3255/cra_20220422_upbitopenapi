import axios from 'axios';
import React from 'react';
import NewsItem from './newsitem';

class News extends React.Component{
    state={
        data:[]
    };

    getData = () =>{
        const url = '/v1/search/news.json?query='+this.props.market; 
        axios.get(url, {headers: { 'X-Naver-Client-Id': 'HNnhP0fKkhnuNfXxlG7u', 'X-Naver-Client-Secret': 'wndYohlBPa'}}).then(response => {this.setState({data:response.data.items})});
    };

    componentDidMount(){
        this.getData();
    }

    render(){
        const items = this.state.data.map((item, index) => <NewsItem key={index} data={item} />);

        return(
            <React.Fragment>
                {items}
            </React.Fragment>
        );
    }
}

export default News;