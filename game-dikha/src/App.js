import React from  "react"
import Form from 'react-bootstrap/Form'
import PlayerRegistrationForm from "./register-player/register-player.component"
import EditPlayerDetails from "E:/Web_Development/patient-registration-form/src/edit-player-details/edit-details.component.js"
import ViewPlayers from "E:/Web_Development/patient-registration-form/src/view-players/view-players.component"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import the from "./resources/the.png"
import Navbar from 'react-bootstrap/Navbar'
import game_dikha from "./resources/game_dikha.png"
import "bootstrap/dist/css/bootstrap.min.css";
export default class App extends React.Component {
  render () {
    return (
      <Router >
          <div className="container" >
          <Navbar bg="dark" variant="dark" className=" justify-content-between rounded-lg">
            {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-lg"> */}
              <Form inline>
                <img src={the} width="125" height="105" />
                <Link to="/gamedikha" className="navbar-brand"><img src={game_dikha} width ="260" height = "105"/></Link>
              </Form>
              <Form inline>
                <div className="collpase navbar-collapse">
                  <ul className="navbar-nav mr-auto">
                    <li className="navbar-item ">
                      <Link to="/view" className="nav-link ">Rankings</Link>
                    </li>
                    <li className="navbar-item ">
                      <Link to="/register" className="nav-link">Registration</Link>
                    </li>
                  </ul>
                </div>
              </Form>
            {/* </nav> */}
            </Navbar>
          <br />
          {/* <Route path="/gamedikha" exact component={GameDikha} /> */}
          <Route path="/view" exact component={ViewPlayers} />
          <Route path="/edit/:id" component={EditPlayerDetails} />
          <Route path="/register" component={PlayerRegistrationForm} />
          </div>
      </Router> 
      )
  }
}