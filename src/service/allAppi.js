import commonAPI from "./commonApi";
import SERVER_URL from "./serverUrl";


//save video
// save video api by add.jsx

export const addVideo=async(video)=>{
    return await commonAPI("POST",`${SERVER_URL}/allVideo`,video)

}
//view vido in videocard
export const getAllVideo=async()=>{
    
    return await commonAPI("GET",`${SERVER_URL}/allVideo`,"")
}

//delete video

export const deleteVideo=async(videoId)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/allVideo/${videoId}`,{})
}


export const saveHistory=async(video)=>{
    return await commonAPI("POST",`${SERVER_URL}/history`,video)

}
export const getAllHistory=async()=>{
    
    return await commonAPI("GET",`${SERVER_URL}/history`,"")
}
export const deleteHistory=async(videoId)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/history/${videoId}`,{})
}
export const addCategory=async(CategorieDetails)=>{
    return await commonAPI("POST",`${SERVER_URL}/allCategories`,CategorieDetails)

}
//show category
export const getAllCategory=async()=>{
    return await commonAPI("GET",`${SERVER_URL}/allCategories`,"")

}
//delete category
export const deleteCategory=async(categoryId)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/allCategories/${categoryId}`,{})
}

export const getSingleVideo=async(videoId)=>{
    return await commonAPI("GET",`${SERVER_URL}/allVideo/${videoId}`,"")

}
export const updateCategory=async(categoryId,categoryDetails)=>{
    return await commonAPI("PUT",`${SERVER_URL}/allCategories/${categoryId}`,categoryDetails)

}

//api call for getting
export const getSingleCategoryVideo=async(categoryId)=>{
    return await commonAPI("GET",`${SERVER_URL}/allCategories/${categoryId}`,"")

}
