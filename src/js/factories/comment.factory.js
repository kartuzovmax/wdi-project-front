angular
  .module('Reddit')
  .factory('CommentFactory', CommentFactory);

CommentFactory.$inject = ['API', '$resource'];
function CommentFactory(API, $resource){
  return $resource(`${API}/comments/:id`, { id: '@_id'}, {
    'update': { method: 'PUT' }
  });
}
