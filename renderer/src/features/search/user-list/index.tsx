import React from 'react';

type PropsData = {
  id?: string | number;
  displayName?: string;
};

const SearchUserList = ({ data }): JSX.Element => {
  return <>{data}</>;
};

export default SearchUserList;
