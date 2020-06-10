import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getUser, deleteUser } from "../../redux/actions/admin";

class InforUser extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.id);
  }

  render() {
    const user = this.props.user;
    console.log(user);
    return (
      <div>
        <div>
          <h2>{user.userName}</h2>

          <div className="btn-group">
            <Link
              to={{
                pathname: `/list-employee/${user._id}/edit`,
              }}
              className="btn btn-info"
            >
              Edit
            </Link>
            <button
              className="btn btn-danger"
              type="button"
              onClick={() =>
                window.confirm("Are you sure you wish to delete this user?") &&
                this.props.deleteUser(user._id)
              }
            >
              Delete
            </button>
            <Link to="/list-employee" className="btn btn-secondary">
              Close
            </Link>
          </div>
          <hr />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.rootReducer.user,
    token: state.rootReducer.token,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getUser: (token) => dispatch(getUser(token)),
    deleteUser: (id) => {
      dispatch(deleteUser(id, ownProps));
      ownProps.history.push("/list-employee");
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InforUser);
