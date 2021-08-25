          
const BreakPointsTable = (props) => (
          <table className="table table-bordered table-hover mtop50">
            <thead>
             <tr>
              <th>Screen width:</th>
              <th> &gt;= 1200px</th>
              <th> &gt;= 992px</th>
              <th> &gt;= 768px</th>
              <th> &lt;= 767px</th>
             </tr>
            </thead>
            <tbody>
             <tr>
              <td>Prefix:</td>
              <td>{props.colPrefix}-<strong>lg</strong>{props.colPostition}</td>
              <td>{props.colPrefix}-<strong>md</strong>{props.colPostition}</td>
              <td>{props.colPrefix}-<strong>sm</strong>{props.colPostition}</td>
              <td>{props.colPrefix}-<strong>xs</strong>{props.colPostition}</td>
             </tr>
            </tbody>
         </table>
);

export default BreakPointsTable;