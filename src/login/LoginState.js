export default class LoginState {
    static newInstance() {
        let loginState = new LoginState();
        loginState.loginFailed = false;
        return loginState;
    }

    static clone(other) {
        let loginState = new LoginState();
        loginState.loginFailed = other.loginFailed;
        loginState.errorMessage = other.errorMessage;
        return loginState;
    }
}