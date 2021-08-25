import React from "react";
import Layout from '../../components/Layout.js';
import BreakPointsTable from '../../components/BreakPointsTable';
export default class flexboxGrid extends React.Component {

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
          <div className="pad20 flex-grid-system mtop50">
          <div className="col-full">
            <p className="large">Grid classes apply to devices with screen widths greater than or equal to the breakpoint sizes, and override grid classes targeted at smaller devices. </p>
          </div>

      
            <div className="col-full mbottom20">
              <BreakPointsTable colPrefix=".flex"/>
            </div>
        

          <div className="flex-grid">
            <div className="flex-lg-12 flex-md-12 flex-sm-12 flex-xs-12 pad20 text-center">.flex-prefix-12</div>
          </div>

          <div className="flex-grid">
            <div className="flex-lg-6 flex-md-6 flex-sm-8 flex-xs-12 pad20 text-center">.flex-prefix-6</div>
            <div className="flex-lg-6 flex-md-6 flex-sm-4 flex-xs-12 pad20 text-center">.flex-prefix-6</div>
          </div>

          <div className="flex-grid">
            <div className="flex-lg-4 flex-md-4 flex-sm-4 flex-xs-4 pad20 text-center">.flex-prefix-4</div>
            <div className="flex-lg-4 flex-md-4 flex-sm-4 flex-xs-4 pad20 text-center">.flex-prefix-4</div>
            <div className="flex-lg-4 flex-md-4 flex-sm-4 flex-xs-4 pad20 text-center">.flex-prefix-4</div>
          </div>

          <div className="flex-grid">
            <div className="flex-lg-3 flex-md-3 flex-sm-3 flex-xs-3 pad20 text-center">.flex-prefix-3</div>
            <div className="flex-lg-3 flex-md-3 flex-sm-3 flex-xs-3 pad20 text-center">.flex-prefix-3</div>
            <div className="flex-lg-3 flex-md-3 flex-sm-3 flex-xs-3 pad20 text-center">.flex-prefix-3</div>
            <div className="flex-lg-3 flex-md-3 flex-sm-3 flex-xs-3 pad20 text-center">.flex-prefix-3</div>
          </div>

          <div className="flex-grid">
            <div className="flex-lg-4 flex-md-4 flex-sm-4 flex-xs-4 pad20 text-center">.flex-prefix-4</div>
            <div className="flex-lg-8 flex-md-8 flex-sm-8 flex-xs-8 pad20 text-center">.flex-prefix-8</div>
          </div>

          

          <div className="col-full mtop20">
            <p className="large">
              Flexbox grid without gap:
            </p>
            <p>Set the "$flex-grid-gap" value to "0px" in style-guide/_numbers.scss</p>
          </div>

          <div className="row">
            <div className="col-one-third text-center pad20 column">.flex-prefix-4</div>
            <div className="col-one-third text-center pad20 column">.flex-prefix-4</div>
            <div className="col-one-third text-center pad20 column">.flex-prefix-4</div>
          </div>

          <div className="row">
            <div className="col-one-third text-center pad20 column">.flex-prefix-4</div>
            <div className="col-two-thirds text-center pad20 column">.flex-prefix-8</div>
          </div>

          <div className="row">
            <div className="col-one-half text-center pad20 column">.flex-prefix-6</div>
            <div className="col-one-half text-center pad20 column">.flex-prefix-6</div>
          </div>

          </div>
        </Layout>


    )}
}