import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
 <div  className='footer text-white ms-5'>
    <div className="row ">
        <div className='col-lg-3' >
        <div className='d-flex'>  <i class='bx bx-music' id='icon' style={{fontWeight:'bold',fontSize:'27px'}}> <span style={{fontFamily:'"Dancing Script","serif"',fontWeight:'bold',fontSize:'27px'}}> Music Player</span></i> </div>
          <br />
          <p id='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ea officiis iusto consequatur deleniti atque incidunt modi excepturi cumque eligendi cupiditate, libero temporibus, voluptatum, reiciendis molestias quasi molestiae odit aspernatur! <br/><br/>
        <p>code is licenced by <b>luminar</b></p>
       <p>currently v5.3.2</p>
        </p>
         </div>
        <div  className='col-lg-3'><h2 id='head'>Links</h2>
        <div id='items'>

      
          <div><Link to={'/'}  id='itemsLink'style={{textDecoration:'none',color:'white'}} >Landing</Link></div>
          <div ><Link to={'/home'} id='itemsLink' style={{textDecoration:'none',color:'white'}}>Home</Link></div>
          <div ><Link to={'/history' }  id='itemsLink'style={{textDecoration:'none',color:'white'}}>History</Link></div>
         
      
        </div>
        </div>
        <div  className='col-lg-3'> <h2 id='head'>Guids</h2>
        <div id='items'>
        <div><Link to={'/'}  id='itemsLink' style={{textDecoration:'none',color:'white'}}>React</Link></div>
          <div ><Link to={'/home'} id='itemsLink'style={{textDecoration:'none',color:'white'}}>react bootstrap</Link></div>
          <div ><Link to={'/history' }  id='itemsLink'style={{textDecoration:'none',color:'white'}}>Watch router</Link></div>
        </div>
         </div>
        <div  className='col-lg-3'><h2 id='head'>Contact Us</h2>
        <input type="text" placeholder='Enter your Email' id='cInput' /> <button id='btn-contact'><i className='bx bx-right-arrow-alt' ></i></button>
        <div className='iconss pt-4 '>
        <i className='bx bxl-facebook-circle'></i>
        <i className='bx bxl-twitter ms-3' ></i>
        <i className='bx bxl-instagram  ms-3' ></i>
        <i className='bx bxl-linkedin  ms-3' ></i>
        <i className='bx bxl-github  ms-3' ></i>
        <i className='bx bx-phone  ms-3' ></i>
        </div>
        </div> 
    </div>
    <div className='copy'>
      <p>Copy right &copy; Media</p>
    </div>
 </div>
  )
}

export default Footer

// .footer{
   
//   width: 100%;
//   background-color: white;
//   padding-left: 60px;
 
// }
// .row{
//   display: flex;
//   flex-wrap: wrap;
//   color: rgb(37, 130, 123) ;
//   height: 250px;
//   width: 100%;
  
// }
// .first-col{
//   flex: 2;
//   height: 150px;
//   width: 150px;

// }
// .second-col{
//   flex: .5;
//   height: 150px;
//   width: 150px;
 
// }
// .third-col{
//   flex: .5;

// }
// .forth-col{
//   flex: 1.5;
// }
// #icon{
//   color: rgb(37, 130, 123) ;
//   font-size: 40px;
// }
// #description{
//   color: rgb(37, 130, 123);
// }

// #head{

//   color: rgb(37, 130, 123) ;

// }

// #itemsLink{
// text-decoration: none;
// color: rgb(37, 130, 123);
// font-weight: 900;
// }
// #cInput{
//   background-color:rgb(14, 50, 47) ;
//   height: 30px;
//   width: 200px;
//   color: white;
//   border-radius: 5px;
//   margin-top: 15px;
//   border: none;
// }
// #btn-contact{
//   height: 30px;
//   width: 30px;
//   border-radius: 5px;
//   background-color: rgb(14, 50, 47);
//   border: none;
//   color: white;
// }
// .iconss i{
//  margin-left: 10px;
//  font-size: 20px;
//  height: 28px;
//  width: 28px;
//  border-radius: 50%;
//  background-color: rgb(14, 50, 47);
//  color: white;
//  padding-left: 4px;
//  padding-top: 4px;
//  margin-top: 15px;
// }
// .copy{
//   color: rgb(37, 130, 123);
//   font-weight: 900;
// text-align: center;
// padding-top: -50px;
// }