import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CoinList from './materialcomponent/coinlist';
import CoinListItemDetail from './component/coinlistitemdetail';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, useLocation, useParams } from 'react-router-dom';

//const root = ReactDOM.createRoot(document.getElementById('root'));

const Wrapper = (props) => {
  const params = useParams();
  const location = useLocation();
  return <CoinListItemDetail {...{...props, match: {params}, location} } />
}

ReactDOM.render(
<React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<CoinList />} />
      {/*<Route path="/" element={<News />} />*/}
      <Route path="/detail/:name" element={<Wrapper />} />
    </Routes>
  </BrowserRouter>
</React.StrictMode>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
