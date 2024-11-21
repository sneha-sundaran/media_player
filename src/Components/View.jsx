import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Videocard from './Videocard'
import { addVideo, getAllVideo, getSingleCategoryVideo, updateCategory } from '../service/allAppi'

function View({addVideoResponse,deleteVideoCategoryResponse,setdeletevideoviewresponse}) {
const[allvideos,setAllvideos]= useState([])


const[deleteVideoResponse,setDeleteVideoResponse]=useState('')


  useEffect(()=>{


    getVideos()

    //we can't useeffect asyc and awit so we create new function then call it 
   } ,[addVideoResponse,deleteVideoResponse,deleteVideoCategoryResponse])

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

const dragoverview=(e)=>{
  e.preventDefault()
}

const dropCategoryVideo= async(e)=>{
  const{videoDetails,CategoryId}=JSON.parse(e.dataTransfer.getData("dataShare"))
  console.log(videoDetails,CategoryId);


 try{
  const {data}=await getSingleCategoryVideo(CategoryId)
  console.log(data);

    const updateCategoryVideoList= data.getAllVideos.filter(item=>item.id!=videoDetails.id)


   console.log(updateCategoryVideoList);

   const {id,categoryName}=data
   const categoryResult= await updateCategory(id,{id,categoryName,getAllVideos:updateCategoryVideoList})
   console.log(categoryResult.data);
   setdeletevideoviewresponse(categoryResult.data)
   
  await addVideo(videoDetails)
  getVideos()



   
  
 }
 catch(err){
  console.log(err);
  

 }
  
}


  return (
    <>
  {

    allvideos.length>0 ?

   <Row className='border border-3 ms-5'  droppable={true} onDrop={e=>dropCategoryVideo(e)} onDragOver={(e)=>dragoverview(e)} >
    {
      allvideos?.map(video=>(
        <Col key={video?.id}  lg={4} md={6} sm={12} className='pb-5'>
        <Videocard setDeleteVideoResponse={setDeleteVideoResponse} displayData={video} />
        
          </Col>
      ))
    
    }

  </Row>
  :
  <h3 className='text-white'>Nothing to Display</h3>
  }
    </>
  )
}

export default View