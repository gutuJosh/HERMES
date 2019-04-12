import PropTypes from 'prop-types';

const BasicUpload = (props) => (

     <div className={`form-group ${props.containerClass}`}>
      <label>Upload file</label>
      <div className="basic-upload-input">
       <label className="placeholder" htmlFor={!props.id ? props.name : props.id}>
        {props.fileName ?
        <span className="block">
        {props.fileName}
        </span>
        :
        <span className="block">
        {props.placeholder}
        </span>
        }
       </label>

      <input 
      id={props.id}
      type="file" 
      name={props.name} 
      defaultValue={props.defaultValue} 
      className="input-file"
      onFocus={props.focus} 
      onBlur={props.blur}
      onChange={props.change}
      />
     <span className="text-error small mtop10">{props.errorMessage}</span>
     <span className="text-warning small mtop10">{props.warningMessage}</span>
     <span className="text-success small mtop10">{props.successMessage}</span>
     {props.default &&
      <span className="text-default small mtop10" onClick={props.deleteFile}>
       {props.default}
      </span>
     }
     <span className="thumb-icon">
      <i className="fas fa-file-upload"></i>
     </span>
     </div>

    </div>
);


BasicUpload.protoTypes = {
    containerClass: PropTypes.string,
    id: PropTypes.string,
    fileName: PropTypes.string,
    placeholder: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    defaultValue: PropTypes.string,
    focus: PropTypes.func,
    blur: PropTypes.func,
    deleteFile: PropTypes.func,
    errorMessage: PropTypes.string,
    warningMessage: PropTypes.string,
    successMessage: PropTypes.string,
    default: PropTypes.oneOfType([ 
        PropTypes.string, 
        PropTypes.bool 
      ]) 
}

export default BasicUpload;