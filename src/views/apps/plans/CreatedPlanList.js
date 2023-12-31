import React from "react";
import {
  Card,
  CardBody,
  Input,
  Row,
  Col,
  Button,
  UncontrolledDropdown,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Form,
  Label,
  Badge,
  UncontrolledButtonDropdown,
} from "reactstrap";

import PropTypes from "prop-types";
import axiosConfig from "../../../axiosConfig";
import { ContextLayout } from "../../../utility/context/Layout";
import { AgGridReact } from "ag-grid-react";
import { Edit, Trash2, ChevronDown } from "react-feather";
// import { ChevronDown } from "react-feather";
import "../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";
import "../../../assets/scss/pages/users.scss";
import { Route } from "react-router-dom";
import swal from "sweetalert";
import ReactHtmlParser from "react-html-parser";
import { PolicyCancel } from "./PolicyCancel";

class CreatedPlanList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownOpen: false,
      rowData: [],
      paginationPageSize: 20,
      currenPageSize: "",
      getPageSize: "",
      defaultColDef: {
        sortable: true,
        // editable: true,
        resizable: true,
        suppressMenu: true,
      },

      columnDefs: [
        {
          headerName: "S.No",
          valueGetter: "node.rowIndex + 1",
          field: "node.rowIndex + 1",
          width: 100,
          filter: true,
          // checkboxSelection: true,
          // headerCheckboxSelectionFilteredOnly: true,
          // headerCheckboxSelection: true,
        },

        {
          headerName: "Details",
          field: "scriptName",
          width: 120,
          cellRendererFramework: (params) => {
            return (
              <div className="d-flex align-items-center cursor-pointer">
                <span>{params.data.scriptName}</span>
              </div>
            );
          },
        },
        {
          headerName: "Purchase Date",
          field: "scriptName",
          width: 160,
          cellRendererFramework: (params) => {
            return (
              <div className="d-flex align-items-center cursor-pointer">
                <span>{params.data.scriptName}</span>
              </div>
            );
          },
        },
        {
          headerName: "Name",
          field: "scriptName",
          width: 160,
          cellRendererFramework: (params) => {
            return (
              <div className="d-flex align-items-center cursor-pointer">
                <span>{params.data.scriptName}</span>
              </div>
            );
          },
        },
        {
          headerName: "Start Date",
          field: "scriptName",
          width: 160,
          cellRendererFramework: (params) => {
            return (
              <div className="d-flex align-items-center cursor-pointer">
                <span>{params.data.scriptName}</span>
              </div>
            );
          },
        },
        {
          headerName: "End Date",
          field: "scriptName",
          width: 160,
          cellRendererFramework: (params) => {
            return (
              <div className="d-flex align-items-center cursor-pointer">
                <span>{params.data.scriptName}</span>
              </div>
            );
          },
        },
        {
          headerName: "Plan Name",
          field: "scriptName",
          width: 160,
          cellRendererFramework: (params) => {
            return (
              <div className="d-flex align-items-center cursor-pointer">
                <span>{params.data.scriptName}</span>
              </div>
            );
          },
        },

        {
          headerName: "Actions",
          field: "sortorder",
          width: 600,
          cellRendererFramework: (params) => {
            return (
              <div className="actions cursor-pointer">
                <select id="cars">
                  <option value="volvo">--Select--</option>
                  <option value="saab">Plan Document</option>
                  <option value="opel">ContactDoctor(nonInsurance)</option>
                </select>
                {/* <div className="dropdown mr-1 mb-1 d-inline-block">
                  <UncontrolledButtonDropdown>
                    <DropdownToggle color="primary" size="sm" caret>
                      Select
                      <ChevronDown size={15} />
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem tag="a">Option 1</DropdownItem>
                      <DropdownItem tag="a">Option 2</DropdownItem>
                      <DropdownItem tag="a">Option 3</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledButtonDropdown>
                </div> */}

                <Button size="sm" className="mx-1" color="primary" outline>
                  Legacy Claim
                </Button>
                <Button size="sm" className="mx-1" color="primary" outline>
                  Claim
                </Button>
                <Button size="sm" className="mx-1" color="success" outline>
                  Extend
                </Button>
                {/* <Route
                render={({ history }) => (
                  <Edit
                    className="mr-50"
                    size="25px"
                    color="blue"
                    onClick={() =>
                      history.push(
                        `/app/plans/editCreatedPlan/${params.data._id}`
                      )
                    }
                  />
                )}
              />
              <Trash2
                size={20}
                color="red"
                onClick={() => {
                  this.runthisfunction(params.data._id);
                }}
              /> */}
              </div>
            );
          },
        },
      ],
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    console.log("object", this.state.dropdownOpen);
    this.setState((prevState) => ({
      dropdownOpen: !prevState.dropdownOpen,
    }));
  }
  componentDidMount() {
    this.getOptionDataList();
  }

  getOptionDataList = () => {
    axiosConfig.get(`/user/infPlanList`).then((response) => {
      //   console.log(response.data);
      const rowData = response.data.slice(0, 1);
      this.setState({ rowData });
    });
  };
  runthisfunction(id) {
    swal(
      `Do You Want To Delete Permanently`,
      "This item will be deleted immediately",

      {
        buttons: {
          cancel: "Cancel",
          catch: { text: "Delete ", value: "catch" },
        },
      }
    ).then((value) => {
      switch (value) {
        case "cancel":
          break;
        case "catch":
          axiosConfig.delete(`/admin/dlt_infPlan/${id}`).then((response) => {
            this.getOptionDataList();
          });
          break;
        default:
          break;
      }
    });
  }
  onGridReady = (params) => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.setState({
      currenPageSize: this.gridApi.paginationGetCurrentPage() + 1,
      getPageSize: this.gridApi.paginationGetPageSize(),
      totalPages: this.gridApi.paginationGetTotalPages(),
    });
  };

  updateSearchQuery = (val) => {
    this.gridApi.setQuickFilter(val);
  };

  filterSize = (val) => {
    if (this.gridApi) {
      this.gridApi.paginationSetPageSize(Number(val));
      this.setState({
        currenPageSize: val,
        getPageSize: val,
      });
    }
  };

  render() {
    const { rowData, columnDefs, defaultColDef } = this.state;
    return (
      <Row className="app-user-list">
        <Col sm="12"></Col>
        <Col sm="12">
          <Card>
            {/* <Form className="m-1" onSubmit={this.submitHandler}>
              <Row>
                <Col lg="6" md="6" sm="6" className="">
                  <Label>Created Plan</Label>
                  <Input
                    required
                    type="text"
                    name="scriptName"
                    placeholder="Plan Name"
                    value={this.state.scriptName}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mt-1">
                  <Button.Ripple
                    // color="primary"
                    type="submit"
                    className="mr-1 mb-1 btn btn-success float-right"
                  >
                    Create Plan
                  </Button.Ripple>
                </Col>
              </Row>
            </Form> */}
            <Col sm="12"></Col>
            <Row className="m-2">
              <Col>
                <h1 sm="6" className="float-left">
                  Active Plans
                </h1>
              </Col>
              {/* <Col className="">
                <Route
                  render={({ history }) => (
                    <Button
                      className=" btn btn-success float-right"
                      onClick={() => history.push("/app/plan/CreatePlan")}
                    >
                      Create Plan
                    </Button>
                  )}
                />
              </Col> */}
            </Row>
            <CardBody>
              {this.state.rowData === null ? null : (
                <div className="ag-theme-material w-100 my-2 ag-grid-table">
                  <div className="d-flex flex-wrap justify-content-between align-items-center">
                    <div className="mb-1">
                      <UncontrolledDropdown className="p-1 ag-dropdown">
                        <DropdownToggle tag="div">
                          {this.gridApi
                            ? this.state.currenPageSize
                            : "" * this.state.getPageSize -
                              (this.state.getPageSize - 1)}
                          -
                          {this.state.rowData.length -
                            this.state.currenPageSize * this.state.getPageSize >
                          0
                            ? this.state.currenPageSize * this.state.getPageSize
                            : this.state.rowData.length}{" "}
                          of {this.state.rowData.length}
                          <ChevronDown className="ml-50" size={15} />
                        </DropdownToggle>
                        <DropdownMenu right>
                          <DropdownItem
                            tag="div"
                            onClick={() => this.filterSize(20)}
                          >
                            20
                          </DropdownItem>
                          <DropdownItem
                            tag="div"
                            onClick={() => this.filterSize(50)}
                          >
                            50
                          </DropdownItem>
                          <DropdownItem
                            tag="div"
                            onClick={() => this.filterSize(100)}
                          >
                            100
                          </DropdownItem>
                          <DropdownItem
                            tag="div"
                            onClick={() => this.filterSize(134)}
                          >
                            134
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </div>
                    <div className="d-flex flex-wrap justify-content-between mb-1">
                      <div className="table-input mr-1">
                        <Input
                          placeholder="search..."
                          onChange={(e) =>
                            this.updateSearchQuery(e.target.value)
                          }
                          value={this.state.value}
                        />
                      </div>
                      <div className="export-btn">
                        <Button.Ripple
                          color="primary"
                          onClick={() => this.gridApi.exportDataAsCsv()}
                        >
                          Export as CSV
                        </Button.Ripple>
                      </div>
                    </div>
                  </div>
                  <div style={{ height: "600px" }}>
                    <ContextLayout.Consumer>
                      {(context) => (
                        <AgGridReact
                          // style={{height:"300px"}}
                          gridOptions={{}}
                          rowSelection="multiple"
                          defaultColDef={defaultColDef}
                          columnDefs={columnDefs}
                          rowData={rowData}
                          onGridReady={this.onGridReady}
                          colResizeDefault={"shift"}
                          animateRows={true}
                          floatingFilter={false}
                          pagination={true}
                          paginationPageSize={this.state.paginationPageSize}
                          pivotPanelShow="always"
                          enableRtl={context.state.direction === "rtl"}
                        />
                      )}
                    </ContextLayout.Consumer>
                  </div>
                </div>
              )}
            </CardBody>
            <div className="policycancel">
              <PolicyCancel />
            </div>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default CreatedPlanList;
