/* eslint-disable no-shadow */
import React from 'react';
import PropTypes from 'prop-types';
import { connect, useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile } from '@fortawesome/free-regular-svg-icons';
import { faSkullCrossbones } from '@fortawesome/free-solid-svg-icons';
import { approveAll, forbidAll } from '../actions';

const FiltersBar = ({ forbidAll, approveAll }) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleViewChange = (button) => {
    if (button === 'approved') {
      if (state.view === 'approved') {
        dispatch({ type: 'SET_VIEW_ALL' })
      }

      if (state.view === 'all' || state.view === 'forbidden') {
        dispatch({ type: 'SET_VIEW_APPROVED' })
      }
    }
    if (button === 'forbidden') {
      if (state.view === 'forbidden') {
        dispatch({ type: 'SET_VIEW_ALL' })
      }

      if (state.view === 'all' || state.view === 'approved') {
        dispatch({ type: 'SET_VIEW_FORBIDDEN' })
      }
    }
  }

  return (
    <div className="filtersBar">
      <div className="leftFiltersBarContainer">
        <button
          type="button"
          onClick={() => forbidAll(state.categories.length)}
          disabled={state.forbiddenCount === state.categories.length}
        >
          <FontAwesomeIcon icon={faSkullCrossbones} className="skullIcon" />
          <span>Forbid All</span>
        </button>
        <button
          type="button"
          onClick={() => approveAll(state.categories.length)}
          disabled={state.approvedCount === state.categories.length}
        >
          <FontAwesomeIcon icon={faSmile} className="faceIcon" />
          <span>Approve All</span>
        </button>
      </div>
      <div className="rightFiltersBarContainer">
        <span>
          Filters
        </span>
        <button
          type="button"
          disabled={state.approvedCount === 0}
          onClick={() => handleViewChange('approved')}
          className={state.view === 'approved' ? 'active' : null}
        >
          <span>
            {`Approved ${state.approvedCount}`}
          </span>
        </button>
        <button
          type="button"
          disabled={state.forbiddenCount === 0}
          onClick={() => handleViewChange('forbidden')}
          className={state.view === 'forbidden' ? 'active' : null}
        >
          <span>
            {`Forbidden ${state.forbiddenCount}`}
          </span>
        </button>
      </div>
    </div>
  )
};

FiltersBar.propTypes = {
  forbidAll: PropTypes.func.isRequired,
  approveAll: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({ categories: state.categories })

export default connect(mapStateToProps, { forbidAll, approveAll })(FiltersBar);
