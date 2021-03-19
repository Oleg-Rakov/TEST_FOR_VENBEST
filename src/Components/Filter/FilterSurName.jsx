import React from 'react';
import styles from './Filter.module.css';

const FilterSurName = ({ onChangeSurName }) => {
    const changeSurName = (e) => {
        onChangeSurName(e.target.value);
    }

    return (
        <div className={styles.filterItem}>
            <span className={styles.filterName}>Фамилия</span>
            <input onChange={changeSurName} type="text" />
        </div>
    )
}

export default FilterSurName