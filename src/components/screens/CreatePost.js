import React,{useState,useEffect} from 'react'
import M from 'materialize-css'
import {useHistory} from 'react-router-dom'
import NavBar from '../Navbar'

const CretePost = ()=>{
    const history = useHistory()
  
    const [body,setBody] = useState("")
    const [image,setImage] = useState("")
    const [url,setUrl] = useState("")
    useEffect(()=>{
       if(url){
        fetch("/createpost",{
            method:"post",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            },
            body:JSON.stringify({
              
                body,
                pic:url
            })
        }).then(res=>res.json())
        .then(data=>{
    
           if(data.error){
              M.toast({html: data.error,classes:"#c62828 red darken-3"})
           }
           else{
               M.toast({html:"Created post Successfully",classes:"#43a047 green darken-1"})
               history.push('/home')
           }
        }).catch(err=>{
            console.log(err)
        })
    }
    },[url])
  
   const postDetails = ()=>{
       const data = new FormData()
       data.append("file",image)
       data.append("upload_preset","NEUB_Developers_Network")
       data.append("cloud_name","samweb")
       fetch("https://api.cloudinary.com/v1_1/samweb/image/upload",{
           method:"post",
           body:data
       })
       .then(res=>res.json())
       .then(data=>{
          setUrl(data.url)
       })
       .catch(err=>{
           console.log(err)
       })

    
   }
 

   return(
       <>
       <NavBar/>
       <div className="card input-filed"
       style={{
           margin:"30px auto",
           maxWidth:"500px",
           padding:"20px",
           textAlign:"center",
            height:"200px",
            border: "3px",


       }}
       >
    
           <input
            type="text"
             placeholder="                                Write something!!!"
             value={body}
            onChange={(e)=>setBody(e.target.value)}
             />
           <div className="file-field input-field">
            <div className="btn #58A3F2 ">
                <span>Uplaod Image</span>
                <input type="file" onChange={(e)=>setImage(e.target.files[0])} />
            </div>
            <div className="file-path-wrapper">
                <input className="file-path validate" type="text" />
            </div>
            </div>
            <button  className="btn #FA6E5E " onClick={()=>postDetails() }
            
            >
                Submit post
            </button>

       </div>
       </>
   )
}


export default CretePost