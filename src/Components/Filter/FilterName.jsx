import React from 'react';
import styles from './Filter.module.css';


const FilterName = ({ onChangeName }) => {
    const changeName = (e) => {
        onChangeName(e.target.value);
    }

    return (
        <div className={styles.filterItem}>
            <span className={styles.filterName}>Имя</span>
            <input onChange={changeName} type="text" />
        </div>
    )
}

export default FilterName;