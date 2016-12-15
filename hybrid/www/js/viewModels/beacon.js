/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * beacon module
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'mbe/mbe', 'ojs/ojknockout', 'ojs/ojbutton', 'ojs/ojinputtext', 'ojs/ojswitch'
], function (oj, ko, $, mbe) {
    /**
     * The view model for the main content view template
     */
    function beaconContentViewModel() {
        var self = this;
        self.message = ko.observable();
        self.isChecked = ko.observable(false);
        self.title = "Notification";
        self.text = "reach :";
        self.loadReady = ko.observable(false);
        self.manualYN = ko.observable(false);   // whether load automatically from MCS
        self.uuid = ko.observable('fda50693-a4e2-4fb1-afcf-c6eb07647825');
        self.major = ko.observable(10004);
        self.minor = ko.observable(5178);
        self.beaconRegionArr = [];  // beacon options
        self.beaconRegions = [];


        self.map;
        var marker;
        var customerIcons = ["img/icon_map_covered_0.png",
            "img/icon_map_covered_2.png"];

        var stop = null;
        var centerd = null;
      


        self.save = function () {
            var storage = window.localStorage;
            storage.setItem("beacon_uuid", self.uuid());
            storage.setItem("beacon_major", self.major());
            storage.setItem("beacon_minor", self.minor());
        };

        self.handleAttached = function (info) {
            // Implement if needed
            stop = null;
            if (mbe.isAuthorized)
            {
                init();
            }
        };

            self.handleDetached = function (info) {

            stop = 1;
        };
        
        self.startMonitoring = function () {
            self.message("booting...");
            if (self.manualYN())
            {
                self.beaconRegionArr = [];
                self.beaconRegionArr.push({id: 1, name: 'Tz13182', uuid: self.uuid(), major: self.major(), minor: self.minor(), title: self.title, text: self.text});
            }
            self.beaconRegions = [];

            var delegate = new cordova.plugins.locationManager.Delegate();

            /*
             * {"eventType":"didDetermineStateForRegion","region":{"identifier":"Desay iBeacon","uuid":"fda50693-a4e2-4fb1-afcf-c6eb07647825","major":"10004","minor":"5178","typeName":"BeaconRegion"},"state":"CLRegionStateOutside"}
             * {"eventType":"didDetermineStateForRegion","region":{"identifier":"Desay iBeacon","uuid":"fda50693-a4e2-4fb1-afcf-c6eb07647825","major":"10004","minor":"5178","typeName":"BeaconRegion"},"state":"CLRegionStateInside"}
             */
            delegate.didDetermineStateForRegion = function (pluginResult) {
                console.log('didDetermineStateForRegion: ' + JSON.stringify(pluginResult));
                /*
                 alert('didDetermineStateForRegion: ' + JSON.stringify(pluginResult));
                 if (pluginResult.state === 'CLRegionStateOutside') {
                 
                 }
                 */
            };

            delegate.didStartMonitoringForRegion = function (pluginResult) {
                console.log('didStartMonitoringForRegion:', pluginResult);
            };

            delegate.didRangeBeaconsInRegion = function (pluginResult) {
                console('didRangeBeaconsInRegion: ' + JSON.stringify(pluginResult));
            };

            delegate.didExitRegion = function (pluginResult) {
                console.log("didExitRegion: " + JSON.stringify(pluginResult));
                self.message("left Beacon area！");
                alert("Bye~");
            };

            /*
             * didEnterRegion: {"eventType":"didEnterRegion","region":{"identifier":"Desay iBeacon","uuid":"fda50693-a4e2-4fb1-afcf-c6eb07647825","major":"10004","minor":"5178","typeName":"BeaconRegion"}}
             */
            delegate.didEnterRegion = function (pluginResult) {
                console.log("didEnterRegion: " + JSON.stringify(pluginResult));
                self.message("entering Beacon area...");
                for (var i = 0; i < self.beaconRegionArr.length; i++)
                {
                    var it = self.beaconRegionArr[i];
                    if (it.uuid.toUpperCase() === pluginResult.region.uuid.toUpperCase() &&
                            (it.major.toString() === pluginResult.region.major.toString()) &&
                            (it.minor.toString() === pluginResult.region.minor.toString()))
                    {
                        alert(it.text);
                        cordova.plugins.notification.local.schedule({
                            title: it.title,
                            text: it.text,
                            data: {type: "beacon"}
                        });
                        cordova.plugins.notification.local.on("click", function (notification) {
                            //    console.log(notification.data.type);
                        });
                        navigator.vibrate(2000);
                        break;
                    }
                }

            };

            cordova.plugins.locationManager.setDelegate(delegate);
            
            // required in iOS 8+
            if (window.cordova.platformId === 'ios') {
                cordova.plugins.locationManager.requestAlwaysAuthorization();
            } else {
                cordova.plugins.locationManager.requestWhenInUseAuthorization();
            }

            for (var i = 0; i < self.beaconRegionArr.length; i++)
            {
                var it = self.beaconRegionArr[i];
                var beaconRegion = new cordova.plugins.locationManager.BeaconRegion
                        (it.name, it.uuid, it.major, it.minor);
                self.beaconRegions.push(beaconRegion);
                cordova.plugins.locationManager.startMonitoringForRegion(beaconRegion)
                        .fail(console.error)
                        .done();
            }
            self.message("data："+self.beaconRegions.length);
        };

        self.stopMonitoring = function () {
            console.log("stopMonitoring...");
            self.message("stoped...");
            for (var i = 0; i < self.beaconRegions.length; i++) {
                cordova.plugins.locationManager.stopMonitoringForRegion(self.beaconRegions[i])
                        .fail(function (e) {
                            console.error(e);
                        })
                        .done();
            }
            self.message("Stop！");
        };

        function findBeacon(beaconObj)
        {
            return (beaconObj.beaconID).toUpperCase() === self.currentBeaconId.toUpperCase();
        }

        function getAllBeacons() {
            var deferred = $.Deferred();
            mbe.invokePlatformRequest("location/devices/query", "POST", {protocol: "iBeacon", attributes: {owner: "ko"}}, successCallback, errorCallback);
            return deferred.promise();

            function successCallback(status, data) {
                // console.log(status+': '+JSON.stringify(data));
                var items = data.items;
                self.beaconRegionArr = [];
                for (var i = 0; i < items.length; i++)
                {
                    var it = items[i];
                    if (it.beacon && it.beacon.iBeacon)
                    {
                        var _title = self.title, _text = self.text;
                        if (it.attributes && it.attributes.text) {
                            _text = it.attributes.text;
                        }
                        if (it.attributes && it.attributes.title) {
                            _title = it.attributes.title;
                        }
                        self.beaconRegionArr.push({id: it.id, name: it.name, uuid: it.beacon.iBeacon.uuid, major: it.beacon.iBeacon.major, minor: it.beacon.iBeacon.minor,
                            title: _title, text: _text});
                    }
                }
                self.loadReady(true);
                self.manualYN(false);
                deferred.resolve(status, data);
            }

            function errorCallback(status, data) {
                console.log("Load devices from MCS fail! " + status + ': ' + JSON.stringify(data));
                self.loadReady(true);
                self.manualYN(true);
                deferred.reject(status, data);
            }
        }

        function initModule() {
            console.log("Done loading all the beacons!");
            var storage = window.localStorage;
            var uuid = storage.getItem("beacon_uuid");
            var major = storage.getItem("beacon_major");
            var minor = storage.getItem("beacon_minor");
            if (major)
            {
                self.major(storage.getItem("beacon_major"));
            }
            if (minor)
            {
                self.minor(storage.getItem("beacon_minor"));
            }
            if (uuid)
            {
                self.uuid(storage.getItem("beacon_uuid"));
            }
            //    self.startMonitoring();
        }


        function init() {
            
            initMap();
            
            
            
            
            
            getAllBeacons().then(initModule, initModule);
            $("#switch").ojSwitch({
                'optionChange': function (event, data) {
                    if (data.option === 'value')
                    {
                        if (data.value) {
                            self.startMonitoring();
                        } else {
                            self.stopMonitoring();
                        }
                    }
                }
            });
        }
        
        
        
        function initMap() {
            self.map = new google.maps.Map(document.getElementById('map3'), {
                center: {
                    lat: 38.887733,
                    lng: 121.549099
                },
                gestureHandling: 'greedy',
                fullscreenControl: true,
                zoom: 15
            });

            google.maps.event.addListener(self.map, "rightclick", function (event) {
                var lat = event.latLng.lat();
                var lng = event.latLng.lng();
                // populate yor box/field with lat, lng
                alert("Lat=" + lat + "; Lng=" + lng);
            });

            self.geocoder = new google.maps.Geocoder();

            self.getCurrentLocation();
            runnableGetLocation();
        }
        ;
        
        
        self.getCurrentLocation = function () {
            //Tracking users position
            var options = {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0
            };

            // Try HTML5 geolocation.
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(self.getCurrentLocationSuccess, self.getCurrentLocationError, options);
            } else {
                // Browser doesn't support Geolocation
                handleLocationError(false, self.infoWindow, self.map.getCenter());
            }
        };

        self.getCurrentLocationSuccess = function (position) {
            if (marker != null) {
                marker.setMap(null);
            }

            deviceEnableSaveC = false;
            deviceEnableSaveP = false;

            //console.log('get current location successfully.');

            var pos = {
                lat: position.coords.latitude + 0.00059,
                lng: position.coords.longitude + 0.004332
            };


            // Create marker 
            marker = new google.maps.Marker({
                map: self.map,
                position: pos,
                title: 'Current Position',
                icon: customerIcons[0]
            });
            marker.addListener('click', self.toggleBounce);


            if (centerd === null) {
                self.map.setCenter(pos);
                centerd = 1;
            }
        };

        function runnableGetLocation() {
            if (stop) {
            } else {
                var timer = setTimeout(function () {
                    self.getCurrentLocation();
                    runnableGetLocation();
                }, 5000);
            }
        }
        ;


        self.toggleBounce = function () {
            if (marker.getAnimation() !== null) {
                marker.setAnimation(null);
            } else {
                marker.setAnimation(google.maps.Animation.BOUNCE);
            }
        };

        self.getCurrentLocationError = function (error) {
            console.log('get current location fail.');
            //    self.map.setZoom(15);
            //    self.map.setCenter({lat: 25.038638111097974, lng: 121.55573844909668});
            //  handleLocationError(true, infoWindow, map.getCenter());
        };
    }

    return new beaconContentViewModel();
});
