//tealium universal tag - utag.94 ut4.0.201708150747, Copyright 2017 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader){var u={};utag.o[loader].sender[id]=u;if(utag.ut===undefined){utag.ut={};}if(utag.ut.loader===undefined){u.loader=function(o){var a,b,c,l;a=document;if(o.type==="iframe"){b=a.createElement("iframe");b.setAttribute("height","1");b.setAttribute("width","1");b.setAttribute("style","display:none");b.setAttribute("src",o.src);}else if(o.type==="img"){utag.DB("Attach img: "+o.src);b=new Image();b.src=o.src;return;}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.src=o.src;}if(o.id){b.id=o.id;}if(typeof o.cb==="function"){b.hFlag=0;b.onreadystatechange=function(){if((this.readyState==='complete'||this.readyState==='loaded')&&!b.hFlag){b.hFlag=1;o.cb();}};b.onload=function(){if(!b.hFlag){b.hFlag=1;o.cb();}};}l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l==="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b);}}};}else{u.loader=utag.ut.loader;}
u.ev={'view':1};u.map={"dfa_cat":"cat","dfa_type":"type","product_name":"u1","product_sku":"u2","product_quantity":"u3","order_id":"u4","customer_city":"u5","customer_state":"u6","customer_zip":"u7","product_price":"u8","order_level_discount_fix":"u9","total_products":"u11","order_subtotal":"u12"};u.extend=[function(a,b){try{if(b['page_type'].toString().toLowerCase()=='HOME'.toLowerCase()){b['dfa_cat']='ad1';b['dfa_type']='adidas'}}catch(e){utag.DB(e)}},function(a,b){try{if((b['page_type'].toString().toLowerCase()=='HOME'.toLowerCase()&&b['is_mobile'].toString().toLowerCase()=='TRUE'.toLowerCase())){b['dfa_cat']='mobil555';b['dfa_type']='adidas'}}catch(e){utag.DB(e)}},function(a,b){try{if(b['page_type'].toString().toLowerCase()=='SHOPPING CART'.toLowerCase()){b['dfa_cat']='shopp967';b['dfa_type']='adidas'}}catch(e){utag.DB(e)}},function(a,b){try{if((typeof b['order_id']!='undefined'&&b['order_id']!=''&&b['is_mobile'].toString().indexOf('')>-1)){b['dfa_cat']='qw1';b['dfa_type']='sales'}}catch(e){utag.DB(e)}},function(a,b){try{if((typeof b['order_id']!='undefined'&&b['order_id']!=''&&typeof b['is_mobile']!='undefined'&&b['is_mobile']!=''&&b['is_mobile'].toString().toLowerCase()=='TRUE'.toLowerCase())){b['dfa_cat']='adida895';b['dfa_type']='sales'}}catch(e){utag.DB(e)}},function(a,b){try{if((b['page_name'].toString().toLowerCase()=='EMAIL SIGNUP'.toLowerCase()&&b['signup_step'].toString().toLowerCase()=='START'.toLowerCase())){b['dfa_cat']='email403';b['dfa_type']='adidas'}}catch(e){utag.DB(e)}},function(a,b){try{if((b['page_name'].toString().toLowerCase()=='EMAIL SIGNUP'.toLowerCase()&&b['signup_step'].toString().toLowerCase()=='SUCCESS'.toLowerCase())){b['dfa_cat']='compl047';b['dfa_type']='sales'}}catch(e){utag.DB(e)}},function(a,b){try{if((b['page_name'].toString().toLowerCase()=='EMAIL SIGNUP'.toLowerCase()&&b['signup_step'].toString().toLowerCase()=='SUCCESS'.toLowerCase()&&b['is_mobile'].toString().toLowerCase()=='TRUE'.toLowerCase())){b['dfa_cat']='mobil688';b['dfa_type']='sales'}}catch(e){utag.DB(e)}},function(a,b){if(b.page_type=='PLP'){if(b.filter_sport=='TRAINING'){if(b.filter_gender=='WOMEN'){b.dfa_cat='women053';b.dfa_type='adidas';}else{b.dfa_cat='adida076';b.dfa_type='adida791';}}else if(b.filter_sport=='RUNNING'){b.dfa_cat='adida170';}else if(b.filter_sport=='BACK TO SPORT'){b.dfa_cat='backt0';b.dfa_type='adidas';}else if(b.filter_sport=='SOCCER'){b.dfa_cat='adida402';}else if(b.filter_sport=='TENNIS'){b.dfa_cat='tenni816';b.dfa_type='adidas';}else if(b.filter_collection=='BEST OF SPORT'){b.dfa_type='adida791';b.dfa_cat='sport0';}else if(b.filter_collection=='MESSI'){b.dfa_type='adidas';b.dfa_cat='socce004';}else if(b.filter_collection=='ACE'){b.dfa_type='adidas';b.dfa_cat='socce003';}else if(b.filter_collection=='X'){b.dfa_type='adidas';b.dfa_cat='socce002';}else if(b.filter_collection=='SUPERSTAR'){b.dfa_type='adidas';b.dfa_cat='adida0';}else if(b.filter_collection=='ZX FLUX'){b.dfa_type='adida791';b.dfa_cat='zxflu0';}else if(b.analytics_pagename.indexOf('MANCHESTER_UNITED_FC')>-1){b.dfa_type='adidas';b.dfa_cat='manch0';}
b.product_id=b.product_model_id=b.product_sku=b.product_name=[];}else if(b.page_type=='CLP'){if(b.filter_sport){b.dfa_type='adida791';if(b.filter_sport=='BASEBALL'){b.dfa_cat='adida842';}else if(b.filter_sport=='BASKETBALL'){b.dfa_cat='adida665';}else if(b.filter_sport=='BOOST'){b.dfa_type='adidas';b.dfa_cat='Runni0';}else if(b.filter_sport=='ULTRA BOOST'){b.dfa_type='adidas';b.dfa_cat='ultra0';}else if(b.filter_sport=='FOOTBALL'){b.dfa_cat='adida031';}else if(b.filter_sport=='RUNNING'){b.dfa_cat='adida170';}else if(b.filter_sport=='SOCCER'){b.dfa_type='adidas';b.dfa_cat='socce001';}else if(b.filter_sport=='TENNIS'){b.dfa_cat='tenni816';b.dfa_type='adidas';}else if(b.filter_sport=='TRAINING'){if(b.filter_gender=='WOMEN'){b.dfa_cat='women053';b.dfa_type='adidas';}else{b.dfa_cat='adida076';}}else if(b.filter_sport=='SPRINGBLADE'){b.dfa_type='adidas';b.dfa_cat='sprin097';}}else if(b.filter_gender){b.dfa_type='adidas';if(b.filter_gender=='KIDS'){b.dfa_cat='ad10';}else if(b.filter_gender=='MEN'){b.dfa_cat='MensG0';}else if(b.filter_gender=='WOMEN'){b.dfa_cat='women888';}}else if(b.filter_brand){if(b.filter_brand=='ORIGINALS'){b.dfa_type='adida791';b.dfa_cat='adida439';}else if(b.filter_brand=='ADIDAS NEO'){b.dfa_cat='neoal069';}}else if(b.is_customizable&&b.is_customizable=='TRUE'){b.dfa_type='adidas';b.dfa_cat='miadi693';}else if(document.location.pathname=='/us/neo'||document.location.pathname=='/us/content/neo'){b.dfa_type='adidas';b.dfa_cat='neoal069';}else if(document.location.pathname=='/us/c10'){b.dfa_type='adidas';b.dfa_cat='Origi0';}}else if(b.page_type=='PDP'&&b.product_id&&b.product_id.length==1){if(b.product_id[0]=='B32857'){b.dfa_cat='socce005';}else if(b.product_id[0]=='B32782'){b.dfa_cat='socce006';}else if(b.product_id[0]=='B23773'){b.dfa_cat='socce007';}
if(b.dfa_cat){b.dfa_type='adidas';}}else if(b.campaign_name){if(b.campaign_name=='CHAOS AND CONTROL'){b.dfa_type='adidas';if(b.page_name.indexOf('MESSI15')>-1){b.dfa_cat='socce000';}else if(b.page_name.indexOf('ACE15')>-1){b.dfa_cat='socce00';}else if(b.page_name.indexOf('X15')>-1){b.dfa_cat='socce0';}else if(b.product_sport&&b.product_sport=='FOOTBALL'){b.dfa_cat='socce001';}}}},function(a,b){if(!(b.dfa_cat||b.dfa_type)){return false;}}];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){var c,d,e,f,g;u.data={"qsp_delim":";","kvp_delim":"=","base_url":"","src":"2343011","type":"adida791","cat":"","multicat":"","ord":"","cost":"","qty":0,"total_qty":0,"countertype":"unique","conversioncount":"single","order_id":"","order_subtotal":"","product_id":[],"product_quantity":[],"product_unit_price":[]};for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){if(typeof utag_err!='undefined'){utag_err.push({e:'extension error:'+e,s:utag.cfg.path+'utag.'+id+'.js',l:c,t:'ex'})}}};c=[];g=[];for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){if(/^(cat|multicat|type|src|cost|qty|countertype|conversioncount|ord|order_id|order_subtotal|product_id|product_quantity|product_unit_price)$/.test(e[f])){u.data[e[f]]=b[d];}else{u.data[e[f]]=b[d];g.push(e[f]+u.data.kvp_delim+encodeURIComponent(b[d]))}}}}
u.data.order_id=u.data.order_id||u.data.ord||b._corder||"";u.data.order_subtotal=u.data.cost||u.data.order_subtotal||b._csubtotal||b._ctotal||"";if(u.data.product_id.length===0&&b._cprod!==undefined){u.data.product_id=b._cprod.slice(0);}
if((u.data.qty&&u.data.qty.length>0)||(u.data.product_quantity.length===0&&b._cquan!==undefined)){u.data.product_quantity=u.data.qty||b._cquan.slice(0);}
if(u.data.product_unit_price.length===0&&b._cprice!==undefined){u.data.product_unit_price=b._cprice.slice(0);}
u.data.base_url='//'+u.data.src+'.fls.doubleclick.net/activityi;src='+u.data.src+';type='+u.data.type+';';if(u.data.multicat===""){u.data.multicat_arr=[u.data.cat];}else{u.data.multicat_arr=u.data.multicat.split(';');}
if(u.data.order_id){if(u.data.conversioncount==="multi"&&u.data.product_quantity.length>0){for(f=0;f<u.data.product_quantity.length;f++){u.data.total_qty+=parseInt(u.data.product_quantity[f]);}
u.data.qty=u.data.total_qty;}else{u.data.qty=1;}
var dc_fl_prd=[];for(var i=0;i<u.data.product_id.length;i++){var prod_num=i+1;dc_fl_prd.push("i"+prod_num+":"+u.data.product_id[i]+"|p"+prod_num+":"+u.data.product_unit_price[i]+"|q"+prod_num+":"+u.data.product_quantity[i])}
u.prd=dc_fl_prd.join('|');if(u.prd){c.push("prd="+u.prd);}
c.push('qty='+(u.data.qty));c.push('cost='+(u.data.order_subtotal));if(g.length>0){c.push(g.join(';'));}
c.push('ord='+(u.data.order_id));}else if(u.data.countertype==='standard'){if(g.length>0){c.push(g.join(';'));}
c.push('ord='+parseInt(Math.random()*10000000000000));}else if(u.data.countertype==='unique'){if(g.length>0){c.push(g.join(';'));}
c.push('ord=1');c.push('num='+parseInt(Math.random()*10000000000000));}else{if(g.length>0){c.push(g.join(';'));}
c.push('ord='+(u.data.order_id?u.data.order_id:window.utag.data['cp.utag_main_ses_id']));}
for(f=0;f<u.data.multicat_arr.length;f++){u.loader({"type":"iframe","src":u.data.base_url+'cat='+u.data.multicat_arr[f]+((c.length>0)?';'+c.join(u.data.qsp_delim):'')+'?',"loc":"body","id":'utag_94_iframe'});}}};utag.o[loader].loader.LOAD(id);}('94','adidas.adidasglobal'));}catch(error){utag.DB(error);}
