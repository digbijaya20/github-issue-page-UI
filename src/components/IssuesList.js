import React from 'react';
import './_issueList.css'

const IssuesList = (props) => {
  return (

    <div className="guest-card">
      <div className="card-head">
      <div className="options" >
      <select name="status"
									className="status-dropdown-menu">
									<option value="0" >
										Close
									</option>
									<option
										value="1">
										Open
									</option>
								</select>
        </div>
        <div>
          <button>
            <i className="fas fa-user-edit"></i>
          </button>
          <button>
            <i className="fas fa-trash-alt remove"></i>
          </button>
        </div>
      </div>
      <div className="card-body">
        <h4>New Issue</h4>
        <span className='badge red'>Issue</span>
        <div className="contact">
          
          <p>My new isuue is open for alwakyaybghh  hhb </p>
        </div>
      </div>
    </div>
  );
};

export default IssuesList;

  /*
      Remember to give following classnames
      To <ul>-> list-items
      To <li>-> items
      
      */
    /* <div className="all-issue-container">
        <div className="issue-body">
          <div className="issue-exclamation">
            <i className="far fa-times-circle"></i>
          </div>
          <div className="issue-data">
            Issue 1
           </div>
          <div className="issue-userName-dropdown-wrapper">
            <div className="issue-description">Yeah its a good issue</div>
            <select name="status" className="status-dropdown-menu" id={"1"}>
              <option>Open</option>
              <option>Close</option>
            </select>
          </div>
          <div className="file-time">23233-442-2626</div>
          <abbr title="detele"><i class="fas fa-trash-alt file-delete-icon"></i></abbr>
          <abbr title="edit"><i class="fas fa-edit file-delete-icon edit-icon"></i></abbr>
        </div>

        <div></div>
      </div>
    </div>*/