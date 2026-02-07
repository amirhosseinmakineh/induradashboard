angular.module("home").controller("HomeController", [
  "$scope",
  "$state",
  function ($scope, $state) {

    $scope.goLogin = function () {
      $state.go("auth.login");
    };

    $scope.goRegister = function () {
      $state.go("auth.register");
    };

    $scope.goDashboard = function () {
      $state.go("dashboard.home");
    };
  }
]);
