import React, { Component } from "react";
import "./style.css";

class ManageVoucher extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div className="manage_product">
          <div>
            <div className="">
              <div className="table-responsive">
                <div className="table-wrapper">
                  <div className="table-title">
                    <div className="row">
                      <div className="col-sm-6">
                        <h2>
                          Manage <b>Product</b>
                        </h2>
                      </div>
                      <div className="col-sm-6">
                        <button
                          className="btn btn-success"
                          onClick={() => this.showAddPopUp()}
                          data-toggle="modal"
                        >
                          <i className="far fa-trash-alt"></i>{" "}
                          <span>Add New Product</span>
                        </button>
                        <a
                          href="/"
                          className="btn btn-danger"
                          data-toggle="modal"
                        >
                          <i className="far fa-trash-alt"></i>{" "}
                          <span>Delete</span>
                        </a>
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
                        <th>Images</th>
                        <th>Name</th>
                        <th>Catagory</th>
                        <th>Prices</th>
                        <th>Discount</th>
                        <th>Remaining</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
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
                        <td>
                          <img
                            src="https://via.placeholder.com/100"
                            alt="/"
                            style={{
                              height: "150px",
                              width: "150px",
                              object: "cover",
                            }}
                          ></img>
                        </td>
                        <td>Ten</td>
                        <td>the loai</td>
                        <td>$999</td>
                        <td>40%</td>
                        <td>$1</td>
                        <td>
                          <button className="edit" data-toggle="modal">
                            <i
                              className="far fa-edit"
                              data-toggle="tooltip"
                              title="Edit"
                            ></i>
                          </button>
                          <button className="delete" data-toggle="modal">
                            <i
                              className="far fa-trash-alt"
                              data-toggle="tooltip"
                              title="Delete"
                            ></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
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
                        <td>
                          <img
                            src="https://via.placeholder.com/100"
                            alt="/"
                            style={{
                              height: "150px",
                              width: "150px",
                              object: "cover",
                            }}
                          ></img>
                        </td>
                        <td>Ten</td>
                        <td>the loai</td>
                        <td>$999</td>
                        <td>40%</td>
                        <td>$1</td>
                        <td>
                          <button className="edit" data-toggle="modal">
                            <i
                              className="far fa-edit"
                              data-toggle="tooltip"
                              title="Edit"
                            ></i>
                          </button>
                          <button className="delete" data-toggle="modal">
                            <i
                              className="far fa-trash-alt"
                              data-toggle="tooltip"
                              title="Delete"
                            ></i>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="clearfix">
                    <div className="hint-text">
                      Showing <b>5</b> out of <b>25</b> entries
                    </div>
                    <ul className="pagination">
                      <li className="page-item">
                        <a href="/" className="page-link">
                          Previous
                        </a>
                      </li>
                      <li className="page-item">
                        <a href="/" className="page-link">
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <a href="/" className="page-link">
                          2
                        </a>
                      </li>
                      <li className="page-item active1">
                        <a href="/" className="page-link">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a href="/" className="page-link">
                          4
                        </a>
                      </li>
                      <li className="page-item">
                        <a href="/" className="page-link">
                          5
                        </a>
                      </li>
                      <li className="page-item">
                        <a href="/" className="page-link">
                          Next
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* Edit Modal HTML */}
            <div id="addEmployeeModal" className="modal fade">
              <div className="modal-dialog">
                <div className="modal-content">
                  <form>
                    <div className="modal-header">
                      <h4 className="modal-title">Add Employee</h4>
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
                      <input
                        type="button"
                        className="btn btn-default"
                        data-dismiss="modal"
                        defaultValue="Cancel"
                      />
                      <input
                        type="submit"
                        className="btn btn-success"
                        defaultValue="Add"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* Edit Modal HTML */}
            <div id="editEmployeeModal" className="modal fade">
              <div className="modal-dialog">
                <div className="modal-content">
                  <form>
                    <div className="modal-header">
                      <h4 className="modal-title">Edit Employee</h4>
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
                      <input
                        type="button"
                        className="btn btn-default"
                        data-dismiss="modal"
                        defaultValue="Cancel"
                      />
                      <input
                        type="submit"
                        className="btn btn-info"
                        defaultValue="Save"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* Delete Modal HTML */}
            <div id="deleteEmployeeModal" className="modal fade">
              <div className="modal-dialog">
                <div className="modal-content">
                  <form>
                    <div className="modal-header">
                      <h4 className="modal-title">Delete Employee</h4>
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
                      <p>Are you sure you want to delete these Records?</p>
                      <p className="text-warning">
                        <small>This action cannot be undone.</small>
                      </p>
                    </div>
                    <div className="modal-footer">
                      <input
                        type="button"
                        className="btn btn-default"
                        data-dismiss="modal"
                        defaultValue="Cancel"
                      />
                      <input
                        type="submit"
                        className="btn btn-danger"
                        defaultValue="Delete"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ManageVoucher;
