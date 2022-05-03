import React from 'react';
import bitcoin from '../bitcoin.jpg';
import { Link } from 'react-router-dom';
import {SettingConsumer} from '../context/context';

class Hello extends React.Component {
    state={
        seconds: 10,
        text: '앱을 초기화 하는 중입니다.'
    }

    componentDidMount(){
        /*
        const timer = setInterval(
            ()=>{this.setState({seconds: this.state.seconds - 1}, 
                ()=>{if(this.state.seconds===0){
            clearInterval(timer);this.props.navigate('/coinlist')
        }})}, 1000);
        */

        const a = setInterval(()=>{
            this.setState({text: `${this.state.text}.`})
        }, 1000);

       setTimeout(()=>{clearInterval(a); this.props.navigate('/coinlist')}, 7000);
    }

    render() {
        return (
            <React.Fragment>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '95vh' }}>
                    <img width="30%" src={bitcoin} alt="bitcoin" />
                    {/*<div><Link to="/coinlist">들어가기</Link></div>
                    <div>{this.state.seconds}초후 목록으로 이동</div>*/}
                    <div>{this.state.text}</div>
                    {/*
                        <SettingConsumer>{
                            value => <div style={{margin:'10px 0px'}}><input type="radio" id="ko" name="languageSetting" value="ko" checked={value.state.lang==='ko'?true:false} onChange={() => value.action.setLang('ko')} /><label htmlFor="ko">한국어</label>&nbsp;&nbsp;&nbsp;<input type="radio" id="en" name="languageSetting" value="en" onChange={() => value.action.setLang('en')} checked={value.state.lang==='en'?true:false} /><label htmlFor="en">영어</label></div>}               
                        </SettingConsumer>
                        */} 
                </div>
            </React.Fragment>
        );
    }
}

export default Hello;