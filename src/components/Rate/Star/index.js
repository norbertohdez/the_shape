import React from 'react';
import PropTypes from 'prop-types'
import SvgSprite from '../../SvgSprite'

// -------------------------------------

const propTypes = {
	rate: PropTypes.number.isRequired
}

function Star(props) {
  return (
   	<button className="rate__btn" onClick={()=>console.log(props.rate)}>
    	<SvgSprite passClassName="rate__svg" iconId="heart-full" />
  	</button>
  );
}

Star.propTypes = propTypes;

export default Star;
