import Link from 'next/link';
import { withRouter } from 'next/router';


 const Sidebar = (props) => {

  const page = props.router.pathname.replace('/','');

  return (
    
    <aside className="site-sidebar">
   
     <ul className="list-group library-menu">
      <li>
       <div className="accordion">
        <div className="accordion-item m0">
         <input type="checkbox" className="toggle-accordion" id="gridTypes" defaultChecked={props.pageInfo.page === 'grid'}/>
         <label htmlFor="gridTypes"><i className="fab fa-buromobelexperte"></i> Grid system</label>
         <div className="accordion-content">
          <ul className="grid-types">
            <li>
             <Link href="/grid/flexbox-grid"> 
              <a className={props.pageInfo.subcategory === 'flex-grid' ? 'active' : ''}>Flexbox grid</a>
             </Link>
            </li>
            <li>
            <Link href="/grid/css-grid">
             <a className={props.pageInfo.subcategory === 'modern-grid' ? 'active' : ''}>
              Css grid layout
             </a>
            </Link>
            </li>
            <li>
             <Link href="/grid/classic-grid"> 
              <a className={props.pageInfo.subcategory === 'old-grid' ? 'active' : ''}>Classic grid</a>
             </Link>
            </li>
          </ul>
         </div>
        </div>
       </div>
      </li>
      <li className={page === 'typography' ? 'block active' : 'block'}>
      <Link href="/typography">
       <a className="block">
        <i className="fas fa-pen-fancy"></i> Typography
       </a>
      </Link>
      </li>
      <li className={page === 'lists' ? 'block active' : 'block'}>
      <Link href="/lists">
       <a className="block">
        <i className="fas fa-list"></i> Lists & media {props.pageInfo.page}
       </a>
      </Link>
      </li>
      <li className={page === 'forms' ? 'block active' : 'block'}>
      <Link href="/forms">
       <a className="block">
        <i className="fab fa-wpforms"></i> Forms
       </a>
      </Link>
      </li>
      <li className={page === 'tabs' ? 'block active' : 'block'}>
      <Link href="/tabs">
       <a className="block">
        <i className="fas fa-layer-group"></i> Tabs &amp; Accordions
       </a>
      </Link>
      </li>
      <li lassName={page === 'table' ? 'block active' : 'block'}>
       <Link href="/table">
       <a className="block">
        <i className="fas fa-table"></i> Table
       </a>
       </Link>
      </li>
      <li>
       <a className="block">
        <i className="fas fa-exclamation-triangle"></i> Modals &amp; Alerts
       </a>
      </li>
     </ul>
    </aside>
  )
};
 export default withRouter(Sidebar);