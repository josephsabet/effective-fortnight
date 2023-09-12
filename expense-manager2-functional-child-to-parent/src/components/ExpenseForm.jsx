import { useRef } from "react";

let ExpenseForm = (props) => {
  // hoooks  use--
  let titleRef = useRef();
  let valueRef = useRef();
  let dataRef = useRef();
  let descriptionRef = useRef();

  let onSubmitHandler = (event) => {
    event.preventDefault();
    if (checkData()) {
      let newExpense = getNewExpense();
      // console.log(newExpense);
      // chiled to parent
      props.onNewExpense(newExpense);
      clearForm();
    }
  };

  let checkData = () => {
    if (
      titleRef.current.value != "" &&
      dataRef.current.value != "" &&
      valueRef.current.value != "" &&
      descriptionRef.current.value != ""
    ) {
      return true;
    }
    alert("enter the requerd data");
    return false;
  };
  let getNewExpense = () => {
    return {
      id: Date.now(),
      title: titleRef.current.value,
      date: dataRef.current.value,
      value: valueRef.current.value,
      description: descriptionRef.current.value,
    };
  };
  let clearForm = () => {
    titleRef.current.value = "";
    dataRef.current.value = "";
    valueRef.current.value = "";
    descriptionRef.current.value = "";
  };

  return (
    <form className="row" onSubmit={onSubmitHandler}>
      <div className="mb-3 col-md-6">
        <label className="form-label">Title</label>
        <input
          type="text"
          className="form-control addTitle"
          aria-describedby=""
          ref={titleRef}
        />
      </div>

      <div className="mb-3 col-md-6">
        <label className="form-label">Date</label>
        <input
          type="date"
          className="form-control addDate"
          aria-describedby=""
          ref={dataRef}
        />
      </div>

      <div className="mb-3 col-md-6">
        <label className="form-label">Value</label>
        <input
          type="number"
          className="form-control addValue"
          aria-describedby=""
          ref={valueRef}
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
          ref={descriptionRef}
        />
      </div>
      <div className="mb-3 col-md-12 text-right">
        <button type="submit" className="btn btn-primary addBtn">
          Add
        </button>
      </div>
    </form>
  );
};
export default ExpenseForm;
