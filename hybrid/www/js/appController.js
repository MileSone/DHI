/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your application specific code will go here
 */
define(['ojs/ojcore', 'ojs/ojrouter', 'ojs/ojarraytabledatasource'],
  function(oj) {
     function ControllerViewModel() {
       var self = this;
       // Router setup
       self.router = oj.Router.rootInstance;
       var getTranslation = oj.Translations.getResource;
       self.router.configure({
         'beacon': {label: "Beacon",value: 'beacon'},
         'assetmang': {label: 'Geofence', value: 'geofence'},
         'geofence': {lable: 'Assets', value: 'asset',isDefault: true}
       });
       
       oj.Router.defaults['urlAdapter'] = new oj.Router.urlParamAdapter();

       // Navigation setup
       var navData = [
          {name: 'Geofence', id: 'geofence',
           iconClass: 'oj-navigationlist-item-icon demo-icon demo-incidents-icon'},
          {name: 'Assets', id: 'assetmang',
           iconClass: 'oj-navigationlist-item-icon demo-icon demo-car-icon'},
          {name: 'Beacon', id: 'beacon',
           iconClass: 'oj-navigationlist-item-icon demo-icon demo-suppliers-icon'}
       ];
       self.navDataSource = new oj.ArrayTableDataSource(navData, {idAttribute: 'id'});
       self.navChangeHandler = function (event, data) {
         if (data.option === 'selection' && data.value !== self.router.stateId()) {
           self.router.go(data.value);
         }
       };
     }

     return new ControllerViewModel();
  }
);
