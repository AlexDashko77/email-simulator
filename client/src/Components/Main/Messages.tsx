import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { IMessage } from "./../Interfaces/interface";

interface IMessages {
  list: IMessage[];
}

const Messages: React.FC<IMessages> = (props) => {
  return (
    <div className="margin">
      {props.list.map((el: IMessage) => {
        return (
          <Accordion key={el.id} defaultActiveKey="1">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <span>Theme: {el.theme}</span>{" "}
                <span className="padding">From: {el.name_sender}</span>
              </Accordion.Header>
              <Accordion.Body>
                {el.message}
                <p className="marginDate">Date of send: {el.date_send}</p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        );
      })}
    </div>
  );
};

export default Messages;
