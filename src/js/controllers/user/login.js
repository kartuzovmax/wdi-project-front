angular
.module('Reddit')
.controller('LoginCtrl', LoginCtrl);

LoginCtrl.$inject = ['UserFactory', 'CurrentUserService', '$state'];
function LoginCtrl(UserFactory, CurrentUserService, $state) {
  const vm = this;
  vm.login = () => {
    UserFactory.login(vm.user)
    .$promise
    .then(() => {
      CurrentUserService.getUser();
      $state.go('home');
    }, err => {
      console.log(err, 'error in login controller');
    });
  };
}
