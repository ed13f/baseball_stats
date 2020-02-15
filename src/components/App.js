import React, { Component } from 'react';
import { Provider } from './Context';
import { jsonApiData } from '../lib/demo-api-json';
// import axios from 'axios';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';


// import Header from './layout/Header';
import CoachProfile from './Coach/CoachProfile';
// import PlayerProfile from './Player/PlayerProfile';
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
    inningInFocus:{},
    viewType:"team",
    hitViewType:"all",
    addPlayer:false,
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
        gameInFocus: data.games[0],
        inningInFocus: data.games[0].innings[0]
      });
  }





  findGameAtBat = (playerId, teamId) => {
    let gameInFocus = this.state.gameInFocus
    let teams = gameInFocus.teams
    let team = teams.filter(singleTeam => singleTeam.id === teamId)[0]; 
    let teamIndex = teams.indexOf(team)

    let players = team.players
    let player = players.filter(singlePlayer => singlePlayer.id === playerId)[0];
    let playerIndex = players.indexOf(player)

    let atBats = player.atBats
    let atBatInFocus = this.state.atBatInFocus
    let atBat = atBats.filter(singleAtBat => singleAtBat.id === atBatInFocus.id)[0];
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
      viewType: type,
      addPlayer: false
    }))
   }

   setHitViewType = ( type ) => {
     this.setState(prevState => ({
      hitViewType: type
    }))
   }

   setAddPlayerBoolean = ( bool ) => {
     this.setState(prevState => ({
      addPlayer: bool
    }))
   }


   handlePlayerInFocus = ( player ) => {
     window.scrollTo(0, 0)
     this.setState(prevState => ({
      playerInFocus: player,
      viewType: "player"
    }))
   }

   handleGameInFocus = ( game ) => {
     window.scrollTo(0, 0);
     this.setState(prevState => ({
      gameInFocus: game,
      viewType: "game"
    }))
   }


 // stateMap = ( game ) => {
// let teamInFocus = this.state.teamInFocus
//     let playerInFocus = this.state.playerInFocus
//     let inningInFocus = this.state.inningInFocus
//     let gameInFocus = this.state.gameInFocus

//     //atBatInFocus
//     let atBatInFocus = this.state.atBatInFocus

//     //coach 
//     let coach = this.state.coach

//     //gameInFocus
//     let gameInFocusInnings = gameInFocus.innings
//     let gameInFocusInning = gameInFocusInnings.filter(singleInning => singleInning.id == inningInFocus.id)[0]
//     let indexGameInFocusInning = gameInFocusInnings.indexOf(gameInFocusInning)

//     let gameInFocusInningAtBats = gameInFocusInning.atBats
//     let gameInFocusInningAtBat = gameInFocusInningAtBats.filter(singleAtBat => singleAtBat.id == atBatInFocus.id)[0]
//     let indexGameInFocusInningAtBat = gameInFocusInningAtBats.indexOf(gameInFocusInning)

//     let gameInFocusTeams = gameInFocus.teams
//     let gameInFocusTeam = gameInFocusTeams.filter(singleTeam => singleTeam.id == teamInFocus.id)[0]
//     let indexGameInFocusTeam = gameInFocusTeams.indexOf(gameInFocusTeam)

//     let gameInFocusTeamPlayers = gameInFocusTeam.players
//     let gameInFocusTeamPlayer = gameInFocusTeamPlayers.filter(singlePlayer => singlePlayer.id == playerInFocus.id)[0]
//     let indexGameInFocusTeamPlayer = gameInFocusTeamPlayers.indexOf(gameInFocusTeamPlayer)

//     let gameInFocusTeamPlayerAtBats = gameInFocusTeamPlayer.atBats
//     let gameInFocusTeamPlayerAtBat = gameInFocusTeamPlayerAtBats.filter(singleAtBat => singleAtBat.id == atBatInFocus.id)[0]
//     let indexInFocusTeamPlayerAtBat = gameInFocusTeamPlayerAtBats.indexOf(gameInFocusTeamPlayerAtBat)

//     //inningInFocus
//     let inningInFocusAtBats = inningInFocus.atBats
//     let inningInFocusAtBat = inningInFocusAtBats.filter(singleAtBat => singleAtBat.id == atBatInFocus.id)[0]
//     let indexInningInFocusAtBat = inningInFocusAtBats.indexOf(inningInFocusAtBat)

//     //playerInFocus
//     let playerInFocusAtBats = playerInFocus.atBats
//     let playerInFocusAtBat = playerInFocusAtBats.filter(singleAtBat => singleAtBat.id == atBatInFocus.id)[0]
//     let indexPlayerInFocusAtBat = playerInFocusAtBats.indexOf(playerInFocusAtBat)

//     //players
//     let players = this.state.players
//     let player = players.filter(singlePlayer => singlePlayer.id == playerInFocus.id)[0]
//     let indexPlayer = players.indexOf(player)

//     let playerAtBats = player.atBats
//     let playerAtBat = playerAtBats.filter(singleAtBat => singleAtBat.id == atBatInFocus.id)[0]
//     let indexPlayerAtBat = playerAtBats.indexOf(playerAtBat)

//     //teamInFocus
//     let teamInFocusGames = teamInFocus.games
//     let teamInFocusGame = teamInFocusGames.filter(singleGame => singleGame.id == gameInFocus.id)[0]
//     let indexTeamInFocusGame = teamInFocusGames.indexOf(teamInFocusGame)

//     let teamInFocusGameInnings = teamInFocusGame.innings
//     let teamInFocusGameInning = teamInFocusGameInnings.filter(singleInning => singleInning.id == inningInFocus.id)[0]
//     let indexTeamInFocusGameInning = teamInFocusGameInnings.indexOf(teamInFocusGameInning)

//     let teamInFocusGameInningAtBats = teamInFocusGameInning.atBats
//     let teamInFocusGameInningAtBat = teamInFocusGameInningAtBats.filter(singleAtBat => singleAtBat.id == atBatInFocus.id)[0]
//     let indexTeamInFocusGameInningAtBat = teamInFocusGameInningAtBats.indexOf(teamInFocusGameInningAtBat)

//     let teamInFocusPlayers = teamInFocus.players
//     let teamInFocusPlayer = teamInFocusPlayers.filter(singlePlayer => singlePlayer.id == playerInFocus.id)[0]
//     let indexTeamInFocusPlayer = teamInFocusPlayers.indexOf(teamInFocusGame)

//     let teamInFocusPlayerAtBats = teamInFocusPlayer.atBats
//     let teamInFocusPlayerAtBat = teamInFocusPlayerAtBats.filter(singleAtBat => singleAtBat.id == atBatInFocus.id)[0]
//     let indexTeamInFocusPlayerAtBat = teamInFocusPlayerAtBats.indexOf(teamInFocusPlayerAtBat)

//     // Teams
//     let teams = this.state.teams
//     let team = teams.filter(singleTeam => singleTeam.id == teamInFocus.id)[0]
//     let indexTeam = teams.indexOf(team)

//     let teamGames = team.games
//     let teamGame = teamGames.filter(singleGame => singleGame.id == gameInFocus.id)[0]
//     let indexGame = teamGames.indexOf(teamGame)

//     let teamGameInnings = teamGame.innings
//     let teamGameInning = teamGameInnings.filter(singleInning => singleInning.id == inningInFocus.id)[0]
//     let indexTeamGameInning = teamInFocusGameInnings.indexOf(teamInFocusGameInning)

//     let teamGameInningAtBats = teamGameInning.atBats
//     let teamGameInningAtBat = teamGameInningAtBats.filter(singleAtBat => singleAtBat.id == atBatInFocus.id)[0]
//     let indexTeamGameInningAtBat = teamGameInningAtBats.indexOf(teamGameInningAtBat)


//     let teamPlayers = team.players
//     let teamPlayer = teamPlayers.filter(singlePlayer => singlePlayer.id == playerInFocus.id)[0]
//     let indexTeamPlayer = teamPlayers.indexOf(teamInFocusGame)

//     let teamPlayerAtBats = teamPlayer.atBats
//     let teamPlayerAtBat = teamPlayerAtBats.filter(singleAtBat => singleAtBat.id == atBatInFocus.id)[0]
//     let indexTeamPlayerAtBat = teamPlayerAtBats.indexOf(teamPlayerAtBat)
  
 // }



  handleAddPlayer = (playerData) => {
    this.setState( prevState => {
    return {
        players: [
          playerData,
          ...prevState.players
        ],
        playerInFocus: playerData,
        viewType: "player",
        addPlayer: false,
        teamInFocus: {
          ...prevState.teamInFocus,
          players: [
            ...prevState.teamInFocus.players, 
            playerData
          ]
        }
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
        default: 
        break;
      }
  }




  handleIncrement = (playerId, teamId, delta, attributeType) => {
    let gameInFocus = this.state.gameInFocus
    let teams = gameInFocus.teams
    let team = teams.filter(singleTeam => singleTeam.id === teamId)[0]; 
    let teamIndex = teams.indexOf(team)

    let players = team.players
    let player = players.filter(singlePlayer => singlePlayer.id === playerId)[0];
    let playerIndex = players.indexOf(player)
    let atBats = player.atBats
    let atBatInFocus = this.state.atBatInFocus
    let atBat = atBats.filter(singleAtBat => singleAtBat.id === atBatInFocus.id)[0];
    // debugger
    console.log("gooott")
    let atBatIndex = atBats.indexOf(atBat)

    switch (attributeType) {
      case "balls":
        if((atBatInFocus.balls > 0 && delta === -1) || (atBatInFocus.balls < 4 && delta === 1)){
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
        if((atBatInFocus.strikes > 0 && delta === -1) || (atBatInFocus.strikes < 3 && delta === 1)){
          this.setState(prevState => ({
              atBatInFocus: {
                ...prevState.atBatInFocus,
                strikes: prevState.atBatInFocus.strikes += delta
              },
              gameInFocus: {
                ...prevState.gameInFocus,
                ...prevState.gameInFocus.teams[teamIndex].players[playerIndex].atBats[atBatIndex].strikes = atBat.strikes += delta 
              } 
        }))
          }
        break;
      case "basePosition":
        if((atBatInFocus.basePosition > 0 && delta === -1) || (atBatInFocus.basePosition < 4 && delta === 1)){
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
        if((atBatInFocus.runsBattedIn > 0 && delta === -1) || (atBatInFocus.runsBattedIn >= 0 && delta === 1)){
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
      default: 
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
        hitViewType: this.state.hitViewType,
        addPlayer: this.state.addPlayer,
        inningInFocus: this.state.inningInFocus,
        action: {
          handleIncrement: this.handleIncrement,
          handlePlayerInFocus: this.handlePlayerInFocus,
          selectChange: this.selectChange,
          makeGameInFocus: this.makeGameInFocus,
          setViewType: this.setViewType,
          setHitViewType: this.setHitViewType,
          handleGameInFocus: this.handleGameInFocus,
          handleAddPlayer: this.handleAddPlayer,
          setAddPlayerBoolean: this.setAddPlayerBoolean
        }
      }}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="scorebook">
          <Route exact path="/" render={ () => <CoachProfile /> } />
          {/*<Route exact path="/coaches" render={ () => <CoachProfile /> } />
          <Route exact path="/players" render={ () => <PlayerProfile /> } />
          */}
          <Route exact path="/games" render={ () => <GameProfile /> } />

          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
