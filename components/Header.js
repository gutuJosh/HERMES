import React from "react";
import Head from 'next/head';
import TopBar from './TopBar';
import { get } from '../helpers/Get';

class Header extends React.Component {

	constructor(props) {
		 super(props);
		 this.state = {
			'pageTitle' : '',
			'pageTopic' : ''
		}
	}

	async componentDidMount(){
		 let getPath = window.location.pathname.split('/').filter((item) => item.length > 0);
		 let url = getPath.length > 1 ? `/${getPath[0]}/${getPath[1]}/page-info` : `/${getPath[0]}/page-info`;
		 if(!this.props.pageInfo){
				let getInfo = await get(url);
				this.setState({
						 'pageTitle' : getInfo.info.page.charAt(0).toUpperCase() + getInfo.info.page.slice(1),
						 'pageTopic' : getInfo.info.subcategory === '' ? getInfo.info.title : `${getInfo.info.title} - ${getInfo.info.subcategory.replace('-',' ')}`
				});
		 }
		 else{
        this.setState({
						 'pageTitle' : this.props.pageInfo.page.charAt(0).toUpperCase() + this.props.pageInfo.page.slice(1),
						 'pageTopic' : this.props.pageInfo.subcategory === '' ? this.props.pageInfo.title : `${this.props.pageInfo.title} - ${this.props.pageInfo.subcategory.replace('-',' ')}`
				});
		 }
	}



render(){
	
	return (
	 <React.Fragment>
		<Head>
		<meta charSet="UTF-8"/>
		<title>{this.state.pageTitle}</title>
		<meta name="author" content="Cosmin Horvath"/>
		<meta name="theme-color" content="#ffd43a"/> 
		<meta name="msapplication-navbutton-color" content="#ffd43a"/>
		<meta name="apple-mobile-web-app-capable" content="yes"/> 
		<meta name="apple-mobile-web-app-status-bar-style" content="#ffd43a"/> 
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
		<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz" crossOrigin="anonymous"/>
		<link href="/static/css/main.min.css" rel="stylesheet" media="screen"/> 
		</Head>
		<TopBar topic={this.state.pageTopic}/>
	</React.Fragment>
	);
  }
}
export default Header;