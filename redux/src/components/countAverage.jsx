import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addNumber, clearNumbers } from '../reducers/middleReducer'; // Corrected import

function CountAverage() {
  const [newNumber, setNewNumber] = useState('');
  const dispatch = useDispatch();
  const { numbers, average } = useSelector((state) => state.calculator); // Corrected selector

  const handleAddNumber = () => {
    if (!isNaN(newNumber) && newNumber !== '') {
      dispatch(addNumber(parseFloat(newNumber)));
      setNewNumber('');
    }
  };

  const handleClearNumbers = () => {
    dispatch(clearNumbers());
  };

  return (
    <div>
      <input
        type="text"
        value={newNumber}
        onChange={(e) => setNewNumber(e.target.value)}
      />
      <button onClick={handleAddNumber}>Add Number</button>
      <button onClick={handleClearNumbers}>Clear Numbers</button>
      <div>
        <strong>Numbers:</strong> {numbers.join(', ')}
      </div>
      <div>
        <strong>Average:</strong> {average !== null ? average.toFixed(2) : 'N/A'}
      </div>
    </div>
  );
}

export default CountAverage;
