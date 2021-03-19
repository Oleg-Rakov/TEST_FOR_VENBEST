import React from 'react';
import styles from './Filter.module.css';

const CheckBox = ({ toggleWomanVisible, toggleManVisible, isManVisible, isWomanVisible }) => {

    let onSelectMan = () => {
        toggleManVisible();
    }

    let onSelectWoman = () => {
        toggleWomanVisible();
    }

    return (
        <div className={styles.itemCheckBox}>
            <span className={styles.filterName}>Пол:</span>
            <input onChange={onSelectMan} type="checkbox" checked={isManVisible} />M
            <input onChange={onSelectWoman} type="checkbox" checked={isWomanVisible} />Ж
        </div>
    )
}

export default CheckBox;