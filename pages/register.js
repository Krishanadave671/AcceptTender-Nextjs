import React from 'react'
import Head from 'next/head'

const register = () => {
  return (
      <>
      <style jsx>
          {
        `
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');

*{

    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins',sans-serif;
}

body{
    display: flex;
    margin : 0;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background: linear-gradient(135deg, #71b7e6, #9b59b6);
}

.container{
   transform : translatex(300px);
    max-width: 800px;
    width: 100%;
    background: aliceblue;
    padding: 25px 30px;
    border-radius: 7px;
}

.container .title{
    font-size: 25px;
    font-weight: 500;
    position: relative;
}
.container .subtitle{
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 276px;
    font-size: 20px;
    font-weight: 400;
    position: relative;
}

.container .title::before{
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 3px;
    width: 240px;
    background: linear-gradient(135deg, #71b7e6, #9b59b6);
}

.container form .user-details{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 20px 0 12px 0;
}

form .user-details .input-box{
    margin-bottom: 15px;
    width: calc(100% / 2 - 20px);  
    
}

.user-details .input-box label{
    display: block;
    font-weight: 500;
    margin-bottom: 5px;
}
.user-details .Address{
    
    flex-basis: 100%
}

.user-details .input-box input{
    height: 45px;
    width: 100%;
    outline: none;
    border-radius: 5px;
    border: 1px solid #ccc;
    padding-left: 15px;
    font-size: 15px;
    border-bottom-width: 2px;
    transition: all 0.4s ease;

}

.user-details .input-box input:focus,
.user-details .input-box input:valid{
border-color: #9b59b6;
}

form .gender-details .gender-title{
    font-size: 20px;
    font-weight: 500;
   }
   form .gender-details .category{
     display: flex;
     width: 80%;
     margin: 14px 0 ;
     justify-content: space-between;
   }
   form .category label{
     display: flex;
     align-items: center;
     cursor: pointer;
   }
   form .category label .dot{
    height: 18px;
    width: 18px;
    border-radius: 50%;
    margin-right: 10px;
    background: #d9d9d9;
    border: 5px solid transparent;
    transition: all 0.3s ease;
  }
   #dot-1:checked ~ .category label .one,
   #dot-2:checked ~ .category label .two,
   #dot-3:checked ~ .category label .three{
     background: #9b59b6;
     border-color: #d9d9d9;
   }
   form input[type="radio"]{
     display: none;
   }
   form .button{
      
       height: 45px;
       margin: 30px 0;
   }

   form .button input{
       height: 100%;
       width: 100%;
       outline: none;
       color: #fff;
       border: none;
       font-size: 18px;
       font-weight: 500;
       border-radius: 5px;
       letter-spacing: 1px;
       background: linear-gradient(135deg, #71b7e6, #9b59b6);
   }

   form .button input:hover{
    background: linear-gradient(-135deg, #71b7e6, #9b59b6);
   }



   @media (max-width: 584px) {
    .container{
        max-width: 100%;
    }
    form .user-details .input-box{
        margin-bottom: 15px;
        width: 100%;  
        
    }
    form .gender-details .category{
        width: 100%;
    }

    .container form .user-details{
        max-height: 300px;
        overflow-y: scroll;
    }

    .user-details::-webkit-scrollbar{
        width: 0;
    }
    .outercontainer{
      display:flex;
      justify-content : center;
      width : 100vw;
    }


   }

        `
          }
      </style>
      <div className='outercontainer'>

      
    <div className="container">
    <div className="title">Registration</div>
    <div className="subtitle">Company Details</div>
    <form action="#">
      <div className="user-details">
        <div className="input-box">
          <label htmlFor="details">Company Name</label>
          <input type="text" name id placeholder="Enter Company Name" required />
        </div>
        <div className="input-box">
          <label htmlFor="details">Registration Number</label>
          <input type="text" name id placeholder="Enter Company's R.No" required />
        </div>
        <div className="input-box">
          <label htmlFor="details">Email</label>
          <input type="text" name id placeholder="Correspondence email" required />
        </div>
        <div className="input-box">
          <label htmlFor="details">Phone Number</label>
          <input type="number" name id placeholder=" Registered Number of the Company" required />
        </div>
        <div className="input-box Address">
          <label htmlFor="details">Registered Address</label>
          <input type="text" name id placeholder="Enter Registered Address" required />
        </div>
        <div className="input-box">
          <label htmlFor="details">City</label>
          <input type="text" name id placeholder required />
        </div>
        <div className="input-box">
          <label htmlFor="details">State</label>
          <input type="text" name id placeholder required />
        </div>
        <div className="input-box">
          <label htmlFor="details">Postal Code</label>
          <input type="number" name id placeholder required />
        </div>
        <div className="input-box">
          <label htmlFor="details">TAN/PAN Number</label>
          <input type="text" name id placeholder="10 characters" required />
        </div>
        <div className="input-box">
          <label htmlFor="details">Establishment Year</label>
          <input type="text" name id placeholder="Company Establishment Year" required />
        </div>
        <div className="subtitle">Contact Details</div>
        <div className="input-box">
          <label htmlFor="details">Contact Name</label>
          <input type="text" name id placeholder="Company's Contact Person" required />
        </div>
        <div className="input-box">
          <label htmlFor="details">Date Of Birth </label>
          <input type="date" name id placeholder required />
        </div>
        <div className="input-box">
          <label htmlFor="details">Designation</label>
          <input type="text" name id placeholder="Engineer ..." required />
        </div>
        <div className="input-box">
          <label htmlFor="details">Phone Number</label>
          <input type="text" name id placeholder required />
        </div>
        <div className="input-box">
          <label htmlFor="details"> Password</label>
          <input type="text" name id placeholder="Password" required />
        </div>
        <div className="input-box">
          <label htmlFor="details">Confirm Password</label>
          <input type="text" name id placeholder="Confirm Password" required />
        </div>
      </div>
      <div className="gender-details">
        <input type="radio" name="gender" id="dot-1" />
        <input type="radio" name="gender" id="dot-2" />
        <input type="radio" name="gender" id="dot-3" />
        <span className="gender-title">Gender</span>
        <div className="category">
          <label htmlFor="dot-1">
            <span className="dot one" />
            <span className="gender">Male</span>
          </label>
          <label htmlFor="dot-2">
            <span className="dot two" />
            <span className="gender">Female</span>
          </label>
          <label htmlFor="dot-3">
            <span className="dot three" />
            <span className="gender">Prefer not to say</span>
          </label>
        </div>
      </div>
      <div className="button">
        <input type="submit" defaultValue="Register" />
      </div>
    </form>
  </div>
  </div>
  </>
  )
}

export default register