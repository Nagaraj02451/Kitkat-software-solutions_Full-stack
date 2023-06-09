import React ,{ useState } from "react";
import EmailForm from "./EmailForm";
import { styles } from "../styles";

const SupportWindow = (props) => {
  const [user, setUser] = useState(null)
    const [chat, setChat] = useState(null)
  return (
    <>
    <div
      className="transition-5"
      style={{
        ...styles.supportWindow,
        ...{ opacity: props.visible ? "1" : "0" },
      }}
    >
       <EmailForm 
                visible={user === null || chat === null}
                setUser={user => setUser(user)} 
                setChat={chat => setChat(chat)} 
            />
                   {
                user !== null && chat !== null &&
                <div>Chat Engine</div>
            }
    </div>
    </>
  );
};

export default SupportWindow;
