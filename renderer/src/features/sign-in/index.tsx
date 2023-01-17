import React from 'react';

const Login = () => {
  return (
    <section>
      <div className='flex flex-col h-screen items-center pt-40 px-4  sm:px-6 lg:px-8  bg-emerald-500'>
        <h2 className='text-lg  text-gray-700'>회원가입</h2>
        <form className='mt-8 space-y-4' action='#' method='POST'>
          <div className='-space-y-px'>
            <div>
              <label htmlFor='email-address' className='sr-only'>
                이름
              </label>
              <input
                id='email-address'
                name='email'
                type='email'
                autoComplete='email'
                required
                className='relative block w-60 appearance-none text-sm rounded-none border border-b-transparent border-gray-400 px-3 py-2 text-gray-900 placeholder-gray-400 focus:z-10 focus:border-emerald-300 focus:outline-none  sm:text-sm caret-green-700'
                placeholder='이름'
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
                className='relative block w-60 appearance-none text-sm rounded-none border  border-t-gray-200 border-gray-400 px-3 py-2 text-gray-900 placeholder-gray-400 focus:z-10 focus:border-emerald-300 focus:outline-none  sm:text-sm caret-green-700'
                placeholder='이메일'
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
                className='relative block w-full appearance-none text-sm border border-t-gray-200 border-gray-400 px-3 py-2 text-gray-900 placeholder-gray-400 focus:z-10 focus:border-emerald-300 focus:outline-none  sm:text-sm caret-green-700'
                placeholder='비밀번호'
              />
            </div>
            <div>
              <label htmlFor='password' className='sr-only'>
                비밀번호 재확인
              </label>
              <input
                id='password'
                name='password'
                type='password'
                autoComplete='current-password'
                required
                className='relative block w-full appearance-none text-sm border border-t-gray-200 border-gray-400 px-3 py-2 text-gray-900 placeholder-gray-400 focus:z-10 focus:border-emerald-300 focus:outline-none  sm:text-sm caret-green-700'
                placeholder='비밀번호 재확인'
              />
            </div>
          </div>

          <button
            type='submit'
            disabled
            className='mt-2 disabled:bg-gray-200 group relative flex w-full justify-center border  border-gray-400 bg-emerald-500 py-2 px-4 text-sm font-medium text-gray-400 hover:bg-emerald-700 focus:outline-none'
          >
            <span>가입하기</span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
