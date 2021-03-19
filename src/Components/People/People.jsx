import React from 'react';
import styles from './People.module.css';

const SEX_MAP = {
    f: 'Женский',
    m: 'Мужской'
}

let People = ({ people, setActiveFilter }) => {
    return (
        <div className={styles.listContainer}>
            <ul className={styles.listPeople}>
                <li>{`${people.name} ${people.lastname} Возраст: ${people.age} Пол: ${SEX_MAP[people.sex]}`}</li>
            </ul>
        </div>
    )
}

export default People;