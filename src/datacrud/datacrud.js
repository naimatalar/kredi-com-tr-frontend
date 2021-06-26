import React from 'react'
import Axios from 'axios'


// export const apiConstant = "https://api.kredi.com.tr";
export const apiConstant = "http://localhost:65062";

export const apiurl =  apiConstant+"/StaticF" ;

const apiUrl = apiConstant+"/api/";

export const GetNoneToken = async (url) => {
    
    const headers =
    {
        headers: {
            'Content-Type': 'application/Json',
            
        }
    }
    try {
         return Axios.get(apiUrl + url, headers)
    } catch (error) {
      

    }
    
}
export const PostNoneToken = async (url,data) => {
    
    const headers =
    {
        headers: {
            'Content-Type': 'application/Json',
            
        }
    }
    try {
        
        return Axios.post(apiUrl + url,data, headers)
    } catch (error) {
       
   }
}