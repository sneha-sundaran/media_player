import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { FloatingLabel, Form } from 'react-bootstrap';
import { addVideo } from '../service/allAppi';
import { ToastContainer, toast } from 'react-toastify';



{/* <iframe width="660" height="371" src="https://www.youtube.com/embed/tOM-nWPcR4U" title="Illuminati|Aavesham|Jithu Madhavan|Fahadh Faasil|Sushin Shyam,Dabzee,Vinayak| Nazriya|Anwar Rasheed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}

function Add({setaddVideoResponse}) {

const[videoDetails,setVideoDetails]=useState({caption:"",imageUrl:"",YoutubeLink:""})

console.log(videoDetails);




  const [show, setShow] = useState(false);

  const [invalidUrl,setinvalidUrl]=useState(false)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const getEmbedUrl=(link)=>{
    if(link.includes("v=")){
      let videoId=link.split("v=")[1].slice(0,11)
      setVideoDetails({...videoDetails,YoutubeLink:`https://www.youtube.com/embed/${videoId}`})

      console.log(videoId)
      setinvalidUrl(false)
      
    }
    else{

     setVideoDetails({...videoDetails,YoutubeLink:''})
    setinvalidUrl(true)
     
     
     
    }

  }
  const handleUpload=async()=>{
    const{caption,imageUrl,YoutubeLink}=videoDetails
      if(caption && imageUrl && YoutubeLink){
     try{
      const result=await addVideo(videoDetails)
      setaddVideoResponse(result.data)
     
      if(result.status>=200 && result.status <300){
        toast.success(`${result.data.caption} added` )
        handleClose()
        setVideoDetails("")
      }
      


     }
     catch(er){

      console.log(er);
      

     }
        
      }
      else{
       toast.warning("enter the field complete")
      }
    
  }
  return (
    <>
    <div className='container d-flex align-items-center text-white'>
      <h3>Upload Video</h3>
     <button className='btn ' style={{borderRadius:'50%', backgroundColor:'white', color:' rgb(14, 50, 47)'}}  onClick={handleShow}> <i className="fa-solid fa-plus"></i></button>
      

  
    </div>


    
    <Modal
    show={show}
    onHide={handleClose}
    backdrop="static"
    keyboard={false}
  >
    <Modal.Header closeButton>
      <Modal.Title> Add Videoss</Modal.Title>
    </Modal.Header>
    <Modal.Body>
     Please fill the following featues
     <div className='border border-3 border-info rounded p-3'>

      {/* caption */}
     <FloatingLabel
        controlId="floatingInput"
        label="Video Caption"
        className="mb-3"
      >
        <Form.Control onChange={e=>setVideoDetails({...videoDetails ,caption:e.target.value})} type='text' placeholder='enter the video caption'></Form.Control>
        </FloatingLabel>

{/* Imgeurl */}
        <FloatingLabel
        controlId="floatingInput"
        label="image Url"
        className="mb-3"
      >
        <Form.Control onChange={e=>setVideoDetails({...videoDetails ,imageUrl:e.target.value})} type='text' placeholder='enter the image Url '></Form.Control>
        </FloatingLabel>

        {/* youtubelink */}
        <FloatingLabel
        controlId="floatingInput"
        label="Youtube Link"
        className="mb-3"
      >

        
        <Form.Control onChange={e=>getEmbedUrl(e.target.value)} type='text' placeholder='enter the Youtube Link'></Form.Control>
        </FloatingLabel>
       
{
    invalidUrl &&
     
    <div className='danger'>
      invalid url
    </div>
}
    
     </div>
    </Modal.Body>
    
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
      Cancel
      </Button>
      <Button variant="primary" onClick={handleUpload}>Uplaod</Button>
    </Modal.Footer>
   
  </Modal>


  </>
  )

}

export default Add