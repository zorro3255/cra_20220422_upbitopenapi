import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CoinList from './materialcomponent/coinlist';
import CoinListItemDetail from './materialcomponent/coinlistitemdetail';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, useLocation, useParams, useNavigate } from 'react-router-dom';
import Guide from './materialcomponent/guide';
import Hello from './component/hello';
import { SettingProvider } from './context/context';

//const root = ReactDOM.createRoot(document.getElementById('root'));

const Wrapper = (props) => {
  const params = useParams();
  const location = useLocation();
  return <CoinListItemDetail {...{ ...props, match: { params }, location }} />
}

const Wrapper1 = (props) => {
  const navigate = useNavigate();
  return <Hello {...{ ...props, navigate }} />
}

ReactDOM.render(
  <React.StrictMode>
    <SettingProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Wrapper1 />} />
          <Route path="/coinlist" element={<CoinList />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/detail/:name" element={<Wrapper />} />
        </Routes>
      </BrowserRouter>
    </SettingProvider>
  </React.StrictMode>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
