import Layout from '../components/Layout.js';
import BasicInput from '../components/formElements/BasicInput';
import BasicUpload from '../components/formElements/BasicUpload';

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
            <p className="large">For every element of a form, we have expanded the styling with custom selects, checkboxes, radios, switches and a few additional classes.</p>
          </div>

          <div className="grid pad10">
            <div className="item-lg-6-1 item-md-6-1 item-sm-12-1 item-xs-12-1 bg-white">
            <form className="pad20 grid">
            <BasicInput
               containerClass="item-half-left" 
               type="text" 
               name="basic-text" 
               fieldClass="input-default" 
               placeholder=".input-default"
               label="Text Input"
              />

              <BasicInput
               containerClass="item-half-right" 
               type="password" 
               name="basic-pasword" 
               fieldClass="input-default" 
               placeholder=".input-default"
               label="Password Input"
               defaultValue="password"
              />

              <BasicInput
               containerClass="item-half-left" 
               type="text" 
               name="input-warning" 
               fieldClass="input-warning" 
               placeholder=".input-warning"
               label="Input warning"
               warningMessage="Warning message!"
              />

              <BasicInput
               containerClass="item-half-right" 
               type="text" 
               name="input-error" 
               fieldClass="input-error" 
               placeholder=".input-error"
               label="Input error"
               defaultValue=".input-error"
               errorMessage="Error message!"
              />

              <BasicInput
               containerClass="item-half-left" 
               type="text" 
               name="input-success" 
               fieldClass="input-success" 
               placeholder=".input-success"
               label="Input success"
               successMessage="Success message!"
              />

               <BasicInput
               containerClass="item-half-right" 
               type="text" 
               name="input-hint" 
               fieldClass="input-default input-hint" 
               placeholder=".input-hint"
               label="Input hint"
               hintMessage="Hint message!"
              />

              <BasicUpload
               containerClass="item-half-left" 
               name="input-file" 
               placeholder=".csv .pdf .txt"
               errorMessage="Error message!"
               default={false}
              />
              
            </form>
            </div>
         </div>
        </Layout>
      )
    };
}