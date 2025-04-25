import { useId } from 'react';
import './SearchBox.modules.css';

export default function SearchBox({ value, onFilter }) {
  const id = useId();
  return (
    <div className="boxWrapper">
      <label className="labelSearch" htmlFor={id}>
        Find contacts by name
      </label>
      <input
        className="inputSearch"
        type="text"
        id={id}
        value={value}
        onChange={onFilter}
      />
    </div>
  );
}
