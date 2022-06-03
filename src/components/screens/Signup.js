import React,{useState,useEffect} from 'react'
import {Link,useHistory} from 'react-router-dom'
import M from 'materialize-css'
import './Signup.css'
import welcome from '../screens/welcome.png'

const Signup  = ()=>{
    const history = useHistory()
    const [name,setName] = useState("")
    const [password,setPasword] = useState("")
    const [email,setEmail] = useState("")
    const [image,setImage] = useState("")
    const [url,setUrl] = useState(undefined)
    useEffect(()=>{
        if(url){
            uploadFields()
        }
    },[url])
    const uploadPic = ()=>{
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
    const uploadFields = ()=>{
      
        fetch("/signup",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,
                password,
                email,
                pic:url
            })
        }).then(res=>res.json())
        .then(data=>{
           if(data.error){
              M.toast({html: data.error,classes:"#c62828 red darken-3"})
           }
           else{
               M.toast({html:data.message,classes:"#43a047 green darken-1"})
               history.push('/signin')
           }
        }).catch(err=>{
            console.log(err)
        })
    }
    const PostData = ()=>{
        if(image){
            uploadPic()
        }else{
            uploadFields()
        }
       
    }



    return (
        <>
            <div class="wrapper"> 
     <div class="sign" style={{
         marginLeft:"-100px"
     }}>
            
                <img src={welcome} alt="" />
          
        </div> 
   <div class="sign-form">
            <h2>Signup</h2>
            <div class="sign-form-bg">
                <form method="POST">
                <div class="form-group">
                    <label class="control-label">Full Name</label><br/>
                    <input
            type="text" required  
            placeholder="name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            />
                   
                 </div>

        
                 <div class="form-group">
                    <label class="control-label">Email</label><br/>
                    <input
            type="text" required  
            placeholder="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
                    
                   
                 </div>
                 <div class="form-group">
                    <label class="control-label">Password</label><br/>
                    <input
            type="password" required  
            placeholder="password"
            value={password}
            onChange={(e)=>setPasword(e.target.value)}
            />
                    
                 </div>
                 <div className="file-field input-field">
            <div className="btn #64b5f6 blue darken-1">
                <span>Upload pic</span>
                <input type="file" onChange={(e)=>setImage(e.target.files[0])} />
            </div>
            <div className="file-path-wrapper">
                <input className="file-path validate" type="text" />
            </div>
            </div>



                    <br/>
                 <a class="login-link"  href="/signin">Already have an account</a>
                  <br/>
                 <div class="submit-btns">
                     <button class="mtr-btn signup" name="submit" type="submit" onClick={PostData}>
                         <span>Register</span>
                     </button>
                 </div>
                     
            </form>  
            </div> 
            <br/>
       </div> 

    
    </div> 
    <br/>
    <br/>

  


        </>

   )


}


export default Signup