import React, { Component } from 'react'
import axios from "axios"
import 'E:/Web_Development/patient-registration-form/src/index.js'
import point_trophy from 'E:/Web_Development/patient-registration-form/src/resources/point_trophy.png'
import first_medal from 'E:/Web_Development/patient-registration-form/src/resources/first_medal.png'
import second_medal from'E:/Web_Development/patient-registration-form/src/resources/second_medal.png'
import third_medal from 'E:/Web_Development/patient-registration-form/src/resources/third_medal.png'
import no_medal from 'E:/Web_Development/patient-registration-form/src/resources/no_medal.png'

 
const Batsman = props => (
    
    <tr>
        <td>{props.player.Name}</td>
        <td>{props.player.Team}</td>   
        <td>{props.player.Runs}</td>    
        <td>{props.player.Matches}</td>
        <td><img src={props.player.medal} height= "30" width = "20" style = {{margin : 5}}/> {props.player.Ranking}</td>
        <td><img src={point_trophy} height= "30" width = "30" style = {{margin : 5}}/>
            {props.player.Points}</td>
        
    </tr>
)


const Bowler = props => (
    
    <tr>
        <td>{props.player.Name}</td>
        <td>{props.player.Team}</td>   
        <td>{props.player.Wickets}</td>    
        <td>{props.player.Matches}</td>
        <td><img src={props.player.medal} height= "30" width = "20" style = {{margin : 5}}/> {props.player.Ranking}</td>
        <td><img src={point_trophy} height= "30" width = "30" style = {{margin : 5}}/>
            {props.player.Points}</td>
        
    </tr>
)
const requestBtmn = axios.get('http://localhost:4000/registration_data/btmn');
const requestBowler = axios.get('http://localhost:4000/registration_data/bowler');

export default class ViewPlayers extends Component {
    constructor() {
        super()
        this.state = {
            batsman : [],
            bowler : []
        }
    }
    
    componentDidMount() {
        axios.all([requestBtmn, requestBowler])
        .then(axios.spread((...responses) => {
            const responseBtmn = responses[0]
            const responseBowler = responses[1]
            let resultBtmn = responseBtmn.data.map((myplayer) => {
                if (myplayer.Ranking === 1) { myplayer.medal = first_medal }
                else if (myplayer.Ranking === 2) { myplayer.medal = second_medal }
                else if (myplayer.Ranking === 3) { myplayer.medal = third_medal }
                else { myplayer.medal = no_medal }
                return myplayer
            })
            this.setState({batsman: resultBtmn})

            let resultBowler = responseBowler.data.map((myplayer) => {
                if (myplayer.Ranking === 1) { myplayer.medal = first_medal }
                else if (myplayer.Ranking === 2) { myplayer.medal = second_medal }
                else if (myplayer.Ranking === 3) { myplayer.medal = third_medal }
                else { myplayer.medal = no_medal }
                return myplayer
            })
            this.setState({bowler: resultBowler})

            console.log(responseBtmn,responseBowler)
        })
        )
        .catch((err) => {
            console.log(err)
        })
    }
        batsmanList() {
        
        return this.state.batsman.map((currentPlayer, i) => {
            return <Batsman player = {currentPlayer} key={i} />
        })
    }
    bowlerList() {
        
        return this.state.bowler.map((currentPlayer, i) => {
            return <Bowler player = {currentPlayer} key={i} />
        })
    }
    render() {
        return (
            <div >
                <div className="card border-0 shadow my-5">
                <div className="card-body p-5">
                <h4 className="text-muted">BATSMAN RANKING</h4>
                <div className = "table-responsive border-lg" >
                <table className="table table-striped table-hover table-bordered " style={{ marginTop: 20 }} >
                    <thead className="thead thead-dark">
                        <tr>
                            <th >NAME</th>
                            <th >TEAM</th>
                            <th >RUNS</th>
                            <th >MATCHES</th>
                            <th >RANK</th>
                            <th >POINTS</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        { this.batsmanList() }
                    </tbody>
                </table>
               </div>
               </div>
               </div>
               <hr></hr>
               <div class="card border-0 shadow my-5 ">
                <div class="card-body p-5">
               <h4 className="text-muted">BOWLER RANKING</h4>
               <div className = "table-responsive border-lg" >
                <table className="table table-striped table-hover table-bordered " style={{ marginTop: 20 }} >
                    <thead className="thead thead-dark">
                        <tr>
                            <th >NAME</th>
                            <th >TEAM</th>
                            <th >WICKETS</th>
                            <th >MATCHES</th>
                            <th >RANK</th>
                            <th >POINTS</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        { this.bowlerList() }
                    </tbody>
                </table>
               </div>
               </div>
               </div>
            </div>
        )
    }
}