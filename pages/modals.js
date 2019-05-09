import Layout from '../components/Layout.js';
import ModalDialog from '../components/ui/ModalDialog.js';
import AlertLabel from '../components/ui/AlertLabel.js';

export default class modals extends React.Component {

   constructor(props) {
    super(props);
    this.state = {
        pageInfo:'',
        modal : {
           'type' : 'info',
           'icon' : 'fas fa-info-circle',
           'message' : {
            'title': 'Info',
            'text':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi ducimus id itaque totam saepe reiciendis corporis consectetur.'
          },
          'status' : 'mask-off'
        }
    }
    this.manageModalDialog = this.manageModalDialog.bind(this);
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

    manageModalDialog(e){
      e.preventDefault();
      let modalInfo = this.state.modal;
      let status = e.target.dataset.action;
      modalInfo.status = status;
      modalInfo.type = typeof(e.target.dataset.type) !== 'undefined' ? e.target.dataset.type : 'info';
      modalInfo.message.title = modalInfo.type.toLocaleUpperCase();
      switch(modalInfo.type){
        case 'info':
        modalInfo.icon = 'fas fa-info-circle';
        break;

        case 'warning':
        modalInfo.icon = 'fas fa-exclamation-triangle';
        break;

        case 'alert':
        modalInfo.icon = 'fas fa-times-circle';
        break; 

        case 'success':
        modalInfo.icon = 'fas fa-check';
        break;
      }
      this.setState({'modal':modalInfo});
    }
    

    render(){
      return(
        <Layout pageInfo={this.state.pageInfo}> 
          <div className="col-full pad20">
            <p className="large">
            Following are some examples with modals. There are two types of modal dialog boxes: with colored header on dark background
            and full coloured on white background. Every modal box is enclosed in a div class "mask", which by default is hidden. By adding
            the class "mask-on" the dialog box become visible. In the same way you can show an alert label by adding the class "alert-on" on a div
            with "alert-label" class.
            </p>
          </div>
          <div className="grid pad10">
           <div className="item-lg-6-1 item-md-6-1 item-sm-12-1 item-xs-12-1 bg-white">
            <div className="pad20 m0">
             <h4>Modals <small>click a button below in order to view the modal dialog box on the page</small></h4> 
             <hr className="thin"/>
             <p>
              <button className="btn btn-info mtop10" onClick={this.manageModalDialog} data-action="mask-on" data-type="info">.modal .info</button>&nbsp;
              <button className="btn btn-warning mtop10" onClick={this.manageModalDialog} data-action="mask-on" data-type="warning">.modal .warning</button>&nbsp;
              <button className="btn btn-alert mtop10" onClick={this.manageModalDialog} data-action="mask-on" data-type="alert">.modal .alert</button>&nbsp;
              <button className="btn btn-success mtop10" onClick={this.manageModalDialog} data-action="mask-on" data-type="success">.modal .success</button>
              </p>
             <p className="mtop10">
              <button className="btn btn-outline-info mtop10" onClick={this.manageModalDialog} data-action="dark mask-on" data-type="info">.modal .info</button>&nbsp;
              <button className="btn btn-outline-warning mtop10" onClick={this.manageModalDialog} data-action="dark mask-on" data-type="warning">.modal .warning</button>&nbsp;
              <button className="btn btn-outline-alert mtop10" onClick={this.manageModalDialog} data-action="dark mask-on" data-type="alert">.modal .alert</button>&nbsp;
              <button className="btn btn-outline-success mtop10" onClick={this.manageModalDialog} data-action="dark mask-on" data-type="success">.modal .success</button>
            </p>
            </div>
           </div>

           <div className="item-lg-6-7 item-md-6-7 item-sm-12-1 item-xs-12-1 bg-white">
            <div className="pad20 m0">
             <h4>Code sample:</h4> 
             <hr className="thin"/>
             <pre>
              <code>
              &lt;div&nbsp;class&#61;"<span className="text-green">mask [dark] [mask-on]</span>"&gt;<br/>
              &nbsp;&lt;div&nbsp;class&#61;"<span className="text-green">modal [info|warning|alert|success]</span>"&gt;<br/>
              &nbsp;&nbsp;&lt;header&nbsp;class&#61;"<span className="text-green">modal-header</span>"&gt;&lt;/header"&gt;<br/>
              &nbsp;&nbsp;&lt;div&nbsp;class&#61;"<span className="text-green">modal-body</span>"&gt;<br/>
              &nbsp;&nbsp;&nbsp;&lt;p&gt;<span className="text-middle-grey">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>&lt;/p&gt;<br/>
              &nbsp;&nbsp;&lt;/div&gt;<br/>
              &nbsp;&nbsp;&lt;footer&nbsp;class&#61;"<span className="text-green">modal-footer</span>"&gt;<br/>
              &nbsp;&nbsp;&nbsp;&lt;button&gt;<span className="text-middle-grey">Continue</span>&lt;/button&gt;<br/>
              &nbsp;&nbsp;&lt;/footer&gt;<br/>
              &nbsp;&nbsp;&lt;/div&gt;<br/>
              &lt;/div&gt;
              </code>
             </pre>
            </div>
           </div>

           <div className="item-lg-6-1 item-md-6-1 item-sm-12-1 item-xs-12-1 bg-white">
            <div className="pad20 m0">
            <h4>Alert labels:</h4>
            <hr className="thin"/>
            <AlertLabel active="alert-on" type="default" message="Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
            <AlertLabel active="alert-on" type="info" message="Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
            <AlertLabel active="alert-on" type="warning" message="Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
            <AlertLabel active="alert-on" type="error" message="Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
            <AlertLabel active="alert-on" type="success" message="Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
            <AlertLabel active="alert-on" type="dark" message="Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
            </div>
           </div>

           <div className="item-lg-6-7 item-md-6-7 item-sm-12-1 item-xs-12-1 bg-white">
           <div className="pad20 m0">
             <h4>Code sample:</h4> 
             <hr className="thin"/>
             <pre>
              <code>
              &lt;div&nbsp;class&#61;"<span className="text-green">alert-label [alert-on] [default|info|warning|error|success|dark]</span>"&gt;<br/> 
              &nbsp;&lt;div&nbsp;class&#61;"<span className="text-green">close</span>"&gt;X&lt;/span&gt;<br/>
              &nbsp;&lt;p&nbsp;class&#61;"<span className="text-green">small</span>"&gt;<span className="text-middle-grey">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>&lt;/p&gt;<br/>
              &lt;/div&gt;<br/>
              </code>
            </pre>
           </div>
           </div>

          </div>
          <ModalDialog 
           type={this.state.modal.type} 
           icon={this.state.modal.icon}
           message={this.state.modal.message}
           active={this.state.modal.status} 
           close={this.manageModalDialog}
           warningAction={this.manageModalDialog}
          />
        </Layout>
      )
    };
}