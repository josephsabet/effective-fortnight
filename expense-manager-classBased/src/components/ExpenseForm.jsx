import { Component } from "react";

class ExpenseForm extends Component {
  render() {
    return (
      <form className="col-sm-6 mt-5">
        <div className="row tit">
          <h4 className="">wellcom to lorem Expense Manager </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
        </div>
        <div className="row">
          <div className="mb-3 col-md-6">
            <label className="form-label">Title</label>
            <input
              type="text"
              className="form-control addTitle"
              aria-describedby=""
            />
          </div>

          <div className="mb-3 col-md-6">
            <label className="form-label">Date</label>
            <input
              type="date"
              className="form-control addDate"
              aria-describedby=""
            />
          </div>

          <div className="mb-3 col-md-6">
            <label className="form-label">Value</label>
            <input
              type="number"
              className="form-control addValue"
              aria-describedby=""
            />
          </div>
          <div className="mb-3 col-md-6">
            <label htmlFor="title" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control addDescrption"
              aria-describedby=""
            />
          </div>
          <div className="mb-3 col-md-12 text-right">
            <button type="submit" className="btn btn-primary addBtn">
              Add
            </button>
          </div>
        </div>
      </form>
    );
  }
}
export default ExpenseForm;
