import { useCallback } from 'react';

export type NavTitleProps = {
  title: string;
  index: number;
  setSelectedNav: (index: number) => void;
};

const NavTitle = (props: NavTitleProps): JSX.Element => {
  const { title, setSelectedNav, index } = props;
  console.log(title);

  const handleOnClick = useCallback(() => {
    setSelectedNav(index);
  }, [setSelectedNav, index]);

  return (
    <li>
      <button
        onClick={handleOnClick}
        title={title}
        className='py-3 text-gray-700'
      >
        <div className='relative h-6 w-6 text-gray-400'>
          <img
            src={`/assets/images/${title}.svg`}
            alt={title}
          />
        </div>
      </button>
    </li>
  );
};

export default NavTitle;
