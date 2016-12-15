/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * vehicleview module
 */
define(['ojs/ojcore', 'knockout', 'masonry', 'jquery', 'mbe/mbe', 'libs/bower_components/imagesloaded/imagesloaded', 'data/gloableVars', 'mcs', 'mcs_config', 'ojs/ojbutton'
], function (oj, ko, Masonry, $, mbe, imagesLoaded) {
    /**
     * The view model for the main content view template
     */
    function vehicleviewContentViewModel() {

        var mcs_config = {
            "logLevel": 2,
            "mobileBackends": {
                "DXProxy": {
                    "default": true,
                    "baseUrl": "https://mcs-zuowei1.mobileenv.us2.oraclecloud.com:443",
                    "applicationKey": "2078c283-44a4-4e3e-96b9-98c9191fc4e2",
                    "authorization": {
                        "basicAuth": {
                            "backendId": "289094a3-a217-460d-b74c-17f151d46a11",
                            "anonymousToken": "WlVPV0VJMV9NQ1NfTU9CSUxFX0FOT05ZTU9VU19BUFBJRDpLeTZiX2o3bG1kaGN1aQ=="
                        }
                    }
                }
            }
        };

        var self = this;
        'use strict';
        var AcitivityFileID = "FF8F606483DAC7023840FE48F8991C9FEFA4D18A5DD0";
        var mainUrl = "https://documents-gse00002643.sites.us2.oraclecloud.com/bmw/models.html";
        var heroContainer;
        var heroMasonry;
        var imagecounter, imagetracker;

        sessionStorage.demoUserId = "test01";
        sessionStorage.demoPassword = "Mcs1234!";



        self.init = function () {

            var hero = document.querySelector("#ahero");
            heroContainer = document.querySelector(".hero-masonry");

            heroMasonry = new Masonry(heroContainer, {
                itemSelector: '.hero-item',
                columnWidth: '.grid-sizer'
            });
            imagetracker = 1;
            //get images
            if (firstTimeInitializeVehicle) {
                imagetracker = 1;
                self.showImageIDs(AcitivityFileID);
                firstTimeInitializeVehicle = false;
            } else {
                $('#statusTitle').hide(0);
                self.getExamples(vehicleType);
            }
        };

        self.showLoadingTitle = function () {
            $('#statusTitle').show(1000);
            $('#statusTitle').html("正在加载图片...");
            $("#refreshVButton").attr("disabled", true);
        };
        self.HideLoadingTitle = function () {
            $('#statusTitle').html("图片加载完成");
            $('#statusTitle').hide(1000);
            $("#refreshVButton").attr("disabled", false);
        };

        self.refreshData = function () {
            $(".has-example").empty();
            $(".has-example").remove();
            firstTimeInitializeVehicle = true;
            self.init();
        };



        self.getExamples = function (type) {

            var data = vehicleData;
            for (var i = 0, len = data.length; i < len; i++) {
                self.makeExampleItem(data[i], i, type);
            }

        };

        self.continueWithItem = function (item, max) {
            var items = [];
            var fragment = null;
            fragment = document.createDocumentFragment();
            items.push(item);
            fragment.appendChild(item);

            imagesLoaded(fragment)
                    .on('progress', function (imgLoad, image) {
                        var item2 = image.img.parentNode.parentNode;
                        // debugger
                        heroContainer.appendChild(item2);
                        heroMasonry.appended(item2);
                    });
            if (imagecounter === (max + 1)) {
                self.HideLoadingTitle();
            }
        };


        self.showImageIDs = function (fileID) {
            self.showLoadingTitle();
            vehicleData = null;
            $.getJSON("js/mcs/mcs_config.json").then(function (data) {
                $.ajax({
                    type: "GET",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    url: data.mobileBackends.DXProxy.baseUrl + "/mobile/custom/DAMManager/" + fileID + "/assets",
                    beforeSend: function (xhr) {
                        xhr.setRequestHeader("oracle-mobile-backend-id", data.mobileBackends.DXProxy.authorization.basicAuth.backendId);
                        xhr.setRequestHeader('Authorization', "Basic " + data.mobileBackends.DXProxy.authorization.basicAuth.anonymousToken);
                    },
                    success: function (data) {
                        var ImageOjs = new Array();
                        var SingleImage = {
                            "id": "",
                            "name": ""
                        };
                        vehicleData = new Array();
                        for (i = 0; i < data.length; i++) {
                            SingleImage.id = data[i].id;
                            var shorterName = data[i].name.split('.');
                            SingleImage.name = shorterName[0];
                            ImageOjs[i] = SingleImage;
                            self.showImage(ImageOjs[i].id, ImageOjs[i].name, shorterName[1]);
                        }
                        imagecounter = data.length;
                    },
                    error: function (request, status, error) {
                        //fail
                        console.log("fail to fetch metadata: " + status + ":" + JSON.stringify(request));
                        $('#statusTitle').html("图片加载失败");
                    },
                    complete: function (data) {
                    }
                });
            });
        };



        //get image url
        self.showImage = function (imageID, name, type)
        {
            var imageUrl = "";
            mcs.MobileBackendManager.setConfig(mcs_config);
            var backend = mcs.MobileBackendManager.getMobileBackend('DXProxy');
            backend.setAuthenticationType("basicAuth");
            backend.Authorization.authenticate("test01", "Mcs1234!",
                    function (response, data) {
                        var headers = backend.getHttpHeaders();
                        headers["Content-Type"] = 'application/json';

                        mcs.MobileBackendManager.platform.invokeService({
                            method: 'GET',
                            url: backend.getBaseUrl() + "/mobile/custom/DAMManager/" + imageID + "/thumbnail",
                            headers: headers,
                            responseType: "blob",
                            success: function (response, data) {
                                var binary = data;
                                var outputImage = {
                                    "title": name,
                                    "image": binary
                                };
                                vehicleData.push(outputImage);
                                vehicleType = type;
                                if (imagetracker === imagecounter) {
                                    self.getExamples(type);
                                }
                                imagetracker++;
                            },
                            error: function (statusCode, data) {
                                //fail
                                console.log("fail to fetch metadata: " + statusCode + ":" + data);
                            }
                        });
                    },
                    function (statusCode, data) {
                        console.log("Failure authenticating against mobile backend");
                    }
            );

//            return imageUrl;
        };


        self.errorCallback = function (statusCode, data) {
            console.log(JSON.stringify(data));
            alert("Error! Status Code is " + statusCode + " " + JSON.stringify(data), "fa fa-exclamation-triangle fa-2x color-red ", null, "Error", true);
        };

        self.makeExampleItem = function (dataObj, tracker, imgtype) {
            var newType = "image/" + imgtype;
            var blobImg = new Blob([dataObj.image], {type: newType});
            self.blobToDataURL(blobImg, function (dataurl) {
                var item = document.createElement('div');
                item.className = 'hero-item has-example';
                var link = document.createElement('a');
                link.addEventListener('click', function (e) {
                    self.openURL();
                }, false);
                var title = document.createElement('p');
                title.className = 'example-title';
                title.textContent = dataObj.title;
                var img = document.createElement("img");
                img.src = dataurl;
                link.appendChild(img);
                link.appendChild(title);
                item.appendChild(link);
                self.continueWithItem(item, tracker);
            });


        };

        self.openURL = function () {
            console.log("clicking URL");
            var ref = cordova.InAppBrowser.open(mainUrl, '_blank', 'location=yes');
        };
        //**blob to dataURL**
        self.blobToDataURL = function (blob, callback) {
            var a = new FileReader();
            a.onload = function (e) {
                callback(e.target.result);
            };
            a.readAsDataURL(blob);
        };

        self.handleActivated = function (info) {
            // Implement if needed
        };

        /*
         * Optional ViewModel method invoked after the View is inserted into the
         * document DOM.  The application can put logic that requires the DOM being
         * attached here.
         */
        self.handleAttached = function () {
            self.init();
            document.addEventListener('deviceready', onDeviceReady);
        };

        /*
         * Optional ViewModel method invoked after the View is removed from the
         * document DOM.
         */
        self.handleDetached = function () {
            document.removeEventListener('deviceready', onDeviceReady);
        };

        function onDeviceReady() {
            // Will execute when device is ready, or immediately if the device is already ready.
        }
    }



    return vehicleviewContentViewModel;
});
