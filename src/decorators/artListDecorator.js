import React, {Component as ReactComponent} from 'react'
import PropTypes from 'prop-types'

export default (OriginalComponent) => class Accordeon extends ReactComponent{

	
	state = {
		openArticleId:null
	}

	render(){
		return <OriginalComponent {...this.props} {...this.state} toggleOpenArticle = {this.toggleOpenArticle.bind(this)} />
	}

	toggleOpenArticle(openArticleId){
		console.log(this)
		this.setState({
			openArticleId: openArticleId === this.state.openArticleId ? null: openArticleId
		})
		/*if (!this.state.openArticleId){
			this.setState({openArticleId})
		}else{
			if(this.state.openArticleId === openArticleId){
				this.setState({openArticleId:null})
			}else{
				this.setState({openArticleId})
			}
		} */
	}
}