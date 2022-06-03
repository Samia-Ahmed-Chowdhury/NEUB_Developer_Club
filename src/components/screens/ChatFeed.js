import { ChatEngine } from 'react-chat-engine';
import SignIn from '../screens/SignIn';
import Inbox from'../screens/SignIn'
const projectID = 'd02f6d3f-dd24-4e11-9ba5-c4cf9f135bf4';

const ChatFeed  = () => {


    return(
        <ChatEngine
           height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('email')}
      userSecret={localStorage.getItem('password')}
    // userName="sam"
    // userSecret="123"
   
        />
    );
}

export default ChatFeed ;