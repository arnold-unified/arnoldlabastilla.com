<nav class="navbar navbar-default navbar-fixed-top">
    <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="/">
                <img src="{{ asset('images/logo.png') }}" class="img-responsive" alt="Arnold Labastilla Logo"/>
            </a>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
            <ul class="nav navbar-nav navbar-right ul-nav-animation" style="position:relative;">
                <li><a v-link="{ path: '/' }" id="home" class="vue-nav" data-class="home">HOME</a></li>
                <li><a v-link="{ path: '/about' }" id="about" class="vue-nav" data-class="about">ABOUT</a></li>
                <li><a v-link="{ path: '/skills' }" id="skills" class="vue-nav" data-class="skills">SKILLS</a></li>
                <li><a v-link="{ path: '/projects' }" id="projects" class="vue-nav" data-class="projects">PROJECTS</a></li>
                <li><a v-link="{ path: '/contact' }" id="contact" class="vue-nav" data-class="contact">CONTACT</a></li>
                <li id="slider"></li>
            </ul>
        </div><!--/.nav-collapse -->
    </div>
</nav>