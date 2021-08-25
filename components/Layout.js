import React, { useState, useEffect } from "react";
import Header from './Header'
import Sidebar from './SiteSidebar';



const Layout = (props) => {

  const [SidebarStatus, setSidebarStatus] = useState(typeof sessionStorage !== 'undefined' ? sessionStorage.getItem('sidebarStatus') : '');

  useEffect( () => {  

    if(typeof SidebarStatus === undefined){
        SidebarStatus = sessionStorage.getItem('sidebarStatus') !== undefined ? sessionStorage.getItem('sidebarStatus') : '';
    }

  });

  return(
    <>
     <div className={`content-wrapper ${SidebarStatus}`}>
       <Sidebar pageInfo={props.pageInfo}/>
       <main className="content flex-item auto">
       <Header pageInfo={props.pageInfo}/>
        {props.children}
       </main>
    </div>
   </>
  )
}

export default Layout