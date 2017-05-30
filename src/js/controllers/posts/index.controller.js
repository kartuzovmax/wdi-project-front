angular
.module('Reddit')
.controller('PostsIndexCtrl', PostsIndexCtrl);


PostsIndexCtrl.$injection = ['PostFactory'];
function PostsIndexCtrl(PostFactory) {
  const vm = this;

  PostFactory
  .query()
  .$promise
  .then(posts => {
    vm.posts = posts;
    console.log(posts);
  });
}
