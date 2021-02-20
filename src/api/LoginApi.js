import http from '../http/Http';

export const login = (data) => {
    return http.post('/login/dologin',data).then((res) => res);
};

/*
 * 获取验证码
*/
export const getCaptcha = () => {
    return http.get('/login/captcha').then((res) => res);
};


/*
export const LoginApi = (data) => {
    return http.post('/user/login', data).then((res) => res.data);
};
export const RegApi = (data) => {
    return http.post('/user/register', data).then((res) => res.data);
};
export const UpdatePwdApi = (data) => {
    return http.post('/user/updatePwd', data).then((res) => res.data);
};
export const exitApi = () => {
    return http.post('/user/exit').then((res) => res.data);
};
export const selectBannerApi = () => {
    return http.get('/banner/selectBanner').then((res) => res.data);
};
export const selectTitle = () => {
    return http.get('/title/selectTitle').then((res) => res.data);
};
export const selectScenarios = () => {
    return http.get('/scenarios/selectScenarios').then((res) => res.data);
};
*/
