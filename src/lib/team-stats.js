import { playersAtBatsMulti, playerHitsMulti, onBasePercentageMulti, battingAverageMulti, runsBattedInMulti, totalHitsByTypeMulti } from './player-stats';

//Game Innings
export const gameInnings = ( game ) => game.innings

export const gamesInningsMulti = ( games ) => {
	let inningsArray = []
	games.forEach((game) => inningsArray = inningsArray.concat(gameInnings(game)));
	return inningsArray
}

//Innings AtBats
export const inningAtbats = ( inning ) => inning.atBats

export const inningsAtBatsMulti = ( innings ) => {
	let atBatsArray = []
	innings.forEach((inning) => atBatsArray = atBatsArray.concat(inningAtbats(inning)));
	return atBatsArray
}

//Game Winner
export const isGameWinner = ( game, teamInFocus ) => {
	let innings = game.innings
	let players = teamInFocus.players
	let playersIds = players.map(function(player){ return player.id })
	let atBats = inningsAtBatsMulti(innings);
	let totalRuns = atBats.filter(atBat => atBat.basePosition === 4)
	let homeTeamRuns = atBats.filter(atBat => atBat.basePosition === 4 && playersIds.includes(atBat.playerId))
	let result = totalRuns.length/2 > homeTeamRuns.length ? false : true;
	return result
}

//Winners
export const totalWins = ( teamInFocus ) => {
	let games = teamInFocus.games
	let winCount = 0
	games.forEach((game) => isGameWinner(game, teamInFocus) ? winCount += 1 : "" );
	return winCount
}

//Losses
export const totalLosses = ( teamInFocus ) => {
	let games = teamInFocus.games
	let lossCount = 0
	games.forEach((game) => !isGameWinner(game, teamInFocus) ? lossCount += 1 : "" );
	return lossCount
}

//Team On Base Percentage
export const teamOnBasePercentage = ( teamInFocus ) => {
	let players = teamInFocus.players
	let percentage = onBasePercentageMulti(players)
	return percentage
}

//Team Batting Average
export const teamBattingAverage = ( teamInFocus ) => {
	let players = teamInFocus.players
	let percentage = battingAverageMulti(players)
	return percentage
}

//Team Plate Appearances
export const teamPlateAppearances = ( teamInFocus ) => {
	let players = teamInFocus.players
	return playersAtBatsMulti(players).length
}

//Team Runs Batted In
export const teamRunsBattedIn = ( teamInFocus ) => {
	let players = teamInFocus.players
	return runsBattedInMulti(players)
}

//Team Total Hits
export const teamHits = ( teamInFocus ) => {
	let players = teamInFocus.players
	return playerHitsMulti(players).length
}

//Total Htist By Type
export const teamHitsByType = ( teamInFocus, hitValueType ) => {
	let players = teamInFocus.players
	return totalHitsByTypeMulti(players, hitValueType)
}