import React from 'react';
import { StyledSelect } from '../../UI';
const AdvancedSearchForm = ({handleCheck}) => {
  return (
    <div className="custom-select">
        <StyledSelect onChange={(e) => {handleCheck(e)}}>
            <option value="1" > Generation I</option>
            <option value="2"> Generation II</option>
            <option value="3"> Generation III</option>
            <option value="4"> Generation IV</option>
            <option value="5"> Generation V</option>
            <option value="6"> Generation VI</option>
            <option value="7"> Generation VII</option>
            <option value="8"> Generation VIII</option>
        </StyledSelect>
        <span className="custonm-arrow"></span>
  </div>
  );
};

export default AdvancedSearchForm;
