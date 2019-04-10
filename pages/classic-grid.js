import Layout from '../components/Layout.js';
import BreakPointsTable from '../components/BreakPointsTable';


export default class classicGrid  extends React.Component {

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
            <div className="pad20 old-grid">
            <div className="col-full">
                <p className="large">
                    The Grid system follows the mobile-first approach and accommodates up to 12 grid columns.
                    Pass the correct prefix, as show in table below, in order to work across multiple devices.
                </p>
            </div>

        
                <div className="col-full">
                <BreakPointsTable colPrefix=".col"/>
                </div>
            

            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pad20 text-center column">.col-prefix-12</div>
            </div>

            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 pad20 text-center column">.col-prefix-6</div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 pad20 text-center column">.col-prefix-6</div>
            </div>

            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 pad20 text-center column">.col-prefix-4</div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 pad20 text-center column">.col-prefix-4</div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 pad20 text-center column">.col-prefix-4</div>
            </div>

            <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 pad20 text-center column">.col-prefix-3</div>
                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 pad20 text-center column">.col-prefix-3</div>
                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 pad20 text-center column">.col-prefix-3</div>
                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 pad20 text-center column">.col-prefix-3</div>
            </div>

            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 pad20 text-center column">.col-prefix-4</div>
                <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8 pad20 text-center column">.col-prefix-8</div>
            </div>

            <div className="row">
                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 pad20 text-center column">.col-prefix-2</div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 offset-4 pad20 text-center column">.col-prefix-6  .offset-4</div>
            </div>

            <div className="col-full mtop20">
                <p className="large">
                    Quick columns:
                </p>
            </div>

            <div className="row">
                <div className="col-one-third text-center pad20 column">.col-one-third</div>
                <div className="col-one-third text-center pad20 column">.col-one-third</div>
                <div className="col-one-third text-center pad20 column">.col-one-third</div>
            </div>

            <div className="row">
                <div className="col-one-third text-center pad20 column">.col-one-third</div>
                <div className="col-two-thirds text-center pad20 column">.col-two-thirds</div>
            </div>

            <div className="row">
                <div className="col-one-half text-center pad20 column">.col-one-half</div>
                <div className="col-one-half text-center pad20 column">.col-one-half</div>
            </div>

            </div>
            </Layout>
    )}
};