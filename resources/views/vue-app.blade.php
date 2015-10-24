<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Arnold Labastilla</title>
    <meta name="keywords" content="Profile, Portfolio, Web, Website, Web Developer, Developer, PHP, Laravel, Laravel Developer, Backend Developer">
    <meta
        name="description"
        content="I'm a Web Developer. I create competitive websites and analyze web systems based on your requirements. I modify, redesign (layout/codes/database), and beautify websites passionately with the use of my skills. I let my hands get dirty on coding, specifically on backend side. Also, a good problem solver."
    >

    <!-- Icon Logo -->
    <link rel="shortcut icon" href="{{ asset('images/logo.png') }}">

    <!-- Elixir -->
    <link rel="stylesheet" href="{{ elixir('css/all.css') }}">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->

</head>
<body id="app">

    <!-- Fixed navbar -->
    @include('pages/navbar')

    <div class="top-pusher"></div>

    <!-- Begin page content -->
    @include('pages/body')

    <!-- Footer -->
    @include('pages/footer')

    <!-- Latest compiled and minified JavaScript -->
    <script src="{{ asset('js/bundle.js') }}"></script>
    <script src="{{ elixir('js/all.js') }}"></script>

</body>
</html>
