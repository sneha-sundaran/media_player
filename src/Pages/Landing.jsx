import React from 'react'
import music from '../assets/giphy.gif'
import Card from 'react-bootstrap/Card';
import settings from '../assets/settings.png'

import cartegories from '../assets/categorie.png'
import historyimg from '../assets/history_img.png'
import { Link } from 'react-router-dom';
function Landing() {
  return (
    <div className='landing'>

      <div>
        <h4  className='ms-5 mt-4 ' style={{height:'40px',width:'140px' ,backgroundColor:'white',textAlign:'center',borderRadius:'20px',color:'rgb(42, 161, 152)'}} ><Link to={'/home'} id='itemsLink' style={{textDecoration:'none'}}>Get start</Link></h4>
      </div>
      <div className="row align-item-center my-5">
        <div className="col-lg-6 ">
      
          <h3 style={{color:'white'}}className='ms-5'>
            Welcome to <span className='text-rgb(14, 50, 47) 'style={{fontFamily:'"Dancing Script","serif"'}} >Music Player</span>
          </h3>
          <p style={{textAlign:'justify',marginLeft:'50px'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut ipsam quia cupiditate odit dolorum laborum ducimus eaque temporibus modi perferendis eligendi optio magnam mollitia, ad minima labore illum delectus a?</p>
        </div>
        <div className='col-lg-6'>
          <img src={music} alt="" style={{height:'300px', width:'350px' ,marginLeft:'90px'}} />
        </div>
      </div>
      <div className='container my-5 d-flex '>

        <div className="row ms-5 ">
          <div className="col-lg-4 pt-5"><Card className='border border-3' style={{ width: '18rem', height:'400px' }}>
        <Card.Img variant="top" src={settings} style={{height:'200px', width:'250px', marginTop:'20px'}}/>
        <Card.Body>
        <Card.Title  style={{color:'white'}}>Managing video</Card.Title>
        <Card.Text  style={{color:'white'}}>
         video management system involves building an interface for users to upload, view, and delete videos.
        </Card.Text>
      
        </Card.Body>
         </Card></div>

           <div className="col-lg-4 pt-5 "><Card  className='border border-3' style={{ width: '18rem', height:'400px' }}>
        <Card.Img variant="top" src={cartegories}style={{height:'200px', width:'250px'  ,marginTop:'20px'}} />
        <Card.Body>
        <Card.Title  style={{color:'white'}}> Categorize video</Card.Title>
        <Card.Text   style={{color:'white'}}>
        users to categorize videos, you can add functionality for assigning categories to each video upon upload or through an editing feature. 
         
        </Card.Text>
      
       </Card.Body>
     </Card></div>
          <div className="col-lg-4 pt-5"><Card  className='border border-3' style={{ width: '18rem', height:'400px' }}>
      <Card.Img variant="top" src={historyimg}style={{height:'150px', width:'150px', marginLeft:'60px', marginTop:'20px'}} />
      <Card.Body style={{paddingTop:'60px'}}>
        <Card.Title  style={{color:'white'}}>Managing History</Card.Title>
        <Card.Text  style={{color:'white'}}>
        Managing a watch history for videos allows users to see which videos they’ve already watched, along with details
        </Card.Text>
      
      </Card.Body>
    </Card></div>
        </div>
      </div>
      <div className='container my-5 border border-3  border-white p-5 '>
        <div className="row ">
          <div className="col-lg-6 " >

<h2  style={{color:'white'}}>Simple ,Fast And Powerful</h2> <br />
<p className='text-white'><span style={{fontWeight:'bold',color:'white'}}>Playing evering:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum a quidem, assumenda reiciendis incidunt alias consequuntur non dolorem deleniti repellat, maxime odit aperiam, numquam modi eligendi. Similique sit perspiciatis aperiam.</p>
<p className='text-white'><span style={{fontWeight:'bold',color:'white'}} >Categorize video</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum a quidem, assumenda reiciendis incidunt alias consequuntur non dolorem deleniti repellat, maxime odit aperiam, numquam modi eligendi. Similique sit perspiciatis aperiam.</p>
<p className='text-white'><span style={{fontWeight:'bold',color:'white'}}> Managing History:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum a quidem, assumenda reiciendis incidunt alias consequuntur non dolorem deleniti repellat, maxime odit aperiam, numquam modi eligendi. Similique sit perspiciatis aperiam.</p>
          </div>
          <div className="col-lg-6 " style={{paddingLeft:'10px'}}>  
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/iRGW3Hve-ao?si=l8PXQxJjXRiAQ1nJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen ></iframe>
          </div>
        </div>
      </div>
   


    </div>

  )
}

export default Landing