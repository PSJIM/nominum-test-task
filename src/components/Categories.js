/* eslint-disable no-shadow */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile } from '@fortawesome/free-regular-svg-icons';
import { faInfo, faSkullCrossbones } from '@fortawesome/free-solid-svg-icons';

const Categories = ({ categories }) => {
  const dispatch = useDispatch()
  const state = useSelector((state) => state);

  const handleStatus = (category) => {
    dispatch({
      type: 'CHANGE_STATUS',
      payload: category.name,
    })

    if (category.isAllowed) {
      dispatch({
        type: 'ADD_APPROVED',
      })
      dispatch({
        type: 'REMOVE_FORBIDDEN',
      })
    }

    if (!category.isAllowed) {
      dispatch({
        type: 'ADD_FORBIDDEN',
      })
      dispatch({
        type: 'REMOVE_APPROVED',
      })
    }
  }

  const renderCategories = () => {
    let categoriesToDisplay = [...categories]

    if (state.view === 'forbidden') {
      categoriesToDisplay = categories.filter((category) => !category.isAllowed)
    }

    if (state.view === 'approved') {
      categoriesToDisplay = categories.filter((category) => category.isAllowed)
    }

    return categoriesToDisplay.map((category) => (
      <div className="category" key={category.name}>
        <button type="button" onClick={() => handleStatus(category)}>
          <FontAwesomeIcon
            icon={category.isAllowed ? faSmile : faSkullCrossbones}
            className={category.isAllowed ? 'faceIcon' : 'skullIcon'}
          />
        </button>
        <div className="spanContainer">
          <span className="categoryName">
            {category.name}
            <div className="hint">
              <FontAwesomeIcon icon={faInfo} className="infoIcon" />
              <span className="hintText">{category.description}</span>
            </div>
          </span>
        </div>
      </div>
    ))
  }

  return (
    <div className="categories">
      {categories ? renderCategories() : <h4>Fetching categories</h4>}
    </div>
  )
}

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Categories;
