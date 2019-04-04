          
const PharagraphSample = (props) => (
         <>
         <h4>{props.title} <small>&lt;p{props.cssClass ? ` class="${props.cssClass}"` : ''}&gt;&lt;/p&gt;</small></h4>
         <hr className="thin"/>
         {props.type !== 'short' ?
         <p className={props.cssClass}>
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum aspernatur quidem, maiores, 
         ducimus atque odit explicabo expedita dolorum dignissimos illum beatae mollitia recusandae, 
         repellendus id perspiciatis ut, tempora in aperiam.   
         </p>
         :
         <p className={props.cssClass}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
         }
         </>
);

export default PharagraphSample;