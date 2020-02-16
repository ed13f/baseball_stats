import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {totalWins, totalLosses, teamBattingAverage, teamOnBasePercentage, teamPlateAppearances, teamRunsBattedIn, teamHits, teamHitsByType } from '../../lib/team-stats';


class TeamStats extends PureComponent {

	static propTypes = { teamInFocus: PropTypes.object.isRequired }

	render(){

		const { teamInFocus } = this.props;

		if (!teamInFocus.id) { return <div /> }

		return (
			<div className="team-stats">
				<div className="row header">
					<h2>{ teamInFocus.name }</h2>
					<div className="record">
						Wins: {totalWins(teamInFocus)} |  Loss: {totalLosses(teamInFocus)}
					</div>
				</div>
				<div className="row underline display-flex">
					<div className="flex-1">
						BA: {teamBattingAverage(teamInFocus)}
					</div>
					<div className="flex-1">
						AB's: {teamPlateAppearances(teamInFocus)}
					</div>
					<div className="flex-1">
						RBI: {teamRunsBattedIn(teamInFocus)}
					</div>
					<div className="flex-1">
						OBP: {teamOnBasePercentage(teamInFocus)}
					</div>
				</div>
				<div className="row underline display-flex">
					<div className="flex-1">
						1B: {teamHitsByType(teamInFocus, "1B")}
					</div>
					<div className="flex-1">
						2B: {teamHitsByType(teamInFocus, "2B")}
					</div>
					<div className="flex-1">
						3B: {teamHitsByType(teamInFocus, "3B")}
					</div>
					<div className="flex-1">
						HR: {teamHitsByType(teamInFocus, "HR")}
					</div>
				</div>
				<div className="row underline display-flex">
					<div className="flex-1">
						Hits: {teamHits(teamInFocus)}
					</div>
					<div className="flex-1">
						BB: {teamHitsByType(teamInFocus, "BB")}
					</div>
					<div className="flex-1">
						K: {teamHitsByType(teamInFocus, "K")}
					</div>
					<div className="flex-1">
						E: {teamHitsByType(teamInFocus, "E")}
					</div>
				</div>
			</div>
		);
	}
}


export default TeamStats