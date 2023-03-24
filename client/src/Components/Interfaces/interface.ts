export interface IMessage {
  id: number;
  name_getter: string;
  name_sender: string;
  theme: string;
  message: string;
  date_send: string;
}

export interface ISendMessage {
  nameGetter: string;
  nameSender: string;
  theme: string;
  message: string;
}
