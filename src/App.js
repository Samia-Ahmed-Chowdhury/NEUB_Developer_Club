import React,{useEffect,createContext,useReducer,useContext} from 'react';
import "./index.css"
import "./App.css"
import {BrowserRouter,Route,Switch,useHistory} from 'react-router-dom'
import Home_page from "../src/Home_page/Home";
import Home from './components/screens/Home'
import Signin from './components/screens/SignIn'
import Profile from './components/screens/Profile'
import Signup from './components/screens/Signup'
import CreatePost from './components/screens/CreatePost'

import ChatFeed from './components/screens/ChatFeed'
import {reducer,initialState} from './reducers/userReducer'

import UserProfile from './components/screens/UserProfile'

export const UserContext = createContext()


const Routing = ()=>{
  const history = useHistory()
  const {state,dispatch} = useContext(UserContext)
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"))
    if(user){
      dispatch({type:"USER",payload:user})
    }else{
      if(!history.location.pathname.startsWith('/reset'))
           history.push('/signin')
    }
  },[])
  return(
    <Switch>
       <Route exact path="/" >
      <Home_page />
      </Route>
      <Route exact path="/home" >
      <Home />
      </Route>
      <Route path="/signin">
        <Signin />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route exact path="/profile">
        <Profile />
      </Route>
      <Route path="/create">
        <CreatePost/>
      </Route>
      <Route path="/profile/:userid">
        <UserProfile />
      </Route>
    
     
      <Route path="/chatfeed">
        <ChatFeed />
      </Route>
    </Switch>
  )
}

function App() {
  const [state,dispatch] = useReducer(reducer,initialState)
  return (
    <UserContext.Provider value={{state,dispatch}}>
    <BrowserRouter>
  
      <Routing />
      
    </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
