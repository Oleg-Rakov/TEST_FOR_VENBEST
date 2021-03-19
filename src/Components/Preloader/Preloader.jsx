import React from 'react';
import styles from './Preloader.module.css'

const Preloader = () => {
    return <div className={styles.preloaderContainer}>
        <div className={styles.loader}></div>
    </div>
}

export default Preloader;