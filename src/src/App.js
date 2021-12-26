import './App.css';
import TopBar from './components/TopBar';
import yin_yang from './img/yinyang.png';
import yin_yang_black from './img/yinyangblack.png';
import yin_yang_white from './img/yinyangwhite.png';

export default function App() {
    return (
      <div className="page-container">
        <TopBar />
        <div className="landing-main-area mt-5">
          <img src={yin_yang} className="yinyang" type="button" onclick={alert("Testing")}/>
          <div className="composite-yin-yang">
            <img src={yin_yang_black} className="yinyang"/>
            <img src={yin_yang_white} className="yinyang"/>
          </div>
        </div>
      </div>
    );
}
