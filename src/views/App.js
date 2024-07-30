import logo from './logo.svg';
import './App.scss';
import './Todos/ListTodo.scss';

// import FormComponent from './Example/FormComponent';
import ListTodo from './Todos/ListTodo';

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
        <p>Simple ToDo App With Reactjs (NTD)</p>
        {/* <FormComponent /> */}
        <ListTodo />
      </header>

    </div>
  );
}

export default App;
