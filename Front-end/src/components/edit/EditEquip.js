import React, { Component } from "react";
import { connect } from "react-redux";
import { updateEquip } from "../../redux/actions/equip";

class EditEquip extends Component {
  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const id = this.props.equip._id;
    const name = this.state.name ? this.state.name : this.props.equip.name;
    const type = this.state.type ? this.state.type : this.props.equip.type;
    const status = this.state.status
      ? this.state.status
      : this.props.equip.status;
    const description = this.state.description
      ? this.state.description
      : this.props.equip.description;

    const equip = {
      _id: id,
      name: name,
      type: type,
      status: status,
      description: description,
    };
    this.props.updateEquip(equip);
  };

  render() {
    const equip = this.props.equip;
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
                      <h4 className="modal-title">Edit </h4>
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
                          defaultValue={equip.name}
                          onChange={this.onChange}
                          id="name"
                          type="text"
                        />
                      </div>
                      <div className="form-group">
                        <label>Type</label>
                        <input
                          className="form-control"
                          defaultValue={equip.type}
                          onChange={this.onChange}
                          id="type"
                          type="type"
                        />
                      </div>
                      <div className="form-group">
                        <label>Status</label>
                        <input
                          className="form-control"
                          defaultValue={equip.status}
                          onChange={this.onChange}
                          id="status"
                          type="text"
                        />
                      </div>
                      <div className="form-group">
                        <label>Description</label>
                        <input
                          className="form-control"
                          defaultValue={equip.description}
                          onChange={this.onChange}
                          id="description"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="modal-footer">
                      <a href="/list-equipment">
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
    equip: state.rootReducer.equip,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateEquip: (id) => {
      dispatch(updateEquip(id, ownProps));
      ownProps.history.push("/list-equipment");
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditEquip);
