import Layout from '../components/Layout.js';
import HorizontalTabs from '../components/ui/HorizontalTabs';
import VerticalTabs from '../components/ui/VerticalTabs';
import TabSample from '../components/TabSample';
import Accordion from '../components/ui/Accordion';

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
              <HorizontalTabs 
                flexType="full"
                name="programms"
                tabs={
                  [
                    {'id':'partnerZone', 'title':'Tab 1'},
                    {'id':'nonprofitZone', 'title':'Tab 2'},
                    {'id':'promoterZone', 'title':'Tab 3'},
                  ]
                }
                activeTab="partnerZone"
             >
             <TabSample id="partnerZone" key="partnerZone" title="Tab 1"/>
             <TabSample id="nonprofitZone" key="nonprofitZone" title="Tab 2"/>
             <TabSample id="promoterZone" key="promoterZone" title="Tab 3"/>
            </HorizontalTabs>

            <VerticalTabs
             flexType="flex-left mtop20"
             name="departments"
             tabs={
              [
                {'id':'partner-zone', 'title':'Tab 1'},
                {'id':'nonprofit-zone', 'title':'Tab 2'},
                {'id':'promoter-zone', 'title':'Tab 3'},
              ]
            }
            activeTab="partner-zone"
            >
             <TabSample id="partner-zone" key="partner-zone" title="Tab 1"/>
             <TabSample id="nonprofit-zone" key="nonprofit-zone" title="Tab 2"/>
             <TabSample id="promoter-zone" key="promoter-zone" title="Tab 3"/>
            </VerticalTabs>
          
            </div>
           </div>

           <div className="item-lg-6-7 item-md-6-7 item-sm-12-1 item-xs-12-1 bg-white">
           </div>

           <div className="item-lg-6-1 item-md-6-1 item-sm-12-1 item-xs-12-1 bg-white">
            <Accordion
             type="info"
             name="options"
             labels={[
              "Collapsibile Group 1",
              "Collapsibile Group 2",
              "Collapsibile Group 3"
              ]}
              >
             <TabSample id="group-1" key="group-1" title="Group 1" className="pad20"/>
             <TabSample id="group-2" key="group-2" title="Group 2" className="pad20"/>
             <TabSample id="group-3" key="group-3" title="Group 3" className="pad20"/>
            </Accordion>
           </div>

           <div className="item-lg-6-7 item-md-6-7 item-sm-12-1 item-xs-12-1 bg-white">
           </div>

          </div>
        </Layout>
      )
    };
}