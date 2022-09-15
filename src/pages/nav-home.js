import  {Link,NavLink} from "react-router-dom";
import "./nav-home.css";
import dinfo1 from "../images/home-images/img1.png";
import dinfo2 from "../images/home-images/img2.png";
import dinfo3 from "../images/home-images/img3.png";
import featured1 from "../images/home-images/home-image-1.jpg";
import featured2 from "../images/home-images/home-image-2.jpg";
import featured3 from "../images/home-images/home-image-3.jpg";
import SearchForm from "../components/searchForm";


const NavHome = () => {
    return(
        <div id="home-container" className="container-fluid" >

            {/* home poster */}
            <div id="home-poster" className="row justify-content-center">
                <div id="home-poster-text" className="col-12">
                    <h1>Online Tiffin.<br/> Home Made.<br/> Cheaper Prize.</h1>
                    <p id="home-poster-p1">Explore home cooked meals <br/> in your neighborhood.</p>
                    <p>dont have account? &nbsp; <NavLink className="home-poster-link"  to="/register">Register</NavLink></p>
                    <p>already have account? &nbsp; <NavLink className="home-poster-link" to="/login">Login</NavLink></p>
                </div>
            </div>

            {/* how tiffin works home */}
            <div id="dish-info" className="row justify-content-between text-center px-4">
                <h1 className="my-5">How Tiffin Works</h1>
                <div className="col-lg-3 my-4">
                    <img src={dinfo1} alt="dinfo1" className="images-3 mb-3 img-fluid" />
                    <h2>One Time Meal</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit sequi et ea ipsa alias aliquam ad assumenda suscipit esse rerum?</p>
                </div>
                <div className="col-lg-3 my-4">
                    <img src={dinfo2} alt="dinfo2" className="images-3 mb-3 img-fluid" />
                    <h2>Weekly Tiffin</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit sequi et ea ipsa alias aliquam ad assumenda suscipit esse rerum?</p>
                </div>
                <div className="col-lg-3 my-4">
                    <img src={dinfo3} alt="dinfo3" className="images-3 mb-3 img-fluid" />
                    <h2>Monthly Tiffin</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit sequi et ea ipsa alias aliquam ad assumenda suscipit esse rerum?</p>
                </div>
            </div>

            <hr />

            {/* featured dishes */}
            <div id="feature-dishes" className="row justify-content-center align-items-center text-center">
                <h1 className="my-4">Featured Dishes</h1>
                <div className="col-lg-5 feature-image-div">
                    <img src={featured1} alt="home-image1" className="img-fluid my-5 feature-images" />
                </div>
                <div className="col-lg-5 feature-image-div">
                    <img src={featured2} alt="home-image2" className="img-fluid mb-5 feature-images" />
                </div>
                <div className="col-lg-5 feature-image-div">
                    <img src={featured3} alt="home-image3" className="img-fluid mb-5 feature-images" />
                </div>
            </div>

            <hr />

            {/* why try Tiffin ?*/}
            <div id="why-tiffin" className="row justify-content-between text-center align-items-center px-4">
                <h1 className="my-5">Why Try Tiffin?</h1>
                <div className="col-lg-3 mb-5">
                    <h2 className="mb-4">Support Local Vendors &amp; Home cooks</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum perferendis doloribus minus doloremque mollitia, ad tenetur eius.</p>
                </div>
                <div className="col-lg-3 mb-5">
                    <h2 className="mb-4">Explore Different Cultures</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum perferendis doloribus minus doloremque mollitia, ad tenetur eius.</p>
                </div>
                <div className="col-lg-3 mb-5">
                    <h2 className="mb-4">Tasty Meals at low Price</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum perferendis doloribus minus doloremque mollitia, ad tenetur eius.</p>
                </div>
            </div>

            {/* ready to order */}
            <div id="ready-order" className="row justify-content-center flex-column text-center px-4">
                <h1 className="mb-3">Ready To Order!</h1>
                <div className="col-lg-5 align-self-center my-3">
                    hello guyss hgjhsgdhgjhsgdhgshgdhsg jhgjhdjs jhgasdg ywqteiu wgdjhs dhgdh Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, esse?
                </div> 
                <SearchForm className="col-lg-4 align-self-center mt-3" />
            </div>

        </div>
    );
};

export default NavHome;