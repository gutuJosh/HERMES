import Layout from '../components/Layout.js';
import BasicInput from '../components/formElements/BasicInput';
import BasicUpload from '../components/formElements/BasicUpload';
import BasicCheckBox from '../components/formElements/BasicCheckBox';
import BasicRadioButton from '../components/formElements/BasicRadioButton';
import BasicSelector from '../components/formElements/BasicSelector';
import CustomSelector from '../components/formElements/CustomSelector';
import CustomMultipleSelector from '../components/formElements/CustomMultipleSelector';

export default class forms extends React.Component {

   constructor(props) {
    super(props);
    this.state = {
        pageInfo:'',
        defaultValues:[]
    }
    this.updateState = this.updateState.bind(this);
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

    updateState(compName,compValue){
      this.setState({[compName]:compValue});
    }

    render(){
      return(
        <Layout pageInfo={this.state.pageInfo}> 
           <div className="col-full pad20">
            <p className="large">For every element of a form, we have expanded the styling with custom selects, checkboxes, radios, switches and a few additional classes.</p>
          </div>

          <div className="grid pad10 form-elements">
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

              <BasicInput
               containerClass="item-half-left" 
               type="text" 
               name="input-readonly" 
               fieldClass="input-readonly" 
               readonly={true}
               defaultValue=".input-readonly"
               label="Input readonly"
               disabledMessage="This field is readonly!"
              />

              <BasicInput
               containerClass="item-half-right" 
               type="text" 
               name="input-disabled" 
               fieldClass="input-disabled" 
               disabled={true}
               defaultValue=".input-disabled"
               label="Input disabled"
               disabledMessage="This field is disabled!"
              />

              <BasicUpload
               containerClass="item-lg-12-1 item-md-12-1 item-sm-12-1 item-xs-12-1" 
               name="input-file" 
               placeholder=".csv .pdf .txt"
               errorMessage="Error message!"
               default={false}
              />
              
             </form>
            </div>
           
            <div className="item-lg-6-7 item-md-6-7 item-sm-12-1 item-xs-12-1 bg-white">
             <div className="pad20 m0">
              <h4>Code sample:</h4>
              <hr className="thin"/>
              <pre>
                <code></code>
              </pre>
             </div>
            </div>

            <div className="item-lg-6-1 item-md-6-1 item-sm-12-1 item-xs-12-1 bg-white">
             <div className="pad20 m0">
              <h4>Radio &amp; checkboxes:</h4>
              <hr className="thin"/>
              <div className="flex-grid wrap v-align-bottom">

               <BasicCheckBox
                 containerClass="flex-lg-4 flex-md-4 flex-sm-6 flex-sx-12"
                 id="small-checkbox"
                 labelClass="small"
                 fieldClass="basic"
                 name="small-checkbox"
                 checked={true}
                 value="OK"
                >
                <span>Small checkbox</span>
                </BasicCheckBox>

                <BasicCheckBox
                 containerClass="flex-lg-4 flex-md-4 flex-sm-6 flex-sx-12"
                 id="basic"
                 fieldClass="basic"
                 name="basick-checkbox"
                 checked={true}
                 value="OK"
                >
                <span>Normal checkbox</span>
                </BasicCheckBox>

                <BasicCheckBox
                 containerClass="flex-lg-4 flex-md-4 flex-sm-12 flex-sx-12"
                 id="large"
                 labelClass="large"
                 fieldClass="basic"
                 name="large-checkbox"
                 checked={true}
                 value="OK"
                >
                <span>Large checkbox</span>
                </BasicCheckBox>
              </div>
              <hr/>
              <div className="flex-grid wrap v-align-bottom mtop20">
               <BasicRadioButton 
                containerClass="flex-lg-4 flex-md-4 flex-sm-6 flex-sx-12"
                labelClass="small"
                id="basic-radio-btn"
                value="small"
                name="radio-btn"
                checked={true}
                checkmark="azure"
                label="Small radio button"
               />

               <BasicRadioButton 
                containerClass="flex-lg-4 flex-md-4 flex-sm-6 flex-sx-12"
                labelClass="normal"
                id="basic-radio-btn"
                value="normal"
                name="radio-btn"
                checkmark="azure"
                label="Normal radio button"
               />

               <BasicRadioButton 
                containerClass="flex-lg-4 flex-md-4 flex-sm-12 flex-sx-12"
                labelClass="large"
                id="basic-radio-btn"
                value="normal"
                name="radio-btn"
                checkmark="azure"
                label="Large radio button"
               />
              </div>
              <hr/>
              <div className="flex-grid wrap v-align-bottom">

              <BasicCheckBox
                containerClass="flex-lg-3 flex-md-3 flex-sm-6 flex-sx-12"
                id="info"
                labelClass="small"
                fieldClass="basic"
                name="small-checkbox"
                checkmark="info"
                checked={true}
                value="OK"
              >
              <span>Checkbox info</span>
              </BasicCheckBox>

              <BasicCheckBox
                containerClass="flex-lg-3 flex-md-3 flex-sm-6 flex-sx-12"
                id="warning"
                labelClass="small"
                fieldClass="basic"
                checkmark="warning"
                checked={true}
                value="OK"
              >
              <span>Checkbox warning</span>
              </BasicCheckBox>

              <BasicCheckBox
                containerClass="flex-lg-3 flex-md-3 flex-sm-6 flex-sx-12"
                id="alert"
                labelClass="small"
                fieldClass="basic"
                checkmark="error"
                checked={true}
                value="OK"
              >
              <span>Checkbox alert</span>
              </BasicCheckBox>
          

              <BasicCheckBox
                containerClass="flex-lg-3 flex-md-3 flex-sm-6 flex-sx-12"
                id="success"
                labelClass="small"
                fieldClass="basic"
                checkmark="success"
                checked={true}
                value="OK"
              >
              <span>Checkbox success</span>
              </BasicCheckBox>
              </div>
              <hr/>
              <div className="flex-grid wrap v-align-bottom mtop20">
               <BasicRadioButton 
                containerClass="flex-lg-3 flex-md-3 flex-sm-6 flex-sx-12"
                labelClass="small"
                id="info-radio-btn"
                value="small"
                name="info-radio-btn"
                checked={true}
                checkmark="info"
                label="Info radio button"
               />

               <BasicRadioButton 
                containerClass="flex-lg-3 flex-md-3 flex-sm-6 flex-sx-12"
                labelClass="small"
                id="warning-radio-btn"
                value="normal"
                name="warning-radio-btn"
                checkmark="warning"
                checked={true}
                label="Warning radio button"
               />

               <BasicRadioButton 
                containerClass="flex-lg-3 flex-md-3 flex-sm-12 flex-sx-12"
                labelClass="small"
                id="alert-radio-btn"
                value="normal"
                name="error-radio-btn"
                checkmark="error"
                checked={true}
                label="Alert radio button"
               />

               <BasicRadioButton 
                containerClass="flex-lg-3 flex-md-3 flex-sm-12 flex-sx-12"
                labelClass="small"
                id="success-radio-btn"
                value="normal"
                name="success-radio-btn"
                checkmark="success"
                checked={true}
                label="Alert radio button"
               />
              </div>


             </div>

            </div>
            <div className="item-lg-6-7 item-md-6-7 item-sm-12-1 item-xs-12-1 bg-white">
             <div className="pad20 m0">
              <h4>Code sample:</h4>
              <hr className="thin"/>
              <pre>
                <code></code>
              </pre>
             </div>
            </div>
         </div>

         <div className="grid">

          <div className="item-lg-6-1 item-md-6-1 item-sm-12-1 item-xs-12-1 bg-white">
           <div className="pad20 m0">
           <h4>Select:</h4>
           <hr className="thin"/>
           <div className="flex-grid wrap">
            <BasicSelector
              containerClass="flex-lg-6 flex-md-6 flex-sm-6 flex-sx-12"
              id="basic-selector"
              label="Basic selector"
              fieldClass=""
              name="basic-selector"
              options={[
                {'value': '','title':'Basic select box'},
                {'value': 'fx','title':'Firefox'},
                {'value': 'gc','title':'Chrome'},
                {'value': 'ed','title':'Edge'},
                {'value': 'ie','title':'Internet Explorer'},
                {'value': 'sf','title':'Safari'}

              ]}
            />
            <CustomSelector 
             containerClass="flex-lg-6 flex-md-6 flex-sm-6 flex-sx-12"
             label="Custom selector"
             selectorId="browser-list"
             placeholder="Select your browser"
             name="browsers"
             options={[
              {'value': 'fx','title':'Firefox'},
              {'value': 'gc','title':'Chrome'},
              {'value': 'ed','title':'Edge'},
              {'value': 'ie','title':'Internet Explorer'},
              {'value': 'sf','title':'Safari'}

            ]}
            selectedValue={false}
            change={() => true}
            errorMessage="This field is required"
            />

            <CustomMultipleSelector 
             containerClass="flex-lg-12 flex-md-12 flex-sm-12 flex-sx-12"
             label="Multiple selector"
             selectorId="my-browser-list"
             placeholder="Select your browser"
             name="multiple-selector"
             options={[
              {'value': 'fx','title':'Firefox'},
              {'value': 'gc','title':'Chrome'},
              {'value': 'op','title':'Opera'},
              {'value': 'vv','title':'Vivaldi'},
              {'value': 'ed','title':'Edge'},
              {'value': 'ie','title':'Internet Explorer'},
              {'value': 'sf','title':'Safari'}

            ]}
            selectedValues={this.state.selectedValues}
            change={this.updateState}
            errorMessage="This field is required"
            />
            </div>
           </div>
          </div>

          <div className="item-lg-6-7 item-md-6-7 item-sm-12-1 item-xs-12-1 bg-white">
             <div className="pad20 m0">
              <h4>Code sample:</h4>
              <hr className="thin"/>
              <pre>
                <code></code>
              </pre>
             </div>
          </div>
        </div>
        </Layout>
      )
    };
}