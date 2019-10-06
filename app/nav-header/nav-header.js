class NavigationHeaderController {
    title = 'eyebrow.fish';
    textIcon = '<\'`><';
    navButtons = [
        {
            text: 'home',
            desc: 'The home page of eyebrow.fish',
            url: '/'
        },
        {
            text: 'contact',
            desc: 'Need to know how to contact me?',
            url: '/'
        }
    ];
}

'use strict';

eyebrowFishModule.component('navHeader', {
        templateUrl: 'nav-header/nav-header.html',
        controller: NavigationHeaderController
    }
);
