import React, { Component } from "react";

export default class viewUser extends Component {
  render() {
    return (
      <div>
        <section className="content-header">
          <div>
            {/* Add Modal HTML */}
            <div id="addEmployeeModal">
              <div className="modal-dialog">
                <div className="modal-content">
                  <form>
                    <div className="modal-header">
                      <h4 className="modal-title">View Employee</h4>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-hidden="true"
                      >
                        ×
                      </button>
                    </div>
                    <div className="modal-body">
                      <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" required />
                      </div>
                      <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" required />
                      </div>
                      <div className="form-group">
                        <label>Address</label>
                        <textarea
                          className="form-control"
                          required
                          defaultValue={""}
                        />
                      </div>
                      <div className="form-group">
                        <label>Phone</label>
                        <input type="text" className="form-control" required />
                      </div>
                    </div>
                    <div className="modal-footer">
                      <a href="/list-employee">
                        <input
                          type="button"
                          className="btn btn-default"
                          defaultValue="Cancel"
                        />
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
