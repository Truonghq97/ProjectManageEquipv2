import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getlistEquip } from "../../redux/actions/equip";

class ContentEquip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listEquip: [],
    };
  }

  componentDidMount() {
    this.props.getlistEquip(this.props.token);
  }
  render() {
    console.log(this.props.listEquip);
    return (
      <div className="content-wrapper">
        <section className="content-header">
          <div class="table-title">
            <div className="row">
              <div class="col-sm-9">
                <h2>
                  Manage <b>Equipments</b>
                </h2>
              </div>
              <div class="col-sm-3">
                <Link
                  to="/add-equip"
                  class="btn btn-success"
                  data-toggle="modal"
                >
                  <i class="material-icons">&#xE147;</i>{" "}
                  <span>Add New Equipment</span>
                </Link>
              </div>
            </div>
          </div>

          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>
                  <span className="custom-checkbox">
                    <input type="checkbox" id="selectAll" />
                    <label htmlFor="selectAll" />
                  </span>
                </th>
                <th>Name</th>
                <th>Type</th>
                <th>Status</th>
                <th>Decription</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.props.listEquip.map((item, key) => {
                return (
                  <tr key={key}>
                    <td>
                      <span className="custom-checkbox">
                        <input
                          type="checkbox"
                          id="checkbox1"
                          name="options[]"
                          defaultValue={1}
                        />
                        <label htmlFor="checkbox1" />
                      </span>
                    </td>
                    <td>{item.name}</td>
                    <td>{item.type}</td>
                    <td>{item.status}</td>
                    <td>{item.description}</td>
                    <td>
                      <Link to={`/list-equipment/${item._id}`}>
                        <button>Control</button>
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {/* <div class="clearfix">
            <div class="hint-text">
              Showing <b>5</b> out of <b>25</b> entries
            </div>
            <ul class="pagination">
              <li class="page-item disabled">
                <a href="#">Previous</a>
              </li>
              <li class="page-item">
                <a href="#" class="page-link">
                  1
                </a>
              </li>
              <li class="page-item">
                <a href="#" class="page-link">
                  2
                </a>
              </li>
              <li class="page-item active">
                <a href="#" class="page-link">
                  3
                </a>
              </li>
              <li class="page-item">
                <a href="#" class="page-link">
                  4
                </a>
              </li>
              <li class="page-item">
                <a href="#" class="page-link">
                  5
                </a>
              </li>
              <li class="page-item">
                <a href="#" class="page-link">
                  Next
                </a>
              </li>
            </ul>
          </div> */}
          <div></div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    listEquip: state.rootReducer.listEquip,
    token: state.rootReducer.token,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getlistEquip: (token) => dispatch(getlistEquip(token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContentEquip);
