import template from './social.html';
import styles from './social.scss';

export default {
    template,
    bindings: {
        favs: '<',
        votes: '<',
        userFollows: '<',
        recentUsers: '<',
        randomPatches: '<',
        randomUsers: '<'
    },
    controller
};

function controller () {
    
    this.styles = styles;
    
}