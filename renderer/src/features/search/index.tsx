import { dbService } from 'Fbase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useState } from 'react';
import SearchUserList from './user-list';

const SearchUser = ({ userInfoData }: { userInfoData: UserData }) => {
  const [findUser, setFindUser] = useState<string>('');
  const [userData, setUserData] = useState([]);
  const [isSearchUser, setIsSearchUser] = useState<boolean>(false);

  const onChangeFindUserInput = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLInputElement;
    setFindUser(value);
  };

  const onSubmitFindUser = async () => {
    const q = query(
      collection(dbService, 'users'),
      where('displayName', '==', true)
    );
    const querySnapshot = await getDocs(q);
    setUserData([]);
    querySnapshot.forEach((doc) => {
      const { displayName, email } = doc.data();
      const data = { email, displayName };
      setUserData((arr) => (arr ? [...arr, data] : [data]));
    });
    setIsSearchUser(true);
  };

  return (
    <>
      <div>
        <form onSubmit={onSubmitFindUser}>
          <div className='FindUserInputBox'>
            <input
              className='FindUserInput'
              value={findUser}
              onChange={onChangeFindUserInput}
              type='text'
              placeholder='유저를 검색하세요'
            />
            <button type='submit'>
              <SearchIcon className='FindUserInputIcon' />
            </button>
          </div>
        </form>
      </div>
      <div>
        {userData.length || !isSearchUser
          ? userData.map((data) => <SearchUserList key={data.id} data={data} />)
          : '해당 유저정보를 찾을수없습니다.'}
      </div>
      ...
    </>
  );
};

export default SearchUser;
