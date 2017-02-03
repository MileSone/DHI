/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * geofence module, 'googleMap'
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'mbe/mbe', 'ojs/ojknockout', 'ojs/ojbutton', 'ojs/ojinputtext', 'geometry', 'ojs/ojinputnumber', 'data/gloableVars'
], function (oj, ko, $, mbe) {

    function geofenceContentViewModel() {
        var self = this;
        self.count = 0;
        // Below are a subset of the ViewModel methods invoked by the ojModule binding
        // Please reference the ojModule jsDoc for additionaly available methods.
        self.makerOptions = [];
        self.map;
        self.infoWindow;
        self.siteID = 0;
        var myCircle;
        var marker;
        var customerIcons = ["img/icon_map_covered_0.png",
            "img/icon_map_covered_2.png"];


        //inputnum
        self.currentValue = ko.observable(4);
        self.max = ko.observable(1000);
        self.min = ko.observable(0);
        self.step = ko.observable(1);
        var stop = null;
        var centerd = null;

        self.initModule = function () {
            var deferred = $.Deferred();
            try {
                mbe.invokePlatformRequest("location/places/query", "POST", {"label": "ko"}, successCallback, errorCallback);
                return deferred.promise();
            } catch (e) {
            }
            ;

            function successCallback(status, data) {
                var items = data.items;
                for (var i = 0; i < items.length; i++)
                {
                    var it = items[i];
                    if (it.address)
                    {
                        if (it.address.gpsPolygon) {
                            var areaPoint = it.address.gpsPolygon.vertices;
                            self.makerOptions.push({id: it.id, coords: {lat: areaPoint[0].latitude, lng: areaPoint[0].longitude}, title: it.name});
                        } else if (it.address.gpsCircle) {
                            var areaPoint = it.address.gpsCircle;
                            self.makerOptions.push({id: it.id, coords: {lat: areaPoint.latitude, lng: areaPoint.longitude}, title: it.name});
                        }
                    }
                }
                // Create a marker and set its position.
                var iconObj = {url: customerIcons[1], scaledSize: new google.maps.Size(31, 45)};
                var markers = [];
                self.makerOptions.forEach(function (it) {
                    var marker = new google.maps.Marker({
                        map: self.map,
                        position: it.coords,
                        title: it.title,
                        icon: iconObj
                    });
//Create and open InfoWindow.  
                    var infoWindow = new google.maps.InfoWindow();

                    google.maps.event.addListener(marker, "click", function (event) {
                        self.siteID = it.id;
                        self.map.setCenter(marker.getPosition());
                        infoWindow.setContent("<div style = 'width:200px;min-height:40px;color:black; font-weight: 500;'>" + it.title + "</div>");
                        infoWindow.open(self.map, marker);
                    });
                });
                deferred.resolve(status, data);
            }

            function errorCallback(status, data) {
                console.log("Load placess from MCS fail! " + status + ': ' + JSON.stringify(data));
                deferred.reject(status, data);
            }

//            function  addNewMarker(obj) {
//                // search location maker
//                var _p = new google.maps.LatLng(obj.latitude, obj.longitude);
//
//                self.map.setCenter(_p);
//                var marker = new google.maps.Marker({
//                    position: _p,
//                    map: self.map,
//                    icon: obj.icon,
//                    address: obj.address,
//                    animation: google.maps.Animation.DROP,
//                    addressSt: obj.addressSt,
//                    city: obj.city,
//                    state: obj.state,
//                    zipcode: obj.zipcode,
//                    country: obj.country,
//                    latitude: obj.latitude,
//                    longitude: obj.longitude
//                });
//
//
//                self.saveMarkersArray.push(marker);
//                //console.log(mapController.saveMarkersArray);
//                self.markersArray.push(marker);
//                self.attachMessage(marker, obj);
//            }
        };


        function initMap() {
            self.map = new google.maps.Map(document.getElementById('map'), {
                center: {
                    lat: 37.503808,
                    lng: 127.024075
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

            self.getCurrentLocation();
            runnableGetLocation();
        }
        ;

        self.getCurrentLocation = function () {
            
            var options = {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 2000
            };
            // Try HTML5 geolocation.
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(self.getCurrentLocationSuccess, self.getCurrentLocationError,options);
            } else {
                // Browser doesn't support Geolocation
                handleLocationError(false, self.infoWindow, self.map.getCenter());
            }
        };

        self.getCurrentLocationSuccess = function (position) {
            if (myCircle != null) {
                myCircle.setMap(null);
            }

            if (marker != null) {
                marker.setMap(null);
            }

//            console.log('get current location successfully.');

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
            // Add circle overlay and bind to marker
            myCircle = new google.maps.Circle({
                map: self.map,
                radius: self.currentValue() * 100, // 10 miles in metres * 1609.3
                fillColor: '#6691ff',
                strokeColor: "#0022ee",
                strokeOpacity: 0.75,
                strokeWeight: 1,
                fillOpacity: 0.35
            });
            myCircle.bindTo('center', marker, 'position');
            if(centerd === null){
                 self.map.setCenter(pos);
                 centerd = 1;
            }
        };

        function runnableGetLocation() {
            if (stop) {

            } else {
                var timer = setTimeout(function () {
//                console.log("refreashed");
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
            console.log(error);
            //    self.map.setZoom(15);
            //    self.map.setCenter({lat: 25.038638111097974, lng: 121.55573844909668});
            //  handleLocationError(true, infoWindow, map.getCenter());
        };

        function handleLocationError(browserHasGeolocation, infoWindow, pos) {
            infoWindow.setPosition(pos);
            infoWindow.setContent(browserHasGeolocation ?
                    'Error: The Geolocation service failed.' :
                    'Error: Your browser doesn\'t support geolocation.');
        }


        /**
         * Optional ViewModel method invoked when this ViewModel is about to be
         * used for the View transition.  The application can put data fetch logic
         * here that can return a Promise which will delay the handleAttached function
         * call below until the Promise is resolved.
         * @param {Object} info - An object with the following key-value pairs:
         * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
         * @param {Function} info.valueAccessor - The binding's value accessor.
         * @return {Promise|undefined} - If the callback returns a Promise, the next phase (attaching DOM) will be delayed until
         * the promise is resolved
         */
        self.handleActivated = function (info) {
            // Implement if needed

        };

        /**
         * Optional ViewModel method invoked after the View is inserted into the
         * document DOM.  The application can put logic that requires the DOM being
         * attached here.
         * @param {Object} info - An object with the following key-value pairs:
         * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
         * @param {Function} info.valueAccessor - The binding's value accessor.
         * @param {boolean} info.fromCache - A boolean indicating whether the module was retrieved from cache.
         */
        self.handleAttached = function (info) {
            // Implement if needed
            stop = null;
            initMap();
            if (isloginedin)
            {
                self.initModule();
            }
        };


        /**
         * Optional ViewModel method invoked after the bindings are applied on this View. 
         * If the current View is retrieved from cache, the bindings will not be re-applied
         * and this callback will not be invoked.
         * @param {Object} info - An object with the following key-value pairs:
         * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
         * @param {Function} info.valueAccessor - The binding's value accessor.
         */
        self.handleBindingsApplied = function (info) {
            // Implement if needed
        };

        /*
         * Optional ViewModel method invoked after the View is removed from the
         * document DOM.
         * @param {Object} info - An object with the following key-value pairs:
         * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
         * @param {Function} info.valueAccessor - The binding's value accessor.
         * @param {Array} info.cachedNodes - An Array containing cached nodes for the View if the cache is enabled.
         */
        self.handleDetached = function (info) {
            // Implement if needed
            if (myCircle != null) {
                myCircle.setMap(null);
            }
            if (marker != null) {
                marker.setMap(null);
            }
            self.makerOptions = [];
            self.infoWindow = null;
            self.siteID = null;
            stop = 1;
        };

    }
    return new geofenceContentViewModel();
});
