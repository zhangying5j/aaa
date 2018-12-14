webpackJsonp([69],{"0hV/":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=a("Dd8w"),i=a.n(l),r=a("6D10"),n=a("NYxO"),o=a("Z4dx"),s={name:"ConfigLifeTable",components:{CommonTable:function(){return a.e(151).then(a.bind(null,"Lk4z"))},BackButton:function(){return a.e(142).then(a.bind(null,"uOVF"))},BizSectorList:function(){return a.e(143).then(a.bind(null,"jpoa"))},BaseTable:function(){return a.e(141).then(a.bind(null,"ss0d"))}},mounted:function(){this.$store.commit("SHOW_ROLLBACK")},beforeRouteLeave:function(t,e,a){this.$store.commit("HIDE_ROLLBACK"),a()},created:function(){var t=this;Object(o.c)(this.param).then(function(e){var a=e.data.map(function(t){return{id:t.id,name:t.name}});t.$store.commit("SET_SECTORS",a),t.lifeData=e.data,t.businessSmallType=t.lifeData[0].cols,t.data=t.lifeData[0].detailData})},data:function(){return{monishow:!1,totalvisble:!1,expect:{startDate:"",endDate:"",minpremium:"",maxpremium:""},businessSmallType:[],columns:[{prop:"intelligentRecommendationResult",firstTitle:"智能推荐结果",isShow:!0,secondContents:[{prop:"comAuto",secondTitle:"推荐商业险自主折扣系数",width:120,align:"center"},{prop:"market",secondTitle:"推荐车险手续费率",width:130,align:"center"}]},{prop:"parameterConfig",firstTitle:"参数配置",isShow:!0,secondContents:[{prop:"psmode",secondTitle:"定价策略模式",width:170,align:"center"},{prop:"hispremium",secondTitle:"历史保费收入",width:170,align:"center"},{prop:"hispreratio",secondTitle:"历史保费占比",width:170,align:"center"},{prop:"targepreratio",secondTitle:"目标保费占比",width:170,align:"center"},{prop:"targetocost",secondTitle:"目标车险保单成本率",width:200,align:"center"},{prop:"targebicost",secondTitle:"目标商业险保单成本率",width:210,align:"center"},{prop:"targepayrate",secondTitle:"目标保单赔付率",width:240,align:"center"},{prop:"autorate",secondTitle:"自主折扣系数",width:170,align:"center"},{prop:"marketrate",secondTitle:"手续费率",width:170,align:"center"},{prop:"hisfullpayrate",secondTitle:"历史满期标费赔付率",width:240,align:"center"},{prop:"bfpayrate",secondTitle:"标费赔付率（含ncd）",width:200,align:"center"},{prop:"cibjcostrate",secondTitle:"交强险边际成本率",width:170,align:"center"},{prop:"salecostRate",secondTitle:"销售人力成本率(%)",width:120,align:"center"},{prop:"saledriverRate",secondTitle:"营销推动费用率(%)",width:120,align:"center"},{prop:"claimRate",secondTitle:"理赔费用率(%)",width:120,align:"center"},{prop:"otherRate",secondTitle:"其他费用率(%)",width:120,align:"center"},{prop:"forcerate",secondTitle:"交强险保费占比(%)",width:120,align:"center"}]},{prop:"carInsurance",firstTitle:"经营结果预测",isShow:!0,secondContents:[{prop:"fucostRate",secondTitle:"预测车险合计保单成本率(%)",width:220,align:"center"},{prop:"fupayRate",secondTitle:"预测保单赔付率(%)",width:140,align:"center"},{prop:"fufeeRate",secondTitle:"预测保单费用率(%)",width:120,align:"center"},{prop:"fuserverRate",secondTitle:"预测手续费率(%)",width:120,align:"center"},{prop:"fusalecostRate",secondTitle:"预算销售人力成本率(%)",width:120,align:"center"},{prop:"fusaledriverRate",secondTitle:"预算营销推动费用率(%)",width:120,align:"center"},{prop:"fuclaimRate",secondTitle:"预测理赔费用率(%)",width:120,align:"center"},{prop:"fuotherRate",secondTitle:"预测其他费用率(%)",width:120,align:"center"},{prop:"fudiscoutRate",secondTitle:"预测折扣率(%)",width:120,align:"center"}]},{prop:"disCarInsurance",firstTitle:"目标偏离程度",isShow:!0,secondContents:[{prop:"discostRate",secondTitle:"目标车险合计保单成本率(%)",width:120,align:"center"},{prop:"dispayRate",secondTitle:"目标保单赔付率(%)",width:140,align:"center"},{prop:"disfeeRate",secondTitle:"目标保单费用率(%)",width:120,align:"center"},{prop:"disserverRate",secondTitle:"目标手续费率(%)",width:120,align:"center"},{prop:"dissalecostRate",secondTitle:"目标销售人力成本率(%)",width:120,align:"center"},{prop:"dissaledriverRate",secondTitle:"目标营销推动费用率(%)",width:120,align:"center"},{prop:"disclaimRate",secondTitle:"目标理赔费用率(%)",width:120,align:"center"},{prop:"disfixedRate",secondTitle:"目标固定费用率(%)",width:120,align:"center"},{prop:"disotherRate",secondTitle:"目标其他费用率(%)",width:120,align:"center"},{prop:"disdiscoutRate",secondTitle:"目标折扣率(%)",width:120,align:"center"}]}],data:[],impDialogVisible:!1,editFlag:!1,editDialogVisible:!1,selectArr:["isDisCount","isFee"],inputArr:["targepreratio","targetocost","targebicost","targepayrate","hisfullpayrate","bfpayrate","salecostRate","saledriverRate","claimRate","otherRate","forcerate"],bizSmallTypeColumn:[{prop:"lastYearComInsCount",label:"商业险上年出险次数",width:220,align:"center"},{prop:"lastYearComInsAmount",label:"商业险上年出险金额",width:250,align:"center"},{prop:"age",label:"年龄",width:120,align:"center"},{prop:"comAuto",label:"推荐商业险自主折扣系数",width:120,align:"center"},{prop:"marketRate",label:"推荐车险手续费率",width:130,align:"center"}],bizSmallTypeData:[{lastYearComInsAmount:"5000-10000",lastYearComInsCount:"3次及以上",age:"20-30",comAuto:.49,marketRate:"39%"}],paramConfigColumn:[{prop:"psmode",label:"定价策略模式",width:170,align:"center"},{prop:"hispremium",label:"历史保费收入",width:170,align:"center"},{prop:"hispreratio",label:"历史保费占比",width:170,align:"center"},{prop:"targepreratio",label:"目标保费占比",width:170,align:"center"},{prop:"targetocost",label:"目标车险保单成本率",width:200,align:"center"},{prop:"targebicost",label:"目标商业险保单成本率",width:210,align:"center"},{prop:"targepayrate",label:"目标保单赔付率",width:240,align:"center"},{prop:"autorate",label:"自主折扣系数",width:170,align:"center"},{prop:"marketrate",label:"手续费率",width:170,align:"center"},{prop:"hisfullpayrate",label:"历史满期标费赔付率",width:240,align:"center"},{prop:"bfpayrate",label:"标费赔付率（含ncd）",width:200,align:"center"},{prop:"cibjcostrate",label:"交强险边际成本率",width:170,align:"center"},{prop:"salecostRate",label:"销售人力成本率(%)",width:120,align:"center"},{prop:"saledriverRate",label:"营销推动费用率(%)",width:120,align:"center"},{prop:"claimRate",label:"理赔费用率(%)",width:120,align:"center"},{prop:"otherRate",label:"其他费用率(%)",width:120,align:"center"},{prop:"forcerate",label:"交强险保费占比(%)",width:120,align:"center"}],paramConfigData:[{psmode:"",hispremium:"460",hispreratio:"12",targepreratio:"13",targetocost:"160.32",targebicost:"105.03",targepayrate:"65",autorate:"0.83",marketrate:"8",hisfullpayrate:"70",bfpayrate:"55",cibjcostrate:"99",salecostRate:"15",saledriverRate:"3",claimRate:"55",otherRate:"4",forcerate:"45"}],targetColumn:[{prop:"fucostRate",label:"预测车险合计保单成本率(%)",width:220,align:"center"},{prop:"fupayRate",label:"预测保单赔付率(%)",width:140,align:"center"},{prop:"fufeeRate",label:"预测保单费用率(%)",width:120,align:"center"},{prop:"fuserverRate",label:"预测手续费率(%)",width:120,align:"center"},{prop:"fusalecostRate",label:"预算销售人力成本率(%)",width:120,align:"center"},{prop:"fusaledriverRate",label:"预算营销推动费用率(%)",width:120,align:"center"},{prop:"fuclaimRate",label:"预测理赔费用率(%)",width:120,align:"center"},{prop:"fuotherRate",label:"预测其他费用率(%)",width:120,align:"center"},{prop:"fudiscoutRate",label:"预测折扣率(%)",width:120,align:"center"}],disColumn:[{prop:"discostRate",label:"目标车险合计保单成本率(%)",width:120,align:"center"},{prop:"dispayRate",label:"目标保单赔付率(%)",width:140,align:"center"},{prop:"disfeeRate",label:"目标保单费用率(%)",width:120,align:"center"},{prop:"disserverRate",label:"目标手续费率(%)",width:120,align:"center"},{prop:"dissalecostRate",label:"目标销售人力成本率(%)",width:120,align:"center"},{prop:"dissaledriverRate",label:"目标营销推动费用率(%)",width:120,align:"center"},{prop:"disclaimRate",label:"目标理赔费用率(%)",width:120,align:"center"},{prop:"disfixedRate",label:"目标固定费用率(%)",width:120,align:"center"},{prop:"disotherRate",label:"目标其他费用率(%)",width:120,align:"center"},{prop:"disdiscoutRate",label:"目标折扣率(%)",width:120,align:"center"}],targetData:[{fupremium:"100",fucostRate:"96",fupayRate:"103.45",fufeeRate:"11",fuserverRate:"9",fusalecostRate:"15",fusaledriverRate:"3",fuclaimRate:"55",fuotherRate:"4",fudiscoutRate:"82"}],disData:[{discostRate:"1",dispayRate:"1",disfeeRate:"1",disserverRate:"1",dissalecostRate:"-1",dissaledriverRate:"2",disclaimRate:"1",disfixedRate:"1",disotherRate:"1",disdiscoutRate:"1"}],totaltargetColumn:[{prop:"fucostRate",label:"预测车险合计保单成本率(%)",width:120,align:"center"},{prop:"fupayRate",label:"预测保单赔付率(%)",width:140,align:"center"},{prop:"fufeeRate",label:"预测保单费用率(%)",width:120,align:"center"},{prop:"fuserverRate",label:"预测手续费率(%)",width:120,align:"center"},{prop:"fusalecostRate",label:"预算销售人力成本率(%)",width:120,align:"center"},{prop:"fusaledriverRate",label:"预算营销推动费用率(%)",width:120,align:"center"},{prop:"fuclaimRate",label:"预测理赔费用率(%)",width:120,align:"center"},{prop:"fuotherRate",label:"预测其他费用率(%)",width:120,align:"center"},{prop:"fudiscoutRate",label:"预测折扣率(%)",width:120,align:"center"}],totaldisColumn:[{prop:"discostRate",label:"目标车险合计保单成本率(%)",width:120,align:"center"},{prop:"dispayRate",label:"目标保单赔付率(%)",width:140,align:"center"},{prop:"disfeeRate",label:"目标保单费用率(%)",width:120,align:"center"},{prop:"disserverRate",label:"目标手续费率(%)",width:120,align:"center"},{prop:"dissalecostRate",label:"目标销售人力成本率(%)",width:120,align:"center"},{prop:"dissaledriverRate",label:"目标营销推动费用率(%)",width:120,align:"center"},{prop:"disclaimRate",label:"目标理赔费用率(%)",width:120,align:"center"},{prop:"disfixedRate",label:"目标固定费用率(%)",width:120,align:"center"},{prop:"disotherRate",label:"目标其他费用率(%)",width:120,align:"center"},{prop:"disdiscoutRate",label:"目标折扣率(%)",width:120,align:"center"}],totaltargetData:[{fucostRate:"96",fupayRate:"103.45",fufeeRate:"11",fuserverRate:"9",fusalecostRate:"15",fusaledriverRate:"3",fuclaimRate:"55",fuotherRate:"4",fudiscoutRate:"82"}],totaldisData:[{discostRate:"1",dispayRate:"1",disfeeRate:"1",disserverRate:"1",dissalecostRate:"-1",dissaledriverRate:"2",disclaimRate:"1",disfixedRate:"1",disotherRate:"1",disdiscoutRate:"1"}],selectDialogArr:["isInverseDiscount","isInverseCost"],inputDialogArr:["targepreratio","targetocost","targebicost","targepayrate","hisfullpayrate","bfpayrate","salecostRate","saledriverRate","claimRate","otherRate","forcerate"],columnShowList:["智能推荐结果","参数配置","经营结果预测","目标偏离程度"],autoDownEdit2:!1,marketEdit2:!1,chartDialogVisible:!1,chartQuery:{lastYearCount:[],lastYearAmount:[],age:[]},itemList:[{code:"lastYearCount",name:"商业险上年出险次数",detail:[{code:"未投保商业险",name:"未投保商业险"},{code:"0次",name:"0次"},{code:"1次",name:"1次"},{code:"2次",name:"2次"},{code:"3次及以上",name:"3次及以上"}]},{code:"lastYearAmount",name:"商业险上年出险金额",detail:[{code:"0-1000",name:"0-1000"},{code:"1000-2000",name:"1000-2000"},{code:"2000-5000",name:"2000-5000"},{code:"5000-10000",name:"5000-10000"},{code:"10000+",name:"10000+"}]},{code:"age",name:"年龄",detail:[{code:"20以下",name:"20以下"},{code:"20-30",name:"20-30"},{code:"30-45",name:"30-45"},{code:"45-60",name:"45-60"},{code:"60以上",name:"60以上"}]}],chartDataVisible:!1,chartVisible:!1,chartCols:[{prop:"groupNo",width:60,label:"分组编号"},{prop:"groupContent",width:120,label:"分组描述"}],chartData:[{groupNo:"分组1",groupContent:"0次,0-1000,20-30"},{groupNo:"分组2",groupContent:"1次,1000-2000,31-45"},{groupNo:"分组3",groupContent:"1次,1000-2000,31-45"},{groupNo:"分组4",groupContent:"2次,2000-5000,20以下"},{groupNo:"分组5",groupContent:"3次及以上,5000-10000,20-30"},{groupNo:"分组6",groupContent:"3次及以上,5000-10000,20-30"}],lifeData:[],columns1:[{prop:"channel1",label:"对外报送渠道",width:120},{prop:"channel2",label:"公司内部渠道",width:120},{prop:"a",label:"保单年中介机构手续费率或个人代理人费用率平均值",width:360},{prop:"b",label:"保单年费用率",width:120},{prop:"c",label:"保单年赔付率",width:120},{prop:"d",label:"保单年成本率",width:120},{prop:"e",label:"保单年赔付率不含理赔费用",width:240},{prop:"f",label:"理赔费用率",width:120},{prop:"g",label:"保费(元)",width:120},{prop:"h",label:"总折扣率",width:120},{prop:"i",label:"自主折扣率",width:120},{prop:"j",label:"降价保单占比",width:120},{prop:"k",label:"涨价保单占比",width:120}],data1:[{channel1:"传统直销",channel2:"直接业务"},{channel1:"传统直销",channel2:"三进直销"},{channel1:"传统直销",channel2:"小计"},{channel1:"新渠道直销",channel2:"新渠道直销"},{channel1:"电话销售",channel2:"新渠道直销"},{channel1:"网络销售",channel2:"新渠道直销"},{channel1:"网络销售",channel2:"小计"},{channel1:"个人代理",channel2:"个人代理"},{channel1:"个人代理",channel2:"咨询服务个代"},{channel1:"个人代理",channel2:"三进个代"},{channel1:"个人代理",channel2:"小计"},{channel1:"兼业代理",channel2:"寿代产"},{channel1:"兼业代理",channel2:"车行业务"},{channel1:"兼业代理",channel2:"普通兼业代理"},{channel1:"兼业代理",channel2:"银行邮政代理"},{channel1:"兼业代理",channel2:"养老代产"},{channel1:"兼业代理",channel2:"小计"},{channel1:"专业代理",channel2:"专业代理"},{channel1:"专业代理",channel2:"EA门店"},{channel1:"专业代理",channel2:"小计"},{channel1:"经纪业务",channel2:"经纪业务"},{channel1:"经纪业务",channel2:"小计"}],columns2:[{prop:"cartype1",label:"车种",width:120},{prop:"cartype2",label:"细分车种",width:120},{prop:"a",label:"保单年中介机构手续费率平均值",width:240},{prop:"b",label:"保单年个人代理人费用率平均值",width:240},{prop:"c",label:"保单年费用率",width:120},{prop:"d",label:"保单年赔付率含理赔费用",width:120},{prop:"e",label:"保单年成本率",width:120},{prop:"f",label:"保单年赔付率不含理赔费用",width:120},{prop:"g",label:"理赔费用率",width:120},{prop:"h",label:"保费(元)",width:120},{prop:"i",label:"总折扣率",width:120},{prop:"j",label:"自主折扣率",width:120},{prop:"k",label:"降价保单占比",width:120},{prop:"l",label:"涨价保单占比",width:120}],data2:[{cartype1:"客车",cartype2:"家庭自用车"},{cartype1:"客车",cartype2:"营业客车"},{cartype1:"客车",cartype2:"非营业客车"},{cartype1:"货车",cartype2:"营业货车"},{cartype1:"货车",cartype2:"非营业货车"},{cartype1:"其他",cartype2:"其他"}],columns3:[{prop:"val",label:"",width:120},{prop:"cartype1",label:"自主折扣模拟值",width:240,children:[{prop:"a",label:"保单数占比",width:120},{prop:"b",label:"保单赔付率",width:120}]}],data3:[{val:"01|(low,0.1]"},{val:"02|(0.1,0.2]"},{val:"03|(0.2,0.3]"},{val:"04|(0.3,0.4]"},{val:"05|(0.4,0.5]"},{val:"06|(0.5,0.6]"},{val:"07|(0.6,0.7]"},{val:"08|(0.7,0.8]"},{val:"09|(0.8,0.9]"},{val:"10|(0.9,1.0]"},{val:"11|(1.0,1.1]"},{val:"12|(1.1,1.2]"},{val:"13|(1.2,1.3]"},{val:"14|(1.3,1.4]"},{val:"15|(1.4,1.5]"},{val:"16|(1.5,1.6]"},{val:"17|(1.6,1.7]"},{val:"18|(1.7,1.8]"},{val:"19|(1.8,1.9]"},{val:"20|(1.9,2.0]"},{val:"21|(2.0,high]"}],loading:!1,autorateValue:0,marketrateValue:0}},computed:i()({autoDownEdit:function(){for(var t=[],e=0;e<this.data.length;e++)t.push(!1);return t},marketEdit:function(){for(var t=[],e=0;e<this.data.length;e++)t.push(!1);return t},mergeData1:function(){return Object(r.a)(this.data1,["channel1"])},mergeData2:function(){return Object(r.a)(this.data2,["cartype1"])}},Object(n.d)({sectors:function(t){return t.individual.sectors},lifeTable:function(t){return t.individual.lifeTable},tableHeader:function(t){return t.app.tableHeader}})),beforeRouteEnter:function(t,e,a){a(function(t){t.oldUrl=e.path})},methods:{simulate:function(){this.monishow=!0,this.loading=!0;var t=this;setTimeout(function(){t.loading=!1},2e3)},merge1:function(t){var e=t.row,a=t.column;t.rowIndex,t.columnIndex;if(["channel1"].includes(a.property)){if(e.rowSpan[a.property]>1)return[e.rowSpan[a.property],1];if(0===e.rowSpan[a.property])return[0,0]}},merge2:function(t){var e=t.row,a=t.column;t.rowIndex,t.columnIndex;if(["cartype1"].includes(a.property)){if(e.rowSpan[a.property]>1)return[e.rowSpan[a.property],1];if(0===e.rowSpan[a.property])return[0,0]}},handlePrev:function(){this.$router.push({path:"/admin/individual/declare/custombusiness"})},exportData:function(){var t=this;this.$confirm("确定导出数据记录吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"info"}).then(function(){t.$message({type:"success",message:"导出成功!"})}).catch(function(){})},importData:function(){this.impDialogVisible=!1,this.$message({type:"success",message:"导入成功!"})},supply:function(){this.$router.push({path:"/admin/individual/declare/supply"})},sectorClick:function(t){if("8"===t)this.totalvisble=!0;else{var e=this.sectors.findIndex(function(e){return e.id===t});this.businessSmallType=this.lifeData[e].cols,this.data=this.lifeData[e].detailData}},toggleColumn:function(t,e){this.columns.forEach(function(a){t.includes(a.firstTitle)&&(a.isShow=e)})},toggleColumnShow:function(t){var e=["智能推荐结果","参数配置","经营结果预测","目标偏离程度"],a=[],l=[];4===t.length?a=e:0===t.length?l=e:e.forEach(function(e){t.includes(e)?a.push(e):l.push(e)}),this.toggleColumn(a,!0),this.toggleColumn(l,!1)},disCountChange:function(t,e){this.autoDownEdit[e]="是"===t},costChange:function(t,e){this.marketEdit[e]="是"===t},disCountChange2:function(t){this.autoDownEdit2="是"===t},costChange2:function(t){this.marketEdit2="是"===t},drawLine:function(t,e){var a=this.$echarts.init(document.getElementById(t),"light");a.clear(),a.setOption(e)},showChartList:function(){var t=this,e=["分组1","分组2","分组3","分组4","分组5","分组6"];this.$nextTick(function(){var a={title:{text:"核保定价-经营成本率对比分析",left:"center",top:10},tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},grid:{top:"25%",bottom:"10%",left:"5%",right:"8%",containLabel:!0},legend:{itemWidth:15,itemHeight:8,itemGap:8,data:["预期经营成本率","预期市场费用率","非市场费用率","优惠比率"],top:50},xAxis:[{type:"category",data:e,axisPointer:{type:"shadow"}}],yAxis:[{type:"value",min:0,max:120,interval:20,axisLabel:{formatter:"{value}"}}],series:[{name:"预期经营成本率",type:"bar",stack:"合计比率",barWidth:30,data:[40.56,19.56,19.65,10.17,19.9,40.01],itemStyle:{normal:{color:"#29A1DC"}}},{name:"预期市场费用率",type:"bar",stack:"合计比率",barWidth:30,data:[26.1,27.3,16.5,15.4,25.6,27.2],itemStyle:{normal:{color:"#F49C1B"}}},{name:"非市场费用率",type:"bar",stack:"合计比率",barWidth:30,data:[20.1,19.9,21.2,18.9,19.7,21.6],itemStyle:{normal:{color:"#F0466E"}}},{name:"优惠比率",type:"bar",stack:"合计比率",barWidth:30,data:[11.23,12.32,10.95,10.88,10.97,10.96],itemStyle:{normal:{color:"#A4B2B1"}}}]};t.drawLine("myChart1",a);var l={title:{text:"核保定价-预期赔付率对比分析 ",top:10,left:"center"},tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},grid:{top:"25%",bottom:"10%",left:"5%",right:"8%",containLabel:!0},legend:{top:50,data:["预期商业险","实际商业险","预期交强险","实际交强险"],itemWidth:15,itemHeight:8,itemGap:8},xAxis:[{type:"category",data:e,axisPointer:{type:"shadow"}}],yAxis:[{type:"value",min:30,max:75,interval:15,axisLabel:{formatter:"{value} %"}},{type:"value",min:110,max:130,interval:5,axisLabel:{formatter:"{value} %"}}],series:[{name:"预期商业险",type:"line",yAxisIndex:0,data:[39.5,43.1,48.4,53.5,65.2,73.3],itemStyle:{normal:{color:"#F0466E"}}},{name:"实际商业险",type:"line",yAxisIndex:0,data:[34.9,42.4,44.1,50.3,60.9,62.8],itemStyle:{normal:{color:"#F49C1B"}}},{name:"预期交强险",type:"line",yAxisIndex:1,data:[118.83,121.79,122.76,119.81,121.78,119.79],itemStyle:{normal:{color:"#A4B2B1"}}},{name:"实际交强险",type:"line",yAxisIndex:1,data:[119.13,122.09,123.06,118.91,120.61,119.57],itemStyle:{normal:{color:"#29A1DC"}}}]};t.drawLine("myChart2",l);var i={title:{text:"核保定价-保费收入对比分析",left:"center",top:10},tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},grid:{top:"25%",bottom:"10%",left:"5%",right:"8%",containLabel:!0},legend:{top:50,itemWidth:15,itemHeight:8,itemGap:8,data:["预期年保费收入","实际年保费收入","预期年保费收入","实际年保费收入"]},xAxis:[{type:"category",data:e,axisPointer:{type:"shadow"}}],yAxis:[{type:"value",position:"left",min:1500,max:5e3,interval:500,axisLabel:{formatter:"{value}"}},{type:"value",position:"right",min:5,max:25,interval:5,axisLabel:{formatter:"{value} %"}}],series:[{name:"预期年保费收入",type:"bar",data:[4371.3,2914.2,2428.5,2586.6,3161.5,4538.2],itemStyle:{normal:{color:"#29A1DC"}}},{name:"实际年保费收入",type:"bar",data:[4383.2,2916.4,2427.9,2588.7,3162.3,4537.9],itemStyle:{normal:{color:"#F49C1B"}}},{name:"预期年保费收入",type:"line",yAxisIndex:1,data:[21.86,14.57,12.14,12.93,15.81,22.69],itemStyle:{normal:{color:"#A4B2B1"}}},{name:"实际年保费收入",type:"line",yAxisIndex:1,data:[21.14,14.93,12.86,12.57,16.31,22.19],itemStyle:{normal:{color:"red"}}}]};t.drawLine("myChart3",i);var r={title:{text:"核保定价-市场费用率对比分析",left:"center",top:10},tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},grid:{top:"25%",bottom:"10%",left:"5%",right:"8%",containLabel:!0},legend:{top:50,data:["推荐市场费用率","商业险市场费用率均值","历史保单市场费用率"],itemWidth:15,itemHeight:8,itemGap:8},xAxis:[{type:"category",data:e,axisPointer:{type:"shadow"}}],yAxis:[{type:"value",min:30,max:40,interval:2,axisLabel:{formatter:"{value} %"}}],series:[{name:"推荐市场费用率",type:"line",data:[38.5,39.1,36.4,39.5,39.2,36.3],markLine:{data:[[{name:"行业自律线:21%",coord:[0,21]},{coord:[5,21]}],[{name:"阈值线:35%",coord:[0,35]},{coord:[5,35]}]]},itemStyle:{normal:{color:"#F49C1B"}}},{name:"商业险市场费用率均值",type:"line",data:[35.9,36.4,37.1,36.3,34.8,36.5],itemStyle:{normal:{color:"#29A1DC"}}},{name:"历史保单市场费用率",type:"line",data:[37.9,38.9,35.8,39.7,38.6,36.7],itemStyle:{normal:{color:"#A4B2B1"}}}]};t.drawLine("myChart4",r)})},chartDataQuery:function(){this.chartDialogVisible=!0,this.chartDataVisible=!0,this.chartVisible=!0,this.showChartList()},premiumExpect:function(){},formatTooltip:function(t){return t/100},handleAutorateChange:function(t){this.marketrateValue=t+10},handleMarketrateChange:function(t){this.autorateValue=t-2}}},c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"biz-content"},[a("biz-sector-list",{attrs:{title:"车种选择",sectors:t.sectors},on:{sectorClick:t.sectorClick}}),t._v(" "),a("div",{staticClass:"data"},[a("div",{staticClass:"title"},[a("div",{staticClass:"btn"},[a("el-checkbox-group",{on:{change:t.toggleColumnShow},model:{value:t.columnShowList,callback:function(e){t.columnShowList=e},expression:"columnShowList"}},[a("el-checkbox",{attrs:{label:"智能推荐结果"}}),t._v(" "),a("el-checkbox",{attrs:{label:"参数配置"}}),t._v(" "),a("el-checkbox",{attrs:{label:"经营结果预测"}}),t._v(" "),a("el-checkbox",{attrs:{label:"目标偏离程度"}})],1),t._v(" "),a("div",{staticStyle:{float:"right"}})],1)]),t._v(" "),a("div",{staticClass:"table"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.data,stripe:"","max-height":"450","header-cell-style":t.tableHeader}},[a("el-table-column",{attrs:{"header-align":"center",fixed:"",label:"",align:"center","min-width":"50"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text"},on:{click:function(e){t.editDialogVisible=!0}}},[t._v("编辑")])]}}])}),t._v(" "),t._l(t.businessSmallType,function(t){return a("el-table-column",{key:t.prop,attrs:{fixed:"","header-align":"center",align:t.align?t.align:"center","min-width":t.width,label:t.label,prop:t.prop}})}),t._v(" "),t._l(t.columns,function(e){return e.isShow?a("el-table-column",{key:e.prop,attrs:{"header-align":"center",label:e.firstTitle}},t._l(e.secondContents,function(e){return a("el-table-column",{key:e.prop,attrs:{"header-align":"center",label:e.secondTitle,align:e.align,"min-width":e.width,prop:e.prop},scopedSlots:t._u([{key:"default",fn:function(l){return[t.editFlag&&("价格优先"===l.row.psmode||"自定义"===l.row.psmode)&&"autorate"===e.prop||t.editFlag&&("费用优先"===l.row.psmode||"自定义"===l.row.psmode)&&"marketrate"===e.prop?a("el-input",{attrs:{size:"small"},model:{value:l.row[e.prop],callback:function(a){t.$set(l.row,e.prop,a)},expression:"scope.row[secondContent.prop]"}}):t.editFlag&&-1!==t.inputArr.indexOf(e.prop)?a("el-input",{attrs:{size:"small"},model:{value:l.row[e.prop],callback:function(a){t.$set(l.row,e.prop,a)},expression:"scope.row[secondContent.prop]"}}):t.editFlag&&"psmode"===e.prop?a("el-select",{attrs:{size:"small"},model:{value:l.row[e.prop],callback:function(a){t.$set(l.row,e.prop,a)},expression:"scope.row[secondContent.prop]"}},[a("el-option",{attrs:{label:"价格优先",value:"价格优先"}}),t._v(" "),a("el-option",{attrs:{label:"费用优先",value:"费用优先"}}),t._v(" "),a("el-option",{attrs:{label:"自定义",value:"自定义"}})],1):a("span",[t._v(t._s(l.row[e.prop]))])]}}])})})):t._e()})],2)],1)]),t._v(" "),a("div",{staticClass:"data"},[t._m(0),t._v(" "),a("div",{staticClass:"table"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.totaltargetData,stripe:"",border:"","header-cell-style":t.tableHeader}},t._l(t.totaltargetColumn,function(t){return a("el-table-column",{key:t.prop,attrs:{"header-align":"center",prop:t.prop,"min-width":t.width,label:t.label,align:t.align}})}))],1)]),t._v(" "),a("div",{staticClass:"data"},[t._m(1),t._v(" "),a("div",{staticClass:"table"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.totaldisData,stripe:"",border:"","header-cell-style":t.tableHeader}},t._l(t.totaldisColumn,function(t){return a("el-table-column",{key:t.prop,attrs:{"header-align":"center",prop:t.prop,"min-width":t.width,label:t.label,align:t.align}})}))],1)]),t._v(" "),a("div",{staticClass:"data"},[t._m(2),t._v(" "),a("div",{staticClass:"table"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.totaldisData,stripe:"",border:"","header-cell-style":t.tableHeader}},t._l(t.totaldisColumn,function(t){return a("el-table-column",{key:t.prop,attrs:{"header-align":"center",prop:t.prop,"min-width":t.width,label:t.label,align:t.align}})}))],1)]),t._v(" "),a("div",{staticStyle:{height:"30px","line-height":"30px",margin:"15px 0 50px 15px"}},[a("el-form",{attrs:{inline:!0,size:"small",model:t.expect}},[a("el-form-item",{attrs:{label:"保费预测区间"}},[a("el-date-picker",{attrs:{type:"month",placeholder:"请选择时间段"},model:{value:t.expect.startDate,callback:function(e){t.$set(t.expect,"startDate",e)},expression:"expect.startDate"}}),t._v(" "),a("span",[t._v("至")]),t._v(" "),a("el-date-picker",{attrs:{type:"month",placeholder:"请选择时间段"},model:{value:t.expect.endDate,callback:function(e){t.$set(t.expect,"endDate",e)},expression:"expect.endDate"}})],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{plain:"",size:"small",type:"primary"},on:{click:t.premiumExpect}},[t._v("保费预测")])],1),t._v(" "),a("el-form-item",{attrs:{label:"保费规模"}},[a("el-input",{staticStyle:{width:"150px"},model:{value:t.expect.minpremium,callback:function(e){t.$set(t.expect,"minpremium",e)},expression:"expect.minpremium"}}),t._v(" "),a("span",[t._v("至")]),t._v(" "),a("el-input",{staticStyle:{width:"150px"},model:{value:t.expect.maxpremium,callback:function(e){t.$set(t.expect,"maxpremium",e)},expression:"expect.maxpremium"}})],1)],1)],1),t._v(" "),a("div",{staticClass:"option"},[a("back-button",{on:{prev:t.handlePrev}},[t._v("上一步")]),t._v(" "),a("el-button",{attrs:{type:"primary",size:"small",plain:""}},[t._v("下载模板")]),t._v(" "),a("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:function(e){t.impDialogVisible=!0}}},[t._v("导入模板")]),t._v(" "),a("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:t.exportData}},[t._v("导出数据")]),t._v(" "),a("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:function(e){t.editFlag=!1}}},[t._v("保存")]),t._v(" "),a("el-button",{attrs:{type:"primary",size:"small",plain:""}},[t._v("确认")])],1),t._v(" "),a("el-dialog",{attrs:{title:"编辑",visible:t.editDialogVisible,width:"80%"},on:{"update:visible":function(e){t.editDialogVisible=e}}},[a("div",{staticClass:"data"},[a("div",{staticClass:"title"},[a("div",{staticClass:"desc"},[t._v("业务单元")])]),t._v(" "),a("div",{staticClass:"table"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.bizSmallTypeData,stripe:"",border:"","header-cell-style":t.tableHeader}},t._l(t.bizSmallTypeColumn,function(t){return a("el-table-column",{key:t.prop,attrs:{"header-align":"center",prop:t.prop,"min-width":t.width,label:t.label,align:t.align}})}))],1)]),t._v(" "),a("div",{staticClass:"data"},[a("div",{staticClass:"title"},[a("div",{staticClass:"desc"},[t._v("参数配置")])]),t._v(" "),a("div",{staticClass:"table"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.paramConfigData,stripe:"",border:"","header-cell-style":t.tableHeader}},t._l(t.paramConfigColumn,function(e){return a("el-table-column",{key:e.prop,attrs:{"header-align":"center",prop:e.prop,"min-width":e.width,label:e.label,align:e.align},scopedSlots:t._u([{key:"default",fn:function(l){return[-1!==t.inputDialogArr.indexOf(e.prop)?a("el-input",{attrs:{size:"small"},model:{value:l.row[e.prop],callback:function(a){t.$set(l.row,e.prop,a)},expression:"scope.row[column.prop]"}}):"psmode"===e.prop?a("el-select",{attrs:{size:"small"},model:{value:l.row[e.prop],callback:function(a){t.$set(l.row,e.prop,a)},expression:"scope.row[column.prop]"}},[a("el-option",{attrs:{label:"价格优先",value:"价格优先"}}),t._v(" "),a("el-option",{attrs:{label:"费用优先",value:"费用优先"}}),t._v(" "),a("el-option",{attrs:{label:"自定义",value:"自定义"}})],1):"autorate"===e.prop?a("div",{staticClass:"block"},["价格优先"!==l.row.psmode&&"自定义"!==l.row.psmode||"autorate"!==e.prop?t._e():a("el-slider",{attrs:{"format-tooltip":t.formatTooltip},on:{change:t.handleAutorateChange},model:{value:t.autorateValue,callback:function(e){t.autorateValue=e},expression:"autorateValue"}}),t._v(" "),a("span",[t._v(t._s(t.autorateValue/100))])],1):"marketrate"===e.prop?a("div",{staticClass:"block"},["费用优先"!==l.row.psmode&&"自定义"!==l.row.psmode||"marketrate"!==e.prop?t._e():a("el-slider",{attrs:{"format-tooltip":t.formatTooltip},on:{change:t.handleMarketrateChange},model:{value:t.marketrateValue,callback:function(e){t.marketrateValue=e},expression:"marketrateValue"}}),t._v(" "),a("span",[t._v(t._s(t.marketrateValue/100))])],1):a("span",[t._v(t._s(l.row[e.prop]))])]}}])})}))],1)]),t._v(" "),a("div",{staticClass:"data"},[a("div",{staticClass:"title"},[a("div",{staticClass:"desc"},[t._v("经营结果预测")])]),t._v(" "),a("div",{staticClass:"table"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.targetData,stripe:"",border:"","header-cell-style":t.tableHeader}},t._l(t.targetColumn,function(t){return a("el-table-column",{key:t.prop,attrs:{"header-align":"center",prop:t.prop,"min-width":t.width,label:t.label,align:t.align}})}))],1)]),t._v(" "),a("div",{staticClass:"data"},[a("div",{staticClass:"title"},[a("div",{staticClass:"desc"},[t._v("目标偏离程度")])]),t._v(" "),a("div",{staticClass:"table"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.disData,stripe:"",border:"","header-cell-style":t.tableHeader}},t._l(t.disColumn,function(t){return a("el-table-column",{key:t.prop,attrs:{"header-align":"center",prop:t.prop,"min-width":t.width,label:t.label,align:t.align}})}))],1)]),t._v(" "),a("div",{staticClass:"option",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"}},[t._v("计算")]),t._v(" "),a("el-button",{attrs:{type:"primary"}},[t._v("下一行")]),t._v(" "),a("el-button",{attrs:{type:"primary"}},[t._v("保存")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.editDialogVisible=!1}}},[t._v("关闭")])],1)]),t._v(" "),a("el-dialog",{attrs:{title:"导入数据",visible:t.impDialogVisible,width:"40%"},on:{"update:visible":function(e){t.impDialogVisible=e}}},[a("el-upload",{attrs:{action:"https://jsonplaceholder.typicode.com/posts/",multiple:""}},[a("el-button",{attrs:{size:"small",type:"primary"}},[t._v("选择文件")]),t._v(" "),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("只能上传excel文件，且不超过500kb")])],1),t._v(" "),a("div",{staticClass:"dialog-footer",staticStyle:{"text-align":"center"},attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary",plain:""},on:{click:t.importData}},[t._v("导入")]),t._v(" "),a("el-button",{attrs:{type:"primary",plain:""},on:{click:function(e){t.impDialogVisible=!1}}},[t._v("关闭")])],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"图表展示",fullscreen:"",visible:t.chartDialogVisible},on:{"update:visible":function(e){t.chartDialogVisible=e}}},[a("el-container",[a("el-header",[a("el-form",{attrs:{inline:!0,size:"small",model:t.chartQuery}},[t._l(t.itemList,function(e){return a("el-form-item",{key:e.code,attrs:{label:e.name,prop:e.code}},[a("el-select",{attrs:{placeholder:"请选择",size:"medium",multiple:""},model:{value:t.chartQuery[e.code],callback:function(a){t.$set(t.chartQuery,e.code,a)},expression:"chartQuery[item.code]"}},t._l(e.detail,function(t){return a("el-option",{key:t.code,attrs:{label:t.name,value:t.code}})}))],1)}),t._v(" "),a("el-form-item",[a("el-button",{attrs:{plain:"",size:"small",type:"primary"},on:{click:t.chartDataQuery}},[t._v("查看")])],1)],2)],1),t._v(" "),a("el-container",[a("el-aside",{directives:[{name:"show",rawName:"v-show",value:t.chartDataVisible,expression:"chartDataVisible"}],attrs:{width:"20%"}},[a("base-table",{attrs:{width:t.chartCols.width,columns:t.chartCols,data:t.chartData}})],1),t._v(" "),a("el-main",{directives:[{name:"show",rawName:"v-show",value:t.chartVisible,expression:"chartVisible"}],staticStyle:{"margin-left":"10px",background:"#F6F5F5"},attrs:{width:"80%"}},[a("span",{on:{click:function(e){t.chartDataVisible=!t.chartDataVisible}}},[a("i",{staticClass:"iconfont icon-showleft"})]),t._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("div",{style:{width:"100%",height:"350px"},attrs:{id:"myChart1"}})]),t._v(" "),a("el-col",{attrs:{span:12}},[a("div",{style:{width:"100%",height:"350px"},attrs:{id:"myChart2"}})])],1),t._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("div",{style:{width:"100%",height:"350px"},attrs:{id:"myChart3"}})]),t._v(" "),a("el-col",{attrs:{span:12}},[a("div",{style:{width:"100%",height:"350px"},attrs:{id:"myChart4"}})])],1)],1)],1)],1)],1),t._v(" "),a("el-dialog",{staticClass:"result",attrs:{title:"经营结果模拟",visible:t.monishow,width:"80%"},on:{"update:visible":function(e){t.monishow=e}}},[t.loading?a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"1308.98px",height:"519.24px",position:"absolute","z-index":"99999","background-color":"rgba(0,0,0,.1)"},attrs:{"element-loading-text":"系统正在进行经营结果模拟测算，预计 n分钟测算完成以后可查看结果"}}):t._e(),t._v(" "),t.loading?t._e():a("el-tabs",{attrs:{type:"border-card"}},[a("el-tab-pane",{attrs:{label:"业务来源"}},[a("base-table",{attrs:{columns:t.columns1,data:t.mergeData1,spanMethod:t.merge1,rowKey:"id",showSummary:!0}})],1),t._v(" "),a("el-tab-pane",{attrs:{label:"车种"}},[a("base-table",{attrs:{columns:t.columns2,data:t.mergeData2,spanMethod:t.merge2,rowKey:"id",showSummary:!0}})],1),t._v(" "),a("el-tab-pane",{attrs:{label:"折扣系数分布"}},[a("base-table",{attrs:{columns:t.columns3,data:t.data3,rowKey:"id",showSummary:!0}})],1)],1),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],staticClass:"option"},[a("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:t.exportData}},[t._v("导出模拟经营结果")])],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"整体",visible:t.totalvisble,width:"80%"},on:{"update:visible":function(e){t.totalvisble=e}}},[a("div",{staticClass:"data"},[a("div",{staticClass:"title"},[a("div",{staticClass:"desc"},[t._v("整体经营结果预测")])]),t._v(" "),a("div",{staticClass:"table"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.totaltargetData,stripe:"",border:"","header-cell-style":t.tableHeader}},t._l(t.totaltargetColumn,function(t){return a("el-table-column",{key:t.prop,attrs:{"header-align":"center",prop:t.prop,"min-width":t.width,label:t.label,align:t.align}})}))],1)]),t._v(" "),a("div",{staticClass:"data"},[a("div",{staticClass:"title"},[a("div",{staticClass:"desc"},[t._v("整体目标偏离程度")])]),t._v(" "),a("div",{staticClass:"table"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.totaldisData,stripe:"",border:"","header-cell-style":t.tableHeader}},t._l(t.totaldisColumn,function(t){return a("el-table-column",{key:t.prop,attrs:{"header-align":"center",prop:t.prop,"min-width":t.width,label:t.label,align:t.align}})}))],1)]),t._v(" "),a("div",{staticClass:"data"},[a("div",{staticClass:"title"},[a("div",{staticClass:"desc"},[t._v("监管报送偏离程度")])]),t._v(" "),a("div",{staticClass:"table"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.totaldisData,stripe:"",border:"","header-cell-style":t.tableHeader}},t._l(t.totaldisColumn,function(t){return a("el-table-column",{key:t.prop,attrs:{"header-align":"center",prop:t.prop,"min-width":t.width,label:t.label,align:t.align}})}))],1)])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title"},[e("div",{staticClass:"desc"},[this._v("经营结果预测")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title"},[e("div",{staticClass:"desc"},[this._v("目标偏离程度")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title"},[e("div",{staticClass:"desc"},[this._v("监管报送偏离程度")])])}]};var p=a("VU/8")(s,c,!1,function(t){a("FHt8")},"data-v-659d9504",null);e.default=p.exports},FHt8:function(t,e){}});