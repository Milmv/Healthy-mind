import React from "react";
import classnames from 'classnames';


import styles from "./index.module.css";

const Modal = ({onCancel, isClose}) => {
    return (
        <>
            <div className={ classnames({[styles.component]: true, [styles.showModal]: isClose }) }>
                <p className={styles.desc}>
                    Для корректного расчета заполните все поля
                </p>
                <button onClick={onCancel} className={styles.button}>
                    Закрыть
                </button>
            </div>
            <div className={classnames({[styles.overlay]: true, [styles.wrap]: isClose})}/>
        </>
    );
}

export default Modal;
