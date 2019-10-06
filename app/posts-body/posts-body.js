class PostsBodyController {
    header = 'posts';
    posts = [
        {
            title: 'place holder post #2',
            posted: '1 day ago',
            content: 'Hello again, World!'
        },
        {
            title: 'place holder post #1',
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
