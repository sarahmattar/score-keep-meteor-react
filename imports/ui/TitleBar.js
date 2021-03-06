import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TitleBar extends Component {
	renderSubtitle() {
		if (this.props.subtitle) {
			return (
				<h2 className='title-bar__subtitle'>{this.props.subtitle}</h2>
			);
		} else {
		}
	}
	render() {
		return (
			<div className='title-bar'>
				<div className='wrapper'>
					<h1>{this.props.title}</h1>
					{this.renderSubtitle()}
				</div>
			</div>
		);
	}
}

TitleBar.propTypes = {
	title: PropTypes.string.isRequired, //this means that if there is no prop specified, the browser will throw a warning
	subtitle: PropTypes.string,
};

TitleBar.defaultProps = {
	title: 'Default Title',
	subtitle: 'Guest',
};
