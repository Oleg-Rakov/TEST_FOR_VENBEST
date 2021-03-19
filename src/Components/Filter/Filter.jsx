import React from 'react';
import { connect } from 'react-redux';
import { toggleWomanVisible, toggleManVisible, onChangeName, onChangeSurName, onChangeAge } from '../../redux/ListPeople-Reducer';
import CheckBox from './CheckBox';
import styles from './Filter.module.css';
import FilterAge from './FilterAge';
import FilterName from './FilterName';
import FilterSurName from './FilterSurName';

const Filter = ({
    onChangeName, onChangeSurName,
    onChangeAge, toggleWomanVisible,
    toggleManVisible, isManVisible,
    isWomanVisible }) => {
    return (
        <div className={styles.filterContainer}>
            <FilterName onChangeName={onChangeName} />
            <FilterSurName onChangeSurName={onChangeSurName} />
            <FilterAge onChangeAge={onChangeAge} />
            <CheckBox
                toggleWomanVisible={toggleWomanVisible}
                toggleManVisible={toggleManVisible}
                isManVisible={isManVisible}
                isWomanVisible={isWomanVisible}
            />
        </div>
    )
}

const mapStateToProps = (state) => {
    const {
        isManVisible,
        isWomanVisible
    } = state.mainStore;
    return ({
        isManVisible,
        isWomanVisible
    })
}

export default connect(mapStateToProps,
    {
        toggleManVisible,
        toggleWomanVisible,
        onChangeName,
        onChangeSurName,
        onChangeAge
    })
    (Filter);