import axios from 'axios';

export const API_URL = 'http://127.0.0.1:8000';

const api = axios.create({
  baseURL: API_URL,
});

interface IProps {
  [key: string]: any;
}

export const boardApi = {
  getNoticeList: () => api.get('/board/notice').then((res) => res.data),

  getCardNewsList: (page: string, category: string) =>
    api
      .get(`/board/card_news?page=${page}&category=${category}`)
      .then((res) => res.data),
};

export const courseApi = {
  getOnlineCourseList: (category: string) =>
    api.get(`/lectures?category=${category}`).then((res) => res.data),
};

export const usersApi = {
  // 인증번호 확인
  checkId: (username: string) =>
    api.get(`/users/check_id?username=${username}`),

  // 회원가입 인증번호 발급
  getSignupCode: (phoneNum: string) =>
    api.post('/users/signup_code_gen/', {
      phone_number: phoneNum,
    }),

  // 인증번호 발급
  getCode: (phone_number: string, username?: string) =>
    api.post('/users/code_gen/', {
      phone_number,
      ...(username && { username }),
    }),

  // 인증번호 확인
  checkCode: (phone_number: string, code: string) =>
    api.get('/users/code_auth/', {
      params: {
        phone_number,
        code,
      },
    }),

  // 회원가입(NextJS api)
  signupNextApi: (req: IProps) => axios.post('/api/signup', req),

  // 회원가입
  signup: ({ name, nickname, phoneNum, username, password, adAgree }: IProps) =>
    api.post('/users/signup/', {
      name,
      nickname,
      phone_number: phoneNum,
      username,
      password,
      ad_agree: adAgree,
    }),

  // 로그인(NextJS api)
  loginNextApi: (req: IProps) => axios.post('/api/login', req),
  // 로그인
  login: ({ username, password }: IProps) =>
    api.post('/users/login/', {
      username,
      password,
    }),
  // 카카오 로그인
  kakaoLogin: ({ id }: IProps) =>
    api.post('/users/login/', {
      login_method: 'kakao',
      kakao_id: id,
    }),
  // 로그아웃(NextJS api)
  logoutNextApi: () => axios.post('/api/logout'),

  // 아이디 찾기
  findId: (phoneNum: string) =>
    api.get(`/users/find_username/?phone_number=${phoneNum}`),

  // 비밀번호 재설정
  resetPw: (username: string, password: string) =>
    api.post('/users/change_password/', { username, password }),

  // 마이페이지 내 정보
  myInfos: (token: string) =>
    api.get('/mypage/', {
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
    }),

  // 마이페이지 회원 정보 수정
  editInfos: ({ name, nickname, phoneNum, password, adAgree, token }: IProps) =>
    api.post(
      '/mypage/',
      {
        ...(name && { name }),
        ...(nickname && { nickname }),
        ...(phoneNum && { phone_number: phoneNum }),
        ...(password && { password }),
        ad_agree: adAgree,
      },
      {
        headers: {
          Authorization: token,
          'Content-Type': 'application/json',
        },
      }
    ),
};
