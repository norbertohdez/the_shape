import React, { Component } from 'react';
import './styles.css';

// -------------------------------------

class Rate extends Component {

  render() {
    return (
      <div class="l-db l-pr">
				<button class="rate__trigger">
					<svg class="rate__svg rate__svg-open" role="presentation" viewBox="0 0 100 100">
						<use xlink:href="#heart"></use>
					</svg>
					<svg class="rate__svg rate__svg-close" role="presentation" viewBox="0 0 100 100">
						<use xlink:href="#close"></use>
					</svg>
				</button>

				<div class="rate__box">
					<button class="rate__btn rate__btn--5">
						<svg class="rate__svg" role="presentation" viewBox="0 0 100 100">
							<use xlink:href="#heart-full"></use>
						</svg>
					</button>
					<button class="rate__btn rate__btn--4">
						<svg class="rate__svg" role="presentation" viewBox="0 0 100 100">
							<use xlink:href="#heart-full"></use>
						</svg>
					</button>
					<button class="rate__btn rate__btn--3">
						<svg class="rate__svg" role="presentation" viewBox="0 0 100 100">
							<use xlink:href="#heart-full"></use>
						</svg>
					</button>
					<button class="rate__btn rate__btn--2">
						<svg class="rate__svg" role="presentation" viewBox="0 0 100 100">
							<use xlink:href="#heart-full"></use>
						</svg>
					</button>
					<button class="rate__btn rate__btn--1">
						<svg class="rate__svg" role="presentation" viewBox="0 0 100 100">
							<use xlink:href="#heart-full"></use>
						</svg>
					</button>
					<div class="rate__spinner"></div>
				</div>
			</div>
    );
  }

}

export default Rate;
