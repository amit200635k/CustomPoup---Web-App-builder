define([
  'dojo/_base/declare',
  'dojo/_base/lang',
  'dojo/on',
  'dijit/_WidgetsInTemplateMixin',
  'jimu/BaseWidget',
  'jimu/WidgetManager',
 "esri/dijit/InfoWindowLite",
 "esri/dijit/InfoWindow",
 "esri/dijit/Popup",
        "esri/dijit/PopupTemplate",
        "esri/tasks/GeometryService",
       "esri/InfoTemplate",
        "esri/layers/FeatureLayer",
        "dijit/form/Button",
		"dojo/dom",
        "dojo/dom-construct",
        "dijit/layout/BorderContainer",
        "dijit/layout/ContentPane",
		"dojo/domReady!"
],
  function (
    declare,
    lang,
    on,
    _WidgetsInTemplateMixin,
    BaseWidget,
    WidgetManager,
  InfoWindowLite,
  InfoWindow,
  Popup, PopupTemplate,
  GeometryService,
          InfoTemplate,
          FeatureLayer,Button,		  
		  dom,
          domConstruct
  ) {
    //To create a widget, you need to derive from BaseWidget.
    return declare([BaseWidget, _WidgetsInTemplateMixin], {
      // DemoWidget code goes here

      //please note that this property is be set by the framework when widget is loaded.
      //templateString: template,

      baseClass: 'jimu-widget-lyrzoom',
      mapClickEvent: null,
	 
      postCreate: function () {
        this.inherited(arguments);

      },

      startup: function () {
        this.inherited(arguments);
		

      },

      onOpen: function () {
		  
/*
var infoWindow = new InfoWindowLite(null, domConstruct.create("div", null, null, map.root));
        infoWindow.startup();
        this.map.setInfoWindow(infoWindow);
		
		var template = new InfoTemplate();
        template.setTitle("<b>Industry Name - ${name}</b>");
        template.setContent("<a id='btnx'>Click to Zoom</a>");

        //add a layer to the map
        var featureLayer = new FeatureLayer("https://gis1.jharkhand.gov.in/arcgis/rest/services/JSAC/Industry_new/MapServer/0", {
          mode: FeatureLayer.MODE_ONDEMAND,
          infoTemplate:template,
          outFields: ["name"]
        });
		this.map.addLayer(featureLayer);

        this.map.infoWindow.resize(200, 75);
*/
		
  /*
  var infoWindow = new InfoWindow({domNode: domConstruct.create("div", null, map.root)});
        infoWindow.startup();
        this.map.setInfoWindow(infoWindow);
		
		var template = new InfoTemplate();
        template.setTitle("<b>Industry Name - ${name}${Point}</b>");
        template.setContent('<a id="btnx" data-dojo-type="dijit/form/Button">Click to Zoom${Point},${Point}</a>');

        //add a layer to the map
        var featureLayer = new FeatureLayer("https://gis1.jharkhand.gov.in/arcgis/rest/services/JSAC/Industry_new/MapServer/0", {
          mode: FeatureLayer.MODE_ONDEMAND,
          infoTemplate:template,
          returnGeometry:true,
          outFields: ["name","Point"]
        });
		this.map.addLayer(featureLayer);
    this.map.infoWindow.resize(200, 75);
*/


var popupOptions = {
  marginLeft: "20",
  marginTop: "20"
};
//create a popup to replace the map's info window
var popup = new Popup(popupOptions, domConstruct.create("div"));
var popupTemplate = new PopupTemplate({
  title: "Industrial Name : {name}",
  fieldInfos: [
   /* {
      fieldName: "req_type",
      visible: true,
      label: "Type"
    },
    {
      fieldName: "req_date",
      visible: true,
      label: "Date",
      format: {
        dateFormat: 'shortDateShortTime'
      }
    }*/
  ],
  showAttachments: true
});
var featureLayer = new FeatureLayer("https://gis1.jharkhand.gov.in/arcgis/rest/services/JSAC/Industry_new/MapServer/0", {
          mode: FeatureLayer.MODE_ONDEMAND,
          infoTemplate:popupTemplate,
          returnGeometry:true,
          outFields: ["name"]
        });
		this.map.addLayer(featureLayer);



        //on(dom.byId("btnx"), "click", function(evt){map.setZoom(map.getZoom()+1);});
       // this.mapClickEvent = this.own(on(this.map, 'click', lang.hitch(this, this._clickToZoom)));
	
		
      },
      _clickToZoom: function (evt) {
        this.map.centerAndZoom(evt.mapPoint, 17);
      },
      onClose: function () {
        if (this.mapClickEvent !== null) {
          this.mapClickEvent.remove;
        }
      }

    });
  });