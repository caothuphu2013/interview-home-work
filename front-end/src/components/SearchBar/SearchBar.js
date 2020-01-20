import React from 'react';
import { Input } from 'antd';

const { Search } = Input;

const SearchBar = (props) => {
  const { searchPostsRequest } = props;
  const handleSearch = (e) => {
    e.preventDefault();
    searchPostsRequest(e.target.value);
  };

  return <Search placeholder="input search text" onChange={handleSearch} style={{ width: 200 }} />;
};

export default SearchBar;
