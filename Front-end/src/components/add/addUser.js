import React, { Component } from "react";

import { connect } from "react-redux";

import { Link } from "react-router-dom";

import { addUserAction } from "../../redux/actions/admin";

import "./style/add.css";

class addUser extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      email: "",
      password: "",
      role: "",
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      userName: this.state.userName,
      email: this.state.email,
      password: this.state.password,
      role: this.state.role,
    };

    this.props.addUser(newUser, this.props.token);
    this.props.history.push("/list-employee");
    console.log(newUser);
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <section className="content-header">
            <div>
              {/* Add Modal HTML */}
              <div id="addEmployeeModal">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h4 className="modal-title">Add Employee</h4>
                      <Link to="/list-employee">
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-hidden="true"
                        >
                          ×
                        </button>
                      </Link>
                    </div>
                    <div className="modal-body">
                      <div className="form-group">
                        <label>Name</label>
                        <input
                          className="form-control"
                          onChange={this.onChange}
                          value={this.state.userName}
                          id="userName"
                          type="text"
                        />
                      </div>
                      <div className="form-group">
                        <label>Email</label>
                        <input
                          className="form-control"
                          onChange={this.onChange}
                          value={this.state.email}
                          id="email"
                          type="email"
                        />
                      </div>
                      <div className="form-group">
                        <label>Role</label>
                        <input
                          className="form-control"
                          onChange={this.onChange}
                          value={this.state.role}
                          id="role"
                          type="text"
                        />
                      </div>
                      <div className="form-group">
                        <label>Password</label>
                        <input
                          className="form-control"
                          onChange={this.onChange}
                          value={this.state.password}
                          id="password"
                          type="password"
                        />
                      </div>
                    </div>
                    <div className="modal-footer">
                      <Link to="/list-employee">
                        <input
                          type="button"
                          className="btn btn-default"
                          data-dismiss="modal"
                          defaultValue="Cancel"
                        />
                      </Link>
                      <input
                        type="submit"
                        className="btn btn-success"
                        defaultValue="Add"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </form>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    data: state.data,
    token: state.rootReducer.token,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (newUser, token) => {
      dispatch(addUserAction(newUser, token));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(addUser);
