import React from "react";
import Layout from '../components/Layout.js';
import HamburgerMenuIcon from '../components/ui/HamburgerMenuIcon.js';
export default class miscellaneous extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pageInfo:'',
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
            <div className="col-full pad20 mtop50">
              <p className="large">
               Miscellaneous
              </p>
            </div>
            <div className="grid pad10">

             <div className="item-lg-6-1 item-md-6-1 item-sm-12-1 item-xs-12-1 bg-white">
              <div className="pad20 m0">
               <h4>Badges &amp; tips</h4>
               <hr className="thin"/>
               <button className="btn-dark mtop10 btn-small badge warning" data-badge="3">
                <i className="far fa-envelope"></i> Emails
               </button>&nbsp;&nbsp;
               <button className="btn-default mtop10 btn-small badge info" data-badge="320">
                <i className="fab fa-twitter"></i> Followers
               </button>&nbsp;&nbsp;
               <button className="btn-success mtop10 btn-small badge" data-badge="1">
                <i className="fas fa-shopping-bag"></i> Shopping bag
               </button>&nbsp;&nbsp;
               <button className="btn-default mtop10 btn-small badge alert" data-badge="20">
                <i className="fab fa-github"></i> Forks
               </button>&nbsp;&nbsp;
               <br/><br/>
               <button className="btn-alert mtop10 tip-top alert" data-tip="If you need help just call us.">
                <i className="fas fa-question"></i> Help .tip-top
               </button>&nbsp;&nbsp;
               <button className="btn-warning mtop10 tip-bottom warning" data-tip="If you need help just call us.">
                <i className="fas fa-question"></i> Help .tip-bottom
               </button>&nbsp;&nbsp;
               <button className="btn-default mtop10 tip-left" data-tip="If you need help just call us.">
                <i className="fas fa-question"></i> Help .tip-left
               </button>&nbsp;&nbsp;
               <button className="btn-info mtop10 tip-right info" data-tip="If you need help just call us.">
                <i className="fas fa-question"></i> Help .tip-right
               </button>&nbsp;&nbsp;
               <br/><br/>
               <p className="large">
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum aspernatur quidem, maiores, 
         ducimus atque odit <span className="tip strong underlined" data-tip="Dolorum dignissimos illum beatae mollitia recusandae, repellendus id perspiciatis ut, tempora in aperiam">explicabo expedita</span> dolorum dignissimos illum beatae mollitia recusandae, 
         repellendus id perspiciatis ut, tempora in aperiam.   
               </p>
              </div>
             </div>

             <div className="item-lg-6-7 item-md-6-7 item-sm-12-1 item-xs-12-1 bg-white">
             <div className="pad20 m0">
              <h4>Code sample:</h4>
              <hr className="thin"/>
               <pre>
                <code>
                  &lt;button&nbsp;class&#61;"<span className="text-green">badge [info|warning|alert|success]</span>"&gt;<br/>
                  &nbsp;&lt;span&gt;<span className="text-middle-grey">Lorem ipsum</span>&lt;/span&gt;<br/>
                  &lt;/button&gt;
                 </code>
               </pre>

               <pre>
                <code>
                  &lt;button&nbsp;class&#61;"<span className="text-green">[tip|tip-top|tip-right|tip-bottom|tip-left] [info|warning|alert|success]</span>" data-tip="<span className="text-green">Tips message here</span>"&gt;<br/>
                  &nbsp;&lt;span&gt;<span className="text-middle-grey">Lorem ipsum</span>&lt;/span&gt;<br/>
                  &lt;/button&gt;
                 </code>
               </pre>

              </div>
             </div>
            </div>

            <div className="grid pad10">
              <div className="item-lg-6-1 item-md-6-1 item-sm-12-1 item-xs-12-1 bg-white">
               <div className="pad20 m0">
                <h4>Hamburger menu icon &amp; dropwdown menu</h4>
                <hr className="thin"/>
                <nav className="flex wrap sample-menu">
                  <HamburgerMenuIcon type="info" action={false}/>
                  <ul className="flex menu-items">
                   <li className="menu-items"><a className="pad-x-20">Home</a></li>
                   <li className="menu-items">
                    <a className="pad-x-20">Services <i className="fas fa-sort-down"></i></a>
                     <div className="dropdown-box">
                      <div className="panel">
                       <ul className="main">
                        <li>
                          <a className="has-options">Web Design</a>
                          <ul>
                            <li className="header">
                             <span>Back</span>
                            </li>
                            <li>Psd to Html</li>
                            <li>Css</li>
                            <li>Javascript</li>
                            <li>Php</li>
                          </ul>
                        </li>
                        <li>System architecture</li>
                        <li>Software development</li>
                       </ul>
                      </div>
                     </div>
                   </li>
                   <li className="menu-items">
                   <a className="pad-x-20">Contact</a>
                    </li>
                  </ul>
                </nav>
               </div>
             </div>

             <div className="item-lg-6-7 item-md-6-7 item-sm-12-1 item-xs-12-1 bg-white">
             <div className="pad20 m0">
              <h4>Code sample:</h4>
              <hr className="thin"/>
               <pre>
                <code>
                  &lt;button&nbsp;class&#61;"<span className="text-green">badge [info|warning|alert|success]</span>"&gt;<br/>
                  &nbsp;&lt;span&gt;<span className="text-middle-grey">Lorem ipsum</span>&lt;/span&gt;<br/>
                  &lt;/button&gt;
                 </code>
               </pre>
              </div>
             </div>
            </div>

        </Layout>
        )
    }
}