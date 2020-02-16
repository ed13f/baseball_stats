import { inningsAtBatsMulti } from './team-stats';

export const gameAtBats = ( game ) => {
	let innings = game.innings
	let gameAtBats = inningsAtBatsMulti(innings)
	return gameAtBats
}

export const gameAtBatsByTeam = ( game, team ) => {
	let atBats = gameAtBats(game)
	let players = team.players.map(function(player){ return player.id })
	let teamHits = atBats.filter(atBat => players.includes(atBat.playerId))
	return teamHits
}

export const inningHits = ( inning ) => inning.atBats.filter(atBat => atBat.isHit === true)

export const inningRuns = ( inning ) => inning.atBats.filter(atBat => atBat.basePosition === 4)

export const inningRunsByTeam = ( inning, team ) => {
	let atBats = inning.atBats
	let hits = atBats.filter(atBat => atBat.basePosition === 4)
	let players = team.players.map(function(player){ return player.id })
	let teamRuns = hits.filter(atBat => players.includes(atBat.playerId))
	return teamRuns
}

export const gameRunsByTeam = ( game, team ) => {
	let atBats = gameAtBatsByTeam(game, team )
	return atBats.filter(atBat => atBat.basePosition === 4)
}

export const gameHitsByTeam = ( game, team ) => {
	let atBats = gameAtBatsByTeam(game, team )
	return atBats.filter(atBat => atBat.isHit === true)
}
export const gameErrorsByTeam = ( game, team ) => {
	let atBats = gameAtBatsByTeam(game, team )
	return atBats.filter(atBat => atBat.baseValue === "ER")
}