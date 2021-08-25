
import HamburgerMenuIcon from './ui/HamburgerMenuIcon.js';

const TopBar = (props) => {

 

  function toggleSideBar(e){
    const sideBar = document.querySelector('#__next .content-wrapper');
    sideBar.classList.toggle('close');
    e.currentTarget.classList.toggle('active'); 
    if(sideBar.classList.contains('close')){
      sessionStorage.setItem('sidebarStatus','close');
    }
    else{
      sessionStorage.removeItem('sidebarStatus');
    }
  }

  return(
    <header id="mainHeader" className="flex-grid v-align-middle main-header">
      <nav className="main-nav flex-auto flex">
       <HamburgerMenuIcon action={toggleSideBar} type="info"/>
      <h3 className="pad-x-10">{props.topic}</h3>
     </nav> 
   </header>
 );
};
  
export default TopBar;