webpackJsonp([12],{cp51:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={name:"MyReport",data:function(){return{search:{keyWord:""},dialogVisible:!1,selectReportIds:[1,2,3,4,5],reports:[{id:1,name:"保费规模统计_20180901",icon:"",bg:"#86D7F7",dim:["channel","carFlag","carPrice"],index:["totalPremium","yearCompPremium","monthCompPremium","curMonthPremium","curYearPremium","comFullRate"],keyWords:["品牌车系分组","保费收入(万元)"]},{id:2,name:"品牌车系分组的保费规模统计_20180830",icon:"",bg:"#86D7F7",dim:["jyBrandGroup"],index:["totalPremium"],keyWords:["品牌车系分组","保费收入(万元)"]},{id:3,name:"年龄及品牌车系分组的赔付率统计_20180820",icon:"",bg:"#86D7F7",dim:["age","jyBrandGroup"],index:["comFullRate"],keyWords:["年龄","品牌车系分组","商业险满期赔付率(含IBNR)"]},{id:4,name:"品牌车系分组的赔付率统计_20180810",icon:"",bg:"#86D7F7",dim:["jyBrandGroup"],index:["comFullRate"],keyWords:["品牌车系分组","商业险满期赔付率(含IBNR)"]},{id:5,name:"投保组合划分的经营成本统计_20180730",icon:"",bg:"#86D7F7",dim:["insCom"],index:["comOpeCostRate"],keyWords:["投保组合","商业险经营成本率(%)"]},{id:6,name:"车辆使用性质的经营成本统计_20180720",icon:"",bg:"#86D7F7",dim:["usage"],index:["comOpeCostRate"],keyWords:["车辆使用性质","商业险经营成本率(%)"]},{id:7,name:"上年出险次数及上年出险金额的经营成本统计_20180710",icon:"",bg:"#86D7F7",dim:["lastYearCount","lastYearAmount"],index:["comOpeCostRate"],keyWords:["商业险上年出险次数","商业险上年出险金额","商业险经营成本率(%)"]},{id:8,name:"新车购置价及使用性质的赔付率统计_20180630",icon:"",bg:"#F786AC",dim:["carPrice","usage"],index:["comFinalRate"],keyWords:["新车购置价","使用性质","商业险终极赔付率"]},{id:9,name:"年龄及投保组合的赔付率统计_20180620",icon:"",bg:"#F7C586",dim:["age","insCom"],index:["comFullRate"],keyWords:["年龄","投保组合","商业险满期赔付率(含IBNR)"]},{id:10,name:"性别及座位数的保费占比统计_20180610",icon:"",bg:"#6ECCB9",dim:["gender","seatCount"],index:["premiumAccount"],keyWords:["性别","座位数","保费占比(%)"]},{id:11,name:"新车购置价及使用性质的商业险与交强险保费占比统计_20180530",icon:"",bg:"#B7ABFF",dim:["carPrice","usage"],index:["comPer","forcePer"],keyWords:["新车购置价","使用性质","商业险保费占比","交强险保费占比"]},{id:12,name:"上年出险次数及上年出险金额的商业险与交强险保费占比统计_20180520",icon:"",bg:"#86D7F7",dim:["lastYearCount","lastYearAmount"],index:["comPer","forcePer"],keyWords:["商业险上年出险次数","商业险上年出险金额","商业险保费占比","交强险保费占比"]},{id:13,name:"新车购置价及使用性质的保费占比统计_20180510",icon:"",bg:"#F786AC",dim:["carPrice","usage"],index:["premiumAccount"],keyWords:["新车购置价","使用性质","保费占比(%)"]},{id:14,name:"年龄及投保组合的赔付率统计_20180430",icon:"",bg:"#F7C586",dim:["age","insCom"],index:["comFullRate"],keyWords:["年龄","投保组合","商业险满期赔付率(含IBNR)"]},{id:15,name:"性别及座位数的赔付率统计_20180420",icon:"",bg:"#6ECCB9",dim:["gender","seatCount"],index:["comFinalRate"],keyWords:["性别","座位数","商业险终极赔付率"]},{id:16,name:"新车购置价及使用性质的经营成本统计_20180410",icon:"",bg:"#B7ABFF",dim:["carPrice","usage"],index:["comOpeCostRate"],keyWords:["新车购置价","使用性质","商业险经营成本率(%)"]},{id:17,name:"上年出险次数及上年出险金额的经营成本统计_20180330",icon:"",bg:"#86D7F7",dim:["lastYearCount","lastYearAmount"],index:["comOpeCostRate"],keyWords:["商业险上年出险次数","商业险上年出险金额","商业险经营成本率(%)"]},{id:18,name:"新车购置价及使用性质的赔付率统计_20180320",icon:"",bg:"#F786AC",dim:["carPrice","usage"],index:["comFinalRate"],keyWords:["新车购置价","使用性质","商业险终极赔付率"]}],mMd:"margin:5px "}},computed:{selectReport:function(){var e=this;return this.selectReportIds.map(function(t){return e.reports.find(function(e){return e.id===t})})}},methods:{removeItem:function(e){var t=this.selectReportIds.findIndex(function(t){return t===e});console.warn(t),this.selectReportIds.splice(t,1)},addReport:function(e){-1===this.selectReportIds.findIndex(function(t){return t===e})?this.selectReportIds.push(e):this.$message({type:"warning",message:"该报表已选择!"})},searchKeyWord:function(){var e=this.search.keyWord;if(""!==e){var t=[];this.selectReport.forEach(function(i){-1!==i.keyWords.findIndex(function(t){return t===e})&&t.push(i.id)}),this.selectReportIds=t}},reportDetail:function(e,t,i){this.$router.push({path:"/admin/chart/reportDetail/"+e+"/"+t+"/"+i})}}},n={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"main myreport"},[r("div",{staticClass:"form"},[r("div",{staticClass:"search"},[r("el-form",{ref:"searchForm",attrs:{model:e.search}},[r("el-form-item",{attrs:{prop:"keyWord"}},[r("el-input",{staticClass:"input-with-select",staticStyle:{width:"80%"},attrs:{placeholder:"请输入报表关键字查找",size:"medium"},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.searchKeyWord(t):null}},model:{value:e.search.keyWord,callback:function(t){e.$set(e.search,"keyWord",t)},expression:"search.keyWord"}},[r("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.searchKeyWord},slot:"append"})],1),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:""!==e.search.keyWord,expression:"search.keyWord !== ''"}],staticClass:"searchmain"},[e._v("您搜索的是关键字为  "),r("span",[e._v(e._s(e.search.keyWord))]),e._v("  的报表")])],1)],1)],1)]),e._v(" "),r("h4",[e._v("我的报表")]),e._v(" "),r("div",{staticClass:"report"},[r("el-row",{attrs:{gutter:20}},[e._l(e.selectReport,function(t){return r("el-col",{key:t.id,attrs:{span:6}},[r("el-card",{attrs:{shadow:"hover"},on:{click:e.reportDetail}},[r("img",{staticClass:"image",attrs:{src:i("pa1E")},on:{click:function(i){e.reportDetail(t.dim,t.index,t.name)}}}),e._v(" "),r("div",[r("div",{staticClass:"cardreport",on:{click:function(i){e.reportDetail(t.dim,t.index,t.name)}}},[r("span",[e._v(e._s(t.name))])]),e._v(" "),r("i",{staticClass:"el-icon-circle-close-outline",on:{click:function(i){e.removeItem(t.id)}}})])])],1)}),e._v(" "),r("el-col",{attrs:{span:6}},[r("el-card",{attrs:{shadow:"hover"}},[r("div",{staticClass:"addreport",on:{click:function(t){e.dialogVisible=!0}}},[r("i",{staticClass:"el-icon-circle-plus"})])])],1)],2)],1),e._v(" "),r("el-dialog",{attrs:{title:"自定义报表列表",visible:e.dialogVisible,width:"40%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[r("span",e._l(e.reports,function(t){return r("el-tag",{key:t.id,staticStyle:{cursor:"pointer"},style:e.mMd,attrs:{type:e.selectReportIds.includes(t.id)?"primary":"info"},nativeOn:{click:function(i){e.addReport(t.id)}}},[e._v("\n        "+e._s(t.name)+"\n      ")])})),e._v(" "),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("确 定")])],1)])],1)},staticRenderFns:[]};var o=i("VU/8")(r,n,!1,function(e){i("u8iM")},"data-v-0e978bfe",null);t.default=o.exports},pa1E:function(e,t,i){e.exports=i.p+"static/img/table-view.e117b02.png"},u8iM:function(e,t){}});