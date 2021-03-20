import React from 'react';
import { connect } from 'react-redux';
import { getPeople } from '../../redux/MainStore-Reducer';
import Filter from '../Filter/Filter';
import Person from '../Person/Person';

import Preloader from '../Preloader/Preloader';
import { toLower } from '../UTILS/Utils';
import styles from './ListOfPeople.module.css';


class ListOfPeople extends React.Component {

    componentDidMount() {
        this.props.getPeople();
    }

    render() {
        const {
            isLoad,
            filtredPeople
        } = this.props;
        return (
            <div className={styles.wrapper}>
                {isLoad && (
                    <Preloader />
                )}
                <Filter />
                <div className={styles.wrapPeople}>
                    {filtredPeople.map(person => <Person key={person.name} person={person} />)}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const {
        peopleInfo,
        isLoad,
        isManVisible,
        isWomanVisible,
        filterByName,
        filterBySurName,
        filterByAge
    } = state.mainStore;

    const filterByNameLower = toLower(filterByName);
    const filterBySurNameLower = toLower(filterBySurName);
    let filtredPeople = peopleInfo;

    if (filterByName) {
        filtredPeople = filtredPeople.filter(singlePeople => {
            const peopleName = toLower(singlePeople.name);
            return peopleName.includes(filterByNameLower);
        })
    }

    if (filterBySurName) {
        filtredPeople = filtredPeople.filter(singlePeople => {
            const peopleSurName = toLower(singlePeople.lastname);
            return peopleSurName.includes(filterBySurNameLower);
        })
    }

    if (filterByAge) {
        filtredPeople = filtredPeople.filter(singlePeople => {
            return singlePeople.age == filterByAge;
        })
    }

    if (!isManVisible) {
        filtredPeople = filtredPeople.filter(singlePeople => {
            return singlePeople.sex === 'f';
        })
    }

    if (!isWomanVisible) {
        filtredPeople = filtredPeople.filter(singlePeople => {
            return singlePeople.sex === 'm';
        })
    }

    return ({
        isLoad,
        filtredPeople
    })
}

export default connect(mapStateToProps, { getPeople })(ListOfPeople)