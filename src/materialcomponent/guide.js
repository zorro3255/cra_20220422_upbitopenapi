import React from 'react';
import Header from '../component/header';

class Guide extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Header title="소개" />
                <div>
                    코인정보를 확인하고 관련 뉴스를 확인할 수 있는 사이트
                </div>
            </React.Fragment>
        );
    }
}

export default Guide;