import React from 'react';

const NewIssue = (props) => {
    return(
        <div className="d-flex flex-row m-2 justify-content-between">
                <div style={{width:'60%', border:'0.1px solid black', height:'600px'}}>
                  <div className="form-group row">
                      <div className="col-sm-10" style={{ marginLeft:"10%",}}>

                          {/* Title Box provided here*/}

                          <label >Title</label> 
                          <input type="text" 
                           className="form-control" 
                           style={{margin:"0 0  30px 30px"}}
                           placeholder="Title"/>

                           {/* Text area provided here*/}

                           <label >Description</label> 
                         <textarea 
                          className="form-control" 
                          placeholder="Leave a comment"
                          style={{minHeight:"150px", margin:"0 0 20px 30px"}}
                          />

                          {/* Labels are provided here*/}

                        
                            <label htmlFor="exampleFormControlInput1">Labels</label>
                            <input
                                style={{margin:" 0 20px 0 30px "}}
                                type="text"
                                className="form-control"
                                id="exampleFormControlInput1"
                                placeholder="Add new labels & select existing one"
                                
                                // onKeyPress={props.add}
                            />
                            <select
                                style={{margin:" 0 20px 0 30px "}}
                                multiple={true}
                                className="form-control"
                                id="exampleFormControlSelect2"
                            >
                                <option>Bug</option>
                                <option>Documentation</option>
                                <option>Invalid</option>
                                <option>New issue</option>
                                <option>Question</option>
                                
                            </select>
                            <p>Ps: Hold down the Ctrl (windows) or Command (Mac) button to select multiple options.</p>

                           
                           
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