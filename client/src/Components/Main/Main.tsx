import React from "react";
import Messages from "./Messages";
import SendButton from "./SendButton";
import { IMessage } from "./../Interfaces/interface";

interface IMain {
  nameGetter: string;
  nameSender: string;
  setNameSender: (e: string) => void;
  theme: string;
  setTheme: (e: string) => void;
  message: string;
  setMessage: (e: string) => void;
  list: IMessage[];
}

const Main: React.FC<IMain> = (props) => {
  return (
    <>
      <div className="flex">
        <h1>Сообщения</h1>
        <h3>Account: {props.nameGetter}</h3>
        <SendButton
          nameGetter={props.nameGetter}
          nameSender={props.nameSender}
          setNameSender={props.setNameSender}
          theme={props.theme}
          setTheme={props.setTheme}
          message={props.message}
          setMessage={props.setMessage}
        />
      </div>
      <div>
        <Messages list={props.list} />
      </div>
    </>
  );
};

export default Main;
