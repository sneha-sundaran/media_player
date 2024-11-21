import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import { addCategory, deleteCategory, deleteVideo, getAllCategory, getSingleVideo, updateCategory } from '../service/allAppi';
import Videocard from './Videocard';


function Category({setDeleteVideoCategoryResponse,deletevideoviewresponse}) {
  const [show, setShow] = useState(false);

  const[categoryName,setCategoryName]=useState("")

  console.log(categoryName);


  const[showCategories,setShowCategories]=useState([])
  console.log(showCategories);
  

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {

  getCate()
  
    
  }, [deletevideoviewresponse])
  

  const handleAddCategory=async()=>{

    if(categoryName){

      try{
       await addCategory({categoryName,getAllVideos:[]})
       handleClose()
       getCate()
       setCategoryName("")

      }
      catch(err){
        console.log(err);
        

      }

    }else{

      toast.warning('enter category name')

    }
  }
  const getCate=async()=>{
    try{

   const result= await getAllCategory()
    setShowCategories(result.data)

    }
    catch(err)
{ console.log(err);
}

  }

  const delcategory=async(categoryId)=>{
    console.log(categoryId);
    
   try{
    await deleteCategory(categoryId)
    getCate()
   }
   catch(err){
    console.log(err);
    
   }
  }



  const  videoDropped= async(e,categoryId,get)=>{

    console.log(`video droperd ${categoryId}`);

    const videoId= e.dataTransfer.getData('videoId')
    console.log(`draged video with id ${videoId} and dropwed ${categoryId}`);


    try{
  const {data}=await  getSingleVideo(videoId)
  console.log(data);
 const selectetCategory=showCategories.find(item=>item.id==categoryId)

 selectetCategory.getAllVideos.push(data)
 console.log(selectetCategory);
 await updateCategory(categoryId,selectetCategory)
 getCate()

const result=deleteVideo(videoId)
setDeleteVideoCategoryResponse(result.data)
  
    }
    catch(err){
      console.log(err);
      
    }
    
    
  }

  const dragOverCategory=(e)=>{
    e.preventDefault()
  }

  const dragstarted=(e,videoDetails,CategoryId)=>{

    console.log(` drag videos in category${videoDetails},${CategoryId}`);
     const dataShare={videoDetails,CategoryId}

    e.dataTransfer.setData("dataShare",JSON.stringify(dataShare))
    

  }
  return (
    <>

<div className='d-flex'>    <h4  className='text-white'> All Category</h4>
<button className='btn ' onClick={handleShow} style={{borderRadius:'50%', backgroundColor:'white', color:' rgb(14, 50, 47)'}} > <i className="fa-solid fa-plus"></i></button>
</div>
<div className='container-fluid mt-3  text-white '>
{
  showCategories.length>0?
  showCategories?.map(category=>(
  
    <div droppable={true}   onDragOver={(e)=>dragOverCategory(e)} onDrop={(e)=>videoDropped(e,category?.id)} className='border border border-light  border-3 rounded p-3 mb-3'>
      <div className='d-flex justify-content-between'>
        <h6 > {category.categoryName}</h6>
        <button className='btn' onClick={()=>delcategory(category.id)}> <i className='fa solid fa-trash' style={{color:"red"}}></i></button>
      </div>

      <div className='row mt-3'>
      {
        category.getAllVideos.length>0 &&

        category.getAllVideos?.map(video=>(
          <div className='col-lg-6'   draggable={true} onDragStart={(e)=>dragstarted(e,video,category.id)}>
          <Videocard displayData={video} insideCategory={true}/>

        </div>

        ))
        
      }
      </div>
  
    </div>
  
 
  ))
 :
 <div > <p>Nothing to diaplay</p></div>

}
</div>
<Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title style={{color:'white'}}>Category details</Modal.Title>
        </Modal.Header>
        <Modal.Body >
       <div className='p-2 border border-3 border-info rounded'>
       <FloatingLabel
        controlId="categoryId"
        label="category name"
        className="mb-3"
      >
        <Form.Control onChange={(e)=>setCategoryName(e.target.value)} type="text" placeholder="Category" />
      </FloatingLabel>
       </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAddCategory}>Add</Button>
        </Modal.Footer>
      </Modal>

       <ToastContainer position="top-right" autoClose={5000}
theme="colored"/>
    </>
  )
}

export default Category