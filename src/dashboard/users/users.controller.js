angular.module("dashboard")
  .controller("UsersController", [
    "$scope",
    "$state",
    "UserService",
    function ($scope, $state, UserService) {

      $scope.showCreateUser = function () {
        debugger;
        $state.go("dashboard.users.createUser");
      };

    }
  ]);
