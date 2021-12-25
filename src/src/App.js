import './App.css';
import TopBar from './components/TopBar';
import yin_yang from './img/yinyang.png';
import yin_yang2 from './img/yinyang2.png';

export default function App() {
    return (
      <div className="page-container">
        <TopBar />
        <div className="landing-main-area mt-5">
          <img src={yin_yang2} className="yinyang"/>
        </div>
      </div>
    );
}
