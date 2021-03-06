import React, { Component } from 'react';
import SvgSprite from '../../SvgSprite';
import './styles.css';

// -------------------------------------

class Share extends Component {

  /**
   * Takes array and iterates to render inner list markup
   * @param   {object[]} items - Links to render
   * @returns {object} JSX markup
   */
  generateShareBtns(items) {
    return items.map((item) => {
      return (
        <li key={items.indexOf(item).toString()} className="l-dib l-va-m">
					<button className="webshare__btn">
						<span className="t-accessible">{item.label}</span>
						<SvgSprite passClassName="webshare__svg" iconId={item.iconId} />
					</button>
				</li>
      );
    });
  }

  render() {
  	const tmpList = [
			{
				label: 'Pin it on Pinterest',
				iconId: 'pinterest'
			},
			{
				label: 'Tweet this site',
				iconId: 'twitter',
			},
			{
				label: 'Shere it on Facebook',
				iconId: 'facebook',
			}
		]; 
    return (    
      <div className="webshare">
				<div className="t-scale-5d l-dib l-va-m">SHARE</div>
				<ul className="webshare__list l-dib l-va-m l-p0 l-m0 l-pl1 l-ml1">
					{this.generateShareBtns(tmpList)}
					<li className="l-dib l-va-m">
						<button className="webshare__copy" aria-label="Copy permalink">
							<span>COPY<br />PERMALINK</span>
						</button>
					</li>
				</ul>
			</div>
    );
  }

}

export default Share;

