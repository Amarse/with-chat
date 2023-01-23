import React, { ReactElement, useState } from 'react';
import UserIcon from 'assets/images/user.svg';
import PrivateIcon from 'assets/images/private.svg';
import GroupIcon from 'assets/images/group.svg';
import { useRouter } from 'next/router';
import NavTitle, { NavTitleProps } from './nav-title';
import { useAuth } from 'context/user.context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type Props = {
  children: ReactElement<NavTitleProps>[];
  preSelectedTabIndex?: number;
};

const Navs = (props: Props): JSX.Element => {
  const { children, preSelectedTabIndex } = props;
  const [selectedNavIndex, setSelectedNavIndex] = useState<number>(
    preSelectedTabIndex || 0
  );
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
              setSelectedNav={setSelectedNavIndex}
              title={item.props.title}
            />
          ))}
          <button onClick={logedout} className="w-6 h-6 py-3 hover:text-gray-300">
            <img src='/assets/images/out.svg' alt="logout" />
          </button>
        </ul>
      </nav>
      <div className='list pt-30'>{children[selectedNavIndex]}</div>
    </div>
  );
};

export default Navs;
