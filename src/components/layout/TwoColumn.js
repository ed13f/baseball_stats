import React from 'react';


const TwoColumnLayout = (props) => {
  return (
      
    <section className="two-column wrapper-max display-flex">
    	<div className="left col">
        	<div>
                {props.leftContent}
            </div>
    	</div>
    	<div className="right col">
    	    <div>
                {props.rightContent}
            </div>
    	</div>
    </section>
  );
}


export default TwoColumnLayout