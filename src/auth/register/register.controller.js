angular.module("auth").controller("RegisterController", [
    "$scope",
    "$state",
    "AuthService",
    "toaster",
    function ($scope, $state, AuthService, toaster) {

      $scope.isLoading = false;

      $scope.registerModel = {
        userName: "",
        mobileNumber: "",
        password: ""
      };

      $scope.register = function (form) {
        form.$setSubmitted();

        if (form.$invalid) {
          toaster.warning("لطفاً فیلدها را درست پر کن");
          return;
        }

        $scope.isLoading = true;

        AuthService.register($scope.registerModel)
          .then(function () {
            toaster.success("ثبت‌نام با موفقیت انجام شد");
            $state.go("auth.login");
          })
          .catch(function () {
            toaster.error("خطا در ثبت‌نام");
          })
          .finally(function () {
            $scope.isLoading = false;
          });
      };

      $scope.back = function () {
        $state.go("home");
      };

      $scope.showLogin = function () {
        $state.go("auth.login");
      };
    }
  ]);
