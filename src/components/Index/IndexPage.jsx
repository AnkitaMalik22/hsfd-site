import React,{useState} from 'react'
import './style.css'
// import { useDispatch } from "react-redux";
// import { clearErrors, login, } from "../../actions/userActions.js";
import Swiper from 'swiper';
import { useNavigate } from 'react-router-dom';
import pic1 from './imgs/pic-1.png'
import pic2 from './imgs/pic-2.png'
import pic3 from './imgs/pic-3.png'
import pic4 from './imgs/pic-4.png'
import feature1 from './imgs/feature-1.png'
import feature2 from './imgs/feature-2.jpg'
import feature4 from './imgs/feature-4.jpg'
import blog1 from './imgs/blog-1.jpg'
import blog2 from './imgs/blog-2.jpg'
import blog3 from './imgs/blog-3.jpg'


function IndexPage() {
    // const dispatch = useDispatch();
    const navigate = useNavigate();
const [searchForm, setSearchForm] = useState(false)
const [loginForm, setLoginForm] = useState(false)
const [nav, setNav] = useState(false)
const [toggle,setToggle]=useState(false)

const [loginEmail, setLoginEmail] = useState("");
const [loginPassword, setLoginPassword] = useState("");

// const loginSubmit = (e) => {
//     e.preventDefault();
//     dispatch(login(loginEmail, loginPassword));
//     navigate('/home')
//   };

  React.useEffect(() => {
    new Swiper('.review-slider', {
      loop: true,
      spaceBetween: 20,
      autoplay: {
        delay: 7500,
        disableOnInteraction: false,
      },
      centeredSlides: true,
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1020: {
          slidesPerView: 3,
        },
      },
    });
    
  }, []);

  return (
    <React.Fragment>

<header className="header">

    <a href="#" className="logo"> <i className="fas fa-utensils"></i> hsfd </a>

    <nav className={`${nav ? 'active' : "" } navbar`}>
        <a href="#home">home</a>
        <a href="#features">features</a>
        <a href="#about">about</a>
        <a href="#process">process</a>
        <a href="#review">review</a>
        <a href="#blogs">blogs</a>
    </nav>

    <div className="icons">
    <div className="fas fa-bars" id="menu-btn" onClick={()=>navigate("localhost:3000/login")}></div>
        {/* <div className="fas fa-bars" id="menu-btn" onClick={()=>{nav ? setNav(false) : setNav(true) && setLoginForm(false) && setSearchForm(false) && setToggle(true) }}></div> */}
        <div className="fas fa-search" id="search-btn" onClick={()=>{ searchForm ? setSearchForm(false) : setSearchForm(true) && setLoginForm(false) && setNav(false) && setToggle(true) }}></div>
        <div className="fas fa-user" id="login-btn" onClick={()=>{loginForm ? setLoginForm(false) : setLoginForm(true) && setSearchForm(false) && setNav(false) && setToggle(true)}}></div>
    </div>

    <form action="" className={`${searchForm ? 'active' : "" } search-form`}>
        <input type="search" id="search-box" placeholder="search here..."/>
        <label for="search-box" className="fas fa-search"></label>
    </form>


    {/* <form onSubmit={loginSubmit} className={`${loginForm ? 'active' : "" } login-form `}   >
        <h3>login now</h3>
        <input  type="email"
                    placeholder="your email"
                    required
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)} className="box"/>
        <input type="password"
                 
                    required
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)} placeholder="your password" className="box"/>
        <p>forget your password <a href="/password/forgot">click here</a></p>
        <p>don't have an account <a href="/login">create now</a></p>
        <input type="submit" value="login now" className="btn"/>
    </form> */}

</header>


<section className="home" id="home">
{/* Connecting Hotels and Volunteers */}

    <div className="content">
        <h3>Hotel <span> Surplus </span> Food Distribution </h3>
        <p>Donate surplus food to reduce waste and fight hunger, or to distribute food to those in need</p>
        <a href="/register" className="btn">register now</a>
    </div>

</section>

<section className="features" id="features">

    <h1 className="heading"> our <span>features</span> </h1>

    <div className="box-container">

        <div className="box">
            <img src={feature1} alt="" />
            <h3>Food donation</h3>
            <p>Hotels can use the system to donate surplus food to those in need!</p>
            <a href="#" className="btn">read more</a>
        </div>

        <div className="box">
            <img src={feature2} alt="" />
            <h3>Volunteer coordination</h3>
            <p>Volunteers can browse available food and request items they would like to pick up and distribute.</p>
            <a href="#" className="btn">read more</a>
        </div>

        <div className="box">
            <img src={feature4} alt="" />
            <h3>Community involvement</h3>
            <p> Our system can encourage community involvement by providing a platform for hotels and volunteers to connect together!</p>
            <a href="#" className="btn">read more</a>
        </div>

    </div>

</section>



<section className="products" id="about">

    <h1 className="heading"> About <span>us</span> </h1>

    <div className="box-container product-slider">

  

            <div className=" box">
                <img src="image/product-1.png" alt="" />
                <h3> Our mission</h3>
                <div className="price">Welcome to our hotel surplus food distribution system! 
                Our mission is to help reduce food waste and fight hunger in communities around the world. We believe that no one should go hungry, and that by working together, we can make a difference.

</div>
        
            </div>

            <div className=" box">
                <img src="image/product-2.png" alt="" />
                <h3>power of local communities</h3>
                <div className="price"> At our hotel surplus food distribution system, we believe in the power of local communities to make a difference. That's why our system only shows the food that are available from hotels in your district. This ensures that the food you donate or request is going to those who are closest to you and in greatest need.</div>
            
            </div>

            <div className=" box">
            <img src="image/product-2.png" alt="" />
            <h3>Join the Community and Make a Difference</h3>
            <div className="price"> Through our system, hotels can easily donate surplus food to those in need, while volunteers can browse available donations and request items to pick up and distribute. It's a simple way to make a big impact, and we encourage you to join our community and make a difference today.
</div>
<div className="price">Thank you for choosing to be a part of this important mission. Together, we can create a more sustainable and compassionate world.</div>
        
        </div>


    </div>

   


</section>



<section className="categories" id="process">

    <h1 className="heading"> Our <span>Process</span> </h1>

    <div className="box-container">

        <div className="box">
            <img src="image/cat-1.png" alt="" />
            <h3>Hotel & Volunteer</h3>
            <p>Registration & Login</p>
            <a href="#" className="btn">step 1</a>
        </div>

        <div className="box">
            <img src="image/cat-2.png" alt="" />
            <h3>Hotel</h3>
            <p>Adds the surplus food</p>
            <a href="#" className="btn">step 2</a>
        </div>

        <div className="box">
            <img src="image/cat-3.png" alt="" />
            <h3>Volunteer</h3>
            <p>requests the available food</p>
            <a href="#" className="btn">step 3</a>
        </div>

        <div className="box">
            <img src="image/cat-4.png" alt="" />
            <h3>Hotel</h3>
            <p>Hotel accepts the request</p>
            <a href="#" className="btn">step 4</a>
        </div>

        <div className="box">
            <img src="image/cat-4.png" alt="" />
            <h3>Volunteer</h3>
            <p> Volunteer pick the food</p>
            <a href="#" className="btn">step 4</a>
        </div>
    </div>

</section>



<section className="review" id="review">

    <h1 className="heading"> user's <span>review</span> </h1>

    <div className="swiper review-slider">

        <div className="swiper-wrapper">

            <div className="swiper-slide box">
                <img src={pic1} alt=""/>
                <p>This system is a game-changer! Highly recommend this system to other hotels looking to reduce food waste and help those in need..</p>
                <h3>Abhee Roy | Taj Hotel</h3>
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
            </div>
            <div className="swiper-slide box">
                <img src={pic2} alt=""/>
                <p>Our hotel has been able to make a big impact on reducing food waste and fighting hunger thanks to this system. Highly recommend giving it a try!</p>
                <h3> Surbhi | Holiday Hotel</h3>
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
            </div>
            <div className="swiper-slide box">
                <img src={pic3} alt=""/>
                <p>As a volunteer, I've been able to access a wide range of high-quality donations through this system. It's a great resource!</p>
                <h3>Risabh Das | Volunteer</h3>
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
            </div>
            <div className="swiper-slide box">
                <img src={pic4} alt=""/>
                <p> It was so easy to list the surplus food we had available at our hotel, and within a few hours we had received a request from a volunteer to pick it up. </p>
                <h3>Ritika Basu </h3>
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
            </div>

        </div>

    </div>

</section>



<section className="blogs" id="blogs">

    <h1 className="heading"> our <span>blogs</span> </h1>

    <div className="box-container">

        <div className="box">
            <img src={blog1} alt="" />
            <div className="content">
                <div className="icons">
                    <a href="#"> <i className="fas fa-user"></i> by Ankita </a>
                    <a href="#"> <i className="fas fa-calendar"></i> 1st may, 2022 </a>
                </div>
                <h3>5 Surprising Facts About Food Waste</h3>
                <p>food waste is a significant and complex issue that has far-reaching impacts on the environment, society, and economy. </p>
                <a href="#" className="btn">read more</a>
            </div>
        </div>

        <div className="box">
            <img src={blog2} alt="" />
            <div className="content">
                <div className="icons">
                    <a href="#"> <i className="fas fa-user"></i> by Khadija </a>
                    <a href="#"> <i className="fas fa-calendar"></i> 1st may, 2022 </a>
                </div>
                <h3>The Benefits of Donating Surplus Food</h3>
                <p>The benefits of donating surplus food are numerous and far-reaching, making it a win-win for both those who donate and those who receive the donations.</p>
                <a href="#" className="btn">read more</a>
            </div>
        </div>

        <div className="box">
            <img src={blog3} alt="" />
            <div className="content">
                <div className="icons">
                    <a href="#"> <i className="fas fa-user"></i> by Sanjana </a>
                    <a href="#"> <i className="fas fa-calendar"></i> 1st may, 2022 </a>
                </div>
                <h3>Why Volunteering to Distribute Food is So Important</h3>
                <p>Volunteering to distribute food is an incredibly important and rewarding way to make a difference in your community.</p>
                <a href="#" className="btn">read more</a>
            </div>
        </div>

    </div>

</section>


<section className="footer">

    <div className="box-container">

        <div className="box">
            <h3> hsfd <i className="fas fa-utensils"></i> </h3>
            <p>Reducing food waste, feeding the hungry, and building community.</p>
            <div className="share">
                <a href="#" className="fab fa-facebook-f"></a>
                <a href="#" className="fab fa-twitter"></a>
                <a href="#" className="fab fa-instagram"></a>
                <a href="#" className="fab fa-linkedin"></a>
            </div>
        </div>

   

        <div className="box">
            <h3>quick links</h3>
            <a href="#home" className="links"> <i className="fas fa-arrow-right"></i> home </a>
            <a href="#features" className="links"> <i className="fas fa-arrow-right"></i> features </a>
            <a href="#about" className="links"> <i className="fas fa-arrow-right"></i> about </a>
            <a href="#process" className="links"> <i className="fas fa-arrow-right"></i> process </a>
            <a href="#review" className="links"> <i className="fas fa-arrow-right"></i> review </a>
            <a href="#blogs" className="links"> <i className="fas fa-arrow-right"></i> blogs </a>
        </div>

        <div className="box">
            <h3>newsletter</h3>
            <p>subscribe for latest updates</p>
            <input type="email" placeholder="your email" className="email"/>
            <input type="submit" value="subscribe" className="btn"/>
            <img src="image/payment.png" className="payment-img" alt="" />
        </div>

    </div>

    <div className="credit"> created by | <span>Ankita | Sanjana | Adarsha | Raju | Khadija</span> | @2022 </div>

</section>

    </React.Fragment>
  )
}

export default IndexPage;