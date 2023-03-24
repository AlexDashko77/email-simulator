import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

interface ISendButton {
  nameGetter: string;
  nameSender: string;
  setNameSender: (e: string) => void;
  theme: string;
  setTheme: (e: string) => void;
  message: string;
  setMessage: (e: string) => void;
}

const SendButton: React.FC<ISendButton> = (props) => {
  const [show, setShow] = useState<boolean>(false);
  const handleClose = (): void => setShow(false);
  const handleShow = (): void => setShow(true);
  const { nameGetter, nameSender, theme, message } = props;
  const sendMessage = async (
    url: string = "http://localhost:5000/chat/send",
    data: any = { nameSender, nameGetter, theme, message }
  ) => {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(data);
    props.setNameSender("");
    props.setTheme("");
    props.setMessage("");
    handleClose();
    console.log(response.json());
  };

  const changeName: React.ChangeEventHandler<HTMLInputElement> = (e): void => {
    props.setNameSender(e.target.value);
  };
  const changeTheme: React.ChangeEventHandler<HTMLInputElement> = (e): void => {
    props.setTheme(e.target.value);
  };
  const changeMessage: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ): void => {
    props.setMessage(e.target.value);
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Отправить сообщение
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Отправка сообщения</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Введите имя получателя</Form.Label>
              <Form.Control
                type="text"
                placeholder="Имя"
                onChange={(e) => changeName(e as any)}
                value={props.nameSender}
                autoFocus
              />
              <Form.Label>Введите тему сообщения</Form.Label>
              <Form.Control
                type="text"
                placeholder="Тема"
                onChange={(e) => changeTheme(e as any)}
                value={props.theme}
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Введите сообщение</Form.Label>
              <Form.Control
                placeholder="Сообщение"
                onChange={(e) => changeMessage(e as any)}
                value={props.message}
                as="textarea"
                rows={3}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Закрыть
          </Button>
          <Button variant="primary" onClick={() => sendMessage()}>
            Отправить
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SendButton;
