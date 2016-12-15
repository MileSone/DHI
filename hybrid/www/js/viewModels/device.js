/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

require(['ojs/ojcore', 'knockout', 'jquery', 'tripledes', 'ojs/ojknockout', 'promise', 'ojs/ojlistview', 'ojs/ojpulltorefresh',
    'ojs/ojarraytabledatasource'],
        function (oj, ko, $)
        {
            /**
             * The view model for the main content view template
             */
            function deviceContentViewModel() {
                var self = this;
                $.getJSON("js/mcs/mcs_config.json").then(function (data) {
                    // Now use this data to update your view models, 
                    // and Knockout will update your UI automatically
                    $.ajax({
                        type: "POST",
                        headers: {
                            //    'Accept': 'application/json',
                            //    'Content-Type': 'application/json'
                        },
                        url: data.mobileBackends.HNA.baseUrl + "/mobile/platform/location/assets/query",
                        beforeSend: function (xhr) {
                            xhr.setRequestHeader("oracle-mobile-backend-id", data.mobileBackends.HNA.authorization.basicAuth.backendId);
                            xhr.setRequestHeader('Authorization', "Basic " + data.mobileBackends.HNA.authorization.basicAuth.anonymousToken);
                        },
                        //    crossDomain: true,
//                        data: {},
                        // data: self.encryptByDES(),
                        success: function (data) {
                            var result = data.result;
                            var response = $.parseJSON(self.decryptByDES(result));
                            var actions = response.activityResp.mapInfo.actlist;
                            self.allItems.removeAll();
                            for (var i = 0; i < actions.length; i++) {
                                self.allItems.push({"id": i, "acttitle": actions[i].acttitle, "actpurl": actions[i].actpurl});
                            }
                        },
                        error: function (request, status, error) {
                            alert("Error: " + request.status + " " + request.responseText);
                        },
                        complete: function (data) {
                            /*
                             * Optional ViewModel method invoked after the View is inserted into the
                             * document DOM.  The application can put logic that requires the DOM being
                             * attached here.
                             */
                            self.handleAttached = function () {
                                if (self.allItems().length == 0)
                                {
                                    self.init();
                                }
                                document.addEventListener('deviceready', onDeviceReady);
                            };
                        }
                    });
                });
                
                self.allItems = ko.observableArray([]);
                self.ifInit = false;
                self.selectedItems = ko.observableArray([]);
                self.init();

                self.dataSource = new oj.ArrayTableDataSource(self.allItems, {idAttribute: "id"});

                /*
                 * Optional ViewModel method invoked when this ViewModel is about to be
                 * used for the View transition.  The application can put data fetch logic
                 * here that can return a Promise which will delay the handleAttached function
                 * call below until the Promise is resolved.
                 */
                self.handleActivated = function (info) {
                    // Implement if needed
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
                    // ko.applyBindings(new DashboardViewModel(), document.getElementById('listview'));
                }

            }

            return deviceContentViewModel;
        });

