angular
  .module('Reddit')
  .controller('RegisterCtrl', RegisterCtrl);

RegisterCtrl.$inject = ['UserFactory', 'CurrentUserService', '$state'];
function RegisterCtrl(UserFactory, CurrentUserService, $state) {
  const vm = this;
  vm.register = () => {
    console.log(vm.user);
    UserFactory
    .register(vm.user)
    .$promise
    .then(() => {
      CurrentUserService.getUser();
      $state.go('postsIndex');
    }, (err) => {
      console.log(err, 'error in the register controller');
    });
  };
}
