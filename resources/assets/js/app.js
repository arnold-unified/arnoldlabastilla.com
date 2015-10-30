var Vue = require('vue');
var VueRouter = require('vue-router');
Vue.use(VueRouter);

var App = Vue.extend({});
var router = new VueRouter({
    history: true
});

router.map({
    '*': {
        component: require('./views/404/404')
    },
    '/home': {
        component: require('./views/home/home')
    },
    '/about': {
        component: require('./views/about/about')
    },
    '/skills': {
        component: require('./views/skills/skills'),
        subRoutes: {
            '/chart': {
                component: {
                    template: require('./views/skills/chart.html')
                }
            },
            '/frameworks-languages-markups-styles': {
                component: {
                    template: require('./views/skills/frameworks.html')
                }
            },
            '/applications-ide-tools': {
                component: {
                    template: require('./views/skills/applications.html')
                }
            },
            '/databases': {
                component: {
                    template: require('./views/skills/databases.html')
                }
            },
            '/repositories': {
                component: {
                    template: require('./views/skills/repositories.html')
                }
            }
        }
    },
    '/projects': {
        component: require('./views/projects/projects')
    },
    '/contact': {
        component: require('./views/contact/contact')
    },
    '/credits': {
        component: require('./views/credits/credits')
    }
});

router.redirect({
    '/skills': '/skills/chart',
    '/': '/home'
});

router.start(App, '#app');