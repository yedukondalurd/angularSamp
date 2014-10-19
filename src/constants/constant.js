angular.module('ngBoilerplate')
    /*Auth events*/
    .constant('AUTH_EVENTS', {
        loginSuccess: 'auth-login-success',
        loginFailed: 'auth-login-failed',
        logoutSuccess: 'auth-logout-success',
        sessionTimeout: 'auth-session-timeout',
        notAuthenticated: 'auth-not-authenticated',
        notAuthorized: 'auth-not-authorized'
    })
    /*User roles*/
    .constant('USER_ROLES', {
        all: '*',
        admin: 'admin',
        editor: 'editor',
        guest: 'guest'
    });

