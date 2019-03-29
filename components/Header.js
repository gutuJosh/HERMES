import Head from 'next/head';
import TopBar from './TopBar';
class Header extends React.Component {

	constructor(props) {
		 super(props);
		 this.state = {
		}
	}

	componentWillMount(){
  
	}

	componentWillUnmount() {
		
  }

	componentDidMount(){
		
	}


render(){
	
	return (
	 <React.Fragment>
		<Head>
		<meta charSet="UTF-8"/>
		<title>Hermes</title>
		<meta name="author" content="Cosmin Horvath"/>
		<meta name="theme-color" content="#ffd43a"/> 
		<meta name="msapplication-navbutton-color" content="#ffd43a"/>
		<meta name="apple-mobile-web-app-capable" content="yes"/> 
		<meta name="apple-mobile-web-app-status-bar-style" content="#ffd43a"/> 
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
		<link href="https://fonts.googleapis.com/css?family=Comfortaa" rel="stylesheet"/> 
		<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz" crossOrigin="anonymous"/>
		<link rel="shortcut icon" type="image/x-icon" href="/static/images/twiner-ico.jpg" />
		<link href="/static/css/main.min.css" rel="stylesheet" media="screen"/> 
		</Head>
		<TopBar/>
		<div className="mask">&nbsp;</div> 
	</React.Fragment>
	);
  }
}
export default Header;