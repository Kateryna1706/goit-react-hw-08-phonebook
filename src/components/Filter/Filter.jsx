import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/contacts/filterSlice';
import { Label, Text } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    const { value } = event.currentTarget;

    dispatch(changeFilter(value));
  };

  return (
    <Label>
      <Text>Find contacts by name</Text>
      <input type="text" name="filter" onChange={handleFilterChange} />
    </Label>
  );
};
