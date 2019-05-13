
const HamburgerMenuIcon = (props) => {

    function toggleSideBar(e){
        const sideBar = document.querySelector('#__next .content-wrapper');
        sideBar.classList.toggle('close');
        e.currentTarget.classList.toggle('active');
    }
  
    return(
        <div className="hamburger info text-center pointer" onClick={toggleSideBar}>
          <ul className="hamburger-icon">
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
   );
  };
    
  export default HamburgerMenuIcon;