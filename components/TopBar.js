
const TopBar = (props) => {

  
  return(
    <header id="mainHeader" className="flex-grid v-align-middle main-header">
     <nav className="main-nav flex-auto flex">
      <a className="hamburger inline-block text-center" href="/">
       <i className="fas fa-bars"></i>
      </a>
      <h3 className="pad-x-10">{props.topic}</h3>
     </nav> 
   </header>
 );
};
  
export default TopBar;