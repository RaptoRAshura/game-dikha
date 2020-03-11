import React from "react"
import FormRender from "./register-player-view.component"
import axios from "axios"
export default class PlayerRegistrationForm extends React.Component {
    constructor() {
        super()
            this.state = {
            FirstName : "",
            LastName : "",  
            Email : "",
            ContactNumber : "", 
            City : "", 
            StateOrProvince : "",
            Team : "",
            Speciality : "",
            Company : "", 
            UserName : "",
            Password : ""
            }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(e) {

        e.preventDefault()
        const newPlayer = { 
            FirstName: this.state.FirstName,
            LastName: this.state.LastName,
            Gender: this.state.Gender,
            Email: this.state.Email,
            ContactNumber: this.state.ContactNumber,
            City: this.state.City,
            StateOrProvince: this.state.StateOrProvince,
            Team: this.state.Team,
            Speciality: this.state.Speciality,
            Company: this.state.Company,
            UserName: this.state.UserName,
            Password: this.state.Password 
        } 

        axios.post('http://localhost:4000/registration_data/add/', newPlayer)
          .then((result) => {
            alert(result)
            console.log(result.data)
          })
        this.setState({
            FirstName : "",
            LastName : "",  
            Email : "",
            ContactNumber : "", 
            City : "", 
            StateOrProvince : "",
            Team : "",
            Speciality : "",
            Company : "", 
            UserName : "",
            Password : ""
        })

    }
    handleChange(event) {
        const {name, value} = event.target
        this.setState({[name] : value})
    }
    render() {
        return(
            <div className="card border-0 shadow my-5">
            <div className="card-body p-5">
            <FormRender 
                Data = {this.state}
                handleChange = {this.handleChange}
                handleSubmit = {this.handleSubmit}
            />
            </div>
            </div>
        )
    }
}