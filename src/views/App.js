import logo from './logo.svg';
import './App.scss';
import DemoComponent from './Example/demoComponent';

/**
 * có 2 kiểu components: class component / function component (function, arrow)
 * B1: Tạo component
 * B2: Import component vừa tạo vào file muốn run
 * B3: Gõ tên compont vào vị trí muốn show (giống thẻ html)
 */

function App() {
  // const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World With React Js (NTD)
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <DemoComponent></DemoComponent>
      </header>
    </div>
  );
}

export default App;
