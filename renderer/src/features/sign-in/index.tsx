import React, { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from 'context/user.context';


const Singin = () => {
  const { user, signin } = useAuth();
  const router = useRouter();

  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setData({
      ...data,
      name: e.target.value,
    });
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setData({
      ...data,
      email: e.target.value,
    });
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setData({
      ...data,
      password: e.target.value,
    });
  };

  const handleSummit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(data);
    try {
      await signin(data.name, data.email, data.password);
      router.push('/main');
    } catch (err) {
      console.log(err);
      router.push('/login');
    }
  };
  return (
    <section>
      <div className='flex flex-col h-screen items-center pt-40 px-4  sm:px-6 lg:px-8  bg-emerald-500'>
        <h2 className='text-lg  text-gray-700'>회원가입</h2>
        <form className='mt-8 space-y-4' action='#' onSubmit={handleSummit}>
          <div className='-space-y-px'>
            <div>
              <label htmlFor='email-address' className='sr-only'>
                이름
              </label>
              <input
                id='email-address'
                name='name'
                type='text'
                autoComplete='name'
                required
                value={data.name}
                className='relative block w-60 appearance-none text-sm rounded-none border border-b-transparent border-gray-400 px-3 py-2 text-gray-900 placeholder-gray-400 focus:z-10 focus:border-emerald-300 focus:outline-none  sm:text-sm caret-green-700'
                placeholder='이름'
                onChange={handleName}
              />
            </div>
            <div>
              <label htmlFor='email-address' className='sr-only'>
                이메일
              </label>
              <input
                id='email-address'
                name='email'
                type='email'
                autoComplete='email'
                required
                value={data.email}
                className='relative block w-60 appearance-none text-sm rounded-none border  border-t-gray-200 border-gray-400 px-3 py-2 text-gray-900 placeholder-gray-400 focus:z-10 focus:border-emerald-300 focus:outline-none  sm:text-sm caret-green-700'
                placeholder='이메일'
                onChange={handleEmail}
              />
            </div>
            <div>
              <label htmlFor='password' className='sr-only'>
                패스워드
              </label>
              <input
                id='password'
                name='password'
                type='password'
                autoComplete='current-password'
                required
                value={data.password}
                className='relative block w-full appearance-none text-sm border border-t-gray-200 border-gray-400 px-3 py-2 text-gray-900 placeholder-gray-400 focus:z-10 focus:border-emerald-300 focus:outline-none  sm:text-sm caret-green-700'
                placeholder='비밀번호'
                onChange={handlePassword}
              />
            </div>
          </div>

          <button
            type='submit'
            className='mt-2 disabled:bg-gray-200 group relative flex w-full justify-center border  border-gray-400 bg-emerald-500 py-2 px-4 text-sm font-medium text-gray-400 hover:bg-emerald-700 focus:outline-none'
          >
            <span>가입하기</span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Singin;
