import React, { Component } from "react";
import { connect } from "react-redux";

import { updateUser } from "../../redux/actions/admin";

class EditUser extends Component {
  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const id = this.props.user._id;
    const userName = this.state.userName
      ? this.state.userName
      : this.props.user.userName;
    const password = this.state.password
      ? this.state.password
      : this.props.user.password;
    const role = this.state.role ? this.state.role : this.props.user.role;
    const email = this.state.email ? this.state.email : this.props.user.email;

    const user = {
      _id: id,
      userName: userName,
      password: password,
      role: role,
      email: email,
    };
    this.props.updateUser(user);
  };
  render() {
    const user = this.props.user;
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
                      <h4 className="modal-title">Edit {user.userName}</h4>
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
                        <input
                          className="form-control"
                          defaultValue={user.userName}
                          onChange={this.onChange}
                          //  value={this.state.userName}
                          id="userName"
                          type="text"
                        />
                      </div>
                      <div className="form-group">
                        <label>Email</label>
                        <input
                          className="form-control"
                          defaultValue={user.email}
                          onChange={this.onChange}
                          //  value={this.state.email}
                          id="email"
                          type="email"
                        />
                      </div>
                      <div className="form-group">
                        <label>Role</label>
                        <input
                          className="form-control"
                          defaultValue={user.role}
                          onChange={this.onChange}
                          //  value={this.state.role}
                          id="role"
                          type="text"
                        />
                      </div>
                      <div className="form-group">
                        <label>Password</label>
                        <input
                          className="form-control"
                          defaultValue={user.password}
                          onChange={this.onChange}
                          // value={this.state.password}
                          id="password"
                          type="password"
                        />
                      </div>
                    </div>
                    <div className="modal-footer">
                      <a href="/list-employee">
                        <input
                          type="button"
                          className="btn btn-default"
                          data-dismiss="modal"
                          defaultValue="Cancel"
                        />
                      </a>

                      <input
                        type="submit"
                        className="btn btn-success"
                        defaultValue="Update"
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
    user: state.rootReducer.user,
  };
};

// const mapDispatchToProps = { updateUser };
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateUser: (id) => {
      dispatch(updateUser(id, ownProps));
      ownProps.history.push("/list-employee");
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditUser);
