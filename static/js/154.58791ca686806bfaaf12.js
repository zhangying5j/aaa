webpackJsonp([154],{YPZO:function(e,t){},xen3:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("Dd8w"),l=n.n(a),c=n("NYxO"),i={name:"QueryForm",props:{inspect:{type:Object,required:!0},rules:{type:Object,default:null}},created:function(){this.$store.dispatch("initFormData")},computed:l()({},Object(c.d)({formData:function(e){return e.inspect.formData}}),{inspectType:function(){return this.inspect.type}}),watch:{inspectType:function(e){if(this.inspect.timeRange="",""!==e){var t=this.formData.typeList.find(function(t){return t.code===e});this.timeRangeList=t.timeRangeList,t.timeRangeList.length>0&&(this.inspect.timeRange=t.timeRangeList[0].code)}}},data:function(){return{timeRangeList:[{code:"2018Q1",name:"2018年第一季度"},{code:"2018Q2",name:"2018年第二季度"},{code:"2018Q3",name:"2018年第三季度"},{code:"2018Q4",name:"2018年第四季度"}],versionList:[]}}},r={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-form",{ref:"inspectForm",attrs:{"label-width":"120px",model:e.inspect,rules:e.rules,inline:!0}},[n("el-form-item",{attrs:{label:"机构",prop:"org"}},[n("el-select",{attrs:{placeholder:"请选择机构",clearable:""},model:{value:e.inspect.org,callback:function(t){e.$set(e.inspect,"org",t)},expression:"inspect.org"}},e._l(e.formData.orgList,function(e){return n("el-option",{key:e.code,attrs:{value:e.code,label:e.name}})}))],1),e._v(" "),n("el-form-item",{attrs:{label:"渠道",prop:"channel"}},[n("el-select",{attrs:{placeholder:"请选择渠道",clearable:""},model:{value:e.inspect.channel,callback:function(t){e.$set(e.inspect,"channel",t)},expression:"inspect.channel"}},e._l(e.formData.channelList,function(e){return n("el-option",{key:e.code,attrs:{value:e.code,label:e.name}})}))],1),e._v(" "),n("el-form-item",{attrs:{label:"预算周期",prop:"type"}},[n("el-select",{attrs:{placeholder:"请选择预算周期",clearable:""},model:{value:e.inspect.type,callback:function(t){e.$set(e.inspect,"type",t)},expression:"inspect.type"}},e._l(e.formData.typeList,function(e){return n("el-option",{key:e.code,attrs:{value:e.code,label:e.name}})}))],1),e._v(" "),n("el-form-item",{attrs:{label:"预算时间段",prop:"timeRange"}},[n("el-select",{attrs:{placeholder:"请选择预算时间段",clearable:""},model:{value:e.inspect.timeRange,callback:function(t){e.$set(e.inspect,"timeRange",t)},expression:"inspect.timeRange"}},e._l(e.timeRangeList,function(e){return n("el-option",{key:e.code,attrs:{value:e.code,label:e.name}})}))],1),e._v(" "),n("el-form-item",{attrs:{label:"回溯区间",prop:"monthrange"}},[n("el-date-picker",{attrs:{type:"month",placeholder:"选择月","value-format":"yyyy-MM"},model:{value:e.inspect.startmonth,callback:function(t){e.$set(e.inspect,"startmonth",t)},expression:"inspect.startmonth"}}),e._v(" "),n("span",[e._v("至")]),e._v(" "),n("el-date-picker",{attrs:{type:"month",placeholder:"选择月","value-format":"yyyy-MM"},model:{value:e.inspect.endmonth,callback:function(t){e.$set(e.inspect,"endmonth",t)},expression:"inspect.endmonth"}})],1)],1)},staticRenderFns:[]};var o=n("VU/8")(i,r,!1,function(e){n("YPZO")},"data-v-60acd001",null);t.default=o.exports}});