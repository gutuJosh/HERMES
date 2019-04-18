import Layout from '../components/Layout.js';
import DynamicTabs from '../components/ui/DynamicTabs';
import TabSample from '../components/TabSample';

export default class tabs extends React.Component {

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
            <p className="large">Dynamic tab and accordion functionality to transition through panes of local content, even via dropdown menus.</p>
          </div>
          <div className="grid pad10">
           <div className="item-lg-6-1 item-md-6-1 item-sm-12-1 item-xs-12-1 bg-white">
            <div className="pad20 m0">
              <h4>Tabs</h4>
              <hr className="thin"/>
              <DynamicTabs 
                flexType="full"
                name="programms"
                tabs={
                  [
                    {'id':'partnerZone', 'title':'Partner'},
                    {'id':'nonprofitZone', 'title':'Ngo'},
                    {'id':'promoterZone', 'title':'Promoter'},
                  ]
                }
                activeTab="partnerZone"
             >
             <TabSample id="partnerZone" key="partnerZone" title="Partner program"/>
             <TabSample id="nonprofitZone" key="nonprofitZone" title="Non profit program"/>
             <TabSample id="promoterZone" key="promoterZone" title="Promoter program"/>
            </DynamicTabs>

            
          
            </div>
           </div>

           <div className="item-lg-6-7 item-md-6-7 item-sm-12-1 item-xs-12-1 bg-white">
           </div>

          </div>
        </Layout>
      )
    };
}