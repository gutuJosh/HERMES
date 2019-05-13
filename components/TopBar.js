import HamburgerMenuIcon from './HamburgerMenuIcon.js';

const TopBar = (props) => {

  
  return(
    <header id="mainHeader" className="flex-grid v-align-middle main-header">
      <nav className="main-nav flex-auto flex">
       <HamburgerMenuIcon />
      <h3 className="pad-x-10">{props.topic}</h3>
     </nav> 
   </header>
 );
};
  
export default TopBar;