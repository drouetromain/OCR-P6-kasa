import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import About from './pages/About'
import Logements from './pages/Logements'
import Footer from './components/Footer'
import Error from './components/Error'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* {/* exact
                path="/"
                render={() => {
                    return (
                      this.state.isUserAuthenticated ?
                      <Redirect to="/home" /> :
                      <Redirect to="/test1" /> 
                    )
                }} 
        <Route exact path="/logement/:idLogement"
          render={() => {
            return (
              element = {< Logements />} : element={<Error />}
              )
            }
          } /> */}
        <Route path="/logement/:idLogement" element={<Logements />} />
        {/* <Route path='/logement/:idLogement'exact={false} component={<Error />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
