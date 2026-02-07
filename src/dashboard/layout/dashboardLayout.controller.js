angular.module("dashboard").controller("DashboardLayoutController", [
  "$scope",
  "$state",
  function ($scope, $state) {

    $scope.goHome = function () {
      $state.go("dashboard.home");
    };

    $scope.goUsers = function () {
      $state.go("dashboard.users");
    };

  }
]);
