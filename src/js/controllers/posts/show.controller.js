angular
  .module('Reddit')
  .controller('ShowPostsCtrl', ShowPostsCtrl);

ShowPostsCtrl.$inject = ['$stateParams', 'PostFactory', '$state'];
function ShowPostsCtrl($stateParams, PostFactory, $state) {
  const vm = this;

  PostFactory.get({id: $stateParams.id})
  .$promise
  .then(post => {
    console.log(post);
    vm.post = post;
  });

  vm.delete = deleteProduct;
  function deleteProduct(post) {
    PostFactory
    .remove({id: post.id})
    .$promise
    .then(()=> {
      $state.go('postsIndex');
    });
  }
}
