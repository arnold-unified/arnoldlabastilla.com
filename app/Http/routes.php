<?php

/***** backend routes *****/
Route::get('/', 'VueController@index');

/*Route::get('home', 'HomeController@index');

Route::controllers([
	'auth' => 'Auth\AuthController',
	'password' => 'Auth\PasswordController',
]);*/

/***** frontend routes *****/
Route::get('/{subs?}', function () {
    return View::make('vue-app');
})->where(['subs' => '.*']);