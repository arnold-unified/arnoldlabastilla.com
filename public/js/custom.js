var activeA = $('.ul-nav-animation li a.v-link-active-exact');
var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

$(function () {
    // Initialize tooltip
    $('[data-toggle=tooltip]').tooltip();

    resetActiveNav();

    // Nav slider
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

    //Parallax
    var scene = document.getElementById('scene');
    var parallax = new Parallax(scene);

    // Content animation
    animateContents();
    $('#app').unbind('click').on('click', '.vue-nav',
        function()
        {
            // Select the desired main nav and make it active
            // Used on both vue-nav ang vue-sub-nav
            var dataClass = $(this).data('class');
            var parentA = $('#' + dataClass);
            parentA.addClass('v-link-active-exact');
            activeA = parentA;

            // If sub class link is active
            if ($(this).hasClass('vue-sub-nav'))
            {
                if (dataClass == 'skills')
                {
                    // Might want to add animation here for sub-contents
                    // I am changed
                    // I am another changed
                }
            }
            else
            {
                animateContents();
            }
        }
    );

    // Skills content animation
    $('#vue-content').on('mouseenter', '.img-container',
        function()
        {
            var spanAnimationClass = 'animated fadeInDown';
            $(this).parent('.col-md-2').find('span').css({ opacity: 1 }).addClass(spanAnimationClass).one(animationEnd, function() {
                $(this).removeClass(spanAnimationClass);
            });
        }
    )
        .on('mouseleave', '.img-container',
            function()
            {
                var spanAnimationClass = 'animated fadeOutUp';
                $(this).parent('.col-md-2').find('span').addClass(spanAnimationClass).one(animationEnd, function() {
                    $(this).removeClass(spanAnimationClass).css({ opacity: 0 });
                });
            }
    );
});

function resetActiveNav()
{
    // If sub class link is active
    if ($('.vue-sub-nav').hasClass('v-link-active-exact'))
    {
        var parentA = $('#' + $('.vue-sub-nav.v-link-active-exact').data('class'));

        activeA = parentA;
        parentA.addClass('v-link-active-exact');
    }

    var left = activeA.parent().position().left;
    var width = activeA.width();
    $('#slider').css({'left' : left, 'width' : width});
}

function slideNavs(elem)
{
    var left = elem.parent().position().left;
    var width = elem.width();

    $('#slider').stop().animate({
        'left' : left,
        'width' : width
    });
}

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

                body.css({ opacity: 1 });
                var bodyAnimationClass = 'animated fadeIn';
                body.addClass(bodyAnimationClass).one(animationEnd, function() {
                    $(this).removeClass(bodyAnimationClass);
                });
            });
        }, 300
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