import { useContext } from "react";
import Mark from "../model/Mark";
import { AppContext } from "../context/app-context";

export default function MarkCard(props :{mark :Mark }){
    let appContext = useContext(AppContext);

    let deleteHandler =() =>{
      appContext.deleteMark(props.mark);
    }

    return(<section>
        <section className="card">
          <article className="card-top-content">
            <div className="card-top-content-leading">
              <span className="name-first-char">S</span>
              <div className="student-info">
                <span>{props.mark._name}</span>
                <span>{props.mark._id}</span>
              </div>
            </div>
            <button type="button" className="delete-btnn" onClick={deleteHandler}>
              <i className="fa-solid fa-xmark delete-row"></i>
            </button>
          </article>
          <article className="card-marks">
            <section className="mark-info">
              <span>Mid-Term</span>
              <span>{props.mark._mid}</span>
            </section>
            <section className="mark-info">
              <span>Final-Term</span>
              <span>{props.mark._final}</span>
            </section>
            <section className="mark-info">
              <span>Activities</span>
              <span>{props.mark._activities}</span>
            </section>
          </article>
        </section>
      </section>);
}