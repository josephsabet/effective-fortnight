import { Fragment } from "react";
import therdImge from "../resources/img/3.jpg";
import secondImge from "../resources/img/2.jpg";
import three from "../resources/img/3.jpg";
import four from "../resources/img/5.jpg";
import { ProjectComponent } from "../components/ProjectComponent";
export default function ProjectPage() {
  return (
    <Fragment>
      <div className="cover-page">
        <div className="tit">
          <h1>Project</h1>
          <ul className="breadcrumb">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#" className="active">
                project
              </a>
            </li>
          </ul>
        </div>
      </div>

      <section id="project">
        <div className="flex project pt-30">
        <ProjectComponent 
           image={secondImge}
           title="project title can be here"
           />
            <ProjectComponent 
           image={therdImge}
           title="project title can be here"
           />
           <ProjectComponent 
           image={four}
           title="project title can be here"
           />
        </div>
        <div className="flex project pt-30">
        <ProjectComponent 
           image={secondImge}
           title="project title can be here"
           />
            <ProjectComponent 
           image={therdImge}
           title="project title can be here"
           />
           <ProjectComponent 
           image={four}
           title="project title can be here"
           />
        </div>
        <div className="flex project pt-30">
        <ProjectComponent 
           image={secondImge}
           title="project title can be here"
           />
            <ProjectComponent 
           image={therdImge}
           title="project title can be here"
           />
           <ProjectComponent 
           image={four}
           title="project title can be here"
           />
        </div>
        <div className="flex project pt-30">
        <ProjectComponent 
           image={secondImge}
           title="project title can be here"
           />
            <ProjectComponent 
           image={therdImge}
           title="project title can be here"
           />
           <ProjectComponent 
           image={four}
           title="project title can be here"
           />
        </div>
        <div className="flex project">
        <ProjectComponent 
           image={secondImge}
           title="project title can be here"
           />
            <ProjectComponent 
           image={therdImge}
           title="project title can be here"
           />
           <ProjectComponent 
           image={four}
           title="project title can be here"
           />
        </div>
      </section>
    </Fragment>
  );
}
