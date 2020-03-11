import React from "react"

export default function FormRender(props) {
    return(
        <div className = "playerform "  style={{marginTop: 10}} >
            <h3 className= "text-muted">Register New Player</h3>
            <hr></hr>
            <form onSubmit = {props.handleSubmit} className= "needs-validation" noValidate>
                <label htmlFor="fullname" className ="col-form-label">Full Name</label>   
                <div className="form-group row " id="fullname"> 
                    <div className= "col-sm-4">
                        <input className="form-control"
                            id="firstname"
                            type = "text" 
                            name = "FirstName" 
                            value = {props.Data.FirstName} 
                            onChange = {props.handleChange}
                            required
                            /> 
                        <small id="firstnamehelp" className="form-text text-muted">Enter your first name.</small>
                    </div>    
                    <div className= "col-sm-4"> 
                        <input className="form-control"
                            id = "lastname"
                            type = "text" 
                            name = "LastName" 
                            value = {props.Data.LastName}
                            onChange = {props.handleChange}
                            required/>
                            <div className="valid-feedback">
                            Looks good!
                            </div>
                        <small id="lastnamehelp" className="form-text text-muted">Enter your last name.</small>
                    </div>
                </div>
            
                
                
               
                
                <hr></hr> 
                <div className= "form-group row ">
                    <label htmlFor ="email-address" className="col-sm-4 col-form-label" >Email</label>
                    <div className="col-sm-4">
                    <input  className="form-control"
                        id = "email-address"
                        type = "email" 
                        name = "Email" 
                        value = {props.Data.Email} 
                        placeholder = "abcd@example.com" 
                        onChange = {props.handleChange}
                        required/>
                    </div> 
                </div>
                <div className= "form-group row ">
                    <label htmlFor ="phone" className="col-sm-4 col-form-label" >Phone Number</label>
                    <div className="col-sm-4">
                    <input className="form-control"
                        id = "phone"
                        type = "phone" 
                        name = "ContactNumber" 
                        value = {props.Data.ContactNumber} 
                        onChange = {props.handleChange}
                        required/>
                    </div> 
                </div>
                
                
                <div className= "form-group row ">
                
                        <label htmlFor ="city" className="col-sm-1 col-form-label" >City</label>
                        <div className="col-sm-3">
                            <input className="form-control"
                                id = "city"
                                type = "text" 
                                name = "City"
                                value = {props.Data.City}  
                                onChange = {props.handleChange}
                                required
                            />
                        </div> 
                
                    
                        <label htmlFor ="states" className="col-sm-1 col-form-label" >State</label>
                        <div className="col-sm-3">
                            <input className="form-control"
                                id = "states"
                                type = "text" 
                                name = "StateOrProvince"
                                value = {props.Data.StateOrProvince}  
                                onChange = {props.handleChange}
                                required
                            />
                        </div>       
                </div>    
                <hr></hr>

          
                
                 <div className= "form-group row ">
                    <label htmlFor ="team-name" className="col-sm-4 col-form-label" >Team</label>
                    <div className="col-sm-4">
                    <input  className="form-control"
                        id = "team-name"
                        type = "text" 
                        name = "Team" 
                        value = {props.Data.Team} 
                        onChange = {props.handleChange}
                        required/>
                        <small id="teamhelp" className="form-text text-muted">Enter your permanent team name.</small>
                    </div> 
                </div>
                <div className= "form-group row ">
                    <label htmlFor ="speciality" className="col-sm-4 col-form-label" >Speciality</label>
                    <div className="col-sm-4"> 
                        <select className="custom-select" id="speciality"
                            value = {props.Data.Speciality} 
                            name = "Speciality"
                            onChange = {props.handleChange}
                            >
                                <option value = "choose">Choose</option>
                                <option value = "batsman">Batsman</option>
                                <option value = "bowler">Bowler</option>
                                <option value = "keeper">Keeper</option>
                                <option value = "allrounder">All Rounder</option>
                                
                        </select>
                        <small id="specialityehelp" className="form-text text-muted">Choose wheter you are a bowler/batsman/keeper.</small>
                    </div>
                 </div>
                <div className= "form-group row ">
                    <label htmlFor ="company-name" className="col-sm-4 col-form-label" >Company</label>
                    <div className="col-sm-4">
                    <input  className="form-control"
                        id = "company-name"
                        type = "text" 
                        name = "Company" 
                        value = {props.Data.Company} 
                        onChange = {props.handleChange}
                        required/>
                        <small id="Companyhelp" className="form-text text-muted">Enter your Company/Organization name.</small>
                    </div> 
                </div>
                <div className= "form-group row ">
                    <label htmlFor ="username" className="col-sm-4 col-form-label" >User Name</label>
                    <div className="col-sm-4">
                    <input  className="form-control"
                        id = "user-name"
                        type = "text" 
                        name = "UserName" 
                        value = {props.Data.UserName} 
                        onChange = {props.handleChange}
                        required/>
                        <small id="usernamehelp" className="form-text text-muted">Enter your user name.</small>
                    </div> 
                </div>
                <div className= "form-group row ">
                    <label htmlFor ="password" className="col-sm-4 col-form-label" >Password</label>
                    <div className="col-sm-4">
                    <input  className="form-control"
                        id = "password"
                        type = "password" 
                        name = "Password" 
                        value = {props.Data.Password} 
                        onChange = {props.handleChange}
                        required/>
                        <small id="passwordhelp" className="form-text text-muted">Enter your password.</small>
                    </div> 
                </div>
                
                <hr></hr>
                <button className="btn btn-primary" type = "submit"  >Submit</button> 
            </form>
            <hr></hr>
        </div>
    )
}

{/* <div className="form-group" id="takingmed"> 
                    <div className="form-check form-check-inline col-sm-3">
                    <input className="form-control-input-false"
                        id = "takingmedcheck"
                        type="checkbox" 
                        name="takingMed"
                        checked={props.Data.takingMed}
                        onChange={props.handleChange}
                        required
                        />
                        <label className="form-check-label" htmlFor="takingmed">Taking any Medication?</label>
                    </div>
                </div> */}
{/* <label htmlFor="gender" >Gender*</label> 
                <div className="form-group" id="gender"> 
                    <div className="form-check form-check-inline col-sm-2">
                    <input className="form-check-input"
                        id = "radiomale"
                        type="radio" 
                        name="gender"
                        value="male"
                        checked={props.Data.gender === "male"}
                        onChange={props.handleChange}
                        required
                        />
                        <label className="form-check-label" htmlFor="radiomale">Male</label>
                    </div>
            
                    <div className="form-check form-check-inline col-sm-2">
                    <input className="form-check-input"
                        id="radiofemale"
                        type="radio" 
                        name="gender"
                        value="female"
                        checked={props.Data.gender === "female"}
                        onChange={props.handleChange}
                        required
                        /> 
                    <label className="form-check-label" htmlFor="radiomale">Female</label>
                    </div>
                </div> */}