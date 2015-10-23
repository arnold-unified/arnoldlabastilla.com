<?php

/***** backend routes *****/
Route::get('/', 'VueController@index');

/***** frontend routes *****/
Route::get('/{subs?}', function () {
    return View::make('vue-app');
})->where(['subs' => '.*']);