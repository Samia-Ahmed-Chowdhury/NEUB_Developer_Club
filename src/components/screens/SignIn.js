import React,{useState,useContext,} from 'react'
import {Link,useHistory} from 'react-router-dom'
import {UserContext} from '../../App'
import M from 'materialize-css'
import './Login.css'
import welcome from '../screens/welcome.png'

const SignIn  = ()=>{
    const {state,dispatch} = useContext(UserContext)
    const history = useHistory()
    const [password,setPasword] = useState("")
    const [email,setEmail] = useState("")
    const [error, setError] = useState('');
   
    const PostData = ()=>{
   
        fetch("/signin",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                password,
                email
            })
        }).then(res=>res.json())
        .then(data=>{
            console.log(data)
           if(data.error){
              M.toast({html: data.error,classes:"#c62828 red darken-3"})
           }
           else{
               localStorage.setItem("jwt",data.token)
               localStorage.setItem("user",JSON.stringify(data.user))
               dispatch({type:"USER",payload:data.user})
               M.toast({html:"signedin success",classes:"#43a047 green darken-1"})
               history.push('/home')
           }
        }).catch(err=>{
            console.log(err)
        })


        // localStorage.setItem('username', name);
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
      window.location.reload();
      setError('');
    }


    return (
        <>
            <div class="wrapper"> 
     <div class="sign"
     style={{
         marginLeft:"-100px",
         marginTop:"-9px"
     }}
     >
            
                <img src={welcome} alt="" />
          
        </div> 
        <div class="form"
        style={{
            marginLeft:"450px",
            marginTop:"-650px"
            

        }}
        >
            <h2 class="login">Login</h2>
            <div class="form-bg">
                <form method="POST">
            

        
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
             



                    <br/>
                    <a class="login-link" href="/signup">Don't have an account ?</a>
                  <br/>
                 <div class="submit-btns">
                     <button class="mtr-btn signup" name="submit" type="submit" onClick={PostData}>
                         <span>Login</span>
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


    
//    return (
//       <div className="mycard">
//           <div className="card auth-card input-field">
//             <h2>Instagram</h2>
//             <input
//             type="text"
//             placeholder="email"
//             value={email}
//             onChange={(e)=>setEmail(e.target.value)}
//             />
//             <input
//             type="password"
//             placeholder="password"
//             value={password}
//             onChange={(e)=>setPasword(e.target.value)}
//             />
//             <button className="btn waves-effect waves-light #64b5f6 blue darken-1"
//             onClick={()=>PostData()}
//             >
//                 Login
//             </button>
//             <h5>
//                 <Link to="/signup">Dont have an account ?</Link>
//             </h5>
//             <h6>
//                 <Link to="/reset">Forgot password ?</Link>
//             </h6>
    
//         </div>
//       </div>
//    )
}


export default SignIn