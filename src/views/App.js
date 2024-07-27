import logo from './logo.svg';
import './App.scss';
import DemoComponent from './Example/demoComponent';
import FormComponent from './Example/FormComponent';

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
        <FormComponent />
      </header>
    </div>
  );
}

export default App;
