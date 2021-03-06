import React from 'react'

const Navbar_prajwal = () => {
  return (
<>
    <style jsx>{
        `
        @import url("https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&family=Roboto:wght@100;300;400&family=Ubuntu:wght@300;400;500;700&display=swap");
        @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
        html {
          scroll-behavior: smooth;
        }
        
        * {
          margin: 0;
          padding: 0;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          line-height: 1.1;
        }
        
        a {
          text-decoration: none;
        }
        
        .icon {
          height: 30px;
        }
        
        li {
          list-style: none;
        }
        
        .flex-center {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
        }
        
        body {
          font-family: "Poppins", sans-serif;
          scroll-behavior: smooth;
        }
        
        .container {
          max-width: 1050px;
          width: 90%;
          margin: auto;
        }
        
        nav {
          width: 100%;
        }
        
        nav .nav-container .logo {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          margin: 0 auto;
          -webkit-transform: translatey(10px);
          transform: translatey(10px);
        }
        
        nav .nav-container .logo img {
          height: 30px;
        }
        
        .nav-container {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-pack: justify;
          -ms-flex-pack: justify;
          justify-content: space-between;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          height: 62px;
        }
        
        nav .nav-container a {
          color: white;
          font-weight: 500;
          font-size: 1.2rem;
          padding: 0.7rem;
        }
        
        .nav-container {
          display: block;
          position: relative;
          height: 60px;
        }
        
        nav .menu-items {
          padding-top: 120px;
          background-color: #002763;
          height: 100vh;
          width: 100%;
          -webkit-transform: translateX(-150%);
          transform: translateX(-150%);
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
          -ms-flex-direction: column;
          flex-direction: column;
          margin-left: -40px;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          padding-left: 50px;
          -webkit-transition: -webkit-transform 0.5s ease-in-out;
          transition: -webkit-transform 0.5s ease-in-out;
          transition: transform 0.5s ease-in-out;
          transition: transform 0.5s ease-in-out, -webkit-transform 0.5s ease-in-out;
          text-align: center;
        }
        
        nav .menu-items li {
          margin-bottom: 1.75rem;
          font-weight: 500;
        }
        
        nav .menu-items li a {
          color: black;
        }
        
        .logo {
          position: absolute;
          top: 5px;
          right: 15px;
          font-size: 1.2rem;
        }
        
        .link {
          position: relative;
          padding-bottom: 0.25em;
        }
        
        .link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 2px;
          background: #4262ca;
          border-radius: 5px;
          -webkit-transform: scaleX(0);
          transform: scaleX(0);
          -webkit-transform-origin: right;
          transform-origin: right;
          -webkit-transition: -webkit-transform 250ms ease-in;
          transition: -webkit-transform 250ms ease-in;
          transition: transform 250ms ease-in;
          transition: transform 250ms ease-in, -webkit-transform 250ms ease-in;
        }
        
        .link:hover::after {
          -webkit-transform: scaleX(1);
          transform: scaleX(1);
          -webkit-transform-origin: left;
          transform-origin: left;
        }
        
        @media (min-width: 420px) {
          .nav-container .hamburger-lines {
            display: none;
          }
          nav .menu-items {
            padding-top: 0;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: horizontal;
            -webkit-box-direction: normal;
            -ms-flex-direction: row;
            flex-direction: row;
          }
        }
        
        @media (max-width: 768px) {
          ::-webkit-scrollbar-track {
            margin-top: 0;
          }
        }
        
        @media (min-width: 800px) {
          .nav-container .checkbox,
          .nav-container .hamburger-lines {
            display: none;
          }
          .nav-container {
            max-width: 2000px;
            width: 100%;
            padding: 0 2.5rem;
          }
          nav .menu-items {
            -webkit-transform: translateX(0);
            transform: translateX(0);
            height: 6rem;
            padding: 0;
            margin: 0;
            top: 0;
            left: 0;
            background-color: transparent;
          }
        }
        /*# sourceMappingURL=style.css.map */
        


        `
    }
        </style>
      
    <div>


      <nav>
        <div className="container nav-container">
          <div className="logo">
            <a href="#"><img src="./images/documents2.png" alt="" className="icon" /></a>
          </div>
          <ul className="menu-items">
            <li><a className="link" href="#">Home</a></li>
            <li><a className="link" href="#">Guide</a></li>
            <li><a className="link" href="#">About</a></li>
            <li><a className="link" href="contact.html">Contact us</a></li>
            <li><a className="link" href="#">Login/Sign up</a></li>
            <li><a className="link" href="#">MyProfile</a></li>
          </ul>
        </div>
      </nav> 
    </div>
    </>
  )
}

export default Navbar_prajwal
