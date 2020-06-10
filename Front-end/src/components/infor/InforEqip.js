import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getEquip, deleteEquip } from "../../redux/actions/equip";

class InforEquip extends Component {
  componentDidMount() {
    this.props.getEquip(this.props.match.params.id);
  }

  render() {
    const equip = this.props.equip;
    console.log(equip);
    return (
      <div>
        <div>
          <h2>{equip.name}</h2>

          <div className="btn-group">
            <Link
              to={{
                pathname: `/list-equipment/${equip._id}/edit`,
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
                this.props.deleteEquip(equip._id)
              }
            >
              Delete
            </button>
            <Link to="/list-equipment" className="btn btn-secondary">
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
    equip: state.rootReducer.equip,
    token: state.rootReducer.token,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getEquip: (token) => dispatch(getEquip(token)),
    deleteEquip: (id) => {
      dispatch(deleteEquip(id, ownProps));
      ownProps.history.push("/list-equipment");
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InforEquip);
