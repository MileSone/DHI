/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
'use strict';

/**
 * Example of Require.js boostrap javascript
 */

requirejs.config(
        {
            baseUrl: 'js',
            // Path mappings for the logical module names
            paths:
                    //injector:mainReleasePaths
                            {
                                'knockout': 'libs/knockout/knockout-3.4.0.debug',
                                'jquery': 'libs/jquery/jquery-3.1.0',
                                'jqueryui-amd': 'libs/jquery/jqueryui-amd-1.12.0',
                                'promise': 'libs/es6-promise/promise-1.0.0',
                                'hammerjs': 'libs/hammer/hammer-2.0.8',
                                'ojdnd': 'libs/dnd-polyfill/dnd-polyfill-1.0.0',
                                'ojs': 'libs/oj/v2.1.0/debug',
                                'ojL10n': 'libs/oj/v2.1.0/ojL10n',
                                'ojtranslations': 'libs/oj/v2.1.0/resources',
                                'text': 'libs/require/text',
                                'signals': 'libs/js-signals/signals',
                                'mcs': 'mcs/mcs',
                                'mcs_config': 'mcs/oracle_mobile_cloud_config',
                                'geometry': 'http://maps.googleapis.com/maps/api/js?key=AIzaSyDXJNvjUhtIOb5ldffE796Sf0iOgkRO4FI'
                            },
                    // Shim configurations for modules that do not expose AMD
                    shim:
                            {
                                'jquery':
                                        {
                                            exports: ['jQuery', '$']
                                        }
                            }
                    ,
                    config: {
                        ojL10n: {
                            merge: {
                                'ojtranslations/nls/ojtranslations': 'resources/nls/lang_Label'
                            }
                        }
                    }
                }
        );

        /**
         * A top-level require call executed by the Application.
         * Although 'ojcore' and 'knockout' would be loaded in any case (they are specified as dependencies
         * by the modules themselves), we are listing them explicitly to get the references to the 'oj' and 'ko'
         * objects in the callback
         */
        require(['ojs/ojcore', 'knockout', 'jquery', 'appController', 'mbe/mbe', 'util/appui', 'viewModels/geofence', 'viewModels/asset', 'mcs_config', 'ojs/ojknockout',
            'ojs/ojmodule', 'ojs/ojrouter', 'ojs/ojnavigationlist', 'jqueryui-amd/widgets/dialog', 'ojs/ojbutton', 'mcs',
            'ojs/ojinputtext', 'ojs/ojcollapsible', 'data/gloableVars','data/gloableVars'],
                function (oj, ko, $, app, mbe, ui, geofence,asset) { // this callback gets executed when all required modules are loaded
                    var getTranslation = oj.Translations.getResource;//oj.Translations.getTranslatedString;
                    var router = app.router;

                    function MainViewModel() {
                        var self = this;
                        self.router = router;
                        self.navDataSource = app.navDataSource;
                        self.navChangeHandler = app.navChangeHandler;
                        self.toggleDrawer = app.toggleDrawer;

                        self.isLoggedIn = ko.observable(true);
                        var username = "mingyao.zhu@oracle.com";
                        var password = "Alegend2018";

                        self.mbe_baseUrl = ko.observable("");
                        self.mbe_basicAuth_backendId = ko.observable("");
                        self.mbe_basicAuth_anonymousToken = ko.observable("");

                        self.init = function () {
                            var backends = new Array(mcs_config.mobileBackends);
                            if (backends.length > 0) {
                                var key = Object.keys(backends[0])[0];
                                var backendId = backends[0][key].authorization.basicAuth.backendId,
                                        anonymousToken = backends[0][key].authorization.basicAuth.anonymousToken;
                                self.mbe_baseUrl(backends[0][key].baseUrl);
                                self.mbe_basicAuth_backendId(backendId);
                                self.mbe_basicAuth_anonymousToken(anonymousToken);
                            }
                        };

                        self.onPageReady = function () {

                        };

                        self.saveMCSconfig = function () {
                            var jsonObj = JSON.stringify(mcs_config.mobileBackends);
                            var backends = new Array(mcs_config.mobileBackends);
                            if (backends.length > 0) {
                                var key = Object.keys(backends[0])[0];
                                backends[0][key].baseUrl = self.mbe_baseUrl();
                                backends[0][key].authorization.basicAuth.backendId = self.mbe_basicAuth_backendId();
                                backends[0][key].authorization.basicAuth.anonymousToken = self.mbe_basicAuth_anonymousToken();

                                var storage = window.localStorage;
                                storage.setItem("mbe_baseUrl", self.mbe_baseUrl());
                                storage.setItem("mbe_basicAuth_backendId", self.mbe_basicAuth_backendId());
                                storage.setItem("mbe_basicAuth_anonymousToken", self.mbe_basicAuth_anonymousToken());

                                self.logout();
                            }
                        };


                        self.login = function (data, event) {
                            //    mbe.authenticate(self.username(), self.password(), self.loginSuccess, self.loginFailure);
                            mbe.authenticate(username, password).then(self.loginSuccess, self.loginFailure);
                            return true;
                        };

                        self.loginSuccess = function (response, data) {
                            console.log(response);


                            ui.showJQDialog("Login Successfully!", null, null, "Login", true).then(goHomeAfterLogin);

                            function goHomeAfterLogin() {
                                asset.initModule();
                                isloginedin = true;
                            }
                        };

                        self.loginFailure = function (statusCode, data) {
                            mbe.isLoggedIn = false;
                            self.isLoggedIn(mbe.isLoggedIn);
//                            alert("Login failed! statusCode:" + statusCode + " Message: " + JSON.stringify(data));
                        };

                        self.logout = function () {
                            mbe.logout();
                            mbe.isLoggedIn = false;
                            self.isLoggedIn(false);
                            //    oj.Router.rootInstance.go('dashboard');
                            window.location.reload(true);
                        };

                        self.init();
                        self.login();
                    }

                    oj.Router.sync().then(
                            function () {
                                // bind your ViewModel for the content of the whole page body.
                                ko.applyBindings(new MainViewModel(), document.getElementById('globalBody'));
                                $('#globalBody').show();
                            },
                            function (error) {
                                oj.Logger.error('Error in root start: ' + error.message);
                            }
                    );

                }
        );
