import React from 'react';
import styles from './Filter.module.css';

const FilterAge = ({ onChangeAge }) => {
    const changeAge = (e) => {
        onChangeAge(e.target.value)
    }

    return (
        <div className={styles.filterItem}>
            <span className={styles.filterName}>Возраст</span>
            <input onChange={changeAge} type="number" />
        </div>
    )
}

export default FilterAge;