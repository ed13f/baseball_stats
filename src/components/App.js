import React, { Component } from 'react';
import { Provider } from './Context';
import { jsonApiData } from '../lib/demo-api-json';
import axios from 'axios';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';


import Header from './layout/Header';
import CoachProfile from './Coach/CoachProfile';
import PlayerProfile from './Player/PlayerProfile';
import GameProfile from './Game/GameProfile';

class App extends Component {
  state = {
    coach:{},
    players: [],
    playerInFocus:{},
    teams:[],
    teamInFocus:{},
    gameInFocus:{},
    atBatInFocus:{},
    viewType:"team",
  }

  componentDidMount(){
    // axios.get('http://localhost:3000/coaches/1')
    // .then(response => {
    //   this.setState({
    //     coach: response.data.coach,
    //     players: response.data.players,
    //     playerInFocus:response.data.players[0],
    //     teams: response.data.teams,
    //     atBatInFocus:response.data.players[0].atBats[0],
    //     teamInFocus:response.data.teams[0],
    //     gameInFocus:response.data.games[0]
    //   });
      
    // })
    // .catch(function (error) {
    // });
    let data = jsonApiData();
    console.log(data)
    this.setState({
        coach: data.coach,
        players: data.players,
        playerInFocus: data.players[0],
        teams: data.teams,
        atBatInFocus: data.players[0].atBats[0],
        teamInFocus: data.teams[0],
        gameInFocus: data.games[0]
      });
  }





  findGameAtBat = (playerId, teamId) => {
    let gameInFocus = this.state.gameInFocus
    let teams = gameInFocus.teams
    let team = teams.filter(singleTeam => singleTeam.id == teamId)[0]; 
    let teamIndex = teams.indexOf(team)

    let players = team.players
    let player = players.filter(singlePlayer => singlePlayer.id == playerId)[0];
    let playerIndex = players.indexOf(player)

    let atBats = player.atBats
    let atBatInFocus = this.state.atBatInFocus
    let atBat = atBats.filter(singleAtBat => singleAtBat.id == atBatInFocus.id)[0];
    let atBatIndex = atBats.indexOf(atBat)
    return {team: team, teamIndex:teamIndex, player: player, playerIndex: playerIndex, atBat: atBat, atBatIndex: atBatIndex  }
  }

  // selectChange = (playerId, teamId, updateValue, attributeType) => {
  //   let results = this.findGameAtBat(playerId, teamId)
  //   this.setState(prevState => ({
  //             atBatInFocus: {
  //               ...prevState.atBatInFocus,
  //               baseValue: prevState.atBatInFocus.baseValue = updateValue
  //             },
  //             gameInFocus: {
  //               ...prevState.gameInFocus,
  //               ...prevState.gameInFocus.teams[results.teamIndex].players[results.playerIndex].atBats[results.atBatIndex].baseValue = updateValue 
  //             } 
  //         }))
  //   return "hiiii"
  // }


   
   makeGameInFocus = (atBat) => {
     this.setState(prevState => ({
      atBatInFocus: atBat
    }))

   }



   setViewType = ( type ) => {
     this.setState(prevState => ({
      viewType: type
    }))
   }


   handlePlayerInFocus = ( player ) => {
     this.setState(prevState => ({
      playerInFocus: player,
      viewType: "player"
    }))
   }

   handleGameInFocus = ( game ) => {
     this.setState(prevState => ({
      gameInFocus: game,
      viewType: "game"
    }))
   }


 // stateMap = ( game ) => {
 //    let atBatInFocus = this.state.atBatInFocus

 //    let gameInFocus = this.state.gameInFocus
 //    let teamInFocus = this.state.teamInFocus
 //    let playerInFocus = this.state.playerInFocus

 //    let gameInFocusTeams = gameInFocus.teams
 //    let gameInFocusTeam = gameInFocusTeams.filter(singleTeam => singleTeam.id == teamInFocus.id)[0]
 //    let gameInFocusTeamPlayers = gameInFocusTeam.players

 //    let teamInFocusPlayers = teamInFocus.players
 //    let teamInFocusPlayersTeam = teamInFocusPlayers.filter(singlePlayer => singlePlayer.id == playerInFocus.id)[0]
 //    let teamInFocusPlayersTeamAtBats = teamInFocusPlayersTeam.atBats

 //    let teamInFocusGames =  teamInFocus.games
 //    let teamInFocusGame = teamInFocusGames.filter(singleGame => singleGame.id == gameInFocus.id)[0]
 //    let teamInFocusGameInnings = teamInFocusGame.innings
  
 // }



  handleAddPlayer = (playerData) => {
    let atBatInFocus = this.state.atBatInFocus

    let gameInFocus = this.state.gameInFocus
    let teamInFocus = this.state.teamInFocus
    let playerInFocus = this.state.playerInFocus

    let gameInFocusTeams = gameInFocus.teams
    let gameInFocusTeam = gameInFocusTeams.filter(singleTeam => singleTeam.id == teamInFocus.id)[0]
    let indexGameInFocusTeams = gameInFocusTeams.indexOf(gameInFocusTeam)
    let gameInFocusTeamPlayers = gameInFocusTeam.players

    let teamInFocusPlayers = teamInFocus.players
    let teamInFocusPlayersTeam = teamInFocusPlayers.filter(singlePlayer => singlePlayer.id == playerInFocus.id)[0]
    let teamInFocusPlayersTeamAtBats = teamInFocusPlayersTeam.atBats

    let teamInFocusGames =  teamInFocus.games
    let teamInFocusGame = teamInFocusGames.filter(singleGame => singleGame.id == gameInFocus.id)[0]
    let teamInFocusGameInnings = teamInFocusGame.innings
    let teamInFocusGameTeams = teamInFocusGame.teams
    let teamInFocusGameTeam = teamInFocusGameTeams.filter(singleTeam => singleTeam.id == teamInFocus.id)[0]
    let teamInFocusGameTeamPlayers = teamInFocusGameTeam.players
    let teamInFocusGameTeamPlayer = teamInFocusGameTeamPlayers.filter(singleTeam => singleTeam.id == teamInFocus.id)[0]
    let teamInFocusGameTeamPlayerAtBats = teamInFocusGameTeamPlayer.atBats




    debugger

    console.log("yeeeeeeeerrrrrr")
    this.setState( prevState => {
    return {
        players: [
          ...prevState.players,
          playerData
        ],
        playerInFocus: playerData,
        viewType: "player",
        // teamInFocus: {
        //   ...prevState.teamInFocus,
        //   players: {
        //     prevState.teamInFocus.baseValue, 
        // }

      }
    });
  }


   





  selectChange = (playerId, teamId, updateValue, attributeType) => {
    let results = this.findGameAtBat(playerId, teamId)
      switch (attributeType) {
        case "baseValue":
          this.setState(prevState => ({
            atBatInFocus: {
              ...prevState.atBatInFocus,
              baseValue: prevState.atBatInFocus.baseValue = updateValue
            },
            gameInFocus: {
              ...prevState.gameInFocus,
              ...prevState.gameInFocus.teams[results.teamIndex].players[results.playerIndex].atBats[results.atBatIndex].baseValue = updateValue 
            } 
          }))
          
        break;
        case "fieldPosition":
         this.setState(prevState => ({
          atBatInFocus: {
            ...prevState.atBatInFocus,
            fieldPosition: prevState.atBatInFocus.fieldPosition = updateValue
          },
          gameInFocus: {
            ...prevState.gameInFocus,
            ...prevState.gameInFocus.teams[results.teamIndex].players[results.playerIndex].atBats[results.atBatIndex].fieldPosition = updateValue 
          } 
        }))
        break;
      }
  }




  handleIncrement = (playerId, teamId, delta, attributeType) => {
    let gameInFocus = this.state.gameInFocus
    let teams = gameInFocus.teams
    let team = teams.filter(singleTeam => singleTeam.id == teamId)[0]; 
    let teamIndex = teams.indexOf(team)

    let players = team.players
    let player = players.filter(singlePlayer => singlePlayer.id == playerId)[0];
    let playerIndex = players.indexOf(player)
    let atBats = player.atBats
    let atBatInFocus = this.state.atBatInFocus
    let atBat = atBats.filter(singleAtBat => singleAtBat.id == atBatInFocus.id)[0];
    // debugger
    console.log("gooott")
    let atBatIndex = atBats.indexOf(atBat)

    switch (attributeType) {
      case "balls":
        if(atBatInFocus.balls > 0 && delta == -1 || atBatInFocus.balls < 4 && delta == 1){
          this.setState(prevState => ({
              atBatInFocus: {
                ...prevState.atBatInFocus,
                balls: prevState.atBatInFocus.balls += delta
              },
              gameInFocus: {
                ...prevState.gameInFocus,
                ...prevState.gameInFocus.teams[teamIndex].players[playerIndex].atBats[atBatIndex].balls =  atBat.balls += delta 
              } 
          }))
        }
        break;
      case "strikes":
        if(atBatInFocus.strikes > 0 && delta == -1 || atBatInFocus.strikes < 3 && delta == 1){
          this.setState(prevState => ({
              atBatInFocus: {
                ...prevState.atBatInFocus,
                strikes: prevState.atBatInFocus.strikes += delta
              },
              gameInFocus: {
                ...prevState.gameInFocus,
                ...prevState.gameInFocus.teams[teamIndex].players[playerIndex].atBats[atBatIndex].strikes =  atBat.strikes += delta 
              } 
        }))
          }
        break;
      case "basePosition":
        if(atBatInFocus.basePosition > 0 && delta == -1 || atBatInFocus.basePosition < 4 && delta == 1){
           this.setState(prevState => ({
              atBatInFocus: {
                ...prevState.atBatInFocus,
                basePosition: prevState.atBatInFocus.basePosition += delta
              },
              gameInFocus: {
                ...prevState.gameInFocus,
                ...prevState.gameInFocus.teams[teamIndex].players[playerIndex].atBats[atBatIndex].basePosition =  atBat.basePosition += delta 
              } 
          }))
        }
        break;
      case "runsBattedIn":
        if(atBatInFocus.runsBattedIn > 0 && delta == -1 || atBatInFocus.runsBattedIn >= 0 && delta == 1){
           this.setState(prevState => ({
              atBatInFocus: {
                ...prevState.atBatInFocus,
                runsBattedIn: prevState.atBatInFocus.runsBattedIn += delta
              },
              gameInFocus: {
                ...prevState.gameInFocus,
                ...prevState.gameInFocus.teams[teamIndex].players[playerIndex].atBats[atBatIndex].runsBattedIn =  atBat.runsBattedIn += delta 
              } 
          }))
        }
        break;
    }
  }

  render() {
    return (

      <Provider value={{
        players: this.state.players,
        coach: this.state.coach,
        teams: this.state.teams,
        teamInFocus: this.state.teamInFocus,
        gameInFocus: this.state.gameInFocus,
        atBatInFocus: this.state.atBatInFocus,
        playerInFocus: this.state.playerInFocus,
        viewType: this.state.viewType,
        action: {
          handleIncrement: this.handleIncrement,
          handlePlayerInFocus: this.handlePlayerInFocus,
          selectChange: this.selectChange,
          makeGameInFocus: this.makeGameInFocus,
          setViewType: this.setViewType,
          handleGameInFocus: this.handleGameInFocus,
          handleAddPlayer: this.handleAddPlayer
        }
      }}>
      <BrowserRouter>
        <div className="scorebook">
          <Route exact path="/" render={ () => <CoachProfile /> } />
          <Route exact path="/coaches" render={ () => <CoachProfile /> } />
          <Route exact path="/players" render={ () => <PlayerProfile /> } />
          <Route exact path="/games" render={ () => <GameProfile /> } />

          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
