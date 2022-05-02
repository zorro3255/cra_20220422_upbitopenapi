import React from 'react';
import bitcoin from '../bitcoin.jpg';
import { Link } from 'react-router-dom';

class Hello extends React.Component {
    render(){
        return (
            <React.Fragment>
                <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', minHeight:'95vh'}}>
                    <img width="30%" src={bitcoin} alt="bitcoin" />
                    <div><Link to="/coinlist">들어가기</Link></div>
                </div>
            </React.Fragment>
        );
    }
}

export default Hello;