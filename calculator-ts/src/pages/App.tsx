// export default function App (){}

// export const App =()=>{
// return <h1>welcommm</h1>;
// };

// export let App =()=>{
// return <h1>welcommm</h1>;
// };
import { useContext } from "react";
import CalculatorForm from "../components/CalculatorForm";
import MarkCard from "../components/MarkCard";
import "../resources/css/style.css";
import { AppContext } from "../context/app-context";
export default function App() {
  let appContext = useContext(AppContext);
  return (
    <div className="content-wrapper">
      <section className="form-section">
        <header className="form-header">
          <article className="form-header_content">
            <span className="form-title">Average Calculator</span>
            <p className="form-info">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eum
              consectetur explicabo, molestias, hic aut perferendis, deleniti
              dolores repellendus natus numquam. Qui laborum alias eligendi, ab
              voluptas itaque? Exercitationem, minima? Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Suscipit veniam sit quisquam
              vero quod. Eum velit excepturi id ratione, facere aut sequi
              architecto tempora a numquam odit quidem totam exercitationem.
            </p>
          </article>
          <figure className="form-header_img">
            <img
              src="https://img.freepik.com/free-vector/calculator-concept-illustration_114360-2686.jpg?w=2000"
              alt=""
            />
          </figure>
        </header>
        <CalculatorForm />
      </section>
      {appContext.marks.map((element) => (
        <MarkCard
          key={element._id} mark={element}
        />
      ))}
    </div>
  );
}
