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
             <div className="col-full pad20">
              <p className="large">Css pattern library, code standards documents and content style guides.</p>
             </div>
            </Layout>
        )
    }
}