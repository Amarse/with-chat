import { formatRelative } from 'date-fns';

export const resultMessages = {
  'auth/email-already-in-use': '이미 가입된 이메일입니다.',
  'auth/wrong-password': '잘못된 비밀번호입니다.',
  'auth/user-not-found': '존재하지 않는 계정입니다.',
  'auth/invalid-email': '유효하지 않은 이메일 주소입니다.',
};

export const formatDate = (date) => {
  let formattedDate = '';
  if (date) {
    formattedDate = formatRelative(date, new Date());
    formattedDate =
      formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
  }
  return formattedDate;
};
