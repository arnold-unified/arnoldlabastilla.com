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
    '/': {
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
            '/frameworks-markups-styles': {
                component: {
                    template: require('./views/skills/frameworks-markups-styles.html')
                }
            },
            '/ide-tools-applications': {
                component: {
                    template: require('./views/skills/ide-tools-applications.html')
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
    }
});

router.redirect({
    '/skills': '/skills/chart'
});

router.start(App, '#app');