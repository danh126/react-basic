import logo from './logo.svg';
import './App.scss';
import './Todos/ListTodo.scss';
import './Nav/nav.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

import ListTodo from './Todos/ListTodo';
import FormComponent from './Example/FormComponent';
import Nav from './Nav/nav';
import Home from './Nav/home';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ListUsers from './Users/ListUsers';

/**
 * có 2 kiểu components: class component / function component (function, arrow)
 * B1: Tạo component
 * B2: Import component vừa tạo vào file muốn run
 * B3: Gõ tên compont vào vị trí muốn show (giống thẻ html)
 */

function App() {
  // const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/todo">
              <ListTodo />
            </Route>
            <Route path="/about">
              <FormComponent />
            </Route>
            <Route path="/users">
              <ListUsers />
            </Route>
          </Switch>
        </header>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light" />
        {/* Same as */}
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
