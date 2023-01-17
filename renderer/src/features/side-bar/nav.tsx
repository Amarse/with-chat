import React, { ReactElement } from 'react';


type Props = {
  title: string;
  children: ReactElement | ReactElement[];
  onClick?: () => void;
};

const Nav = ({ children }: Props): JSX.Element => {
  return <div>{children}</div>;
};

export default Nav;
// 껍데기