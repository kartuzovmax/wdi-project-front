angular
  .module('Reddit')
  .controller('ShowPostsCtrl', ShowPostsCtrl);

ShowPostsCtrl.$inject = ['$stateParams', 'PostsFactory', '$state'];
function ShowPostsCtrl($stateParams, PostsFactory, $state) {
  const vm = this;
  PostsFactory.get({id: $stateParams.id})
  .$promise
  .then(post => {
    console.log(post);
    vm.posts = post;
  });

  vm.delete = deleteProduct;
  function deleteProduct(post) {
    PostsFactory
    .remove({id: post.id})
    .$promise
    .then(()=> {
      $state.go('postsIndex');
    });
  }
}
