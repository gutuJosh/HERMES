import Layout from '../components/Layout.js';
import BasicInput from '../components/formElements/BasicInput';
import BasicUpload from '../components/formElements/BasicUpload';
import CustomUpload from '../components/formElements/CustomUpload';
import BasicCheckBox from '../components/formElements/BasicCheckBox';
import BasicRadioButton from '../components/formElements/BasicRadioButton';
import BasicSelector from '../components/formElements/BasicSelector';
import CustomSelector from '../components/formElements/CustomSelector';
import CustomMultipleSelector from '../components/formElements/CustomMultipleSelector';
import Switcher from '../components/formElements/Switcher';
import ButtonGroup from '../components/formElements/ButtonGroup';

export default class forms extends React.Component {

   constructor(props) {
    super(props);
    this.state = {
        pageInfo:'',
        selectedValues:[]
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
             </form>
            </div>
           
            <div className="item-lg-6-7 item-md-6-7 item-sm-12-1 item-xs-12-1 bg-white">
             <div className="pad20 m0">
              <h4>Code sample:</h4>
              <hr className="thin"/>
        
              <pre>
                <code>
                  &lt;div&nbsp;class&#61;"form-group"&gt;<br/>
                  &nbsp;&lt;label for="basic-text"&gt;<span className="text-middle-grey">Lorem ipsum:</span>&lt;/label&gt;<br/>
                  &nbsp;&lt;input&nbsp;class&#61;"<span className="text-green">[input-default|input-warning|input-error|input-success|text-hint|input-readonly|input-disabled]</span>" type="text" name="basic-text" /&gt;<br/>
                  &nbsp;&lt;span&nbsp;class&#61;"<span className="text-green">text-warning</span>"&gt;<span className="text-middle-grey">Lorem ipsum dolor sit amet.</span>&lt;/span&gt;<br/>
                  &nbsp;&lt;span&nbsp;class&#61;"<span className="text-green">text-error</span>"&gt;<span className="text-middle-grey">Lorem ipsum dolor sit amet.</span>&lt;/span&gt;<br/>
                  &nbsp;&lt;span&nbsp;class&#61;"<span className="text-green">text-success</span>"&gt;<span className="text-middle-grey">Lorem ipsum dolor sit amet.</span>&lt;/span&gt;<br/>
                  &nbsp;&lt;span&nbsp;class&#61;"<span className="text-green">text-hint</span>"&gt;<span className="text-middle-grey">Lorem ipsum dolor sit amet.</span>&lt;/span&gt;<br/>
                  &nbsp;&lt;span&nbsp;class&#61;"<span className="text-green">text-disabled</span>"&gt;<span className="text-middle-grey">Lorem ipsum dolor sit amet.</span>&lt;/span&gt;<br/>
                  &lt;/div&gt;
                </code>
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
                <code>
                  &lt;div&gt;<br/>
                  &nbsp;&lt;label&nbsp;class&#61;"<span className="text-green">custom-checkbox [small|large]</span>"&gt;<br/>
                  &nbsp;&nbsp;&lt;input type="checkbox"/&gt;<br/>
                  &nbsp;&nbsp;&lt;span&nbsp;class&#61;"<span className="text-green">checkmark [info|warning|error|success]</span>"&gt;&lt;/span&gt;<br/>
                  &nbsp;&nbsp;&lt;span&gt;<span className="text-middle-grey">Lorem ipsum</span>&lt;/span&gt;<br/>
                  &nbsp;&lt;/label&gt;<br/>
                  &lt;/div&gt;
                </code>
              </pre>

              <pre>
                <code>
                  &lt;div&gt;<br/>
                  &nbsp;&lt;label&nbsp;class&#61;"<span className="text-green">custom-radio-button [small|large]</span>"&gt;<br/>
                  &nbsp;&nbsp;<span className="text-middle-grey">Lorem ipsum</span><br/>
                  &nbsp;&nbsp;&lt;input type="checkbox"/&gt;<br/>
                  &nbsp;&nbsp;&lt;span&nbsp;class&#61;"<span className="text-green">checkmark [info|warning|error|success]</span>"&gt;&lt;/span&gt;<br/>
                  &nbsp;&lt;/label&gt;<br/>
                  &lt;/div&gt;
                </code>
              </pre>

             </div>
            </div>
         </div>

         <div className="grid pad10">

          <div className="item-lg-6-1 item-md-6-1 item-sm-12-1 item-xs-12-1 bg-white">
           <div className="pad20 m0">
           <h4>Selectors and switchers:</h4>
           <hr className="thin"/>
           <form className="flex-grid wrap">
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
              {'value': 'Firefox','title':'Firefox'},
              {'value': 'Chrome','title':'Chrome'},
              {'value': 'opera','title':'Opera'},
              {'value': 'vivaldi','title':'Vivaldi'},
              {'value': 'edge','title':'Edge'},
              {'value': 'internet explorer','title':'Internet Explorer'},
              {'value': 'safari','title':'Safari'}

            ]}
            selectedValues={this.state.selectedValues}
            change={this.updateState}
            errorMessage="This field is required"
            />
            </form>
            <hr className="thin"/>
            <div className="flex-grid wrap">
             <Switcher
               containerClass="flex-lg-2 flex-md-2 flex-sm-4 flex-sx-12"
               type="normal"
               id="custom-switcher" 
               checked={false}
               round="round"
             />
               <Switcher
               containerClass="flex-lg-2 flex-md-2 flex-sm-4 flex-sx-12"
               type="info"
               id="custom-switcher" 
               checked={true}
               round="round"
             />
              <Switcher
               containerClass="flex-lg-2 flex-md-2 flex-sm-4 flex-sx-12"
               type="warning"
               id="custom-switcher" 
               checked={true}
               round="round"
             />
              <Switcher
               containerClass="flex-lg-2 flex-md-2 flex-sm-4 flex-sx-12"
               type="error"
               id="custom-switcher" 
               checked={true}
               round="round"
             />
              <Switcher
               containerClass="flex-lg-2 flex-md-2 flex-sm-4 flex-sx-12"
               type="success"
               id="custom-switcher" 
               checked={true}
               round="round"
             />
              <Switcher
               containerClass="flex-lg-2 flex-md-2 flex-sm-12 flex-sx-12"
               type="success large"
               id="custom-switcher" 
               checked={true}
               round="round"
             />
            </div>

            <div className="flex-grid wrap mtop20">
             <Switcher
               containerClass="flex-lg-2 flex-md-2 flex-sm-4 flex-sx-12"
               type="normal"
               id="custom-switcher" 
               checked={false}
             />
               <Switcher
               containerClass="flex-lg-2 flex-md-2 flex-sm-4 flex-sx-12"
               type="info"
               id="custom-switcher" 
               checked={true}
             />
              <Switcher
               containerClass="flex-lg-2 flex-md-2 flex-sm-4 flex-sx-12"
               type="warning"
               id="custom-switcher" 
               checked={true}
             />
              <Switcher
               containerClass="flex-lg-2 flex-md-2 flex-sm-4 flex-sx-12"
               type="error"
               id="custom-switcher" 
               checked={true}
             />
              <Switcher
               containerClass="flex-lg-2 flex-md-2 flex-sm-4 flex-sx-12"
               type="success"
               id="custom-switcher" 
               checked={true}
             />
              <Switcher
               containerClass="flex-lg-2 flex-md-2 flex-sm-12 flex-sx-12"
               type="success large"
               id="custom-switcher" 
               checked={true}
             />
            </div>

           </div>
          </div>

          <div className="item-lg-6-7 item-md-6-7 item-sm-12-1 item-xs-12-1 bg-white">
             <div className="pad20 m0">
              <h4>Code sample:</h4>
              <hr className="thin"/>
        
              <pre>
                <code>
                  &lt;div&gt;<br/>
                  &nbsp;&lt;label&nbsp;class&#61;"<span className="text-green">selector-label</span>"&gt;<span className="text-middle-grey">Lorem ipsum</span>&nbsp;&lt;/label&gt;<br/>
                  &nbsp;&lt;div&nbsp;class&#61;"<span className="text-green">custom-selector</span>"&gt;<br/>
                  &nbsp;&nbsp;&lt;input type="checkbox"&nbsp;class&#61;"<span className="text-green">open-select-list</span>" id="browser-list" /&gt;<br/>
                  &nbsp;&nbsp;&lt;label for="browser-list"&gt;<span className="text-middle-grey">Lorem ipsum</span>&lt;/label&gt;<br/>
                  &nbsp;&nbsp;&lt;div&nbsp;class&#61;"<span className="text-green">select-menu</span>"&gt;<br/>
                  &nbsp;&nbsp;&nbsp;&lt;ul&nbsp;class&#61;"<span className="text-green">select-options</span>"&gt;<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;input type="radio" id="input_1"&nbsp;class&#61;"<span className="text-green">custom-options</span>" /&gt;<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;label for="input_1"&gt;<span className="text-middle-grey">Option ipsum</span>&lt;/label&gt;<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&lt;/li&gt;<br/>
                  &nbsp;&nbsp;&nbsp;&lt;/ul&gt;<br/>
                  &nbsp;&nbsp;&lt;/div&gt;<br/>
                  &nbsp;&lt;/div&gt;<br/>
                  &nbsp;&lt;!-- only for multiple selector --&gt;<br/>
                  &nbsp;&lt;div&nbsp;class&#61;"<span className="text-green">selected-options-container</span>"&gt;<br/>
                  &nbsp;&nbsp;&lt;span&nbsp;class&#61;"<span className="text-green">selected-label</span>"&gt;<span className="text-middle-grey">Option ipsum</span>&lt;/span&gt;<br/>
                  &nbsp;&lt;/div&gt;<br/>
                  &lt;/div&gt;
                </code>
              </pre>

              <pre>
                <code>
                  &lt;div&gt;<br/>
                  &nbsp;&lt;label&nbsp;class&#61;"<span className="text-green">switch [info|warning|error|success]</span>"&gt;<br/>
                  &nbsp;&nbsp;&lt;input type="checkbox" /&gt;<br/>
                  &nbsp;&nbsp;&lt;span&nbsp;class&#61;"<span className="text-green">slider [round]</span>"&gt;&lt;/span&gt;<br/>
                  &nbsp;&lt;/label&gt;<br/>
                  &lt;/div&gt;
                </code>
              </pre>

             </div>
          </div>

          <div className="item-lg-6-1 item-md-6-1 item-sm-12-1 item-xs-12-1 bg-white">
           <div className="pad20 m0">
            <h4>Uploaders:</h4>
            <hr className="thin"/>
            <form>
            <BasicUpload
               containerClass="item-lg-12-1 item-md-12-1 item-sm-12-1 item-xs-12-1" 
               name="input-file" 
               placeholder=".csv .pdf .txt"
               errorMessage="Error message!"
               default={false}
              />
              <CustomUpload
               containerClass="item-lg-12-1 item-md-12-1 item-sm-12-1 item-xs-12-1 mtop10" 
               name="custom-input-file" 
               id="custom-input-file" 
               label="Click or drop your images here"
              />
            </form>
           </div>
          </div>

          <div className="item-lg-6-7 item-md-6-7 item-sm-12-1 item-xs-12-1 bg-white">
             <div className="pad20 m0">
              <h4>Code sample:</h4>
              <hr className="thin"/>
              <pre>
                <code>
                  &lt;div&nbsp;class&#61;"form-group"&gt;<br/>
                  &nbsp;&lt;label&gt;<span className="text-middle-grey">Lorem ipsum</span>&lt;/label&gt;<br/>
                  &nbsp;&lt;div&nbsp;class&#61;"<span className="text-green">basic-upload-input</span>"&gt;<br/>
                  &nbsp;&nbsp;&lt;label&nbsp;class&#61;"<span className="text-green">placeholder</span>" for="input-file"&gt;<br/>
                  &nbsp;&nbsp;&nbsp;&lt;span&gt;<span className="text-middle-grey">.csv .pdf .txt</span>&lt;/span&gt;<br/>
                  &nbsp;&nbsp;&lt;/label&gt;<br/>
                  &nbsp;&nbsp;&lt;input&nbsp;class&#61;"<span className="text-green">input-file</span>" type="file" name="input-file"/&gt;<br/>
                  &nbsp;&nbsp;&lt;span&nbsp;class&#61;"<span className="text-green">[text-warning|text-error|text-succes]</span>"&gt;
                  <span className="text-middle-grey">Lorem ipsum</span>&lt;/span&gt;<br/>
                  &lt;/div&gt;
                </code>
              </pre>

              <pre>
                <code>
                  &lt;div&nbsp;class&#61;"<span className="text-green">custom-uploader</span>"&gt;<br/>
                  &nbsp;&lt;input type="file" name="filename" id="custom-input"/&gt;<br/>
                  &nbsp;&lt;label for="custom-input"&gt;<span className="text-middle-grey">Lorem impsum dolor</span>&lt;/label&gt;<br/>
                  &lt;/div&gt;
                </code>
              </pre>

            </div>
        </div>

        <div className="item-lg-6-1 item-md-6-1 item-sm-12-1 item-xs-12-1 bg-white">
         <div className="pad20 m0 grid">
          <div className="item-lg-12-1 item-md-12-1 item-sm-12-1 item-xs-12-1 mtop10">
           <h4>Textarea and buttons:</h4>
           <hr className="thin"/>
           </div>

           <div className="item-lg-12-1 item-md-12-1 item-sm-12-1 item-xs-12-1">
             <div className="form-group">
              <label htmlFor="textarea">Message:</label>
              <textarea id="textarea" className="textarea"></textarea>
            </div>
            </div>

            <div className="item-lg-12-1 item-md-12-1 item-sm-12-1 item-xs-12-1 text-center">
             <button className="btn-default btn-small mtop10"><span>.btn-default .btn-small</span></button>&nbsp;
             <button className="btn-dark btn-large mtop10"><span>.btn-dark .btn-large</span></button>&nbsp;
             <button className="btn-info mtop10"><span className="text-white">.btn-info</span></button>&nbsp;
             <button className="btn-warning mtop10"><span className="">.btn-warning</span></button>&nbsp;
             <button className="btn-alert mtop10"><span className="">.btn-alert</span></button>&nbsp;
             <button className="btn-success mtop10"><span className="">.btn-success</span></button>
             <button className="btn-info btn-full mtop10"><span className="">.btn-full</span></button>
            </div>

            <div className="item-lg-12-1 item-md-12-1 item-sm-12-1 item-xs-12-1 text-center">
             <button className="btn-outline-info mtop10"><span className="">.btn-outline-info</span></button>&nbsp;
             <button className="btn-outline-warning mtop10"><span className="">.btn-outline-warning</span></button>&nbsp;
             <button className="btn-outline-alert mtop10"><span className="">.btn-outline-red</span></button>&nbsp;
             <button className="btn-outline-success mtop10"><span className="">.btn-outline-success</span></button>&nbsp;
            </div>
            </div>
            <div className="pad20 m0 grid">
            <div className="item-lg-2-1 item-md-3-1 item-sm-3-1 item-xs-12-1 mtop10">
              <ButtonGroup 
               id="groupBtn"
               placeholder="Dropdown"
               name="actions"
               options={[
                  {'title':'Option 1', 'value':1},
                  {'title':'Option 2', 'value':2},
                  {'title':'Option 3', 'value':3},
                  {'title':'Option 4', 'value':4},
               ]}
              />
            </div>
            <div className="item-lg-2-3 item-md-3-4 item-sm-3-4 item-xs-12-1 mtop10">
              <ButtonGroup 
               type="info"
               id="group-info"
               placeholder="Dropdown"
               name="actn"
               options={[
                  {'title':'Option 1', 'value':1},
                  {'title':'Option 2', 'value':2},
                  {'title':'Option 3', 'value':3},
                  {'title':'Option 4', 'value':4},
               ]}
              />
            </div>
            <div className="item-lg-2-5 item-md-3-7 item-sm-3-7 item-xs-12-1 mtop10">
              <ButtonGroup 
               type="warning"
               id="group-warning"
               placeholder="Dropdown"
               name="act"
               options={[
                  {'title':'Option 1', 'value':1},
                  {'title':'Option 2', 'value':2},
                  {'title':'Option 3', 'value':3},
                  {'title':'Option 4', 'value':4},
               ]}
              />
            </div>
            <div className="item-lg-2-7 item-md-3-10 item-sm-3-10 item-xs-12-1 mtop10">
              <ButtonGroup 
               type="error"
               id="group-alert"
               placeholder="Dropdown"
               name="ac"
               options={[
                  {'title':'Option 1', 'value':1},
                  {'title':'Option 2', 'value':2},
                  {'title':'Option 3', 'value':3},
                  {'title':'Option 4', 'value':4},
               ]}
              />
            </div>
            <div className="item-lg-2-9 item-md-3-1 item-sm-3-1 item-xs-12-1 mtop10">
              <ButtonGroup 
               type="success"
               id="group-success"
               placeholder="Dropdown"
               name="success"
               options={[
                  {'title':'Option 1', 'value':1},
                  {'title':'Option 2', 'value':2},
                  {'title':'Option 3', 'value':3},
                  {'title':'Option 4', 'value':4},
               ]}
              />
            </div>
            <div className="item-lg-2-11 item-md-3-4 item-sm-3-4 item-xs-12-1 mtop10">
              <ButtonGroup 
               type="dark"
               id="group-dark"
               placeholder="Dropdown"
               name="actionsgrey"
               options={[
                  {'title':'Option 1', 'value':1},
                  {'title':'Option 2', 'value':2},
                  {'title':'Option 3', 'value':3},
                  {'title':'Option 4', 'value':4},
               ]}
              />
            </div>
          </div>
        </div>

        <div className="item-lg-6-7 item-md-6-7 item-sm-12-1 item-xs-12-1 bg-white">
         <div className="pad20 m0">
              <h4>Code sample:</h4>
              <hr className="thin"/>
              <pre>
                <code>
                  &lt;div&gt;<br/>
                  &nbsp;&lt;label for="textarea"&gt;<span className="text-middle-grey">Lorem ipsum</span>&lt;/label&gt;<br/>
                  &nbsp;&lt;textarea id="textarea"&nbsp;class&#61;"<span className="text-green">textarea</span>"&gt;&lt;/textarea&gt;<br/>
                  &lt;/div&gt;
                </code>
              </pre>
              <pre>
                <code>
                  &lt;button&nbsp;class&#61;"<span className="text-green">[btn-small|btn-large|btn-full] [btn-info|btn-warning|btn-alert|btn-sccess]</span>"&gt;<br/>
                  &nbsp;&lt;span&gt;<span className="text-middle-grey">Lorem ipsum</span>&lt;/span&gt;<br/>
                  &lt;/button&gt;
                </code>
              </pre>
              <pre>
                <code>
                  &lt;button&nbsp;class&#61;"<span className="text-green">[btn-outline-info|btn-outline-warning|btn-outline-alert|btn-outline-sccess]</span>"&gt;<br/>
                  &nbsp;&lt;span&gt;<span className="text-middle-grey">Lorem ipsum</span>&lt;/span&gt;<br/>
                  &lt;/button&gt;
                </code>
              </pre>
              <pre>
                <code>
                  &lt;div&nbsp;class&#61;"<span className="text-green">btn-group [info|warning|error|sccess]</span>"&gt;<br/>
                  &nbsp;&lt;input id="groupBtn" /&gt;<br/>
                  &nbsp;&lt;label for="groupBtn"&gt;<span className="text-middle-grey">Lorem ipsum</span>&lt;/label&gt;<br/>
                  &nbsp;&lt;ul&nbsp;class&#61;"<span className="text-green">dropdown-menu</span>"&gt;<br/>
                  &nbsp;&nbsp;&lt;li&gt;<span className="text-middle-grey">Option ipsum</span>&lt;/li&gt;<br/>
                  &nbsp;&nbsp;&lt;li&gt;<span className="text-middle-grey">Option ipsum</span>&lt;/li&gt;<br/>
                  &nbsp;&nbsp;&lt;li&gt;<span className="text-middle-grey">Option ipsum</span>&lt;/li&gt;<br/>
                  &nbsp;&lt;/ul&gt;<br/>
                  &lt;/div&gt;
                </code>
              </pre>
          </div>
        </div>

      
        </div>
        </Layout>
      )
    };
}