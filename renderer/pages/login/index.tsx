import { useAuth } from 'context/user.context';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { resultMessages } from '../../src/features/helper';

const Login = (): JSX.Element => {
  const router = useRouter();

  const { user, login } = useAuth();
  const [data, setData] = useState({
    email: '',
    password: '',
  });

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
      await login(data.email, data.password);
      router.push('/main');
    } catch (err) {
      const alertMessage = resultMessages[err.code]
        ? resultMessages[err.code]
        : '알 수 없는 이유로 회원가입에 실패하였습니다.';
      alert(alertMessage);
      // router.push('/sign-in');
    }
  };

  return (
    <section>
      <div className='flex flex-col h-screen items-center pt-40 px-4 sm:px-6 lg:px-8 bg-gray-200'>
        <h1 className='text-lg text-gray-700'>로그인</h1>
        <form className='mt-8 space-y-4' action='#' onSubmit={handleSummit}>
          <div className='-space-y-px rounded-lg'>
            <div>
              <label htmlFor='email-address' className='sr-only'>
                이메일
              </label>
              <input
                id='email-address'
                name='email'
                type='email'
                value={data.email}
                autoComplete='email'
                required
                className=' bg-gray-100 relative block w-60 appearance-none rounded-none text-sm border border-b-transparent border-gray-400 px-3 py-2 text-gray-900 placeholder-gray-400 focus:z-10 focus:outline-none  sm:text-sm caret-green-700'
                placeholder='이메일'
                onChange={handleEmail}
              />
            </div>
            <div>
              <label htmlFor='password' className='sr-only'>
                Password
              </label>
              <input
                id='password'
                name='password'
                type='password'
                autoComplete='current-password'
                required
                value={data.password}
                className=' bg-gray-100 relative block w-full appearance-none rounded-none text-sm border border-t-gray-200 border-gray-400 px-3 py-2 text-gray-900 placeholder-gray-400 focus:z-10 focus:outline-none  sm:text-sm caret-green-700'
                placeholder='비밀번호'
                onChange={handlePassword}
              />
            </div>
          </div>

          <button
            type='submit'
            className='disabled:bg-gray-300 group relative flex w-full justify-center border  border-gray-400 bg-gray-100 py-2 px-4 text-sm font-medium text-gray-400 hover:bg-gray-500 focus:outline-none'
          >
            <span>로그인</span>
          </button>
        </form>
        <div className='flex items-center justify-center py-12 px-4'>
          <div className='text-sm px-4 '>
            <a
              href='#'
              className=' text-gray-700 hover:text-gray-500'
              onClick={() => router.push('/sign-in')}
            >
              회원 가입
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
