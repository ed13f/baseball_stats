import React from 'react'

// Players - AtBats
export const playerAtBats = ( player ) => {
	// debugger
	return player.atBats
}
export const playersAtBatsMulti = ( players ) => {
	let atBatsArray = []
	players.forEach((player) => atBatsArray = atBatsArray.concat(playerAtBats(player)));
	return atBatsArray
}

// Players - Hits
export const playerHits = ( player ) => {
	let totalHits = player.atBats.filter(atBat => atBat.isHit == true)
	return totalHits
}
export const playerHitsMulti = ( players ) => {
	let totalHits = []
	let hits = []
	players.forEach((player) => {
		hits = playerHits(player)
		totalHits = totalHits.concat(hits)
	});
	return totalHits
}

//On Base Percentate
export const onBasePercentage = (player) =>{
	let atBats = player.atBats
	// debugger
	let onBase = atBats.filter(atBat => atBat.basePosition > 0);
	let percentage = onBase.length/atBats.length
	return (percentage  * 1000).toFixed(0)
	// return percentage 
}
export const onBasePercentageMulti = ( players ) => {
	let totalOnBasePercentage = 0
	players.forEach((player) => ( totalOnBasePercentage += Number(onBasePercentage(player))))
	let finalPercentage = totalOnBasePercentage / players.length
	return (finalPercentage ? (finalPercentage).toFixed(0): "0");
}

// Batting Average
export const battingAverage = (player) => {
	let atBats = player.atBats
	let atBatsCount = atBats.length
	let hits = atBats.filter(atBat => atBat.isHit != false);
	let hitsCount = hits.length
	let average = hitsCount/atBatsCount
	return (average * 1000).toFixed(0)
	// return average 
}
export const battingAverageMulti = (players) => {
	let totalBattingAverages = 0
	// debugger
	players.forEach((player) => ( totalBattingAverages += Number(battingAverage(player))))
	let finalPercentage = totalBattingAverages / players.length
	return (finalPercentage ? (finalPercentage).toFixed(0) : "0");
}

// Runs Batted In
export const runsBattedIn = (player) => {
	let atBats = player.atBats
	let rbiCount = 0;
	// debugger
	atBats.forEach(function(atBat){ rbiCount += atBat.runsBattedIn })
	return rbiCount ? rbiCount : 0;
}
export const runsBattedInMulti = ( players ) => {
	let rbiCount = 0
	players.forEach((player) => ( rbiCount += runsBattedIn(player)))
	return rbiCount
}

// Total Htist By Type
export const totalHitsByType = (player, hitValueType) => {
	let atBats = player.atBats
	let hits = atBats.filter(atBat => atBat.baseValue == hitValueType);
	return hits.length
}
export const totalHitsByTypeMulti = ( players, hitValueType ) => {
	let rbiCount = 0;
	players.forEach((player) => ( rbiCount += totalHitsByType(player, hitValueType )))
	return rbiCount
}









