function UTCurrencyNavigationBarView() {
    views.NavigationBar.call(this), this._generate()
}

function UTItemInfoChangeButton() {
    views.buttons.NavigationButton.call(this), this._currentState = enums.UIItemInfoState.MAIN, Object.defineProperty(this, "_currentState", {
        writable: !0,
        enumerable: !1
    }), this._generate()
}

function UTGameFlowNavigationController(t, toolbar) {
    t || (t = new UTCurrencyNavigationBarView), FUINavigationController.call(this, t, toolbar), this._itemInfoStateViewModel = new UTItemInfoStateViewModel(gUserSettingsModel), this._itemInfoSwitchButton = new UTItemInfoChangeButton, this._settingsNavButton = new views.buttons.NavigationButton
}

function UTSBCChallengesView() {
    FUITargetActionView.call(this), this._challengeTiles = [], this._generate()
}

function UTSBCChallengesViewController() {
    FUIViewController.call(this), this._requirementsOverlay = null, this._set = null
}

function UTSBCSetTileView() {
    UTTileView.call(this), this._data = null, this._generate()
}

function UTSBCHubView() {
    FUITargetActionView.call(this), this._sbcSetTiles = [], this._generate()
}

function UTSBCRewardPreviewView() {
    FUIView.call(this)
}

function UTSBCRewardPreviewViewController() {
    FUIViewController.call(this), this._previewImageId = ""
}

function UTSBCHubViewController() {
    FUIViewController.call(this), this._viewmodel = null
}

function UTSquadsHubView() {
    FUIView.call(this), this._generate()
}

function UTSquadListViewModel(t) {
    UTIterator.call(this, t)
}

function UTSquadListController() {
    FUIViewController.call(this), this._squadListViewDelegate = null, Object.defineProperty(this, "_squadListViewDelegate", {
        writable: !0,
        enumerable: !1
    }), this._viewmodel = null
}

function UTSquadListSplitViewController() {
    FUISplitViewController.call(this), this._listViewController = new UTSquadListController, this._squadDetailsController = null
}

function UTSquadsHubViewController() {
    FUIViewController.call(this), this._generationsSquad = null
}

function UTCoordinateVO(x, y) {
    this.x = x, Object.defineProperty(this, "x", {
        writable: !1,
        enumerable: !0
    }), this.y = y, Object.defineProperty(this, "y", {writable: !1, enumerable: !0})
}

function UTParticle() {
    UTObject.call(this), this.id = 0, this.x = 0, this.y = 0, this.gravity = 1, this.angle = 0, this.speed = 1, this.acceleration = 0, this.rotation = 0, this.rotationSpeed = 0, this.size = 1, this.alpha = 1, this.decay = 0, this.lifetime = 5e3, this._timestamp = Date.now(), this.color = "#000", this.coordinateHistory = []
}

function UTParticleSystem(canvas) {
    UTObject.call(this), this._ctx = canvas.getContext("2d"), Object.defineProperty(this, "_ctx", {
        writable: !0,
        enumerable: !1
    }), this._particles = [], Object.defineProperty(this, "_particles", {
        writable: !0,
        enumerable: !1
    }), this._parentParticleSystem = null, Object.defineProperty(this, "_parentParticleSystem", {
        writable: !0,
        enumerable: !1
    }), this._childParticleSystems = [], Object.defineProperty(this, "_childParticleSystems", {
        writable: !0,
        enumerable: !1
    }), this._runStart = 0, Object.defineProperty(this, "_runStart", {
        writable: !0,
        enumerable: !1
    }), this._running = !1, Object.defineProperty(this, "_running", {
        writable: !0,
        enumerable: !1
    }), this._lastSpawnTime = 0, Object.defineProperty(this, "_lastSpawnTime", {
        writable: !0,
        enumerable: !1
    }), this._frameRequestId = null, Object.defineProperty(this, "_frameRequestId", {
        writable: !0,
        enumerable: !1
    }), this.x = 0, this.y = 0, this.duration = 5e3, this.loop = !1, this.spawnRate = 10, this.spawnInterval = 100, this.spawnDelay = 0, this.maxParticles = 100, this.lifetime = 5, this.gravity = 1, this.angle = 0, this.speed = 1, this.acceleration = 0, this.rotation = 0, this.rotationSpeed = 0
}

function UTConfettiParticle() {
    UTParticle.call(this), this.tilt = 0
}

function UTConfettiColourVO(t, i) {
    this.primaryColour = t, Object.defineProperty(this, "primaryColour", {
        writable: !1,
        enumerable: !0
    }), this.secondaryColour = i, Object.defineProperty(this, "secondaryColour", {writable: !1, enumerable: !0})
}

function UTConfettiRainParticleSystem(canvas) {
    UTParticleSystem.call(this, canvas), this._confettiColor = new UTConfettiColourVO({r: 0, g: 0, b: 0}, {
        r: 0,
        g: 0,
        b: 0
    })
}

function UTConfettiCannonParticleSystem(canvas) {
    UTParticleSystem.call(this, canvas), this._confettiColor = new UTConfettiColourVO({r: 0, g: 0, b: 0}, {
        r: 0,
        g: 0,
        b: 0
    })
}

function UTParticleTrail() {
    this.color = "#000",
        this.time = 1, this.width = 1, this.lineCap = "round"
}

function UTFireworksParticleSystem(canvas) {
    UTParticleSystem.call(this, canvas), this._particleTrail = new UTParticleTrail, this._particleTrail.width = 10, this._particleTrail.time = .1
}

function UTSnowflakeParticle() {
    UTParticle.call(this)
}

function UTSnowfallParticleSystem(canvas) {
    UTParticleSystem.call(this, canvas)
}

function UTPackAnimationViewController() {
    FUIViewController.call(this), this._animationTimeout = 0, this._running = !1, this._presentedItem = null, this._packTier = "", this._callback = null
}

function UTPackOddsView() {
    FUIView.call(this), this._table = new UTTableView
}

function UTPackOddsViewController() {
    FUIViewController.call(this), this._odds = []
}

function UTStoreView() {
    FUITargetActionView.call(this), this._storePacks = [], this._generate()
}

function UTStoreViewController() {
    FUIViewController.call(this), this._viewmodel = null, Object.defineProperty(this, "_viewmodel", {
        writable: !0,
        enumerable: !1
    }), this._startingCategory = enums.Purchase.DisplayGroup.MYPACKS, Object.defineProperty(this, "_startingCategory", {
        writable: !0,
        enumerable: !1
    }), this._packLoadObservable = null, Object.defineProperty(this, "_packLoadObservable", {
        writable: !0,
        enumerable: !1
    })
}

function UTWatchListView() {
    FUIView.call(this), this._sections = [], this._emptyListView = null, this._generate()
}

function UTWatchListViewController() {
    FUIViewController.call(this), this._viewmodel = null, this.onDataChange = new UTObservable, Object.defineProperty(this, "onDataChange", {writable: !1}), this.onItemSelected = new UTObservable, Object.defineProperty(this, "onItemSelected", {writable: !1})
}

function UTWatchListSplitViewController() {
    FUISplitViewController.call(this), this._listController = new UTWatchListViewController, this._itemDetailController = new controllers.navigation.ItemDetails
}

function UTExternalLinkTile() {
    UTTileView.call(this), this._generate()
}

function UTTransfersHubView() {
    FUIView.call(this), this._generate()
}

function UTTransfersHubViewController() {
    FUIViewController.call(this)
}

function UTWebClientUpdateView() {
    FUITargetActionView.call(this), this._generate()
}

function UTWebClientUpdateViewController() {
    FUIViewController.call(this)
}

function UTRootView() {
    FUIView.call(this), this._generate()
}

function UTRootViewController() {
    FUIViewController.call(this)
}

function getAppRoot() {
    return document.getElementsByTagName("html").item(0)
}

function getAppBody() {
    return $("body")
}

function EASFCApp() {
    UTObject.call(this), this._appVersion = "", this._appIsBooting = !1, this._handlingPN = !1, this._initComplete = !1, this._configDelegate = null, this._pauseTimestamp = 0, this._UINotificationLayer = null, this._defaultDispatcher = null, this._keyboardEventController = null, this._rootViewController = null, this._imgPreloader = new utils.ImagePreloader
}

function EASFCApp_FUTWeb() {
    EASFCApp.call(this), this._orientationWarningMessage = null, this._FIFAHeader = new controllers.FIFAHeader, this._storageImpl = null
}

function getUrlVars() {
    var t = {locale: null, language: null}, i = window.location.href.indexOf("?");
    if ((i >= 0 ? window.location.href.slice(i + 1).split("&") : []).forEach(function (i) {
            var s = i.split("=");
            t[s[0]] = s[1]
        }), t.locale) {
        var s = t.locale.split("_");
        t.language = s[0], t.region = s[1]
    } else {
        var matches = /\/(uk|au|fr|it|de|es|mx|nl|pl|ru|jp|br|cz|se|dk|no)?\/fifa\/ultimate-team\//.exec(window.location.href);
        matches && (t.region = matches[1])
    }
    return t
}

function isChrome() {
    return !0, !0
}

function isWeb() {
    return !0, !0
}

function isAndroid() {
    return !1, !1
}

function isIE() {
    var t = !1, i = window.navigator.userAgent, s = i.indexOf("MSIE "), o = i.indexOf("Trident/");
    return (s > -1 || o > -1) && (t = !0), t
}

function isPhone() {
    return isWeb() ? window.matchMedia("(max-device-width: 360px) and (orientation: portrait), (max-aspect-ratio: 19/32) and (orientation: portrait)").matches || window.matchMedia("(min-aspect-ratio: 32/19) and (max-device-width: 1023px) and (orientation: landscape)").matches : isAndroid() ? window.matchMedia("(max-device-width: 599px)").matches : window.matchMedia("(orientation: portrait)").matches
}

function getUUID() {
    return "0", "0"
}

function getAppMain() {
    return _appMain
}

function getStorage() {
    return _appMain ? _appMain.getStorage() : localStorage
}

function onDeviceReady() {
    document.addEventListener("visibilitychange", onVisibilityChanged, !1), window.addEventListener("orientationchange", onOrientationChanged, !1), window.addEventListener("online", onAppOnline, !1), window.addEventListener("offline", onAppOffline, !1), (_appMain = new EASFCApp_FUTWeb).init();
    var t = "", i = "";
    if (window.MobileAccessibility && (window.MobileAccessibility.usePreferredTextZoom(!1), window.MobileAccessibility.setTextZoom(100)), isChrome()) {
        var s = utils.HTTP.getParamsFromUrl(window.location.href);
        if (s.has(enums.URLParams.TOKEN)) {
            var o = getStorage();
            o.setItem(enums.EADPIdentity.ACCESS_TOKEN, s.get(enums.URLParams.TOKEN)), s.remove(enums.URLParams.TOKEN), s.has(enums.URLParams.EXPIRE) && (o.setItem(enums.EADPIdentity.EXPIRE, s.get(enums.URLParams.EXPIRE)), s.remove(enums.URLParams.EXPIRE))
        }
        s.has(enums.URLParams.SHOWOFFID) && (_appMain.setUnauthenticatedShowOffId(s.get(enums.URLParams.SHOWOFFID)), s.remove(enums.URLParams.SHOWOFFID)), (i = services.URL.findValidDeepLinkID(s.keys())) !== enums.DeepLinkSections.NONE && services.URL.setDeepLinkURL(i, s.get(i))
    } else window.universalLinks.subscribe("launchFromLink", function (s) {
        if ((t = s.params[enums.URLParams.SHOWOFFID]) && _appMain.setUnauthenticatedShowOffId(t), (i = services.URL.findValidDeepLinkID(Object.keys(s.params))) !== enums.DeepLinkSections.NONE) {
            services.URL.setDeepLinkURL(i, s.params[i]);
            var state = services.Authentication.getSession(enums.AuthEnvironment.UTAS).state;
            _appMain.isInitComplete() && state === enums.AuthenticationState.STATE_AUTHENTICATED && services.URL.processDeepLinkURL()
        }
    })
}

function onPN(t, url) {
    _appMain && _appMain.onPN(t, url)
}

function handleOpenURL(url) {
    _appMain && _appMain.onHandleDeepLink(url)
}

function hasConnection() {
    return navigator.onLine
}

function onAppPaused() {
    _appMain && _appMain.onPause()
}

function onAppResumed() {
    _appMain && _appMain.onResume()
}

function onVisibilityChanged(e) {
    document.hidden ? onAppPaused() : onAppResumed()
}

function onAppOnline() {
    _appMain && _appMain.onOnline()
}

function onAppOffline() {
    _appMain && _appMain.onOffline()
}

function isVerboseLoggingEnabled() {
    return !!_appMain && _appMain.isVerboseLoggingEnabled()
}

function getAppVersion() {
    return _appMain ? _appMain.getAppVersion() : 0
}

function getAppId() {
    return _appMain ? _appMain.getAppIdentifier() : "com.ea.fifaultimate.inc"
}

function getSellId() {
    return _appMain ? _appMain.getSellId() : 0
}

function getStoreId() {
    return 0
}

function getDefaultDispatcher() {
    return _appMain ? _appMain.getDefaultDispatcher() : null
}

function getKeyboardEventController() {
    return _appMain ? _appMain.getKeyboardEventController() : null
}

function onOrientationChanged() {
    _appMain && _appMain.onOrientationChanged()
}

function getWindowOrientation() {
    return window.orientation || 0 === window.orientation ? window.orientation : isPhone() ? enums.DeviceOrientation.PORTRAIT : enums.DeviceOrientation.LANDSCAPE_RIGHT
}

function removeFocus() {
    document.activeElement && "body" !== document.activeElement.nodeName.toLowerCase() && document.activeElement.blur()
}

function showKeyboard() {
    !isChrome() && cordova && cordova.plugins && cordova.plugins.Keyboard && cordova.plugins.Keyboard.show()
}

function hideKeyboard() {
    removeFocus(), !isChrome() && cordova && cordova.plugins && cordova.plugins.Keyboard && cordova.plugins.Keyboard.close()
}

views.squads.TOTWSummaryBanner = function TOTWSquadSummaryBannerView() {
    views.squads.SummaryBanner.call(this), this._generate()
}, utils.JS.inherits(views.squads.TOTWSummaryBanner, views.squads.SummaryBanner), views.squads.TOTWSummaryBanner.prototype._generate = function _generate() {
    if (!this._generated) {
        var t = document.createElement("div");
        t.classList.add("totw"), t.classList.add("ut-squad-summary");
        var i = document.createElement("div");
        i.classList.add("ut-squad-summary-info"), this.__formationTitle = document.createElement("span"), this.__formationTitle.classList.add("ut-squad-summary-label"), i.appendChild(this.__formationTitle), this.__formationValue = document.createElement("span"), this.__formationValue.classList.add("ut-squad-summary-value"), i.appendChild(this.__formationValue),
            t.appendChild(i), this._squadStats = new components.SquadRating, t.appendChild(this._squadStats.getRootElement());
        var s = document.createElement("div");
        s.classList.add("totw-squad-buttons"), s.classList.add("ut-squad-summary-info"), this._copySquadIcon = new views.buttons.FlatButton, this._copySquadIcon.getRootElement().classList.add("fut_icon"), this._copySquadIcon.getRootElement().classList.add("icon_copy"), this._copySquadIcon.getRootElement().classList.add("copy-squad-icon"), s.appendChild(this._copySquadIcon.getRootElement()), this._historyBtn = new views.buttons.FlatButton, this._historyBtn.getRootElement().classList.add("fut_icon"), this._historyBtn.getRootElement().classList.add("icon_list"), this._historyBtn.getRootElement().classList.add("totw-history-icon"), s.appendChild(this._historyBtn.getRootElement()), t.appendChild(s), this.__root = t, this._generated = !0
    }
}, views.squads.TOTWSummaryBanner.prototype.destroyGeneratedElements = function destroyGeneratedElements() {
    $(this.__root).off().remove(), this.__root = null, this.__formationTitle = null, this.__formationValue = null, this._squadStats.destroy(), this._copySquadIcon.destroy(), this._historyBtn.destroy()
}, views.squads.TOTWSummaryBanner.prototype.getRoot = function getRoot() {
    return $(this.__root)
}, views.squads.TOTWSummaryBanner.prototype.getRootElement = function getRootElement() {
    return this.__root
}, views.squads.TOTWSummaryBanner.prototype.init = function init() {
    this.superclass(), this._squadStats.init(), this._historyBtn.init(), this._copySquadIcon.init()
}, views.squads.TOTWSummaryBanner.prototype.setChemistry = function setChemistry(value, t) {
}, views.squads.TOTWSummaryBanner.prototype.setCanCopySquad = function setCanCopySquad(value) {
    this._copySquadIcon.setInteractionState(value)
}, views.squads.TOTWSummaryBanner.prototype.getHistoryButton = function getHistoryButton() {
    return this._historyBtn
}, views.squads.TOTWSummaryBanner.prototype.getCopyButton = function getCopyButton() {
    return this._copySquadIcon
}, views.squads.ShowOffSquadOverview = function ShowOffSquadOverviewView() {
    views.squads.SquadOverview.call(this)
}, utils.JS.inherits(views.squads.ShowOffSquadOverview, views.squads.SquadOverview), controllers.squads.ShowOffSquadOverview = function ShowOffSquadOverviewViewController() {
    controllers.squads.SquadOverview.call(this)
}, utils.JS.inherits(controllers.squads.ShowOffSquadOverview, controllers.squads.SquadOverview), controllers.squads.ShowOffSquadOverview.prototype._getViewInstanceFromData = function _getViewInstanceFromData() {
    return new views.squads.ShowOffSquadOverview
}, controllers.squads.ShowOffSquadOverview.prototype._getTelemetryId = function _getTelemetryId() {
    return "Show Off Squad"
}, controllers.squads.ShowOffSquadOverview.prototype.viewDidAppear = function viewDidAppear() {
    this.superclass();
    var t = this.getNavigationController();
    if (t && (t.setNavigationVisibility(!0, !0), t.conforms(UTGameFlowNavigationController))) {
        var i = services.User.getUser(), s = i ? i.getSelectedPersona() : null, o = !!s && s.hasFullAccess;
        t.toggleFUTLogo(!isPhone() && !o)
    }
    getDefaultDispatcher().addObserver(enums.Notification.APP_RESUME, this, this._nAppResumed)
}, controllers.squads.ShowOffSquadOverview.prototype.viewWillDisappear = function viewWillDisappear() {
    this.superclass(), getDefaultDispatcher().removeObserver(enums.Notification.APP_RESUME, this)
}, controllers.squads.ShowOffSquadOverview.prototype._pushSquadToView = function _pushSquadToView(t) {
    var view = this.getView();
    view.setType(t.isDream() ? enums.SquadPitchTypes.CONCEPT : enums.SquadPitchTypes.REGULAR), view.setSquad(t)
}, controllers.squads.ShowOffSquadOverview.prototype._eItemTap = function _eItemTap(sender, event, data) {
    this._squad.getSlot(data.slotIndex).isValid() && this.superclass(sender, event, data)
}, controllers.squads.ShowOffSquadOverview.prototype._eDetailsButtonSelected = function _eDetailsButtonSelected(sender, event, data) {
    var t = this.getNavigationController();
    if (t) {
        var i = new controllers.squads.ShowOffSquadActions;
        i.initWithSquad(this._squad), t.pushViewController(i, !0)
    }
},
    controllers.squads.ShowOffSquadOverview.prototype._nAppResumed = function _nAppResumed(t, sender, data) {
        repositories.Squad.hasExternalShowOffSquad() && services.Squad.loadShowOffSquad().observe(this, function (t, i) {
            if (t.unobserve(this), i.success) {
                var s = this.getNavigationController();
                s && s instanceof UTGameFlowNavigationController && s.setClubInfo(i.showOffDTO.clubName, i.showOffDTO.estDate), this.setSquad(i.showOffDTO.squad)
            }
        })
    }, controllers.squads.ShowOffSquadOverview.prototype._nInfoStateChanged = function _nInfoStateChanged(t, sender, data) {
    TelemetryManager.trackEvent(TelemetryManager.Sections.SQUADS, TelemetryManager.Categories.BUTTON_PRESS, "Item Info Switch Button - Show Off Squad")
}, utils.JS.inherits(UTCurrencyNavigationBarView, views.NavigationBar), UTCurrencyNavigationBarView.prototype._generate = function _generate() {
    if (!this._generated) {
        var t = document.createElement("div");
        t.classList.add("NavigationBar"), this.__title = document.createElement("h1"), this.__title.classList.add("title"), t.appendChild(this.__title), this.__currencies = document.createElement("div"), this.__currencies.classList.add("view-navbar-currency"), this.__currencyCoins = document.createElement("div"), this.__currencyCoins.classList.add("view-navbar-currency-coins"), this.__currencies.appendChild(this.__currencyCoins), this.__currencyPoints = document.createElement("div"), this.__currencyPoints.classList.add("view-navbar-currency-points"), this.__currencies.appendChild(this.__currencyPoints), t.appendChild(this.__currencies), this.__clubInfo = document.createElement("div"), this.__clubInfo.classList.add("view-navbar-clubinfo");
        var i = document.createElement("div");
        i.classList.add("view-navbar-clubinfo-data"), this.__clubInfoEst = document.createElement("span"), this.__clubInfoEst.classList.add("view-navbar-clubinfo-est"), i.appendChild(this.__clubInfoEst), this.__clubInfoName = document.createElement("span"), this.__clubInfoName.classList.add("view-navbar-clubinfo-name"), i.appendChild(this.__clubInfoName), this.__clubInfo.appendChild(i), this._clubInfoBadge = new components.ImageLoader, this._clubInfoBadge.getRootElement().classList.add("view-navbar-clubinfo-badge"), this.__clubInfo.appendChild(this._clubInfoBadge.getRootElement()), t.appendChild(this.__clubInfo), this.__root = t, this._generated = !0
    }
}, UTCurrencyNavigationBarView.prototype.destroyGeneratedElements = function destroyGeneratedElements() {
    $(this.__root).off().remove(), this.__root = null, this.__title = null, this.__currencies = null, this.__currencyCoins = null, this.__currencyPoints = null, this.__clubInfo = null, this.__clubInfoEst = null, this.__clubInfoName = null, this._clubInfoBadge.destroy()
}, UTCurrencyNavigationBarView.prototype.getRoot = function getRoot() {
    return $(this.__root)
}, UTCurrencyNavigationBarView.prototype.getRootElement = function getRootElement() {
    return this.__root
}, UTCurrencyNavigationBarView.prototype.setCurrency = function setCurrency(t) {
    switch (t.type) {
        case enums.Currency.COINS:
            this.__currencyCoins.textContent = services.Localization.localizeNumber(t.amount);
            break;
        case enums.Currency.POINTS:
            this.__currencyPoints.textContent = services.Localization.localizeNumber(t.amount)
    }
}, UTCurrencyNavigationBarView.prototype.setCurrencies = function setCurrencies(t) {
    utils.JS.valToArray(t).forEach(this.setCurrency, this)
}, UTCurrencyNavigationBarView.prototype.displayCurrencies = function displayCurrencies(t) {
    DOMKit.toggleDisplayStyle(this.__currencies, t)
}, UTCurrencyNavigationBarView.prototype.displayClubInfo = function displayClubInfo(t) {
    DOMKit.toggleDisplayStyle(this.__clubInfo, t)
}, UTCurrencyNavigationBarView.prototype.setClubInfo = function setClubInfo(name, t) {
    this.__clubInfoName.textContent = name, this.__clubInfoEst.textContent = services.Localization.localizeEstablishedDate(new Date(t * MS_PER_SECOND))
}, UTCurrencyNavigationBarView.prototype.setClubBadge = function setClubBadge(t) {
    var url = utils.AssetLocator.getImage(utils.AssetLocator.IMAGE_TYPE_BADGE_LIGHT, enums.Year.ASSET, t);
    this._clubInfoBadge.setResource(url, !0).observe(this, function (t, i) {
        if (t.unobserve(this), !i) {
            var s = utils.AssetLocator.getImage(utils.AssetLocator.IMAGE_TYPE_BADGE_LIGHT, enums.Year.ASSET, utils.AssetLocator.ASSET_ID_DEFAULT);
            this._clubInfoBadge.setResource(s)
        }
    })
}, UTCurrencyNavigationBarView.prototype._tapDetected = function _tapDetected(e) {
    this.superclass(), this.__currencyPoints.contains(e.target) && this._triggerActions(enums.Event.TAP)
}, utils.JS.inherits(UTItemInfoChangeButton, views.buttons.NavigationButton), UTItemInfoChangeButton.prototype._generate = function _generate() {
    if (!this._generated) {
        var t = document.createElement("button");
        t.classList.add("btn-item-info-switch"), this.__label = document.createElement("span"), t.appendChild(this.__label), this.__root = t, this._generated = !0
    }
}, UTItemInfoChangeButton.prototype.destroyGeneratedElements = function destroyGeneratedElements() {
    $(this.__root).off().remove(), this.__root = null, this.__label = null
}, UTItemInfoChangeButton.prototype.getRoot = function getRoot() {
    return $(this.__root)
}, UTItemInfoChangeButton.prototype.getRootElement = function getRootElement() {
    return this.__root
}, UTItemInfoChangeButton.prototype.init = function init() {
    this.superclass(), this.setInteractionState(!0), this._updateInfoStateAttribute()
}, UTItemInfoChangeButton.prototype.setText = function setText(text) {
    this.__label.textContent = text
}, UTItemInfoChangeButton.prototype.setCurrentState = function setCurrentState(state) {
    this._currentState !== state && (this._currentState = state, this._updateInfoStateAttribute())
}, UTItemInfoChangeButton.prototype._updateInfoStateAttribute = function _updateInfoStateAttribute() {
    var t;
    switch (this._currentState) {
        case enums.UIItemInfoState.MAIN:
            t = "main";
            break;
        case enums.UIItemInfoState.BIO:
            t = "bio";
            break;
        case enums.UIItemInfoState.STATS:
            t = "stats";
            break;
        case enums.UIItemInfoState.STYLE:
            t = "style";
            break;
        default:
            t = "main"
    }
    this.getRootElement().setAttribute("data-info-state", t)
}, utils.JS.inherits(UTGameFlowNavigationController, FUINavigationController), UTGameFlowNavigationController.prototype.init = function init() {
    this.initialized || (this.superclass(), this._itemInfoSwitchButton.init(), this._itemInfoSwitchButton.setInteractionState(!0), this._itemInfoSwitchButton.addTarget(this, this._eItemInfoSwitchButtonSelected, enums.Event.TAP), this._settingsNavButton.init(), this._settingsNavButton.addClass("settings-btn"), this._settingsNavButton.setInteractionState(!0), this._settingsNavButton.addTarget(this, this._eSettingsButtonSelected, enums.Event.TAP), this._navigationBar.isSubClass(UTCurrencyNavigationBarView) && (this._navigationBar.displayCurrencies(!1), this._navigationBar.displayClubInfo(!1)))
}, UTGameFlowNavigationController.prototype.dealloc = function dealloc() {
    this._settingsNavButton.dealloc(), this.superclass()
}, UTGameFlowNavigationController.prototype.getRootPrimaryNavigationItem = function getRootPrimaryNavigationItem() {
    return this._settingsNavButton
}, UTGameFlowNavigationController.prototype.getSecondaryNavigationItem = function getSecondaryNavigationItem() {
    if (this._currentController) {
        var t = this._currentController.getNavigationItem();
        if (utils.JS.isValid(t)) return t
    }
    return this._itemInfoSwitchButton
}, UTGameFlowNavigationController.prototype.viewDidAppear = function viewDidAppear() {
    this.superclass(), this.setNavigationStyle(isPhone() ? enums.UINavigationBarStyle.DEFAULT : enums.UINavigationBarStyle.LANDSCAPE), this._itemInfoSwitchButton.setCurrentState(this._itemInfoStateViewModel.getState());
    var t = getDefaultDispatcher(), i = services.User.getUser();
    if (t.addObserver(enums.Notification.APP_RESUME, this, this._nAppResumed), t.addObserver(enums.Notification.UI_ITEM_STATE_CHANGE, this, this._nItemStateChanged), i && this._navigationBar.isSubClass(UTCurrencyNavigationBarView)) {
        var s = i.getSelectedPersona(), o = s.getCurrentClub();
        this._navigationBar.setCurrencies(i.getCurrencies()), this._navigationBar.displayCurrencies(!0), o && this.setClubInfo(o.name, o.established, o.assetId);
        var l = utils.OriginStore.storeLoaded && gSettingsModel.isServiceAvailable(models.SettingsModel.MTX_ENABLED) && s.isPC;
        this._navigationBar.toggleClass("currency-purchase", l),
        l && (utils.OriginStore.onCheckout.observe(this, this._eOriginCheckout), this._navigationBar.addTarget(this, this._eNavigationBarTapped, enums.Event.TAP)), t.addObserver(enums.Notification.ITEM_ACTIVATE, this, this._nItemActivated), t.addObserver(enums.Notification.USER_CURRENCY_UPDATE, this, this._nCurrencyUpdated)
    }
}, UTGameFlowNavigationController.prototype.viewWillDisappear = function viewWillDisappear() {
    this.superclass(), utils.OriginStore.onCheckout.unobserve(this), this._navigationBar.removeTarget(this, this._eNavigationBarTapped, enums.Event.TAP);
    var t = getDefaultDispatcher();
    t.removeObserver(enums.Notification.APP_RESUME, this), t.removeObserver(enums.Notification.ITEM_ACTIVATE, this), t.removeObserver(enums.Notification.UI_ITEM_STATE_CHANGE, this), t.removeObserver(enums.Notification.USER_CURRENCY_UPDATE, this)
}, UTGameFlowNavigationController.prototype.toggleFUTLogo = function toggleFUTLogo(t) {
    this._navigationBar.toggleClass("has-fut-logo", t)
}, UTGameFlowNavigationController.prototype.setClubInfo = function setClubInfo(t, i, s) {
    this._navigationBar instanceof UTCurrencyNavigationBarView && (this._navigationBar.setClubInfo(t, parseInt(i, 10)), this._navigationBar.setClubBadge(s || 0), this._navigationBar.displayClubInfo(!0))
}, UTGameFlowNavigationController.prototype._eSettingsButtonSelected = function _eSettingsButtonSelected(sender, event, data) {
    var t = new UTAppSettingsViewController;
    t.init(), this.pushViewController(t)
}, UTGameFlowNavigationController.prototype._eItemInfoSwitchButtonSelected = function _eItemInfoSwitchButtonSelected(sender, event, data) {
    this._itemInfoSwitchButton.setCurrentState(this._itemInfoStateViewModel.nextState())
}, UTGameFlowNavigationController.prototype._eNavigationBarTapped = function _eNavigationBarTapped(sender, event, data) {
    gClickShield.showShield(components.ClickShield.SHIELD.LOADING), services.Configuration.requestSettingsData().observe(this, function _onRequestSettingsComplete(t, response) {
        t.unobserve(this);
        var i = utils.OriginStore.storeLoaded && gSettingsModel.isServiceAvailable(models.SettingsModel.MTX_ENABLED) && services.User.getUser().getSelectedPersona().isPC;
        this._navigationBar.toggleClass("currency-purchase", i), i && utils.OriginStore.openStore(), gClickShield.hideShield(components.ClickShield.SHIELD.LOADING)
    })
}, UTGameFlowNavigationController.prototype._eOriginCheckout = function _eOriginCheckout(t, data) {
    if (services.User.getUser().getSelectedPersona().isPC) {
        var i = new communication.GetMTXTransactionDelegate;
        i.addListener(communication.BaseDelegate.SUCCESS, this, function _onGetMTXSuccess(sender) {
            sender.clearListenersByScope(this), gSettingsModel.setUnrecoveredFIFAPointsTransaction(!1), services.User.requestCurrencies()
        }), i.addListener(communication.BaseDelegate.FAIL, this, function _onGetMTXFail(sender, error) {
            sender.clearListenersByScope(this), gSettingsModel.setUnrecoveredFIFAPointsTransaction(!0), services.Notification.queue([services.Localization.localize("popup.error.mobile.invalidTransactionState"), enums.UINotificationType.NEGATIVE])
        }), i.send()
    } else services.User.requestCurrencies()
}, UTGameFlowNavigationController.prototype._nItemActivated = function _nItemActivated(t, sender, data) {
    var i = services.User.getUser();
    if (i && this._navigationBar.isSubClass(UTCurrencyNavigationBarView)) {
        var s = i.getSelectedPersona().getCurrentClub();
        s && this._navigationBar.setClubBadge(s.assetId)
    }
}, UTGameFlowNavigationController.prototype._nCurrencyUpdated = function _nCurrencyUpdated(t, sender, data) {
    this._navigationBar.setCurrency(data.currency), this._navigationBar.displayCurrencies(!0)
}, UTGameFlowNavigationController.prototype._nAppResumed = function _nAppResumed(t, sender, data) {
    !this.getCurrentController().isSubClass(controllers.squads.ShowOffSquadOverview) && repositories.Squad.hasExternalShowOffSquad() && (gClickShield.showShield(components.ClickShield.SHIELD.LOADING), services.Squad.loadShowOffSquad().observe(this, function (t, i) {
        if (t.unobserve(this), i.success) {
            var s = isPhone() ? new controllers.squads.ShowOffSquadOverview : new controllers.squads.ShowOffSquadLandscape
            ;s.initWithSquad(i.showOffDTO.squad), this.pushViewController(s)
        }
        gClickShield.hideShield(components.ClickShield.SHIELD.LOADING)
    }))
}, UTGameFlowNavigationController.prototype._nItemStateChanged = function _nItemStateChanged(t, sender, data) {
    sender !== this._itemInfoStateViewModel && this._itemInfoSwitchButton.setCurrentState(data.state)
}, NamespaceManager.Register("components"), components.SBCReward = function (data) {
    this.data = data, Object.defineProperty(this, "data", {writable: !1}), this._generate()
}, components.SBCReward.prototype._generate = function _generate() {
    if (!this._generated) {
        var t = document.createElement("li");
        t.classList.add("sbc-reward"), this.__image = document.createElement("div"), this.__image.classList.add("image"), t.appendChild(this.__image);
        var i = document.createElement("div");
        i.classList.add("reward-info");
        var s = document.createElement("div");
        s.classList.add("centering-container"), this.__value = document.createElement("span"), this.__value.classList.add("value"), s.appendChild(this.__value), this.__type = document.createElement("span"), this.__type.classList.add("type"), s.appendChild(this.__type), i.appendChild(s), t.appendChild(i), this.__root = t, this._generated = !0
    }
}, components.SBCReward.prototype.destroyGeneratedElements = function destroyGeneratedElements() {
    $(this.__root).off().remove(), this.__root = null, this.__image = null, this.__value = null, this.__type = null
}, components.SBCReward.prototype.getRoot = function getRoot() {
    return $(this.__root)
}, components.SBCReward.prototype.getRootElement = function getRootElement() {
    return this.__root
}, components.SBCReward.PACK_ID_CLASS_TABLE = {
    1: "bronze",
    2: "silver",
    3: "gold"
}, components.SBCReward.prototype.destroy = function destroy() {
    this.destroyGeneratedElements()
}, components.SBCReward.prototype.render = function render() {
    if (utils.JS.isValid(this.data)) {
        switch (this.__type.textContent = this.data.buildString(), this.data.type) {
            case enums.AwardType.COIN:
                this.__value.textContent = services.Localization.localizeNumber(this.data.value) + " ";
                break;
            case enums.AwardType.PACK:
                utils.JS.isValid(components.SBCReward.PACK_ID_CLASS_TABLE[this.data.halId]) && DOMKit.addClass(this.__image, components.SBCReward.PACK_ID_CLASS_TABLE[this.data.halId]);
                break;
            case enums.AwardType.ITEM:
                var item = this.data.itemData;
                if (item.isPlayerPickItem()) DOMKit.addClass(this.__image, "player-pick"); else if (!item.isSpecial()) {
                    var t;
                    t = item.isBronzeRating() ? "bronze" : item.isSilverRating() ? "silver" : "gold", DOMKit.addClass(this.__image, t)
                }
        }
        DOMKit.removeClass(this.__image, "coin item pack"), DOMKit.addClass(this.__image, this.data.type)
    }
}, NamespaceManager.Register("components"), components.SBCRewards = function () {
    this._data = null, this._rewards = [], this._generate()
}, components.SBCRewards.prototype._generate = function _generate() {
    if (!this._generated) {
        var t = document.createElement("ul");
        t.classList.add("sbc-rewards"), this.__root = t, this._generated = !0
    }
}, components.SBCRewards.prototype.destroyGeneratedElements = function destroyGeneratedElements() {
    $(this.__root).off().remove(), this.__root = null
}, components.SBCRewards.prototype.getRoot = function getRoot() {
    return $(this.__root)
}, components.SBCRewards.prototype.getRootElement = function getRootElement() {
    return this.__root
}, components.SBCRewards.prototype.destroy = function () {
    for (; this._rewards.length > 0;) this._rewards.pop().destroy();
    this.destroyGeneratedElements()
}, components.SBCRewards.prototype.setData = function (data) {
    for (this._data = data; this._rewards.length > 0;) this._rewards.pop().destroy();
    utils.JS.isValid(this._data) && (this._rewards = this._data.map(function (t) {
        return new components.SBCReward(t)
    }, this))
}, components.SBCRewards.prototype.getData = function () {
    return this._data
}, components.SBCRewards.prototype.render = function () {
    utils.JS.isValid(this._data) && (this.getRoot().empty(), this._rewards.forEach(function (t, i) {
        this.getRoot().append(t.getRoot()), t.render()
    }, this))
}, NamespaceManager.Register("components"), components.SBCProgressBar = function () {
    views.ProgressBar.call(this), this._challengesCount = 0, this._challengesCompletedCount = 0, this._generate()
},
    utils.JS.inherits(components.SBCProgressBar, views.ProgressBar), components.SBCProgressBar.prototype._generate = function _generate() {
    if (!this._generated) {
        var t = document.createElement("div");
        t.classList.add("progress-bar-self-labeled"), t.classList.add("sbc-progress-bar"), this.__progressText = document.createElement("span"), this.__progressText.classList.add("progressText"), t.appendChild(this.__progressText), this.__bar = document.createElement("div"), this.__bar.classList.add("bar"), this.__bg = document.createElement("div"), this.__bg.classList.add("bg"), this.__fill = document.createElement("div"), this.__fill.classList.add("fill"), this.__bg.appendChild(this.__fill), this.__bar.appendChild(this.__bg), t.appendChild(this.__bar), this.__root = t, this._generated = !0
    }
}, components.SBCProgressBar.prototype.destroyGeneratedElements = function destroyGeneratedElements() {
    $(this.__root).off().remove(), this.__root = null, this.__progressText = null, this.__bar = null, this.__bg = null, this.__fill = null
}, components.SBCProgressBar.prototype.getRoot = function getRoot() {
    return $(this.__root)
}, components.SBCProgressBar.prototype.getRootElement = function getRootElement() {
    return this.__root
}, components.SBCProgressBar.prototype.setData = function setData(data) {
    this._challengesCount = data.challengesCount, this._challengesCompletedCount = data.challengesCompletedCount, this.setProgress(this._challengesCompletedCount / this._challengesCount * 100)
}, components.SBCProgressBar.prototype.render = function render() {
    components.SBCProgressBar.superClass_.render.call(this), this.__progressText.textContent = this._challengesCompletedCount + "/" + this._challengesCount + " " + services.Localization.localize("sbc.sets.challengesComplete")
}, views.buttons.SBCFavoriteButton = function SBCFavoriteButton() {
    views.buttons.ToggleButton.call(this), this._data = null, this._isToggling = !1, this._generate()
}, utils.JS.inherits(views.buttons.SBCFavoriteButton, views.buttons.ToggleButton), views.buttons.SBCFavoriteButton.prototype._generate = function _generate() {
    if (!this._generated) {
        var t = document.createElement("button");
        t.classList.add("btn-favorite"), this.__text = document.createElement("span"), this.__text.classList.add("btn-text"), t.appendChild(this.__text), this.__subtext = document.createElement("span"), this.__subtext.classList.add("btn-subtext"), t.appendChild(this.__subtext), this.__root = t, this._generated = !0
    }
}, views.buttons.SBCFavoriteButton.prototype.destroyGeneratedElements = function destroyGeneratedElements() {
    $(this.__root).off().remove(), this.__root = null, this.__text = null, this.__subtext = null
}, views.buttons.SBCFavoriteButton.prototype.getRoot = function getRoot() {
    return $(this.__root)
}, views.buttons.SBCFavoriteButton.prototype.getRootElement = function getRootElement() {
    return this.__root
}, views.buttons.SBCFavoriteButton.prototype.setData = function setData(data) {
    this._data = data, this.setChecked(this._data.isFavourite)
}, views.buttons.SBCFavoriteButton.prototype._tapDetected = function _tapDetected(e) {
    this.superclass(e), e.stopPropagation(), this._data.isComplete() || this._isToggling || (this._isToggling = !0, this.setChecked(!this._data.isFavourite), this.watchSBCSet(), setTimeout(function () {
        utils.JS.isValid(this._isToggling) && (this._isToggling = !1)
    }.bind(this), 500))
}, views.buttons.SBCFavoriteButton.prototype.watchSBCSet = function watchSBCSet() {
    gClickShield.showShield(components.ClickShield.SHIELD.LOADING), this._data.tag().observe(this, function onSBCSetWatched(t, i, errorCode) {
        if (t.unobserve(this), i) services.Notification.queue([services.Localization.localize("notification.sbcSets.successfulTag" + (this._data.isFavourite ? "2" : "0")), enums.UINotificationType.NEUTRAL]); else {
            var s;
            s = errorCode === enums.HTTPStatusCode.SERVICE_IS_DISABLED ? "sbc.notification.disabled" : "notification.sbcSets.failedToTag" + (this._data.isFavourite ? "2" : "0"), services.Notification.queue([services.Localization.localize(s), enums.UINotificationType.NEGATIVE])
        }
        gClickShield.hideShield(components.ClickShield.SHIELD.LOADING)
    })
}, NamespaceManager.Register("components"), components.SBCSetInfoTile = function () {
    this._generate()
},components.SBCSetInfoTile.prototype._generate = function _generate() {
    if (!this._generated) {
        var t = document.createElement("div");
        t.classList.add("sbc-set-info"), t.classList.add("sbc-tile"), this.__status = document.createElement("h1"), this.__status.classList.add("secondary"), this.__status.classList.add("status-header"), t.appendChild(this.__status), this._progressBar = new components.SBCProgressBar, t.appendChild(this._progressBar.getRootElement()), this.__rewardsHeader = document.createElement("h1"), this.__rewardsHeader.classList.add("secondary"), this.__rewardsHeader.classList.add("rewards-header"), t.appendChild(this.__rewardsHeader), this._rewards = new components.SBCRewards, t.appendChild(this._rewards.getRootElement());
        var i = document.createElement("div");
        i.classList.add("sbc-status-container"), this.__repeatableStatus = document.createElement("div"), this.__repeatableStatus.classList.add("repeat"), this.__repeatableStatus.classList.add("status"), this.__repeatableLabel = document.createElement("span"), this.__repeatableLabel.classList.add("label"), this.__repeatableStatus.appendChild(this.__repeatableLabel), i.appendChild(this.__repeatableStatus), this.__expireStatus = document.createElement("div"), this.__expireStatus.classList.add("expires"), this.__expireStatus.classList.add("status"), this._expiresLabel = new components.SBCTimerLabel, this.__expireStatus.appendChild(this._expiresLabel.getRootElement()), i.appendChild(this.__expireStatus), this._watchBtn = new views.buttons.SBCFavoriteButton, i.appendChild(this._watchBtn.getRootElement()), t.appendChild(i), this.__root = t, this._generated = !0
    }
},components.SBCSetInfoTile.prototype.destroyGeneratedElements = function destroyGeneratedElements() {
    $(this.__root).off().remove(), this.__root = null, this.__status = null, this._progressBar.destroy(), this.__rewardsHeader = null, this._rewards.destroy(), this.__repeatableStatus = null, this.__repeatableLabel = null, this.__expireStatus = null, this._expiresLabel.destroy(), this._watchBtn.destroy()
},components.SBCSetInfoTile.prototype.getRoot = function getRoot() {
    return $(this.__root)
},components.SBCSetInfoTile.prototype.getRootElement = function getRootElement() {
    return this.__root
},components.SBCSetInfoTile.prototype.init = function init() {
    this._watchBtn.init()
},components.SBCSetInfoTile.prototype.destroy = function destroy() {
    this.destroyGeneratedElements()
},components.SBCSetInfoTile.prototype.render = function render(data) {
    this._rewards.setData(data.awards), this._progressBar.setData(data), this._expiresLabel.setData(data), this._watchBtn.setData(data), this.__status.textContent = services.Localization.localize("sbc.status.title"), this.__rewardsHeader.textContent = services.Localization.localize("sbc.rewards.title"), this.__repeatableLabel.textContent = services.Localization.localize(data.repeatable ? "tile.sbcSets.repeatable" : "tile.sbcSets.nonrepeatable"), DOMKit.toggleClass(this.__repeatableStatus, "no-repeat", !data.repeatable), DOMKit.toggleClass(this.__expireStatus, "no-expire", data.notExpirable), this._rewards.render(), this._progressBar.render(), this._expiresLabel.start()
},NamespaceManager.Register("components"),components.SBCChallengeTile = function SBCChallengeTileView() {
    UTTileView.call(this), this._data = null, this._generate()
},utils.JS.inherits(components.SBCChallengeTile, UTTileView),components.SBCChallengeTile.prototype._generate = function _generate() {
    if (!this._generated) {
        var t = document.createElement("div");
        t.classList.add("col-1-2"), t.classList.add("sbc-challenge"), t.classList.add("sbc-tile"), t.classList.add("tile");
        var i = document.createElement("div");
        i.classList.add("loadingSpinner"), t.appendChild(i);
        var s = document.createElement("header");
        this.__tileTitle = document.createElement("h1"), this.__tileTitle.classList.add("tileTitle"), s.appendChild(this.__tileTitle), this.__subTitle = document.createElement("h2"), this.__subTitle.classList.add("subTitle"), s.appendChild(this.__subTitle), t.appendChild(s), this.__tileContent = document.createElement("div"), this.__tileContent.classList.add("tileContent"),
            this._challengeImage = new components.ImageLoader, this._challengeImage.getRootElement().classList.add("challengeImage"), this.__tileContent.appendChild(this._challengeImage.getRootElement()), t.appendChild(this.__tileContent), this.__root = t, this._generated = !0
    }
},components.SBCChallengeTile.prototype.destroyGeneratedElements = function destroyGeneratedElements() {
    $(this.__root).off().remove(), this.__root = null, this.__tileTitle = null, this.__subTitle = null, this.__tileContent = null, this._challengeImage.destroy()
},components.SBCChallengeTile.prototype.getRoot = function getRoot() {
    return $(this.__root)
},components.SBCChallengeTile.prototype.getRootElement = function getRootElement() {
    return this.__root
},components.SBCChallengeTile.prototype.dealloc = function dealloc() {
    this.superclass(), this._data = null
},components.SBCChallengeTile.prototype.setData = function setData(data) {
    this._data = data, this.setInteractionState(!data.isCompleted())
},components.SBCChallengeTile.prototype.getData = function getData() {
    return this._data
},components.SBCChallengeTile.prototype.render = function render() {
    if (utils.JS.isValid(this._data)) {
        var t = this._data.isInProgress(), i = this._data.isCompleted();
        this.toggleClass("complete", i), this.toggleClass("in-progress", t), this._challengeImage.setResource(utils.AssetLocator.getSBCImageURI(utils.AssetLocator.IMAGE_TYPE_SBC_CHALLENGES, enums.Year.ASSET, this._data.assetId), !0).observe(this, function onResourceLoaded(t, i, s, path) {
            t.unobserve(this), i || this._challengeImage.setLocalResource("images/sbc/sbcDefaultChallengeTile.png")
        }), this._data.hasNotStarted() ? this.__subTitle.textContent = services.Localization.localize("sbc.challenge.status.notStarted") : t ? this.__subTitle.textContent = services.Localization.localize("sbc.challenge.status.inProgress") : i && (this.__subTitle.textContent = services.Localization.localize("sbc.challenge.status.complete"))
    }
},utils.JS.inherits(UTSBCChallengesView, FUITargetActionView),UTSBCChallengesView.prototype._generate = function _generate() {
    if (!this._generated) {
        var t = document.createElement("div");
        t.classList.add("SBCChallenges"), this._setInfoTile = new components.SBCSetInfoTile, this._setInfoTile.getRootElement().classList.add("setInfoTile"), t.appendChild(this._setInfoTile.getRootElement()), this.__challenges = document.createElement("div"), this.__challenges.classList.add("grid"), this.__challenges.classList.add("challenges"), t.appendChild(this.__challenges), this.__root = t, this._generated = !0
    }
},UTSBCChallengesView.prototype.destroyGeneratedElements = function destroyGeneratedElements() {
    $(this.__root).off().remove(), this.__root = null, this._setInfoTile.destroy(), this.__challenges = null
},UTSBCChallengesView.prototype.getRoot = function getRoot() {
    return $(this.__root)
},UTSBCChallengesView.prototype.getRootElement = function getRootElement() {
    return this.__root
},UTSBCChallengesView.Event = {CHALLENGE_SELECTED: "UTSBCChallengesView.Event.CHALLENGE_SELECTED"},UTSBCChallengesView.prototype.init = function init() {
    this.superclass(), this._setInfoTile.init()
},UTSBCChallengesView.prototype.dealloc = function dealloc() {
    this.clearChallenges(), this.superclass()
},UTSBCChallengesView.prototype.clearChallenges = function clearChallenges() {
    this._challengeTiles.forEach(function (t) {
        t.dealloc()
    }), this._challengeTiles = []
},UTSBCChallengesView.prototype.setSBCSet = function setSBCSet(set) {
    this._setInfoTile.render(set), this.clearChallenges(), set.challenges.forEach(this._generateChallengeTile, this), this.layoutSubviews()
},UTSBCChallengesView.prototype._generateChallengeTile = function _generateChallengeTile(challenge) {
    var t = new components.SBCChallengeTile;
    t.init(), t.setData(challenge), t.setTitle(challenge.name), t.render(), t.addTarget(this, this._eChallengeTileSelected, enums.Event.TAP), this.addSubview(t, this.__challenges), this._challengeTiles.push(t)
},UTSBCChallengesView.prototype._eChallengeTileSelected = function _eChallengeTileSelected(sender, event, data) {
    this._triggerActions(UTSBCChallengesView.Event.CHALLENGE_SELECTED, {challengeId: sender.getData().id})
},
utils.JS.inherits(UTSBCChallengesViewController, FUIViewController),UTSBCChallengesViewController.prototype.init = function init() {
    this.initialized || (this.superclass(), this.getView().addTarget(this, this._eChallengeSelected, UTSBCChallengesView.Event.CHALLENGE_SELECTED))
},UTSBCChallengesViewController.prototype.initWithSBCSet = function initWithSBCSet(set) {
    this.initialized || (this._set = set, this.init())
},UTSBCChallengesViewController.prototype.dealloc = function dealloc() {
    this._set = null, this._requirementsOverlay && (this._requirementsOverlay.dealloc(), this._requirementsOverlay = null), this.superclass()
},UTSBCChallengesViewController.prototype._getViewInstanceFromData = function _getViewInstanceFromData() {
    return new UTSBCChallengesView
},UTSBCChallengesViewController.prototype._getTelemetryId = function _getTelemetryId() {
    return "SBC - Challenges"
},UTSBCChallengesViewController.prototype.viewDidAppear = function viewDidAppear() {
    this.superclass(), this._set && this.getView().setSBCSet(this._set), this.getNavigationController().setNavigationTitle(this._set.name), TelemetryManager.trackPage(TelemetryManager.Sections.SBC, "SBC Challenges - " + this._set.id)
},UTSBCChallengesViewController.prototype._eChallengeSelected = function _eChallengeSelected(sender, event, data) {
    function _onChallengeLoaded(t, i, data, errorCode) {
        if (t.unobserve(this), data.success) {
            var s = this.getNavigationController();
            if (s) {
                var o = isPhone() ? new controllers.squads.SBCSquadOverview : new controllers.squads.SBCSquadLandscape;
                o.initWithSBCSet(this._set, data.challenge.id), s.pushViewController(o)
            }
        } else {
            var l;
            l = data.hasExpired ? "notification.sbcChallenges.expired" : data.status === enums.HTTPStatusCode.SERVICE_IS_DISABLED ? "sbc.notification.disabled" : "notification.sbcChallenges.failedToStart", services.Notification.queue([services.Localization.localize(l), enums.UINotificationType.NEGATIVE])
        }
        gClickShield.hideShield(components.ClickShield.SHIELD.LOADING)
    }

    if (data.challengeId) {
        var challenge = this._set.challenges.get(data.challengeId);
        challenge.hasNotStarted() ? (this._requirementsOverlay = new controllers.views.popups.SBCChallenge(this._set, data.challengeId, !1), this._requirementsOverlay.onExit.observe(this, function _onOverlayDismissed(t) {
            t.unobserve(this), this._requirementsOverlay = null
        }), this._requirementsOverlay.onConfirm.observe(this, function _onStartChallenge(t) {
            t.unobserve(this), this._requirementsOverlay.closePopup(), this._requirementsOverlay = null, gClickShield.showShield(components.ClickShield.SHIELD.LOADING), challenge.load().observe(this, _onChallengeLoaded), TelemetryManager.trackEvent(TelemetryManager.Sections.SBC, TelemetryManager.Categories.BUTTON_PRESS, "SBC - Start Challenge")
        }), gPopupClickShield.setActivePopup(this._requirementsOverlay)) : (gClickShield.showShield(components.ClickShield.SHIELD.LOADING), challenge.load().observe(this, _onChallengeLoaded))
    }
},NamespaceManager.Register("components"),components.SBCTimerLabel = function () {
    this._endTime = 0, this._canExpire = !1, this._updateInterval = 0, this._generate()
},components.SBCTimerLabel.prototype._generate = function _generate() {
    if (!this._generated) {
        var t = document.createElement("span");
        t.classList.add("label"), this.__root = t, this._generated = !0
    }
},components.SBCTimerLabel.prototype.destroyGeneratedElements = function destroyGeneratedElements() {
    $(this.__root).off().remove(), this.__root = null
},components.SBCTimerLabel.prototype.getRoot = function getRoot() {
    return $(this.__root)
},components.SBCTimerLabel.prototype.getRootElement = function getRootElement() {
    return this.__root
},components.SBCTimerLabel.DEFAULT_UPDATE_TIME = 2e4,components.SBCTimerLabel.prototype.destroy = function () {
    this.stop(), this.destroyGeneratedElements()
},components.SBCTimerLabel.prototype.setData = function (data) {
    this._endTime = data.endTime || 0, this._canExpire = !data.notExpirable
},components.SBCTimerLabel.prototype.start = function (t) {
    function onUpdate() {
        var i = this._endTime - Math.round(Date.now() / 1e3);
        i > 0 ? (i < 120 && t > 1e3 && setTimeout(function () {
            this.start(1e3)
        }.bind(this), 0),
            this.getRoot().text(services.Localization.localize("sbc.sets.expiresIn") + ": " + services.Localization.localizeAuctionTimeRemaining(i))) : (this.getRoot().addClass("no-expire"), this.getRoot().text(services.Localization.localize("sbc.sets.expired")))
    }

    this.stop(), this._canExpire ? (t = utils.JS.isNumber(t) ? t : components.SBCTimerLabel.DEFAULT_UPDATE_TIME, this._endTime + 60 * gSettingsModel.getConfigsByKey(models.SettingsModel.SBC_GRACE_PERIOD_MINUTES) > Math.round(Date.now() / 1e3) ? (onUpdate.call(this), this._updateInterval = setInterval(onUpdate.bind(this), t)) : this.getRoot().text(services.Localization.localize("sbc.sets.expired"))) : (this.getRoot().addClass("no-expire"), this.getRoot().text(services.Localization.localize("sbc.status.noexpire")))
},components.SBCTimerLabel.prototype.stop = function () {
    clearInterval(this._updateInterval)
},utils.JS.inherits(UTSBCSetTileView, UTTileView),UTSBCSetTileView.prototype._generate = function _generate() {
    if (!this._generated) {
        var t = document.createElement("div");
        t.classList.add("col-1-2-lg"), t.classList.add("tile"), t.classList.add("sbc-set"), t.classList.add("sbc-tile");
        var i = document.createElement("div");
        i.classList.add("content-container"), this._setImage = new components.ImageLoader, this._setImage.getRootElement().classList.add("set-image"), i.appendChild(this._setImage.getRootElement());
        var s = document.createElement("div");
        s.classList.add("text-content"), this.__tileTitle = document.createElement("h1"), this.__tileTitle.classList.add("tileHeader"), s.appendChild(this.__tileTitle);
        var o = document.createElement("div");
        o.classList.add("sbc-status-container"), this.__repeatableStatus = document.createElement("div"), this.__repeatableStatus.classList.add("repeat"), this.__repeatableStatus.classList.add("status"), this.__repeatableLabel = document.createElement("span"), this.__repeatableLabel.classList.add("label"), this.__repeatableLabel.appendChild(document.createTextNode("Repeatable")), this.__repeatableStatus.appendChild(this.__repeatableLabel), o.appendChild(this.__repeatableStatus), this.__expireStatus = document.createElement("div"), this.__expireStatus.classList.add("expires"), this.__expireStatus.classList.add("status"), this._expiresLabel = new components.SBCTimerLabel, this.__expireStatus.appendChild(this._expiresLabel.getRootElement()), o.appendChild(this.__expireStatus), s.appendChild(o), this.__tileContent = document.createElement("div"), this.__tileContent.classList.add("tileContent"), s.appendChild(this.__tileContent), this._progressBar = new components.SBCProgressBar, s.appendChild(this._progressBar.getRootElement()), i.appendChild(s);
        var l = document.createElement("div");
        l.classList.add("sbc-set--buttons"), this._watchBtn = new views.buttons.SBCFavoriteButton, l.appendChild(this._watchBtn.getRootElement()), this._infoBtn = new components.ImageButton, this._infoBtn.getRootElement().classList.add("info-btn"), l.appendChild(this._infoBtn.getRootElement()), i.appendChild(l), t.appendChild(i);
        var u = document.createElement("div");
        u.classList.add("group-rewards"), this.__rewardsHeader = document.createElement("span"), this.__rewardsHeader.classList.add("secondary"), this.__rewardsHeader.classList.add("rewards-header"), u.appendChild(this.__rewardsHeader), this._rewards = new components.SBCRewards, u.appendChild(this._rewards.getRootElement()), t.appendChild(u), this.__root = t, this._generated = !0
    }
},UTSBCSetTileView.prototype.destroyGeneratedElements = function destroyGeneratedElements() {
    $(this.__root).off().remove(), this.__root = null, this._setImage.destroy(), this.__tileTitle = null, this.__repeatableStatus = null, this.__repeatableLabel = null, this.__expireStatus = null, this._expiresLabel.destroy(), this.__tileContent = null, this._progressBar.destroy(), this._watchBtn.destroy(), this._infoBtn.destroy(), this.__rewardsHeader = null, this._rewards.destroy()
},UTSBCSetTileView.prototype.getRoot = function getRoot() {
    return $(this.__root)
},UTSBCSetTileView.prototype.getRootElement = function getRootElement() {
    return this.__root
},UTSBCSetTileView.Event = {PREVIEW_SELECTED: "UTSBCSetTileView.Event.PREVIEW_SELECTED"},
UTSBCSetTileView.prototype.init = function init() {
    this.superclass(), this._watchBtn.init(), this._infoBtn.init()
},UTSBCSetTileView.prototype.dealloc = function dealloc() {
    this.superclass(), this._data = null
},UTSBCSetTileView.prototype.setData = function setData(data) {
    this._rewards.setData(data.awards), this._data = data, this.setInteractionState(!this._data.isComplete()), DOMKit.toggleClass(this.__tileContent, enums.UIText.SECONDARY, this._data.isComplete()), this._progressBar.setData(data), this._watchBtn.setData(data), utils.JS.isEmpty(data.getPreviewImageId()) || this._data.isComplete() ? this._infoBtn.setDisplay(!1) : this._infoBtn.addTarget(this, this._eCheckMoreInfo, enums.Event.TAP), this.toggleClass("production-tagged", this._data.isFeatured)
},UTSBCSetTileView.prototype.getData = function getData() {
    return this._data
},UTSBCSetTileView.prototype.render = function render() {
    this._rewards.render(), this._progressBar.render(), utils.JS.isValid(this._data) && (this.__tileContent.textContent = this._data.description, this.__rewardsHeader.textContent = services.Localization.localize("sbc.rewards.title"), this._data.repeatable ? this.__repeatableLabel.textContent = services.Localization.localize("tile.sbcSets.repeatable") : (DOMKit.addClass(this.__repeatableStatus, "no-repeat"), this.__repeatableLabel.textContent = services.Localization.localize("sbc.status.notrepeatable")), DOMKit.toggleClass(this.__expireStatus, "no-expire", this._data.notExpirable), this._setImage.setResource(utils.AssetLocator.getSBCImageURI(utils.AssetLocator.IMAGE_TYPE_SBC_SETS, enums.Year.ASSET, this._data.assetId), !0).observe(this, function onResourceLoaded(t, i, s, path) {
        t.unobserve(this), i || this._setImage.setLocalResource("images/sbc/sbcDefaultSetTile.png")
    }), this._data.isComplete() ? this.addClass("complete") : (this._expiresLabel.setData(this._data), this._expiresLabel.start()))
},UTSBCSetTileView.prototype._eCheckMoreInfo = function _eCheckMoreInfo(sender, event, data) {
    this._triggerActions(UTSBCSetTileView.Event.PREVIEW_SELECTED, {previewImageId: this._data.getPreviewImageId()})
},utils.JS.inherits(UTSBCHubView, FUITargetActionView),UTSBCHubView.prototype._generate = function _generate() {
    if (!this._generated) {
        var t = document.createElement("div");
        t.classList.add("SBCHub"), this._SBCCategoriesTM = new components.TabMenu, t.appendChild(this._SBCCategoriesTM.getRootElement());
        var i = document.createElement("div");
        i.classList.add("container"), this.__favoritesTile = document.createElement("div"), this.__favoritesTile.classList.add("no-favorites-tile"), this.__favoritesHeader = document.createElement("h1"), this.__favoritesHeader.classList.add("secondary"), this.__favoritesTile.appendChild(this.__favoritesHeader), this.__favoritesInfo = document.createElement("p"), this.__favoritesTile.appendChild(this.__favoritesInfo), i.appendChild(this.__favoritesTile), this.__sbcSetTiles = document.createElement("div"), this.__sbcSetTiles.classList.add("layout-hub"), this.__sbcSetTiles.classList.add("grid"), i.appendChild(this.__sbcSetTiles), t.appendChild(i), this.__root = t, this._generated = !0
    }
},UTSBCHubView.prototype.destroyGeneratedElements = function destroyGeneratedElements() {
    $(this.__root).off().remove(), this.__root = null, this._SBCCategoriesTM.destroy(), this.__favoritesTile = null, this.__favoritesHeader = null, this.__favoritesInfo = null, this.__sbcSetTiles = null
},UTSBCHubView.prototype.getRoot = function getRoot() {
    return $(this.__root)
},UTSBCHubView.prototype.getRootElement = function getRootElement() {
    return this.__root
},UTSBCHubView.Event = {
    CATEGORY_SELECTED: "UTSBCHubView.Event.CATEGORY_SELECTED",
    TILE_SELECTED: "UTSBCHubView.Event.TILE_SELECTED",
    PREVIEW_SELECTED: "UTSBCHubView.Event.PREVIEW_SELECTED"
},UTSBCHubView.prototype.init = function init() {
    this.superclass(), this._SBCCategoriesTM.setDisplay(!1), this._SBCCategoriesTM.addTarget(this, this._eTabSelected, enums.Event.TAP), DOMKit.toggleDisplayStyle(this.__favoritesTile, !1), this.__favoritesHeader.textContent = services.Localization.localize("sbc.favorites.title"),
        this.__favoritesInfo.textContent = services.Localization.localize("sbc.favorites.info"), this.setInteractionState(!0)
},UTSBCHubView.prototype.dealloc = function dealloc() {
    this.clearTiles(), this.superclass()
},UTSBCHubView.prototype.clearTiles = function clearTiles() {
    this._sbcSetTiles.forEach(function (t) {
        t.dealloc()
    }), this._sbcSetTiles = []
},UTSBCHubView.prototype.populateNavigation = function populateNavigation(t, i) {
    t.length > 0 && (this._SBCCategoriesTM.clearTabs(), this._SBCCategoriesTM.setDisplay(!0), t.forEach(function (t, i) {
        t.displayable && this._SBCCategoriesTM.addTab(i, t.name)
    }, this), this._SBCCategoriesTM.setActiveTab(i), this._SBCCategoriesTM.layoutSubviews())
},UTSBCHubView.prototype.populateTiles = function populateTiles(t, i) {
    DOMKit.empty(this.__sbcSetTiles), this.clearTiles(), t = t.filter(function (set) {
        return set.isDisplayable()
    }), utils.JS.isValid(i) && DOMKit.toggleDisplayStyle(this.__favoritesTile, 0 === t.length && i.type === enums.SBC.CATEGORY_TYPE.CUSTOM_FAVOURITE), t.forEach(function _generateTile(set) {
        var t = new UTSBCSetTileView;
        t.init(), t.setTitle(set.name), t.setData(set), t.addTarget(this, this._eTileSelected, enums.Event.TAP), t.addTarget(this, this._eTilePreviewSelected, UTSBCSetTileView.Event.PREVIEW_SELECTED), this._sbcSetTiles.push(t), this.__sbcSetTiles.appendChild(t.getRootElement()), t.render()
    }, this), DOMKit.toggleClass(this.getRootElement(), "single-set", t.length <= 1)
},UTSBCHubView.prototype._eTabSelected = function _eTabSelected(sender, event, data) {
    this.isInteractionEnabled() && this._triggerActions(UTSBCHubView.Event.CATEGORY_SELECTED, {index: data.index || 0})
},UTSBCHubView.prototype._eTileSelected = function _eTileSelected(sender, event, data) {
    this.isInteractionEnabled() && this._triggerActions(UTSBCHubView.Event.TILE_SELECTED, {set: sender.getData()})
},UTSBCHubView.prototype._eTilePreviewSelected = function _eTilePreviewSelected(sender, event, data) {
    this.isInteractionEnabled() && this._triggerActions(UTSBCHubView.Event.PREVIEW_SELECTED, data)
},NamespaceManager.Register("viewmodels"),viewmodels.SBCSets = function UTSBCSetsViewModel(t, i) {
    UTObject.call(this), this._requests = [], Object.defineProperty(this, "_requests", {
        writable: !0,
        enumerable: !1
    }), this._sets = new UTHashTable({}), t.forEach(function (set) {
        this._sets.set(set.id, set)
    }, this), this._categories = i, this._categoriesIterator = new UTIterator([]), this._areTutorialSetsComplete && (this._categoriesIterator.resetCollection(this._categories), this._categories = [])
},utils.JS.inherits(viewmodels.SBCSets, UTObject),viewmodels.SBCSets.prototype.dealloc = function dealloc() {
    this.cancelRequests(), this.resetCollections([], []), this.superclass()
},viewmodels.SBCSets.prototype.cancelRequests = function cancelRequests() {
    this._requests.length > 0 && (this._requests.forEach(function (t) {
        t.clearObservers(), gClickShield.hideShield(components.ClickShield.SHIELD.LOADING)
    }, this), this._requests = [])
},viewmodels.SBCSets.prototype._completeRequest = function _completeRequest(t, data) {
    t.unobserve(this), gClickShield.hideShield(components.ClickShield.SHIELD.LOADING);
    var index = this._requests.indexOf(t);
    index >= 0 && this._requests.splice(index, 1)
},viewmodels.SBCSets.prototype._getTutorialSets = function _getTutorialSets() {
    return this._sets.filter(function (set) {
        return set.tutorial
    })
},viewmodels.SBCSets.prototype._areTutorialSetsComplete = function _areTutorialSetsComplete() {
    var t = this._getTutorialSets();
    if (0 === t.length) return !0;
    var i = utils.JS.find(t, function (set) {
        return !set.isComplete()
    });
    return !utils.JS.isValid(i)
},viewmodels.SBCSets.prototype.resetCollections = function resetCollections(t, i) {
    this._sets.clear(), t.forEach(function (set) {
        this._sets.set(set.id, set)
    }, this), this._categories = i, this._areTutorialSetsComplete ? (this._categoriesIterator.resetCollection(this._categories), this._categories = []) : this._categoriesIterator.resetCollection([])
},viewmodels.SBCSets.prototype.setCurrentCategoryIndex = function setCurrentCategoryIndex(value) {
    utils.JS.isValid(this._categoriesIterator.get(value)) && this._categoriesIterator.setIndex(value)
},
viewmodels.SBCSets.prototype.getCurrentCategoryIndex = function getCurrentCategoryIndex() {
    return this._categoriesIterator.getIndex()
},viewmodels.SBCSets.prototype.getCurrentCategory = function getCurrentCategory() {
    return this._categoriesIterator.current()
},viewmodels.SBCSets.prototype.getSetsByCurrentCategory = function getSetsByCurrentCategory() {
    function sortSets(a, b) {
        if (a.isComplete() !== b.isComplete()) {
            if (!a.isComplete() && b.isComplete()) return -1;
            if (!b.isComplete() && a.isComplete()) return 1
        }
        if (a.isFeatured !== b.isFeatured) {
            if (a.isFeatured && !b.isFeatured) return -1;
            if (b.isFeatured && !a.isFeatured) return 1
        }
        if (a.priority !== b.priority) {
            if (a.priority < b.priority) return -1;
            if (b.priority < a.priority) return 1
        }
        if (a.notExpirable !== b.notExpirable) {
            if (!a.notExpirable && b.notExpirable) return -1;
            if (!b.notExpirable && a.notExpirable) return 1
        }
        if (a.endTime !== b.endTime) {
            if (a.endTime < b.endTime) return -1;
            if (b.endTime < a.endTime) return 1
        }
        return 0
    }

    var t = [], i = this._getTutorialSets();
    return i.length > 0 && utils.JS.find(i, function (set) {
        return !set.isComplete()
    }) ? t = i.sort(sortSets) : (this._categories.length > 0 && (this._categoriesIterator.resetCollection(this._categories), this._categories = []), this._categoriesIterator.current().setIds.forEach(function (i) {
        var set = this._sets.get(i);
        utils.JS.isValid(set) && t.push(set)
    }, this), t.sort(sortSets)), t
},viewmodels.SBCSets.prototype.getCategoryById = function getCategoryById(id) {
    return this._categoriesIterator.get(id)
},viewmodels.SBCSets.prototype.getCategories = function getCategories() {
    return this._categoriesIterator.values()
},viewmodels.SBCSets.prototype.requestSets = function requestSets() {
    var t = repositories.SBC.getSets();
    return gClickShield.showShield(components.ClickShield.SHIELD.LOADING), this._requests.push(t.observe(this, function _onRequestSetsComplete(t, i, data, errorCode) {
        this._completeRequest(t, data), i && this.resetCollections(data.sets, data.categories)
    })), t
},utils.JS.inherits(UTSBCRewardPreviewView, FUIView),UTSBCRewardPreviewView.prototype._generate = function _generate() {
    if (!this._generated) {
        var t = document.createElement("div");
        t.classList.add("ut-sbc-reward-preview-modal");
        var i = document.createElement("header");
        this.__title = document.createElement("h1"), i.appendChild(this.__title), this._exitBtn = new components.ImageButton, this._exitBtn.getRootElement().classList.add("exit-btn"), i.appendChild(this._exitBtn.getRootElement()), t.appendChild(i), this.__description = document.createElement("div"), this.__description.classList.add("description"), t.appendChild(this.__description);
        var s = document.createElement("div");
        s.classList.add("content-container"), this._previewImage = new components.ImageLoader, this._previewImage.getRootElement().classList.add("preview-image"), s.appendChild(this._previewImage.getRootElement()), this.__errorMessage = document.createElement("div"), this.__errorMessage.classList.add("error-message"), s.appendChild(this.__errorMessage), t.appendChild(s), this.__root = t, this._generated = !0
    }
},UTSBCRewardPreviewView.prototype.destroyGeneratedElements = function destroyGeneratedElements() {
    $(this.__root).off().remove(), this.__root = null, this.__title = null, this._exitBtn.destroy(), this.__description = null, this._previewImage.destroy(), this.__errorMessage = null
},UTSBCRewardPreviewView.prototype.getRoot = function getRoot() {
    return $(this.__root)
},UTSBCRewardPreviewView.prototype.getRootElement = function getRootElement() {
    return this.__root
},UTSBCRewardPreviewView.prototype.init = function init() {
    this.superclass(), this._exitBtn.init()
},UTSBCRewardPreviewView.prototype.dealloc = function dealloc() {
    this.superclass()
},UTSBCRewardPreviewView.prototype.getExitBtn = function getExitBtn() {
    return this._exitBtn
},UTSBCRewardPreviewView.prototype.setTitle = function setTitle(text) {
    this.__title.textContent = text
},UTSBCRewardPreviewView.prototype.setDescription = function setDescription(text) {
    this.__description.textContent = text
},UTSBCRewardPreviewView.prototype.setErrorMessage = function setErrorMessage(text) {
    this.__errorMessage.textContent = text
},
UTSBCRewardPreviewView.prototype.setImage = function setImage(t) {
    this._previewImage.setResource(utils.AssetLocator.getSBCRewardPreviewImageURI(enums.Year.ASSET, t), !0).observe(this, function onResourceLoaded(t, i) {
        t.unobserve(this), DOMKit.toggleDisplayStyle(this.__errorMessage, !i), DOMKit.toggleDisplayStyle(this._previewImage.getRootElement(), i)
    })
},utils.JS.inherits(UTSBCRewardPreviewViewController, FUIViewController),UTSBCRewardPreviewViewController.prototype.init = function init() {
    this.initialized || (this.superclass(), utils.Debug.Assert(this._previewImageId.length > 0, "UTSBCRewardPreviewViewController expects an image URL."), this.getView().getExitBtn().addTarget(this, this._eOnExitBtn, enums.Event.TAP))
},UTSBCRewardPreviewViewController.prototype.initWithImage = function initWithImage(t) {
    this.initialized || (this._previewImageId = t, this.init())
},UTSBCRewardPreviewViewController.prototype.dealloc = function dealloc() {
    this._previewImageId = "", this.superclass()
},UTSBCRewardPreviewViewController.prototype._getViewInstanceFromData = function _getViewInstanceFromData() {
    return new UTSBCRewardPreviewView
},UTSBCRewardPreviewViewController.prototype.viewDidAppear = function viewDidAppear() {
    var view = this.getView();
    view.setTitle(services.Localization.localize("sbc.sets.preview.title")), view.setDescription(services.Localization.localize("sbc.sets.preview.description")), view.setErrorMessage(services.Localization.localize("sbc.sets.preview.errormessage")), view.setImage(this._previewImageId), this.superclass()
},UTSBCRewardPreviewViewController.prototype._eOnExitBtn = function _eOnExitBtn(sender, event, data) {
    this.getParentViewController().dismissViewController()
},utils.JS.inherits(UTSBCHubViewController, FUIViewController),UTSBCHubViewController.prototype.init = function init() {
    if (!this.initialized) {
        this.superclass(), TelemetryManager.trackPage(TelemetryManager.Sections.SBC, "SBC Hub"), this._viewmodel || (this._viewmodel = new viewmodels.SBCSets([], []));
        var view = this.getView();
        view.addTarget(this, this._eCategorySelected, UTSBCHubView.Event.CATEGORY_SELECTED), view.addTarget(this, this._eTileSelected, UTSBCHubView.Event.TILE_SELECTED), view.addTarget(this, this._eCheckMoreInfo, UTSBCHubView.Event.PREVIEW_SELECTED)
    }
},UTSBCHubViewController.prototype.initWithSBCSetCategories = function initWithSBCSetCategories(t, i) {
    this.initialized || (this._viewmodel = new viewmodels.SBCSets(t, i), this.init())
},UTSBCHubViewController.prototype.dealloc = function dealloc() {
    this._viewmodel && (this._viewmodel.dealloc(), this._viewmodel = null), this.superclass()
},UTSBCHubViewController.prototype._getViewInstanceFromData = function _getViewInstanceFromData() {
    return new UTSBCHubView
},UTSBCHubViewController.prototype._getTelemetryId = function _getTelemetryId() {
    return "Hub - SBC"
},UTSBCHubViewController.prototype.getNavigationTitle = function getNavigationTitle() {
    return services.Localization.localize("navbar.label.sbcHub")
},UTSBCHubViewController.prototype.viewDidAppear = function viewDidAppear() {
    this.superclass(), this.getNavigationController().setNavigationVisibility(!0, !0), this._requestSBCData()
},UTSBCHubViewController.prototype.viewWillDisappear = function viewWillDisappear() {
    this.superclass(), this._viewmodel.cancelRequests()
},UTSBCHubViewController.prototype._requestSBCData = function _requestSBCData() {
    this._viewmodel.requestSets().observe(this, function _onRetrieveSBCSetsComplete(t, i, data, errorCode) {
        if (t.unobserve(this), i) {
            var view = this.getView();
            view.populateNavigation(this._viewmodel.getCategories(), this._viewmodel.getCurrentCategoryIndex()), view.populateTiles(this._viewmodel.getSetsByCurrentCategory(), this._viewmodel.getCurrentCategory())
        } else {
            var s = errorCode === enums.HTTPStatusCode.SERVICE_IS_DISABLED ? "sbc.notification.disabled" : "notification.sbcSets.failedToLoad";
            services.Notification.queue([services.Localization.localize(s), enums.UINotificationType.NEGATIVE])
        }
    })
},UTSBCHubViewController.prototype._eCategorySelected = function _eCategorySelected(sender, event, data) {
    var t = data.index || 0
    ;TelemetryManager.trackEvent(TelemetryManager.Sections.SBC, TelemetryManager.Categories.BUTTON_PRESS, "SBC - Select Filter"), t !== this._viewmodel.getCurrentCategoryIndex() && (this._viewmodel.setCurrentCategoryIndex(t), this.getView().populateTiles(this._viewmodel.getSetsByCurrentCategory(), this._viewmodel.getCurrentCategory()), TelemetryManager.trackPage(TelemetryManager.Sections.SBC, "SBC Set List - " + this._viewmodel.getCategoryById(t).name))
},UTSBCHubViewController.prototype._eTileSelected = function _eTileSelected(sender, event, data) {
    function _onChallengeLoaded(t, i, data, errorCode) {
        if (t.unobserve(this), data.success) {
            var s = this.getNavigationController();
            if (s) {
                var o = isPhone() ? new controllers.squads.SBCSquadOverview : new controllers.squads.SBCSquadLandscape;
                o.initWithSBCSet(set, data.challenge.id), s.pushViewController(o)
            }
        } else {
            var l = data.status === enums.HTTPStatusCode.SERVICE_IS_DISABLED ? "sbc.notification.disabled" : "notification.sbcChallenges.failedToLoad";
            services.Notification.queue([services.Localization.localize(l), enums.UINotificationType.NEGATIVE])
        }
        view.setInteractionState(!0)
    }

    var view = this.getView(), set = data.set;
    view.setInteractionState(!1), repositories.SBC.requestChallengesBySetId(set.id).observe(this, function _onRequestChallengesComplete(t, i, data, errorCode) {
        if (t.unobserve(this), i && data.challenges.length > 0) if (set.hidden) data.challenges[0].load().observe(this, _onChallengeLoaded); else {
            var s = this.getNavigationController();
            if (s) {
                var o = new UTSBCChallengesViewController;
                o.initWithSBCSet(set), s.pushViewController(o, !0)
            }
            view.setInteractionState(!0)
        } else {
            var l = errorCode === enums.HTTPStatusCode.SERVICE_IS_DISABLED ? "sbc.notification.disabled" : "notification.sbcChallenges.failedToLoad";
            view.setInteractionState(!0), services.Notification.queue([services.Localization.localize(l), enums.UINotificationType.NEGATIVE])
        }
    })
},services.URL.registerDeepLinkID(enums.DeepLinkSections.SBC, function (t) {
    function goToSBCHub() {
        if (isPhone()) {
            var t = new UTSBCHubViewController;
            t.init(), s.pushViewController(t)
        }
    }

    function goToChallenge(t, i, data, errorCode) {
        if (t.unobserve(this), i) {
            var l = isPhone() ? new controllers.squads.SBCSquadOverview : new controllers.squads.SBCSquadLandscape;
            l.initWithSBCSet(set, o.id), s.pushViewController(l)
        } else goToSBCHub();
        gClickShield.hideShield(components.ClickShield.SHIELD.LOADING)
    }

    function onRetrieveChallengesComplete(t, i, data, errorCode) {
        if (t.unobserve(this), i && data.challenges.length > 0) if (set.hidden) (o = data.challenges[0]).load().observe(this, goToChallenge); else {
            var l = new UTSBCChallengesViewController;
            l.initWithSBCSet(set), s.pushViewController(l), gClickShield.hideShield(components.ClickShield.SHIELD.LOADING)
        } else goToSBCHub(), gClickShield.hideShield(components.ClickShield.SHIELD.LOADING)
    }

    var i = getAppMain().getRootViewController();
    if (gSettingsModel.isSBCEnabled()) {
        i.setGameViewTab(isPhone() ? UTGameTabBarController.TabTag.HOME : UTGameTabBarController.TabTag.SBC);
        var s = i.getPresentedViewController().getCurrentViewController(), o = null, set = null;
        0 === t.length ? goToSBCHub() : (gClickShield.showShield(components.ClickShield.SHIELD.LOADING), repositories.SBC.getSets().observe(this, function goToSet(i, s, data, errorCode) {
            if (i.unobserve(this), s) {
                var o = data.sets.filter(function (set) {
                    return set.tutorial
                }), l = utils.JS.find(o, function (set) {
                    return !set.isComplete()
                });
                if (!utils.JS.isValid(l)) {
                    var u = parseInt(t[0], 10);
                    if (set = utils.JS.find(data.sets, function (t) {
                            return t.id === u
                        }), utils.JS.isValid(set) && !set.isComplete()) return void repositories.SBC.requestChallengesBySetId(set.id).observe(this, onRetrieveChallengesComplete)
                }
            }
            goToSBCHub(), gClickShield.hideShield(components.ClickShield.SHIELD.LOADING)
        }.bind(this)))
    } else i.setGameViewTab(UTGameTabBarController.TabTag.HOME)
}),UTSBCHubViewController.prototype._eCheckMoreInfo = function _eCheckMoreInfo(sender, event, data) {
    var t = data.previewImageId;
    if (!utils.JS.isEmpty(t)) {
        var i = new UTSBCRewardPreviewViewController;
        i.initWithImage(t), i.modalDisplayStyle = enums.UIModalDisplayStyles.FORM, this.presentViewController(i, !0)
    }
},
utils.JS.inherits(UTSquadsHubView, FUIView),UTSquadsHubView.prototype._generate = function _generate() {
    if (!this._generated) {
        var t = document.createElement("div");
        t.classList.add("SquadsHub");
        var i = document.createElement("div");
        i.classList.add("grid"), i.classList.add("layout-hub"), this._activeSquadTile = new UTSquadTileView, i.appendChild(this._activeSquadTile.getRootElement()), this._squadSelectorTile = new UTTileView, this._squadSelectorTile.getRootElement().classList.add("squadSelectorTile"), i.appendChild(this._squadSelectorTile.getRootElement()), this._totwTile = new UTTileView, this._totwTile.getRootElement().classList.add("ut-tile-totw"), i.appendChild(this._totwTile.getRootElement()), this._generationsTile = new UTSquadTileView, i.appendChild(this._generationsTile.getRootElement()), t.appendChild(i), this.__root = t, this._generated = !0
    }
},UTSquadsHubView.prototype.destroyGeneratedElements = function destroyGeneratedElements() {
    $(this.__root).off().remove(), this.__root = null, this._activeSquadTile.destroy(), this._squadSelectorTile.destroy(), this._totwTile.destroy(), this._generationsTile.destroy()
},UTSquadsHubView.prototype.getRoot = function getRoot() {
    return $(this.__root)
},UTSquadsHubView.prototype.getRootElement = function getRootElement() {
    return this.__root
},UTSquadsHubView.prototype.init = function init() {
    this.superclass(), this._generationsTile.hide(), this._activeSquadTile.init(), this._generationsTile.init(), this._squadSelectorTile.init(), this._totwTile.init(), this._activeSquadTile.setTitle(services.Localization.localize("navbar.label.activesquad")), this._generationsTile.setTitle(services.Localization.localize("navbar.label.generations")), this._squadSelectorTile.setTitle(services.Localization.localize("navbar.label.squadlist")), this._totwTile.setTitle(services.Localization.localize("navbar.label.TOTW")), this._totwTile.setDimOverlayText(services.Localization.localize("tile.disabled.totw").toUpperCase()), this._totwTile.setDimOverlayType(UTTileDimOverlayView.OverlayType.LOCKED), this._activeSquadTile.addClass("col-1-1"), this._squadSelectorTile.addClass("col-1-2"), this._totwTile.addClass("col-1-2")
},UTSquadsHubView.prototype.setActiveSquad = function setActiveSquad(t) {
    t && this._activeSquadTile.setSquad(t), this._activeSquadTile.setInteractionState(utils.JS.isValid(t))
},UTSquadsHubView.prototype.setGenerationsSquad = function setGenerationsSquad(t) {
    var i = utils.JS.isValid(t);
    i && (this._generationsTile.setSquad(t), isPhone() ? this._generationsTile.addClass("col-1-1") : (this._activeSquadTile.removeClass("col-1-1"), this._squadSelectorTile.removeClass("col-1-2"), this._totwTile.removeClass("col-1-2"), this._activeSquadTile.addClass("col-2-3"), this._squadSelectorTile.addClass("col-1-3"), this._totwTile.addClass("col-1-3"), this._generationsTile.addClass("col-2-3")), this._generationsTile.show()), this._generationsTile.setInteractionState(i)
},UTSquadsHubView.prototype.setTOTWEnabled = function setTOTWEnabled(t) {
    this._totwTile.setInteractionState(t), this._totwTile.setDimmed(!t)
},UTSquadsHubView.prototype.getActiveSquadTile = function getActiveSquadTile() {
    return this._activeSquadTile
},UTSquadsHubView.prototype.getSquadManagementTile = function getSquadManagementTile() {
    return this._squadSelectorTile
},UTSquadsHubView.prototype.getTOTWTile = function getTOTWTile() {
    return this._totwTile
},UTSquadsHubView.prototype.getGenerationsTile = function getGenerationsTile() {
    return this._generationsTile
},NamespaceManager.Register("interfaces"),interfaces.SquadListViewDelegate = function ISquadListViewDelegate() {
},interfaces.SquadListViewDelegate.prototype.conforms = function conforms(t) {
},interfaces.SquadListViewDelegate.prototype.selectListRow = function selectListRow(sender, index, t) {
},utils.JS.inherits(UTSquadListViewModel, UTIterator),UTSquadListViewModel.prototype.getSquads = function getSquads(type) {
    return type ? this._collection.filter(function (t) {
        return t.getType() === type
    }) : this._collection.slice()
},UTSquadListViewModel.prototype.getSquadNames = function getSquadNames() {
    return this._collection.map(function (t) {
        return t.getName()
    })
},UTSquadListViewModel.prototype.setIndexBySquadId = function setIndexBySquadId(id) {
    this.setIndex(this.indexOf(function (t) {
        return t.getId() === id
    }))
},NamespaceManager.Register("components"),components.ListDataSquadStats = function () {
    this._generate()
},components.ListDataSquadStats.prototype._generate = function _generate() {
    if (!this._generated) {
        var t = document.createElement("div");
        t.classList.add("ut-squad-summary-info");
        var i = document.createElement("div");
        i.classList.add("rating"), this.__labelRating = document.createElement("span"), this.__labelRating.classList.add("ut-squad-summary-label"), i.appendChild(this.__labelRating), this._ratingStars = new UTSquadStarRatingView, i.appendChild(this._ratingStars.getRootElement()), t.appendChild(i), this.__chemistryContainer = document.createElement("div"), this.__chemistryContainer.classList.add("chemistry"), this.__labelChemistry = document.createElement("span"), this.__labelChemistry.classList.add("ut-squad-summary-label"), this.__chemistryContainer.appendChild(this.__labelChemistry), this._chemistryBar = new UTSquadChemistryBarView, this.__chemistryContainer.appendChild(this._chemistryBar.getRootElement()), t.appendChild(this.__chemistryContainer), this.__root = t, this._generated = !0
    }
},components.ListDataSquadStats.prototype.destroyGeneratedElements = function destroyGeneratedElements() {
    $(this.__root).off().remove(), this.__root = null, this.__labelRating = null, this._ratingStars.destroy(), this.__chemistryContainer = null, this.__labelChemistry = null, this._chemistryBar.destroy()
},components.ListDataSquadStats.prototype.getRoot = function getRoot() {
    return $(this.__root)
},components.ListDataSquadStats.prototype.getRootElement = function getRootElement() {
    return this.__root
},components.ListDataSquadStats.prototype.init = function () {
    this.__labelChemistry.textContent = services.Localization.localize("squads.chemistry"), this.__labelRating.textContent = services.Localization.localize("squads.rating"), this._ratingStars.init(), this._chemistryBar.init()
},components.ListDataSquadStats.prototype.destroy = function () {
    this.destroyGeneratedElements()
},components.ListDataSquadStats.prototype.render = function (t) {
    this._chemistryBar.setChemistry(t.getChemistry()), this._ratingStars.setRating(t.getRating()), DOMKit.toggleDisplayStyle(this.__chemistryContainer, !t.isTOTW())
},components.ListDataSquadStats.prototype.update = function (t) {
    this.render(t)
},NamespaceManager.Register("components"),components.ListRowSquad = function UTSquadListRowView() {
    FUITargetActionView.call(this), this._data = null, this._dataComponent = null, this._hasAction = !1, this._tapCallback = null, this._generate()
},utils.JS.inherits(components.ListRowSquad, FUITargetActionView),components.ListRowSquad.prototype._generate = function _generate() {
    if (!this._generated) {
        var t = document.createElement("li");
        t.classList.add("listFUTSquad"), this._btnAction = new components.ImageButton, this._btnAction.getRootElement().classList.add("btnAction"), t.appendChild(this._btnAction.getRootElement()), this.__content = document.createElement("div"), this.__content.classList.add("rowContent");
        var i = document.createElement("div");
        i.classList.add("active-tag");
        var s = document.createElement("div");
        s.classList.add("label-container");
        var o = document.createElement("span");
        o.classList.add("icon_squad"), o.classList.add("fut_icon"), s.appendChild(o), this.__activeLabel = document.createElement("span"), this.__activeLabel.classList.add("label"), s.appendChild(this.__activeLabel), i.appendChild(s), this.__content.appendChild(i);
        var l = document.createElement("header");
        this.__name = document.createElement("h1"), this.__name.classList.add("name"), l.appendChild(this.__name), this.__content.appendChild(l), this.__dataContainer = document.createElement("div"), this.__dataContainer.classList.add("ut-squad-summary"), this.__dataContainer.classList.add("data-container");
        var u = document.createElement("div");
        u.classList.add("ut-squad-summary-info"), this.__formationLabel = document.createElement("span"), this.__formationLabel.classList.add("ut-squad-summary-label"),
            u.appendChild(this.__formationLabel), this.__formation = document.createElement("span"), this.__formation.classList.add("ut-squad-summary-value"), u.appendChild(this.__formation), this.__dataContainer.appendChild(u), this.__content.appendChild(this.__dataContainer), t.appendChild(this.__content), this.__root = t, this._generated = !0
    }
},components.ListRowSquad.prototype.destroyGeneratedElements = function destroyGeneratedElements() {
    $(this.__root).off().remove(), this.__root = null, this._btnAction.destroy(), this.__content = null, this.__activeLabel = null, this.__name = null, this.__dataContainer = null, this.__formationLabel = null, this.__formation = null
},components.ListRowSquad.prototype.getRoot = function getRoot() {
    return $(this.__root)
},components.ListRowSquad.prototype.getRootElement = function getRootElement() {
    return this.__root
},components.ListRowSquad.prototype.init = function init() {
    this.superclass(), this.setInteractionState(!0)
},components.ListRowSquad.prototype.dealloc = function dealloc() {
    this._data = null, this.superclass()
},components.ListRowSquad.prototype.setData = function (data) {
    this._data = data
},components.ListRowSquad.prototype.getData = function () {
    return this._data
},components.ListRowSquad.prototype.setDataComponent = function (t) {
    utils.JS.isValid(this._dataComponent) && this._dataComponent.getRoot().remove(), this._dataComponent = t, this.__dataContainer.appendChild(this._dataComponent.getRootElement())
},components.ListRowSquad.prototype.setAction = function (style, t) {
    utils.Debug.Assert(!this._hasAction, "[ListRowSquad::setAction] Action already set."), this._hasAction || (this.addClass(enums.UIListRowState.HAS_ACTION), this._btnAction.addClass(style), this._btnAction.addTarget(this, t, enums.Event.TAP), this._btnAction.init(), this._hasAction = !0)
},components.ListRowSquad.prototype.setSelected = function setSelected(value) {
    this.toggleClass(enums.UIListRowState.SELECTED, value)
},components.ListRowSquad.prototype.render = function render() {
    if (this.__name.textContent = this._data.getName(), this.__formation.textContent = this._data.getFormation().getDisplayName(), this.__activeLabel.textContent = services.Localization.localize("navbar.label.activesquad"), this.__formationLabel.textContent = services.Localization.localize("squads.formation"), !utils.JS.isValid(this._dataComponent)) {
        this._dataComponent = new components.ListDataSquadStats, this._dataComponent.init();
        var t = this._dataComponent.getRootElement();
        t.classList.add(enums.UIFlexible.LG), this.__dataContainer.appendChild(t)
    }
    this._data.isTOTW() || services.Squad.getActiveSquadId() !== this._data.getId() ? this.removeClass(enums.UIListRowState.IS_ACTIVE_SQUAD) : this.addClass(enums.UIListRowState.IS_ACTIVE_SQUAD), this._dataComponent.render(this._data)
},components.ListRowSquad.prototype.setTapCallback = function (t) {
    this._tapCallback = t, DOMKit.addClass(this.__content, enums.UIListRowState.HAS_TAP_CALLBACK)
},components.ListRowSquad.prototype._mouseEnter = function _mouseEnter(e) {
    this.addClass(enums.UIState.HOVER)
},components.ListRowSquad.prototype._mouseLeave = function _mouseLeave(e) {
    this.removeClass(enums.UIState.HOVER)
},components.ListRowSquad.prototype._touchStarted = function _touchStarted(e) {
    this.superclass(), this.__content.contains(e.target) && DOMKit.addClass(this.__content, enums.UIState.ACTIVE)
},components.ListRowSquad.prototype._touchMoved = function _touchMoved(e) {
    this.superclass(), this.__content.contains(e.target) && DOMKit.removeClass(this.__content, enums.UIState.ACTIVE)
},components.ListRowSquad.prototype._touchEnded = function _touchEnded(e) {
    this.superclass(), this.__content.contains(e.target) && DOMKit.removeClass(this.__content, enums.UIState.ACTIVE)
},components.ListRowSquad.prototype._tapDetected = function _tapDetected(e) {
    this.superclass(), utils.JS.isFunction(this._tapCallback) && this._tapCallback(this._data)
},NamespaceManager.Register("views.lists"),views.lists.SectionedSquadList = function SectionedSquadListView() {
    views.lists.SectionedItemList.call(this), this._generate()
},utils.JS.inherits(views.lists.SectionedSquadList, views.lists.SectionedItemList),
views.lists.SectionedSquadList.prototype._generate = function _generate() {
    if (!this._generated) {
        var t = document.createElement("section");
        t.classList.add("layout-article"), t.classList.add("sectioned-item-list"), this._header = new components.SectionHeader, t.appendChild(this._header.getRootElement()), this.__list = document.createElement("ul"), this.__list.classList.add("flush-bottom"), this.__list.classList.add("itemList"), t.appendChild(this.__list), this.__footer = document.createElement("ul"), this.__footer.classList.add("flush-top"), t.appendChild(this.__footer), this.__root = t, this._generated = !0
    }
},views.lists.SectionedSquadList.prototype.destroyGeneratedElements = function destroyGeneratedElements() {
    $(this.__root).off().remove(), this.__root = null, this._header.destroy(), this.__list = null, this.__footer = null
},views.lists.SectionedSquadList.prototype.getRoot = function getRoot() {
    return $(this.__root)
},views.lists.SectionedSquadList.prototype.getRootElement = function getRootElement() {
    return this.__root
},views.lists.SectionedSquadList.prototype._generateListRow = function _generateListRow(data, t) {
    var i = new components.ListRowSquad;
    return i.init(), i.setData(data), utils.JS.isFunction(t) && i.setTapCallback(t), i
},views.lists.SectionedSquadList.prototype.render = function render() {
    0 === this._listRows.length ? this._showEmptyMessage() : (this._removeEmptyMessage(), this._listRows.forEach(function (t) {
        t instanceof components.ListRowSquad && (t.render(), this.__list.appendChild(t.getRootElement()))
    }, this))
},NamespaceManager.Register("views.squads"),views.squads.SquadList = function SquadListView() {
    FUIView.call(this), this._listRows = [], this.onCreateNewSquad = new UTObservable, Object.defineProperty(this, "onCreateNewSquad", {writable: !1}), this.onItemTap = new UTObservable, Object.defineProperty(this, "onItemTap", {writable: !1}), this._generate()
},utils.JS.inherits(views.squads.SquadList, FUIView),views.squads.SquadList.prototype._generate = function _generate() {
    if (!this._generated) {
        var t = document.createElement("section");
        t.classList.add("flush"), t.classList.add("panel-list"), t.classList.add("layout-article"), t.classList.add("squad-list"), this.__totalLabel = document.createElement("p"), this.__totalLabel.classList.add("total-label"), t.appendChild(this.__totalLabel), this._regularSquadSection = new views.lists.SectionedSquadList, this._regularSquadSection.getRootElement().classList.add("flush"), t.appendChild(this._regularSquadSection.getRootElement()), this._conceptSquadSection = new views.lists.SectionedSquadList, this._conceptSquadSection.getRootElement().classList.add("padded"), this._conceptSquadSection.getRootElement().classList.add("flush"), t.appendChild(this._conceptSquadSection.getRootElement()), this.__root = t, this._generated = !0
    }
},views.squads.SquadList.prototype.destroyGeneratedElements = function destroyGeneratedElements() {
    $(this.__root).off().remove(), this.__root = null, this.__totalLabel = null, this._regularSquadSection.destroy(), this._conceptSquadSection.destroy()
},views.squads.SquadList.prototype.getRoot = function getRoot() {
    return $(this.__root)
},views.squads.SquadList.prototype.getRootElement = function getRootElement() {
    return this.__root
},views.squads.SquadList.prototype.init = function init() {
    this.superclass(), this._regularSquadSection.init(), this._conceptSquadSection.init()
},views.squads.SquadList.prototype.dealloc = function dealloc() {
    this.superclass(), this.onCreateNewSquad.dealloc(), this.onItemTap.dealloc(), this.onCreateNewSquad = null, this.onItemTap = null
},views.squads.SquadList.prototype.render = function render(t, i, s) {
    var total = t.length + i.length, o = s <= total;
    this.__totalLabel.textContent = services.Localization.localize("lineupList.squadSelector.total", [total, s]), this._regularSquadSection.setHeader(services.Localization.localize("squads.button.regularsquads", [t.length]), services.Localization.localize("infopanel.button.createnewsquad"), this.onCreateNewSquad.notify.bind(this.onCreateNewSquad)),
        this._regularSquadSection.setEmptyMessage(services.Localization.localize("squads.setEmptyMessage.regularHeader"), services.Localization.localize("squads.setEmptyMessage.regularMessage")), this._conceptSquadSection.setHeader(services.Localization.localize("squads.button.conceptsquads", [i.length]), services.Localization.localize("infopanel.button.createconceptsquad"), null), this._conceptSquadSection.setEmptyMessage(services.Localization.localize("squads.setEmptyMessage.conceptHeader"), services.Localization.localize("squads.setEmptyMessage.conceptMessage")), this._regularSquadSection.toggleHeaderButtonEnabled(!o), this._conceptSquadSection.toggleHeaderButtonEnabled(!o), this._listRows.length = 0, this._regularSquadSection.clearList(), this._conceptSquadSection.clearList(), this._listRows = this._regularSquadSection.addItems(t, function (item) {
        this.onItemTap.notify(item)
    }.bind(this)), this._regularSquadSection.render(), this._listRows = this._listRows.concat(this._conceptSquadSection.addItems(i, function (item) {
        this.onItemTap.notify(item)
    }.bind(this))), this._conceptSquadSection.render()
},views.squads.SquadList.prototype.selectListRow = function selectListRow(id) {
    this._listRows.forEach(function (t, i) {
        t instanceof components.ListRowSquad && t.setSelected(t.getData().getId() === id)
    }, this)
},views.squads.SquadList.prototype.applyDataChange = function applyDataChange() {
    this._regularSquadSection.render(), this._conceptSquadSection.render()
},views.squads.SquadList.prototype.getRegularSquadSection = function getRegularSquadSection() {
    return this._regularSquadSection
},utils.JS.inherits(UTSquadListController, FUIViewController),UTSquadListController.prototype.initWithSquads = function initWithSquads(t) {
    this.initialized || (this._updateViewModel(t), this.init())
},UTSquadListController.prototype.dealloc = function dealloc() {
    this.superclass(), this._squadListViewDelegate && (this._squadListViewDelegate = null), this._viewmodel = null
},UTSquadListController.prototype._getViewInstanceFromData = function _getViewInstanceFromData() {
    return new views.squads.SquadList
},UTSquadListController.prototype._getTelemetryId = function _getTelemetryId() {
    return "Squad List"
},UTSquadListController.prototype.getNavigationTitle = function getNavigationTitle() {
    return services.Localization.localize("navbar.label.squadlist")
},UTSquadListController.prototype.viewDidAppear = function viewDidAppear() {
    this.superclass();
    var view = this.getView();
    view.onItemTap.observe(this, this._eListRowSelected), view.onCreateNewSquad.observe(this, this._onNewSquad), this._generateSquadsList()
},UTSquadListController.prototype.viewWillDisappear = function viewWillDisappear() {
    this.superclass();
    var view = this.getView();
    view.onItemTap.unobserve(this), view.onCreateNewSquad.unobserve(this)
},UTSquadListController.prototype.setSquadListViewDelegate = function setSquadListViewDelegate(t) {
    t.conforms(interfaces.SquadListViewDelegate) && (this._squadListViewDelegate = t)
},UTSquadListController.prototype.getViewModel = function getViewModel() {
    return this._viewmodel
},UTSquadListController.prototype._updateViewModel = function _updateViewModel(t) {
    this._viewmodel ? this._viewmodel.resetCollection(t) : this._viewmodel = new UTSquadListViewModel(t)
},UTSquadListController.prototype.refreshData = function refreshData(t) {
    t ? (this._updateViewModel([]), this._generateSquadsList()) : this._generateSquadsList(this._viewmodel.getIndex())
},UTSquadListController.prototype._generateSquadsList = function _generateSquadsList(index) {
    var view = this.getView();
    view.setInteractionState(!1), repositories.Squad.getSquads().observe(this, function _onGenerateSquadsList(t, i) {
        t.unobserve(this), this._updateViewModel(i);
        var s = index >= 0 && index < this._viewmodel.length ? index : services.Squad.getActiveSquadId();
        this._viewmodel.setIndex(s), this.isViewDisplayed() && (view.render(this._viewmodel.getSquads(enums.SquadType.REGULAR), this._viewmodel.getSquads(enums.SquadType.DREAM), services.Squad.getMaxSquads()),
            utils.JS.isValid(this._squadListViewDelegate) ? this._squadListViewDelegate.selectListRow(this, s, this._viewmodel.current()) : view.selectListRow(s)), view.setInteractionState(!0)
    })
},UTSquadListController.prototype._eListRowSelected = function _eListRowSelected(t, i) {
    var index = this._viewmodel.indexOf(function (a) {
        return a.getId() === i.getId()
    }), s = index !== this._viewmodel.getIndex();
    if (s && this._viewmodel.setIndex(index), utils.JS.isValid(this._squadListViewDelegate)) s && this._squadListViewDelegate.selectListRow(this, index, i); else {
        var o = this.getNavigationController();
        if (o) {
            var l = new UTSquadActionsViewController;
            l.initWithSquad(i), o.pushViewController(l, !0)
        }
    }
},UTSquadListController.prototype._onNewSquad = function onNewSquad(t) {
    var i = new controllers.views.popups.NameSquad("");
    i.onConfirm.observe(this, function _onNewSquadConfirm(t, name) {
        t.unobserve(this), services.Squad.create(name, DEFAULT_FORMATION).observe(this, this._eSquadCreated)
    }.bind(this)), gPopupClickShield.setActivePopup(i)
},UTSquadListController.prototype._eSquadCreated = function _eSquadCreated(t, response) {
    if (t.unobserve(this), response.success) {
        var i = response.data.squad;
        if (i) {
            var s = i.getId();
            this._viewmodel.add(i), this._viewmodel.setIndexBySquadId(s);
            var o = this.getNavigationController();
            if (o) {
                var l = isPhone() ? new controllers.squads.SquadOverview : new controllers.squads.SquadLandscape;
                l.initWithSquad(i), o.pushViewController(l)
            }
        }
        services.Notification.queue([services.Localization.localize("notification.squad.created"), enums.UINotificationType.NEUTRAL])
    } else if (NetworkErrorManager.checkCriticalStatus(response.status)) NetworkErrorManager.handle(NetworkErrorManager.generateDefaultStatusMessage(response.status), !1); else {
        var u;
        switch (response.status) {
            case enums.HTTPStatusCode.NAME_EXISTS:
                u = "popup.error.duplicateSquadName";
                break;
            case enums.HTTPStatusCode.PERMISSION_DENIED:
                u = "popup.error.squadsFull";
                break;
            case enums.HTTPStatusCode.PROFANITY:
                u = "popup.error.profanity";
                break;
            default:
                u = "popup.body.genericError"
        }
        services.Notification.queue([services.Localization.localize(u), enums.UINotificationType.NEGATIVE])
    }
},utils.JS.inherits(UTSquadListSplitViewController, FUISplitViewController),UTSquadListSplitViewController.prototype.init = function init() {
    this.superclass(), this._listViewController.init(), this.addChildViewController(this._listViewController)
},UTSquadListSplitViewController.prototype.initWithSquads = function initWithSquads(t) {
    if (!this.initialized) {
        if (this._listViewController.initWithSquads(t), this._listViewController.setSquadListViewDelegate(this), t.length > 0) {
            var i = services.Squad.getActiveSquadId(), s = utils.JS.find(t, function (t) {
                return t.getId() === i
            });
            this._squadDetailsController = new UTSquadActionsViewController, this._squadDetailsController.initWithSquad(s), this._squadDetailsController.onDataChange.observe(this, this._eSquadDetailsChanged), this.addChildViewController(this._squadDetailsController)
        }
        this.init()
    }
},UTSquadListSplitViewController.prototype.dealloc = function dealloc() {
    this._listViewController.dealloc(), this._squadDetailsController && (this._squadDetailsController.onDataChange.unobserve(this), this._squadDetailsController.dealloc(), this._squadDetailsController = null), this.superclass()
},UTSquadListSplitViewController.prototype._getViewInstanceFromData = function _getViewInstanceFromData() {
    return new views.SplitView
},UTSquadListSplitViewController.prototype.getNavigationTitle = function getNavigationTitle() {
    return this._listViewController.getNavigationTitle()
},UTSquadListSplitViewController.prototype.viewDidAppear = function viewDidAppear() {
    var t = getDefaultDispatcher();
    t.addObserver(enums.Notification.SQUAD_CREATE, this, this._nSquadCreated), t.addObserver(enums.Notification.SQUAD_DELETE, this, this._nSquadDeleted), t.addObserver(enums.Notification.SQUAD_SAVE, this, this._nSquadSaved), this.superclass(), this._setLeftController(this._listViewController), utils.JS.isValid(this._squadDetailsController) && this._setRightController(this._squadDetailsController)
},
UTSquadListSplitViewController.prototype.viewWillDisappear = function viewWillDisappear() {
    var t = getDefaultDispatcher();
    t.removeObserver(enums.Notification.SQUAD_CREATE, this), t.removeObserver(enums.Notification.SQUAD_DELETE, this), t.removeObserver(enums.Notification.SQUAD_SAVE, this), this.superclass()
},UTSquadListSplitViewController.prototype.selectListRow = function selectListRow(sender, index, t) {
    sender === this._listViewController && (this._listViewController.getView().selectListRow(t.getId()), this._squadDetailsController.setSquad(t))
},UTSquadListSplitViewController.prototype._nSquadCreated = function _nSquadCreated(t, sender, data) {
    this._listViewController.refreshData(!1)
},UTSquadListSplitViewController.prototype._nSquadDeleted = function _nSquadCreated(t, sender, data) {
    this._listViewController.refreshData(!0)
},UTSquadListSplitViewController.prototype._nSquadSaved = function _nSquadSaved(t, sender, data) {
    this._listViewController.refreshData(!1)
},UTSquadListSplitViewController.prototype._eSquadDetailsChanged = function _eSquadDetailsChanged(t, sender, data) {
    this._listViewController.getView().applyDataChange()
},NamespaceManager.Register("controllers.squads"),controllers.squads.GenerationsSquadOverview = function UTGenerationsSquadOverviewViewController() {
    controllers.squads.SquadOverview.call(this)
},utils.JS.inherits(controllers.squads.GenerationsSquadOverview, controllers.squads.SquadOverview),controllers.squads.GenerationsSquadOverview.prototype.init = function init() {
    if (!this.initialized) {
        this.superclass();
        var view = this.getView();
        view.renderManager = !1, view.setMode(enums.SquadPitchModes.GENERATIONS)
    }
},controllers.squads.GenerationsSquadOverview.prototype._getTelemetryId = function _getTelemetryId() {
    return "Generations Squad"
},controllers.squads.GenerationsSquadOverview.prototype.getNavigationTitle = function getNavigationTitle() {
    return services.Localization.localize("navbar.label.generations")
},controllers.squads.GenerationsSquadOverview.prototype._nInfoStateChanged = function _nInfoStateChanged(t, sender, data) {
    TelemetryManager.trackEvent(TelemetryManager.Sections.SQUADS, TelemetryManager.Categories.BUTTON_PRESS, "Item Info Switch Button - Generations")
},controllers.squads.GenerationsSquadOverview.prototype._gotoDetailsView = function _gotoDetailsView(index) {
    var t = this.getNavigationController();
    if (t) {
        var i = new controllers.navigation.SquadItemDetails;
        this._squad ? i.initWithSquad(this._squad, index) : i.init();
        var s = i.getView().getRootElement();
        s && DOMKit.addClass(s, enums.SquadPitchModes.GENERATIONS), i.setNavigationStyle(enums.UINavigationBarStyle.SECONDARY), t.pushViewController(i)
    }
},NamespaceManager.Register("controllers.squads"),controllers.squads.GenerationsSquadLandscape = function UTGenerationsSquadSplitViewController() {
    controllers.squads.BaseSquadLandscape.call(this), this._panelController = new controllers.navigation.SquadDetails(!0)
},utils.JS.inherits(controllers.squads.GenerationsSquadLandscape, controllers.squads.BaseSquadLandscape),controllers.squads.GenerationsSquadLandscape.prototype.init = function init() {
    this.initialized || (this.superclass(), this._panelController.init(), this._panelController.onDataChange.observe(this, this._overviewController.applyDataChange.bind(this._overviewController)), this.addChildViewController(this._panelController))
},controllers.squads.GenerationsSquadLandscape.prototype.dealloc = function dealloc() {
    this.superclass(), this._panelController.dealloc(), this._panelController = null
},controllers.squads.GenerationsSquadLandscape.prototype.viewDidAppear = function viewDidAppear() {
    this.superclass(), this._squad && this._panelController.setSquad(this._squad)
},controllers.squads.GenerationsSquadLandscape.prototype.getDefaultPanel = function getDefaultPanel() {
    return this._panelController
},controllers.squads.GenerationsSquadLandscape.prototype._generateSquadOverview = function _generateSquadOverview() {
    var t = new controllers.squads.GenerationsSquadOverview;
    return this._squad ? t.initWithSquad(this._squad) : t.init(), t
},
controllers.squads.GenerationsSquadLandscape.prototype._generateCompareDetails = function _generateCompareDetails() {
    var t = new controllers.squads.SquadComparePlayers;
    return t.init(), t.setViewAsGenerations(!0), t
},controllers.squads.GenerationsSquadLandscape.prototype._showSlotDetails = function _showSlotDetails(index) {
    this.superclass(index);
    var t = this._itemDetailController.getView().getRootElement();
    t && DOMKit.addClass(t, enums.SquadPitchModes.GENERATIONS)
},views.squads.TOTWSquadOverview = function TOTWSquadOverviewView() {
    views.squads.SquadOverview.call(this)
},utils.JS.inherits(views.squads.TOTWSquadOverview, views.squads.SquadOverview),views.squads.TOTWSquadOverview.prototype.init = function init() {
    this.superclass(), this.renderManager = !1, this.renderChemistry = !1, this.renderConcepts = !1
},views.squads.TOTWSquadOverview.prototype.getSummaryPanel = function getSummaryPanel() {
    return this._summaryPanel || (this._summaryPanel = new views.squads.TOTWSummaryBanner), this._summaryPanel
},NamespaceManager.Register("controllers.squads"),controllers.squads.TOTWSquadOverview = function TOTWSquadOverviewViewController() {
    controllers.squads.SquadOverview.call(this)
},utils.JS.inherits(controllers.squads.TOTWSquadOverview, controllers.squads.SquadOverview),controllers.squads.TOTWSquadOverview.prototype.init = function init() {
    if (!this.initialized) {
        this.superclass();
        var t = this.getView().getSummaryPanel();
        t.getHistoryButton().addTarget(this, this._eHistorySelected, enums.Event.TAP), t.getCopyButton().addTarget(this, this._eCopySquadSelected, enums.Event.TAP), t.setCanCopySquad(!1), this._checkSquadListFull(), gTOTWHistoryModel.addListener(models.TOTWHistoryModel.EVENT_SQUAD_SELECTED, this, this._eTOTWSquadSelected)
    }
},controllers.squads.TOTWSquadOverview.prototype.dealloc = function dealloc() {
    this.superclass(), gTOTWHistoryModel.clearListenersByScope(this)
},controllers.squads.TOTWSquadOverview.prototype._getViewInstanceFromData = function _getViewInstanceFromData() {
    return new views.squads.TOTWSquadOverview
},controllers.squads.TOTWSquadOverview.prototype._getTelemetryId = function _getTelemetryId() {
    return "TOTW"
},controllers.squads.TOTWSquadOverview.prototype._trackPageView = function _trackPageView() {
    TelemetryManager.trackPage(TelemetryManager.Sections.TOTW, this._getTelemetryId())
},controllers.squads.TOTWSquadOverview.prototype._pushSquadToView = function _pushSquadToView(t) {
    var view = this.getView();
    view.setType(t.isDream() ? enums.SquadPitchTypes.CONCEPT : enums.SquadPitchTypes.REGULAR), view.setSquad(t), this.getNavigationController().setNavigationTitle(t.getName())
},controllers.squads.TOTWSquadOverview.prototype._checkSquadListFull = function _checkSquadListFull() {
    repositories.Squad.isSquadListFull().observe(this, function (t, i) {
        t.unobserve(this), this.getView().getSummaryPanel().setCanCopySquad(!i)
    })
},controllers.squads.TOTWSquadOverview.prototype._eHistorySelected = function _eHistorySelected(sender, event, data) {
    var t = this.getNavigationController(), parent = this.getParentViewController();
    if (this.getView().clearSlotInteractionState(enums.UISlotInteractionState.SELECTED), parent && parent.conforms(controllers.squads.TOTWSquadLandscape)) parent.showHistory(); else if (t) {
        var i = new controllers.squads.ViewListTOTWSquads;
        i.init(), this.getNavigationController().pushViewController(i, !0)
    }
},controllers.squads.TOTWSquadOverview.prototype._eCopySquadSelected = function _eCopySquadSelected(sender, event, data) {
    function _duplicateSquadComplete(t, data) {
        t.unobserve(this), data.success ? services.Notification.queue([services.Localization.localize("notification.squad.created"), enums.UINotificationType.POSITIVE]) : services.Notification.queue([services.Localization.localize("notification.squad.copyFailed"), enums.UINotificationType.NEGATIVE]), this._checkSquadListFull()
    }

    utils.Debug.Assert(this._squad instanceof entities.Squad, "No squad present for copying."), TelemetryManager.trackEvent(TelemetryManager.Sections.SQUADS, TelemetryManager.Categories.BUTTON_PRESS, "TOTW - Copy Squad"),
        utils.PopupManager.ShowConfirmation(utils.PopupManager.Confirmations.CONFIRM_COPY_SQUAD, null, function _duplicateSquad() {
            this._squad ? services.Squad.duplicate(this._squad).observe(this, _duplicateSquadComplete) : services.Notification.queue([services.Localization.localize("notification.squad.copyFailed"), enums.UINotificationType.NEGATIVE])
        }.bind(this), null)
},controllers.squads.TOTWSquadOverview.prototype._eItemTap = function _eItemTap(sender, event, data) {
    var index = utils.JS.isNumber(data.slotIndex) ? data.slotIndex : -1;
    this._squad.getSlot(index).isValid() && this.superclass(sender, event, data)
},controllers.squads.TOTWSquadOverview.prototype._eTOTWSquadSelected = function _eTOTWSquadSelected(sender, data) {
    var t = sender.getSelectedSquad();
    t && (this._squad && this._squad.onDataUpdated.unobserve(this), this._squad = t, this._squad.onDataUpdated.observe(this, this._eSquadDataChange))
},controllers.squads.TOTWSquadOverview.prototype._nInfoStateChanged = function _nInfoStateChanged(t, sender, data) {
    TelemetryManager.trackEvent(TelemetryManager.Sections.SQUADS, TelemetryManager.Categories.BUTTON_PRESS, "Item Info Switch Button - TOTW")
},services.URL.registerDeepLinkID(enums.DeepLinkSections.TOTW, function (t) {
    var i = getAppMain().getRootViewController();
    if (i.setGameViewTab(UTGameTabBarController.TabTag.SQUADS), gTOTWHistoryModel.hasValidTOTW()) {
        var s = i.getPresentedViewController().getCurrentViewController(),
            o = isPhone() ? new controllers.squads.TOTWSquadOverview : new controllers.squads.TOTWSquadLandscape;
        o.initWithSquad(gTOTWHistoryModel.getSelectedSquad()), s.pushViewController(o)
    } else services.Notification.queue([services.Localization.localize("notification.TOTW.loadfail"), enums.UINotificationType.NEGATIVE])
}),NamespaceManager.Register("views.squads"),views.squads.ViewListTOTWSquads = function TOTWSquadListView() {
    FUIView.call(this), this._listRows = [], this._noResultsView = null, this.onNext = new UTObservable, Object.defineProperty(this, "onNext", {
        writable: !1,
        enumerable: !0
    }), this.onPrev = new UTObservable, Object.defineProperty(this, "onPrev", {
        writable: !1,
        enumerable: !0
    }), this.onRowSelected = new UTObservable, Object.defineProperty(this, "onItemSelected", {
        writable: !1,
        enumerable: !0
    }), this._generate()
},utils.JS.inherits(views.squads.ViewListTOTWSquads, FUIView),views.squads.ViewListTOTWSquads.prototype._generate = function _generate() {
    if (!this._generated) {
        var t = document.createElement("article");
        t.classList.add("paginated-squad-list"), t.classList.add("SquadSelector"), this.__topPagination = document.createElement("div"), this.__topPagination.classList.add("pagingContainer"), this._topPrev = new views.buttons.FlatButton, this._topPrev.getRootElement().classList.add("pagination"), this._topPrev.getRootElement().classList.add("prev"), this.__topPagination.appendChild(this._topPrev.getRootElement()), this._topNext = new views.buttons.FlatButton, this._topNext.getRootElement().classList.add("pagination"), this._topNext.getRootElement().classList.add("next"), this.__topPagination.appendChild(this._topNext.getRootElement()), t.appendChild(this.__topPagination), this.__squadList = document.createElement("ul"), t.appendChild(this.__squadList), this.__botPagination = document.createElement("div"), this.__botPagination.classList.add("pagingContainer"), this._botPrev = new views.buttons.FlatButton, this._botPrev.getRootElement().classList.add("pagination"), this._botPrev.getRootElement().classList.add("prev"), this.__botPagination.appendChild(this._botPrev.getRootElement()), this._botNext = new views.buttons.FlatButton, this._botNext.getRootElement().classList.add("pagination"), this._botNext.getRootElement().classList.add("next"), this.__botPagination.appendChild(this._botNext.getRootElement()), t.appendChild(this.__botPagination), this.__root = t, this._generated = !0
    }
},views.squads.ViewListTOTWSquads.prototype.destroyGeneratedElements = function destroyGeneratedElements() {
    $(this.__root).off().remove(), this.__root = null, this.__topPagination = null, this._topPrev.destroy(), this._topNext.destroy(), this.__squadList = null, this.__botPagination = null,
        this._botPrev.destroy(), this._botNext.destroy()
},views.squads.ViewListTOTWSquads.prototype.getRoot = function getRoot() {
    return $(this.__root)
},views.squads.ViewListTOTWSquads.prototype.getRootElement = function getRootElement() {
    return this.__root
},views.squads.ViewListTOTWSquads.prototype.init = function init() {
    this.superclass(), this._topPrev.addTarget(this, this._ePreviousPage, enums.Event.TAP), this._topPrev.setText(services.Localization.localize("label.prev")), this._topPrev.init(), this._botPrev.addTarget(this, this._ePreviousPage, enums.Event.TAP), this._botPrev.setText(services.Localization.localize("label.prev")), this._botPrev.init(), this._topNext.addTarget(this, this._eNextPage, enums.Event.TAP), this._topNext.setText(services.Localization.localize("label.next")), this._topNext.init(), this._botNext.addTarget(this, this._eNextPage, enums.Event.TAP), this._botNext.setText(services.Localization.localize("label.next")), this._botNext.init(), this.setPaginationState(!1, !1), this.setInteractionState(!0)
},views.squads.ViewListTOTWSquads.prototype.dealloc = function dealloc() {
    this._removeListRows(), this._noResultsView && (this._noResultsView.destroy(), this._noResultsView = null), this.onNext.dealloc(), this.onPrev.dealloc(), this.onRowSelected.dealloc(), this.superclass()
},views.squads.ViewListTOTWSquads.prototype._removeListRows = function _removeListRows() {
    this._listRows.length > 0 && (this._listRows.forEach(function (t) {
        t.destroy()
    }), this._listRows = [])
},views.squads.ViewListTOTWSquads.prototype._addListRow = function _addListRow(t) {
    if (t instanceof entities.Squad) {
        var i = new components.ListRowSquad;
        i.init(), i.setData(t), i.setTapCallback(this._eRowSelected.bind(this)), i.render();
        var s = i.getRootElement();
        s.classList.add("no-scaling"), s.classList.add("hide-arrow"), this._listRows.push(i), this.__squadList.appendChild(s)
    } else utils.Debug.Assert(!1, "Expected a squad entity")
},views.squads.ViewListTOTWSquads.prototype.setPaginationState = function setPaginationState(t, i) {
    this._topPrev.setDisplay(t), this._botPrev.setDisplay(t), this._topNext.setDisplay(i), this._botNext.setDisplay(i), DOMKit.toggleDisplayStyle(this.__topPagination, t || i), DOMKit.toggleDisplayStyle(this.__botPagination, t || i)
},views.squads.ViewListTOTWSquads.prototype.setSquads = function (t) {
    this._removeListRows(), t.forEach(this._addListRow, this)
},views.squads.ViewListTOTWSquads.prototype.appendEmptyListMessage = function appendEmptyListMessage(t, i, s) {
    this._removeListRows(), this._noResultsView && this._noResultsView.destroy(), this._noResultsView = new components.ListNoResults, this._noResultsView.init(), this._noResultsView.setText(t), this._noResultsView.setDescription(services.Localization.localize("popup.error.noresults.description")), this._noResultsView.setupButton(i, s), this.getRoot().append(this._noResultsView.getRoot())
},views.squads.ViewListTOTWSquads.prototype._eRowSelected = function _eRowSelected(data) {
    this.isInteractionEnabled() && (this.selectListRow(data), this.onRowSelected.notify(data))
},views.squads.ViewListTOTWSquads.prototype._ePreviousPage = function _ePreviousPage(sender, event, data) {
    this.isInteractionEnabled() && this.onPrev.notify()
},views.squads.ViewListTOTWSquads.prototype._eNextPage = function _eNextPage(sender, event, data) {
    this.isInteractionEnabled() && this.onNext.notify()
},views.squads.ViewListTOTWSquads.prototype.selectListRow = function selectListRow(data) {
    this._listRows.forEach(function (t, i) {
        t.setSelected(t.getData() === data)
    }, this)
},NamespaceManager.Register("controllers.squads"),controllers.squads.ViewListTOTWSquads = function TOTWSquadsListViewController() {
    FUIViewController.call(this), this._model = gTOTWHistoryModel, this._squadSelectDelegate = null
},utils.JS.inherits(controllers.squads.ViewListTOTWSquads, FUIViewController),controllers.squads.ViewListTOTWSquads.prototype.init = function init() {
    if (!this.initialized) {
        this.superclass(), TelemetryManager.trackPage(TelemetryManager.Sections.TOTW, "TOTW List");
        var view = this.getView();
        view.onNext.observe(this, this._eNextPage), view.onPrev.observe(this, this._ePrevPage),
            view.onRowSelected.observe(this, this._eRowSelected)
    }
},controllers.squads.ViewListTOTWSquads.prototype.dealloc = function dealloc() {
    this.superclass(), this._model = null
},controllers.squads.ViewListTOTWSquads.prototype._getViewInstanceFromData = function _getViewInstanceFromData() {
    return new views.squads.ViewListTOTWSquads
},controllers.squads.ViewListTOTWSquads.prototype._getTelemetryId = function _getTelemetryId() {
    return "TOTW List"
},controllers.squads.ViewListTOTWSquads.prototype.getNavigationTitle = function getNavigationTitle() {
    return services.Localization.localize("navbar.label.TOTWHistory")
},controllers.squads.ViewListTOTWSquads.prototype.viewDidAppear = function viewDidAppear() {
    this.superclass(), this._model.isDirty() ? this._requestTOTWHistory(0) : (this._model.getIterator().setCurrentIndex(0), this._showSquads())
},controllers.squads.ViewListTOTWSquads.prototype.setSquadSelectDelegate = function setSquadSelectDelegate(t) {
    t.conforms(controllers.squads.TOTWSquadLandscape) && (this._squadSelectDelegate = t)
},controllers.squads.ViewListTOTWSquads.prototype._showSquads = function _showSquads() {
    var view = this.getView(), iterator = this._model.getIterator();
    if (0 === iterator.getNumItems()) {
        var t = gSettingsModel.isTOTWHistoryEnabled() ? "totw.squadlist.empty" : "totw.squadlist.unavailable";
        view.appendEmptyListMessage(services.Localization.localize(t))
    } else {
        var i = iterator.getCurrentIndex(), s = iterator.data().slice(i, i + models.TOTWHistoryModel.SQUADS_PER_PAGE),
            o = this._model.getSelectedSquad(), l = utils.JS.find(s, function (t) {
                return o.getName() === t.getName() && o.getOwner() === t.getOwner()
            });
        view.setSquads(s), view.selectListRow(l || iterator.current()), view.setPaginationState(iterator.hasPrev(), iterator.hasNextPage() || this._model.hasNext())
    }
},controllers.squads.ViewListTOTWSquads.prototype._checkIteratorDataBounds = function () {
    var iterator = this._model.getIterator();
    iterator.getCurrentPage() > iterator.getMaxPage() && iterator.setCurrentIndex(iterator.getFirstIndexOfPage(iterator.getMaxPage()))
},controllers.squads.ViewListTOTWSquads.prototype._requestTOTWHistory = function _requestTOTWHistory(index) {
    var t = new communication.TOTWHistoryDelegate(index, models.TOTWHistoryModel.SQUADS_PER_PAGE);
    t.addListener(communication.BaseDelegate.SUCCESS, this, this._onDataLoaded), t.addListener(communication.BaseDelegate.FAIL, this, this._onFail), t.addListener(communication.BaseDelegate.CANCEL, this, this._onCancel), t.execute()
},controllers.squads.ViewListTOTWSquads.prototype._onDataLoaded = function _onDataLoaded(sender) {
    sender.clearListenersByScope(this), this._checkIteratorDataBounds(), this._showSquads()
},controllers.squads.ViewListTOTWSquads.prototype._onFail = function _onFail(sender, error) {
    sender.clearListenersByScope(this), NetworkErrorManager.handle(error, !0, function () {
        this._checkIteratorDataBounds(), this._showSquads()
    }.bind(this))
},controllers.squads.ViewListTOTWSquads.prototype._onCancel = function _onCancel(sender) {
    sender.clearListenersByScope(this), this._checkIteratorDataBounds(), this._showSquads()
},controllers.squads.ViewListTOTWSquads.prototype._eNextPage = function _eNextPage(t, data) {
    var i = this._model.getIterator(), index = i.getFirstIndexOfPage(i.getCurrentPage() + 1);
    i.setCurrentIndex(index), i.getCurrentPage() > i.getMaxPage() ? this._requestTOTWHistory(index) : this._showSquads()
},controllers.squads.ViewListTOTWSquads.prototype._ePrevPage = function _ePrevPage(t, data) {
    var i = this._model.getIterator(), index = i.getFirstIndexOfPage(i.getCurrentPage() - 1);
    i.setCurrentIndex(index), this._showSquads()
},controllers.squads.ViewListTOTWSquads.prototype._eRowSelected = function _eRowSelected(t, data) {
    if (data !== this._model.getSelectedSquad()) if (this._model.setSelectedSquad(data), this._squadSelectDelegate) {
        this._squadSelectDelegate.setSquad(data);
        var view = this.getView();
        view.setInteractionState(!1), setTimeout(function () {
            view && view.setInteractionState(!0)
        }.bind(this), 600)
    } else this.getNavigationController().popViewController()
},controllers.squads.TOTWSquadLandscape = function UTTOTWSquadSplitViewController() {
    controllers.squads.BaseSquadLandscape.call(this), this._historyController = null
},utils.JS.inherits(controllers.squads.TOTWSquadLandscape, controllers.squads.BaseSquadLandscape),controllers.squads.TOTWSquadLandscape.prototype.init = function init() {
    this.initialized || (this.superclass(), this._historyController = new controllers.squads.ViewListTOTWSquads, this._historyController.init(), this._historyController.setSquadSelectDelegate(this), this.addChildViewController(this._historyController))
},controllers.squads.TOTWSquadLandscape.prototype.dealloc = function dealloc() {
    this.superclass(), this._historyController.dealloc(), this._historyController = null, gTOTWHistoryModel.clearListenersByScope(this)
},controllers.squads.TOTWSquadLandscape.prototype._generateSquadOverview = function _generateSquadOverview() {
    var t = new controllers.squads.TOTWSquadOverview;
    return this._squad ? t.initWithSquad(this._squad) : t.init(), t
},controllers.squads.TOTWSquadLandscape.prototype.getDefaultPanel = function getDefaultPanel() {
    return this._historyController
},controllers.squads.TOTWSquadLandscape.prototype.showHistory = function showHistory() {
    this._showDefaultPanel()
},controllers.squads.TOTWSquadLandscape.prototype.setSquad = function setSquad(t) {
    this._squad = t, this._squad && this._overviewController && this._overviewController.setSquad(t), this._squad && this._itemDetailController && this._itemDetailController.setSquad(this._squad)
},controllers.squads.TOTWSquadLandscape.prototype.selectSlotIndexForSquad = function selectSlotIndexForSquad(sender, t, index) {
    this._squad.getSlot(index).isValid() && (this._overviewController.selectSlot(index), sender === this._overviewController && this._showSlotDetails(index))
},utils.JS.inherits(UTSquadsHubViewController, FUIViewController),UTSquadsHubViewController.prototype.init = function init() {
    if (!this.initialized) {
        this.superclass();
        var view = this.getView();
        view.getActiveSquadTile().addTarget(this, this._eActiveSquadTileSelected, enums.Event.TAP), view.getSquadManagementTile().addTarget(this, this._eSquadManagementTileSelected, enums.Event.TAP), view.getTOTWTile().addTarget(this, this._eTOTWTileSelected, enums.Event.TAP), view.getGenerationsTile().addTarget(this, this._eGenerationsTileSelected, enums.Event.TAP)
    }
},UTSquadsHubViewController.prototype._getViewInstanceFromData = function _getViewInstanceFromData() {
    return new UTSquadsHubView
},UTSquadsHubViewController.prototype._getTelemetryId = function _getTelemetryId() {
    return "Hub - Squads"
},UTSquadsHubViewController.prototype.getNavigationTitle = function getNavigationTitle() {
    return services.Localization.localize("infopanel.label.squads")
},UTSquadsHubViewController.prototype.viewDidAppear = function viewDidAppear() {
    this.superclass(), this.getNavigationController().setNavigationVisibility(!0, !0), this._loadActiveSquadData(), this._loadGenerationsData(), this.getView().setTOTWEnabled(gTOTWHistoryModel.hasValidTOTW()), gTOTWHistoryModel.setToDefaultSquad(), TelemetryManager.trackPage(TelemetryManager.Sections.SQUADS, "Squads Hub")
},UTSquadsHubViewController.prototype._loadActiveSquadData = function _loadActiveSquadData() {
    repositories.Squad.getSquadById(services.Squad.getActiveSquadId()).observe(this, function _onGetActiveSquadComplete(t, i) {
        t.unobserve(this), this.getView().setActiveSquad(i)
    })
},UTSquadsHubViewController.prototype._loadGenerationsData = function _loadGenerationsData() {
    function _onGetGenerationsSquadComplete(t, i) {
        t.unobserve(this), this._generationsSquad = i, this.getView().setGenerationsSquad(i)
    }

    function _onGenerationsDataLoaded(t) {
        t.unobserve(this), repositories.Squad.getGenerationsSquad(!0).observe(this, _onGetGenerationsSquadComplete)
    }

    gConfigurationModel.getConfigBoolean(models.ConfigurationModel.KEY_HIDE_GENERATIONS) || (services.Configuration.loadGenerationsRarityData(), services.Configuration.getGBUDData().observe(this, function _onGetGBUDDataComplete(t) {
        t.unobserve(this), repositories.TeamConfig.getPreviousYearsData().observe(this, _onGenerationsDataLoaded)
    }))
},
UTSquadsHubViewController.prototype._gotoActiveSquadOverview = function _gotoActiveSquadOverview() {
    var t = this.getNavigationController();
    t && (gClickShield.showShield(components.ClickShield.SHIELD.LOADING), services.Squad.requestSquadByType(enums.UserSquadId.ACTIVE).observe(this, function _onSquadLoadComplete(i, response) {
        if (i.unobserve(this), response.success) {
            var s = isPhone() ? new controllers.squads.SquadOverview : new controllers.squads.SquadLandscape;
            s.initWithSquad(response.data.squad), t.pushViewController(s)
        } else services.Notification.queue([services.Localization.localize("notification.squad.failedToLoad"), enums.UINotificationType.NEGATIVE]);
        gClickShield.hideShield(components.ClickShield.SHIELD.LOADING)
    }))
},UTSquadsHubViewController.prototype._gotoSquadManagement = function _gotoSquadManagement() {
    gClickShield.showShield(components.ClickShield.SHIELD.LOADING), repositories.Squad.getSquads().observe(this, function _onRequestSquadsComplete(t, i) {
        t.unobserve(this);
        var s = this.getNavigationController();
        if (s) {
            var o = isPhone() ? new UTSquadListController : new UTSquadListSplitViewController;
            i.length > 0 ? o.initWithSquads(i) : o.init(), s.pushViewController(o)
        }
        gClickShield.hideShield(components.ClickShield.SHIELD.LOADING)
    })
},UTSquadsHubViewController.prototype._gotoTOTWSquadOverview = function _gotoTOTWSquadOverview() {
    var t = this.getNavigationController();
    if (t) {
        var i = isPhone() ? new controllers.squads.TOTWSquadOverview : new controllers.squads.TOTWSquadLandscape;
        i.initWithSquad(gTOTWHistoryModel.getSelectedSquad()), t.pushViewController(i)
    }
},UTSquadsHubViewController.prototype._gotoGenerationsSquadOverview = function _gotoGenerationsSquadOverview() {
    if (!gConfigurationModel.getConfigBoolean(models.ConfigurationModel.KEY_HIDE_GENERATIONS)) {
        var t = this.getNavigationController();
        if (t) {
            TelemetryManager.trackEvent(TelemetryManager.Sections.SQUADS, TelemetryManager.Categories.BUTTON_PRESS, "Squads Hub - Generations Tile");
            var i = isPhone() ? new controllers.squads.GenerationsSquadOverview : new controllers.squads.GenerationsSquadLandscape;
            i.initWithSquad(this._generationsSquad), t.pushViewController(i)
        }
    }
},UTSquadsHubViewController.prototype._eActiveSquadTileSelected = function _eActiveSquadTileSelected(sender, event, data) {
    this._gotoActiveSquadOverview()
},UTSquadsHubViewController.prototype._eSquadManagementTileSelected = function _eSquadManagementTileSelected(sender, event, data) {
    this._gotoSquadManagement()
},UTSquadsHubViewController.prototype._eTOTWTileSelected = function _eTOTWTileSelected(sender, event, data) {
    this._gotoTOTWSquadOverview()
},UTSquadsHubViewController.prototype._eGenerationsTileSelected = function _eGenerationsTileSelected(sender, event, data) {
    this._gotoGenerationsSquadOverview()
},NamespaceManager.Register("views.squads"),views.squads.SquadShowOff = function SquadShowOffView() {
    FUIView.call(this), this._generate()
},utils.JS.inherits(views.squads.SquadShowOff, FUIView),views.squads.SquadShowOff.prototype._generate = function _generate() {
    if (!this._generated) {
        var t = document.createElement("article");
        t.classList.add("SquadShowOffDetails");
        var i = document.createElement("section");
        i.classList.add("layout-article"), i.classList.add("detail-carousel"), this._formationImg = new components.ImageLoader, i.appendChild(this._formationImg.getRootElement()), this.__formationTxt = document.createElement("span"), i.appendChild(this.__formationTxt), t.appendChild(i);
        var s = document.createElement("div");
        s.classList.add("desc"), this.__showOffDesc = document.createElement("p"), s.appendChild(this.__showOffDesc), t.appendChild(s);
        var o = document.createElement("div");
        o.classList.add("button-container"), this._btnStarted = new views.buttons.DefaultButton, this._btnStarted.getRootElement().classList.add("call-to-action"), o.appendChild(this._btnStarted.getRootElement()), t.appendChild(o), this.__root = t, this._generated = !0
    }
},views.squads.SquadShowOff.prototype.destroyGeneratedElements = function destroyGeneratedElements() {
    $(this.__root).off().remove(), this.__root = null, this._formationImg.destroy(), this.__formationTxt = null,
        this.__showOffDesc = null, this._btnStarted.destroy()
},views.squads.SquadShowOff.prototype.getRoot = function getRoot() {
    return $(this.__root)
},views.squads.SquadShowOff.prototype.getRootElement = function getRootElement() {
    return this.__root
},views.squads.SquadShowOff.prototype.init = function init() {
    this.superclass(), this._btnStarted.init(), this._btnStarted.setText(services.Localization.localize("infopanel.showOff.getStarted")), this.__showOffDesc.textContent = services.Localization.localize("infopanel.showOff.description")
},views.squads.SquadShowOff.prototype.renderFormation = function renderFormation(t) {
    var uri = utils.AssetLocator.IMAGE_TYPE_FORMATION;
    this.__formationTxt.textContent = t.getDisplayName(), this._formationImg.setResource(utils.AssetLocator.getImage(uri, enums.Year.ASSET, t.getId()))
},views.squads.SquadShowOff.prototype.getStartedButton = function getStartedButton() {
    return this._btnStarted
},NamespaceManager.Register("controllers.squads"),controllers.squads.ShowOffSquadActions = function ShowOffShowOffSquadActionsController() {
    FUIViewController.call(this)
},utils.JS.inherits(controllers.squads.ShowOffSquadActions, FUIViewController),controllers.squads.ShowOffSquadActions.prototype.init = function init() {
    this.superclass(), this.getView().getStartedButton().addTarget(this, this._eGetStartedButtonPressed, enums.Event.TAP)
},controllers.squads.ShowOffSquadActions.prototype.initWithSquad = function initWithSquad(t) {
    this.getView().renderFormation(t.getFormation()), this.init()
},controllers.squads.ShowOffSquadActions.prototype._getViewInstanceFromData = function _getViewInstanceFromData() {
    return new views.squads.SquadShowOff
},controllers.squads.ShowOffSquadActions.prototype._eGetStartedButtonPressed = function _eGetStartedButtonPressed() {
    gAuthenticationModel.logout()
},NamespaceManager.Register("views.items"),views.items.SlotActionPanel = function SlotActionPanelView() {
    FUITargetActionView.call(this), this._generate()
},utils.JS.inherits(views.items.SlotActionPanel, FUITargetActionView),views.items.SlotActionPanel.prototype._generate = function _generate() {
    if (!this._generated) {
        var t = document.createElement("div");
        t.classList.add("DetailPanel");
        var i = document.createElement("div");
        i.classList.add("ut-item-details--metadata"), this.__positionContainer = document.createElement("div"), this.__positionContainer.classList.add("position-container"), this.__positionLabel = document.createElement("span"), this.__positionContainer.appendChild(this.__positionLabel), this.__position = document.createElement("strong"), this.__positionContainer.appendChild(this.__position), i.appendChild(this.__positionContainer), this.__auctionInfo = document.createElement("div"), this.__auctionInfo.classList.add("auctionInfo");
        var s = document.createElement("div");
        s.classList.add("column"), this.__textInfo = document.createElement("span"), this.__textInfo.classList.add("subHeading"), s.appendChild(this.__textInfo), this.__valueInfo = document.createElement("span"), this.__valueInfo.classList.add("coins"), this.__valueInfo.classList.add("subContent"), s.appendChild(this.__valueInfo), this.__auctionInfo.appendChild(s), i.appendChild(this.__auctionInfo), t.appendChild(i), this.__itemActions = document.createElement("div"), this.__itemActions.classList.add("ut-button-group"), this._btnPlayerBio = new views.buttons.GroupButton, this._btnPlayerBio.getRootElement().classList.add("more"), this.__itemActions.appendChild(this._btnPlayerBio.getRootElement()), this._btnApplyConsumable = new views.buttons.GroupButton, this.__itemActions.appendChild(this._btnApplyConsumable.getRootElement()), this._btnAddSwap = new views.buttons.GroupButton, this.__itemActions.appendChild(this._btnAddSwap.getRootElement()), this._btnTransfer = new views.buttons.GroupButton, this.__itemActions.appendChild(this._btnTransfer.getRootElement()), this._btnSearchSlot = new views.buttons.GroupButton, this.__itemActions.appendChild(this._btnSearchSlot.getRootElement()), this._btnSearchMarket = new views.buttons.GroupButton, this.__itemActions.appendChild(this._btnSearchMarket.getRootElement()),
            this._btnRemove = new views.buttons.GroupButton, this.__itemActions.appendChild(this._btnRemove.getRootElement()), this._btnDiscard = new views.buttons.GroupButton, this.__itemActions.appendChild(this._btnDiscard.getRootElement()), t.appendChild(this.__itemActions), this.__root = t, this._generated = !0
    }
},views.items.SlotActionPanel.prototype.destroyGeneratedElements = function destroyGeneratedElements() {
    $(this.__root).off().remove(), this.__root = null, this.__positionContainer = null, this.__positionLabel = null, this.__position = null, this.__auctionInfo = null, this.__textInfo = null, this.__valueInfo = null, this.__itemActions = null, this._btnPlayerBio.destroy(), this._btnApplyConsumable.destroy(), this._btnAddSwap.destroy(), this._btnTransfer.destroy(), this._btnSearchSlot.destroy(), this._btnSearchMarket.destroy(), this._btnRemove.destroy(), this._btnDiscard.destroy()
},views.items.SlotActionPanel.prototype.getRoot = function getRoot() {
    return $(this.__root)
},views.items.SlotActionPanel.prototype.getRootElement = function getRootElement() {
    return this.__root
},views.items.SlotActionPanel.prototype.init = function init() {
    this.superclass(), this._btnPlayerBio.init(), this._btnApplyConsumable.init(), this._btnAddSwap.init(), this._btnTransfer.init(), this._btnSearchMarket.init(), this._btnSearchSlot.init(), this._btnRemove.init(), this._btnDiscard.init(), this._btnPlayerBio.setText(services.Localization.localize("extendedPlayerInfo.general.playerBio")), this._btnApplyConsumable.setText(services.Localization.localize("panel.applyitem.button")), this._btnTransfer.setText(services.Localization.localize("infopanel.label.sendTradePile")), this._btnSearchMarket.setText(services.Localization.localize("infopanel.label.findallitems")), this._btnSearchSlot.setText(services.Localization.localize("infopanel.button.searchslot")), this._btnRemove.setText(services.Localization.localize("infopanel.button.removefromsquad")), this._btnDiscard.setText(services.Localization.localize("infopanel.label.quickSell")), this._btnPlayerBio.addTarget(this, this._eButtonSelected, enums.Event.TAP), this._btnApplyConsumable.addTarget(this, this._eButtonSelected, enums.Event.TAP), this._btnAddSwap.addTarget(this, this._eButtonSelected, enums.Event.TAP), this._btnTransfer.addTarget(this, this._eButtonSelected, enums.Event.TAP), this._btnSearchMarket.addTarget(this, this._eButtonSelected, enums.Event.TAP), this._btnSearchSlot.addTarget(this, this._eButtonSelected, enums.Event.TAP), this._btnRemove.addTarget(this, this._eButtonSelected, enums.Event.TAP), this._btnDiscard.addTarget(this, this._eButtonSelected, enums.Event.TAP), this._btnDiscard.displayCurrencyIcon(!0), this.__positionLabel.textContent = services.Localization.localize("card.desc.training.gkattribabbr.Position") + ": ", this.setInteractionState(!0)
},views.items.SlotActionPanel.prototype.setInteractionState = function setInteractionState(t) {
    this.superclass(t), this._btnPlayerBio.setInteractionState(t), this._btnApplyConsumable.setInteractionState(t), this._btnAddSwap.setInteractionState(t), this._btnTransfer.setInteractionState(t), this._btnSearchMarket.setInteractionState(t), this._btnSearchSlot.setInteractionState(t), this._btnRemove.setInteractionState(t), this._btnDiscard.setInteractionState(t)
},views.items.SlotActionPanel.prototype.setItem = function setItem(item, t, i) {
    this._btnAddSwap.setText(function _generateAddSwapText() {
        var action = item.isValid() ? "swap" : "add", type = item.isManager() ? "manager" : "player";
        return services.Localization.localize("infopanel.label." + action + type)
    }()), this._btnDiscard.setSubtext(services.Localization.localizeNumber(item.discardValue));
    var s = item.isValid(), o = item.getYear() >= enums.Year.ASSET, l = item.concept, u = item.lastSalePrice > 0,
        h = !gConfigurationModel.getConfigBoolean(models.ConfigurationModel.KEY_HIDE_TRANSFER_MARKET) && services.User.getUser().hasTradeAccess() && gSettingsModel.isTradingEnabled();
    this._btnApplyConsumable.setDisplay(s && !l && o), this._btnDiscard.setDisplay(s && !l && o), this._btnRemove.setDisplay(s), this._btnPlayerBio.setDisplay(s && item.isPlayer() && o),
        this._btnTransfer.setDisplay(s), this._btnSearchMarket.setDisplay(s && o && h), this._btnSearchSlot.setDisplay(!i && !l && o && h), this._btnTransfer.setText(services.Localization.localize("infopanel.label.sendTradePile")), this._btnRemove.setText(services.Localization.localize(l || !o ? "infopanel.button.removefromsquad" : "infopanel.label.storeInClub")), item.untradeable || item.isLoaned() ? (this._btnTransfer.setText(services.Localization.localize("infopanel.label.untradeable")), this._btnTransfer.setInteractionState(!1)) : t && (this._btnTransfer.setText(services.Localization.localize("popup.error.tradetoken.SellItemTradePileFullTitle")), this._btnTransfer.setInteractionState(!1)), this.__textInfo.textContent = u ? services.Localization.localize("infopanel.label.prevBoughtPrice") : "", this.__valueInfo.textContent = u ? services.Localization.localizeNumber(item.lastSalePrice) : "", DOMKit.toggleDisplayStyle(this.__auctionInfo, u && o)
},views.items.SlotActionPanel.prototype.setShowOffItem = function setShowOffItem(item) {
    this._setPreviewableOnlyItem(item, !1)
},views.items.SlotActionPanel.prototype.setTOTWItem = function setTOTWItem(item) {
    this._setPreviewableOnlyItem(item, !0)
},views.items.SlotActionPanel.prototype._setPreviewableOnlyItem = function _setPreviewableOnlyItem(item, t) {
    this._btnPlayerBio.setDisplay(item.isValid() && item.isPlayer()), this._btnAddSwap.setDisplay(!1), this._btnApplyConsumable.setDisplay(!1), this._btnDiscard.setDisplay(!1), this._btnSearchMarket.setDisplay(item.isValid() && t), this._btnSearchSlot.setDisplay(!1), this._btnRemove.setDisplay(!1), this._btnTransfer.setDisplay(!1), DOMKit.toggleDisplayStyle(this.__auctionInfo, !1)
},views.items.SlotActionPanel.prototype.setNonCurrentYearItem = function setNonCurrentYearItem() {
    this._btnApplyConsumable.setDisplay(!1), this._btnTransfer.setDisplay(!1), this._btnSearchMarket.setDisplay(!1), this._btnDiscard.setDisplay(!1)
},views.items.SlotActionPanel.prototype.setSlotName = function setSlotName(t) {
    var i = !utils.JS.isEmpty(t);
    DOMKit.toggleDisplayStyle(this.__positionContainer, i), this.__position.textContent = i ? t : ""
},views.items.SlotActionPanel.prototype.appendQuickList = function appendQuickList(t) {
    DOMKit.insertBefore(t.getRootElement(), this.__itemActions)
},views.items.SlotActionPanel.prototype._eButtonSelected = function _eButtonSelected(sender, event, data) {
    var t = enums.UIItemActionEvent.BIO;
    sender === this._btnPlayerBio ? t = enums.UIItemActionEvent.BIO : sender === this._btnApplyConsumable ? t = enums.UIItemActionEvent.APPLY_CONSUMABLE : sender === this._btnAddSwap ? t = enums.UIItemActionEvent.ADD_SWAP : sender === this._btnTransfer ? t = enums.UIItemActionEvent.SEND_TO_TRANSFERS : sender === this._btnSearchMarket ? t = enums.UIItemActionEvent.SEARCH_ON_MARKET : sender === this._btnSearchSlot ? t = enums.UIItemActionEvent.SEARCH_SLOT_ON_MARKET : sender === this._btnRemove ? t = enums.UIItemActionEvent.REMOVE_FROM_SQUAD : sender === this._btnDiscard && (t = enums.UIItemActionEvent.DISCARD), this._triggerActions(t)
},NamespaceManager.Register("controllers.squads"),controllers.squads.SlotActionPanel = function SlotActionPanelViewController() {
    FUIViewController.call(this), this._quickListPanel = new controllers.views.QuickListPanel, this._item = null, this._squad = null, this._challenge = null, this._slot = 0, this._iterator = null, this.onDiscard = new UTObservable, Object.defineProperty(this, "onDiscard", {
        writable: !1,
        enumerable: !0
    }), this.onMove = new UTObservable, Object.defineProperty(this, "onMove", {
        writable: !1,
        enumerable: !0
    }), this.onRemove = new UTObservable, Object.defineProperty(this, "onRemove", {
        writable: !1,
        enumerable: !0
    }), this.onPlayerBio = new UTObservable, Object.defineProperty(this, "onPlayerBio", {
        writable: !1,
        enumerable: !0
    }), this.onItemChange = new UTObservable, Object.defineProperty(this, "onItemChange", {
        writable: !1,
        enumerable: !0
    })
},utils.JS.inherits(controllers.squads.SlotActionPanel, FUIViewController),controllers.squads.SlotActionPanel.prototype.init = function init() {
    if (!this.initialized) {
        this.superclass(), this._quickListPanel.init(), this._quickListPanel.onList.observe(this, this._onRemove);
        var view = this.getView()
        ;view.addTarget(this, this._onDiscard, enums.UIItemActionEvent.DISCARD), view.addTarget(this, this._onMove, enums.UIItemActionEvent.SEND_TO_TRANSFERS), view.addTarget(this, this._onApply, enums.UIItemActionEvent.APPLY_CONSUMABLE), view.addTarget(this, this._onAddSwap, enums.UIItemActionEvent.ADD_SWAP), view.addTarget(this, this._ePrefillSearch, enums.UIItemActionEvent.SEARCH_SLOT_ON_MARKET), view.addTarget(this, this._eSearchMarket, enums.UIItemActionEvent.SEARCH_ON_MARKET), view.addTarget(this, this._onRemove, enums.UIItemActionEvent.REMOVE_FROM_SQUAD), view.addTarget(this, this._eBioSelected, enums.UIItemActionEvent.BIO)
    }
},controllers.squads.SlotActionPanel.prototype.initWithItem = function initWithItem(item) {
    this.initialized || (this.setItem(item), this.init())
},controllers.squads.SlotActionPanel.prototype.initWithSquad = function initWithSquad(t, i) {
    if (!this.initialized) {
        utils.Debug.Assert(t instanceof entities.Squad, "Initialization expected a squad entity"), utils.Debug.Assert(utils.JS.isNumber(i), "Initialization expected a number"), this._squad = t;
        var s = t.getSlot(i);
        s.getIndex() >= 0 ? (this._slot = i, this.initWithItem(s.getItem())) : this.init()
    }
},controllers.squads.SlotActionPanel.prototype.initWithSBCChallenge = function initWithSBCChallenge(challenge, t) {
    this.initialized || (utils.Debug.Assert(challenge instanceof entities.SBCChallenge, "Initialization expected a challenge entity"), this._challenge = challenge, this.initWithSquad(this._challenge.squad, t))
},controllers.squads.SlotActionPanel.prototype.dealloc = function dealloc() {
    this.onDiscard.dealloc(), this.onMove.dealloc(), this.onRemove.dealloc(), this.onPlayerBio.dealloc(), this.onItemChange.dealloc(), this.onDiscard = null, this.onMove = null, this.onRemove = null, this.onPlayerBio = null, this.onItemChange = null, this.superclass(), this._quickListPanel.dealloc(), this._item = null, this._squad = null, this._challenge = null, this._slot = 0
},controllers.squads.SlotActionPanel.prototype._getViewInstanceFromData = function _getViewInstanceFromData() {
    return new views.items.SlotActionPanel
},controllers.squads.SlotActionPanel.prototype.setSlotIndex = function setSlotIndex(index) {
    this._slot !== index && (this._slot = index, this._squad && this.setItem(this._squad.getSlot(index).getItem()))
},controllers.squads.SlotActionPanel.prototype.setItem = function setItem(item) {
    if (this._item !== item) {
        this._item = item;
        var view = this.getView(), t = this._squad && this._squad.isShowOff(),
            i = this._squad && this._squad.isGenerations(),
            s = repositories.Item.isPileFull(enums.FUTItemPile.TRANSFER);
        this._squad && this._squad.isTOTW() ? view.setTOTWItem(this._item) : t ? view.setShowOffItem(this._item) : view.setItem(this._item, s, i), this._item.getYear() < enums.Year.ASSET && view.setNonCurrentYearItem();
        var o = services.User.getUser(),
            l = gSettingsModel.isTradingEnabled() && !gConfigurationModel.getConfigBoolean(models.ConfigurationModel.KEY_HIDE_TRANSFER_MARKET) && o && o.hasTradeAccess() && !s && this._item.isValid() && !this._item.untradeable && !t;
        this._quickListPanel.setItem(this._item);
        var u = this._quickListPanel.getView();
        l && (view.appendQuickList(u), u.setTitle(services.Localization.localize("infopanel.label.quickList"))), this._quickListPanel.getView().toggleDisplay(l)
    }
},controllers.squads.SlotActionPanel.prototype.setIterator = function setIterator(iterator) {
    this._iterator = iterator
},controllers.squads.SlotActionPanel.prototype._removeItemFromSquad = function _removeItemFromSquad() {
    var t = this._challenge ? this._challenge.squad : this._squad;
    t.removeItemFromSlot(this._squad.getSlot(this._item).getIndex()), this._challenge ? services.SBC.saveChallenge(this._challenge) : t.save()
},controllers.squads.SlotActionPanel.prototype._onDiscard = function _onDiscard(sender, event, data) {
    var view = this.getView();
    view.setInteractionState(!1), utils.PopupManager.ShowConfirmation(utils.PopupManager.Confirmations.CONFIRM_DISCARD, [services.Localization.localizeNumber(this._item.discardValue)], function _onDiscardConfirm() {
        services.Item.discard(this._item).observe(this, function (t, data) {
            t.unobserve(this), data.success ? (this._removeItemFromSquad(),
                this.onDiscard.notify(this._item)) : services.Notification.queue([services.Localization.localize("notification.error.item.discard"), enums.UINotificationType.NEGATIVE]), view.setInteractionState(!0)
        })
    }.bind(this), view.setInteractionState.bind(view, !0))
},controllers.squads.SlotActionPanel.prototype._onMove = function _onMove(sender, event, data) {
    var t = event === enums.UIItemActionEvent.SEND_TO_TRANSFERS ? enums.FUTItemPile.TRANSFER : enums.FUTItemPile.CLUB;
    services.Item.move(this._item, t).observe(this, function _onMoveComplete(i, response) {
        if (i.unobserve(this), response.success) {
            var s = "";
            s = t === enums.FUTItemPile.TRANSFER ? this._item.isManager() ? services.Localization.localize("notification.manager.toTradePile") : this._item.isPlayer() ? services.Localization.localize("notification.player.toTradePile") : services.Localization.localize("notification.item.oneToTradePile") : services.Localization.localize("notification.item.oneToClub"), services.Notification.queue([s, enums.UINotificationType.NEUTRAL]), this._removeItemFromSquad(), this.onMove.notify(this._item)
        } else services.Notification.queue([services.Localization.localize("notification.item.moveFailed"), enums.UINotificationType.NEGATIVE])
    })
},controllers.squads.SlotActionPanel.prototype._onRemove = function _onRemove(sender, event, data) {
    this._removeItemFromSquad(), this.onRemove.notify(this._item)
},controllers.squads.SlotActionPanel.prototype._onApply = function _onApply(sender, event, data) {
    var t = new controllers.items.ConsumableCategories;
    this._challenge ? t.initWithSBCChallenge(this._challenge, this._slot) : this._squad ? t.initWithSquad(this._squad, this._slot) : this._item ? t.initWithItem(this._item) : t.init(), this.getNavigationController().pushViewController(t)
},controllers.squads.SlotActionPanel.prototype._onAddSwap = function _onAddSwap(sender, event, data) {
    var t = new controllers.club.ClubSearchFilters, i = this.getNavigationController();
    if (i) {
        if (this._challenge ? t.initWithSBCChallenge(this._challenge, this._iterator) : this._squad ? t.initWithSquad(this._squad, this._iterator) : this._item ? t.initWithItem(this._item) : t.init(), this._squad) {
            var s = services.User.getUser().squadSearchCriteria, o = this._squad.getSlot(this._slot);
            if (s && o.getIndex() >= 0) {
                var l = o.getItem().isManager();
                s.type = l ? enums.SearchType.STAFF : enums.SearchType.PLAYER, s.position = o.getGeneralPositionName() || enums.SearchType.ANY, this._squad.isGenerations() || (s.year = enums.SearchType.ANY), t.setSearchCriteria(s)
            }
        }
        t.onItemChange.observe(this, this._eOnItemChange), i.pushViewController(t)
    }
},controllers.squads.SlotActionPanel.prototype._eSearchMarket = function _eSearchMarket(sender, event, data) {
    var t = this.getNavigationController();
    if (t) {
        var i = new UTMarketSearchResultsViewController, s = new transferobjects.SearchCriteria;
        this._item ? (s.defId = [this._item.getDefId()], s.type = this._item.getSearchType(), i.initWithSearchCriteria(s), i.setPinnedItem(this._item)) : i.initWithSearchCriteria(s), t.pushViewController(i)
    }
},controllers.squads.SlotActionPanel.prototype._ePrefillSearch = function _ePrefillSearch(sender, event, data) {
    var t = this.getNavigationController();
    if (t) {
        TelemetryManager.trackEvent(TelemetryManager.Sections.AUCTIONS, TelemetryManager.Categories.BUTTON_PRESS, "Squad Slot Detail View - Search On Transfer Market");
        var i = new UTMarketSearchFiltersViewController, s = new UTSquadMarketSearchViewModel;
        s.setSquad(this._squad), s.setCurrentSlotIndex(this._slot), i.initWithSquadContext(s), t.pushViewController(i)
    }
},controllers.squads.SlotActionPanel.prototype._eBioSelected = function _eBioSelected(sender, event, data) {
    this.onPlayerBio.notify()
},controllers.squads.SlotActionPanel.prototype._eOnItemChange = function _eOnItemChange(sender, t) {
    this.onItemChange.notify(t)
},NamespaceManager.Register("views.items"),views.items.SBCBrickActionPanel = function SlotActionPanelView() {
    FUIView.call(this), this._generate()
},utils.JS.inherits(views.items.SBCBrickActionPanel, FUIView),views.items.SBCBrickActionPanel.prototype._generate = function _generate() {
    if (!this._generated) {
        var t = document.createElement("div");
        t.classList.add("flat"),
            t.classList.add("layout-article"), t.classList.add("SBCBrickActionPanel"), this.__list = document.createElement("ul"), this.__list.classList.add("l-standard"), this.__list.classList.add("l-list"), this.__list.classList.add("panel-list-alternating"), t.appendChild(this.__list), this.__help = document.createElement("p"), this.__help.classList.add("secondary"), t.appendChild(this.__help), this.__root = t, this._generated = !0
    }
},views.items.SBCBrickActionPanel.prototype.destroyGeneratedElements = function destroyGeneratedElements() {
    $(this.__root).off().remove(), this.__root = null, this.__list = null, this.__help = null
},views.items.SBCBrickActionPanel.prototype.getRoot = function getRoot() {
    return $(this.__root)
},views.items.SBCBrickActionPanel.prototype.getRootElement = function getRootElement() {
    return this.__root
},views.items.SBCBrickActionPanel.prototype.render = function render(t) {
    this.__help.textContent = services.Localization.localize("sbc.custombrick.help");
    var item = t.getItem();
    this._generateRow(enums.SBC.ELG_KEY.FUT_ELGRULE_LEAGUE_ID, item.leagueId, this.__list), this._generateRow(enums.SBC.ELG_KEY.FUT_ELGRULE_CLUB_ID, item.teamId, this.__list), this._generateRow(enums.SBC.ELG_KEY.FUT_ELGRULE_NATION_ID, item.nationId, this.__list)
},views.items.SBCBrickActionPanel.prototype._generateRow = function _generateImageLoader(key, value, parent) {
    var t, valueText;
    switch (key) {
        case enums.SBC.ELG_KEY.FUT_ELGRULE_NATION_ID:
            t = "controlbar.cardview.Nationality", valueText = 0 === value ? services.Localization.localize("roles.defaultRole") : utils.FUTLocalization.getNationNameById(value);
            break;
        case enums.SBC.ELG_KEY.FUT_ELGRULE_LEAGUE_ID:
            t = "controlbar.cardview.League", valueText = 0 === value ? services.Localization.localize("roles.defaultRole") : utils.FUTLocalization.getLeagueNameByID(value, enums.Year.ASSET);
            break;
        case enums.SBC.ELG_KEY.FUT_ELGRULE_CLUB_ID:
            t = "controlbar.cardview.Club", valueText = 0 === value ? services.Localization.localize("roles.defaultRole") : utils.FUTLocalization.getTeamAbb15ByID(value, enums.Year.ASSET);
            break;
        default:
            utils.Debug.Assert(!1, "[views.squads.Slot] | Reached default case: " + key)
    }
    var i = document.createElement("li"), s = document.createElement("h1"), o = document.createElement("h2");
    DOMKit.addClass(s, enums.UIText.SECONDARY), s.textContent = services.Localization.localize(t), o.textContent = valueText, i.appendChild(s), i.appendChild(o), parent.appendChild(i)
},NamespaceManager.Register("controllers.squads"),controllers.squads.SlotDetails = function SlotDetailsController() {
    FUIViewController.call(this), this._panel = null, this._panelView = null, this._viewmodel = null, this._squad = null, this._challenge = null, this.onSlotChange = new UTObservable, Object.defineProperty(this, "onSlotChange", {writable: !1})
},utils.JS.inherits(controllers.squads.SlotDetails, FUIViewController),controllers.squads.SlotDetails.prototype.init = function init() {
    this.initialized || this.superclass()
},controllers.squads.SlotDetails.prototype.initWithItemIterator = function initWithItemIterator(iterator) {
    if (!this.initialized) {
        utils.Debug.Assert(iterator instanceof UTIterator, "Initialization expected an instance of UTIterator"), this._viewmodel = iterator, this.init();
        var view = this.getView();
        view.addTarget(this, this._ePrevItem, enums.UIItemNavigationEvent.PREV), view.addTarget(this, this._eNextItem, enums.UIItemNavigationEvent.NEXT)
    }
},controllers.squads.SlotDetails.prototype.initWithSquad = function initWithSquad(t, i) {
    if (!this.initialized) {
        utils.Debug.Assert(t instanceof entities.Squad, "Initialization expected a squad entity"), this._squad = t;
        var s = this._createIterator(i);
        this.initWithItemIterator(s)
    }
},controllers.squads.SlotDetails.prototype.initWithSBCChallenge = function initWithSBCChallenge(challenge, t) {
    if (!this.initialized) {
        utils.Debug.Assert(challenge instanceof entities.SBCChallenge, "Initialization expected a challenge entity"), utils.Debug.Assert(utils.JS.isNumber(t), "Initialization expected a numeric slot index"), this._challenge = challenge, this._squad = this._challenge.squad;
        var i = this._createIterator(t);
        this.initWithItemIterator(i),
            this.getView().addClass(enums.SquadPitchModes.SBC)
    }
},controllers.squads.SlotDetails.prototype.getNavigationTitle = function getNavigationTitle() {
    return services.Localization.localize("extendedPlayerInfo.header")
},controllers.squads.SlotDetails.prototype._createIterator = function _createIterator(index) {
    var t = this._getSlots(), i = new UTIterator(t);
    return utils.JS.isNumber(index) && i.setIndex(i.indexOf(function (t) {
        return t.getIndex() === index
    })), i
},controllers.squads.SlotDetails.prototype._getSlots = function _getSlots() {
    function _generateSlotArray(t, i, s, o) {
        var l = t.getFieldPlayers().reverse().concat(t.getSubPlayers(), t.getReservePlayers());
        return i && l.unshift(t.getManager()), s && (l = l.filter(function (t) {
            return t.isValid()
        })), o && (l = l.filter(function (i) {
            return -1 === t.simpleBrickIndices.indexOf(i.getIndex())
        })), l
    }

    return this._squad.isTOTW() ? _generateSlotArray(this._squad, !1, !0, !1) : this._squad.isShowOff() ? _generateSlotArray(this._squad, !0, !0, !1) : this._squad.isGenerations() ? _generateSlotArray(this._squad, !1, !1, !1) : this._squad.isSBC() ? _generateSlotArray(this._squad, !1, !1, !0) : _generateSlotArray(this._squad, !0, !1, !1)
},controllers.squads.SlotDetails.prototype.dealloc = function dealloc() {
    this.superclass(), this._panel ? (this._panel.dealloc(), this._panel = null, this._panelView = null) : this._panelView && (this._panelView.dealloc(), this._panelView = null), this.onSlotChange.dealloc(), this.onSlotChange = null, this._viewmodel = null, this._squad = null, this._challenge = null
},controllers.squads.SlotDetails.prototype.viewDidAppear = function viewDidAppear() {
    this.superclass(), this._renderView(), this.getNavigationController().setNavigationVisibility(!isPhone())
},controllers.squads.SlotDetails.prototype.viewWillDisappear = function viewWillDisappear() {
    this.superclass(), this.getView().teardownCarousel()
},controllers.squads.SlotDetails.prototype._getViewInstanceFromData = function _getViewInstanceFromData() {
    return new views.items.ItemDetails
},controllers.squads.SlotDetails.prototype._getViewIteratorData = function _getViewIteratorData() {
    var index = this._viewmodel.getIndex(), t = this._viewmodel.get(index - 1), i = this._viewmodel.current(),
        next = this._viewmodel.get(index + 1);
    return {
        slots: {current: i || null, prev: t || null, next: next || null},
        items: {current: i.getItem(), prev: t ? t.getItem() : null, next: next ? next.getItem() : null}
    }
},controllers.squads.SlotDetails.prototype._renderView = function _renderView() {
    var view = this.getView(), data = this._getViewIteratorData();
    this._renderPanel(), this.isViewDisplayed() && (view.render(data.items.current, data.items.prev, data.items.next), view.setSlotChemistry(data.slots.current, data.slots.prev, data.slots.next), this._panelView instanceof views.items.SlotActionPanel && this._panelView.setSlotName(this._getSlotName(data.slots.current)))
},controllers.squads.SlotDetails.prototype._renderPanel = function _renderPanel() {
    this._panel ? (this.removeChildViewController(this._panel), this._panel.dealloc(), this._panel = null, this._panelView = null) : this._panelView && (this._panelView.dealloc(), this._panelView = null);
    var t = this._viewmodel.current();
    if (utils.JS.isValid(t) && t.isCustomBrick()) this._panelView = new views.items.SBCBrickActionPanel, this._panelView.render(this._viewmodel.current()); else {
        var index = utils.JS.isValid(t) ? t.getIndex() : 0;
        this._panel = new controllers.squads.SlotActionPanel, this._panelView = this._panel.getView(), this.addChildViewController(this._panel), this._challenge ? this._panel.initWithSBCChallenge(this._challenge, index) : this._squad ? this._panel.initWithSquad(this._squad, index) : this._panel.init(), this._panel.setIterator(this._viewmodel), this._panel.onDiscard.observe(this, this._eItemRemoved), this._panel.onMove.observe(this, this._eItemRemoved), this._panel.onRemove.observe(this, this._eItemRemoved), this._panel.onPlayerBio.observe(this, this._onPlayerBio), this._panel.onItemChange.observe(this, this._eSlotChange)
    }
    this.getView().appendPanel(this._panelView)
},controllers.squads.SlotDetails.prototype.setSquad = function setSquad(t) {
    this._challenge || (this._squad = t, this._viewmodel = this._createIterator(0))
},
controllers.squads.SlotDetails.prototype.setSlot = function setSlot(index) {
    var t = this.isViewDisplayed();
    this._viewmodel && (this._viewmodel.current().getIndex() !== index && (this._viewmodel.setIndex(this._viewmodel.indexOf(function (t) {
        return t.getIndex() === index
    })), t && this._renderPanel()), t && this._renderView())
},controllers.squads.SlotDetails.prototype._getSlotName = function _getSlotName(t) {
    var i = t.getIndex();
    if (i < entities.Squad.FIELD_PLAYERS) return utils.FUTLocalization.getLocalizedPositionStringById(t.getGeneralPosition());
    if (this._challenge) return i >= entities.Squad.FIELD_PLAYERS ? services.Localization.localize("dock.label.workArea") : "";
    if (this._squad) {
        if (i === entities.Squad.MANAGER_SLOT_INDEX) return services.Localization.localize("cards.cardfront.manager");
        if (i >= entities.Squad.FIELD_PLAYERS + entities.Squad.SUB_PLAYERS) return services.Localization.localize("dock.label.reserves");
        if (i >= entities.Squad.FIELD_PLAYERS) return services.Localization.localize("dock.label.substitutes")
    }
    return ""
},controllers.squads.SlotDetails.prototype._eItemRemoved = function _eItemRemoved(t) {
    if (this._squad) {
        var index = this._viewmodel.getIndex();
        this._viewmodel.resetCollection(this._getSlots()), this._viewmodel.setIndex(index), this._renderView()
    } else if (this._viewmodel.remove(this._viewmodel.getIndex()), this._viewmodel.length > 0) {
        var view = this.getView(), data = this._getViewIteratorData();
        view.removeCurrent(data.items.current, data.items.prev, data.items.next), view.setSlotChemistry(data.slots.current, data.slots.prev, data.slots.next), this._panelView instanceof views.items.SlotActionPanel && this._panelView.setSlotName(this._getSlotName(data.slots.current))
    } else this.getNavigationController().popViewController(!0)
},controllers.squads.SlotDetails.prototype._eSlotChange = function _eSlotChange(t, i) {
    this._viewmodel.setIndex(this._viewmodel.indexOf(function (t) {
        return t.getIndex() === i.getIndex()
    })), this.onSlotChange.notify({slot: this._viewmodel.current()})
},controllers.squads.SlotDetails.prototype._ePrevItem = function _ePrevItem(sender, event) {
    if (!this._viewmodel.startOfList) {
        var view = this.getView(), t = this._viewmodel.previous(),
            i = this._viewmodel.get(this._viewmodel.getIndex() - 1),
            next = this._viewmodel.get(this._viewmodel.getIndex() + 1);
        this._renderPanel(), this.onSlotChange.notify({slot: t}), view.showPrev(i ? i.getItem() : null), view.setSlotChemistry(t, i, next), this._panelView instanceof views.items.SlotActionPanel && this._panelView.setSlotName(this._getSlotName(t))
    }
},controllers.squads.SlotDetails.prototype._eNextItem = function _eNextItem(sender, event) {
    if (!this._viewmodel.endOfList) {
        var view = this.getView(), t = this._viewmodel.next(), i = this._viewmodel.get(this._viewmodel.getIndex() - 1),
            next = this._viewmodel.get(this._viewmodel.getIndex() + 1);
        this._renderPanel(), this.onSlotChange.notify({slot: t}), view.showNext(next ? next.getItem() : null), view.setSlotChemistry(t, i, next), this._panelView instanceof views.items.SlotActionPanel && this._panelView.setSlotName(this._getSlotName(t))
    }
},controllers.squads.SlotDetails.prototype._onPlayerBio = function _onPlayerBio(t) {
    var item = this._viewmodel.current().getItem();
    if (item.isValid() && item.isPlayer() && utils.JS.isValid(item.getMetaData())) {
        var i = new UTPlayerBioViewController;
        i.initWithItem(item), this.getNavigationController().pushViewController(i)
    } else services.Notification.queue([services.Localization.localize("playerbio.unavailable"), enums.UINotificationType.NEGATIVE])
},NamespaceManager.Register("controllers.navigation"),controllers.navigation.SquadItemDetails = function SquadItemDetailNavigationController(t, toolbar) {
    FUINavigationController.call(this, t, toolbar), this._squad = null, Object.defineProperty(this, "_squad", {
        writable: !0,
        enumerable: !1
    }), this._challenge = null, Object.defineProperty(this, "_challenge", {
        writable: !0,
        enumerable: !1
    }), this._dismissButton = null, Object.defineProperty(this, "_dismissButton", {
        writable: !0,
        enumerable: !1
    }), this.onSlotChange = new UTObservable, Object.defineProperty(this, "onSlotChange", {
        writable: !1,
        enumerable: !0
    }), this.onSearchStarted = new UTObservable,
        Object.defineProperty(this, "onSearchStarted", {
            writable: !1,
            enumerable: !0
        }), this.onSearchEnded = new UTObservable, Object.defineProperty(this, "onSearchEnded", {
        writable: !1,
        enumerable: !0
    })
},utils.JS.inherits(controllers.navigation.SquadItemDetails, FUINavigationController),controllers.navigation.SquadItemDetails.prototype.init = function init() {
    this.initialized || (this.superclass(), this._dismissButton = new views.buttons.NavigationButton, this._dismissButton.init())
},controllers.navigation.SquadItemDetails.prototype.initWithSquad = function initWithSquad(t, i) {
    if (!this.initialized) {
        utils.Debug.Assert(t instanceof entities.Squad, "Initialization expected a squad entity."), this._squad = t;
        var s = this._getRootControllerInstance();
        s.initWithSquad(this._squad, i), s.onSlotChange.observe(this, function (t, data) {
            this.onSlotChange.notify(data)
        }), this.initWithRootController(s)
    }
},controllers.navigation.SquadItemDetails.prototype.initWithSBCChallenge = function initWithSBCChallenge(challenge, t) {
    if (!this.initialized) {
        utils.Debug.Assert(challenge instanceof entities.SBCChallenge, "Initialization expected a challenge entity."), utils.Debug.Assert(utils.JS.isNumber(t), "Initialization expected a number for current squad slot."), this._challenge = challenge, this._squad = this._challenge.squad;
        var i = this._getRootControllerInstance();
        i.initWithSBCChallenge(this._challenge, t), i.onSlotChange.observe(this, function (t, data) {
            this.onSlotChange.notify(data)
        }), this.initWithRootController(i)
    }
},controllers.navigation.SquadItemDetails.prototype.dealloc = function dealloc() {
    this.superclass(), this._dismissButton && (this._dismissButton.dealloc(), this._dismissButton = null), this.onSlotChange.dealloc(), this.onSearchStarted.dealloc(), this.onSearchEnded.dealloc(), this._squad = null, this._challenge = null, this.onSlotChange = null, this.onSearchStarted = null, this.onSearchEnded = null
},controllers.navigation.SquadItemDetails.prototype._getRootControllerInstance = function _getRootControllerInstance() {
    return new controllers.squads.SlotDetails
},controllers.navigation.SquadItemDetails.prototype.getRootPrimaryNavigationItem = function getRootPrimaryNavigationItem() {
    return this._dismissButton
},controllers.navigation.SquadItemDetails.prototype.setSquad = function setSquad(t) {
    this._challenge || (this._squad = t, this.getRootController().setSquad(this._squad))
},controllers.navigation.SquadItemDetails.prototype.setSlot = function setSlot(index) {
    this.popToRootViewController(), this.getRootController().setSlot(index)
},controllers.navigation.SquadItemDetails.prototype._showController = function _showController(t, i) {
    this.superclass(t, i), t instanceof controllers.club.ClubSearchFilters ? this.onSearchStarted.notify() : t instanceof controllers.squads.SlotDetails && this.onSearchEnded.notify()
},controllers.squads.ShowOffSquadLandscape = function ShowOffSquadViewController() {
    controllers.squads.BaseSquadLandscape.call(this), this._panelController = new controllers.squads.ShowOffSquadActions
},utils.JS.inherits(controllers.squads.ShowOffSquadLandscape, controllers.squads.BaseSquadLandscape),controllers.squads.ShowOffSquadLandscape.prototype.init = function init() {
    this.superclass(), this._squad ? this._panelController.initWithSquad(this._squad) : this._panelController.init(), this.addChildViewController(this._panelController)
},controllers.squads.ShowOffSquadLandscape.prototype.dealloc = function dealloc() {
    this.superclass(), this._panelController && this._panelController.dealloc(), this._panelController = null
},controllers.squads.ShowOffSquadLandscape.prototype.getDefaultPanel = function getDefaultPanel() {
    return this._panelController
},controllers.squads.ShowOffSquadLandscape.prototype._setupSquadOverview = function _setupSquadOverview() {
    this._squad && this._overviewController.getView().getPitch().addTarget(this, this._ePitchTapped, enums.Event.TAP)
},controllers.squads.ShowOffSquadLandscape.prototype._generateSquadOverview = function _generateSquadOverview() {
    var t = new controllers.squads.ShowOffSquadOverview;
    return this._squad ? t.initWithSquad(this._squad) : t.init(), t
},
controllers.squads.ShowOffSquadLandscape.prototype.selectSlotIndexForSquad = function selectSlotIndexForSquad(sender, t, index) {
    this._squad.getSlot(index).isValid() && (this._overviewController.selectSlot(index), sender === this._overviewController && this._showSlotDetails(index))
},UTCoordinateVO.prototype.value = function value() {
    return [this.x, this.y]
},UTCoordinateVO.prototype.equals = function equals(t) {
    return this.x === t.x && this.y === t.y
},utils.JS.inherits(UTParticle, UTObject),UTParticle.prototype.dealloc = function dealloc() {
    this.superclass(), this.lifetime = 0, this.alpha = 0, this.coordinateHistory = []
},UTParticle.prototype.isDead = function isDead() {
    return this.alpha <= 0 || this.lifetime <= Date.now() - this._timestamp
},UTParticle.prototype.update = function update() {
    this.coordinateHistory.push(new UTCoordinateVO(this.x, this.y)), this.speed += this.speed * this.acceleration, this.x += Math.cos(this.angle) * this.speed, this.y += Math.sin(this.angle) * this.speed + this.gravity, this.rotation += this.rotationSpeed, this.alpha > 0 && (this.alpha = Math.max(this.alpha - this.decay, 0))
},UTParticle.prototype.draw = function draw(t) {
    t.save(), t.fillStyle = this.color, t.globalAlpha = this.alpha, t.beginPath(), t.arc(this.x, this.y, this.size, 0, 2 * Math.PI, !1), t.closePath(), t.fill(), t.restore()
},UTParticle.prototype.random = function random(min, max) {
    return Math.random() * (max - min) + min
},utils.JS.inherits(UTParticleSystem, UTObject),UTParticleSystem.prototype.dealloc = function dealloc() {
    this._running = !1, utils.JS.isNumber(this._frameRequestId) && (cancelAnimationFrame(this._frameRequestId), this._frameRequestId = null), this.removeFromParentParticleSystem(), this._childParticleSystems.forEach(this.removeChildParticleSystem, this), this._particles.forEach(function (t) {
        t.dealloc()
    }), this._particles = [], this.superclass()
},UTParticleSystem.prototype.run = function run() {
    this._running || (this._running = !0, this._runStart = Date.now(), this._draw())
},UTParticleSystem.prototype._draw = function _draw() {
    if (this._running) {
        var now = Date.now();
        if (this._parentParticleSystem || this._ctx.clearRect(0, 0, this._ctx.canvas.width, this._ctx.canvas.height), this._runStart + this.duration < now) {
            if (!this.loop) return;
            this._runStart = now
        }
        this._drawChildren(), this._runStart + this.spawnDelay < now && this._lastSpawnTime + this.spawnInterval < now && (this._lastSpawnTime = now, this._spawnParticles(this.spawnRate)), this._drawParticles(), this._parentParticleSystem || (this._frameRequestId = requestAnimationFrame(this._draw.bind(this)))
    }
},UTParticleSystem.prototype._drawChildren = function _drawChildren() {
    this._childParticleSystems.forEach(function (t) {
        t._running ? t._draw() : t.run()
    })
},UTParticleSystem.prototype._drawParticles = function _drawParticles() {
    var t;
    for (t = 0; t < this._particles.length; t++) {
        var i = this._particles[t];
        this._updateParticle(i), i.isDead() && (this._particles.splice(t, 1), t--)
    }
},UTParticleSystem.prototype._spawnParticles = function _spawnParticles(t) {
    for (var i = this._particles.length; t-- > 0 && i < this.maxParticles;) this._particles.push(this._generateParticle()), i++
},UTParticleSystem.prototype._generateParticle = function _generateParticle() {
    var t = new UTParticle;
    return t.x = this.x + Math.random() * this._ctx.canvas.width, t.y = this.y + Math.random() * this._ctx.canvas.height, t.acceleration = this.acceleration, t.angle = this.angle, t.gravity = this.gravity, t.rotation = this.rotation, t.rotationSpeed = this.rotationSpeed, t.speed = this.speed, t
},UTParticleSystem.prototype._updateParticle = function _updateParticle(t) {
    t.draw(this._ctx), t.update()
},UTParticleSystem.prototype.addChildParticleSystem = function addChildParticleSystem(t) {
    this._childParticleSystems.indexOf(t) < 0 && (t._parentParticleSystem = this, this._childParticleSystems.push(t))
},UTParticleSystem.prototype.removeChildParticleSystem = function removeChildParticleSystem(t) {
    var index = this._childParticleSystems.indexOf(t);
    index >= 0 && (t._parentParticleSystem = null, this._childParticleSystems.splice(index, 1))
},UTParticleSystem.prototype.removeFromParentParticleSystem = function removeFromParentParticleSystem() {
    this._parentParticleSystem && this._parentParticleSystem.removeChildParticleSystem(this)
},utils.JS.inherits(UTConfettiParticle, UTParticle),UTConfettiParticle.prototype.update = function update() {
    this.superclass(), this.tilt = Math.sin(this.rotation) * (this.size / 3)
},UTConfettiParticle.prototype.draw = function draw(t) {
    t.save(), t.beginPath(), t.lineWidth = this.size / 2, t.strokeStyle = this.color, t.globalAlpha = this.alpha, t.moveTo(this.x + this.tilt + this.size / 3, this.y), t.lineTo(this.x + this.tilt, this.y + this.tilt + this.size / 3), t.stroke(), t.restore()
},UTConfettiColourVO.prototype.value = function value() {
    return [this.primaryColour, this.secondaryColour]
},UTConfettiColourVO.prototype.equals = function equals(t) {
    return this.primaryColour === t.primaryColour && this.secondaryColour === t.secondaryColour
},UTConfettiColourVO.prototype.getRandom = function getRandom() {
    var color = Math.random() >= .5 ? this.primaryColour : this.secondaryColour;
    return color ? "rgba(" + color.r + ", " + color.g + ", " + color.b + ", 1)" : null
},utils.JS.inherits(UTConfettiRainParticleSystem, UTParticleSystem),UTConfettiRainParticleSystem.prototype._generateParticle = function _generateParticle() {
    var t = new UTConfettiParticle;
    return t.size = t.random(30, 50), t.color = this._confettiColor.getRandom(), t.x = this.x + Math.random() * this._ctx.canvas.width, t.y = -t.size, t.rotation = t.random(1, 2 * Math.PI), t.rotationSpeed = t.random(-.25, .25), t.speed = 0, t.acceleration = 0, t.gravity = this.gravity, t.tilt = Math.floor(Math.random() * t.size), t
},UTConfettiRainParticleSystem.prototype.setConfettiColor = function setConfettiColor(color) {
    this._confettiColor = color
},UTConfettiRainParticleSystem.prototype._updateParticle = function _updateParticle(t) {
    this.superclass(t), t.y > this._ctx.canvas.height && (t.lifetime = 0)
},utils.JS.inherits(UTConfettiCannonParticleSystem, UTParticleSystem),UTConfettiCannonParticleSystem.prototype._generateParticle = function _generateParticle() {
    var t = new UTConfettiParticle;
    return t.size = t.random(30, 50), t.color = this._confettiColor.getRandom(), t.x = this.x, t.y = this.y, t.angle = this.angle + .1 * (Math.random() - Math.random()), t.speed = Math.random() * this.speed, t.acceleration = -.03, t.rotation = t.random(1, 2 * Math.PI), t.rotationSpeed = t.random(-.25, .25), t.gravity = this.gravity, t
},UTConfettiCannonParticleSystem.prototype.setConfettiColor = function setConfettiColor(color) {
    this._confettiColor = color
},UTParticleTrail.prototype.draw = function draw(t, i) {
    var s = i.coordinateHistory.length;
    if (s > 0) {
        var o = 60 * this.time, l = i.coordinateHistory.slice(Math.max(s - o, 0)), u = l.shift();
        t.save(), t.strokeStyle = this.color, t.lineWidth = this.width, t.lineCap = this.lineCap, t.beginPath(), t.moveTo(u.x, u.y), l.forEach(function (i, s) {
            t.globalAlpha = (o - s) / o, t.lineTo(i.x, i.y)
        }), t.stroke(), t.restore()
    }
},utils.JS.inherits(UTFireworksParticleSystem, UTParticleSystem),UTFireworksParticleSystem.prototype._generateParticle = function _generateParticle() {
    var t = new UTParticle;
    return t.x = this.x, t.y = this.y, t.color = "rgba(255, 255, 255, 0.4)", t.speed = t.random(10, 20), t.angle = t.random(0, 2 * Math.PI), t.decay = .015, t.acceleration = -.05, t
},UTFireworksParticleSystem.prototype._updateParticle = function _updateParticle(t) {
    t.update(), t.draw(this._ctx), this._particleTrail.color = t.color, this._particleTrail.draw(this._ctx, t)
},utils.JS.inherits(UTSnowflakeParticle, UTParticle),UTSnowflakeParticle.prototype.draw = function draw(t) {
    t.save(), t.globalAlpha = this.alpha, t.beginPath(), t.arc(this.x, this.y, this.size, 0, 2 * Math.PI, !1), t.fillStyle = this.color, t.fill(), t.restore()
},utils.JS.inherits(UTSnowfallParticleSystem, UTParticleSystem),UTSnowfallParticleSystem.prototype._generateParticle = function _generateParticle() {
    var t = new UTSnowflakeParticle, i = this._ctx.canvas.width, s = Math.abs(Math.cos(this.angle) * (i / 2)),
        o = Math.cos(this.angle) > 0 ? this.x - s : this.x;
    return t.color = "rgb(255, 255, 255)", t.size = t.random(2, 7), t.x = o + Math.random() * (i + s), t.y = -t.size, t.speed = Math.random() * this.speed, t.acceleration = 0, t.gravity = Math.ceil(Math.random() * this.gravity), t.angle = this.angle, t.decay = t.random(.001, .01), t
},
UTSnowfallParticleSystem.prototype._updateParticle = function _updateParticle(t) {
    this.superclass(t), t.y > this._ctx.canvas.height && (t.lifetime = 0)
},NamespaceManager.Register("views.store"),views.store.PackAnimation = function PackAnimation() {
    FUIView.call(this), this._cardComponent = null, this._particleSystem = null, this._confettiGenerator = null, this._confettiCannon1 = null, this._confettiCannon2 = null, this._fireworkGenerator = null, this._snowParticleSystem = null, this._windowResizeCallback = this._eWindowResize.bind(this)
},utils.JS.inherits(views.store.PackAnimation, FUIView),views.store.PackAnimation.prototype._generate = function _generate() {
    if (!this._generated) {
        var t = document.createElement("article");
        t.classList.add("view-pack-animation");
        var i = document.createElement("div");
        i.classList.add("pack-animation-vignette"), t.appendChild(i), this.__canvas = document.createElement("canvas"), this.__canvas.classList.add("particle-animation"), t.appendChild(this.__canvas), this.__itemShell = document.createElement("div"), this.__itemShell.classList.add("animated-item-shell"), t.appendChild(this.__itemShell);
        var s = document.createElement("div");
        s.classList.add("animated-pack-shell"), t.appendChild(s), this.__root = t, this._generated = !0
    }
},views.store.PackAnimation.prototype.destroyGeneratedElements = function destroyGeneratedElements() {
    $(this.__root).off().remove(), this.__root = null, this.__canvas = null, this.__itemShell = null
},views.store.PackAnimation.prototype.getRoot = function getRoot() {
    return $(this.__root)
},views.store.PackAnimation.prototype.getRootElement = function getRootElement() {
    return this.__root
},views.store.PackAnimation.prototype.init = function init() {
    this.superclass(), this._particleSystem = new UTParticleSystem(this.__canvas), this._confettiGenerator = new UTConfettiRainParticleSystem(this.__canvas), this._confettiCannon1 = new UTConfettiCannonParticleSystem(this.__canvas), this._confettiCannon2 = new UTConfettiCannonParticleSystem(this.__canvas), this._fireworkGenerator = new UTFireworksParticleSystem(this.__canvas), this._snowParticleSystem = new UTSnowfallParticleSystem(this.__canvas), this._particleSystem.spawnRate = 0, this._particleSystem.spawnInterval = 5e3, this._particleSystem.loop = !0, this._fireworkGenerator.gravity = .15, this._fireworkGenerator.spawnInterval = 1e3, this._fireworkGenerator.spawnRate = 50, this._fireworkGenerator.spawnDelay = 1e3, this._fireworkGenerator.duration = 4e3, this._particleSystem.addChildParticleSystem(this._fireworkGenerator), gConfigurationModel.getConfigBoolean(models.ConfigurationModel.KEY_WINTER_THEME) ? (this._snowParticleSystem.gravity = 5, this._snowParticleSystem.spawnInterval = 300, this._snowParticleSystem.spawnRate = 20, this._snowParticleSystem.loop = !0, this._snowParticleSystem.angle = Math.PI, this._snowParticleSystem.speed = 4, this._particleSystem.addChildParticleSystem(this._snowParticleSystem)) : (this._confettiGenerator.gravity = 5, this._confettiGenerator.spawnInterval = 300, this._confettiGenerator.spawnRate = 5, this._confettiGenerator.loop = !0, this._particleSystem.addChildParticleSystem(this._confettiGenerator)), this._confettiCannon1.speed = 55, this._confettiCannon1.gravity = 5, this._confettiCannon1.spawnInterval = 5e3, this._confettiCannon1.spawnRate = 25, this._confettiCannon2.speed = 55, this._confettiCannon2.gravity = 5, this._confettiCannon2.spawnInterval = 5e3, this._confettiCannon2.spawnRate = 25, this._particleSystem.addChildParticleSystem(this._confettiCannon1), this._particleSystem.addChildParticleSystem(this._confettiCannon2)
},views.store.PackAnimation.prototype.dealloc = function dealloc() {
    window.removeEventListener(enums.Event.RESIZE, this._windowResizeCallback, !1), utils.JS.isValid(this._cardComponent) && (this._cardComponent.destroy(), this._cardComponent = null), this._particleSystem && (this._particleSystem.dealloc(), this._particleSystem = null), this._confettiGenerator && (this._confettiGenerator.dealloc(), this._confettiGenerator = null), this._confettiCannon1 && (this._confettiCannon1.dealloc(), this._confettiCannon1 = null), this._confettiCannon2 && (this._confettiCannon2.dealloc(), this._confettiCannon2 = null),
    this._fireworkGenerator && (this._fireworkGenerator.dealloc(), this._fireworkGenerator = null), this._snowParticleSystem && (this._snowParticleSystem.dealloc(), this._snowParticleSystem = null), this.superclass()
},views.store.PackAnimation.prototype.runAnimation = function runAnimation(item, t) {
    if (this._positionScene(), t) {
        var i = t.getExpColorMap(item.getTier()), s = new UTConfettiColourVO(i.background, i.dividers);
        this._confettiGenerator.setConfettiColor(s), this._confettiCannon1.setConfettiColor(s), this._confettiCannon2.setConfettiColor(s)
    }
    setTimeout(function () {
        this._fireworkGenerator.x += 300, this._fireworkGenerator.y += 100
    }.bind(this), 1100), setTimeout(function () {
        this._fireworkGenerator.x -= 400, this._fireworkGenerator.y += 300
    }.bind(this), 2100), window.addEventListener(enums.Event.RESIZE, this._windowResizeCallback, !1), this._particleSystem.run()
},views.store.PackAnimation.prototype.setPackTier = function setPackTier(t) {
    var className = "";
    switch (t) {
        case enums.Purchase.PackTier.BRONZE:
            className = "bronze";
            break;
        case enums.Purchase.PackTier.SILVER:
            className = "silver";
            break;
        case enums.Purchase.PackTier.GOLD:
            className = "gold";
            break;
        case enums.Purchase.PackTier.SPECIAL:
            className = "special";
            break;
        case enums.Purchase.PackTier.LOAN:
            className = "loan";
            break;
        case enums.Purchase.PackTier.STARTER:
            className = "starter";
            break;
        case enums.Purchase.PackTier.LEGENDS:
            className = "legend";
            break;
        case enums.Purchase.PackTier.STORY:
            className = "story";
            break;
        case enums.Purchase.PackTier.SBC:
            className = "sbc";
            break;
        case enums.Purchase.PackTier.CHAMPION:
            className = "champion";
            break;
        default:
            className = "gold"
    }
    this.addClass(className)
},views.store.PackAnimation.prototype.generateItem = function generateItem(item) {
    utils.JS.isValid(this._cardComponent) || (this._cardComponent = factories.ItemView.createLargeItem(item), this._cardComponent.init(), this._cardComponent.showSecondaryViews(!1), this._cardComponent.render(item), this.__itemShell.appendChild(this._cardComponent.getRootElement()))
},views.store.PackAnimation.prototype._positionScene = function _positionScene() {
    var root = this.getRootElement();
    this.__canvas.width = root.offsetWidth, this.__canvas.height = root.offsetHeight;
    var width = this.__canvas.width, height = this.__canvas.height;
    this._positionConfettiCannons(width, height), this._positionFireworks(width)
},views.store.PackAnimation.prototype._positionConfettiCannons = function _positionConfettiCannons(width, height) {
    var t = width / 2, i = height / 2;
    width < 600 ? (this._confettiCannon1.x = 0, this._confettiCannon2.x = width) : (this._confettiCannon1.x = t - 300, this._confettiCannon2.x = t + 300), this._confettiCannon1.y = height, this._confettiCannon2.y = height, this._confettiCannon1.angle = Math.atan2(i - this._confettiCannon1.y, t - this._confettiCannon1.x), this._confettiCannon2.angle = Math.atan2(i - this._confettiCannon2.y, t - this._confettiCannon2.x)
},views.store.PackAnimation.prototype._positionFireworks = function _positionFireworks(width) {
    this._fireworkGenerator.x = width / 2 - 100, this._fireworkGenerator.y = 200
},views.store.PackAnimation.prototype._eWindowResize = function _eWindowResize(e) {
    this._positionScene()
},utils.JS.inherits(UTPackAnimationViewController, FUIViewController),UTPackAnimationViewController.prototype.init = function init() {
    if (!this.initialized) {
        this.superclass();
        var t = getDefaultDispatcher();
        t.addObserver(enums.Notification.APP_PAUSE, this, this._nAppPaused), t.addObserver(enums.Notification.APP_RESUME, this, this._nAppResumed)
    }
},UTPackAnimationViewController.prototype.initWithPackData = function initWithPackData(item, t) {
    this.initialized || (this._presentedItem = item, this._packTier = t, this.init())
},UTPackAnimationViewController.prototype.dealloc = function dealloc() {
    clearTimeout(this._animationTimeout), this._callback = null;
    var t = getDefaultDispatcher();
    t.removeObserver(enums.Notification.APP_PAUSE, this), t.removeObserver(enums.Notification.APP_RESUME, this), this.superclass()
},UTPackAnimationViewController.prototype._getViewInstanceFromData = function _getViewInstanceFromData() {
    return new views.store.PackAnimation
},
UTPackAnimationViewController.prototype.viewDidAppear = function viewDidAppear() {
    this.superclass(), this._runAnimation()
},UTPackAnimationViewController.prototype.setAnimationCallback = function setAnimationCallback(t) {
    utils.JS.isFunction(t) && (this._callback = t)
},UTPackAnimationViewController.prototype._runAnimation = function _runAnimation() {
    if (!this._running) {
        this._running = !0;
        var view = this.getView(), t = services.Configuration.getItemRarity(this._presentedItem);
        view.setPackTier(this._packTier), view.generateItem(this._presentedItem), view.runAnimation(this._presentedItem, t), this._animationTimeout = setTimeout(this._runCallback.bind(this), 4500)
    }
},UTPackAnimationViewController.prototype._runCallback = function _runCallback() {
    var t = this.getNavigationController();
    utils.JS.isFunction(this._callback) ? this._callback() : t && t.popViewController()
},UTPackAnimationViewController.prototype._nAppPaused = function _nAppPaused(t, sender, data) {
    clearTimeout(this._animationTimeout)
},UTPackAnimationViewController.prototype._nAppResumed = function _nAppResumed(t, sender, data) {
    this._runCallback()
},utils.JS.inherits(UTPackOddsView, FUIView),UTPackOddsView.prototype._generate = function _generate() {
    if (!this._generated) {
        var t = document.createElement("div");
        t.classList.add("ut-pack-odds-modal");
        var i = document.createElement("header");
        this.__title = document.createElement("h1"), i.appendChild(this.__title), this._exitBtn = new components.ImageButton, this._exitBtn.getRootElement().classList.add("exit-btn"), i.appendChild(this._exitBtn.getRootElement()), t.appendChild(i), this.__description = document.createElement("div"), this.__description.classList.add("description"), t.appendChild(this.__description), this.__dataDisplay = document.createElement("section"), this.__dataDisplay.classList.add("layout-article"), this.__dataDisplay.classList.add("panel-list"), t.appendChild(this.__dataDisplay);
        var s = document.createElement("footer");
        this.__timestamp = document.createElement("div"), this.__timestamp.classList.add("footer-info"), s.appendChild(this.__timestamp), t.appendChild(s), this.__root = t, this._generated = !0
    }
},UTPackOddsView.prototype.destroyGeneratedElements = function destroyGeneratedElements() {
    $(this.__root).off().remove(), this.__root = null, this.__title = null, this._exitBtn.destroy(), this.__description = null, this.__dataDisplay = null, this.__timestamp = null
},UTPackOddsView.prototype.getRoot = function getRoot() {
    return $(this.__root)
},UTPackOddsView.prototype.getRootElement = function getRootElement() {
    return this.__root
},UTPackOddsView.prototype.init = function init() {
    this.superclass(), this.__description.textContent = services.Localization.localize("packodds.modal.description"), this._exitBtn.init()
},UTPackOddsView.prototype.dealloc = function dealloc() {
    this._table.dealloc(), this.superclass()
},UTPackOddsView.prototype.getExitBtn = function getExitBtn() {
    return this._exitBtn
},UTPackOddsView.prototype.setTitle = function setTitle(text) {
    this.__title.textContent = text
},UTPackOddsView.prototype.setOdds = function setOdds(t) {
    var i = this._table.getRootElement();
    i.classList.add(enums.UIPanels.TABLE_ALTERNATING), this.__dataDisplay.appendChild(i), t.forEach(function (t) {
        var i = document.createElement("div");
        switch (DOMKit.addClass(i, "pack-odds-icon"), t.qualityId) {
            case enums.Purchase.PackTier.BRONZE:
                DOMKit.addClass(i, "bronze");
                break;
            case enums.Purchase.PackTier.SILVER:
                DOMKit.addClass(i, "silver");
                break;
            case enums.Purchase.PackTier.GOLD:
                DOMKit.addClass(i, "gold");
                break;
            case enums.Purchase.PackTier.SPECIAL:
                DOMKit.addClass(i, "special");
                break;
            default:
                utils.Debug.Assert(!1, "UTPackOddsView :: Passed an unsupported PackTier.")
        }
        this._table.addRowData([i, t.description, t.odds])
    }, this);
    var s = services.Localization.localizeDateTimeGMT(new Date(t[0].startTime));
    this.__timestamp.textContent = services.Localization.localize("packodds.modal.timestamp", [s])
},utils.JS.inherits(UTPackOddsViewController, FUIViewController),UTPackOddsViewController.prototype.init = function init() {
    this.initialized || (this.superclass(),
        utils.Debug.Assert(this._odds.length > 0, "UTPackOddsViewController expects at least one UTPackOddsDTO."), this.getView().getExitBtn().addTarget(this, this._eOnExitBtn, enums.Event.TAP))
},UTPackOddsViewController.prototype.initWithPack = function initWithPack(t) {
    this.initialized || (this._odds = t.odds, this.getView().setTitle(t.packName), this.init())
},UTPackOddsViewController.prototype.dealloc = function dealloc() {
    this._odds = [], this.superclass()
},UTPackOddsViewController.prototype._getViewInstanceFromData = function _getViewInstanceFromData() {
    return new UTPackOddsView
},UTPackOddsViewController.prototype.viewDidAppear = function viewDidAppear() {
    this.getView().setOdds(this._odds), this.superclass()
},UTPackOddsViewController.prototype._eOnExitBtn = function _eOnExitBtn(sender, event, data) {
    this.getParentViewController().dismissViewController()
},NamespaceManager.Register("utils"),utils.NumberDrawBox = function (t) {
    this._originalNumberList = [], this._currentNumberList = [], this._lastDrawnIndex = -1, utils.JS.isValid(t) && (t = "number" == typeof t ? this.createSequentialArrayFromNumber(t) : t, this.setNumberList(t))
},utils.NumberDrawBox.prototype.setNumberList = function (t) {
    Array.isArray(t) && (utils.Debug.Assert(t.length > 0, "utils.NumberDrawBox expecting at least one number to draw."), this._originalNumberList = t, this.reset())
},utils.NumberDrawBox.prototype.draw = function () {
    var t = 0;
    return this._originalNumberList.length > 0 ? (0 === this._currentNumberList.length && this.reset(), t = this._currentNumberList.splice(Math.floor(Math.random() * this._currentNumberList.length), 1)[0], -1 !== this._lastDrawnIndex && (this._currentNumberList.push(this._originalNumberList[this._lastDrawnIndex]), this._lastDrawnIndex = -1), 0 === this._currentNumberList.length && (this._lastDrawnIndex = this._originalNumberList.indexOf(t)), t) : t
},utils.NumberDrawBox.prototype.reset = function () {
    this._currentNumberList = [];
    var t = this._originalNumberList.length;
    t > 1 ? this._currentNumberList = this._originalNumberList.reduce(function (t, i, s) {
        return this._lastDrawnIndex !== s && t.push(i), t
    }.bind(this), []) : 1 === t && (this._currentNumberList = this._originalNumberList.slice())
},utils.NumberDrawBox.prototype.createSequentialArrayFromNumber = function (t) {
    var i, s = [];
    for (i = 0; i < t; ++i) s.push(i);
    return s
},NamespaceManager.Register("utils"),utils.PackUtils = {},utils.PackUtils._fgAssetRandomizers = {},utils.PackUtils._fgAssetRandomizers[enums.Purchase.PackTier.BRONZE] = new utils.NumberDrawBox(4),utils.PackUtils._fgAssetRandomizers[enums.Purchase.PackTier.SILVER] = new utils.NumberDrawBox(4),utils.PackUtils._fgAssetRandomizers[enums.Purchase.PackTier.GOLD] = new utils.NumberDrawBox(4),utils.PackUtils._fgAssetRandomizers[enums.Purchase.PackTier.SPECIAL] = new utils.NumberDrawBox(1),utils.PackUtils._fgAssetRandomizers[enums.Purchase.PackTier.STORY] = new utils.NumberDrawBox(1),utils.PackUtils._fgAssetRandomizers[enums.Purchase.PackTier.LOAN] = new utils.NumberDrawBox(1),Object.freeze(utils.PackUtils._fgAssetRandomizers),utils.PackUtils.getForegroundId = function (t) {
    return t === enums.Purchase.PackTier.LOAN ? 0 : utils.PackUtils.hasForeground(t) ? utils.PackUtils._fgAssetRandomizers[t].draw() : -1
},utils.PackUtils.hasForeground = function (t) {
    return !!utils.JS.isValid(utils.PackUtils._fgAssetRandomizers[t])
},utils.PackUtils.hasLogo = function (t) {
    switch (t) {
        case enums.Purchase.PackTier.LEGENDS:
        case enums.Purchase.PackTier.SBC:
        case enums.Purchase.PackTier.CHAMPION:
            return !1;
        default:
            return !0
    }
},utils.PackUtils.onLogoLoad = function onLogoLoad(t, i, s) {
    t.unobserve(this), i || s.replaceAndShowResource("images/transparent.png")
},NamespaceManager.Register("views.buttons"),views.buttons.CurrencyButton = function FUICurrencyButton() {
    FUIButton.call(this), this._currencyType = null, this._generate()
},utils.JS.inherits(views.buttons.CurrencyButton, FUIButton),views.buttons.CurrencyButton.prototype._generate = function _generate() {
    if (!this._generated) {
        var t = document.createElement("button");
        t.classList.add("currency"), this.__currencyAmount = document.createElement("span"), this.__currencyAmount.classList.add("text"),
            t.appendChild(this.__currencyAmount), this.__currencyLabel = document.createElement("span"), this.__currencyLabel.classList.add("subtext"), t.appendChild(this.__currencyLabel), this.__root = t, this._generated = !0
    }
},views.buttons.CurrencyButton.prototype.destroyGeneratedElements = function destroyGeneratedElements() {
    $(this.__root).off().remove(), this.__root = null, this.__currencyAmount = null, this.__currencyLabel = null
},views.buttons.CurrencyButton.prototype.getRoot = function getRoot() {
    return $(this.__root)
},views.buttons.CurrencyButton.prototype.getRootElement = function getRootElement() {
    return this.__root
},views.buttons.CurrencyButton.prototype.setText = function setText(text) {
    this.__currencyAmount.textContent = text
},views.buttons.CurrencyButton.prototype.setAmount = function setAmount(text) {
    this.setText(text)
},views.buttons.CurrencyButton.prototype.setCurrencyLabel = function setCurrencyLabel(text) {
    this.__currencyLabel.textContent = text
},views.buttons.CurrencyButton.prototype.setCurrencyType = function setCurrencyType(type) {
    if (type !== this._currencyType) {
        this._currencyType = type;
        var t = "";
        type && (t = type === enums.Currency.POINTS ? services.Localization.localize("currency.points") : services.Localization.localize("currency.coins")), this.setCurrencyLabel(t), this.toggleClass("coins", type === enums.Currency.COINS), this.toggleClass("points", type === enums.Currency.POINTS)
    }
},NamespaceManager.Register("views.packs"),views.packs.PackGraphic = function PackGraphicView() {
    FUIView.call(this), this._generate()
},utils.JS.inherits(views.packs.PackGraphic, FUIView),views.packs.PackGraphic.prototype._generate = function _generate() {
    if (!this._generated) {
        var t = document.createElement("div");
        t.classList.add("basePack"), this._packBackgroundImage = new components.ImageLoader, this._packBackgroundImage.getRootElement().classList.add("packBackgroundImage"), t.appendChild(this._packBackgroundImage.getRootElement()), this._packForegroundImage = new components.ImageLoader, this._packForegroundImage.getRootElement().classList.add("packForegroundImage"), t.appendChild(this._packForegroundImage.getRootElement()), this.__promoText = document.createElement("div"), this.__promoText.classList.add("promo"), t.appendChild(this.__promoText), this.__root = t, this._generated = !0
    }
},views.packs.PackGraphic.prototype.destroyGeneratedElements = function destroyGeneratedElements() {
    $(this.__root).off().remove(), this.__root = null, this._packBackgroundImage.destroy(), this._packForegroundImage.destroy(), this.__promoText = null
},views.packs.PackGraphic.prototype.getRoot = function getRoot() {
    return $(this.__root)
},views.packs.PackGraphic.prototype.getRootElement = function getRootElement() {
    return this.__root
},views.packs.PackGraphic.prototype.setPackAssets = function setPackAssets(t, i, s) {
    if (utils.JS.isEmpty(s) ? this._packBackgroundImage.setResource(utils.AssetLocator.getImage(utils.AssetLocator.IMAGE_TYPE_PACKS_BACKGROUND, enums.Year.ASSET, t, t)) : this._packBackgroundImage.setResource(utils.AssetLocator.getPackBackgroundImageURI(utils.AssetLocator.IMAGE_TYPE_PACKS_BACKGROUND, enums.Year.ASSET, s)), utils.PackUtils.hasForeground(t)) {
        var o = utils.AssetLocator.getImage(utils.AssetLocator.IMAGE_TYPE_PACKS_FOREGROUND, enums.Year.ASSET, t, i);
        this._packForegroundImage.setResource(o)
    }
},views.packs.PackGraphic.prototype.setPromo = function setPromo(t, i) {
    if (i) this.__promoText.classList.add("limited"), this.__promoText.textContent = services.Localization.localize("store.sale.limited"), this.__promoText.style.display = ""; else switch (this.__promoText.classList.remove("limited"), t) {
        case enums.Purchase.DealType.DEAL:
            this.__promoText.textContent = services.Localization.localize("store.sale.deal"), this.__promoText.style.display = "";
            break;
        case enums.Purchase.DealType.PROMO:
            this.__promoText.textContent = services.Localization.localize("store.sale.promo"), this.__promoText.style.display = "";
            break;
        case enums.Purchase.DealType.BESTDEAL:
            this.__promoText.textContent = services.Localization.localize("store.sale.bestdeal"), this.__promoText.style.display = "";
            break;
        default:
            this.__promoText.textContent = "",
                this.__promoText.style.display = "none"
    }
},NamespaceManager.Register("views.packs"),views.packs.StorePackDetails = function StorePackDetailsView() {
    FUITargetActionView.call(this), this._timeInterval = 0, this._packId = 0, this._generate()
},utils.JS.inherits(views.packs.StorePackDetails, FUITargetActionView),views.packs.StorePackDetails.prototype._generate = function _generate() {
    if (!this._generated) {
        var t = document.createElement("div");
        t.classList.add("col-1-1"), t.classList.add("StorePack");
        var i = document.createElement("div");
        i.classList.add("details"), this._pack = new views.packs.PackGraphic, i.appendChild(this._pack.getRootElement());
        var s = document.createElement("div");
        s.classList.add("packContent");
        var o = document.createElement("div");
        o.classList.add("packHeader");
        var l = document.createElement("h1");
        l.classList.add("title"), this.__packTitle = document.createElement("span"), l.appendChild(this.__packTitle), this._btnOdds = new components.ImageButton, this._btnOdds.getRootElement().classList.add("info-btn"), l.appendChild(this._btnOdds.getRootElement()), o.appendChild(l), s.appendChild(o);
        var u = document.createElement("div");
        u.classList.add("packCounts"), this.__itemQuantity = document.createElement("div"), this.__itemQuantity.classList.add("itemQuantity"), this.__itemQuantity.classList.add("packCount"), this.__itemQuantityValue = document.createElement("span"), this.__itemQuantityValue.classList.add("value"), this.__itemQuantity.appendChild(this.__itemQuantityValue), this.__itemQuantityLabel = document.createElement("span"), this.__itemQuantityLabel.classList.add("label"), this.__itemQuantity.appendChild(this.__itemQuantityLabel), u.appendChild(this.__itemQuantity), this.__tierQuantity = document.createElement("div"), this.__tierQuantity.classList.add("packCount"), this.__tierQuantityValue = document.createElement("span"), this.__tierQuantityValue.classList.add("value"), this.__tierQuantity.appendChild(this.__tierQuantityValue), this.__tierQuantityLabel = document.createElement("span"), this.__tierQuantityLabel.classList.add("label"), this.__tierQuantity.appendChild(this.__tierQuantityLabel), u.appendChild(this.__tierQuantity), this.__rareQuantity = document.createElement("div"), this.__rareQuantity.classList.add("rare"), this.__rareQuantity.classList.add("packCount"), this.__rareQuantityValue = document.createElement("span"), this.__rareQuantityValue.classList.add("value"), this.__rareQuantity.appendChild(this.__rareQuantityValue), this.__rareQuantityLabel = document.createElement("span"), this.__rareQuantityLabel.classList.add("label"), this.__rareQuantity.appendChild(this.__rareQuantityLabel), u.appendChild(this.__rareQuantity), s.appendChild(u), this.__packDesc = document.createElement("p"), this.__packDesc.classList.add("description"), s.appendChild(this.__packDesc), this.__quantity = document.createElement("p"), this.__quantity.classList.add("quantity"), this.__quantityLabel = document.createElement("span"), this.__quantityLabel.classList.add("label"), this.__quantity.appendChild(this.__quantityLabel), this.__quantityValue = document.createElement("span"), this.__quantityValue.classList.add("value"), this.__quantity.appendChild(this.__quantityValue), s.appendChild(this.__quantity), this.__time = document.createElement("p"), this.__time.classList.add("expiry"), this.__timeLabel = document.createElement("span"), this.__timeLabel.classList.add("label"), this.__time.appendChild(this.__timeLabel), this.__timeValue = document.createElement("span"), this.__timeValue.classList.add("value"), this.__time.appendChild(this.__timeValue), s.appendChild(this.__time), i.appendChild(s);
        var h = document.createElement("div");
        h.classList.add("purchasing"), this._btnOpen = new views.buttons.CurrencyButton, this._btnOpen.getRootElement().classList.add("call-to-action"), h.appendChild(this._btnOpen.getRootElement()), this._btnBuyCoins = new views.buttons.CurrencyButton, this._btnBuyCoins.getRootElement().classList.add("call-to-action"), h.appendChild(this._btnBuyCoins.getRootElement()), this._btnBuyPoints = new views.buttons.CurrencyButton,
            this._btnBuyPoints.getRootElement().classList.add("call-to-action"), h.appendChild(this._btnBuyPoints.getRootElement()), i.appendChild(h), t.appendChild(i), this.__root = t, this._generated = !0
    }
},views.packs.StorePackDetails.prototype.destroyGeneratedElements = function destroyGeneratedElements() {
    $(this.__root).off().remove(), this.__root = null, this._pack.destroy(), this.__packTitle = null, this._btnOdds.destroy(), this.__itemQuantity = null, this.__itemQuantityValue = null, this.__itemQuantityLabel = null, this.__tierQuantity = null, this.__tierQuantityValue = null, this.__tierQuantityLabel = null, this.__rareQuantity = null, this.__rareQuantityValue = null, this.__rareQuantityLabel = null, this.__packDesc = null, this.__quantity = null, this.__quantityLabel = null, this.__quantityValue = null, this.__time = null, this.__timeLabel = null, this.__timeValue = null, this._btnOpen.destroy(), this._btnBuyCoins.destroy(), this._btnBuyPoints.destroy()
},views.packs.StorePackDetails.prototype.getRoot = function getRoot() {
    return $(this.__root)
},views.packs.StorePackDetails.prototype.getRootElement = function getRootElement() {
    return this.__root
},views.packs.StorePackDetails.prototype.init = function init() {
    this.superclass(), this.__rareQuantityLabel.textContent = services.Localization.localize("store.group.rarelabel"), this.__timeLabel.textContent = services.Localization.localize("store.sale.endingTime"), this.__quantityLabel.textContent = services.Localization.localize("store.saletype.quantity"), this._btnOdds.init(), this._btnOpen.init(), this._btnBuyCoins.init(), this._btnBuyPoints.init(), this._btnBuyCoins.setCurrencyType(enums.Currency.COINS), this._btnBuyPoints.setCurrencyType(enums.Currency.POINTS), this._btnOpen.setText(services.Localization.localize("store.mypack.open")), this._btnOpen.setCurrencyLabel(services.Localization.localize("store.mypack.claimPack")), this._btnOdds.addTarget(this, this._eCheckPackOdds, enums.Event.TAP), this._btnOpen.addTarget(this, this._eOpenPack, enums.Event.TAP), this._btnBuyCoins.addTarget(this, this._eBuyWithCoins, enums.Event.TAP), this._btnBuyPoints.addTarget(this, this._eBuyWithPoints, enums.Event.TAP)
},views.packs.StorePackDetails.prototype.dealloc = function dealloc() {
    clearTimeout(this._timeInterval), this.superclass()
},views.packs.StorePackDetails.prototype.setPackId = function setPackId(id) {
    this._packId = id
},views.packs.StorePackDetails.prototype.setPackAssets = function setPackAssets(t, i, s) {
    this._pack.setPackAssets(t, i, s)
},views.packs.StorePackDetails.prototype.setPromo = function setPromo(t, i) {
    this._pack.setPromo(t, i)
},views.packs.StorePackDetails.prototype.setName = function setName(name) {
    this.__packTitle.textContent = name
},views.packs.StorePackDetails.prototype.setDescription = function setDescription(t) {
    this.__packDesc.textContent = t
},views.packs.StorePackDetails.prototype.setItemCounts = function setItemCounts(total, t, i, s, o) {
    function _toggleCountDisplay(t, i) {
        t.style.display = i ? "" : "none"
    }

    _toggleCountDisplay(this.__itemQuantity, total > 0), _toggleCountDisplay(this.__rareQuantity, o > 0), _toggleCountDisplay(this.__tierQuantity, t > 0 || i > 0 || s > 0);
    var l = "", u = "", h = "";
    s > 0 ? (l = "store.group.goldlabel", u = s.toString(), h = "gold") : i > 0 ? (l = "store.group.silverlabel", u = i.toString(), h = "silver") : (l = "store.group.bronzelabel", u = t.toString(), h = "bronze"), this.__itemQuantityLabel.textContent = services.Localization.localize(total > 1 ? "dock.label.items" : "dock.label.item"), this.__tierQuantityLabel.textContent = services.Localization.localize(l), this.__itemQuantityValue.textContent = total.toString(), this.__tierQuantityValue.textContent = u, this.__rareQuantityValue.textContent = o.toString(), this.__tierQuantity.classList.remove("gold"), this.__tierQuantity.classList.remove("silver"), this.__tierQuantity.classList.remove("bronze"), this.__tierQuantity.classList.add(h)
},views.packs.StorePackDetails.prototype.setTimeRemaining = function setTimeRemaining(time) {
    clearTimeout(this._timeInterval);
    var t = Math.round(time - Date.now() / 1e3);
    this.__timeValue.textContent = t > 0 ? services.Localization.localizePromoTimeRemaining(t) : "", this.__time.style.display = t > 0 ? "" : "none",
        t > 0 ? this._timeInterval = setTimeout(this.setTimeRemaining.bind(this, time), 1e3) : (this.enableCoinPurchase(!1), this.enablePointsPurchase(!1))
},views.packs.StorePackDetails.prototype.setPackQuantity = function setPackQuantity(count) {
    this.__quantity.style.display = count > 0 ? "" : "none", this.__quantityValue.textContent = count > 0 ? count.toString() : "0"
},views.packs.StorePackDetails.prototype.setCoinsAmount = function setCoinsAmount(t) {
    this._btnBuyCoins.setText(services.Localization.localizeNumber(t))
},views.packs.StorePackDetails.prototype.setPointsAmount = function setPointsAmount(points) {
    this._btnBuyPoints.setText(services.Localization.localizeNumber(points))
},views.packs.StorePackDetails.prototype.toggleCoins = function toggleCoins(t) {
    this._btnBuyCoins.setDisplay(t)
},views.packs.StorePackDetails.prototype.togglePoints = function togglePoints(t) {
    this._btnBuyPoints.setDisplay(t)
},views.packs.StorePackDetails.prototype.toggleOdds = function toggleOdds(t) {
    this._btnOdds.setDisplay(t)
},views.packs.StorePackDetails.prototype.enableCoinPurchase = function enableCoinPurchase(t) {
    this._btnBuyCoins.setInteractionState(t)
},views.packs.StorePackDetails.prototype.enablePointsPurchase = function enablePointsPurchase(t) {
    this._btnBuyPoints.setInteractionState(t)
},views.packs.StorePackDetails.prototype.setMyPack = function setMyPack(t) {
    this._btnOpen.setDisplay(t), this.toggleCoins(!t), this.togglePoints(!t)
},views.packs.StorePackDetails.prototype._eOpenPack = function _eOpenPack(sender, event, data) {
    this._triggerActions(enums.UIPackEvent.OPEN, {packId: this._packId})
},views.packs.StorePackDetails.prototype._eBuyWithCoins = function _eBuyWithCoins(sender, event, data) {
    this._triggerActions(enums.UIPackEvent.BUY_COINS, {packId: this._packId})
},views.packs.StorePackDetails.prototype._eBuyWithPoints = function _eBuyWithPoints(sender, event, data) {
    this._triggerActions(enums.UIPackEvent.BUY_POINTS, {packId: this._packId})
},views.packs.StorePackDetails.prototype._eCheckPackOdds = function _eCheckPackOdds(sender, event, data) {
    this._triggerActions(enums.UIPackEvent.CHECK_ODDS, {packId: this._packId})
},utils.JS.inherits(UTStoreView, FUITargetActionView),UTStoreView.prototype._generate = function _generate() {
    if (!this._generated) {
        var t = document.createElement("div");
        t.setAttribute("id", "StoreHub"), this._navigation = new components.TabMenu, t.appendChild(this._navigation.getRootElement()), this.__packList = document.createElement("div"), this.__packList.classList.add("grid"), this.__packList.classList.add("storeContent"), this._unassignedTile = new components.UnassignedTile, this._unassignedTile.getRootElement().classList.add("col-1-1"), this.__packList.appendChild(this._unassignedTile.getRootElement()), t.appendChild(this.__packList), this.__disabledTile = document.createElement("div"), this.__disabledTile.classList.add("StoreDisabledTile");
        var i = document.createElement("div");
        i.classList.add("Aligner-item"), this.__disabledText = document.createElement("span"), i.appendChild(this.__disabledText), this.__disabledTile.appendChild(i), t.appendChild(this.__disabledTile), this.__root = t, this._generated = !0
    }
},UTStoreView.prototype.destroyGeneratedElements = function destroyGeneratedElements() {
    $(this.__root).off().remove(), this.__root = null, this._navigation.destroy(), this.__packList = null, this._unassignedTile.destroy(), this.__disabledTile = null, this.__disabledText = null
},UTStoreView.prototype.getRoot = function getRoot() {
    return $(this.__root)
},UTStoreView.prototype.getRootElement = function getRootElement() {
    return this.__root
},UTStoreView.Event = {UNASSIGNED_SELECTED: "UTStoreView.Event.UNASSIGNED_SELECTED"},UTStoreView.prototype.init = function init() {
    this.superclass(), this._unassignedTile.init(), this._unassignedTile.addTarget(this, this._eUnassignedTileSelected, enums.Event.TAP), this._unassignedTile.setDisplay(!1), DOMKit.toggleDisplayStyle(this.__disabledTile, !1), this.__disabledText.textContent = services.Localization.localize("store.disabled"), this.setInteractionState(!0)
},UTStoreView.prototype.dealloc = function dealloc() {
    this.clearPacks(), this.superclass()
},
UTStoreView.prototype.setInteractionState = function setInteractionState(t) {
    this._setInteractionStateFlag(t), this._navigation.setInteractionState(t), this._storePacks.forEach(function (i) {
        i.setInteractionState(t)
    })
},UTStoreView.prototype.clearPacks = function clearPacks() {
    this._storePacks.forEach(function (t) {
        t.dealloc()
    }), this._storePacks = []
},UTStoreView.prototype.setCategoryTabs = function setCategoryTabs(t, i) {
    this._navigation.clearTabs(), i && this._navigation.addTab(enums.Purchase.DisplayGroup.MYPACKS, services.Localization.localize("store.group.mypacks")), t && this._navigation.addTab(enums.Purchase.DisplayGroup.SPECIAL, services.Localization.localize("store.sale.promo")), this._navigation.addTab(enums.Purchase.DisplayGroup.GOLD, services.Localization.localize("store.group.goldlabel")), this._navigation.addTab(enums.Purchase.DisplayGroup.SILVER, services.Localization.localize("store.group.silverlabel")), this._navigation.addTab(enums.Purchase.DisplayGroup.BRONZE, services.Localization.localize("store.group.bronzelabel")), this._navigation.layoutSubviews()
},UTStoreView.prototype.setStoreCategory = function setStoreCategory(category) {
    this._navigation.setActiveTab(category)
},UTStoreView.prototype.addNavigationTarget = function addNavigationTarget(target, t) {
    this._navigation.addTarget(target, t, enums.Event.TAP)
},UTStoreView.prototype.setNumUnassignedItems = function setNumUnassignedItems(count) {
    this._unassignedTile.setNumberOfItems(count), this._unassignedTile.setDisplay(count > 0)
},UTStoreView.prototype.setPacks = function setPacks(t, i, s, o) {
    this.removeClass("StoreDisable"), DOMKit.toggleDisplayStyle(this.__packList, !0), this.clearPacks(), t.forEach(function (t) {
        this._generatePack(t, i, s, !t.isMyPack && o)
    }, this), this.layoutSubviews()
},UTStoreView.prototype._generatePack = function _generatePack(t, i, s, o) {
    var l = new views.packs.StorePackDetails, u = utils.PackUtils.getForegroundId(t.assetId),
        h = t.prices.has(enums.Currency.COINS) ? t.prices.get(enums.Currency.COINS).amount : 0,
        p = t.prices.has(enums.Currency.POINTS) ? t.prices.get(enums.Currency.POINTS).amount : 0;
    l.init(), l.setPackId(t.id), l.setPackAssets(t.assetId, u, t.guidAssetId), l.setPromo(t.dealType, t.isLimited), l.setName(t.packName), l.setDescription(t.packDesc), l.setPackQuantity(t.quantity), l.setItemCounts(t.itemQuantity, t.bronzeQuantity, t.silverQuantity, t.goldQuantity, t.rareQuantity), l.setTimeRemaining(t.end), l.setCoinsAmount(h), l.setPointsAmount(p), l.toggleOdds(o), l.setMyPack(t.isMyPack), t.isMyPack || (l.toggleCoins(s.coins && h > 0), l.togglePoints(s.points && p > 0), i.forEach(function (t) {
        t.type === enums.Currency.COINS ? l.enableCoinPurchase(h > 0 && t.amount >= h) : t.type === enums.Currency.POINTS && l.enablePointsPurchase(p > 0 && t.amount >= p)
    })), l.addTarget(this, this._ePackEventHandler, enums.UIPackEvent.OPEN), l.addTarget(this, this._ePackEventHandler, enums.UIPackEvent.BUY_COINS), l.addTarget(this, this._ePackEventHandler, enums.UIPackEvent.BUY_POINTS), l.addTarget(this, this._ePackEventHandler, enums.UIPackEvent.CHECK_ODDS), this.addSubview(l, this.__packList), this._storePacks.push(l)
},UTStoreView.prototype.disableStore = function disableStore() {
    this.clearPacks(), DOMKit.toggleDisplayStyle(this.__packList, !1), this._navigation.clearTabs(), DOMKit.toggleDisplayStyle(this.__disabledTile, !0), DOMKit.toggleDisplayStyle(this.__disabledText, !0), this.addClass("StoreDisable")
},UTStoreView.prototype._ePackEventHandler = function _ePackEventHandler(sender, event, data) {
    this.isInteractionEnabled() && this._triggerActions(event, data)
},UTStoreView.prototype._eUnassignedTileSelected = function _eUnassignedTileSelected(sender, event, data) {
    this.isInteractionEnabled() && this._triggerActions(UTStoreView.Event.UNASSIGNED_SELECTED)
},NamespaceManager.Register("viewmodels"),viewmodels.Store = function (t) {
    var i = [], s = {}, o = !1, l = !1;
    t.forEach(function (t) {
        t.isMyPack ? (o = !0, i.push(t)) : (t.isSpecialPack && (l = !0), s[t.id] = t)
    });
    var u = !1;
    Object.defineProperty(this, "isLoadingPacks", {
        get: function () {
            return u
        }, set: function (t) {
            utils.JS.isBoolean(t) && (u = t)
        }
    }), this._myPacks = new UTIterator(i),
        Object.defineProperty(this, "_myPacks", {writable: !1}), this._packs = new UTHashTable(s), Object.defineProperty(this, "_packs", {writable: !1}), this.hasMyPacks = o, Object.defineProperty(this, "hasMyPacks", {writable: !1}), this.hasSpecialPacks = l, Object.defineProperty(this, "hasSpecialPacks", {writable: !1}), this.isLoadingPacks = !1, this.isOpeningPack = !1
},viewmodels.Store.prototype.getPackById = function (id, t) {
    if (t || !utils.JS.isBoolean(t)) {
        var i = this._myPacks.get(this._myPacks.indexOf(function comparePackId(t) {
            return id === t.id
        }));
        if (t || utils.JS.isValid(i)) return i
    }
    return this._packs.get(id)
},viewmodels.Store.prototype.getPacks = function (t) {
    return t === enums.Purchase.DisplayGroup.MYPACKS ? this._myPacks.values() : this._packs.filter(function (i) {
        return i.displayGroup === t
    }).sort(function sortByPrice(a, b) {
        var t = a.prices.get(enums.Currency.COINS), i = b.prices.get(enums.Currency.COINS);
        if (t && i) {
            if (t.amount > i.amount) return 1;
            if (t.amount < i.amount) return -1
        }
        return 0
    })
},utils.JS.inherits(UTStoreViewController, FUIViewController),UTStoreViewController.prototype.init = function init() {
    if (!this.initialized) {
        this.superclass();
        var view = this.getView();
        view.addNavigationTarget(this, this._eTabSelected), view.addTarget(this, this._eOpenPack, enums.UIPackEvent.OPEN), view.addTarget(this, this._eOpenPack, enums.UIPackEvent.BUY_COINS), view.addTarget(this, this._eOpenPack, enums.UIPackEvent.BUY_POINTS), view.addTarget(this, this._eCheckPackOdds, enums.UIPackEvent.CHECK_ODDS), view.addTarget(this, this._eUnassignedSelected, UTStoreView.Event.UNASSIGNED_SELECTED)
    }
},UTStoreViewController.prototype.initWithStartingCategory = function initWithStartingCategory(category) {
    this.initialized || (this._startingCategory = category, this.init())
},UTStoreViewController.prototype.dealloc = function dealloc() {
    this.superclass(), this._viewmodel = null, this._packLoadObservable && (this._packLoadObservable.unobserve(this), this._packLoadObservable = null)
},UTStoreViewController.prototype._getViewInstanceFromData = function _getViewInstanceFromData() {
    return new UTStoreView
},UTStoreViewController.prototype._getTelemetryId = function _getTelemetryId() {
    return "Hub - Store"
},UTStoreViewController.prototype.getNavigationTitle = function getNavigationTitle() {
    return services.Localization.localize("navbar.label.store")
},UTStoreViewController.prototype.viewDidAppear = function viewDidAppear() {
    this.superclass(), this.getNavigationController().setNavigationVisibility(!0, !0), gSettingsModel.isServiceAvailable(models.SettingsModel.STORE_ENABLED) && services.Localization.storeLocLoaded ? this._getStorePacks() : this.getView().disableStore(), TelemetryManager.trackPage(TelemetryManager.Sections.STORE, "Store Hub")
},UTStoreViewController.prototype.setCategory = function setCategory(category) {
    if (this._packLoadObservable) this._startingCategory = category; else {
        var view = this.getView();
        view.setStoreCategory(category), view.setPacks(this._viewmodel.getPacks(category), services.User.getUser().getCurrencies(), {
            coins: gSettingsModel.isCoinsEnabled(),
            points: gSettingsModel.isFIFAPointsEnabled()
        }, gSettingsModel.isPackOddsEnabled())
    }
},UTStoreViewController.prototype._getStorePacks = function _getStorePacks() {
    var view = this.getView();
    this._packLoadObservable = repositories.Store.getPacks(enums.Purchase.PackType.CARDPACK, !0), this._packLoadObservable.observe(this, function _onPackLoadComplete(t, i) {
        if (t.unobserve(this), this._packLoadObservable = null, 0 !== i.length) {
            this._viewmodel = new viewmodels.Store(i);
            var s = services.User.getUser(), o = gSettingsModel.isCoinsEnabled(),
                l = gSettingsModel.isFIFAPointsEnabled(), u = gSettingsModel.isPackOddsEnabled();
            o || l ? o ? l || services.Notification.queue([services.Localization.localize("notification.store.fifapointsDisabled"), enums.UINotificationType.NEGATIVE]) : services.Notification.queue([services.Localization.localize("notification.store.coinsDisabled"), enums.UINotificationType.NEGATIVE]) : services.Notification.queue([services.Localization.localize("notification.store.allCurrenciesDisabled"), enums.UINotificationType.NEGATIVE]),
            this._startingCategory !== enums.Purchase.DisplayGroup.MYPACKS || this._viewmodel.hasMyPacks || (this._startingCategory = enums.Purchase.DisplayGroup.SPECIAL), this._startingCategory !== enums.Purchase.DisplayGroup.SPECIAL || this._viewmodel.hasSpecialPacks || (this._startingCategory = enums.Purchase.DisplayGroup.GOLD), this._getUnassignedItems(), view.setPacks(this._viewmodel.getPacks(this._startingCategory), s.getCurrencies(), {
                coins: o,
                points: l
            }, u), view.setCategoryTabs(this._viewmodel.hasSpecialPacks, this._viewmodel.hasMyPacks), view.setStoreCategory(this._startingCategory)
        } else view.disableStore()
    })
},UTStoreViewController.prototype._getUnassignedItems = function _getUnassignedItems() {
    services.Item.requestUnassignedItems().observe(this, function _onRequestUnassignedComplete(t, response) {
        t.unobserve(this), this.getView().setNumUnassignedItems(response.data.items.length)
    })
},UTStoreViewController.prototype._gotoUnassigned = function _gotoUnassigned() {
    var view = this.getView();
    view.setInteractionState(!1), gClickShield.showShield(components.ClickShield.SHIELD.LOADING), services.Item.requestUnassignedItems().observe(this, function _onRequestUnassignedComplete(t, response) {
        t.unobserve(this);
        var i = this.getNavigationController();
        if (i) {
            var s = isPhone() ? new UTUnassignedItemsViewController : new UTUnassignedItemsSplitViewController;
            response.success ? s.initWithItems(response.data.items) : s.init(), i.pushViewController(s)
        }
        gClickShield.hideShield(components.ClickShield.SHIELD.LOADING), view.setInteractionState(!0)
    })
},UTStoreViewController.prototype._eTabSelected = function _eTabSelected(sender, event, data) {
    if (!this._viewmodel.isLoadingPacks) {
        var view = this.getView(), t = services.User.getUser(), i = gSettingsModel.isCoinsEnabled(),
            s = gSettingsModel.isFIFAPointsEnabled(), o = gSettingsModel.isPackOddsEnabled();
        this._viewmodel.isLoadingPacks = !0, view.setInteractionState(!1), view.setPacks(this._viewmodel.getPacks(data.id), t.getCurrencies(), {
            coins: i,
            points: s
        }, o), TelemetryManager.trackEvent(TelemetryManager.Sections.STORE, TelemetryManager.Categories.FILTER, "Store - " + data.id.toString().toUpperCase()), setTimeout(function () {
            this._viewmodel && (this._viewmodel.isLoadingPacks = !1, view.setInteractionState(!0))
        }.bind(this), 0)
    }
},UTStoreViewController.prototype._eOpenPack = function _eOpenPack(sender, event, data) {
    function _showGoToUnassignedConfirmation() {
        utils.PopupManager.ShowConfirmation(utils.PopupManager.Confirmations.UNASSIGNED_ENTITLEMENT, null, this._gotoUnassigned.bind(this), function () {
            view.setInteractionState(!0)
        })
    }

    function onPackOpenComplete(s, item, errorCode) {
        if (s.unobserve(this), this._viewmodel.isOpeningPack = !1, errorCode && view.setInteractionState(!0), errorCode === enums.HTTPStatusCode.ITEM_EXISTS) repositories.Item.setDirty(enums.FUTItemPile.PURCHASED), _showGoToUnassignedConfirmation.call(this); else if (errorCode === enums.HTTPStatusCode.SERVICE_IS_DISABLED) switch (i) {
            case enums.Currency.COINS:
                gSettingsModel.disableService(models.SettingsModel.COIN_ENABLED);
                break;
            case enums.Currency.POINTS:
                services.User.getUser().getSelectedPersona().isPC ? gSettingsModel.disableService(models.SettingsModel.MTX_ENABLED) : gSettingsModel.disableService(models.SettingsModel.FIFA_POINTS_ENABLED);
                break;
            default:
                gSettingsModel.disableService(models.SettingsModel.STORE_ENABLED)
        } else if (!errorCode) {
            repositories.Item.setDirty(enums.FUTItemPile.PURCHASED), services.User.requestCurrencies(), t.isMyPack && services.User.getUser().decrementNumUnopenedPacks();
            var o = new UTPackAnimationViewController;
            o.initWithPackData(item, t.assetId), o.setAnimationCallback(function () {
                this.dismissViewController(!1, function () {
                    o.dealloc()
                }), this._gotoUnassigned()
            }.bind(this)), o.modalDisplayStyle = enums.UIModalDisplayStyles.FULLSCREEN, this.presentViewController(o, !0)
        }
    }

    if (!this._viewmodel.isOpeningPack) {
        var view = this.getView(), t = this._viewmodel.getPackById(data.packId, event === enums.UIPackEvent.OPEN),
            i = event === enums.UIPackEvent.BUY_POINTS ? enums.Currency.POINTS : enums.Currency.COINS;
        if (this._viewmodel.isOpeningPack = !0, view.setInteractionState(!1),
            repositories.Item.numItemsInCache(enums.FUTItemPile.PURCHASED) > 0) _showGoToUnassignedConfirmation.call(this), this._viewmodel.isOpeningPack = !1; else if (event === enums.UIPackEvent.OPEN) t.open().observe(this, onPackOpenComplete); else {
            var s = i === enums.Currency.POINTS ? utils.PopupManager.Confirmations.BUY_PACK_FIFAPOINTS : utils.PopupManager.Confirmations.BUY_PACK;
            utils.PopupManager.ShowConfirmation(s, [t.packName, services.Localization.localizeNumber(t.prices.get(i).amount)], function () {
                t.purchase(i).observe(this, onPackOpenComplete)
            }.bind(this), function () {
                this._viewmodel.isOpeningPack = !1, view.setInteractionState(!0)
            }.bind(this))
        }
    }
},UTStoreViewController.prototype._eCheckPackOdds = function _eCheckPackOdds(sender, event, data) {
    if (!this._viewmodel.isOpeningPack) {
        var t = this._viewmodel.getPackById(data.packId);
        if (t.hasOdds()) {
            var i = new UTPackOddsViewController;
            i.initWithPack(t), i.modalDisplayStyle = enums.UIModalDisplayStyles.FORM, this.presentViewController(i, !0);
            var s = t.odds.map(function (t) {
                var i = {};
                return i[t.description] = t.odds, i
            }, this);
            services.PIN.sendData(enums.PIN.EVENT.UI_INTERACTION, {
                action: "selection",
                object_id: t.id.toString(),
                object_type: "store_pack",
                custom: s
            })
        } else services.Notification.queue([services.Localization.localize("packodds.error.noOdds"), enums.UINotificationType.NEGATIVE])
    }
},UTStoreViewController.prototype._eUnassignedSelected = function _eUnassignedSelected(sender, event, data) {
    TelemetryManager.trackEvent(TelemetryManager.Sections.STORE, TelemetryManager.Categories.BUTTON_PRESS, "Store - Unassigned Tile"), this._gotoUnassigned()
},services.URL.registerDeepLinkID(enums.DeepLinkSections.STORE, function (t) {
    var i = getAppMain().getRootViewController();
    if (services.Localization.storeLocLoaded) {
        if (i.setGameViewTab(UTGameTabBarController.TabTag.STORE), t.length > 0) {
            var key, category = t[0];
            for (key in enums.Purchase.DisplayGroup) enums.Purchase.DisplayGroup.hasOwnProperty(key) && enums.Purchase.DisplayGroup[key] === category && i.getPresentedViewController().getCurrentViewController().getRootController().setCategory(category)
        }
    } else i.setGameViewTab(UTGameTabBarController.TabTag.HOME)
}),NamespaceManager.Register("views.items"),utils.JS.inherits(UTWatchListView, FUIView),UTWatchListView.prototype._generate = function _generate() {
    if (!this._generated) {
        var t = document.createElement("div");
        t.classList.add("nativeScrolling"), t.classList.add("panel-list"), t.classList.add("WatchList"), this.__root = t, this._generated = !0
    }
},UTWatchListView.prototype.destroyGeneratedElements = function destroyGeneratedElements() {
    $(this.__root).off().remove(), this.__root = null
},UTWatchListView.prototype.getRoot = function getRoot() {
    return $(this.__root)
},UTWatchListView.prototype.getRootElement = function getRootElement() {
    return this.__root
},UTWatchListView.prototype.dealloc = function dealloc() {
    utils.JS.isValid(this._emptyListView) && (this._emptyListView.destroy(), this._emptyListView = null), this.clearSections(), this.superclass()
},UTWatchListView.prototype.clearSections = function clearSections() {
    this._sections.forEach(function (t) {
        t.destroy()
    }), this._sections = []
},UTWatchListView.prototype.renderSection = function renderSection(t, i, s) {
    var o = this._sections[i];
    return o ? o.clearList() : ((o = new views.lists.SectionedItemList).init(), this._sections[i] = o), o.addItems(t, s), o.render(), this.getRoot().empty().append(this._sections.map(function (t) {
        return t.getRoot()
    })), o
},UTWatchListView.prototype.getSection = function getSection(t) {
    return this._sections[t] || null
},UTWatchListView.prototype.renderEmptyView = function renderEmptyView(message, t, i) {
    this.clearSections(), this._emptyListView = new components.ListNoResults, this._emptyListView.init(), this._emptyListView.setText(message), utils.JS.isFunction(i) && this._emptyListView.setupButton(t, i), this.getRoot().append(this._emptyListView.getRoot())
},UTWatchListView.prototype.onTimedUpdate = function onTimedUpdate() {
    this._sections.forEach(function (t) {
        t.onTimedUpdate()
    })
},UTWatchListView.prototype.selectListRow = function selectListRow(id) {
    this._sections.forEach(function (t) {
        t.selectRowByItemId(id)
    })
},UTWatchListView.prototype.removeItemsById = function removeItemsById(t) {
    this._sections.forEach(function (i) {
        i.removeItemsById(t)
    })
},viewmodels.WatchSectionList = function (t) {
    viewmodels.ItemSectionList.call(this, t), this.setSection(viewmodels.WatchSectionList.SECTION.ACTIVE, function (item) {
        var t = item.getAuctionData();
        return t.isActiveTrade() && t.isBid()
    }, viewmodels.WatchSectionList.SECTION.ACTIVE), this.setSection(viewmodels.WatchSectionList.SECTION.WATCHED, function (item) {
        var t = item.getAuctionData();
        return t.isActiveTrade() && !t.isBid() && t.watched
    }, viewmodels.WatchSectionList.SECTION.WATCHED), this.setSection(viewmodels.WatchSectionList.SECTION.WON, function (item) {
        var t = item.getAuctionData();
        return item.getAuctionData().isWon() || !t.isValid()
    }, viewmodels.WatchSectionList.SECTION.WON), this.setSection(viewmodels.WatchSectionList.SECTION.EXPIRED, function (item) {
        var t = item.getAuctionData();
        return t.isExpired() || t.isClosedTrade() && !t.isWon()
    }, viewmodels.WatchSectionList.SECTION.EXPIRED), this._organizeItems()
},utils.JS.inherits(viewmodels.WatchSectionList, viewmodels.ItemSectionList),viewmodels.WatchSectionList.SECTION = {
    ACTIVE: 0,
    WATCHED: 1,
    WON: 2,
    EXPIRED: 3
},viewmodels.WatchSectionList.prototype.hasMovableWonItems = function () {
    return this.indexOf(this._findMovableWon) > -1
},viewmodels.WatchSectionList.prototype.getMovableWonItems = function () {
    return this.values().filter(this._findMovableWon)
},viewmodels.WatchSectionList.prototype.hasExpiredAuctions = function () {
    return this.indexOf(this._findExpired) > -1
},viewmodels.WatchSectionList.prototype.getExpiredAuctions = function () {
    return this.values().filter(this._findExpired)
},viewmodels.WatchSectionList.prototype._findMovableWon = function (item) {
    return item.isMovable() && item.getAuctionData().isWon()
},viewmodels.WatchSectionList.prototype._findExpired = function (item) {
    var t = item.getAuctionData();
    return t.isExpired() || t.isClosedTrade() && !t.isWon()
},utils.JS.inherits(UTWatchListViewController, FUIViewController),UTWatchListViewController.prototype.init = function init() {
    this.initialized || (this.superclass(), this._viewmodel = new viewmodels.WatchSectionList([]), this._viewmodel.dataUpdated.observe(this, this._eViewmodelDataUpdated), TelemetryManager.trackPage(TelemetryManager.Sections.AUCTIONS, "Transfer Targets"))
},UTWatchListViewController.prototype.dealloc = function dealloc() {
    this._viewmodel.stopAuctionUpdates(), this._viewmodel.dataUpdated.unobserve(this), this.onDataChange.dealloc(), this.onItemSelected.dealloc(), this.superclass(), this._viewmodel = null
},UTWatchListViewController.prototype._getViewInstanceFromData = function _getViewInstanceFromData() {
    return new UTWatchListView
},UTWatchListViewController.prototype._getTelemetryId = function _getTelemetryId() {
    return "Transfer Targets - List View"
},UTWatchListViewController.prototype.getNavigationTitle = function getNavigationTitle() {
    return services.Localization.localize("navbar.label.watchlist")
},UTWatchListViewController.prototype.viewDidAppear = function viewDidAppear() {
    this.superclass();
    var t = getDefaultDispatcher();
    t.addObserver(enums.Notification.ITEM_UNWATCH, this, this._nItemUnwatched), t.addObserver(enums.Notification.AUCTION_CLOSE, this, this._nAuctionClosed), t.addObserver(enums.Notification.UI_ITEM_STATE_CHANGE, this, this._nInfoStateChanged), this._requestItems()
},UTWatchListViewController.prototype.viewWillDisappear = function viewWillDisappear() {
    this.superclass();
    var t = getDefaultDispatcher();
    t.removeObserver(enums.Notification.ITEM_UNWATCH, this), t.removeObserver(enums.Notification.AUCTION_CLOSE, this), t.removeObserver(enums.Notification.UI_ITEM_STATE_CHANGE, this), this._viewmodel && this._viewmodel.stopAuctionUpdates()
},UTWatchListViewController.prototype.getIterator = function getIterator() {
    return this._viewmodel
},UTWatchListViewController.prototype._requestItems = function _requestItems() {
    this._viewmodel.stopAuctionUpdates(), this.getView().setInteractionState(!1), services.Item.requestWatchedItems().observe(this, function _onRequestItemsComplete(t, response) {
        if (t.unobserve(this), !response.success) return services.Notification.queue([services.Localization.localize("watchlist.loaderror"), enums.UINotificationType.NEGATIVE]), void(NetworkErrorManager.checkCriticalStatus(response.status) ? NetworkErrorManager.handleStatus(response.status) : this.getNavigationController().popViewController());
        var i = this._viewmodel.getIndex();
        this._viewmodel.resetCollection([]), this._viewmodel.addArray(response.data.items), this._viewmodel.setIndex(Math.min(i, this._viewmodel.getLastIndex())), this.onDataChange.notify({items: this._viewmodel.values()}), this._renderView(), this._viewmodel.values().length > 0 && !isPhone() && this.getView().selectListRow(this._viewmodel.current().id), this.getView().setInteractionState(!0), this._viewmodel.hasExpiredAuctions() && services.User.requestCurrencies(), this._viewmodel.startAuctionUpdates()
    })
},UTWatchListViewController.prototype.removeItemsById = function removeItemsById(t) {
    if (this._viewmodel.length > 0) {
        var view = this.getView();
        view.removeItemsById(t), view.selectListRow(this._viewmodel.current().id), this._updateSectionHeaders()
    } else this._renderView()
},UTWatchListViewController.prototype._updateSectionHeaders = function _updateSectionHeaders() {
    var view = this.getView(), t = view.getSection(viewmodels.WatchSectionList.SECTION.WON),
        i = view.getSection(viewmodels.WatchSectionList.SECTION.EXPIRED);
    t && t.setHeader(services.Localization.localize("watchlist.dock.categories.won"), services.Localization.localize("infopanel.label.alltoclub"), this._viewmodel.getMovableWonItems().length > 0 ? this._onSendToClub.bind(this) : null), i && i.setHeader(services.Localization.localize("watchlist.dock.categories.expired"), services.Localization.localize("button.label.clearexpired"), this._viewmodel.getSectionItems(viewmodels.WatchSectionList.SECTION.EXPIRED).length > 0 ? this._onUnwatchExpired.bind(this) : null)
},UTWatchListViewController.prototype._renderView = function _renderView() {
    function _rowTapCallback(item) {
        var index = this._viewmodel.indexOf(function (a) {
            return a.id === item.id
        });
        if (this._viewmodel.setIndex(index), isPhone()) {
            var t = item.getAuctionData();
            if (!gSettingsModel.isTradingEnabled() && (t.isActiveTrade() || t.isClosedTrade())) return void utils.PopupManager.ShowAlert(utils.PopupManager.Alerts.TRADING_DISABLED);
            var i = this.getNavigationController();
            if (i) {
                var s = new controllers.navigation.ItemDetails;
                s.initWithIterator(this._viewmodel), i.pushViewController(s, !0)
            }
        } else view.selectListRow(item.id), this.onItemSelected.notify(index)
    }

    var view = this.getView();
    view.clearSections();
    var t = this._viewmodel.getSectionItems(viewmodels.WatchSectionList.SECTION.ACTIVE),
        i = view.renderSection(t, viewmodels.WatchSectionList.SECTION.ACTIVE, _rowTapCallback.bind(this));
    i.setHeader(services.Localization.localize("watchlist.dock.categories.active"), "", null), i.setEmptyMessage(services.Localization.localize("watchlist.availabletransfers.empty.header"), services.Localization.localize("watchlist.availabletransfers.empty.body"));
    var s = this._viewmodel.getSectionItems(viewmodels.WatchSectionList.SECTION.WATCHED),
        o = view.renderSection(s, viewmodels.WatchSectionList.SECTION.WATCHED, _rowTapCallback.bind(this));
    o.setHeader(services.Localization.localize("watchlist.dock.categories.watched"), "", null), o.setEmptyMessage(services.Localization.localize("watchlist.watched.empty.header"), services.Localization.localize("watchlist.watched.empty.body"));
    var l = this._viewmodel.getSectionItems(viewmodels.WatchSectionList.SECTION.WON);
    view.renderSection(l, viewmodels.WatchSectionList.SECTION.WON, _rowTapCallback.bind(this)).setEmptyMessage(services.Localization.localize("watchlist.won.empty.header"), services.Localization.localize("watchlist.won.empty.body"));
    var u = this._viewmodel.getSectionItems(viewmodels.WatchSectionList.SECTION.EXPIRED);
    view.renderSection(u, viewmodels.WatchSectionList.SECTION.EXPIRED, _rowTapCallback.bind(this)).setEmptyMessage(services.Localization.localize("watchlist.expired.empty.header"), services.Localization.localize("watchlist.expired.empty.body")),
        this._updateSectionHeaders()
},UTWatchListViewController.prototype._onSendToClub = function _onSendToClub(sender) {
    TelemetryManager.trackEvent(TelemetryManager.Sections.AUCTIONS, TelemetryManager.Categories.BUTTON_PRESS, "Transfer Targets - Send All To Club");
    var t = this._viewmodel.getMovableWonItems();
    t.length > 0 && (this.getView().setInteractionState(!1), services.Item.move(t, enums.FUTItemPile.CLUB).observe(this, this._onMoveToClubComplete))
},UTWatchListViewController.prototype._onUnwatchExpired = function _onUnwatchExpired(sender) {
    TelemetryManager.trackEvent(TelemetryManager.Sections.AUCTIONS, TelemetryManager.Categories.BUTTON_PRESS, "Transfer Targets - Clear Expired");
    var t = this._viewmodel.getExpiredAuctions();
    t.length > 0 && (this.getView().setInteractionState(!1), services.Item.untarget(t).observe(this, this._onUnwatchExpiredComplete))
},UTWatchListViewController.prototype._onUnwatchExpiredComplete = function _onUnwatchExpiredComplete(t, response) {
    t.unobserve(this), response.success || this.getNavigationController().popViewController()
},UTWatchListViewController.prototype._onMoveToClubComplete = function _onMoveToClubComplete(t, response) {
    if (t.unobserve(this), response.success) {
        var i = response.data.itemIds.length,
            s = i > 1 ? services.Localization.localize("notification.item.allToClub", [i]) : services.Localization.localize("notification.item.oneToClub");
        this._requestItems(), services.Notification.queue([s, enums.UINotificationType.NEUTRAL])
    } else services.Notification.queue([services.Localization.localize("notification.item.moveFailed"), enums.UINotificationType.NEGATIVE]), this.getNavigationController().popViewController()
},UTWatchListViewController.prototype._nAuctionClosed = function _nAuctionClosed(t, sender, data) {
    this._requestItems()
},UTWatchListViewController.prototype._nItemUnwatched = function _nItemUnwatched(t, sender, data) {
    this._requestItems()
},UTWatchListViewController.prototype._eViewmodelDataUpdated = function _eViewmodelDataUpdated(t) {
    this.getView().onTimedUpdate()
},UTWatchListViewController.prototype._nInfoStateChanged = function _nInfoStateChanged(t, sender, data) {
    TelemetryManager.trackEvent(TelemetryManager.Sections.AUCTIONS, TelemetryManager.Categories.BUTTON_PRESS, "Item Info Switch Button - Transfer Targets")
},services.URL.registerDeepLinkID(enums.DeepLinkSections.WATCH_LIST, function (t) {
    var i = getAppMain().getRootViewController();
    if (i.setGameViewTab(UTGameTabBarController.TabTag.TRANSFERS), !gConfigurationModel.getConfigBoolean(models.ConfigurationModel.KEY_HIDE_TRANSFER_MARKET)) {
        var s = i.getPresentedViewController().getCurrentViewController();
        if (s) {
            var o = isPhone() ? new UTWatchListViewController : new UTWatchListSplitViewController;
            o.init(), s.pushViewController(o)
        }
    }
}),utils.JS.inherits(UTWatchListSplitViewController, FUISplitViewController),UTWatchListSplitViewController.prototype.init = function init() {
    if (!this.initialized) {
        this.superclass(), this._listController.init(), this._listController.onDataChange.observe(this, this._eListDataChanged), this._listController.onItemSelected.observe(this, this._eItemSelected), this._itemDetailController.initWithIterator(this._listController.getIterator()), this.addChildViewController(this._listController), this.addChildViewController(this._itemDetailController);
        var t = getDefaultDispatcher();
        t.addObserver(enums.Notification.ITEM_ACTIVATE, this, this._nItemActivated), t.addObserver(enums.Notification.ITEM_DISCARD, this, this._nItemDiscarded), t.addObserver(enums.Notification.ITEM_LIST, this, this._nItemListed), t.addObserver(enums.Notification.ITEM_MOVE, this, this._nItemMoved)
    }
},UTWatchListSplitViewController.prototype.dealloc = function dealloc() {
    this._itemDetailController.dealloc(), this._itemDetailController = null, this._listController.dealloc(), this._listController = null;
    var t = getDefaultDispatcher();
    t.removeObserver(enums.Notification.ITEM_ACTIVATE, this), t.removeObserver(enums.Notification.ITEM_DISCARD, this), t.removeObserver(enums.Notification.ITEM_LIST, this), t.removeObserver(enums.Notification.ITEM_MOVE, this), this.superclass()
},
UTWatchListSplitViewController.prototype.getNavigationTitle = function getNavigationTitle() {
    return this._listController.getNavigationTitle()
},UTWatchListSplitViewController.prototype.viewDidAppear = function viewDidAppear() {
    this.superclass(), this._setLeftController(this._listController), this._itemDetailController.setNavigationStyle(enums.UINavigationBarStyle.SECONDARY)
},UTWatchListSplitViewController.prototype._eItemSelected = function _eItemSelected(t, index) {
    this._itemDetailController.setIndex(index)
},UTWatchListSplitViewController.prototype._eListDataChanged = function _eListDataChanged(t, data) {
    data.items && (data.items.length > 0 ? (this._setRightController(this._itemDetailController), this._itemDetailController.enableSwiping(!1), this._itemDetailController.setIndex(this._listController.getIterator().getIndex())) : this.hideRightController())
},UTWatchListSplitViewController.prototype._nItemActivated = function _nItemActivated(t, sender, data) {
    this._listController.removeItemsById(data.itemIds || [])
},UTWatchListSplitViewController.prototype._nItemListed = function _nItemListed(t, sender, data) {
    this._listController.removeItemsById(data.itemIds || [])
},UTWatchListSplitViewController.prototype._nItemDiscarded = function _nItemDiscarded(t, sender, data) {
    this._listController.removeItemsById(data.itemIds || [])
},UTWatchListSplitViewController.prototype._nItemMoved = function _nItemMoved(t, sender, data) {
    this._listController.removeItemsById(data.itemIds || [])
},utils.JS.inherits(UTExternalLinkTile, UTTileView),UTExternalLinkTile.prototype._generate = function _generate() {
    if (!this._generated) {
        var t = document.createElement("div");
        t.classList.add("tile");
        var i = document.createElement("div");
        i.classList.add("loadingSpinner"), t.appendChild(i);
        var s = document.createElement("header");
        this.__tileTitle = document.createElement("h1"), this.__tileTitle.classList.add("ut-tile-header"), s.appendChild(this.__tileTitle), t.appendChild(s), this.__tileContent = document.createElement("div"), this.__tileContent.classList.add("ut-tile-content"), t.appendChild(this.__tileContent);
        var o = document.createElement("div");
        o.classList.add("ut-tile-image"), t.appendChild(o), this.__root = t, this._generated = !0
    }
},UTExternalLinkTile.prototype.destroyGeneratedElements = function destroyGeneratedElements() {
    $(this.__root).off().remove(), this.__root = null, this.__tileTitle = null, this.__tileContent = null
},UTExternalLinkTile.prototype.getRoot = function getRoot() {
    return $(this.__root)
},UTExternalLinkTile.prototype.getRootElement = function getRootElement() {
    return this.__root
},utils.JS.inherits(UTTransfersHubView, FUIView),UTTransfersHubView.prototype._generate = function _generate() {
    if (!this._generated) {
        var t = document.createElement("div");
        t.classList.add("TransfersHub");
        var i = document.createElement("div");
        i.classList.add("grid"), i.classList.add("layout-hub"), this._extLinkTile = new UTExternalLinkTile, this._extLinkTile.getRootElement().classList.add("col-1-1"), this._extLinkTile.getRootElement().classList.add("ut-tile-external-link"), i.appendChild(this._extLinkTile.getRootElement()), this._transferMarketTile = new UTTileView, this._transferMarketTile.getRootElement().classList.add("col-1-1"), this._transferMarketTile.getRootElement().classList.add("ut-tile-transfer-market"), i.appendChild(this._transferMarketTile.getRootElement()), this._transferListTile = new UTTransfersTileView, this._transferListTile.getRootElement().classList.add("has-separator"), this._transferListTile.getRootElement().classList.add("col-1-2"), this._transferListTile.getRootElement().classList.add("ut-tile-transfer-list"), i.appendChild(this._transferListTile.getRootElement()), this._transferTargetsTile = new UTTransfersTileView, this._transferTargetsTile.getRootElement().classList.add("has-separator"), this._transferTargetsTile.getRootElement().classList.add("col-1-2"), this._transferTargetsTile.getRootElement().classList.add("ut-tile-transfer-targets"), i.appendChild(this._transferTargetsTile.getRootElement()), t.appendChild(i), this.__root = t, this._generated = !0
    }
},
UTTransfersHubView.prototype.destroyGeneratedElements = function destroyGeneratedElements() {
    $(this.__root).off().remove(), this.__root = null, this._extLinkTile.destroy(), this._transferMarketTile.destroy(), this._transferListTile.destroy(), this._transferTargetsTile.destroy()
},UTTransfersHubView.prototype.getRoot = function getRoot() {
    return $(this.__root)
},UTTransfersHubView.prototype.getRootElement = function getRootElement() {
    return this.__root
};
UTTransfersHubView.prototype.init = function init() {
    this.superclass(), this._extLinkTile.init(), this._extLinkTile.hide(), this._transferMarketTile.init(), this._transferMarketTile.setTitle(services.Localization.localize("navbar.label.search")), this._transferListTile.init(), this._transferListTile.setTitle(services.Localization.localize("panel.label.transferlist")), this._transferListTile.setTotalTransferLabel(services.Localization.localize("dock.label.items")), this._transferListTile.setTotalTransferCount(0), this._transferListTile.setActiveTransferLabel(services.Localization.localize("dock.label.selling")), this._transferListTile.setActiveTransferCount(0), this._transferListTile.setFinishedTransferLabel(services.Localization.localize("tradepile.dock.categories.sold")), this._transferListTile.setFinishedTransferCount(0), this._transferTargetsTile.init(), this._transferTargetsTile.setTitle(services.Localization.localize("panel.label.transfertargets")), this._transferTargetsTile.setTotalTransferLabel(services.Localization.localize("dock.label.items")), this._transferTargetsTile.setTotalTransferCount(0), this._transferTargetsTile.setActiveTransferLabel(services.Localization.localize("dock.label.winning")), this._transferTargetsTile.setActiveTransferCount(0), this._transferTargetsTile.setFinishedTransferLabel(services.Localization.localize("dock.label.outbid")), this._transferTargetsTile.setFinishedTransferCount(0)
}, UTTransfersHubView.prototype.getExtLinkTile = function getExtLinkTile() {
    return this._extLinkTile
}, UTTransfersHubView.prototype.getExtLinkTileContent = function getExtLinkTileContent() {
    return this._extLinkTile.getTileContent()
}, UTTransfersHubView.prototype.getTransferMarketTile = function getTransferMarketTile() {
    return this._transferMarketTile
}, UTTransfersHubView.prototype.getTransferListTile = function getTransferListTile() {
    return this._transferListTile
}, UTTransfersHubView.prototype.getTransferTargetsTile = function getTransferTargetsTile() {
    return this._transferTargetsTile
}, UTTransfersHubView.prototype.setTradeAccessState = function setTradeAccessState(level, t) {
    if (this._disableTiles(), this._hasMarketAccess = !1, level === enums.TradeAccessLevel.MAINTENANCE) this._transferTargetsTile.setInteractionState(!1), this._transferTargetsTile.setDimOverlayType(UTTileDimOverlayView.OverlayType.MAINTENANCE), this._transferMarketTile.setInteractionState(!1), this._transferMarketTile.setDimOverlayText(services.Localization.localize("tile.disabled.transfersMaintenance")), this._transferMarketTile.setDimOverlayType(UTTileDimOverlayView.OverlayType.MAINTENANCE); else if (level === enums.TradeAccessLevel.BLACKLIST) this._transferMarketTile.setInteractionState(!1), this._transferMarketTile.setDimOverlayText(services.Localization.localize("tile.disabled.transfersBlacklisted")); else {
        var platform = "";
        switch (t) {
            case enums.SKU.XBO:
                platform = services.Localization.localize("platform.console.xboxOne");
                break;
            case enums.SKU.PS4:
                platform = services.Localization.localize("platform.console.ps4");
                break;
            case enums.SKU.PC:
                platform = services.Localization.localize("platform.pc")
        }
        if (level === enums.TradeAccessLevel.GREYLIST) this._transferMarketTile.setInteractionState(!1), this._transferMarketTile.setDimOverlayText(services.Localization.localize("tile.disabled.transfersGreylisted", [platform])); else {
            var i = services.Localization.localize("tile.disabled.learnmore", [platform]), s = new DOMParser,
                o = document.createElement("p");
            o.innerHTML = s.parseFromString(i, "text/html").body.innerHTML, this._extLinkTile.setContent(o), this._extLinkTile.show(),
                this._transferTargetsTile.setDimOverlayType(UTTileDimOverlayView.OverlayType.LOCKED), this._transferMarketTile.setDimOverlayType(UTTileDimOverlayView.OverlayType.LOCKED), this._transferMarketTile.setDimOverlayText(services.Localization.localize("tile.disabled.transfersUnlockAccess", [platform]))
        }
    }
}, UTTransfersHubView.prototype.disableMarket = function disableMarket() {
    this._disableTiles(), this._transferMarketTile.setDimOverlayText(services.Localization.localize("tile.disabled.transfersunavailable").toUpperCase())
}, UTTransfersHubView.prototype._disableTiles = function _disableTiles() {
    this._transferMarketTile.setInteractionState(!1), this._transferMarketTile.setDimmed(!0), this._transferTargetsTile.setInteractionState(!1), this._transferTargetsTile.setDimmed(!0)
}, utils.JS.inherits(UTTransfersHubViewController, FUIViewController), UTTransfersHubViewController.prototype.init = function init() {
    this.superclass();
    var view = this.getView();
    view.getTransferMarketTile().addTarget(this, this._eTransferMarketTileSelected, enums.Event.TAP), view.getTransferListTile().addTarget(this, this._eTransferListTileSelected, enums.Event.TAP), view.getTransferTargetsTile().addTarget(this, this._eTransferTargetsTileSelected, enums.Event.TAP)
}, UTTransfersHubViewController.prototype._getViewInstanceFromData = function _getViewInstanceFromData() {
    return new UTTransfersHubView
}, UTTransfersHubViewController.prototype._getTelemetryId = function _getTelemetryId() {
    return "Hub - Transfers"
}, UTTransfersHubViewController.prototype.getNavigationTitle = function getNavigationTitle() {
    return services.Localization.localize("nav.label.trading")
}, UTTransfersHubViewController.prototype.viewDidAppear = function viewDidAppear() {
    this.superclass();
    var t = services.User.getUser(), view = this.getView();
    if (this.getNavigationController().setNavigationVisibility(!0, !0), TelemetryManager.trackPage(TelemetryManager.Sections.AUCTIONS, "Transfers Hub"), t.hasTradeAccess()) this._requestTransferListData(), gSettingsModel.isTradingEnabled() ? this._requestTransferTargetData() : (TelemetryManager.trackEvent(TelemetryManager.Sections.AUCTIONS, TelemetryManager.Categories.MARKET_STATUS, "Disabled"), view.disableMarket()); else {
        var i = t.getTradeAccess(), status = "No Access";
        view.setTradeAccessState(i, t.getSelectedPersona().sku), this.decorateLinks(view.getExtLinkTileContent()), i === enums.TradeAccessLevel.BLACKLIST ? status = "Blacklisted" : i === enums.TradeAccessLevel.GREYLIST ? status = "Greylisted" : i === enums.TradeAccessLevel.MAINTENANCE && (status = "Maintenance"), TelemetryManager.trackEvent(TelemetryManager.Sections.AUCTIONS, TelemetryManager.Categories.MARKET_STATUS, status)
    }
}, UTTransfersHubViewController.prototype.viewWillDisappear = function viewWillDisappear() {
    this.superclass(), services.User.getUser().hasTradeAccess() || this.stripLinks(this.getView().getExtLinkTileContent())
}, UTTransfersHubViewController.prototype._requestTransferListData = function _requestTransferListData() {
    gClickShield.showShield(components.ClickShield.SHIELD.LOADING), services.Item.requestTransferItems().observe(this, function _onRequestTransferItemsComplete(t, response) {
        t.unobserve(this);
        var i = this.getView().getTransferListTile();
        if (i && response.success) {
            var s = new viewmodels.TransferSectionList(response.data.items), total = response.data.items.length,
                o = 1 === total ? services.Localization.localize("dock.label.item") : services.Localization.localize("dock.label.items");
            i.setTotalTransferLabel(o), i.setTotalTransferCount(total), i.setActiveTransferCount(s.getActiveItems().length), i.setFinishedTransferCount(s.getSoldItems().length), i.setInteractionState(!0), i.setDimmed(!1)
        } else response.success || (services.Notification.queue([services.Localization.localize("tradepile.unavailable"), enums.UINotificationType.NEGATIVE]), i.setInteractionState(!1), i.setDimmed(!0));
        gClickShield.hideShield(components.ClickShield.SHIELD.LOADING)
    })
}, UTTransfersHubViewController.prototype._requestTransferTargetData = function _requestTransferTargetData() {
    gClickShield.showShield(components.ClickShield.SHIELD.LOADING),
        services.Item.requestWatchedItems().observe(this, function _onRequestWatchedItemsComplete(t, response) {
            t.unobserve(this);
            var i = this.getView().getTransferTargetsTile();
            if (i && response.success) {
                var total = response.data.items.length,
                    s = 1 === total ? services.Localization.localize("dock.label.item") : services.Localization.localize("dock.label.items");
                i.setTotalTransferLabel(s), i.setTotalTransferCount(total);
                var o = response.data.items.reduce(function (total, item) {
                    var t = item.getAuctionData();
                    return t.isHighestBid() && t.isActiveTrade() && total++, total
                }, 0);
                i.setActiveTransferCount(o);
                var l = response.data.items.reduce(function (total, item) {
                    return item.getAuctionData().isOutbid() && total++, total
                }, 0);
                i.setFinishedTransferCount(l)
            }
            gClickShield.hideShield(components.ClickShield.SHIELD.LOADING)
        })
}, UTTransfersHubViewController.prototype._eTransferMarketTileSelected = function _eTransferMarketTileSelected(sender, event, data) {
    var t = this.getNavigationController();
    if (t) {
        var i = services.User.getUser().marketSearchCriteria, s = new UTMarketSearchFiltersViewController;
        s.initWithSearchCriteria(i), t.pushViewController(s)
    }
}, UTTransfersHubViewController.prototype._eTransferListTileSelected = function _eTransferListTileSelected(sender, event, data) {
    var t = this.getNavigationController();
    if (t) {
        var i = isPhone() ? new UTTransferListViewController : new UTTransferListSplitViewController;
        i.init(), t.pushViewController(i)
    }
}, UTTransfersHubViewController.prototype._eTransferTargetsTileSelected = function _eTransferTargetsTileSelected(sender, event, data) {
    var t = this.getNavigationController();
    if (t) {
        var i = isPhone() ? new UTWatchListViewController : new UTWatchListSplitViewController;
        i.init(), t.pushViewController(i)
    }
}, utils.JS.inherits(UTWebClientUpdateView, FUITargetActionView), UTWebClientUpdateView.prototype._generate = function _generate() {
    if (!this._generated) {
        var t = document.createElement("div");
        t.setAttribute("id", "WebClientUpdate"), t.classList.add("sm-ut-content-container"), t.classList.add("ut-content-container");
        var i = document.createElement("div");
        i.classList.add("ut-content");
        var s = document.createElement("div");
        s.classList.add("ut-download-patch-view"), s.classList.add("ut-login-generic");
        var o = document.createElement("div");
        o.classList.add("ut-login-generic-content");
        var l = document.createElement("div");
        this.__title = document.createElement("h2"), l.appendChild(this.__title), this.__message = document.createElement("p"), this.__message.classList.add("patchMessage"), l.appendChild(this.__message), this._actionButton = new views.buttons.DefaultButton, this._actionButton.getRootElement().classList.add("call-to-action"), l.appendChild(this._actionButton.getRootElement()), o.appendChild(l), s.appendChild(o), i.appendChild(s), t.appendChild(i), this.__root = t, this._generated = !0
    }
}, UTWebClientUpdateView.prototype.destroyGeneratedElements = function destroyGeneratedElements() {
    $(this.__root).off().remove(), this.__root = null, this.__title = null, this.__message = null, this._actionButton.destroy()
}, UTWebClientUpdateView.prototype.getRoot = function getRoot() {
    return $(this.__root)
}, UTWebClientUpdateView.prototype.getRootElement = function getRootElement() {
    return this.__root
}, UTWebClientUpdateView.Event = {RESTART_APP: "UTWebClientUpdateView.Event.RESTART_APP"}, UTWebClientUpdateView.prototype.init = function init() {
    this.superclass(), this._actionButton.init(), this._actionButton.addTarget(this, this._eRestartSelected, enums.Event.TAP), this._actionButton.setText(services.Localization.localize("clientupdate.button.ready")), this.__title.textContent = services.Localization.localize("clientupdate.message.title"), this.__message.textContent = services.Localization.localize("clientupdate.message.ready")
}, UTWebClientUpdateView.prototype._eRestartSelected = function _eRestartSelected(sender, event, data) {
    this._actionButton.setInteractionState(!1), this._actionButton.removeTarget(this, this._eRestartSelected, enums.Event.TAP), this._triggerActions(UTWebClientUpdateView.Event.RESTART_APP)
}, utils.JS.inherits(UTWebClientUpdateViewController, FUIViewController),
    UTWebClientUpdateViewController.prototype.init = function init() {
        this.initialized || (this.superclass(), gClientUpdate.disablePolling(), this.getView().addTarget(this, this._eRestartButtonSelected, UTWebClientUpdateView.Event.RESTART_APP), TelemetryManager.trackPage(TelemetryManager.Sections.MISC, "Web App - Update Screen"))
    }, UTWebClientUpdateViewController.prototype._getViewInstanceFromData = function _getViewInstanceFromData() {
    return new UTWebClientUpdateView
}, UTWebClientUpdateViewController.prototype.getNavigationTitle = function getNavigationTitle() {
    return services.Localization.localize("clientupdate.title")
}, UTWebClientUpdateViewController.prototype._eRestartButtonSelected = function _eRestartButtonSelected(sender, event, data) {
    services.PIN.sendData(enums.PIN.EVENT.BOOT_START, {
        status: enums.PIN.BOOT_START_EVT_STATUS.SOURCE_UPDATE,
        source: enums.PIN.BOOT_START_EVT_SOURCE.UPGRADE
    }, !0), TelemetryManager.trackEvent(TelemetryManager.Sections.MISC, TelemetryManager.Categories.BUTTON_PRESS, "Web App Update Button"), gClickShield.showShield(components.ClickShield.SHIELD.LOADING), setTimeout(function () {
        services.URL.hasDeepLinkURL() && getStorage().setItem(STORAGE_DEEP_LINK_KEY, services.URL.getDeepLinkURL()), repositories.Squad.hasExternalShowOffSquad() && getStorage().setItem(STORAGE_SHOW_OFF_KEY, repositories.Squad.unauthenticatedShowOffId), gClientUpdate.updateClient()
    }, 1e3)
}, utils.JS.inherits(UTRootView, FUIView), UTRootView.prototype._generate = function _generate() {
    if (!this._generated) {
        var t = document.createElement("section");
        t.classList.add("view-root"), this.__root = t, this._generated = !0
    }
}, UTRootView.prototype.destroyGeneratedElements = function destroyGeneratedElements() {
    $(this.__root).off().remove(), this.__root = null
}, UTRootView.prototype.getRoot = function getRoot() {
    return $(this.__root)
}, UTRootView.prototype.getRootElement = function getRootElement() {
    return this.__root
}, utils.JS.inherits(UTRootViewController, FUIViewController), UTRootViewController.prototype._getViewInstanceFromData = function _getViewInstanceFromData() {
    return new UTRootView
}, UTRootViewController.prototype._getPresentationControllerInstance = function _getPresentationControllerInstance() {
    return new UTRootPresentationController
}, UTRootViewController.prototype.showClientUpdateView = function showClientUpdateView() {
    var t;
    return !(this.getPresentedViewController() instanceof UTWebClientUpdateViewController) && ((t = new UTWebClientUpdateViewController).init(), this.presentViewController(t, !0), !0)
}, UTRootViewController.prototype.showLanguageSelectView = function showLanguageSelectView() {
    if (this.getPresentedViewController() instanceof UTLanguageSelectViewController) return !1;
    var t = new UTLanguageSelectViewController;
    return t.init(), t.setLanguageSelectCallback(function () {
        getAppMain().onLanguageLoaded()
    }), this.presentViewController(t, !0), !0
}, UTRootViewController.prototype.showLicenseView = function showLicenseView() {
    if (this.getPresentedViewController() instanceof UTLicenseViewController) return !1;
    var t = new UTLicenseViewController;
    return t.init(), this.presentViewController(t, !0), !0
}, UTRootViewController.prototype.showLoginView = function showLoginView() {
    if (this.getPresentedViewController() instanceof UTLoginViewController) return !1;
    var t = new UTLoginViewController;
    return t.init(), this.presentViewController(t, !0), !0
}, UTRootViewController.prototype.showOnboardingView = function showOnboardingView(state, t) {
    var i = new controllers.navigation.Onboarding;
    return t && i.setSquad(t), state ? i.initWithViewmodel(state) : i.init(), this.presentViewController(i, !0), !0
}, UTRootViewController.prototype.showCaptchaView = function showCaptchaView() {
    var t = new UTBootFlowNavigationController, i = new UTCaptchaViewController;
    return i.init(), t.initWithRootController(i), this.presentViewController(t, !0), !0
}, UTRootViewController.prototype.showFunCaptchaView = function showFunCaptchaView() {
    var t = new UTBootFlowNavigationController, i = new UTFunCaptchaViewController;
    return i.init(), t.initWithRootController(i), this.presentViewController(t, !0), !0
},
    UTRootViewController.prototype.showLoggedOnConsoleView = function showLoggedOnConsoleView() {
        var t = new UTBootFlowNavigationController, i = new UTLoggedOnConsoleViewController;
        return i.init(), t.initWithRootController(i), this.presentViewController(t, !0), !0
    }, UTRootViewController.prototype.showGettingStartedView = function showGettingStartedView(context) {
    var t = new UTBootFlowNavigationController, i = new UTGettingStartedViewController;
    return i.init(), i.setType(context), t.initWithRootController(i), this.presentViewController(t, !0), !0
}, UTRootViewController.prototype.showSharedSquadView = function showSharedSquadView(state) {
    var t = new UTGameFlowNavigationController,
        i = isPhone() ? new controllers.squads.ShowOffSquadOverview : new controllers.squads.ShowOffSquadLandscape;
    return i.initWithSquad(state.squad), t.initWithRootController(i), t.setClubInfo(state.clubName, state.estDate), this.presentViewController(t), !0
}, UTRootViewController.prototype.showGameView = function showGameView() {
    if (this._presentedViewController instanceof UTGameTabBarController) return !1;
    var t, i = new UTGameTabBarController, s = new UTGameFlowNavigationController,
        o = new UTGameFlowNavigationController, l = new UTGameFlowNavigationController,
        u = new UTGameFlowNavigationController, h = new UTGameFlowNavigationController, p = new UTTabBarItemView,
        _ = new UTTabBarItemView, m = new UTTabBarItemView, g = new UTTabBarItemView, S = new UTTabBarItemView;
    if (s.initWithRootController(new UTHomeHubViewController), o.initWithRootController(new UTSquadsHubViewController), l.initWithRootController(new UTTransfersHubViewController), u.initWithRootController(new UTStoreViewController), h.initWithRootController(new UTClubHubViewController), p.init(), p.setTag(UTGameTabBarController.TabTag.HOME), p.setText(services.Localization.localize("navbar.label.home")), p.addClass("icon-home"), _.init(), _.setTag(UTGameTabBarController.TabTag.SQUADS), _.setText(services.Localization.localize("nav.label.squads")), _.addClass("icon-squad"), m.init(), m.setTag(UTGameTabBarController.TabTag.TRANSFERS), m.setText(services.Localization.localize("nav.label.trading")), m.addClass("icon-transfer"), g.init(), g.setTag(UTGameTabBarController.TabTag.STORE), g.setText(services.Localization.localize("navbar.label.store")), g.addClass("icon-store"), S.init(), S.setTag(UTGameTabBarController.TabTag.CLUB), S.setText(services.Localization.localize("nav.label.club")), S.addClass("icon-club"), s.tabBarItem = p, o.tabBarItem = _, l.tabBarItem = m, u.tabBarItem = g, h.tabBarItem = S, t = [s, o, l, u, h], !isPhone()) {
        var v = new UTGameFlowNavigationController, C = new UTGameFlowNavigationController,
            T = new UTGameFlowNavigationController;
        v.initWithRootController(new UTSBCHubViewController), C.initWithRootController(new UTLeaderboardsHubViewController), T.initWithRootController(new UTAppSettingsViewController);
        var L = new UTTabBarItemView;
        L.init(), L.setTag(UTGameTabBarController.TabTag.SBC), L.setText(services.Localization.localize("nav.label.sbc")), L.addClass("icon-sbc");
        var I = new UTTabBarItemView;
        I.init(), I.setTag(UTGameTabBarController.TabTag.LEADERBOARDS), I.setText(services.Localization.localize("nav.label.leaderboards")), I.addClass("icon-leaderboards");
        var P = new UTTabBarItemView;
        P.init(), P.setTag(UTGameTabBarController.TabTag.SETTINGS), P.setText(services.Localization.localize("button.settings")), P.addClass("icon-settings"), v.tabBarItem = L, C.tabBarItem = I, T.tabBarItem = P, t = t.concat([v, C, T])
    }
    return i.initWithViewControllers(t), i.getView().addClass("game-navigation"), this.presentViewController(i, !0, function () {
        services.URL.hasDeepLinkURL() && services.URL.processDeepLinkURL()
    }), !0
}, UTRootViewController.prototype.setGameViewTab = function setGameViewTab(t) {
    var i = this.getPresentedViewController();
    if (i instanceof UTGameTabBarController) {
        var s = i.getCurrentViewController();
        i.setSelectedIndexByTag(t), s instanceof UTGameFlowNavigationController && s.popToRootViewController()
    } else utils.Debug.Assert(!1, "Attempted to set game view tab when the game view is not being presented.")
}, UTRootViewController.prototype.didDismiss = function didDismiss(t) {
    this.superclass(), t.dealloc()
}, NamespaceManager.Register("views"), views.Notification = function FUINotification(t) {
    FUIView.call(this), this.message = t.message, Object.defineProperty(this, "message", {
        writable: !1,
        enumerable: !0
    }), this.type = t.type, Object.defineProperty(this, "type", {
        writable: !1,
        enumerable: !0
    }), this._displayTimeout = void 0, Object.defineProperty(this, "_displayTimeout", {
        writable: !0,
        enumerable: !1
    }), this._UIStates = {
        HIDDEN: 0,
        SHOWING: 1,
        SHOWN: 2,
        DISMISSING: 3
    }, Object.defineProperty(this, "_UIStates", {
        writable: !1,
        enumerable: !1
    }), this._state = this._UIStates.HIDDEN, Object.defineProperty(this, "_state", {
        writable: !0,
        enumerable: !1
    }), this._generate()
}, utils.JS.inherits(views.Notification, FUIView), views.Notification.prototype._generate = function _generate() {
    if (!this._generated) {
        var t = document.createElement("div");
        t.classList.add("Notification"), this.__content = document.createElement("p"), t.appendChild(this.__content);
        var i = document.createElement("span");
        i.classList.add("icon_close"), i.classList.add("fut_icon"), t.appendChild(i), this.__root = t, this._generated = !0
    }
}, views.Notification.prototype.destroyGeneratedElements = function destroyGeneratedElements() {
    $(this.__root).off().remove(), this.__root = null, this.__content = null
}, views.Notification.prototype.getRoot = function getRoot() {
    return $(this.__root)
}, views.Notification.prototype.getRootElement = function getRootElement() {
    return this.__root
}, views.Notification.prototype.init = function init() {
    this.superclass(), this.setInteractionState(!0);
    var className = "";
    switch (this.type) {
        case enums.UINotificationType.POSITIVE:
            className = "positive";
            break;
        case enums.UINotificationType.NEUTRAL:
            className = "neutral";
            break;
        case enums.UINotificationType.NEGATIVE:
            className = "negative"
    }
    this.addClass(className), this.__content.textContent = this.message
}, views.Notification.prototype.didAddToSuperview = function didAddToSuperview() {
    this.display()
}, views.Notification.prototype.display = function display() {
    this._state === this._UIStates.HIDDEN && (this._state = this._UIStates.SHOWING, this.perform(enums.UIAnimation.FADE_IN, function () {
        this._state = this._UIStates.SHOWN
    }.bind(this)), this._displayTimeout = setTimeout(this.remove.bind(this), Math.max(60 * this.message.length, 1500)))
}, views.Notification.prototype.remove = function remove() {
    this._state !== this._UIStates.DISMISSING && (this._state = this._UIStates.DISMISSING, this._displayTimeout = clearTimeout(this._displayTimeout), this.perform(enums.UIAnimation.FADE_OUT, function () {
        this.removeFromSuperview(), this.dealloc()
    }.bind(this)))
}, views.Notification.prototype._tapDetected = function _tapDetected(e) {
    this._state === this._UIStates.SHOWN && this.remove()
}, NamespaceManager.Register("views"), views.NotificationLayer = function FUINotificationLayer() {
    FUIView.call(this), this._generate()
}, utils.JS.inherits(views.NotificationLayer, FUIView), views.NotificationLayer.prototype._generate = function _generate() {
    if (!this._generated) {
        var t = document.createElement("div");
        t.setAttribute("id", "NotificationLayer"), this.__root = t, this._generated = !0
    }
}, views.NotificationLayer.prototype.destroyGeneratedElements = function destroyGeneratedElements() {
    $(this.__root).off().remove(), this.__root = null
}, views.NotificationLayer.prototype.getRoot = function getRoot() {
    return $(this.__root)
}, views.NotificationLayer.prototype.getRootElement = function getRootElement() {
    return this.__root
}, views.NotificationLayer.prototype.displayNotification = function displayNotification(t) {
    var view = new views.Notification(t);
    view.init(), this.addSubview(view, this.getRootElement()), this.layoutSubviews()
}, NamespaceManager.Register("controllers.views"), controllers.views.NotificationLayer = function UTNotificationLayerController() {
    FUIViewController.call(this)
}, utils.JS.inherits(controllers.views.NotificationLayer, FUIViewController), controllers.views.NotificationLayer.prototype.init = function init() {
    this.superclass(), services.Notification.display.observe(this, function _displayNotification(t, i) {
        this.getView().displayNotification(i)
    });
    var t = getDefaultDispatcher()
    ;t.addObserver(enums.Notification.OBJECTIVE_COMPLETE, this, this._nObjectiveCompleted), t.addObserver(enums.Notification.OBJECTIVE_PROGRESS, this, this._nObjectiveProgressed), t.addObserver(enums.Notification.ITEM_REDEEM, this, this._nUnlockableRedeemed)
}, controllers.views.NotificationLayer.prototype.dealloc = function dealloc() {
    services.Notification.display.unobserve(this);
    var t = getDefaultDispatcher();
    t.removeObserver(enums.Notification.OBJECTIVE_COMPLETE, this), t.removeObserver(enums.Notification.OBJECTIVE_PROGRESS, this), t.removeObserver(enums.Notification.ITEM_REDEEM, this), this.superclass()
}, controllers.views.NotificationLayer.prototype._getViewInstanceFromData = function _getViewInstanceFromData() {
    return new views.NotificationLayer
}, controllers.views.NotificationLayer.prototype._nObjectiveCompleted = function _nObjectiveCompleted(t, sender, data) {
    var i = services.Localization.localize("notification.objectives.completedObjective", [data.objective.name]);
    this.getView().displayNotification(new transferobjects.Notification(i, enums.UINotificationType.POSITIVE))
}, controllers.views.NotificationLayer.prototype._nObjectiveProgressed = function _nObjectiveProgressed(t, sender, data) {
    var i = services.Localization.localize("notification.objectives.weeklyObjectiveProgress", [data.objective.name]);
    this.getView().displayNotification(new transferobjects.Notification(i, enums.UINotificationType.POSITIVE))
}, controllers.views.NotificationLayer.prototype._nUnlockableRedeemed = function _nUnlockableRedeemed(t, sender, data) {
    var i;
    data.isCoins ? i = services.Localization.localize("notification.coins.added") : data.isPack ? i = services.Localization.localize("notification.pack.added") : data.isDraftToken ? i = services.Localization.localize("notification.drafttoken.added") : data.isPlayerPickItem && (i = services.Localization.localize("notification.draftitem.added")), this.getView().displayNotification(new transferobjects.Notification(i || "", enums.UINotificationType.POSITIVE))
}, utils.JS.inherits(EASFCApp, UTObject), EASFCApp.prototype.init = function init() {
    accessobjects.Authentication.setAuthDelegate(services.Authentication), accessobjects.Champions.setAuthDelegate(services.Authentication), accessobjects.Configuration.setAuthDelegate(services.Authentication), accessobjects.Leaderboards.setAuthDelegate(services.Authentication), accessobjects.Rivals.setAuthDelegate(services.Authentication), accessobjects.Squad.setAuthDelegate(services.Authentication), accessobjects.SquadBattles.setAuthDelegate(services.Authentication), isChrome() ? this._appVersion = APP_VERSION : window.plugins.utilities.getAppVersion(function (t) {
        this._appVersion = t
    }.bind(this), function () {
    }), this._defaultDispatcher = new UTNotificationDispatcher, this._keyboardEventController = new UTKeyboardEventController, this._keyboardEventController.init();
    var t = new UTRootViewController;
    t.init(), this.setRootViewController(t), this._loadConfig(), this.showSplashScreen()
}, EASFCApp.prototype.setRootViewController = function setRootViewController(t) {
    this._rootViewController && (this._rootViewController.viewWillDisappear(), DOMKit.remove(this._rootViewController.getView().getRootElement()), this._rootViewController.viewDidDisappear()), this._rootViewController = t, this._rootViewController.viewWillAppear(), document.getElementsByTagName("body")[0].appendChild(this._rootViewController.getView().getRootElement()), this._rootViewController.viewDidAppear()
}, EASFCApp.prototype.getRootViewController = function getRootViewController() {
    return this._rootViewController
}, EASFCApp.prototype.onPause = function onPause() {
    removeFocus(), services.PIN.sendData(enums.PIN.EVENT.CONNECTION, {}), services.PIN.sendData(enums.PIN.EVENT.BOOT_END, {end_reason: enums.PIN.BOOT_END_EVT_REASON.NORMAL}), gClientUpdate.onAppPaused(), controllers.SettingsUpdaterController.clearTimer(), this._pauseTimestamp = Date.now(), this.getDefaultDispatcher().notify(enums.Notification.APP_PAUSE, this)
}, EASFCApp.prototype.onResume = function onResume() {
    if (this.getLatestRemoteConfig(), this.getLatestServerRarity(),
            services.PIN.sendData(enums.PIN.EVENT.BOOT_START, {
                status: enums.PIN.BOOT_START_EVT_STATUS.SUCCESS,
                source: enums.PIN.BOOT_START_EVT_SOURCE.NORMAL
            }), this.isInitComplete()) {
        var t = Math.round((Date.now() - this._pauseTimestamp) / 1e3);
        this._pauseTimestamp = 0, t >= RESUME_REFRESH_THRESHOLD && services.Authentication.getFUTAuthState() === enums.FUTAuthState.COMPLETE && (gStaffStatsModel.setDirtyFlag(!0), services.User.requestPileSizes()), this.hideSplashScreen()
    }
    this.getDefaultDispatcher().notify(enums.Notification.APP_RESUME, this)
}, EASFCApp.prototype.onOnline = function onOnline() {
    this.isInitComplete() && (this.getLatestServerRarity(), gConfigurationModel.hasRemoteConfigLoaded() || this.getLatestRemoteConfig())
}, EASFCApp.prototype.onOffline = function onOffline() {
    this.isInitComplete() && (services.PIN.sendDisconnectEvent(), gClientUpdate.onAppOffline())
}, EASFCApp.prototype.onPN = function onPN(t, url) {
    this._handlingPN || (this._handlingPN = !0, this._appIsBooting && TelemetryManager.trackEvent(TelemetryManager.Sections.MISC, TelemetryManager.Categories.PN, "App opened from Push Notification"), services.PIN.sendData(enums.PIN.EVENT.MESSAGE, {
        type: enums.PIN.MESSAGE_EVT_TYPE.PN,
        msg_id: decodeURIComponent(t).toString(),
        option: "close",
        service: "prm",
        status: PIN_MESSAGE_EVT_STATUS
    }), url = url.trim(), utils.JS.isEmpty(url) || "null" === url ? this._handlingPN = !1 : this.onHandleDeepLink(url))
}, EASFCApp.prototype.onHandleDeepLink = function onHandleDeepLink(url) {
    var state = services.Authentication.getSession(enums.AuthEnvironment.UTAS).state;
    if (!this.isInitComplete() || state === enums.AuthenticationState.STATE_UNAUTHENTICATED) return services.URL.setDeepLinkURL(url), void(this._handlingPN = !1);
    services.URL.clearDeepLinkURL(), setTimeout(function () {
        services.URL.process(url), this._handlingPN = !1
    }.bind(this), 0)
}, EASFCApp.prototype.isInitComplete = function isInitComplete() {
    return this._initComplete
}, EASFCApp.prototype.getAppVersion = function getAppVersion() {
    return this._appVersion
}, EASFCApp.prototype.getAppIdentifier = function getAppIdentifier() {
    return "com.ea.fifaultimate.inc"
}, EASFCApp.prototype.onOrientationChanged = function onOrientationChanged() {
}, EASFCApp.prototype.appBoot = function appBoot() {
    this._appIsBooting || (this._appIsBooting = !0, gUserSettingsModel.checkLocalStorageVersion(), this._checkAssetsVersion(), this._assignExternalData(), services.PIN.sendData(enums.PIN.EVENT.BOOT_START, {
        status: enums.PIN.BOOT_START_EVT_STATUS.SUCCESS,
        source: enums.PIN.BOOT_START_EVT_SOURCE.NORMAL
    }), getAppBody().addClass("invisible").append(this.getRootViewController().getView().getRoot()).append(gClickShield.getRoot()).addClass("futweb").addClass(isPhone() ? enums.UIDeviceTypes.PHONE : enums.UIDeviceTypes.LANDSCAPE), this._UINotificationLayer = new controllers.views.NotificationLayer, this._UINotificationLayer.init(), getAppBody().append(this._UINotificationLayer.getView().getRoot()), this.setupLocalization())
}, EASFCApp.prototype._assignExternalData = function _assignExternalData() {
    var t = getStorage().getItem(STORAGE_DEEP_LINK_KEY);
    t && (services.URL.setDeepLinkURL(t), getStorage().removeItem(STORAGE_DEEP_LINK_KEY));
    var i = getStorage().getItem(STORAGE_SHOW_OFF_KEY);
    i && (repositories.Squad.unauthenticatedShowOffId = i, getStorage().removeItem(STORAGE_SHOW_OFF_KEY))
}, EASFCApp.prototype.showSplashScreen = function showSplashScreen() {
    isChrome() || navigator.splashscreen.show()
},EASFCApp.prototype.hideSplashScreen = function hideSplashScreen() {
    isChrome() || setTimeout(function () {
        navigator.splashscreen.hide()
    }, this.getSplashScreenHideDelay())
},EASFCApp.prototype.getSplashScreenHideDelay = function getSplashScreenHideDelay() {
    return SPLASH_SCREEN_HIDE_DELAY
},EASFCApp.prototype.setUnauthenticatedShowOffId = function setUnauthenticatedShowOffId(id) {
    repositories.Squad.unauthenticatedShowOffId = id
},EASFCApp.prototype.getDefaultDispatcher = function getDefaultDispatcher() {
    return this._defaultDispatcher
},EASFCApp.prototype.getKeyboardEventController = function getKeyboardEventController() {
    return this._keyboardEventController
},EASFCApp.prototype._loadConfig = function _loadConfig() {
    accessobjects.Configuration.getLocalConfig().observe(this, function _onLocalConfigLoaded(t, data) {
        t.unobserve(this), utils.Debug.Assert(data.success, "Configuration file failed to load."), data.success && (gConfigurationModel.setDataObject(data.response), this._loadRemoteConfig())
    })
},EASFCApp.prototype._loadRemoteConfig = function _loadRemoteConfig() {
    $.ajaxSetup({timeout: gConfigurationModel.getConfigNumber(models.ConfigurationModel.KEY_REQUEST_TIMEOUT)}), utils.JS.isValid(this._configDelegate) || (this._configDelegate = accessobjects.Configuration.getRemoteConfig(), this._configDelegate.observe(this, function _onGetRemoteConfigComplete(t, data) {
        t.unobserve(this), this._configDelegate = null, utils.Debug.Assert(data.success, "Remote configuration file failed to load."), data.success && (gConfigurationModel.setRemoteConfigData(data.response), services.PIN.setConfigs(gConfigurationModel.getConfigObject(models.ConfigurationModel.KEY_PIN))), this.appBoot()
    }))
},EASFCApp.prototype.getLatestRemoteConfig = function getLatestRemoteConfig() {
    utils.JS.isValid(this._configDelegate) || (this._configDelegate = accessobjects.Configuration.getRemoteConfig(), this._configDelegate.observe(this, function _onGetLatestRemoteConfigComplete(t, data) {
        t.unobserve(this), this._configDelegate = null, utils.Debug.Assert(data.success, "Remote configuration file failed to load."), data.success && (gConfigurationModel.setRemoteConfigData(data.response), services.PIN.setConfigs(gConfigurationModel.getConfigObject(models.ConfigurationModel.KEY_PIN)), this._checkAssetsVersion(), gClientUpdate.pollForUpdates(function () {
            this.getRootViewController().showClientUpdateView()
        }.bind(this)))
    }))
},EASFCApp.prototype.getLatestServerRarity = function getLatestServerRarity() {
    services.Configuration.loadRarityData()
},EASFCApp.prototype._checkForDynamicUpdate = function _checkForDynamicUpdate() {
    gClientUpdate.hasUpdate() ? gClientUpdate.getDownloadedPatchVersion(function _loadPatch(t) {
        gClientUpdate.isPatchDownloaded(t) ? gClientUpdate.loadPatch(this.appBoot.bind(this)) : this.appBoot()
    }.bind(this)) : this.appBoot()
},EASFCApp.prototype._gotoLanguageSelect = function _gotoLanguageSelect() {
    getAppBody().removeClass("invisible"), this.getRootViewController().showLanguageSelectView(), this.hideSplashScreen()
},EASFCApp.prototype.setupLocalization = function setupLocalization() {
    function _onGetLocaleSuccess(response) {
        var locale = response.value;
        services.Localization.setLocaleFromString(locale), services.Localization.requestLocalization().observe(this, this._onLocalizationLoaded)
    }

    function _onGetLocaleFail() {
        this._gotoLanguageSelect()
    }

    var t = getStorage().getItem(STORAGE_LOCALE_KEY);
    utils.JS.isEmpty(t) ? isChrome() ? this._gotoLanguageSelect() : (gClickShield.showShield(components.ClickShield.SHIELD.LOADING), navigator.globalization.getPreferredLanguage(function _onGetLanguageNameSuccess(response) {
        var language = response.value.split("-")[0];
        services.Localization.isLanguageSupported(language) ? (services.Localization.setLocaleFromLanguage(language), services.Localization.requestLocalization().observe(this, this._onLocalizationLoaded)) : navigator.globalization.getLocaleName(_onGetLocaleSuccess.bind(this), _onGetLocaleFail.bind(this))
    }.bind(this), function _onGetLanguageNameFail() {
        navigator.globalization.getLocaleName(_onGetLocaleSuccess.bind(this), _onGetLocaleFail.bind(this))
    }.bind(this))) : (gClickShield.showShield(components.ClickShield.SHIELD.LOADING), services.Localization.setLocaleFromString(t), services.Localization.requestLocalization().observe(this, this._onLocalizationLoaded))
},EASFCApp.prototype._onLocalizationLoaded = function _onLocalizationLoaded(t, response) {
    t.unobserve(this), utils.Debug.Assert(response.success, "Localization file failed to load."), response.success ? this.onLanguageLoaded() : this._gotoLanguageSelect()
},EASFCApp.prototype.onLanguageLoaded = function onLanguageLoaded() {
    gClickShield.isShowing(components.ClickShield.SHIELD.LOADING) && gClickShield.hideShield(components.ClickShield.SHIELD.LOADING), function _skipToLicenseScreen() {
        gPopupClickShield.init(),
            this.getRootViewController().showLicenseView(), this.getImgPreloader().preloadImages(["images/PackAnimation/PackAnimationVignetteLandscape.png", "images/PackAnimation/PackAnimationVignette.png", "images/PackAnimation/PackAnimationBronze@1x.png", "images/PackAnimation/PackAnimationBronze@2x.png", "images/PackAnimation/PackAnimationBronze@3x.png", "images/PackAnimation/PackAnimationFUTChamps@1x.png", "images/PackAnimation/PackAnimationFUTChamps@2x.png", "images/PackAnimation/PackAnimationFUTChamps@3x.png", "images/PackAnimation/PackAnimationGold@1x.png", "images/PackAnimation/PackAnimationGold@2x.png", "images/PackAnimation/PackAnimationGold@3x.png", "images/PackAnimation/PackAnimationLegends@1x.png", "images/PackAnimation/PackAnimationLegends@2x.png", "images/PackAnimation/PackAnimationLegends@3x.png", "images/PackAnimation/PackAnimationLoan@1x.png", "images/PackAnimation/PackAnimationLoan@2x.png", "images/PackAnimation/PackAnimationLoan@3x.png", "images/PackAnimation/PackAnimationPoints@1x.png", "images/PackAnimation/PackAnimationPoints@2x.png", "images/PackAnimation/PackAnimationPoints@3x.png", "images/PackAnimation/PackAnimationSBC@1x.png", "images/PackAnimation/PackAnimationSBC@2x.png", "images/PackAnimation/PackAnimationSBC@3x.png", "images/PackAnimation/PackAnimationSilver@1x.png", "images/PackAnimation/PackAnimationSilver@2x.png", "images/PackAnimation/PackAnimationSilver@3x.png", "images/PackAnimation/PackAnimationSpecial@1x.png", "images/PackAnimation/PackAnimationSpecial@2x.png", "images/PackAnimation/PackAnimationSpecial@3x.png", "images/PackAnimation/PackAnimationStarter@1x.png", "images/PackAnimation/PackAnimationStarter@2x.png", "images/PackAnimation/PackAnimationStarter@3x.png", "images/PackAnimation/PackAnimationStoryMode@1x.png", "images/PackAnimation/PackAnimationStoryMode@2x.png", "images/PackAnimation/PackAnimationStoryMode@3x.png"]), gClientUpdate.pollForUpdates(function () {
            this.getRootViewController().showClientUpdateView()
        }.bind(this))
    }.call(this), function _finishInitAndShowApp() {
        this._initComplete = !0, getAppBody().removeClass("invisible"), getAppRoot().setAttribute("lang", services.Localization.getLocale().language), this.hideSplashScreen()
    }.call(this)
},EASFCApp.prototype.isVerboseLoggingEnabled = function isVerboseLoggingEnabled() {
    return gConfigurationModel.getConfigBoolean(models.ConfigurationModel.KEY_VERBOSE_LOGGING)
},EASFCApp.prototype.getImgPreloader = function getImgPreloader() {
    return this._imgPreloader
},EASFCApp.prototype._checkAssetsVersion = function _checkAssetsVersion() {
    var t = gUserSettingsModel.getAssetsVersion(),
        i = gConfigurationModel.getConfigNumber(models.ConfigurationModel.KEY_ASSETS_VERSION);
    t < i && utils.ResourceManager.ClearCache(function () {
        gUserSettingsModel.setAssetsVersion(i)
    }, function () {
        utils.Debug.Assert(!1, "Failed to clear resource cache!")
    })
},EASFCApp.prototype.getStorage = function getStorage() {
    return localStorage
},NamespaceManager.Register("utils"),utils.OriginStore = function () {
    function OriginStoreUtil() {
        this.onCheckout = new UTObservable, this.storeLoaded = !1
    }

    var t = null;
    return OriginStoreUtil.prototype.init = function init(i) {
        var locale = services.Localization.getLocale().toBCPString().toLowerCase(), s = document.createElement("link");
        s.href = gConfigurationModel.getConfigString(models.ConfigurationModel.KEY_ORIGIN_CSS), s.rel = "stylesheet", s.type = "text/css", document.head.appendChild(s);
        var o = document.createElement("script");
        o.src = gConfigurationModel.getConfigString(models.ConfigurationModel.KEY_ORIGIN_JS), o.onload = function () {
            t = new window.EA.ODC.StorePlugin({
                host: gConfigurationModel.getConfigString(models.ConfigurationModel.KEY_ORIGIN_HOST),
                locale: locale,
                geoLocate: !0,
                useDefaultLanguage: !1,
                profileId: gConfigurationModel.getConfigString(models.ConfigurationModel.KEY_ORIGIN_PROFILE),
                offerQuery: {
                    masterTitle: gConfigurationModel.getConfigString(models.ConfigurationModel.KEY_ORIGIN_MASTER_TITLE),
                    platform: "pc-download",
                    gameType: "currency"
                },
                events: {
                    onCheckoutModalClose: function () {
                        this._onCheckoutSuccess()
                    }.bind(this)
                }
            }), this.storeLoaded = !0,
            utils.JS.isFunction(i) && i()
        }.bind(this), document.head.appendChild(o)
    }, OriginStoreUtil.prototype.openStore = function openStore() {
        t.open()
    }, OriginStoreUtil.prototype._onCheckoutSuccess = function _onCheckoutSuccess() {
        this.onCheckout.notify()
    }, new OriginStoreUtil
}(),views.FIFAHeader = function () {
    FUIView.call(this), this._generate()
},utils.JS.inherits(views.FIFAHeader, FUIView),views.FIFAHeader.prototype._generate = function _generate() {
    if (!this._generated) {
        var t = document.createElement("div");
        t.setAttribute("id", "FIFAHeader"), this.__fifaLink = document.createElement("a"), this.__fifaLink.classList.add("fifa"), t.appendChild(this.__fifaLink), this.__easportsLink = document.createElement("a"), this.__easportsLink.setAttribute("target", "blank"), this.__easportsLink.classList.add("eaSports"), t.appendChild(this.__easportsLink), this.__root = t, this._generated = !0
    }
},views.FIFAHeader.prototype.destroyGeneratedElements = function destroyGeneratedElements() {
    $(this.__root).off().remove(), this.__root = null, this.__fifaLink = null, this.__easportsLink = null
},views.FIFAHeader.prototype.getRoot = function getRoot() {
    return $(this.__root)
},views.FIFAHeader.prototype.getRootElement = function getRootElement() {
    return this.__root
},views.FIFAHeader.prototype.render = function renderText(text, t, i) {
    this.__fifaLink.textContent = text, this.__fifaLink.href = t, this.__easportsLink.href = i
},controllers.FIFAHeader = function () {
    FUIViewController.call(this)
},utils.JS.inherits(controllers.FIFAHeader, FUIViewController),controllers.FIFAHeader.prototype._getViewInstanceFromData = function _getViewInstanceFromData() {
    return new views.FIFAHeader
},controllers.FIFAHeader.prototype.setup = function setup(t) {
    var text = t ? services.Localization.localize("preload.fifaheader.back") : "Back to FIFA",
        link = t ? services.Localization.localize("preload.fifaheader.url") : "/fifa/ultimate-team/features",
        i = gConfigurationModel.getConfigString(models.ConfigurationModel.KEY_RESOURCE_ROOT), s = i + link;
    this.getView().render(text, s, i)
},utils.JS.inherits(EASFCApp_FUTWeb, EASFCApp),EASFCApp_FUTWeb.prototype.init = function init() {
    try {
        localStorage.setItem("storage", ""), localStorage.removeItem("storage"), this._storageImpl = localStorage
    } catch (t) {
        this._storageImpl = new UTStorageAlternative
    }
    this.superclass(), getAppRoot().setAttribute("platform", "web")
},EASFCApp_FUTWeb.prototype.onLanguageLoaded = function onLanguageLoaded() {
    if (this.superclass(), !this._orientationWarningMessage) {
        this._orientationWarningMessage = new controllers.views.popups.Dialog("popup.rotate.body", "popup.rotate.title", enums.UIDialogTypes.ROTATE), this._orientationWarningMessage.init(), this._orientationWarningMessage.viewWillAppear(), getKeyboardEventController().unregisterDelegate(this._orientationWarningMessage, UTKeyboardEventController.PRIORITY.POPUP);
        var t = $(document.createElement("div"));
        t.addClass("ui-orientation-warning"), t.append(this._orientationWarningMessage.getView().getRoot()), getAppBody().append(t), this._orientationWarningMessage.viewDidAppear()
    }
    gConfigurationModel.getConfigBoolean(models.ConfigurationModel.KEY_FUTWEB_MAINTENANCE) && (window.top.location = "./maintenance/"), utils.OriginStore.init()
},EASFCApp_FUTWeb.prototype.appBoot = function appBoot() {
    this.superclass();
    var t = window.preloadStrings, i = utils.JS.isValid(t);
    i && services.Localization.addLocalizationStrings(t), this._FIFAHeader.setup(i), getAppBody().addClass("with-fifa-header").prepend(this._FIFAHeader.getView().getRoot())
},EASFCApp_FUTWeb.prototype.getAppIdentifier = function getAppIdentifier() {
    return "com.ea.web.fifaultimate"
},EASFCApp_FUTWeb.prototype.getSellId = function getSellId() {
    return "FUT19WEB"
},EASFCApp_FUTWeb.prototype.getStorage = function getStorage() {
    return this._storageImpl
},EASFCApp_FUTWeb.prototype.setupLocalization = function setupLocalization() {
    var t = getStorage().getItem(STORAGE_LOCALE_KEY);
    if (utils.JS.isEmpty(t)) {
        var i = getUrlVars();
        i.language && services.Localization.setLocaleFromLanguage(i.language),
            i.region ? services.Localization.setLocaleFromRegion(i.region) : services.Localization.setLocaleFromLanguage(enums.Language.ENGLISH)
    } else services.Localization.setLocaleFromString(t);
    services.Localization.getLocale();
    gClickShield.showShield(components.ClickShield.SHIELD.LOADING), services.Localization.requestLocalization().observe(this, this._onLocalizationLoaded)
};
var _appMain = null;