import Layout from '../components/Layout.js'

export default class index extends React.Component {

    constructor(props) {
     super(props);
     this.state = {
        pageInfo:{
            'title': 'Css Pattern library',
            'page':'index',
            'subcategory':''
        },
     }
    }

    render(){
        return(
            <Layout pageInfo={this.state.pageInfo}>
             <div className="grid pad10">
              <div className="item-lg-6-1 item-md-6-1 item-sm-12-1 item-xs-12-1 bg-white">
               <div className="pad20 m0">
                <h1>Css pattern library, code standards documents and content style guides.</h1>
               </div>
              </div>
             </div>
            </Layout>
        )
    }
}