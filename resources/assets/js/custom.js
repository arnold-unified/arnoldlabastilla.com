/**
 * Set default active nav.
 *
 * @type {*|jQuery|HTMLElement}
 */
var activeA = $('.ul-nav-animation li a.v-link-active');

/**
 * Set animation end instance.
 *
 * @type {string}
 */
var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

/**
 * If 404 page is returned, set the default active nav to home.
 */
if (activeA.length === 0)
{
    activeA = $('#home');
}

$(function () {
    /**
     * Initialize tooltip
     */
    $('[data-toggle=tooltip]').tooltip();

    /**
     * Resets active nav.
     */
    resetActiveNav();

    /**
     * Manipulates nav slider.
     */
    $('.ul-nav-animation li a').hover(
        function()
        {
            slideNavs($(this));
        },
        function()
        {
            slideNavs(activeA);
        }
    );

    /**
     * Parallax initialization.
     *
     * @type {HTMLElement}
     */
    var scene = document.getElementById('scene');
    var parallax = new Parallax(scene);

    /**
     * Triggers content animation on page load.
     */
    animateContents();

    /**
     * Triggers content animation on click.
     */
    $('#app').unbind('click').on('click', '.vue-nav',
        function()
        {
            /**
             * Select the desired main nav and make it active.
             * Note: Used on both vue-nav and vue-sub-nav.
             *
             * @type {*|jQuery}
             */
            var dataClass = triggerActiveNav($(this));

            if ($(this).hasClass('vue-sub-nav'))
            {
                if (dataClass == 'skills')
                {
                    animateSubContents();
                }
            }
            else
            {
                animateContents();
            }
        }
    );

    /**
     * Initialize vue content.
     * @type {*|jQuery|HTMLElement}
     */
    var vue_content = $('.vue-content');

    /**
     * Animate logos on skills section and images on projects section.
     */
    animateLogos(vue_content);

    /**
     * Initializes and triggers popover
     */
    initializePopover(vue_content);
});

/**
 * Initializes popover.
 *
 * @param vue_content
 */
function initializePopover(vue_content)
{
    var popoverTemplate = '<div class="popover">' +
        '<div class="arrow"></div>' +
        '<div class="popover-content"></div>' +
        '</div>';

    var popoverSettings = {
        trigger: 'hover',
        placement: 'top',
        selector: '.vue-nav',
        content: function () {
            var pop_content = $(this).parents('li').find('.flat-popover-content');
            return pop_content.html();
        },
        template: popoverTemplate,
        html: true
    };
    vue_content.popover(popoverSettings);
}

/**
 * Animate logos on skills section and images on projects section.
 * @param vue_content
 */
function animateLogos(vue_content)
{
    vue_content.bind('mouseenter').on('mouseenter', '.thumbnail',
        function()
        {
            var spanAnimationClass = 'animated fadeInDown';
            $(this).parents('.parent-thumbnail').find('span, h4, small').css({ opacity: 1 }).addClass(spanAnimationClass).one(animationEnd, function() {
                $(this).removeClass(spanAnimationClass);
            });

            // Projects Section -- show overlay
            $(this).parents('.parent-thumbnail').find('.thumbnail-overlay').css({ opacity: 1 });
        }
    )
        .on('mouseleave', '.thumbnail',
        function()
        {
            var spanAnimationClass = 'animated fadeOutUp';
            $(this).parents('.parent-thumbnail').find('span, h4, small').addClass(spanAnimationClass).one(animationEnd, function() {
                $(this).removeClass(spanAnimationClass).css({ opacity: 0 });
            });

            // Projects Section -- show overlay
            $(this).parents('.parent-thumbnail').find('.thumbnail-overlay').css({ opacity: 0 });
        }
    );
}

/**
 * Triggers active nav.
 *
 * @param _this
 * @returns {*}
 */
function triggerActiveNav(_this)
{
    var dataClass = _this.data('class');
    var parentA = $('#' + dataClass);
    parentA.addClass('v-link-active');
    activeA = parentA;

    return dataClass;
}

/**
 * Resets active nav.
 */
function resetActiveNav()
{
    // If sub class link is active
    if ($('.vue-sub-nav').hasClass('v-link-active'))
    {
        var parentA = $('#' + $('.vue-sub-nav.v-link-active').data('class'));

        activeA = parentA;
        parentA.addClass('v-link-active');
    }

    var left = activeA.parent().position().left;
    var width = activeA.width();
    $('#slider').css({'left' : left, 'width' : width});
}

/**
 * Trigger slide navs.
 *
 * @param elem
 */
function slideNavs(elem)
{
    var left = elem.parent().position().left;
    var width = elem.width();

    $('#slider').stop().animate({
        'left' : left,
        'width' : width
    });
}

/**
 * Animate page contents.
 */
function animateContents()
{
    var title = $('.animated-title');
    title.css({ opacity: 0 });
    var hr = $('.hr-modified');
    hr.css({ opacity: 0 });
    var body = $('.animated-body');
    body.css({ opacity: 0 });

    setTimeout(
        function()
        {
            title.css({ opacity: 1 });
            var titleAnimationClass = 'animated fadeInDown';
            $('.animated-title').addClass(titleAnimationClass).one(animationEnd, function() {
                $(this).removeClass(titleAnimationClass);
            });
        }, 300
    );

    setTimeout(
        function()
        {
            hr.css({ opacity: 1 });
            var hrAnimationClass = 'animated fadeInRight';
            hr.addClass(hrAnimationClass).one(animationEnd, function() {
                $(this).removeClass(hrAnimationClass);
            });
        }, 300
    );

    setTimeout(
        function()
        {
            body.css({ opacity: 1 });
            var bodyAnimationClass = 'animated fadeIn';
            body.addClass(bodyAnimationClass).one(animationEnd, function() {
                $(this).removeClass(bodyAnimationClass);
            });
        }, 1000
    );

    var tagline1 = $('.tagline1');
    tagline1.css({ opacity: 0 });
    var tagline2 = $('.tagline2');
    tagline2.css({ opacity: 0 });
    var tagline3 = $('.tagline3');
    tagline3.css({ opacity: 0 });
    var tagline4 = $('.tagline4');
    tagline4.css({ opacity: 0 });
    var tagline5= $('.tagline5');
    tagline5.css({ opacity: 0 });
    var description = $('.description');
    description.css({ opacity: 0 });

    setTimeout(
        function()
            {
            tagline1.css({ opacity: 1 });
            var taglineAnimationClass1 = 'animated zoomInLeft';
            tagline1.addClass(taglineAnimationClass1).one(animationEnd, function() {
                $(this).removeClass(taglineAnimationClass1);
            });
        }, 300
    );

    setTimeout(
        function()
        {
            tagline3.css({ opacity: 1 });
            var taglineAnimationClass3 = 'animated zoomInRight';
            tagline3.addClass(taglineAnimationClass3).one(animationEnd, function() {
                $(this).removeClass(taglineAnimationClass3);
            });
        }, 300
    );

    setTimeout(
        function()
        {
            tagline2.css({ opacity: 1 });
            var taglineAnimationClass2 = 'animated bounceInDown';
            tagline2.addClass(taglineAnimationClass2).one(animationEnd, function() {
                $(this).removeClass(taglineAnimationClass2);
            });
        }, 600
    );

    setTimeout(
        function()
        {
            tagline4.css({ opacity: 1 });
            var taglineAnimationClass4 = 'animated flipInX';
            tagline4.addClass(taglineAnimationClass4).one(animationEnd, function() {
                $(this).removeClass(taglineAnimationClass4);
            });
        }, 900
    );

    setTimeout(
        function()
        {
            tagline5.css({ opacity: 1 });
            var taglineAnimationClass5 = 'animated bounceInRight';
            tagline5.addClass(taglineAnimationClass5).one(animationEnd, function() {
                $(this).removeClass(taglineAnimationClass5);

                description.css({ opacity: 1 });
                var descriptionAnimationClass = 'animated fadeInUp';
                description.addClass(descriptionAnimationClass).one(animationEnd, function() {
                    $(this).removeClass(descriptionAnimationClass);
                });
            });
        }, 1000
    );
}

/**
 * Animate page sub contents.
 */
function animateSubContents()
{
    var vue_sub_content = $('.vue-sub-content');
    vue_sub_content.css({ opacity: 0 });

    setTimeout(
        function ()
        {
            vue_sub_content.css({ opacity: 1 });
            var titleAnimationClass = 'animated fadeIn';
            vue_sub_content.addClass(titleAnimationClass).one(animationEnd, function() {
                $(this).removeClass(titleAnimationClass);
            });
        }, 200
    );
}