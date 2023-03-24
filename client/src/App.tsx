import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Auth from "./Components/Auth";
import Main from "./Components/Main/Main";
import { IMessage } from "./Components/Interfaces/interface";

const App: React.FC = () => {
  const [list, setList] = useState<IMessage[]>([]);
  const [sortedList, setSortedList] = useState<IMessage[]>([]);
  const [nameGetter, setNameGetter] = useState<string>("");
  const [nameSender, setNameSender] = useState<string>("");
  const [theme, setTheme] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const getMessages = async (
    url: string = "http://localhost:5000/chat/messages"
  ) => {
    const response = await fetch(url, {
      method: "GET",
    });
    setList(await response.json());
  };

  setTimeout(() => {
    getMessages();
    const arr: IMessage[] = [];
    list.map((el: IMessage) => {
      if (el.name_getter == nameGetter) {
        arr.push(el);
      }
    });
    setSortedList([...arr]);
  }, 5000);

  return (
    <div className="container">
      <Auth nameGetter={nameGetter} setName={setNameGetter} />
      <Main
        nameGetter={nameGetter}
        nameSender={nameSender}
        setNameSender={setNameSender}
        theme={theme}
        setTheme={setTheme}
        message={message}
        setMessage={setMessage}
        list={sortedList}
      />
    </div>
  );
};

export default App;
