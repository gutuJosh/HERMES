import Layout from '../components/Layout.js';

export default class lists extends React.Component {

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
            <p className="large">The following examples show how different components can be composed to produce lists.</p>
          </div>

        
          <div className="grid pad10">
            <div className="item-lg-6-1 item-md-6-1 item-sm-12-1 item-xs-12-1 bg-white">
            <div className="pad20 m0">
              <h4>Basic List</h4>
               <hr className="thin"/>
               <ul className="list-group mtop20">
                <li>
                  <span className="f-right">48%</span>
                  <i className="fab fa-chrome"></i> Chrome
                </li>
                <li>
                  <span className="f-right">28%</span>
                  <i className="fab fa-firefox"></i> Firefox
                </li>
                <li>
                  <span className="f-right">20%</span>
                  <i className="fab fa-safari"></i> Safari
                </li>
                <li>
                  <span className="f-right">10%</span>
                  <i className="fab fa-edge"></i> Edge
                </li>
                <li className="disabled">
                  <span className="f-right">4%</span>
                  <i className="fab fa-internet-explorer"></i> Internet Explorer
                </li>
               </ul>
               
            </div>
          </div>

          <div className="item-lg-6-7 item-md-6-7 item-sm-12-1 item-xs-12-1 bg-white">
            <div className="pad20 m0">
              <h4>Code sample:</h4>
              <hr className="thin"/>
              <pre>
                <code>
                  &lt;ul class="<span className="text-green">list-group</span>"&gt;<br/>
                  &nbsp;&lt;li&gt;<span className="text-middle-grey">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>&lt;li&gt;<br/>
                  &nbsp;&lt;li&gt;<span className="text-middle-grey">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>&lt;li&gt;<br/>
                  &nbsp;&lt;li&gt;<span className="text-middle-grey">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>&lt;li&gt;<br/>
                  &nbsp;&lt;li&gt;<span className="text-middle-grey">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>&lt;li&gt;<br/>
                  &nbsp;&lt;li class="<span className="text-green">disabled</span>"&gt;<span className="text-middle-grey">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>&lt;li&gt;<br/>
                  &lt;/ul&gt;
                </code>
              </pre>
            </div>
          </div>
        </div> 


        <div className="grid pad10">
            <div className="item-lg-6-1 item-md-6-1 item-sm-12-1 item-xs-12-1 bg-white">
            <div className="pad20 m0">
               <h4>List group divided</h4>
               <hr className="thin"/>
               <ul className="list-group-divided mtop20">
                <li>
                  <span className="f-right">48%</span>
                  <i className="fab fa-chrome"></i> Chrome
                </li>
                <li>
                  <span className="f-right">28%</span>
                  <i className="fab fa-firefox"></i> Firefox
                </li>
                <li>
                  <span className="f-right">20%</span>
                  <i className="fab fa-safari"></i> Safari
                </li>
                <li>
                  <span className="f-right">10%</span>
                  <i className="fab fa-edge"></i> Edge
                </li>
                <li className="disabled">
                  <span className="f-right">4%</span>
                  <i className="fab fa-internet-explorer"></i> Internet Explorer
                </li>
               </ul>
            </div>
          </div>

          <div className="item-lg-6-7 item-md-6-7 item-sm-12-1 item-xs-12-1 bg-white">
            <div className="pad20 m0">
             <h4>Code sample:</h4>
             <hr className="thin"/>
             <pre>
                <code>
                  &lt;ul class="<span className="text-green">list-group-divided</span>"&gt;<br/>
                  &nbsp;&lt;li&gt;<span className="text-middle-grey">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>&lt;li&gt;<br/>
                  &nbsp;&lt;li&gt;<span className="text-middle-grey">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>&lt;li&gt;<br/>
                  &nbsp;&lt;li&gt;<span className="text-middle-grey">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>&lt;li&gt;<br/>
                  &nbsp;&lt;li&gt;<span className="text-middle-grey">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>&lt;li&gt;<br/>
                  &nbsp;&lt;li class="<span className="text-green">disabled</span>"&gt;<span className="text-middle-grey">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>&lt;li&gt;<br/>
                  &lt;/ul&gt;
                </code>
              </pre>
            </div>
          </div>
        </div> 
     
        <div className="grid pad10">
        <div className="item-lg-6-1 item-md-6-1 item-sm-12-1 item-xs-12-1 bg-white">
          <div className="pad20 m0">
          <h4>Media</h4>
               <hr className="thin"/>
               <ul className="mtop20">
                <li className="media">
                 <div className="media-left">
                  <i className="fas fa-image fa-3x"></i>
                </div>
                 <div className="media-body">
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum aspernatur quidem, maiores, 
         ducimus atque odit explicabo expedita dolorum dignissimos illum beatae mollitia recusandae, 
         repellendus id perspiciatis ut, tempora in aperiam. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                 </div>
                </li>
                <li className="media mtop100">
                 <div className="media-left">
                  <i className="fas fa-image fa-3x"></i>
                </div>
                 <div className="media-body">
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum aspernatur quidem, maiores, 
         ducimus atque odit explicabo expedita dolorum dignissimos illum beatae mollitia recusandae, 
         repellendus id perspiciatis ut, tempora in aperiam. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                 </div>
                  <div className="media-right">
                   <button className="btn btn-info btn-large"><span className="text-white inline-block pad-x-10">Follow</span></button>
                 </div>
                </li>

              </ul>
          </div>
         </div>

         <div className="item-lg-6-7 item-md-6-7 item-sm-12-1 item-xs-12-1 bg-white">
            <div className="pad20 m0">
            <h4>Code sample:</h4>
            <hr className="thin"/>
            <pre>
                <code>
                  &lt;div class="<span className="text-green">media</span>"&gt;<br/>
                  &nbsp;&lt;div class="<span className="text-green">media-left</span>"&gt;<br/>
                  &nbsp;&nbsp;<span className="text-middle-grey">&lt;img src="thumbnail.jpg" alt="image" /&gt;</span><br/>
                  &nbsp;&lt;/div&gt;<br/>
                  &nbsp;&lt;div class="<span className="text-green">media-body</span>"&gt;<br/>
                  &nbsp;&nbsp;<span className="text-middle-grey">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span><br/>
                  &nbsp;&lt;/div&gt;<br/>
                  &lt;/div&gt;
                </code>
              </pre>
              <pre>
                <code>
                  &lt;div class="<span className="text-green">media</span>"&gt;<br/>
                  &nbsp;&lt;div class="<span className="text-green">media-left</span>"&gt;<br/>
                  &nbsp;&nbsp;<span className="text-middle-grey">&lt;img src="thumbnail.jpg" alt="image" /&gt;</span><br/>
                  &nbsp;&lt;/div&gt;<br/>
                  &nbsp;&lt;div class="<span className="text-green">media-body</span>"&gt;<br/>
                  &nbsp;&nbsp;<span className="text-middle-grey">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span><br/>
                  &nbsp;&lt;/div&gt;<br/>
                  &nbsp;&lt;div class="<span className="text-green">media-right</span>"&gt;<br/>
                  &nbsp;&nbsp;<span className="text-middle-grey">&lt;button&gt;Follow&lt;/&gt;</span><br/>
                  &nbsp;&lt;/div&gt;<br/>
                  &lt;/div&gt;
                </code>
              </pre>
            </div>
          </div>

        </div>

        </Layout>
  )};
};