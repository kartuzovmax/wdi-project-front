angular
.module('Reddit')
.controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$http'];
function MainCtrl($http) {
  const vm = this;

  $http.get('http://localhost:3000/api/users', {
    headers: {'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiZW1haWwiOiJtYXhAbWF4LmNvbSIsImV4cCI6MTQ5NjIyNTk0N30.oCTzmAQwvTDfVeR1pCDBwJXWw6ttAPu47pfALhV0DHo'}
  })
  .then(response => {
    vm.users = response.data;
    console.log(vm.users);
  });
}
