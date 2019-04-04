import Link from 'next/link';

 const Sidebar = (props) => (
    <aside className="site-sidebar">
     <ul className="list-group library-menu">
      <li>
       <div className="accordion">
        <div className="accordion-wrapper m0">
         <input type="checkbox" className="toggle-accordion" id="gridTypes" />
         <label htmlFor="gridTypes"><i className="fab fa-buromobelexperte"></i> Grid system</label>
         <div className="accordion-content">
          <ul className="grid-types">
           <li>
             <Link href="/old-grid"> 
              <a>Old fashion grid</a>
             </Link>
            </li>
            <li>
             <Link href="/flex-grid"> 
              <a>Flex grid</a>
             </Link>
            </li>
            <li>
            <Link href="/modern-grid">
             <a>
              Modern grid layout
             </a>
            </Link>
            </li>
          </ul>
         </div>
        </div>
       </div>
      </li>
      <li>
      <Link href="/typography">
       <a className="block">
        <i className="fas fa-pen-fancy"></i> Typography
       </a>
      </Link>
      </li>
      <li>
      <Link href="/lists">
       <a className="block">
        <i className="fas fa-list"></i> Lists
       </a>
      </Link>
      </li>
      <li>
       <a href="#grid" className="block">
        <i className="fab fa-wpforms"></i> Forms
       </a>
      </li>
      <li>
       <a href="#grid" className="block">
        <i className="fas fa-server"></i> Tabs
       </a>
      </li>
      <li>
       <a href="#grid" className="block">
        <i className="fas fa-table"></i> Tables
       </a>
      </li>
      <li>
       <a href="#grid" className="block">
        <i className="fas fa-layer-group"></i> Accordions
       </a>
      </li>
      <li>
       <a href="#grid" className="block">
        <i className="fas fa-exclamation-triangle"></i> Modals & Alerts
       </a>
      </li>
     </ul>
    </aside>
 );
 export default Sidebar;