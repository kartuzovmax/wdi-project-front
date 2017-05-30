angular
  .module('Reddit')
  .factory('PostFactory', PostFactory);

PostFactory.$inject = ['API', '$resource'];
function PostFactory(API, $resource){
  return $resource(`${API}/posts/:id`, { id: '@_id'}, {
    'update': { method: 'PUT' }
  });
}
