import React from "react";
import Layout from '../components/Layout.js'

export default class index extends React.Component {

    constructor(props) {
     super(props);
     this.state = {
        pageInfo:{
            'title': 'Css Pattern library',
            'page':'index',
            'subcategory':''
        },
     }
    }

    render(){
        return(
        
           <Layout pageInfo={this.state.pageInfo}>
            <div className="col-full">
             <div className="grid pad10 mtop20">
              <div className="item-lg-6-1 item-md-6-1 item-sm-12-1 item-xs-12-1">
               <div className="pad20">
                <h1 className="mtop50">Css pattern library<br/>
                <small>code standards documents and content style guides</small></h1>
                <p className="large mtop20">
                    This is a css pattern library which <a href="https://www.linkedin.com/in/cosmin-h-004500129/" target="_blank" rel="nofollow">I developed</a> to help me
                    build the UI of an email client application called Hermes. I decided to share it in order to showcase my work and because I belive it could be useful for others 
                    front end developers as well, to create any new project.
                </p>
                <p className="large">
                 The library is dveveloped based on our project needs, but please feel free to use, change and add any new feature inside of it. 
                 If you do so I love to here from you and I'll wait for your feedback maybe make a pull request or something like this. 
                </p>
                <p className="large">
                 How to use it? <a>Download</a> the library .zip file, unpack the archive into your project scss directory, import "config.scss" into your main scss files
                 and start coding following the documentation.
                </p>
                <p>PS: One important thing is that I do not support if there is a bug or other types of errors.</p>
                <div className="mtop20">
                 <a className="btn btn-info mtop20" href="/download" title="Click to download">
                  <span>Download library</span>
                 </a>
                </div>
               </div>
              </div>
              <div className="item-lg-6-7 item-md-6-7 item-sm-12-1 item-xs-12-1">
               <div className="pad20 text-center">
                <img src="/static/images/good-design.png" className="library-banner" alt="Building a website" />
               </div>
              </div>

              <div className="item-lg-8-3 item-md-8-3 item-sm-12-1 item-xs-12-1">

              </div>

             </div>
            </div>
          </Layout>
       
        )
    }
}