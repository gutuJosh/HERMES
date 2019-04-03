import Layout from '../components/Layout.js';
import BreakPointsTable from '../components/BreakPointsTable';

const modernGrid = () => (
    <Layout>
        <div className="grid pad20">
          <div className="item-full">
           <p className="large">
           CSS Grid Layout is the most powerful layout system available in CSS. 
           The actual system handle only columns. The rows management are up to you. 
           You work with this grid layout by applying CSS classes both to a parent element (<span className="italic">.grid</span>) which becomes the Grid Container 
           and to children elements (<span className="italic">.item-prefix-width-position</span>)* which become Grid Items.
           </p>
           <BreakPointsTable colPrefix=".item"/>
           <p>
               *"Width" parameters stands for grid item width and can be any number between 1 and 12. The "position" parameters specify the grid item position 
               inside an element with ".grid" class, which by default has 12 columns and a total width of 100%. The value of "position" parameters 
               is a range of 1 to (13 - itemWidth). This means that in a grid system with 12 columns an item of width 6 (.item-lg-6) can have a position range from 1 to 7. 
               In this case, any number grater than 7 will force the item to get out of the row and will end with a broken layout.
            </p> 
          </div>
        </div>

        <div className="grid pad-x-20">
         <div className="item-lg-12-1 item-md-12-1 item-sm-12-1 text-center pad20 column">.item-prefix-12-1</div>
         <div className="item-lg-6-1 item-md-6-1 item-sm-6-1 item-xs-6-1 text-center pad20 column">.item-prefix-6-1</div>
         <div className="item-lg-6-7 item-md-6-7 item-sm-6-7 item-xs-6-7 text-center pad20 column">.item-prefix-6-7</div>
         <div className="item-lg-4-1 item-md-4-1 item-sm-4-1 item-xs-4-1 text-center pad20 column">.item-prefix-4-1</div>
         <div className="item-lg-4-5 item-md-4-5 item-sm-4-5 item-xs-4-5 text-center pad20 column">.item-prefix-4-5</div>
         <div className="item-lg-4-9 item-md-4-9 item-sm-4-9 item-xs-4-9 text-center pad20 column">.item-prefix-4-9</div>
         <div className="item-lg-3-1 item-md-6-1 item-sm-3-1 item-sm-12-1 text-center pad20 column">.item-lg-3-1 .item-md-6-1<br/>.item-sm-3-1 .item-sm-12-1</div>
         <div className="item-lg-3-4 item-md-6-7 item-sm-3-4 item-sm-12-1 text-center pad20 column">.item-lg-3-4 .item-md-6-7<br/>.item-sm-3-4 .item-sm-12-1</div>
         <div className="item-lg-3-7 item-md-8-1 item-sm-3-7 item-sm-12-1 text-center pad20 column">.item-lg-3-7 .item-md-8-1<br/>.item-sm-3-7 .item-sm-12-1</div>
         <div className="item-lg-3-10 item-md-4-9 item-sm-3-10 item-sm-12-1 text-center pad20 column">.item-lg-3-10 .item-md-4-9<br/>.item-sm-3-10 .item-sm-12-1</div>
         <div className="item-lg-2-1 item-md-2-1 item-sm-2-1 item-xs-6-1 text-center pad20 column">.item-prefix-2-1</div>
         <div className="item-lg-1-3 item-md-1-3 item-sm-1-3 item-xs-6-7 text-center pad20 column">.item-prefix-1-3</div>
         <div className="item-lg-5-4 item-md-5-4 item-sm-5-4 item-xs-12-1 text-center pad20 column">.item-prefix-5-5</div>
         <div className="item-lg-2-9 item-md-2-9 item-sm-2-9 item-xs-6-1 text-center pad20 column">.item-prefix-2-9</div>
         <div className="item-lg-2-11 item-md-2-11 item-sm-2-11 item-xs-6-7 text-center pad20 column">.item-prefix-2-11</div>
        </div>

        <div className="grid pad20">
          <div className="item-full">
           <p className="large m0">
            Quick layout: 
           </p>
           <p>Set the parent element class to <span className="italic">.grid</span>, then set the children class attribute as show below:</p>
          </div>
        </div>

        <div className="grid pad-x-20">
          <div className="item-half-left text-center pad20 column">.item-half-left</div>
          <div className="item-half-right text-center pad20 column">.item-half-right</div>
          <div className="item-one-third-left text-center pad20 column">.item-one-third-left</div>
          <div className="item-one-third-middle text-center pad20 column">.item-one-third-middle</div>
          <div className="item-one-third-right text-center pad20 column">.item-one-third-right</div>
          <div className="item-two-thirds-left text-center pad20 column">.item-two-thirds-left</div>
          <div className="item-one-third-right text-center pad20 column">.item-one-third-right</div>
          <div className="item-one-third-left text-center pad20 column">.item-one-third-left</div>
          <div className="item-two-thirds-right text-center pad20 column">.item-two-thirds-right</div>
          <div className="item-one-quarter-1 text-center pad20 column">.item-one-quarter-1</div>
          <div className="item-one-quarter-2 text-center pad20 column">.item-one-quarter-2</div>
          <div className="item-one-quarter-3 text-center pad20 column">.item-one-quarter-3</div>
          <div className="item-one-quarter-4 text-center pad20 column">.item-one-quarter-4</div>
          <div className="item-full text-center pad20 column">.item-full</div>
        </div>

        <div className="grid pad20">
          <div className="item-full">
           <p>To customize the space between columns modify the "$grid-column-gap" and "$grid-row-gap" values, in numbers.scss</p>
          </div>
        </div>

    </Layout>
)

export default modernGrid