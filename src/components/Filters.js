import React from 'react';
import './_filter.css'
import AddIssueBtn from './AddIssueBtn';
import { Link } from "react-router-dom";

const Filters = () => {
  return (
    <div className="filter-container" >
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <button className="btn btn-outline-secondary dropdown-toggle"
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Filters
            </button>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
            <a className="dropdown-item" href="#">Something else here</a>
            <div role="separator" className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">Separated link</a>
          </div>
        </div>
        <input type="text" 
        className="form-control" 
        aria-label="Text input with dropdown button" 
        placeholder="is:issue is:open " 
        />

      </div>
        
        {/* Lable And Milestone but all are in one div like input box and filter*/}

      <div className="input-group">
        <div className="input-group-append" id="button-addon4">
          <button className="btn btn-outline-secondary lable-btn" type="button" style={{height:"38px"}}>
            Lables
      </button>
          <button className="btn btn-outline-secondary milestones-btn" type="button" style={{height:"38px"}}>
            Milestones
      </button>
        </div>
      </div>
      <div>
        <Link to='/newissue'>
        <AddIssueBtn/>
        </Link>
      </div>
    </div>


  );
};

export default Filters;