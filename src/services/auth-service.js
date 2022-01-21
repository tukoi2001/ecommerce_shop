import axios from 'axios';

const AuthService = {
    initAuthHeader: function () {
        const token = localStorage.getItem('authToken');
        if (token && token !== '') {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        }
        else {
            axios.defaults.headers.common['Authorization'] = ``;
        }
    },
    resetAuthHeader: function () {
        localStorage.setItem('authToken', '');
        this.initAuthHeader();
    },
    login: async function (user) {
        const res = await axios.post('login', {
            email: user.email,
            password: user.password,
        })
        if (res.data.code === 200) {
            localStorage.setItem('authToken', res.data.data.token.access_token)
            this.initAuthHeader();
            return res.data;
        }
    },
    register: async function (user) {
        try {
            const res = await axios.post('register', {
                firstname: user.firstName,
                lastname: user.lastName,
                email: user.email,
                password: user.password,
                password_confirmation: user.confirmPassword,
            })
            if (res.data.code === 200) {
                return res.data;
            }
        }
        catch (e) {
            console.log("Email đăng ký đã tồn tại");
        }
    },
    me: async function () {
        try {
            const res = await axios.post('me');
            if (res.data.code === 200) {
                console.log(res);
            } else {
                this.resetAuthHeader();
            }
            return res.data
        }
        catch (e) {
            this.resetAuthHeader();
        }
    },
    logout: async function () {
        const res = await axios.post('logout')
        if (res.data.code === 200) {
            this.resetAuthHeader();
        }
        return res.data;
    }
}
export default AuthService;