class PostsBodyController {
    header = 'posts';
    posts = [
        {
            title: 'place holder post',
            posted: '2 days ago',
            content: 'Hello, World!'
        }
    ]
}

'use strict';

eyebrowFishModule.component('postsBody', {
    templateUrl: 'posts-body/posts-body.html',
    controller: PostsBodyController
});
