import Header from './Header'
import Sidebar from './SiteSidebar'
const Layout = (props) => (
  <>
    <Header />
     <div className="content-wrapper flex-grid">
       <Sidebar pageInfo={props.pageInfo}/>
       <main className="content-wrapper flex-auto">
        {props.children}
       </main>
    </div>
  </>
)

export default Layout