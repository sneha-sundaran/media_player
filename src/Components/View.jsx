import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Videocard from './Videocard'
import { getAllVideo } from '../service/allAppi'


function View({addVideoResponse}) {
const[allvideos,setAllvideos]= useState([])
const[deleteVideoResponse,setDeleteVideoResponse]=useState('')


  useEffect(()=>{


    getVideos()
    //we can't useeffect asyc and awit so we create new function then call it 
   } ,[addVideoResponse,deleteVideoResponse])

  console.log(allvideos);


 const getVideos =async()=>{

   try{

    const result = await getAllVideo()
    console.log(result.data);
    setAllvideos(result.data)

   }catch(err){
    console.log(err);
    
   }
  }
//show th data
//do api call 


  return (
    <>
  {
    allvideos.length>0 ?

   <Row className='border border-3 ms-5'  >
    {
      allvideos?.map(video=>(
        <Col key={video?.id}  lg={4} md={6} sm={12} className='pb-5'>
        <Videocard setDeleteVideoResponse={setDeleteVideoResponse} displayData={video} />
        
          </Col>
      ))
    
    }

  </Row>
  :
  <div className='text-dangers'>Nothing to displaye</div>
  }
    </>
  )
}

export default View