import Layout from '../components/Layout.js';


export default class table extends React.Component {

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
             The following examples show how different components can be used together with basic and responsive tables. 
             Add the class "table" to a table html element. This step is requested in order to apply the css rules correctly, after that
             you can add "table-bordered", "table-borderless", "zebra-stripes" or "table-hover" classes to further styling your tables.
             Also you can add "disabled" class to a "tr" element to mark it as disabled.
            </p>
          </div>
          <div className="grid pad10">
           <div className="item-lg-6-1 item-md-6-1 item-sm-12-1 item-xs-12-1 bg-white">
            <div className="pad20 m0">
             <h4>Basic, bordered, hover striped rows &amp; striped rows:</h4> 
             <hr className="thin"/>
              <table className="table">
                <thead>
                 <tr>
                  <th>Id</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                 </tr>
                </thead>
                <tbody>
                 <tr>
                  <td>1</td>
                  <td>Horvath</td>
                  <td>Cosmin</td>
                  <td>@cos</td>
                 </tr>
                 <tr>
                  <td>2</td>
                  <td>Otilia</td>
                  <td>Maier</td>
                  <td>@oti</td>
                 </tr>
                 <tr>
                  <td>3</td>
                  <td>Santa</td>
                  <td>Klaus</td>
                  <td>@santa</td>
                 </tr>
                </tbody>
              </table>

              <table className="table table-bordered table-hover">
                <thead>
                 <tr>
                  <th>Id</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                 </tr>
                </thead>
                <tbody>
                 <tr>
                  <td>1</td>
                  <td>Horvath</td>
                  <td>Cosmin</td>
                  <td>@cos</td>
                 </tr>
                 <tr>
                  <td>2</td>
                  <td>Otilia</td>
                  <td>Maier</td>
                  <td>@oti</td>
                 </tr>
                 <tr className="disabled">
                  <td>3</td>
                  <td>Santa</td>
                  <td>Klaus</td>
                  <td>@santa</td>
                 </tr>
                </tbody>
              </table>
           
              <table className="table table-bordered zebra-stripes">
                <thead>
                 <tr>
                  <th>Id</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                 </tr>
                </thead>
                <tbody>
                 <tr>
                  <td>1</td>
                  <td>Horvath</td>
                  <td>Cosmin</td>
                  <td>@cos</td>
                 </tr>
                 <tr>
                  <td>2</td>
                  <td>Otilia</td>
                  <td>Maier</td>
                  <td>@oti</td>
                 </tr>
                 <tr>
                  <td>3</td>
                  <td>Santa</td>
                  <td>Klaus</td>
                  <td>@santa</td>
                 </tr>
                </tbody>
              </table>
          
            </div>
           </div>

           <div className="item-lg-6-7 item-md-6-7 item-sm-12-1 item-xs-12-1 bg-white">
            <div className="pad20 m0">
             <h4>Code sample:</h4> 
             <hr className="thin"/>
             <pre>
              <code>
              &lt;table&nbsp;class&#61;"<span className="text-green">table [table-bordered|table-borderless] [zebra-stripes] [table-hover]</span>"&gt;<br/>
              &nbsp;&lt;thead&gt;<br/>
              &nbsp;&nbsp;&lt;tr&gt;<br/>
              &nbsp;&nbsp;&nbsp;&lt;th&gt;<span className="text-middle-grey">Id</span>&lt;/th&gt;<br/>
              &nbsp;&nbsp;&nbsp;&lt;th&gt;<span className="text-middle-grey">First Name</span>&lt;/th&gt;<br/>
              &nbsp;&nbsp;&nbsp;&lt;th&gt;<span className="text-middle-grey">Last Name</span>&lt;/th&gt;<br/>
              &nbsp;&nbsp;&nbsp;&lt;th&gt;<span className="text-middle-grey">Username</span>&lt;/th&gt;<br/>
              &nbsp;&nbsp;&lt;/tr&gt;<br/>
              &nbsp;&lt;/thead&gt;<br/>
              &nbsp;&lt;tbody&gt;<br/>
              &nbsp;&nbsp;&lt;tr&gt;<br/>
              &nbsp;&nbsp;&nbsp;&lt;td&gt;<span className="text-middle-grey">1</span>&lt;/td&gt;<br/>
              &nbsp;&nbsp;&nbsp;&lt;td&gt;<span className="text-middle-grey">Cosmin</span>&lt;/td&gt;<br/>
              &nbsp;&nbsp;&nbsp;&lt;td&gt;<span className="text-middle-grey">Horvath</span>&lt;/td&gt;<br/>
              &nbsp;&nbsp;&nbsp;&lt;td&gt;<span className="text-middle-grey">@cos</span>&lt;/td&gt;<br/>
              &nbsp;&nbsp;&lt;tr&gt;<br/>
              &nbsp;&nbsp;&lt;tr&nbsp;class&#61;"<span className="text-green">[disabled]</span>&gt;<br/>
              &nbsp;&nbsp;&nbsp;&lt;td&gt;<span className="text-middle-grey">2</span>&lt;/td&gt;<br/>
              &nbsp;&nbsp;&nbsp;&lt;td&gt;<span className="text-middle-grey">Otilia</span>&lt;/td&gt;<br/>
              &nbsp;&nbsp;&nbsp;&lt;td&gt;<span className="text-middle-grey">Maier</span>&lt;/td&gt;<br/>
              &nbsp;&nbsp;&nbsp;&lt;td&gt;<span className="text-middle-grey">@oti</span>&lt;/td&gt;<br/>
              &nbsp;&nbsp;&lt;tr&gt;<br/>
              &nbsp;&lt;tbody&gt;<br/>
              &lt;/table&gt;<br/>
              </code>
             </pre>
            </div>
           </div>

           <div className="item-lg-6-1 item-md-6-1 item-sm-12-1 item-xs-12-1 bg-white">
            <div className="pad20 m0">
            <h4>Responsive:</h4>
            <hr className="thin"/>
            <div className="table-flip-scroll">
            <table className="table table-borderless zebra-stripes">
                <thead>
                 <tr>
                  <th>Id</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                 </tr>
                </thead>
                <tbody>
                 <tr>
                  <td>1</td>
                  <td>Horvath</td>
                  <td>Cosmin</td>
                  <td>@cos</td>
                 </tr>
                 <tr>
                  <td>2</td>
                  <td>Otilia</td>
                  <td>Maier</td>
                  <td>@oti</td>
                 </tr>
                 <tr>
                  <td>3</td>
                  <td>Santa</td>
                  <td>Klaus</td>
                  <td>@santa</td>
                 </tr>
                </tbody>
              </table>
            </div>
            <div className="table-flip-scroll mtop10">
             <table className="table responsive table-bordered zebra-stripes">
                <thead>
                 <tr>
                  <th>Id</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                 </tr>
                </thead>
                <tbody>
                 <tr>
                  <td>1</td>
                  <td>Horvath</td>
                  <td>Cosmin</td>
                  <td>@cos</td>
                 </tr>
                 <tr>
                  <td>2</td>
                  <td>Otilia</td>
                  <td>Maier</td>
                  <td>@oti</td>
                 </tr>
                 <tr>
                  <td>3</td>
                  <td>Santa</td>
                  <td>Klaus</td>
                  <td>@santa</td>
                 </tr>
                </tbody>
              </table>
            </div>
            </div>
           </div>

           <div className="item-lg-6-7 item-md-6-7 item-sm-12-1 item-xs-12-1 bg-white">
           <div className="pad20 m0">
             <h4>Code sample:</h4> 
             <hr className="thin"/>
             <pre>
              <code>
              &lt;div&nbsp;class&#61;"<span className="text-green">table-flip-scroll</span>&gt;<br/>
              &nbsp;&lt;table&nbsp;class&#61;"<span className="text-green">table responsive [table-bordered|table-borderless] [zebra-stripes] [table-hover]</span>"&gt;<br/>
              &nbsp;&nbsp;&lt;thead&gt;<br/>
              &nbsp;&nbsp;&nbsp;&lt;tr&gt;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;th&gt;<span className="text-middle-grey">Id</span>&lt;/th&gt;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;th&gt;<span className="text-middle-grey">First Name</span>&lt;/th&gt;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;th&gt;<span className="text-middle-grey">Last Name</span>&lt;/th&gt;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;th&gt;<span className="text-middle-grey">Username</span>&lt;/th&gt;<br/>
              &nbsp;&nbsp;&nbsp;&lt;/tr&gt;<br/>
              &nbsp;&nbsp;&lt;/thead&gt;<br/>
              &nbsp;&nbsp;&lt;tbody&gt;<br/>
              &nbsp;&nbsp;&nbsp;&lt;tr&gt;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;<span className="text-middle-grey">1</span>&lt;/td&gt;<br/>
              &nbsp; &nbsp;&nbsp;&nbsp;&lt;td&gt;<span className="text-middle-grey">Cosmin</span>&lt;/td&gt;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;<span className="text-middle-grey">Horvath</span>&lt;/td&gt;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;<span className="text-middle-grey">@cos</span>&lt;/td&gt;<br/>
              &nbsp;&nbsp;&lt;tbody&gt;<br/>
              &nbsp;&lt;/table&gt;<br/>
              &lt;/div&gt;<br/>
              </code>
            </pre>
           </div>
           </div>

          </div>
        </Layout>
      )
    };
}