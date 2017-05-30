angular
.module('Reddit')
.controller('CreatePostsCtrl', CreatePosts);

CreatePosts.$injection = ['PostFactory', '$location'];
function CreatePosts(PostFactory, $location) {
  const vm = this;

  vm.create = postsCreate;

  function postsCreate() {

    console.log('Creating post...');

    PostFactory
    .save(vm.post)
    .$promise
    .then(post => {
      // $location.path(`/posts/all/${post.id}`);
      $location.path(`/posts/all`);
      console.log(vm.post);
    })
    .catch(err => console.log(err));
  }
}
