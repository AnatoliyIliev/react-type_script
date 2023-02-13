interface IProp {
  message: string;
}

const Notification = ({ message }: IProp) => <p>{message}</p>;

export default Notification;
