<div class="left-sidebar-pro">
    <nav id="sidebar" class="">
        <div class="sidebar-header">
            <a href="index.html"><img class="main-logo" src="{{asset('img/logo/logo.png')}}" alt=""/></a>
            <strong><img src="{{asset('img/logo/logosn.png')}}" alt=""/></strong>
        </div>
        <div class="nalika-profile">
            <div class="profile-dtl">
                <a href="#"><img src="{{asset('img/notification/4.jpg')}}" alt=""/></a>
                <h2>Lakian <span class="min-dtn">Das</span></h2>
            </div>
            <div class="profile-social-dtl">
                <ul class="dtl-social">
                    <li><a href="#"><i class="icon nalika-facebook"></i></a></li>
                    <li><a href="#"><i class="icon nalika-twitter"></i></a></li>
                    <li><a href="#"><i class="icon nalika-linkedin"></i></a></li>
                </ul>
            </div>
        </div>
        <div class="left-custom-menu-adp-wrap comment-scrollbar">
            <nav class="sidebar-nav left-sidebar-menu-pro">
                <ul class="metismenu" id="menu1">
                    <li class="active">
                        <a class="has-arrow" href="index.html">
                            <i class="icon nalika-home icon-wrap"></i>
                            <span class="mini-click-non">Monedero</span>
                        </a>
                        <ul class="submenu-angle" aria-expanded="true">
                            <li><a title="Dashboard v.1" href="{{route('monedero.index')}}"><span
                                            class="mini-sub-pro">Resumen</span></a></li>
                            <li><a title="Dashboard v.2" href="{{route('monedero.extras')}}"><span
                                            class="mini-sub-pro">Extras</span></a></li>
                        </ul>
                    </li>
                    <li>
                        <a class="has-arrow" href="{{route('monedero.add')}}" aria-expanded="false"><i
                                    class="icon nalika-mail icon-wrap"></i> <span class="mini-click-non">Transacciones</span></a>
                        <ul class="submenu-angle" aria-expanded="false">
                            <li><a title="Inbox" href="{{route('monedero.transacciones')}}"><span class="mini-sub-pro">Resumen</span></a></li>
                            <li><a title="View Mail" href="{{route('monedero.add')}}"><span
                                            class="mini-sub-pro">Añadir transaccion</span></a></li>
                        </ul>
                    </li>
                    <li id="removable">
                        <a class="has-arrow" href="#" aria-expanded="false"><i
                                    class="icon nalika-new-file icon-wrap"></i> <span
                                    class="mini-click-non">Herramientas</span></a>
                        <ul class="submenu-angle" aria-expanded="false">
                            <li><a title="Login" href="{{route('herramientas.bids')}}"><span class="mini-sub-pro">Bids</span></a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    </nav>
</div>