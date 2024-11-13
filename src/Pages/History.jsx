import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistory, getAllHistory } from '../service/allAppi'



function History() {

 const [videosHistory,setVideoHistoy]=useState([])
 
  console.log(videosHistory);



 useEffect(()=>{


 getHistory()
 },[])

 const getHistory=async()=>{
  try{
    const result=await getAllHistory()


    console.log(result.data);

    
  setVideoHistoy(result.data)
    
  }
catch (err){
console.log(err);

}
 }

 const delHistory=async(videoId)=>{
  try{
    await deleteHistory(videoId)
    getHistory()
  }
catch(err){
  console.log(err);
  
}
 }

  return (
   <div className="container text-white">

  <div className='headsection d-flex justify-content-between'>  <h3>Watch History</h3>
  <Link to={'/Home'}></Link> Back To Home</div>
    <table className='table '>
      <thead>
        <tr>
          <th>#</th>
          <th>Caption</th>
          <th>Link</th>
          <th>Date</th>
          <th><i className="fa-solid fa-ellipsis"></i></th>
       
        </tr>
      </thead>
      <tbody>

        {
          videosHistory.length>0 ?
          videosHistory?.map((item,index)=>(
            <tr key={item?.id}> 
            <td>{index+1}</td>
            <td>{item?.caption}</td>
            <td><a href={item?.YoutubeLink} target='_blank'>{item?.YoutubeLink}</a></td>
            <td>{item?.formateData}</td>
            <td><button onClick={()=>delHistory(item?.id)}><i  className="fa-solid fa-trash"></i></button></td>
          </tr>

          )):
          <div>nothing to display</div>
        }
       
      </tbody>
    </table>
   </div>


  )
}

export default History