angular.module("dashboard").config([
    "$stateProvider",
    function ($stateProvider) {
      $stateProvider
        .state("dashboard", {
          abstract: true,
          url: "/dashboard",
          templateUrl: "src/dashboard/layout/dashboardLayout.template.html",
          controller: "DashboardLayoutController",
        })
        .state("dashboard.home", {
          url: "",
          templateUrl: "src/dashboard/layout/dashboardHome.template.html",
          controller: "HomeController"
        })
        .state("dashboard.users", {
          url: "/users",
          templateUrl: "src/dashboard/users/users.template.html",
          controller: "UsersController",
        })
        .state('dashboard.users.createUser',{
          url : '/createrUser',
          templateUrl : "../../src/dashboard/users/createUser/createUser.template.html",
          controller: "createUserController"
        })
    },
  ]);
