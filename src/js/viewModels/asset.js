/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * asset module
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'mbe/mbe', 'ojs/ojknockout', 'ojs/ojbutton', 'ojs/ojinputtext', 'geometry', 'ojs/ojinputnumber', 'data/gloableVars'
], function (oj, ko, $, mbe) {
    /**
     * The view model for the main content view template
     */
    function assetContentViewModel() {
        var self = this;
        self.count = 0;
        // Below are a subset of the ViewModel methods invoked by the ojModule binding
        // Please reference the ojModule jsDoc for additionaly available methods.
        self.makerOptions = [];
        self.makerOptionsC = [];
        self.map;
        self.infoWindow;
        self.siteID = 0;
        var marker;
        var deviceEnableC = false;
        var deviceEnableP = false;
        var deviceEnableSaveC = false;
        var deviceEnableSaveP = false;
        var customerIcons = ["img/icon_map_covered_0.png",
            "img/icon_map_covered_2.png"];

        var stop = null;
        var centerd = null;
        //inputnum
        self.currentValue = ko.observable(4);
        self.max = ko.observable(1000);
        self.min = ko.observable(0);
        self.step = ko.observable(1);
        var markerArray = new Array();
        var circlesArray = new Array();
        var polygonArray = new Array();
        self.warningText = ko.observable("Loading ....");
        self.geocoder;

        self.initModule = function () {
            for (i in circlesArray) {
                circlesArray[i].setMap(null);
            }

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
                            var polyGonPoints = it.address.gpsPolygon.vertices;
                            self.makerOptions.push({id: it.id, coords: {lat: polyGonPoints[0].latitude, lng: polyGonPoints[0].longitude}, title: it.name});
                            var iconObj = {url: customerIcons[1], scaledSize: new google.maps.Size(31, 45)};
                            self.makerOptions.forEach(function (it) {
                                var marker2 = new google.maps.Marker({
                                    map: self.map,
                                    position: it.coords,
                                    title: it.name,
                                    icon: iconObj
                                });

                                markerArray.push(marker2);

                                //Create and open InfoWindow.  
                                var infoWindow = new google.maps.InfoWindow();

                                google.maps.event.addListener(marker2, "click", function (event) {
                                    self.siteID = it.id;
                                    self.map.setCenter(marker2.getPosition());
                                    infoWindow.setContent("<div style = 'width:200px;min-height:40px;color:black; font-weight: 500;'>" + it.title + "</div>");
                                    infoWindow.open(self.map, marker2);
                                });
                            });

                            addPolygon(polyGonPoints);

                        } else if (it.address.gpsCircle) {

                            var areaPoint = it.address.gpsCircle;
                            self.makerOptionsC.push({id: it.id, coords: {lat: areaPoint.latitude, lng: areaPoint.longitude}, title: it.name});
                            // Create a marker and set its position.
                            var iconObj = {url: customerIcons[1], scaledSize: new google.maps.Size(31, 45)};
                            self.makerOptionsC.forEach(function (it) {
                                var marker3 = new google.maps.Marker({
                                    map: self.map,
                                    position: it.coords,
                                    title: it.name,
                                    icon: iconObj
                                });

                                markerArray.push(marker3);

                                var CirCenter = {lat: areaPoint.latitude, lng: areaPoint.longitude};
                                // Add circle overlay and bind to marker
                                var PlaceCircle = new google.maps.Circle({
                                    map: self.map,
                                    radius: areaPoint.radius, // 10 miles in metres * 1609.3
                                    fillColor: '#6691ff',
                                    strokeColor: "#0022ee",
                                    strokeOpacity: 0.75,
                                    strokeWeight: 1,
                                    fillOpacity: 0.35,
                                    center: CirCenter
                                });

                                circlesArray.push(PlaceCircle);

                                //Create and open InfoWindow.  
                                var infoWindow = new google.maps.InfoWindow();

                                google.maps.event.addListener(marker3, "click", function (event) {
                                    self.siteID = it.id;
                                    self.map.setCenter(marker3.getPosition());
                                    infoWindow.setContent("<div style = 'width:200px;min-height:40px;color:black; font-weight: 500;'>" + it.title + "</div>");
                                    infoWindow.open(self.map, marker3);
                                });
                            });
                        }
                    }
                }
                deferred.resolve(status, data);
            }

            function errorCallback(status, data) {
//                console.log("Load placess from MCS fail! " + status + ': ' + JSON.stringify(data));
                deferred.reject(status, data);
            }

        };

        function runPositonTest() {
            if (deviceEnableSaveC === true || deviceEnableSaveP === true) {
                self.warningText("You are enabled");
                $("#warningS").css("color", "green");
            } else {
                self.warningText("You are unabled");
                $("#warningS").css("color", "red");
            }
        }
        ;

        function calculateIfinPloygon() {
            for (var i = 0; i < polygonArray.length; i++) {
                if (google.maps.geometry.poly.containsLocation(marker.getPosition(), polygonArray[i])) {
                    deviceEnableP = true;
                    deviceEnableSaveP = true;
                    console.log(deviceEnableSaveP);
                } else {
                    deviceEnableP = false;
                }
            }
        }
        ;

        function calculateIfinCircle() {
            for (var i = 0; i < circlesArray.length; i++) {
                if (google.maps.geometry.spherical.computeDistanceBetween(marker.getPosition(), circlesArray[i].getCenter()) <= circlesArray[i].getRadius()) {
                    deviceEnableC = true;
                    deviceEnableSaveC = true;
                    console.log(deviceEnableSaveC);
                } else {
                    deviceEnableC = false;
                }
            }



        }
        ;

        function addPolygon(_ca) {

            if (_ca) {
                var pc = new Array();

                for (var j = 1; j < _ca.length; j++) {
                    var uuu = new google.maps.LatLng(_ca[j].latitude, _ca[j].longitude);
                    var latfun = uuu.toJSON();
                    pc.push(uuu);
                }

                var triangleCoords = [
                    {lat: 38.887797, lng: 121.549487},
                    {lat: 38.887839, lng: 121.549338},
                    {lat: 38.887733, lng: 121.549099}
                ];

                // Construct the polygon.
                var bermudaTriangle = new google.maps.Polygon({
                    paths: pc,
                    strokeColor: '#0022ee',
                    strokeOpacity: 0.8,
                    strokeWeight: 1,
                    fillColor: '#6691ff',
                    fillOpacity: 0.35
                });
                bermudaTriangle.setMap(self.map);
                polygonArray.push(bermudaTriangle);
            } else {
                if (_ca.triggerPolygon) {
                    //arr[i].triggerPolygon.setMap(null);
                    _ca.triggerPolygon = null;
                }
            }
        }
        ;

        function initMap() {
            self.map = new google.maps.Map(document.getElementById('map2'), {
                center: {
//                    lat: 38.887733,
//                    lng: 121.549099
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

            self.geocoder = new google.maps.Geocoder();

            self.getCurrentLocation();
            runnableGetLocation();

// Define the LatLng coordinates for the polygon.

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

        self.onprog = function (ll) {

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
                    calculateIfinPloygon();
                    calculateIfinCircle();
                    runPositonTest();
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

            for (var i in circlesArray) {
                circlesArray[i].setMap(null);
            }

            for (var j in polygonArray) {
                polygonArray[j].setMap(null);
            }


            for (var k in markerArray) {
                markerArray[k].setMap(null);
            }
            // Implement if needed
            self.makerOptions = [];
            self.makerOptionsC = [];
            self.infoWindow = null;
            self.siteID = 0;
            stop = 1;
        };



        if (!google.maps.Polygon.prototype.getBounds) {
            google.maps.Polygon.prototype.getBounds = function (latLng) {
                var bounds = new google.maps.LatLngBounds(),
                        paths = this.getPaths(),
                        path,
                        p, i;
                for (p = 0; p < paths.getLength(); p++) {
                    path = paths.getAt(p);
                    for (i = 0; i < path.getLength(); i++) {
                        bounds.extend(path.getAt(i));
                    }
                }
                return bounds;
            };
        }
// Polygon containsLatLng - method to determine if a latLng is within a polygon
        google.maps.Polygon.prototype.containsLatLng = function (latLng) {
            // Exclude points outside of bounds as there is no way they are in the poly
            var inPoly = false,
                    bounds, lat, lng,
                    numPaths, p, path, numPoints,
                    i, j, vertex1, vertex2;
            // Arguments are a pair of lat, lng variables
            if (arguments.length == 2) {
                if (
                        typeof arguments[0] == "number" &&
                        typeof arguments[1] == "number"
                        ) {
                    lat = arguments[0];
                    lng = arguments[1];
                }
            } else if (arguments.length == 1) {
                bounds = this.getBounds();
                if (!bounds && !bounds.contains(latLng)) {
                    return false;
                }
                lat = latLng.lat();
                lng = latLng.lng();
            } else {
                console.log("Wrong number of inputs in google.maps.Polygon.prototype.contains.LatLng");
            }
            // Raycast point in polygon method
            numPaths = this.getPaths().getLength();
            for (p = 0; p < numPaths; p++) {
                path = this.getPaths().getAt(p);
                numPoints = path.getLength();
                j = numPoints - 1;
                for (i = 0; i < numPoints; i++) {
                    vertex1 = path.getAt(i);
                    vertex2 = path.getAt(j);
                    if (
                            vertex1.lng() < lng &&
                            vertex2.lng() >= lng ||
                            vertex2.lng() < lng &&
                            vertex1.lng() >= lng
                            ) {
                        if (
                                vertex1.lat() +
                                (lng - vertex1.lng()) /
                                (vertex2.lng() - vertex1.lng()) *
                                (vertex2.lat() - vertex1.lat()) <
                                lat
                                ) {
                            inPoly = !inPoly;
                        }
                    }
                    j = i;
                }
            }
            return inPoly;
        };

    }
    return new assetContentViewModel();
});
