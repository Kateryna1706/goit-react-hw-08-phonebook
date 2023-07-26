import css from './Filter.module.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/actions';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    const { value } = event.currentTarget;
    dispatch(changeFilter(value));
  };

  return (
    <label className={css.container}>
      <span className={css.text}>Find contacts by name</span>
      <input type="text" name="filter" onChange={handleFilterChange} />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
};
