import Layout from '../components/Layout.js';
import Paragraph from '../components/PharagraphSample.js';

const typography = () => (
    <Layout>
     <div className="grid pad10 m0">
        <div className="item-lg-6-1 item-md-6-1 item-sm-12-1 item-xs-12-1 bg-white">
         <div className="pad20 m0">
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
        <div className="item-lg-6-7 item-md-6-7 item-sm-12-1 item-xs-12-1 bg-white">
         <div className="pad20 m0">
          <p className="large">Heading with Subheadings</p>
          <p>Use tag small inside tags h1 to h6 for get desire effect.</p>
          <h1>h1 Heading <small>Sub-heading</small></h1>
          <h2>h2 Heading <small>Sub-heading</small></h2>
          <h3>h3 Heading <small>Sub-heading</small></h3>
          <h4>h4 Heading <small>Sub-heading</small></h4>
          <h5>h5 Heading <small>Sub-heading</small></h5>
          <h6>h6 Heading <small>Sub-heading</small></h6>
         </div>
        </div>
     </div>  
     
       <div className="grid pad10">
        <div className="item-lg-6-1 item-md-6-1 item-sm-12-1 item-xs-12-1 bg-white">
         <div className="pad20 m0">
         <Paragraph type="long" title="Paragraph normal"/>
         <Paragraph type="long" title="Paragraph large" cssClass="large"/>
         <Paragraph type="long" title="Paragraph small" cssClass="small"/>
         </div>
       </div>

       <div className="item-lg-6-7 item-md-6-7 item-sm-12-1 item-xs-12-1 bg-white">
        <div className="pad20 m0">
         <Paragraph type="short" title="Align left" cssClass="text-left"/>
         <Paragraph type="short" title="Align right" cssClass="text-right"/>
         <Paragraph type="short" title="Center" cssClass="text-center"/>
         <Paragraph type="long" title="Justify" cssClass="text-justify"/>
        </div>
       </div>
     </div> 

     <div className="grid pad10">
      <div className="item-lg-6-1 item-md-6-1 item-sm-12-1 item-xs-12-1 bg-white">
       <div className="pad20 m0">
        <h4>Blockquote</h4>
        <hr className="thin"/>
        <blockquote className="quote">
         <p>
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum aspernatur quidem, maiores, 
         ducimus atque odit explicabo expedita dolorum dignissimos illum beatae mollitia recusandae, 
         repellendus id perspiciatis ut, tempora in aperiam. 
         </p>
         <small>-Someone famous in <span className="italic">Source Title</span></small>
        </blockquote>
        <blockquote className="quote reverse">
         <p>
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum aspernatur quidem, maiores, 
         ducimus atque odit explicabo expedita dolorum dignissimos illum beatae mollitia recusandae, 
         repellendus id perspiciatis ut, tempora in aperiam. 
         </p>
         <small>-Someone famous in <span className="italic">Source Title</span></small>
        </blockquote>
       </div>
      </div>
      <div className="item-lg-6-7 item-md-6-7 item-sm-12-1 item-xs-12-1 bg-white">
       <div className="pad20 m0">
        <h4>Code sample:</h4>
        <hr className="thin"/>
         <pre>
          <code>
            &lt;blockquote class="<span className="text-green">quote</span>"&gt;<br/>
            &nbsp;&lt;p&gt;<span className="text-middle-grey">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>&lt;p&gt;<br/>
            &nbsp;&lt;small&gt;<span className="text-middle-grey">Someone famous</span>&lt;/small&gt;<br/>
            &lt;/blockquote&gt;
            <br/>
            <br/>
            &lt;blockquote class="<span className="text-green">quote reverse</span>"&gt;<br/>
            &nbsp;&lt;p&gt;<span className="text-middle-grey">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>&lt;p&gt;<br/>
            &nbsp;&lt;small&gt;<span className="text-middle-grey">Someone famous</span>&lt;/small&gt;<br/>
            &lt;/blockquote&gt;
          </code>
         </pre>
        </div>
      </div>
     </div>

     <div className="grid pad10">
      <div className="item-lg-6-1 item-md-6-1 item-sm-12-1 item-xs-12-1 bg-white">
       <div className="pad20 m0">
        <Paragraph type="long" title="Text info" cssClass="text-info"/>
        <Paragraph type="long" title="Text alert" cssClass="text-alert"/>
        <Paragraph type="long" title="Text success" cssClass="text-success"/>
       </div>
      </div>
      <div className="item-lg-6-7 item-md-6-7 item-sm-12-1 item-xs-12-1 bg-white">
       <div className="pad20 m0">
        <Paragraph type="long" title="Underlined text" cssClass="underlined"/>
        <Paragraph type="long" title="Line through" cssClass="line-through"/>
        <Paragraph type="short" title="Highlighted text" cssClass="txt-highlight"/>
       </div>
      </div>
    </div>

    </Layout>
);
export default typography;