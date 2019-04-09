import Layout from '../components/Layout.js';

export default class forms extends React.Component {

   constructor(props) {
    super(props);
    this.state = {
        pageInfo:''
    }
   }

    static getInitialProps(ctx) {
        return {pageInfo: ctx.query.pageInfo}
    }

    componentDidMount(){
        if(typeof(this.props.pageInfo) !== 'undefined'){
          this.setState({
              'pageInfo' :  this.props.pageInfo
          });
        }
    }

    render(){
      return(
        <Layout pageInfo={this.state.pageInfo}> 
           <div className="col-full pad20">
            <p className="large">
             Form Elements:
            </p>
            <p>For every element of a form, we have expanded the styling with custom selects, checkboxes, radios, switches and a few additional classes.</p>
          </div>

          <div className="grid pad10">
            <div className="item-lg-6-1 item-md-6-1 item-sm-12-1 item-xs-12-1 bg-white">
            <form className="pad20 grid">
              <div className="form-group item-half-left">
               <label htmlFor="basic-text">Text Input</label>
               <input type="text" name="basic-text" className="input-default" placeholder=".input-default"/>
              </div>
              <div className="form-group item-half-right">
               <label htmlFor="basic-text">Password Input</label>
               <input type="password" name="basic-text" className="input-default" defaultValue=".input-default"/>
              </div>
              <div className="form-group item-half-left">
               <label htmlFor="basic-text">Input warning</label>
               <input type="text" name="basic-text" className="input-warning" defaultValue=".input-warning"/>
               <span className="small text-warning mtop10">Warning message!</span>
               <span className="small text-error mtop10">Error message!</span>
              </div>
              <div className="form-group item-half-right">
               <label htmlFor="basic-text">Input error</label>
               <input type="text" name="basic-text" className="input-error" defaultValue=".input-error"/>
               <span className="small text-warning mtop10">Warning message!</span>
               <span className="small text-error mtop10">Error message!</span>
              </div>
              <div className="form-group item-half-left">
               <label htmlFor="basic-text">Input success</label>
               <input type="text" name="basic-text" className="input-success" defaultValue=".input-success"/>
              </div>
              <div className="form-group item-half-right">
               <label htmlFor="basic-text">Text hint</label>
               <input type="text" name="basic-text" className="input-default input-hint" placeholder=".input-hint"/>
               <span className="small text-hint mtop10">Hint message!</span>
              </div>
            </form>
            </div>
         </div>
        </Layout>
      )
    };
}