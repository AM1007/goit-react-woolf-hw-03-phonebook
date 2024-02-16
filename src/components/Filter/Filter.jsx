import propTypes from 'prop-types';
import { FilterLabel, FilterInput } from './Filter.styled';

export const Filter = ({ value, onChange }) => (
  <FilterLabel>
    Find contacts by Name
    <FilterInput
      type="text"
      name="filter"
      placeholder="Search contact"
      value={value}
      onChange={onChange}
    />
  </FilterLabel>
);

Filter.propTypes = {
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
};
