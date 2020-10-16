/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import Categories from './Categories';
import FiltersBar from './FiltersBar';
import { fetchCategories } from '../actions';

const CategoriesContainer = ({ fetchCategories }) => {
  // in-component state variables
  const state = useSelector((state) => state)
  const [allCategories, setAllCategories] = useState([]);

  // fetching and initialising categories
  useEffect(() => {
    fetchCategories();
    // distabling the es-lint warnings since I want this hook to run only once
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setAllCategories(state.categories)
  }, [state.categories])

  return (
    <div className="categoriesContainer">
      <Categories categories={allCategories} />
      <FiltersBar />
    </div>
  )
}

CategoriesContainer.propTypes = {
  fetchCategories: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({ categories: state.categories })

export default connect(mapStateToProps,
  { fetchCategories })(CategoriesContainer)
