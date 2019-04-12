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
            <div className="pad20 mtop10 bg-white">
             <p className="large">Css pattern library, code standards documents and content style guides.</p>
             </div>
            </Layout>
        )
    }
}