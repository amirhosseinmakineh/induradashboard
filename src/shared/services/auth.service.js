
  angular.module("shared").service("AuthService", ['$http',
    function ($http) {
    var baseUrl = 'http://localhost:3002/auth';
    this.register = function (model) {
      return $http.post(baseUrl + '/register', model);
    };

    this.login = function(model){
      return $http.post(baseUrl + '/login',model)
    }
    },
  ]);