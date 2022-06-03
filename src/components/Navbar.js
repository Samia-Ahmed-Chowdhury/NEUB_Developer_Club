import React,{useContext,useRef,useEffect,useState} from 'react'
import {Link ,useHistory} from 'react-router-dom'
import {UserContext} from '../App'
import M from 'materialize-css'
const NavBar = ()=>{
    // const  searchModal = useRef(null)
    // const [search,setSearch] = useState('')
    const [userDetails,setUserDetails] = useState([])
     const {state,dispatch} = useContext(UserContext)
     const history = useHistory()
 
     const renderList = ()=>{
       if(state){
           return [
          
            <li key="1"><Link to="/profile">Profile</Link></li>,
            <li key="2"><Link to="/create">Create Post</Link></li>,
           <li key="3"><Link to="/Chatfeed">Inbox</Link></li>,
            <li  key="4">
             <button className="btn #c62828 red darken-3"
            onClick={()=>{
              localStorage.clear()
              dispatch({type:"CLEAR"})
              history.push('/signin')
            }}
            >
                Logout
            </button>
            </li>
         
            
           ]
       }
     }


  
    return(
        <nav>
        <div className="nav-wrapper white">
        
          <Link to={state?"/Home":"/signin"} className="brand-logo left">Dev.. rOOm</Link>
          <ul id="nav-mobile" className="right">
             {renderList()}
  
          </ul>
        </div>
       
      </nav>
    )
}


export default NavBar