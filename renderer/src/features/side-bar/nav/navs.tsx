import React, { ReactElement, useState } from 'react';
import UserIcon from 'assets/images/user.svg';
import PrivateIcon from 'assets/images/private.svg';
import GroupIcon from 'assets/images/group.svg';
import NavTitle, { NavTitleProps } from './nav-title';

type Props = {
  children: ReactElement<NavTitleProps>[];
  preSelectedTabIndex?: number;
};

const Navs = (props: Props): JSX.Element => {
  const { children, preSelectedTabIndex } = props;
  const [selectedNavIndex, setSelectedNavIndex] = useState<number>(
    preSelectedTabIndex || 0
  );
  // const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className='flex w- full h-screen static' aria-label='Sidebar'>
      <div className='px-3 py-4 h-screen  bg-gray-300'>
        <ul className='grid justify-items-center'>
          {children.map((item, index) => (
            <NavTitle
              key={item.props.title}
              index={index}
              isActive={index === selectedNavIndex}
              setSelectedNav={setSelectedNavIndex}
              title={item.props.title}
            />
          ))}
        </ul>
      </div>
      {children[selectedNavIndex]}
    </nav>
  );
};

export default Navs;
