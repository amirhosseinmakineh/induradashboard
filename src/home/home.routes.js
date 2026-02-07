angular.module("home").config([
    "$stateProvider",
    function ($stateProvider) {
      $stateProvider.state("home", {
        url: "/",
        templateUrl: "src/home/home.template.html",
        controller: "HomeController",
      });
    },
  ]);
