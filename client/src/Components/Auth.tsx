import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";

interface IAuth {
  nameGetter: string;
  setName: (e: string) => void;
}

const Auth: React.FC<IAuth> = ({ nameGetter, setName }) => {
  const [show, setShow] = useState<boolean>(true);

  const changeName: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setName(e.target.value);
  };

  const handleClose = (): void => {
    if (nameGetter) {
      setShow(false);
    }
  };

  const handleShow = (): void => setShow(true);
  return (
    <>
      <Modal show={show} onHide={handleShow}>
        <Modal.Header>
          <Modal.Title>Авторизация</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <span>Введите ваше имя: </span>
          <input onChange={(e) => changeName(e)} type="text" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Отправить
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Auth;
