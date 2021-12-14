import styles from './Message.module.css';

const Message = ({msg}) => {
    //
    return (
        <div className={styles.MyMessage}>
            <p>{msg}</p>
        </div>
    );
}

export default Message;
