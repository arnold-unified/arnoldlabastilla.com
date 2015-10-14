<div class="container">
    <div class="row">
        <div class="col-md-6 col-sm-12" id="vue-content">
            <!-- route outlet -->
            <router-view></router-view>
        </div>
        <div class="col-md-6 col-sm-12">
            <!-- Parallax -->
            <div class="parallax-style">
                <ul id="scene" class="scene list-unstyled">
                    <li class="layer" data-depth="0.20"><img src="{{ asset('images/clouds/7-ajax.png') }}" class="img-responsive"></li>
                    <li class="layer" data-depth="0.40"><img src="{{ asset('images/clouds/6-bootstrap.png') }}" class="img-responsive"></li>
                    <li class="layer" data-depth="0.60"><img src="{{ asset('images/clouds/5-jquery.png') }}" class="img-responsive"></li>
                    <li class="layer" data-depth="0.80"><img src="{{ asset('images/clouds/4.png') }}" class="img-responsive"></li>
                    <li class="layer" data-depth="0.80"><img src="{{ asset('images/clouds/wings.png') }}" class="img-responsive"></li>
                    <li class="layer" data-depth="0.90"><img src="{{ asset('images/clouds/man.png') }}" class="img-responsive"></li>
                    <li class="layer" data-depth="1.00"><img src="{{ asset('images/clouds/3-css3.png') }}" class="img-responsive"></li>
                    <li class="layer" data-depth="1.20"><img src="{{ asset('images/clouds/2-html5.png') }}" class="img-responsive"></li>
                    <li class="layer" data-depth="1.40"><img src="{{ asset('images/clouds/1-laravel.png') }}" class="img-responsive"></li>
                </ul>
            </div>
        </div>
    </div>
</div>