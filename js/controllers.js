redditClone.controller('postController', ($scope, $http) => {
    // $http.get('https://www.reddit.com/.json').then(function(result){
    //   console.log(result);
    //   $scope.redditPosts = result.data.data.children;
    // });

    $scope.view = {};
    $scope.view.posts = [
      {
        title: 'Bill Being Amazing',
        imageUrl: 'http://www.fillmurray.com/200/200',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        votes: 0,
        date: "Today at 12:55 PM",
        comments: [
          {
            name: "Steve",
            comment: "So true!"
          }
        ]
      },
      {
        title: 'Alex Looks Different',
        imageUrl: 'http://www.fillmurray.com/200/200',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        votes: 4,
        date: "Today at 9:55 PM",
        comments: [
          {
            name: "Nicole",
            comment: "Wow! She really does look different!"
          }
        ]
      },
      {
        title: 'Wow!',
        imageUrl: 'http://www.fillmurray.com/200/200',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        votes: 2,
        date: "Yesterday at 9:55 PM",
        comments: [
          {
            name: "Alex",
            comment: "Wow! Seriously!"
          }
        ]
      }
    ];

    $scope.view.sorter = 'votes';

    $scope.showForm = () => {
      $scope.showingForm = !$scope.showingForm;
    }

    $scope.addComment = (post) => {
      post.showingCommentForm = !post.showingCommentForm;
    }

    $scope.voteUp = (post) => {
      post.votes += 1;
    }

    $scope.voteDown = (post) => {
      post.votes -= 1;
    }

    $scope.showComments = (post) => {
      post.seeComments = !post.seeComments;
    }

    $scope.sortBy = (name) => {
      $scope.view.sorter = name;
    }

    $scope.submitForm = () => {
      var date = moment().calendar();
      $scope.view.post = {};

      $scope.view.post.title = $scope.view.title;
      $scope.view.post.imageUrl = $scope.view.imageUrl;
      $scope.view.post.description = $scope.view.description;
      $scope.view.post.votes = 0;
      $scope.view.post.comments = [];
      $scope.view.post.date = date;

      $scope.view.posts.push($scope.view.post);
      $scope.view.title = '';
      $scope.view.imageUrl = '';
      $scope.view.description = '';
      $scope.postForm.$setPristine();
      $scope.showingForm = !$scope.showingForm;
    }

    $scope.submitComment = (commentForm, post) => {
      post.comment = {};

      post.comment.name = $scope.view.name;
      post.comment.comment = $scope.view.comment;

      post.comments.push(post.comment);
      post.showingCommentForm = !post.showingCommentForm;
      $scope.view.comment ='';
      $scope.view.name ='';
      commentForm.$setPristine();
    }
});
