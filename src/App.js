import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import HomeScreen from './screens/homeScreen/HomeScreen';
import LoginScreen from './screens/loginScreen/LoginScreen';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import './_app.scss';

const Layout = ({ children }) => {
  const [sidebar, toggleSidebar] = useState(false);
  const handleToggleSidebar = () => toggleSidebar((value) => !value);
  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className='app__container border border-info'>
        <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
        <Container fluid className='app__main border border-warning'>
          {children}
        </Container>
      </div>
    </>
  );
};
const App = () => {
  return (
    // <>
    //   <Header handleToggleSidebar={handleToggleSidebar} />
    //   <div className='app__container border border-info'>
    //     <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
    //     <Container fluid className='app__main border border-warning'>
    //       <HomeScreen />
    //     </Container>
    //   </div>
    // </>
    <Router>
      <Switch>
        <Route path='/' exact>
          <Layout>
            <HomeScreen />
          </Layout>
        </Route>
        <Route path='/auth'>
          <LoginScreen />
        </Route>
        <Route path='/search'>
          <h1>Search</h1>
        </Route>

        <Route>
          <Redirect to='/' />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
