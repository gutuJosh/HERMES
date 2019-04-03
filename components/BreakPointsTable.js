          
const BreakPointsTable = (props) => (
          <table className="table table-bordered table-hover">
            <thead>
             <tr>
              <th>Screen width:</th>
              <th> &gt;= 1201px</th>
              <th> &gt;= 960px</th>
              <th> &gt;= 768px</th>
              <th> &gt;= 576px</th>
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