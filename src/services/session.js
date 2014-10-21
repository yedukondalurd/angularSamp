angular.module('ngBoilerplate')
    .service('Session', function () {
        this.create = function (userName, userRole) {
            this.userName = userName;
            this.userRole = userRole;
        };
        this.destroy = function () {
            this.userName = null;
            this.userRole = null;
        };
        return this;
    });