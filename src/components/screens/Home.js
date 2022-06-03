import React,{useState,useEffect,useContext} from 'react'
import {UserContext} from '../../App'
import {Link} from 'react-router-dom'
import NavBar from '../Navbar'




const Home  = ()=>{

    

    const [data,setData] = useState([])
    const {state,dispatch} = useContext(UserContext)
    useEffect(()=>{
       fetch('/allpost',{
           headers:{
               "Authorization":"Bearer "+localStorage.getItem("jwt")
           }
       }).then(res=>res.json())
       .then(result=>{
           console.log(result)
           setData(result.posts)
       })
    },[])

 

    const makeComment = (text,postId)=>{
          fetch('/comment',{
              method:"put",
              headers:{
                  "Content-Type":"application/json",
                  "Authorization":"Bearer "+localStorage.getItem("jwt")
              },
              body:JSON.stringify({
                  postId,
                  text
              })
          }).then(res=>res.json())
          .then(result=>{
              console.log(result)
              const newData = data.map(item=>{
                if(item._id==result._id){
                    return result
                }else{
                    return item
                }
             })
            setData(newData)
          }).catch(err=>{
              console.log(err)
          })
    }

    const deletePost = (postid)=>{
        fetch(`/deletepost/${postid}`,{
            method:"delete",
            headers:{
                Authorization:"Bearer "+localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
        .then(result=>{
            console.log(result)
            const newData = data.filter(item=>{
                return item._id !== result._id
            })
            setData(newData)
        })
    }
   return (

<>
<NavBar/>

       <div className="home">

       <br/>
           {
               data.map(item=>{
                   return(
                       <div className="card home-card" key={item._id}>
                            <h5 style={{padding:"5px"}}><Link to={item.postedBy._id !== state._id?"/profile/"+item.postedBy._id :"/profile"  }>{item.postedBy.name}</Link> {item.postedBy._id == state._id 
                            && <i className="material-icons" style={{
                                float:"right"
                            }} 
                            onClick={()=>deletePost(item._id)}
                            >delete</i>

                            }</h5>
                        
                            <div className="card-content">
                            
                       
                                <p style={{fontWeight:"bold",fontSize:"20px"}}>{item.body}</p>
                               <br/> <div className="card-image">
                                <img src={item.photo}/>
                            </div><br/>
                            <i className="material-icons" style={{color:"red"}}>favorite</i>
                            <br/>
                                {
                                    item.comments.map(record=>{
                                        return(
                                           
                                        <h6 key={record._id}><span style={{fontWeight:"bold",color:"#FA6E5E" }}>{record.postedBy.name} </span> <span style={{fontWeight:"bold",color:"#58A3F2" ,fontSize:"20px"}}> : </span> {record.text}</h6>
                                     
                                        
                                        )
                                    })
                                }

                              


                                <form onSubmit={(e)=>{
                                    e.preventDefault()
                                    makeComment(e.target[0].value,item._id)
                                }}>
                                  <input type="text" placeholder="add a comment" />  
                                </form>
                                
                            </div>
                        </div> 
                   )
               })
           }
          
          
       </div>
       </>
   )
}


export default Home