import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { addEquip } from "../../redux/actions/equip";

class AddEquip extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      type: "",
      status: "",
      description: "",
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const newEquip = {
      name: this.state.name,
      type: this.state.type,
      status: this.state.status,
      description: this.state.description,
    };

    this.props.addEquip(newEquip, this.props.token);
    this.props.history.push("/list-equipment");
    console.log(newEquip);
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
                      <h4 className="modal-title">Add Equipment</h4>
                      <Link to="/list-equipment">
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
                          value={this.state.name}
                          id="name"
                          type="text"
                        />
                      </div>
                      <div className="form-group">
                        <label>Type</label>
                        <input
                          className="form-control"
                          onChange={this.onChange}
                          value={this.state.type}
                          id="type"
                          type="text"
                        />
                      </div>
                      <div className="form-group">
                        <label>Status</label>
                        <input
                          className="form-control"
                          onChange={this.onChange}
                          value={this.state.status}
                          id="status"
                          type="text"
                        />
                      </div>
                      <div className="form-group">
                        <label>Decription</label>
                        <input
                          className="form-control"
                          onChange={this.onChange}
                          value={this.state.description}
                          id="description"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="modal-footer">
                      <Link to="/list-equipment">
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
    token: state.rootReducer.token,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addEquip: (newEquip, token) => {
      dispatch(addEquip(newEquip, token));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddEquip);
