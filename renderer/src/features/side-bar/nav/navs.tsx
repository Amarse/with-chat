import React, { ReactElement, useState } from 'react';
import UserIcon from 'assets/images/user.svg';
import PrivateIcon from 'assets/images/private.svg';
import GroupIcon from 'assets/images/group.svg';
import { useRouter } from 'next/router';
import NavTitle, { NavTitleProps } from './nav-title';
import { useAuth } from 'context/user.context';

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

  const { user, logout } = useAuth();
  const router = useRouter();

  const logedout = () => {
    console.log('ee');
    logout();
    router.push('/login');
  };

  return (
    <div>
      <nav
        className='h-full bg-fixed fixed bg-gray-300 px-3 py-4 z-10'
        aria-label='Sidebar'
      >
        <ul className=''>
          {children.map((item, index) => (
            <NavTitle
              key={item.props.title}
              index={index}
              isActive={index === selectedNavIndex}
              setSelectedNav={setSelectedNavIndex}
              title={item.props.title}
            />
          ))}
          <button onClick={logedout} className='absolute bottom-0'>
            로그아웃
          </button>
        </ul>
      </nav>
      <div className='list pt-20'>{children[selectedNavIndex]}</div>
    </div>
  );
};

export default Navs;
