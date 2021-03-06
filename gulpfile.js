var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Less
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix
        .styles([
            'bootstrap.min.css',
            'animate.css',
            'font-awesome.min.css',
            'custom.css'
        ], './public/css')
        .scripts([
            'jquery-1.11.3.min.js',
            'bootstrap.min.js',
            'parallax.min.js',
            'custom.js'
        ], './public/js')
        .version(['css/all.css','js/all.js']);

    mix.browserify(['app.js']);
});
