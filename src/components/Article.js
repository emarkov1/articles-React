import React, {Component} from 'react'
import CommentList from './CommentList'
import PropTypes from 'prop-types'
import toggleOpen from '../decorators/toggleOpen'
import { CSSTransitionGroup } from 'react-transition-group'
import {connect} from 'react-redux'
import {deleteArticle} from '../AC'


class Article extends Component{
	/*static propTypes = {
		article: PropTypes.number
	}*/
	static propTypes = {
		article: PropTypes.shape({
			id:PropTypes.string.isRequired,
			title:PropTypes.string.isRequired,
			text:PropTypes.string.isRequired,
		}).isRequired
	}

	componentWillMount(){
		//console.log('mounting')
	}
	componentWillReceiveProps(nextProps){
		//console.log('updating', this.props.isOpen, nextProps.isOpen)
	}

	shouldComponentUpdate(nextProps, nextState){
		return nextProps.isOpen !== this.props.isOpen
	}

	componentWillUpdate(){
		console.log('update')
	}

	render(){
		const {article, isOpen, toggleOpen} = this.props;
		return(
			<div ref = {this.setContainerRef}>
				<h1>{article.title}!!</h1>
				<button onClick = {toggleOpen}>
					
					{isOpen ? 'close' : 'open'}
					
					
				</button>
				<button onClick = {this.handleDelete}>delete Article</button>
				{/*<CSSTransitionGroup
					transitionName = 'article'
					transitionEnterTimeout = {30000}
					transitionLeaveTimeout = {30000}
				>*/}
					{this.getBody()}
				{/*</CSSTransitionGroup>*/}
			</div>
		)
	}

	handleDelete = () => {
		console.log('deleting article')

		const{deleteArticle, article} = this.props
		deleteArticle(article.id)
	}
	setContainerRef = ref =>{
		this.container = ref 
		console.log(ref)
	}

	componentDidMount(){
		console.log('mounted')
	}

	getBody(){
		const {article, isOpen} = this.props 
		if (!isOpen) return null
		return (
			<section>
				{article.text}
				<CommentList comments = {article.comments}/>
			</section>
		)
	}

	

	
	
}
export default connect(null, { deleteArticle })(Article)