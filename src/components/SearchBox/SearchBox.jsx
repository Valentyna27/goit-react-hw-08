import { useDispatch, useSelector } from 'react-redux';
import { setNameFilter } from '../../redux/filters/slice';
import { FaSearch } from 'react-icons/fa';
import './SearchBox.modules.css';

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filters.name);

  const handleChange = evt => {
    dispatch(setNameFilter(evt.target.value));
  };

  return (
    <div className="boxWrapper">
      <label className="labelSearch" htmlFor="search">
        Find contacts by name
      </label>
      <div className="searchWrapper">
        <FaSearch className="searchIcon" />
        <input
          className="inputSearch"
          type="text"
          id="search"
          value={filter}
          onChange={handleChange}
          placeholder="Type a name..."
        />
      </div>
    </div>
  );
}
