import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './css/bootstrap.min.css';
import Posts from './components/Posts';
import PostPage from './components/PostPage';
import Test from './components/Test';
import AntdTest from './components/AntdTest';
const Home = () => (
    <div className="jumbotron">
      <div className="col-sm-8 mx-auto">
        <h1>Hello React!</h1>
      </div>
    </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Tets = () => (
  <div>
    <h2>Test</h2>
  </div>
)

const AntdTest1 = () => (
    <div>
      <h1>Antd Test</h1>
    </div>
)

const Routes = () => (
  <Router>
    <div>
      <nav className="navbar navbar-light bg-faded rounded navbar-toggleable-md">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="#">Navbar</a>

        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link" > Home </Link>
            </li>
            <li className="nav-item">
              <Link to="/posts" className="nav-link" > Posts </Link>
            </li>
            <li className="nav-item">
              <Link to="/test" className="nav-link" > Test </Link>
            </li>
            <li className="nav-item">
              <Link to="/antd" className="nav-link" > Antd Test </Link>
            </li>
          </ul>
        </div>
      </nav>
      <br/>
      <div className="container">

      <Route exact path="/" component={Home}/>
      <Route exact path="/posts" component={Posts}/>
      <Route exact path="/posts/:id" component={PostPage}/>
      <Route path="/about" component={About}/>
      <Route exact path="/test" component={Test} />
        <Route exact path="/antd" component={AntdTest} />
      </div>
    </div>
  </Router>
)
export default Routes