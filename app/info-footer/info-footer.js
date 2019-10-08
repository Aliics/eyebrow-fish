class InfoFooterController {
    title = 'eyebrow.fish';
    year = new Date().getFullYear().toString();
}

'use strict';

eyebrowFishModule.component('infoFooter', {
    templateUrl: 'info-footer/info-footer.html',
    controller: InfoFooterController
});
