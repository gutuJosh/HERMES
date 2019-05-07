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
            <p className="large">The following examples show how different components can be used together with basic and responsive tables.</p>
          </div>
          <div className="grid pad10">
           <div className="item-lg-6-1 item-md-6-1 item-sm-12-1 item-xs-12-1 bg-white">
            <div className="pad20 m0">
              <h4>Tabs:</h4>
              <hr className="thin"/>
              

           
          
            </div>
           </div>

           <div className="item-lg-6-7 item-md-6-7 item-sm-12-1 item-xs-12-1 bg-white">
            <div className="pad20 m0">
             <h4>Code sample:</h4> 
             <hr class="thin"/>
             <pre>
              <code>
              &lt;div&nbsp;class&#61;"<span className="text-green">tabs-container-horizontal</span>"&gt;<br/>
              &nbsp;&lt;nav&nbsp;class&#61;"<span className="text-green">tab-menu</span>"&gt;<br/>
              &nbsp;&nbsp;&lt;ul&nbsp;class&#61;"<span className="text-green">flex</span>"&gt;<br/>
              &nbsp;&nbsp;&nbsp;&lt;li&nbsp;class&#61;"<span className="text-green">[flex-item]</span>"&gt;<br/>
              &nbsp;&nbsp;&nbsp;&lt;div&nbsp;class&#61;"<span className="text-green">tab_3</span>"&gt;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;h3&gt;<span className="text-middle-grey">Tab 3</span>&lt;/h3&gt;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;<span className="text-middle-grey">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>&lt;/p&gt;<br/>
              &nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/>
              &nbsp;&nbsp;&lt;/div&gt;<br/>
              &lt;/div&gt;
              </code>
             </pre>
            </div>
           </div>

           <div className="item-lg-6-1 item-md-6-1 item-sm-12-1 item-xs-12-1 bg-white">
            <div className="pad20 m0">
            <h4>Accordions:</h4>
            <hr className="thin"/>
            
            </div>
           </div>

           <div className="item-lg-6-7 item-md-6-7 item-sm-12-1 item-xs-12-1 bg-white">
           <div className="pad20 m0">
             <h4>Code sample:</h4> 
             <hr class="thin"/>
             <pre>
              <code>
              &lt;div&nbsp;class&#61;"<span className="text-green">accordion [info|warning|error|success]</span>"&gt;<br/>
              &nbsp;&lt;div&nbsp;class&#61;"<span className="text-green">accordion-item</span>"&gt;<br/>
              &nbsp;&nbsp;&lt;input&nbsp;type="checkbox" type="checkbox" name="option_1"/&gt;<br/>
              &nbsp;&nbsp;&lt;label&nbsp;for&#61;"option_1"&gt;<span className="text-middle-grey">Collapsibile Group 1</span>&lt;/label&gt;<br/>
              &nbsp;&nbsp;&lt;div&nbsp;class&#61;"<span className="text-green">accordion-content</span>"&gt;<br/>
              &nbsp;&nbsp;&nbsp;&lt;h1&gt;<span className="text-middle-grey">Group 1</span>&lt;/h1&gt;<br/>
              &nbsp;&nbsp;&nbsp;&lt;p&gt;<span className="text-middle-grey">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>&lt;/p&gt;<br/>
              &nbsp;&nbsp;&nbsp;&lt;p&gt;<span className="text-middle-grey">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>&lt;/p&gt;<br/>
              &nbsp;&nbsp;&nbsp;&lt;p&gt;<span className="text-middle-grey">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>&lt;/p&gt;<br/>
              &nbsp;&nbsp;&lt;/div&gt;<br/>
              &nbsp;&lt;/div&gt;<br/>
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