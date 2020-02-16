import React, { PureComponent } from 'react';
import { Consumer } from '../Context';


class ViewTypeSwitch extends PureComponent {

	render(){
		
		return (
		    <Consumer>
	    		{context => (
	    			<div className="view-toggle">
				        <button className={ context.viewType === "team" ? "active" : "" } onClick={() => context.action.setViewType("team")}> Team </button>
				        <button className={ context.viewType === "player" ? "active" : "" } onClick={() => context.action.setViewType("player")}> Player </button>
				        <button className={ context.viewType === "game" || context.viewType === "gameSheet" ? "active" : "" } onClick={() => context.action.setViewType("game")}> Game </button>
				    </div>
	    		)}
	    	</Consumer>
		);
	}
}

  
export default ViewTypeSwitch