angular.module("auth").config([
    "$stateProvider",
    function ($stateProvider) {
      $stateProvider
        .state("auth", {
          abstract: true,
          url: "/auth",
          template: '<div ui-view></div>',
        })
        .state("auth.login", {
          url: "/login",
          templateUrl: "src/auth/login/login.template.html",
          controller: "LoginController",
          controllerAs: "vm",
        })
        .state("auth.register", {
          url: "/register",
          templateUrl: "src/auth/register/register.template.html",
          controller: "RegisterController",
          controllerAs: "vm",
        });
    },
  ]);
