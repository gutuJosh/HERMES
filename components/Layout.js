import Header from './Header'
import Sidebar from './SiteSidebar'
const Layout = (props) => (
  <>
    <Header pageInfo={props.pageInfo}/>
     <div className="content-wrapper flex-grid">
       <Sidebar pageInfo={props.pageInfo}/>
       <main className="content-wrapper flex-auto">
        {props.children}
       </main>
    </div>
  </>
)

export default Layout