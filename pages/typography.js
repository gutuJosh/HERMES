import Layout from '../components/Layout.js';


const typography = () => (
    <Layout>
     <div className="grid pad10 m0">
        <div className="item-lg-6-1 item-md-6-1 item-sm-12-1 item-xs-12-1">
         <div className="widget pad20 m0">
          <p className="large">Headings</p>
          <p>Use tags h1 to h6 for get desire heading.</p>
          <h1>h1 Heading</h1>
          <h2>h2 Heading</h2>
          <h3>h3 Heading</h3>
          <h4>h4 Heading</h4>
          <h5>h5 Heading</h5>
          <h6>h6 Heading</h6>
         </div>
        </div>
        <div className="item-lg-6-7 item-md-6-7 item-sm-12-1 item-xs-12-1">
         <div className="widget pad20 m0">
          <p className="large">Heading with Subheadings</p>
          <p>Use tags h1 to h6 for get desire heading.</p>
          <h1>h1 Heading <small>Sub-heading</small></h1>
          <h2>h2 Heading <small>Sub-heading</small></h2>
          <h3>h3 Heading <small>Sub-heading</small></h3>
          <h4>h4 Heading <small>Sub-heading</small></h4>
          <h5>h5 Heading <small>Sub-heading</small></h5>
          <h6>h6 Heading <small>Sub-heading</small></h6>
         </div>
        </div>
     </div>  
     
     <div className="coll-full pad10">
      <div className="pad20 widget m0">
       <div className="grid">
        <div className="item-lg-6-1 item-md-6-1 item-sm-12-1 item-xs-12-1">
         <h4>Paragraph <small>normal</small></h4>
         <hr className="thin"/>
         <p>
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum aspernatur quidem, maiores, 
         ducimus atque odit explicabo expedita dolorum dignissimos illum beatae mollitia recusandae, 
         repellendus id perspiciatis ut, tempora in aperiam.   
         </p>
         <h4>Paragraph <small>large</small></h4>
         <hr className="thin"/>
         <p className="large">
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum aspernatur quidem, maiores, 
         ducimus atque odit explicabo expedita dolorum dignissimos illum beatae mollitia recusandae, 
         repellendus id perspiciatis ut, tempora in aperiam.   
         </p>
         <h4>Paragraph <small>small</small></h4>
         <hr className="thin"/>
         <p className="small">
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum aspernatur quidem, maiores, 
         ducimus atque odit explicabo expedita dolorum dignissimos illum beatae mollitia recusandae, 
         repellendus id perspiciatis ut, tempora in aperiam.   
         </p>
         </div>
       </div>
       </div>
     </div> 
    </Layout>
);
export default typography;