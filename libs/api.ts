import axios from 'axios';

export const API_URL = 'http://127.0.0.1:8000';

const api = axios.create({
  baseURL: API_URL,
});

interface IProps {
  [key: string]: any;
}

export const boardApi = {
  getNoticeList: (
    searchType: string,
    orderType: string,
    page: string,
    searchTerm: string
  ) =>
    api
      .get(
        `/board/notice?search_keyword=${searchType}&filter_keyword=${orderType}&page=${page}&search=${
          searchTerm || ''
        }`
      )
      .then((res) => res.data),

  getNoticeDetail: (id: string) =>
    api.get(`/board/notice/${id}`).then((res) => res.data),

  getLibraryeList: (
    searchType: string,
    orderType: string,
    page: string,
    searchTerm: string
  ) =>
    api
      .get(
        `/board/resource?search_keyword=${searchType}&filter_keyword=${orderType}&page=${page}&search=${
          searchTerm || ''
        }`
      )
      .then((res) => res.data),

  getLibraryDetail: (id: string) =>
    api.get(`/board/resource/${id}`).then((res) => res.data),

  getVideoList: (page: string) =>
    api.get(`/board/promotion_video?page=${page}`).then((res) => res.data),

  getGalleryList: (category: string, page: string) =>
    api
      .get(
        `/board/gallery?page=${page}&${
          category === '전체' ? '' : `category=${category}`
        }`
      )
      .then((res) => res.data),

  getCardNewsList: (page: string, category: string) =>
    api
      .get(
        `/board/card_news?page=${page}&${
          category === '전체' ? '' : `category=${category}`
        }`
      )
      .then((res) => res.data),

  getCardNewsDetail: (id: string) =>
    api.get(`/board/card_news/${id}`).then((res) => res.data),

  getNewsLetterList: (page: string) =>
    api.get(`/board/news_letter?page=${page}`).then((res) => res.data),

  getNewsLetterDetail: (id: string, token?: string | null) =>
    api
      .get(`/board/news_letter/${id}`, {
        ...(token && {
          headers: {
            Authorization: token,
            'Content-Type': 'application/json',
          },
        }),
      })
      .then((res) => res.data),

  likeNewsLetter: (id: string, token: string) =>
    api
      .post(
        '/board/news_letter/like/',
        { type: 'news_letter', news_letter_pk: id },
        {
          headers: {
            Authorization: token,
            'Content-Type': 'application/json',
          },
        }
      )
      .then((res) => res.data),

  // 강의 상세 리뷰 작성
  writeNewsLetterReply: (id: string, text: string, token: string) =>
    api.post(
      '/board/news_letter/reply/',
      {
        type: 'news_letter',
        news_letter_pk: id,
        text,
      },
      {
        headers: {
          Authorization: token,
          'Content-Type': 'application/json',
        },
      }
    ),
};

export const courseApi = {
  getCourseList: (category: string, page: string) =>
    api
      .get(`/lectures?category=${category}&page=${page}`)
      .then((res) => res.data),

  detail: (id: string, token?: string | null) =>
    api
      .get(`/lectures/${id}/`, {
        ...(token && {
          headers: {
            Authorization: token,
            'Content-Type': 'application/json',
          },
        }),
      })
      .then((res) => res.data),

  registerCourse: (id: string, token: string) =>
    api.post(
      `/lectures/${id}/register/`,
      {},
      {
        headers: {
          Authorization: token,
          'Content-Type': 'application/json',
        },
      }
    ),

  // sendProgress: (id: string, progress: number, token: string) =>
  //   api.post(
  //     `/lectures/${id}/progress/`,
  //     { progress },
  //     {
  //       headers: {
  //         Authorization: token,
  //         'Content-Type': 'application/json',
  //       },
  //     }
  //   ),

  sendProgress: (id: string, progress: number, token: string) =>
    fetch(`${API_URL}/lectures/${id}/progress/`, {
      method: 'POST',
      keepalive: true,
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ progress }),
    }),

  // 강의 상세 리뷰 작성
  writeReview: (id: string, text: string, token: string) =>
    api.post(
      '/lectures/review/',
      {
        lecture_pk: id,
        text,
      },
      {
        headers: {
          Authorization: token,
          'Content-Type': 'application/json',
        },
      }
    ),
};

export const usersApi = {
  // 인증번호 확인
  checkId: (username: string) =>
    api.get(`/users/check_id?username=${username}`),

  // 회원가입 인증번호 발급
  getSignupCode: (email: string) =>
    api.post('/users/signup_code_gen/', {
      email,
    }),

  // 인증번호 발급
  getCode: (email: string, username?: string) =>
    api.post('/users/code_gen/', {
      email,
      ...(username && { username }),
    }),

  // 인증번호 확인
  checkCode: (email: string, code: string) =>
    api.get('/users/code_auth/', {
      params: {
        email,
        code,
      },
    }),

  // 회원가입(NextJS api)
  signupNextApi: (req: IProps) => axios.post('/api/signup', req),

  // 회원가입
  signup: ({
    local,
    stage,
    username,
    password,
    korName,
    engName,
    year,
    month,
    day,
    country,
    email,
    phoneNum,
    adAgree,
  }: IProps) =>
    api.post('/users/signup/', {
      local,
      stage,
      username,
      password,
      name: korName,
      en_name: engName,
      birth: `${year}-${month}-${day}`,
      country,
      email,
      phone_number: phoneNum,
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

  // 로그아웃(NextJS api)
  logoutNextApi: () => axios.post('/api/logout'),

  // 아이디 찾기
  findId: (phoneNum: string) =>
    api.get(`/users/find_username/?phone_number=${phoneNum}`),

  // 비밀번호 재설정
  resetPw: (username: string, password: string) =>
    api.post('/users/change_password/', { username, password }),

  // 내 정보
  myInfos: (token: string) =>
    api.get('/mypage/', {
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
    }),
};

export const mypageApi = {
  // 마이페이지 내 강의 리스트
  myCourseList: (page: string, token: string) =>
    api
      .get(`/mypage/registered_lecture?page=${page}`, {
        headers: {
          Authorization: token,
          'Content-Type': 'application/json',
        },
      })
      .then((res) => res.data),

  // 마이페이지 회원 정보 수정
  editInfos: ({
    email,
    phoneNum,
    year,
    month,
    day,
    introduce,
    password,
    token,
  }: IProps) =>
    api.post(
      '/mypage/',
      {
        ...(email && { email }),
        ...(phoneNum && { phone_number: phoneNum }),
        ...(year && month && day && { birth: `${year}-${month}-${day}` }),
        ...(introduce && { introduce }),
        ...(password && { password }),
      },
      {
        headers: {
          Authorization: token,
          'Content-Type': 'application/json',
        },
      }
    ),

  // 마이페이지 마일리지 리스트
  getMileageList: (page: string, token: string) =>
    api
      .get(`/mypage/mileage?page=${page}`, {
        headers: {
          Authorization: token,
          'Content-Type': 'application/json',
        },
      })
      .then((res) => res.data),
};

export const contactApi = {
  submitContact: (
    name: string,
    phone_number: string,
    email: string,
    category: string,
    content: string
  ) =>
    api.post('/contact/', {
      name,
      phone_number,
      email,
      category,
      content,
    }),
};

export const surveyApi = {
  courseSurvey: (
    id: string,
    questions: { [key: string]: string },
    token: string
  ) =>
    api.post(`/survey/lecture/${id}/`, questions, {
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
    }),

  certificateSurvey: (questions: { [key: string]: string }, token: string) =>
    api.post(`/survey/certificate/`, questions, {
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
    }),
};
