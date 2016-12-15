/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","ojs/ojcomponentcore","ojs/ojdvt-base","ojs/internal-deps/dvt/DvtChart"],function(b,f,a,d,c){b.ya("oj.ojSparkChart",f.oj.dvtBaseComponent,{widgetEventPrefix:"oj",options:{},pf:function(a,b,d){return c.SparkChart.newInstance(a,b,d)},Fe:function(){var a=this._super();a.push("oj-sparkchart");return a},ji:function(){var a=this.options.translations,b=this._super();b["DvtUtilBundle.CHART"]=a.componentName;return b},kg:function(){this.element.attr("title")?(this.options.shortDesc=
this.element.attr("title"),this.element.data(this.element,"title",this.element.attr("title")),this.element.removeAttr("title")):this.element.data("title")&&(this.options.shortDesc=this.element.data("title"));this._super()},getDataItem:function(a){var c=this.la.getAutomation();return new b.lf(c.getDataItem(a))},hi:function(){return{root:["items"]}}});b.lf=function(a){this.i=a};o_("SparkChartDataItem",b.lf,b);b.lf.prototype.L2=function(){return this.i?this.i.borderColor:null};b.b.g("SparkChartDataItem.prototype.getBorderColor",
{L2:b.lf.prototype.L2});b.lf.prototype.R2=function(){return this.i?this.i.color:null};b.b.g("SparkChartDataItem.prototype.getColor",{R2:b.lf.prototype.R2});b.lf.prototype.getDate=function(){return this.i?this.i.date:null};b.b.g("SparkChartDataItem.prototype.getDate",{getDate:b.lf.prototype.getDate});b.lf.prototype.getFloatValue=function(){return this.ON()};b.b.g("SparkChartDataItem.prototype.getFloatValue",{getFloatValue:b.lf.prototype.getFloatValue});b.lf.prototype.ON=function(){return this.i?this.i.low:
null};b.b.g("SparkChartDataItem.prototype.getLow",{ON:b.lf.prototype.ON});b.lf.prototype.f3=function(){return this.i?this.i.high:null};b.b.g("SparkChartDataItem.prototype.getHigh",{f3:b.lf.prototype.f3});b.lf.prototype.Jc=function(){return this.i?this.i.value:null};b.b.g("SparkChartDataItem.prototype.getValue",{Jc:b.lf.prototype.Jc});b.ya("oj.ojChart",f.oj.dvtBaseComponent,{widgetEventPrefix:"oj",options:{categoryFilter:null,categoryHighlight:null,optionChange:null,selectInput:null,viewportChange:null,
viewportChangeInput:null,drill:null},pf:function(a,b,d){return c.Chart.newInstance(a,b,d)},ei:function(a){var b=a.subId;"oj-chart-item"==b?b="dataItem["+a.seriesIndex+"]["+a.itemIndex+"]":"oj-chart-group"==b?b="group"+this.Bp(a.indexPath):"oj-chart-series"==b?b="series["+a.index+"]":"oj-chart-axis-title"==b?b=a.axis+":title":"oj-chart-reference-object"==b?b=a.axis+":referenceObject["+a.index+"]":"oj-legend-section"==b?b="legend:section"+this.Bp(a.indexPath):"oj-legend-item"==b?(b="legend:section"+
this.Bp(a.sectionIndexPath),b+=":item["+a.itemIndex+"]"):"oj-chart-tooltip"==b&&(b="tooltip");return b},ig:function(a){var b={};if(0==a.indexOf("dataItem")){var c=this.tl(a);b.subId="oj-chart-item";b.seriesIndex=c[0];b.itemIndex=c[1]}else if(0==a.indexOf("group"))b.subId="oj-chart-group",b.indexPath=this.tl(a);else if(0==a.indexOf("series"))b.subId="oj-chart-series",b.index=this.Wg(a);else if(0<a.indexOf("Axis:title"))b.subId="oj-chart-axis-title",b.axis=a.substring(0,a.indexOf(":"));else if(0<a.indexOf("Axis:referenceObject"))b.subId=
"oj-chart-reference-object",b.axis=a.substring(0,a.indexOf(":")),b.index=this.Wg(a);else if(0==a.indexOf("legend"))if(0<a.indexOf(":item")){var d=a.indexOf(":item"),c=a.substring(0,d);a=a.substring(d);b.subId="oj-legend-item";b.sectionIndexPath=this.tl(c);b.itemIndex=this.Wg(a)}else 0==a.indexOf("section")&&(b.subId="oj-legend-section",b.indexPath=this.tl(a));else"tooltip"==a&&(b.subId="oj-chart-tooltip");return b},gA:function(){this._super();this.options.styleDefaults||(this.options.styleDefaults=
{});if(!this.options.styleDefaults.colors){var a=new b.Ne;this.options.styleDefaults.colors=a.mr()}},Fe:function(){var a=this._super();a.push("oj-chart");return a},gi:function(){var a=this._super();a["oj-chart-data-label"]={path:"styleDefaults/dataLabelStyle",property:"CSS_TEXT_PROPERTIES"};a["oj-chart-stack-label"]={path:"styleDefaults/stackLabelStyle",property:"CSS_TEXT_PROPERTIES"};a["oj-chart-footnote"]={path:"footnote/style",property:"CSS_TEXT_PROPERTIES"};a["oj-chart-pie-center-label"]={path:"pieCenterLabel/style",
property:"CSS_TEXT_PROPERTIES"};a["oj-chart-slice-label"]={path:"styleDefaults/sliceLabelStyle",property:"CSS_TEXT_PROPERTIES"};a["oj-chart-subtitle"]={path:"subtitle/style",property:"CSS_TEXT_PROPERTIES"};a["oj-chart-stock-falling"]={path:"styleDefaults/stockFallingColor",property:"background-color"};a["oj-chart-stock-range"]={path:"styleDefaults/stockRangeColor",property:"background-color"};a["oj-chart-stock-rising"]={path:"styleDefaults/stockRisingColor",property:"background-color"};a["oj-chart-title"]=
{path:"title/style",property:"CSS_TEXT_PROPERTIES"};a["oj-chart-xaxis-tick-label"]={path:"xAxis/tickLabel/style",property:"CSS_TEXT_PROPERTIES"};a["oj-chart-xaxis-title"]={path:"xAxis/titleStyle",property:"CSS_TEXT_PROPERTIES"};a["oj-chart-yaxis-tick-label"]={path:"yAxis/tickLabel/style",property:"CSS_TEXT_PROPERTIES"};a["oj-chart-yaxis-title"]={path:"yAxis/titleStyle",property:"CSS_TEXT_PROPERTIES"};a["oj-chart-y2axis-tick-label"]={path:"y2Axis/tickLabel/style",property:"CSS_TEXT_PROPERTIES"};a["oj-chart-y2axis-title"]=
{path:"y2Axis/titleStyle",property:"CSS_TEXT_PROPERTIES"};a["oj-chart-pan-icon"]={path:"_resources/panUp",property:"CSS_URL"};a["oj-chart-pan-icon oj-active"]={path:"_resources/panDown",property:"CSS_URL"};a["oj-chart-select-icon"]={path:"_resources/selectUp",property:"CSS_URL"};a["oj-chart-select-icon oj-active"]={path:"_resources/selectDown",property:"CSS_URL"};a["oj-chart-zoom-icon"]={path:"_resources/zoomUp",property:"CSS_URL"};a["oj-chart-zoom-icon oj-active"]={path:"_resources/zoomDown",property:"CSS_URL"};
a["oj-legend"]={path:"legend/textStyle",property:"CSS_TEXT_PROPERTIES"};a["oj-legend-title"]={path:"legend/titleStyle",property:"CSS_TEXT_PROPERTIES"};a["oj-legend-section-close-icon"]={path:"legend/_resources/closedEnabled",property:"CSS_URL"};a["oj-legend-section-close-icon oj-hover"]={path:"legend/_resources/closedOver",property:"CSS_URL"};a["oj-legend-section-close-icon oj-active"]={path:"legend/_resources/closedDown",property:"CSS_URL"};a["oj-legend-section-open-icon"]={path:"legend/_resources/openEnabled",
property:"CSS_URL"};a["oj-legend-section-open-icon oj-hover"]={path:"legend/_resources/openOver",property:"CSS_URL"};a["oj-legend-section-open-icon oj-active"]={path:"legend/_resources/openDown",property:"CSS_URL"};return a},ii:function(){return"categoryFilter categoryHighlight drill optionChange selectInput viewportChange viewportChangeInput".split(" ")},ji:function(){var a=this.options.translations,b=this._super();b["DvtChartBundle.DEFAULT_GROUP_NAME"]=a.labelDefaultGroupName;b["DvtChartBundle.LABEL_SERIES"]=
a.labelSeries;b["DvtChartBundle.LABEL_GROUP"]=a.labelGroup;b["DvtChartBundle.LABEL_VALUE"]=a.labelValue;b["DvtChartBundle.LABEL_TARGET_VALUE"]=a.labelTargetValue;b["DvtChartBundle.LABEL_X"]=a.labelX;b["DvtChartBundle.LABEL_Y"]=a.labelY;b["DvtChartBundle.LABEL_Z"]=a.labelZ;b["DvtChartBundle.LABEL_PERCENTAGE"]=a.labelPercentage;b["DvtChartBundle.LABEL_LOW"]=a.labelLow;b["DvtChartBundle.LABEL_HIGH"]=a.labelHigh;b["DvtChartBundle.LABEL_OPEN"]=a.labelOpen;b["DvtChartBundle.LABEL_CLOSE"]=a.labelClose;b["DvtChartBundle.LABEL_VOLUME"]=
a.labelVolume;b["DvtChartBundle.LABEL_MIN"]=a.labelMin;b["DvtChartBundle.LABEL_MAX"]=a.labelMax;b["DvtChartBundle.LABEL_OTHER"]=a.labelOther;b["DvtChartBundle.PAN"]=a.tooltipPan;b["DvtChartBundle.MARQUEE_SELECT"]=a.tooltipSelect;b["DvtChartBundle.MARQUEE_ZOOM"]=a.tooltipZoom;b["DvtUtilBundle.CHART"]=a.componentName;return b},ck:function(a){var b=a.type;if("selection"===b){var c=a.selection;if(c){for(var b=[],d=0;d<c.length;d++)b.push({id:c[d].id,series:c[d].series,group:c[d].group});c={endGroup:a.endGroup,
startGroup:a.startGroup,xMax:a.xMax,xMin:a.xMin,yMax:a.yMax,yMin:a.yMin,y2Max:a.y2Max,y2Min:a.y2Min};a.complete?this.vd("selection",b,c):(c.items=b,this._trigger("selectInput",null,c))}}else"categoryHide"===b||"categoryShow"===b?(this._trigger("categoryFilter",null,{category:a.category,type:"categoryHide"===b?"out":"in"}),this.vd("hiddenCategories",a.hiddenCategories)):"categoryHighlight"===b?(this._trigger("categoryHighlight",null,{categories:a.categories,type:a.categories&&0<a.categories.length?
"on":"off"}),this.vd("highlightedCategories",a.categories)):"viewportChange"===b?(b={endGroup:a.endGroup,startGroup:a.startGroup,xMax:a.xMax,xMin:a.xMin,yMax:a.yMax,yMin:a.yMin},a.complete&&(this.options.xAxis||(this.options.xAxis={}),this.options.yAxis||(this.options.yAxis={}),this.options.xAxis.viewportStartGroup=null,this.options.xAxis.viewportEndGroup=null,null!=a.xMin&&null!=a.xMax&&(this.options.xAxis.viewportMin=a.xMin,this.options.xAxis.viewportMax=a.xMax),null!=a.yMin&&null!=a.yMax&&(this.options.yAxis.viewportMin=
a.yMin,this.options.yAxis.viewportMax=a.yMax)),this._trigger(a.complete?"viewportChange":"viewportChangeInput",null,b)):"drill"===b?this._trigger("drill",null,{id:a.id,series:a.series,group:a.group}):this._super(a)},vs:function(){null==this.options._resources&&(this.options._resources={});var a=this.options._resources;a.overviewGrippy=b.ba.kb("resources/internal-deps/dvt/chart/drag_horizontal.png");a.panCursorDown=b.ba.kb("resources/internal-deps/dvt/chart/hand-closed.cur");a.panCursorUp=b.ba.kb("resources/internal-deps/dvt/chart/hand-open.cur")},
getTitle:function(){return this.la.getAutomation().getTitle()},getGroup:function(a){return this.la.getAutomation().getGroup(a)},getSeries:function(a){return this.la.getAutomation().getSeries(a)},getGroupCount:function(){return this.la.getAutomation().getGroupCount()},getSeriesCount:function(){return this.la.getAutomation().getSeriesCount()},getDataItem:function(a,b){var c=this.la.getAutomation().getDataItem(a,b);this.Vg(c);return c},getLegend:function(){var a=this.la.getAutomation().getLegend();this.Vg(a);
return a},getPlotArea:function(){var a=this.la.getAutomation().getPlotArea();this.Vg(a);return a},getXAxis:function(){var a=this.la.getAutomation().getXAxis();this.Vg(a);return a},getYAxis:function(){var a=this.la.getAutomation().getYAxis();this.Vg(a);return a},getY2Axis:function(){var a=this.la.getAutomation().getY2Axis();this.Vg(a);return a},getValuesAt:function(a,b){return this.la.getValuesAt(a,b)},getContextByNode:function(a){return(a=this.getSubIdByNode(a))&&"oj-chart-tooltip"!==a.subId?a:null},
hi:function(){return{root:["groups","series"]}},whenReady:function(){return this._super()}})});