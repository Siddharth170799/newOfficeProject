import apiClient from "./apiClient";


export const getUserById = async (id)=>{
    try{
     const response = await apiClient.get(`${id}`)
     return response.data
    }catch(err){
        console.log(err,"error occurred")
  
    }


}

export const createUser = async()=>{
try{
const response = await apiClient.post("")
}catch(err){
console.log(err,"error occurred")
}
}