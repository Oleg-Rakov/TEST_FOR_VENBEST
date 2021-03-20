import React from 'react';
import styles from './Person.module.css';

const SEX_MAP = {
    f: 'Женский',
    m: 'Мужской'
}

const Person = ({ person }) => {
    return (
        <div className={styles.listContainer}>
            <ul className={styles.listPeople}>
                <li>{`${person.name} ${person.lastname} Возраст: ${person.age} Пол: ${SEX_MAP[person.sex]}`}</li>
            </ul>
        </div>
    )
}

export default Person;