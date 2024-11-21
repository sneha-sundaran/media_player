import React, { useState } from 'react'
import Add from '../Components/Add'
import { Link } from 'react-router-dom'
import View from '../Components/View'
import Category from '../Components/Category'



function Home() {
  const [addVideoResponse,setaddVideoResponse]=useState('')
  const [ deleteVideoCategoryResponse,setDeleteVideoCategoryResponse]=useState("")
  const[deletevideoviewresponse,setdeletevideoviewresponse]=useState('')


  return (
  <>

<div className="container d-flex justify-content-between " >
  
        <Add setaddVideoResponse={setaddVideoResponse}/>

        <Link to={'/History'} style={{textDecoration:'none', color:'white'}}> Watch History</Link>
      
       
    </div>



          <div className="row">
            <div className="col-6">
            <h4 className='text-white'>All videos</h4>
            <View addVideoResponse={addVideoResponse} deleteVideoCategoryResponse={deleteVideoCategoryResponse} setdeletevideoviewresponse={setdeletevideoviewresponse}/>
            

            </div>
            <div className="col-6">
            < Category setDeleteVideoCategoryResponse={setDeleteVideoCategoryResponse} deletevideoviewresponse={deletevideoviewresponse}/>
              
            
              </div>
          </div>
       
  </>

    
  )
}

export default Home