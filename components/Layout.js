import Header from './Header'
import Sidebar from './SiteSidebar'
const Layout = (props) => (
  <>
     <div className="content-wrapper flex-grid">
       <Sidebar pageInfo={props.pageInfo}/>
       <main className="content-wrapper flex-auto">
       <Header pageInfo={props.pageInfo}/>
        {props.children}
       </main>
    </div>
  </>
)

export default Layout