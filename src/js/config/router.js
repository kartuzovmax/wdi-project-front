angular
.module('Reddit')
.config(Router);


Router.$injection = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
function Router($stateProvider, $locationProvider, $urlRouterProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: '/js/views/home.html',
    controller: 'MainCtrl',
    controllerAs: 'main'
  })
  .state('login', {
    url: '/login',
    templateUrl: '/js/views/user/login.html',
    controller: 'LoginCtrl',
    controllerAs: 'Login'
  })
  .state('register', {
    url: '/register',
    templateUrl: '/js/views/user/register.html',
    controller: 'RegisterCtrl',
    controllerAs: 'Register'
  })
  .state('postsIndex', {
    url: '/posts/all',
    templateUrl: '/js/views/posts/index.html',
    controller: 'PostsIndexCtrl',
    controllerAs: 'Posts'
  })
  .state('postsCreate', {
    url: '/posts/create',
    templateUrl: '/js/views/posts/add.html',
    controller: 'CreatePostsCtrl',
    controllerAs: 'Posts'
  })
  .state('postsShow', {
    url: '/posts/all',
    templateUrl: '/js/views/posts/show.html',
    controller: 'PostsShowCtrl',
    controllerAs: 'Posts'
  });

  $urlRouterProvider.otherwise('/');
}
