angular.module('ngBoilerplate.home', [
        'ui.router'
    ])
    .config(function ($stateProvider) {
        $stateProvider.state('home', {
            url: '/home',
            views: {
                "main": {
                    controller: 'homeCtrl',
                    templateUrl: 'app/home/home.tpl.html'
                }
            },
            data: {
                pageTitle: 'Home',
                authorizedRoles: ['admin1']
            }
        });
    })
    .controller('homeCtrl', function ($scope) {
    });

