import React from 'react'
import { Card } from 'react-bootstrap'

 import { useState } from 'react';
 import Modal from 'react-bootstrap/Modal';
import { deleteVideo, saveHistory } from '../service/allAppi';

 
function Videocard({displayData,setDeleteVideoResponse}) {
  
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = async()  =>
      {
        const {caption,YoutubeLink}=displayData
        const localTime=new Date()
        console.log(localTime);
        
       const formateData=localTime.toLocaleString()
       const videoHistroy={caption,YoutubeLink,formateData}
        
       try{
        await saveHistory (videoHistroy)

       }catch(err){
        console.log(err);
        
       }


        setShow(true);
      } 

    const handleRmovevideo=async(videoId)=>{
      try{
        const result=await deleteVideo(videoId)
        console.log(result);
        setDeleteVideoResponse(result.data)
        
      }
      catch(err)
      {
        console.log(err);
        
      }

    }
  return (
    <>
    
     <Card style={{ width: '11rem', height:'14rem'}}>
      <Card.Img variant="top" src={displayData?.imageUrl} onClick={handleShow} style={{height:'10rem', width:'11rem'}} />
      <Card.Body>
      
        <Card.Text>
         
        <h5 className='text-white ' style={{}}>{displayData?.caption} <i className="fa-solid fa-trash" style={{fontSize:'19px'}} onClick={()=>handleRmovevideo(displayData?.id)}></i></h5>
        </Card.Text>
      </Card.Body>
    </Card>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Your video</Modal.Title>
        </Modal.Header>
        <Modal.Body><iframe width="470" height="315" src={`${displayData?.YoutubeLink}?autoplay=1`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></Modal.Body>
      
      </Modal>
    
    </>

  )
}

export default Videocard