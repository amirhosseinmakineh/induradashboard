angular.module("auth").controller("LoginController", [
    "$scope",
    "$state",
    "AuthService",
    "toaster",
    function ($scope, $state, AuthService, toaster) {
      $scope.back = function () {
        $state.go("home");
      };

      $scope.showRegister = function () {
        $state.go("auth.register");
      };

      $scope.login = function () {

        AuthService.login($scope.loginModel)
          .then(function (res) {
            toaster.success("ورود با موفقیت انجام شد");
            $state.go("dashboard.home"); 
          })
          .catch(function () {
            toaster.error("خطا در ورود");
          });
      };

      function init() {
        $scope.loginModel = {
          mobileNumber: "",
          password: ""
        };
      }

      init();
    }
  ]);