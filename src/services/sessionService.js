angular.module('ngBoilerplate')
    .service('sessionService', function () {
        this.create = function (userName, userRole) {
            if (typeof(Storage) !== "undefined") {
                sessionStorage.userName = userName;
                sessionStorage.userRole = userRole;
            }
            this.userName = userName;
            this.userRole = userRole;
        };
        this.destroy = function () {
            if (typeof(Storage) !== "undefined") {
                sessionStorage.userName = null;
                sessionStorage.userRole = null;
            }
            this.userName = null;
            this.userRole = null;
        };
        return this;
    });