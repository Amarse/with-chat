import { useCallback } from 'react';
import UserIcon from 'assets/images/user.svg';
import Image from 'next/image';

export type NavTitleProps = {
  title: string;
  index: number;
  setSelectedNav: (index: number) => void;
  isActive?: boolean;
};

const NavTitle = (props: NavTitleProps): JSX.Element => {
  const { title, setSelectedNav, index } = props;
  console.log(title)

  const handleOnClick = useCallback(() => {
    setSelectedNav(index);
  }, [setSelectedNav, index]);

  return (
    <li>
      <button onClick={handleOnClick} title={title} className='py-3 text-gray-700'>
        <div className='relative h-6 w-6 text-gray-400'>
          <Image
            src={`/assets/images/${title}.svg`}
            alt={title}
            layout='fill' 
            objectFit='cover'
          />
        </div>
      </button>
    </li>
  );
};

export default NavTitle;
