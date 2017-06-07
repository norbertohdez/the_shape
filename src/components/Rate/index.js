import React, { Component } from 'react';
import classNames from 'classnames';
import SvgSprite from '../SvgSprite';
import Star from './Star';
import './styles.css'

// -------------------------------------

//TODO: Hover effect on hearts
const fakeRates = ['1', '1.5', '2', '2.5', '3', '3.5', '4', '4.5', '5'];

class Rate extends Component {
	
	constructor() {
		super();
		this.state = {
			openRatePanel: false,
			ajaxOngoing: false,
			icon: 'heart',
			success: false,
			failure: false,
			rate: ''
		}
		this.toggleRatePanel = this.toggleRatePanel.bind(this);
		this.toggleRequest   = this.toggleRequest.bind(this);
		this.requestSuccess  = this.requestSuccess.bind(this);
		this.handleKeyUp     = this.handleKeyUp.bind(this);
		this.getIcon         = this.getIcon.bind(this);
	}

	/**
	 * Toggles Rate Star Panel
	 */
	toggleRatePanel() {
		this.setState({
			openRatePanel: !this.state.openRatePanel,
			ajaxOngoing: false,
			icon: !this.state.openRatePanel ? 'close' : 'heart'
		})
	}

	/**
	 * Simulates event to an Ajax call
	 */
	toggleRequest() {
		if(this.state.openRatePanel) {
			this.setState({
				ajaxOngoing: !this.state.ajaxOngoing
			});
		}
	}

	/**
	 * Set request result
	 */
	requestSuccess(isSuccess) {
		if(this.state.openRatePanel && this.state.ajaxOngoing) {
			const thisRate = fakeRates[Math.floor(Math.random() * 10)];
			this.setState({
				success: isSuccess,
				failure: !isSuccess,
				openRatePanel: false,
				ajaxOngoing: false,
				icon: isSuccess ? this.getIcon(thisRate) : 'heart-failed',
				rate: isSuccess ? thisRate : ''
			});
		}
	}

	getIcon(rate) {
		let aux;
		switch(rate) {
			case '1.5':
			case '2':
				aux = 'heart-25';
				break;
			case '2.5':
			case '3':
				aux = 'heart-50';
				break;
			case '3.5':
			case '4':
			case '4.5':
				aux = 'heart-75';
				break;
			case '5':
				aux = 'heart-full';
				break;
			default:
				aux = 'heart';
		}
		return aux;
	}

	/**
	 * TPM: Just for Demo purposes
	 */
	handleKeyUp(event) {
		if (event.key === 'r') { // 'R'equest 
			this.toggleRequest();
		}
		if (event.key === 's') { // 'S'uccess 
			this.requestSuccess(true);
		}
		if (event.key === 'f') { // 'F'ailure 
			this.requestSuccess(false);
		}
	}

	render() {

		const classAssignments = classNames({
			'l-db l-pr rate': true,
			'rate--open': this.state.openRatePanel,
			'rate--ajax': this.state.ajaxOngoing,
			'rate--done': this.state.success
		});

		return (
			<div 
				className={classAssignments}
				onKeyUp={this.handleKeyUp}
			>
				<button className="rate__trigger" result={this.state.rate}  onClick={this.toggleRatePanel}>
					<SvgSprite
						passClassName="rate__svg"
						iconId={this.state.icon}
					/>
				</button>

				<div className="rate__box">
					<Star rate={5} />
					<Star rate={4} />
					<Star rate={3} />
					<Star rate={2} />
					<Star rate={1} />
					<div className="rate__spinner"></div>
				</div>
			</div>
		);
	}

}

export default Rate;
