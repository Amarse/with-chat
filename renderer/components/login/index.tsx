import React from 'react';

const Login = () => {
  return (
    <section>
      <div className='flex flex-col h-screen items-center pt-40 px-4 sm:px-6 lg:px-8 bg-emerald-500'>
        <h1 className='text-lg text-gray-700'>로그인</h1>
        <form className='mt-8 space-y-4' action='#' method='POST'>
          <div className='-space-y-px rounded-lg'>
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
                className='relative block w-60 appearance-none rounded-none text-sm border border-b-transparent border-gray-400 px-3 py-2 text-gray-900 placeholder-gray-400 focus:z-10 focus:border-emerald-300 focus:outline-none  sm:text-sm caret-green-700'
                placeholder='이메일'
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
                className='relative block w-full appearance-none rounded-none text-sm border border-t-gray-200 border-gray-400 px-3 py-2 text-gray-900 placeholder-gray-400 focus:z-10 focus:border-emerald-300 focus:outline-none  sm:text-sm caret-green-700'
                placeholder='비밀번호'
              />
            </div>
          </div>

          <button
            type='submit'
            disabled
            className='disabled:bg-gray-300 group relative flex w-full justify-center border  border-gray-400 bg-emerald-500 py-2 px-4 text-sm font-medium text-gray-400 hover:bg-emerald-700 focus:outline-none'
          >
            <span>로그인</span>
          </button>

          <div className='flex items-center align-center mb-8 pt-2'>
            <input
              id='remember-me'
              name='remember-me'
              type='checkbox'
              className='h-4 w-4 rounded text-emerald-500 accent-gray-300 bg-emerald-600'
            />
            <label
              htmlFor='remember-me'
              className='ml-2 block text-sm text-emerald-700'
            >
              실행시 자동 로그인
            </label>
          </div>
        </form>
        <div className='flex items-center justify-center py-12 px-4'>
          <div className='text-sm px-4 border-r border-emerald-400'>
            <a href='#' className=' text-emerald-700 hover:text-emerald-500'>
              이메일 찾기
            </a>
          </div>
          <div className='text-sm px-4'>
            <a href='#' className=' text-emerald-700 hover:text-emerald-500'>
              비밀번호 찾기
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
