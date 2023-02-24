import React from 'react';
import css from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from './../../redux/filter/filterSelector';
import { filterContactsAction } from 'redux/filter/filter-slice';

const Filter = () => {
  const filterValue = useSelector(selectFilter);
  const dispatch = useDispatch();
  return (
    <div className={css.filter}>
      <label className={css.filterLabel}>
        Find contacts by name
        <input
          className={css.filterInput}
          name="filter"
          type="text"
          value={filterValue}
          onChange={e => dispatch(filterContactsAction(e.target.value))}
          placeholder="Filter contacts"
        />
      </label>
    </div>
  );
};


export default Filter;
