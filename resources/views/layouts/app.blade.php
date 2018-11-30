<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    @include('layouts.head')
    @yield('extracss')
</head>
<body>
    @include('layouts.navigation')
    <div class="all-content-wrapper">
        @include('layouts.navbar')
        <div class="container-fluid">
{{--            @include('flash::message')--}}
            @yield('content')
        </div>
        @include('layouts.footer')
    </div>
</body>
@include('layouts.scripts')
@yield('extrascripts')
</html>
