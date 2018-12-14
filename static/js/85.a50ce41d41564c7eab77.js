webpackJsonp([85],{"+71F":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("Dd8w"),n=i.n(a),o=i("NYxO"),r=i("Z4dx"),s={name:"CustomDimension",components:{BackButton:function(){return i.e(124).then(i.bind(null,"uOVF"))},BizSectorList:function(){return i.e(125).then(i.bind(null,"jpoa"))},TagDimension:function(){return i.e(130).then(i.bind(null,"RXyt"))},RangeDimension:function(){return i.e(128).then(i.bind(null,"t+1g"))},BaseTable:function(){return i.e(123).then(i.bind(null,"ss0d"))}},data:function(){return{baseRecommend:[],currentSector:0,dimensionList:[],currentCustomDimension:[],currentDimensionDetail:[],currentDimension:"",dimensionColumns:[{prop:"no",title:"序号",width:50,align:"center"},{prop:"tag",title:"因子分组名称",width:200,align:"center"},{prop:"range",title:"因子分组范围",width:128,align:"center"},{prop:"a",title:"满期标费赔付率（%）",width:140,align:"center"},{prop:"b",title:"合并终极赔付率（%）",width:160,align:"center"},{prop:"c",title:"保费占比（%）",width:120,align:"center"}],currentDimensionData:[{id:"comLastCount",type:"tag",title:"商业险上年出险次数",tags:[{code:"noCom",name:"未投保商业险"},{code:"newCar",name:"新车"},{code:"newIns",name:"新保"},{code:"no3",name:"连续3年+未出险"},{code:"no2",name:"连续2年未出险"},{code:"no1",name:"上年未出险"},{code:"1",name:"1次"},{code:"2",name:"2次"},{code:"3",name:"3次"},{code:"4",name:"4次"},{code:"5",name:"5次+"}],split:[{id:"1",title:"未投保商业险",tags:["noCom"]},{id:"2",title:"0次",tags:["newCar","newIns","no3","no2","no1"]},{id:"3",title:"1次",tags:["1"]},{id:"4",title:"2次",tags:["2"]},{id:"5",title:"3次及以上",tags:["3","4","5"]}]},{id:"age",type:"range",title:"年龄",list:[{id:"1",isEdit:!1,title:"20以下",start:"0",end:"20"},{id:"2",isEdit:!1,title:"20-30",start:"20",end:"30"},{id:"3",isEdit:!1,title:"30-45",start:"30",end:"45"},{id:"4",isEdit:!1,title:"45-60",start:"45",end:"60"},{id:"5",isEdit:!1,title:"60以上",start:"60",end:"N"}]},{id:"rci",type:"range",title:"商业险上年出险金额",list:[{id:"1",isEdit:!1,title:"1000以下",start:"0",end:"1000"},{id:"2",isEdit:!1,title:"1000-2000",start:"1000",end:"2000"},{id:"3",isEdit:!1,title:"2000-5000",start:"2000",end:"5000"},{id:"4",isEdit:!1,title:"5000-10000",start:"5000",end:"10000"},{id:"5",isEdit:!1,title:"10000以上",start:"10000",end:"N"}]}],tagData:{id:"comLastCount",type:"tag",title:"商业险上年出险次数",tags:[{code:"noCom",name:"未投保商业险"},{code:"newCar",name:"新车"},{code:"newIns",name:"新保"},{code:"no3",name:"连续3年+未出险"},{code:"no2",name:"连续2年未出险"},{code:"no1",name:"上年未出险"},{code:"1",name:"1次"},{code:"2",name:"2次"},{code:"3",name:"3次"},{code:"4",name:"4次"},{code:"5",name:"5次+"}],split:[{id:"1",title:"未投保商业险",tags:["noCom"]},{id:"2",title:"0次",tags:["newCar","newIns","no3","no2","no1"]},{id:"3",title:"1次",tags:["1"]},{id:"4",title:"2次",tags:["2"]},{id:"5",title:"3次及以上",tags:["3","4","5"]}]},rangeData:{id:"rci",type:"range",title:"商业险上年出险金额",list:[{id:"1",isEdit:!1,title:"1000以下",start:"0",end:"1000"},{id:"2",isEdit:!1,title:"1000-2000",start:"1000",end:"2000"},{id:"3",isEdit:!1,title:"2000-5000",start:"2000",end:"5000"},{id:"4",isEdit:!1,title:"5000-10000",start:"5000",end:"10000"},{id:"5",isEdit:!1,title:"10000以上",start:"10000",end:"N"}]},dialogTableVisible1:!1,dialogTableVisible:!1,dimensionDialogVisible:!1,rangeShow:"",dimComVisible:!1,dimComCol:[],dimComData:[],chartVisible:!1,dimnm:"",dimdetainms:[],avals:[],bvals:[],cvals:[]}},created:function(){var t=this;Object(r.a)(this.param).then(function(e){t.baseRecommend=e.data;var i=e.data.map(function(t){return{id:t.id,name:t.name}});t.$store.commit("SET_SECTORS",i),t.loadDimension(),t.currentDimension=e.data[0].dimensionList[0].code,t.currentDimensionDetail=e.data[0].dimensionList[0].detail,t.rangeShow=e.data[0].dimensionList[0].rangeShow,t.dimdetainms=[],t.avals=[],t.bvals=[],t.cvals=[],t.currentDimensionDetail.forEach(function(e){t.dimdetainms.push(e.tag),t.avals.push(e.a),t.bvals.push(e.b),t.cvals.push(e.c)}),t.dimnm=e.data[0].dimensionList[0].name,t.draw()})},computed:n()({},Object(o.d)({sectors:function(t){return t.individual.sectors},param:function(t){return t.individual.param},tableHeader:function(t){return t.app.tableHeader}}),{customerDimensionList:function(){var t=this;return this.currentCustomDimension.map(function(e){return t.dimensionList.find(function(t){return t.code===e})})},leftDimensionList:function(){var t=this;return this.dimensionList.filter(function(e){return!t.currentCustomDimension.includes(e.code)})},boxData:function(){return console.log(this.$echarts.dataTool),console.log(this.$echarts.dataTool.prepareBoxplotData([])),this.$echarts.dataTool.prepareBoxplotData([[35.91,36.29,37.12,38.54,38.61,39.89,41.23,42.56],[35.24,36.56,37.01,38.49,38.51,40.96,43.99,45.32],[36.51,37.04,38.05,39.04,39.06,42.88,45.06,48.05],[35.05,37.78,39.46,40.12,40.14,41.56,42.57,43.25],[36.88,37.01,39.06,40.21,40.23,46.65,48.96,49.28],[37.88,38.65,39.88,40.23,40.25,45.95,48.95,49.87],[36.59,38.66,39.26,40.39,40.41,42.25,45.08,46.29]])}}),methods:{handlePrev:function(){this.$router.push({path:"/admin/individual/declare/factorConfig"})},loadDimension:function(){this.dimensionList=this.baseRecommend[this.currentSector].dimensionList.map(function(t){return{code:t.code,name:t.name}}),this.currentCustomDimension=this.baseRecommend[this.currentSector].recommendDimension},getClassBySector:function(t){this.currentSector=this.sectors.findIndex(function(e){return e.id===t}),this.loadDimension();var e=this.baseRecommend[this.currentSector].dimensionList[0];this.currentDimension=e.code,this.currentDimensionDetail=e.detail,this.rangeShow=e.rangeShow},addIndex:function(t,e){return!(e<=0)&&((t[e-1].curIndex=t[e-1].curIndex+1)<t[e-1].totalLen||(t[e-1].curIndex=0,this.addIndex(t,e-1)))},getOptions:function(t,e){var i={};t.forEach(function(t,a){i[t.code]=t.tags[e[a].curIndex]}),this.dimComData.push(i),this.addIndex(e,t.length)&&this.getOptions(t,e)},showDimComDetail:function(){this.dimComVisible=!0,this.getDimComBySector(this.sectors[0].id)},getDimComBySector:function(t){var e=this;this.dimComCol=[],this.dimComData=[],this.currentSector=this.sectors.findIndex(function(e){return e.id===t});var i=this.baseRecommend[this.currentSector].dimensionList,a=[],n=[];this.baseRecommend[this.currentSector].recommendDimension.forEach(function(t){var o=i.find(function(e){return e.code===t}),r=[];o.detail.forEach(function(t){r.push(t.tag)}),e.dimComCol.push({prop:t,width:120,label:o.name}),a.push({code:t,name:o.name,tags:r}),n.push({code:t,curIndex:0,totalLen:r.length})}),this.getOptions(a,n)},addDimension:function(t){this.currentCustomDimension.includes(t)||(this.currentCustomDimension.push(t),"forceLastPay"===t&&this.currentDimensionData.push({id:"forceLastPay",type:"range",title:"交强险上年出险金额",list:[]}))},removeDimension:function(t){var e=this.currentDimensionData.findIndex(function(e){return e.id===t});this.currentDimensionData.splice(e,1),this.currentCustomDimension.splice(this.currentCustomDimension.indexOf(t),1)},dimensionDetail:function(t){var e=this;this.currentDimension=t;var i=this.baseRecommend[this.currentSector].dimensionList.find(function(e){return e.code===t});this.rangeShow=i.rangeShow,this.currentDimensionDetail=i.detail,this.dimdetainms=[],this.avals=[],this.bvals=[],this.cvals=[],this.currentDimensionDetail.forEach(function(t){e.dimdetainms.push(t.tag),e.avals.push(t.a),e.bvals.push(t.b),e.cvals.push(t.c)}),this.dimnm=i.name,this.draw()},resultRecommend:function(){this.$router.push({path:"/admin/individual/declare/resultRecommend"})},draw:function(){var t={title:{text:"图表分析",left:"center",top:10},grid:{top:"25%",bottom:"10%",left:"5%",right:"0%",containLabel:!0},tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},legend:{data:["保费占比","满期标费赔付率","预期赔付率"],itemWidth:15,itemHeight:8,itemGap:8,top:50},xAxis:[{name:this.dimnm,type:"category",data:this.dimdetainms,axisPointer:{type:"shadow"}}],yAxis:[{type:"value",position:"left",min:0,max:100,interval:10,axisLabel:{formatter:"{value}"}},{type:"value",position:"right",min:20,max:80,interval:10,axisLabel:{formatter:"{value} %"}},{type:"value",position:"right",offset:10,min:20,max:80,interval:10,axisLabel:{formatter:"{value} %"}}],series:[{name:"保费占比",type:"bar",barWidth:25,data:this.cvals,itemStyle:{normal:{color:"#0079BA"}}},{name:"满期标费赔付率",type:"line",yAxisIndex:1,barWidth:25,smooth:0,data:this.avals,itemStyle:{normal:{color:"#F78AE0"}}},{name:"预期赔付率",type:"line",yAxisIndex:2,barWidth:25,smooth:0,data:this.bvals,itemStyle:{normal:{color:"#FF5282"}}}]};this.drawLine("myChart",t)},drawLine:function(t,e){this.$echarts.init(document.getElementById(t),"light").setOption(e)},showChartList:function(){var t=this;this.chartVisible=!0;var e=["0年","1年","2年","3年","4年","5年","6年+"];this.$nextTick(function(){var i={title:{text:"赔付率分布",left:"center",top:10},grid:{top:"25%",bottom:"10%",left:"5%",right:"8%",containLabel:!0},tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},legend:{data:["保单数量","赔付率"],itemWidth:15,itemHeight:8,itemGap:8,top:50},xAxis:[{type:"category",data:e,axisPointer:{type:"shadow"}}],yAxis:[{type:"value",min:0,max:12e3,interval:2e3,axisLabel:{formatter:"{value}"}},{type:"value",min:0,max:100,interval:10,axisLabel:{formatter:"{value} %"}}],series:[{name:"保单数量",type:"bar",barWidth:25,data:[10298,6476,8857,6466,5832,7874,9250],itemStyle:{normal:{color:"#0079BA"}}},{name:"赔付率",type:"line",smooth:0,yAxisIndex:1,data:[18.54,38.49,29.04,50.12,40.21,30.23,80.39],itemStyle:{normal:{color:"#FB6670"}}}]};t.drawLine("myChart1",i);var a={title:{text:"保费分析",left:"center",top:10},tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},grid:{top:"25%",bottom:"10%",left:"5%",right:"8%",containLabel:!0},legend:{data:["本年","上年同期","本季度","上季度同期","保费占比"],selected:{"本季度":!1,"上季度同期":!1,"本月":!1,"上月同期":!1},itemWidth:15,itemHeight:8,itemGap:8,top:50},xAxis:[{type:"category",data:e,axisPointer:{type:"shadow"}}],yAxis:[{type:"value",min:0,max:5e3,interval:1e3,axisLabel:{formatter:"{value}"}},{type:"value",min:7,max:25,interval:4,axisLabel:{formatter:"{value} %"}}],series:[{name:"本年",type:"bar",data:[4371.3,2914.2,3428.5,2586.6,2724.4,3437,4538],itemStyle:{normal:{color:"#0079BA"}}},{name:"上年同期",type:"bar",data:[4355.3,2902.2,3404.5,2574.6,2902.4,3400,4519],itemStyle:{normal:{color:"#00AAE2"}}},{name:"本季度",type:"bar",data:[1092.83,728.55,607.13,646.65,431.1,359.25,1134.5],itemStyle:{normal:{color:"#FB6670"}}},{name:"上季度同期",type:"bar",data:[1087.83,716.26,596.12,637.58,420.8,348.14,1123.9],itemStyle:{normal:{color:"#6638F0"}}},{name:"本月",type:"bar",data:[364.28,242.85,202.38,215.55,143.7,119.75,378.17],itemStyle:{normal:{color:"#B0F566"}}},{name:"上月同期",type:"bar",data:[353.19,235.75,192.55,209.38,140.6,108.69,369.32],itemStyle:{normal:{color:"#FF5282"}}},{name:"保费占比",type:"line",smooth:0,yAxisIndex:1,data:[21.86,14.57,12.14,14.93,18.62,17.19,22.69],itemStyle:{normal:{color:"#FB6670"}}}]};t.drawLine("myChart2",a);var n={title:[{text:"赔付率分布",left:"center",top:10}],grid:{top:"25%",bottom:"10%",left:"5%",right:"8%",containLabel:!0},tooltip:{trigger:"item",axisPointer:{type:"shadow"}},xAxis:{type:"category",data:["0年","1年","2年","3年","4年","5年","6年+"],axisPointer:{type:"shadow"}},yAxis:{type:"value",min:30,max:60,interval:5,splitArea:{show:!0}},series:[{name:"boxplot",type:"boxplot",boxWidth:18,itemStyle:{normal:{color:"#0079BA",borderColor:"#0079BA",shadowBlur:{shadowColor:"rgba(0, 0, 0, 0)",shadowBlur:0}}},data:t.boxData.boxData,tooltip:{formatter:function(t){return["车龄 "+t.name+": ","upper: "+t.data[5],"Q3: "+t.data[4],"median: "+t.data[3],"Q1: "+t.data[2],"lower: "+t.data[1]].join("<br/>")}}}]};t.drawLine("myChart3",n);var o={title:{text:"保单成本分析",left:"center",top:10},tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},grid:{top:"25%",bottom:"10%",left:"5%",right:"8%",containLabel:!0},legend:{data:["赔付率","市场费用率","非市场费用率","优惠比率"],itemWidth:15,itemHeight:8,itemGap:8,top:50},xAxis:[{type:"category",data:e,axisPointer:{type:"shadow"}}],yAxis:[{type:"value",name:"",min:0,max:100,interval:20,axisLabel:{formatter:"{value}"}}],series:[{name:"赔付率",type:"bar",stack:"合计比率",barWidth:25,data:[58.54,56.49,51.97,57.88,54.51,59.58,50.47],itemStyle:{normal:{color:"#0079BA"}}},{name:"市场费用率",type:"bar",stack:"合计比率",barWidth:25,data:[18.54,15.49,20.04,20.12,21.21,20.23,19.39],itemStyle:{normal:{color:"#00AAE2"}}},{name:"非市场费用率",type:"bar",stack:"合计比率",barWidth:25,data:[15.54,18.49,19.04,11.12,18.21,13.23,22.39],itemStyle:{normal:{color:"#D2B1C1"}}},{name:"优惠比率",type:"bar",stack:"合计比率",barWidth:25,data:[7.38,9.53,8.95,10.88,5.97,6.96,7.75],itemStyle:{normal:{color:"#FF5282"}}}]};t.drawLine("myChart4",o);var r={title:{text:"保单数量分布",left:"center",top:10},tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},grid:{top:"25%",bottom:"10%",left:"5%",right:"8%",containLabel:!0},legend:{data:["低I","低II","中I","中II","高I","高II"],itemWidth:15,itemHeight:8,itemGap:8,top:50},xAxis:[{type:"category",data:e,axisPointer:{type:"shadow"}}],yAxis:[{type:"value",name:"",min:0,max:4e3,interval:1e3,axisLabel:{formatter:"{value}"}}],series:[{name:"低I",type:"bar",barWidth:25,stack:"保单数量",data:[532,435,420,385,375,365,510],itemStyle:{normal:{color:"#0079BA"}}},{name:"低II",type:"bar",barWidth:25,stack:"保单数量",data:[523,453,402,358,357,356,501],itemStyle:{normal:{color:"#00AAE2"}}},{name:"中I",type:"bar",barWidth:25,stack:"保单数量",data:[532,435,420,385,375,365,510],itemStyle:{normal:{color:"#AAB9CC"}}},{name:"中II",type:"bar",barWidth:25,stack:"保单数量",data:[523,453,402,358,357,356,501],itemStyle:{normal:{color:"#CDA8BA"}}},{name:"高I",type:"bar",barWidth:25,stack:"保单数量",data:[532,435,420,385,375,365,510],itemStyle:{normal:{color:"#F8A2CB"}}},{name:"高II",type:"bar",barWidth:25,stack:"保单数量",data:[523,453,402,358,357,356,501],itemStyle:{normal:{color:"#FF5282"}}}]};t.drawLine("myChart5",r);var s={title:{text:"保单综合分析",left:"center",top:10},grid:{top:"25%",bottom:"10%",left:"5%",right:"0%",containLabel:!0},tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},legend:{data:["保费收入","赔付率","市场费用率"],itemWidth:15,itemHeight:8,itemGap:8,top:50},xAxis:[{type:"category",data:e,axisPointer:{type:"shadow"}}],yAxis:[{type:"value",position:"left",min:1400,max:4600,interval:800,axisLabel:{formatter:"{value}"}},{type:"value",position:"right",min:38,max:41,interval:2,axisLabel:{formatter:"{value} %"}},{type:"value",position:"right",offset:10,min:20,max:27,interval:3,axisLabel:{formatter:"{value} %"}}],series:[{name:"保费收入",type:"bar",barWidth:25,data:[4371.3,3914.2,3428.5,3586.6,3724.4,3437,4538],itemStyle:{normal:{color:"#0079BA"}}},{name:"赔付率",type:"line",yAxisIndex:1,barWidth:25,smooth:0,data:[38.54,38.49,39.04,40.12,40.21,40.23,40.39],itemStyle:{normal:{color:"#F78AE0"}}},{name:"市场费用率",type:"line",yAxisIndex:2,barWidth:25,smooth:0,data:[25.54,24.49,22.04,23.12,21.21,24.23,25.39],itemStyle:{normal:{color:"#FF5282"}}}]};t.drawLine("myChart6",s)})}}},l={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"biz-content"},[i("biz-sector-list",{attrs:{title:"车种选择",sectors:t.sectors},on:{sectorClick:t.getClassBySector}}),t._v(" "),i("div",{attrs:{id:"custom_latitude"}},[i("div",{staticClass:"tableSector"},[i("el-row",{attrs:{gutter:20}},[i("el-col",{attrs:{span:24}},[i("div",{staticClass:"grid-content bg-purple-light"},[i("div",{staticStyle:{height:"30px","line-height":"30px",margin:"10px 0 10px 15px"}},[t._v("车种下风险因子")]),t._v(" "),i("div",{staticClass:"tag"},[t._l(t.customerDimensionList,function(e){return i("el-tag",{key:e.code,attrs:{type:t.currentDimension===e.code?"primary":"info",closable:"newFlag"!==e.code},on:{close:function(i){t.removeDimension(e.code)}},nativeOn:{click:function(i){t.dimensionDetail(e.code)}}},[t._v("\n                "+t._s(e.name)+"\n              ")])}),t._v(" "),i("el-button",{attrs:{size:"small",plain:"",icon:"el-icon-plus"},on:{click:function(e){t.dimensionDialogVisible=!0}}},[t._v("新增因子")])],2),t._v(" "),i("div",{staticStyle:{height:"30px","line-height":"30px",margin:"10px 0 10px 15px"}},[i("el-button",{attrs:{type:"text",icon:"iconfont icon-bianji",size:"small"},on:{click:function(e){t.dialogTableVisible=!0}}},[t._v("因子分组编辑")])],1),t._v(" "),i("el-row",{attrs:{gutter:20}},[i("el-col",{attrs:{span:12}},[i("el-table",{attrs:{data:t.currentDimensionDetail,stripe:"","header-cell-style":t.tableHeader,height:"400px"}},[i("el-table-column",{attrs:{"header-align":"center",prop:"no",label:"序号","min-width":"50",align:"center"}}),t._v(" "),i("el-table-column",{attrs:{"header-align":"center",prop:"tag",label:"因子分组名称","min-width":"200",align:"center"}}),t._v(" "),t.rangeShow?i("el-table-column",{attrs:{"header-align":"center",prop:"range",label:"因子分组范围","min-width":"250",align:"center"}}):t._e(),t._v(" "),t.rangeShow?t._e():i("el-table-column",{attrs:{"header-align":"center",prop:"down",label:"从(含)","min-width":"125",align:"center"}}),t._v(" "),t.rangeShow?t._e():i("el-table-column",{attrs:{"header-align":"center",prop:"up",label:"至(不含)","min-width":"125",align:"center"}})],1)],1),t._v(" "),i("el-col",{attrs:{span:12}},[i("div",{style:{width:"100%",height:"400px"},attrs:{id:"myChart"}})])],1)],1)])],1)],1)]),t._v(" "),i("div",{staticClass:"option"},[i("back-button",{on:{prev:t.handlePrev}},[t._v("上一步")]),t._v(" "),i("el-button",{attrs:{type:"primary",plain:"",size:"small"},on:{click:t.showDimComDetail}},[t._v("查看全部业务单元")]),t._v(" "),i("back-button",{attrs:{type:"next"},on:{next:t.resultRecommend}},[t._v("下一步")])],1),t._v(" "),i("el-dialog",{attrs:{title:"因子分组编辑",fullscreen:"",visible:t.dialogTableVisible1},on:{"update:visible":function(e){t.dialogTableVisible1=e}}},[t._l(t.currentDimensionData,function(e){return["tag"===e.type?i("tag-dimension",{key:e.id,attrs:{data:e}}):t._e(),t._v(" "),"range"===e.type?i("range-dimension",{key:e.id,attrs:{data:e}}):t._e()]}),t._v(" "),i("div",{staticClass:"dialog-footer",staticStyle:{"text-align":"center"},attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary",plain:""},on:{click:function(e){t.dialogTableVisible=!1}}},[t._v("保存")]),t._v(" "),i("el-button",{attrs:{type:"primary",plain:""},on:{click:function(e){t.dialogTableVisible=!1}}},[t._v("关闭")])],1)],2),t._v(" "),i("el-dialog",{attrs:{title:"因子分组编辑",width:"60%",visible:t.dialogTableVisible},on:{"update:visible":function(e){t.dialogTableVisible=e}}},[t.rangeShow?i("tag-dimension",{attrs:{data:t.tagData}}):i("range-dimension",{attrs:{data:t.rangeData}}),t._v(" "),i("div",{staticClass:"dialog-footer",staticStyle:{"text-align":"center"},attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary",plain:""},on:{click:function(e){t.dialogTableVisible=!1}}},[t._v("保存")]),t._v(" "),i("el-button",{attrs:{type:"primary",plain:""},on:{click:function(e){t.dialogTableVisible=!1}}},[t._v("关闭")])],1)],1),t._v(" "),i("el-dialog",{attrs:{title:"添加维度",visible:t.dimensionDialogVisible,width:"30%"},on:{"update:visible":function(e){t.dimensionDialogVisible=e}}},t._l(t.dimensionList,function(e){return i("el-tag",{key:e.code,attrs:{type:t.currentCustomDimension.includes(e.code)?"primary":"info"},nativeOn:{click:function(i){t.addDimension(e.code)}}},[t._v("\n      "+t._s(e.name)+"\n    ")])})),t._v(" "),i("el-dialog",{attrs:{title:"查看全部业务单元",fullscreen:"",visible:t.dimComVisible},on:{"update:visible":function(e){t.dimComVisible=e}}},[i("span",[t._v("机构:北京分公司"+t._s(this.param.orgcd))]),t._v(" "),i("biz-sector-list",{attrs:{title:"选择业务板块",sectors:t.sectors},on:{sectorClick:t.getDimComBySector}}),t._v(" "),i("base-table",{attrs:{columns:t.dimComCol,data:t.dimComData}})],1),t._v(" "),i("el-dialog",{attrs:{title:"图表展示",fullscreen:"",visible:t.chartVisible},on:{"update:visible":function(e){t.chartVisible=e}}},[i("el-row",{attrs:{gutter:20}},[i("el-col",{attrs:{span:8}},[i("div",{style:{width:"100%",height:"400px"},attrs:{id:"myChart1"}})]),t._v(" "),i("el-col",{attrs:{span:8}},[i("div",{style:{width:"100%",height:"400px"},attrs:{id:"myChart2"}})]),t._v(" "),i("el-col",{attrs:{span:8}},[i("div",{style:{width:"100%",height:"400px"},attrs:{id:"myChart3"}})])],1),t._v(" "),i("el-row",{attrs:{gutter:20}},[i("el-col",{attrs:{span:8}},[i("div",{style:{width:"100%",height:"400px"},attrs:{id:"myChart4"}})]),t._v(" "),i("el-col",{attrs:{span:8}},[i("div",{style:{width:"100%",height:"400px"},attrs:{id:"myChart5"}})]),t._v(" "),i("el-col",{attrs:{span:8}},[i("div",{style:{width:"100%",height:"400px"},attrs:{id:"myChart6"}})])],1)],1)],1)},staticRenderFns:[]};var d=i("VU/8")(s,l,!1,function(t){i("zqkx")},"data-v-34780bb5",null);e.default=d.exports},zqkx:function(t,e){}});