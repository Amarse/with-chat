import React from 'react';

interface PropsType {
  onClick: () => void;
}

export const Button = ({ onClick }: PropsType): JSX.Element => {
  return <button onClick={onClick}>버튼</button>;
};
