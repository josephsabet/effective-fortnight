import { Fragment } from "react";
import therdImge from "../resources/img/3.jpg";
import secondImge from "../resources/img/2.jpg";
import three from "../resources/img/3.jpg";
import four from "../resources/img/5.jpg";
import { ProjectComponent } from "../components/ProjectComponent";
import ContactUsComponent from "../components/ContactUsComponent";




const HomePage = () => {
    return ( 
        <Fragment>
            <div className="main-cover">
         <div className="overllay">
            <div className="Cover-content">
               <h1>Lorem ipsum dolor sit amet, consectetur adipiscing </h1>
               <p>
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
               </p>
               <a href="">about us</a>
            </div>
         </div>
      </div>

      <section id="about">
         <div className="about flex main-container">
            <div className="item">
               <img src={therdImge}alt="" />
            </div>
            <div className="item pt-30">
               <span className="green u-text-sup">ABOUT US</span>
               <h2>
               Lorem ipsum dolor sit amet</h2>
               <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim .
               </p>
               <div>
                  <a href="" className="green-btn">Read More</a>
               </div>
            </div>
         </div>
      </section>

      <section id="project">
         <div className="text-center">
            <span className="green u-text-sup  ">Project</span>
            <h2>We Offer Quality Service For Your Business </h2>
            
         </div>
         <div className="flex project pt-30" >
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
         <div className="flex project" >
            {/* <div className="item">
               <div className="container">
                  <img src="img/1.jpg" alt="Avatar" className="image"/>
                  <div className="overlay">
                     <div className="text"> title can be here</div>
                  </div>
               </div>
            </div>
            <div className="item">
               <div className="container">
                  <img src="img/5.jpg" alt="Avatar" className="image"/>
                  <div className="overlay">
                     <div className="text">project title can be here</div>
                  </div>
               </div>
            </div>
            <div className="item">
               <div className="container">
                  <img src="img/3.jpg" alt="Avatar" className="image"/>
                  <div className="overlay">
                     <div className="text">project title can be here</div>
                  </div>
               </div>
            </div> */}
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

      <ContactUsComponent />


        </Fragment>
     );
}
 
export default HomePage;