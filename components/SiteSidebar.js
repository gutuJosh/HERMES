import Link from 'next/link';
import { withRouter } from 'next/router';


 const Sidebar = (props) => {

  const page = props.router.pathname.replace('/','');

  return (
    
    <aside className="site-sidebar">
     <div className="logo-holder">
      <p className="text-center text-white m0">
       <i className="fas fa-th"></i> The Grid
      </p>
     </div>
     <ul className="list-group library-menu">
      <li className={props.pageInfo.page === 'grid' ? 'block active' : 'block'}>
       <div className="accordion">
        <div className="accordion-item m0">
         <input type="checkbox" className="toggle-accordion" id="gridTypes" defaultChecked={props.pageInfo.page === 'grid'}/>
         <label htmlFor="gridTypes"><i className="fab fa-buromobelexperte"></i> Grid system</label>
         <div className="accordion-content">
          <ul className="grid-types">
            <li className={props.pageInfo.subcategory === 'flexbox-grid' ? 'active' : ''}>
             <Link href="/grid/flexbox-grid"> 
              <a>Flexbox grid</a>
             </Link>
            </li>
            <li className={props.pageInfo.subcategory === 'css-grid' ? 'active' : ''}>
            <Link href="/grid/css-grid">
             <a>
              Css grid layout
             </a>
            </Link>
            </li>
            <li className={props.pageInfo.subcategory === 'classic-grid' ? 'active' : ''}>
             <Link href="/grid/classic-grid"> 
              <a>Classic grid</a>
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
      <li className={page === 'table' ? 'block active' : 'block'}>
       <Link href="/table">
       <a className="block">
        <i className="fas fa-table"></i> Table
       </a>
       </Link>
      </li>
      <li className={page === 'modals' ? 'block active' : 'block'}>
      <Link href="/modals">
        <a className="block">
         <i className="fas fa-exclamation-triangle"></i> Modals &amp; Alerts
       </a>
      </Link>
      </li>
     </ul>
    </aside>
  )
};
 export default withRouter(Sidebar);