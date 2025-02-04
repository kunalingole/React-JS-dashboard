import React from 'react';
import ReactDOM from 'react-dom';

 const Model = props =>{
    return ReactDOM.createPortal(
     <div> 
         <div className="modal"  >
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Modal title</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <p>Modal body text goes here.</p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-primary">Save changes</button>
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
            </div>
    </div>,
        document.querySelector("#model")

     );
 };

  export default Model;

  