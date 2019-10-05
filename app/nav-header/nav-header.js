'use strict';

class NavigationHeaderController {
    title = 'eyebrow.fish';
    textIcon = '<\'`><';
    navButtons = [
        {
            text: 'home',
            url: '/'
        },
        {
            text: 'contact',
            url: '/'
        }
    ];
}

angular.module('eyebrowFish', []).component('navHeader', {
        templateUrl: 'nav-header/nav-header.html',
        controller: NavigationHeaderController
    }
);
