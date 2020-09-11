import React from 'react';

const NewIssue = () => {
    return(
        <div className="d-flex flex-row m-2 justify-content-between">
                <div style={{width:'60%', border:'0.1px solid black', height:'500px'}}>
                  <div className="form-group row">
                      <div className="col-sm-10" style={{ marginLeft:"10%",}}>
                          <input type="text" 
                           className="form-control" 
                           style={{margin:"30px"}}
                           placeholder="Title"/>
                          <textarea 
                          className="form-control" 
                          placeholder="Leave a comment"
                          style={{minHeight:"150px", margin:"30px"}}
                          />
                          <button 
                          className="btn btn-success"
                          style={{margin:" 0 20px 0 30px "}}
                          >
                              Submit new issue
                              </button>
                      </div>
                  </div>
     
                </div>
                
               
                
            </div>
    )
}
export default NewIssue;