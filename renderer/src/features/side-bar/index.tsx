import React, { ReactElement, useState } from 'react';
import UserIcon from 'assets/images/user.svg';
import PrivateIcon from 'assets/images/private.svg';
import GroupIcon from 'assets/images/group.svg';
import NavTitle, { NavTitleProps } from './nav-title';
import Navs from './navs';
import Nav from './nav';
import UserList from 'features/user-list';
import Private from 'features/chatting/private';
import Group from 'features/chatting/group';

const SideBar = (): JSX.Element => {
  // const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Navs>
      <Nav title='user'>
        <UserList />
      </Nav>
      <Nav title='private'>
        <Private />
      </Nav>
      <Nav title='group'>
        <Group />
      </Nav>
    </Navs>
    // <aside className='w-20 h-screen overflow-hidden' aria-label='Sidebar'>
    //   <div className='px-3 py-4 h-screen  bg-gray-300'>
    //     <ul className='grid justify-items-center'>
    //       {children.map((item, index) => {
    //         <NavTitle
    //           key={item.prosp.title}
    //           index={index}
    //           setSelectedNav={setSelectedNavIndex}
    //           title={item.prosp.title}
    //         />;
    //       })}
    //       {/* <li className='relative'>
    //         <a
    //           href='#'
    //           className='p-2 text-base font-normal text-gray-900  hover:text-gray-700'
    //         >
    //           <UserIcon className='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75  hover:text-gray-700' />
    //         </a>
    //       </li>
    //       <li className='relative'>
    //         <a
    //           href='#'
    //           className='p-2 text-base font-normal text-gray-900  hover:text-gray-700'
    //         >
    //           <PrivateIcon className='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75  hover:text-gray-700' />
    //         </a>
    //       </li>
    //       <li className='relative'>
    //         <a href='#' className='p-2 text-base font-normal'>
    //           <GroupIcon className='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75  hover:text-gray-700' />
    //         </a>
    //       </li> */}
    //     </ul>
    //   </div>
    //   {children[selectedNavIndex]}
    // </aside>
  );
};

export default SideBar;
