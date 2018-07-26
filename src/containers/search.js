import React, { Component } from 'react';
import { connect } from 'react-redux';
import Search from '../components/search';
import * as actions from '../actions';
import { bindActionCreators } from 'redux';


const mapStateToProps = (state) => {
	console.log("mapStateToProps" +state);
	return {
		products : state.reducer.products
	}
};

const mapDispatchToProps = (dispatch) => {
	console.log("mapDispatchToProps" +dispatch);
	return {
		actions : bindActionCreators(actions, dispatch)
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);