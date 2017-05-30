angular
.module('Reddit')
.controller('CreatePosts', CreatePosts);

CreatePosts.$injection = ['PostFactory', '$location'];
function CreatePosts(PostFactory, $location) {
  const vm = this;
  vm.create = postsCreate;
  function postsCreate() {
    PostFactory
    .create(vm.post)
    .$promise
    .then(post => {
      $location.path(`/posts/all/${post.id}`);
      console.log(vm.post);
    })
    .catch(err => console.log(err));
  }
}
