import { Box } from "@chakra-ui/react";
import { ChatState } from "../context/chatProvider.jsx";
import SideDrawer from "../Components/Authentication/micellanous/SideDrawer.jsx";


const ChatPage = () => {
    const { user } = ChatState()
    return (
        <div style={{ width: "1005" }}>
            {user && <SideDrawer />}
            <Box>
                {/* {user&&<MyChats/>} */}
                {/* {user&&<ChatBox/>} */}
            </Box>
        </div>
    );
}

export default ChatPage;
