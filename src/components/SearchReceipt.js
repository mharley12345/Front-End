import React from 'react';

const SearchReceipt = (props) => {
    return (
        <div className="search-form">
         <form className="search">
            <input 
              type="text"
              onChange={props.handleChange}
              value={props.search}
              name="name"
              tabIndex="0"
              className="prompt search-name"
              placeholder="search by name"
              autoComplete="off"
            />
         </form>
    </div>
    );
}

export default SearchReceipt;