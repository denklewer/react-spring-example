class SecurityService {
    static isAuth() {
        return new Promise((resolve) => {
            resolve(false);
        });
    }
}
export default SecurityService;