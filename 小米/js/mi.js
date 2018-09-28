window.onload=function(){
	//购物车
	let cart =document.querySelector(".topbar-cart");
	let cart_list=document.querySelector(".topbar-cart-list");
	let cart_a=document.querySelector(".topbar-cart a");
	let cart_span=document.querySelector(".topbar-cart span");
	let cart_i=document.querySelector(".topbar-cart i");
	console.log(cart);
	cart.onmouseover=function(){
		cart_list.style.display="block";
		cart_list.style.height="100px";
		cart_list.style.boxShadow="0 6px 10px 2px rgba(0,0,0,0.3)";
		cart_list.style.boxShadowTop="";
		cart_a.style.color="#ff6700";
		cart_span.style.color="#ff6700";
		cart_i.style.color="#ff6700";
		cart.style.background="#fff";
			
	}
	cart.onmouseout=function(){
		cart_list.style.display="none";
		cart_list.style.height="0";
		cart_list.style.boxShadow="";
		cart.style.background="#424242";
		cart_a.style.color="#B0b0b0";
		cart_span.style.color="#b0b0b0";
		cart_i.style.color="#b0b0b0";
	}
	
	//搜索按钮变色
	//搜索按钮
	let search_btn=document.querySelector(".search-btn");
	console.log(search_btn);
	//搜索按钮内的i
	let i=document.querySelector(".iconfont.icon-sousuo");
	//搜索输入框
	let search_text=document.querySelector(".search-text");
	//搜索热词
	let hotword=document.querySelector(".search-hot-word");
	//搜索关键字
	let keyword=document.querySelector(".keyword-list")
	//搜索框获取焦点
	search_text.onfocus=function(){
		hotword.style.display="none";
		search_text.style.borderColor="#ff6700";
		search_btn.style.borderColor="#ff6700";
		keyword.style.display="block";
	}
	//搜索框失去焦点
	search_text.onblur=function(){
		hotword.style.display="block";
		search_text.style.borderColor="";
		search_btn.style.borderColor="";
		keyword.style.display="none";
	}
//	console.log(i);
	search_btn.onmouseover=function(){
		search_btn.style.background="#ff6700";
		i.style.color="#fff";
	}
	search_btn.onmouseout=function(){
		search_btn.style.background="";
		i.style.color="";
	}
	i.onmouseover=function(){
		search_btn.style.background="#ff6700";
		i.style.color="#fff";
	}
	
	
	
	//侧滑
	let title = document.querySelectorAll(".category-item");
	let children = document.querySelectorAll(".children");
//	let children_list =document.querySelectorAll(".children-list")
//	let children_list_width=children_list.offsetWidth;
//	console.log(children_list);
//	children.style.width=children_list_width;
//	console.log(children);
	for (let i=0;i<title.length;i++) {
		title[i].onmouseover=function(){
			for (let j=0;j<children.length;j++) {
				children[j].style.display="none";
			}
			children[i].style.display="block";
			title[i].style.background="#ff6700";
		}
		title[i].onmouseout=function(){
			children[i].style.display="none";
			title[i].style.background="";
		}
	}
	
	//产品引导下拉
	let nav_item = document.querySelectorAll(".nav-item");
	let site_header_menu=document.querySelectorAll(".site-header-menu");
	for(let i=0;i<nav_item.length-2;i++){
		nav_item[i].onmouseover=function(){
			for (let j=0;j<site_header_menu.length;j++) {
				site_header_menu[j].style.display="none";
			}
			site_header_menu[i].style.display="block";
			site_header_menu[i].style.height="229px";
		}
		nav_item[i].onmouseout=function(){
			site_header_menu[i].style.height="0";
			site_header_menu[i].style.display="none";
			
		}
	}
	
	//banner
	let dot=document.querySelectorAll(".ui-pager-item");
	let imgs=document.querySelectorAll(".home-hero-img img");
	let banner=document.querySelector(".home-hero-img");
	let lbtn=document.querySelector(".ui-prev");
	let rbtn=document.querySelector(".ui-next");
	let num=0;
	let t;
	banner_oi(dot,imgs,banner,lbtn,rbtn,"ui-pager-item-active",2000);
	
	//家电选项卡
	let tab_list_li=document.querySelectorAll(".tab-list li");
	let span16_list=document.querySelectorAll(".span16-list");
	console.log(span16_list);
	tab_list_li[0].classList.add("tab-active");
	span16_list[0].style.display="block";
	for(let i=0;i<tab_list_li.length;i++){
		tab_list_li[i].onmouseover=function(){
			tab_list_li[0].classList.remove("tab-active");
			for (let j=0;j<span16_list.length;j++) {
				span16_list[j].style.display="none";
				tab_list_li[j].classList.remove("tab-active");
			}
			span16_list[i].style.display="block";
			tab_list_li[i].classList.add("tab-active");
		}
		tab_list_li[i].onmouseout=function(){
//			tab_list_li[i].classList.remove("tab-active");
			span16_list[i].style.display="block";
		}
	}
	//内容左右移动
//	第一个
	let dot1=document.querySelectorAll(".content-item-first .pager-wrapper-link");
	console.log(dot1);
	let li1 =document.querySelectorAll(".content-item-first .content-item-list li")
	console.log(li1);
	let banner1=document.querySelectorAll('.content-item-first .content-item-wrapper')[0];
	let widths=parseInt(getComputedStyle(banner1,null).width);
	console.log(widths);
	let lprev=document.querySelectorAll(".content-item-first .content-item-wrapper-control-prev i")[0];
	let rnext=document.querySelectorAll(".content-item-first .content-item-wrapper-control-next i")[0];
//	let liwidth=parseInt(getComputedStyle(li1,null).width);
	bannerlr(dot1,li1,widths,lprev,rnext,"pager-wrapper-link-active");
//	第二个
	let dot2=document.querySelectorAll(".content-item-them .pager-wrapper-link");
	console.log(dot2);
	let li2 =document.querySelectorAll(".content-item-them .content-item-list li")
	console.log(li2);
	let banner2=document.querySelectorAll('.content-item-them .content-item-wrapper')[0];
	let widths2=parseInt(getComputedStyle(banner2,null).width);
	console.log(widths);
	let lprev2=document.querySelectorAll(".content-item-them .content-item-wrapper-control-prev i")[0];
	let rnext2=document.querySelectorAll(".content-item-them .content-item-wrapper-control-next i")[0];
	
	bannerlr(dot2,li2,widths2,lprev2,rnext2,"pager-wrapper-link-active");
// 第三个
	let dot3=document.querySelectorAll(".content-item-game .pager-wrapper-link");
	console.log(dot2);
	let li3 =document.querySelectorAll(".content-item-game .content-item-list li")
	console.log(li2);
	let banner3=document.querySelectorAll('.content-item-game .content-item-wrapper')[0];
	let widths3=parseInt(getComputedStyle(banner3,null).width);
	console.log(widths);
	let lprev3=document.querySelectorAll(".content-item-game .content-item-wrapper-control-prev i")[0];
	let rnext3=document.querySelectorAll(".content-item-game .content-item-wrapper-control-next i")[0];
	
	bannerlr(dot3,li3,widths3,lprev3,rnext3,"pager-wrapper-link-active");
	//第四个
	let dot4=document.querySelectorAll(".content-item-app .pager-wrapper-link");
	console.log(dot4);
	let li4 =document.querySelectorAll(".content-item-app .content-item-list li")
	console.log(li4);
	let banner4=document.querySelectorAll('.content-item-app .content-item-wrapper')[0];
	let widths4=parseInt(getComputedStyle(banner4,null).width);
	let lprev4=document.querySelectorAll(".content-item-app .content-item-wrapper-control-prev i")[0];
	let rnext4=document.querySelectorAll(".content-item-app .content-item-wrapper-control-next i")[0];
	console.log(rnext4);
bannerlr(dot4,li4,widths4,lprev4,rnext4,"pager-wrapper-link-active");

//为你推荐 平移轮播
	let go = document.querySelector(".recm-controls .control-prev");
	let back = document.querySelector(".recm-controls .control-next");
	let recm_bd_list=document.querySelector(".recm-bd-list");
	let width1=parseInt(getComputedStyle(recm_bd_list,null).width)/2;
	console.log(width1);
	banner_translate(go,back,width1,2,recm_bd_list);
	
//米闪购 平移轮播
	let go1=document.querySelector(".flash-controls .control-prev");
	let back1=document.querySelector(".flash-controls .control-next");
	let flashPurchase=document.querySelector(".xm-flashPurchase-list");
	let width2=parseInt(getComputedStyle(flashPurchase,null).width)/2;
	banner_translate(go1,back1,width2,2,flashPurchase);
	
	
//闪购计时
	let divs=document.querySelectorAll("div.box");
	console.log(divs);
	
	let future=new Date();
	future.setYear(2018);
	future.setMonth(9,31);
	future.setHours(23,59,59);
	console.log(future);
	let futuretime=future.getTime();
	let t1=setInterval(function(){
		let nowdate=new Date();
		let nowtime=nowdate.getTime();
		let times=Math.round((futuretime-nowtime)/1000);
		let hours=Math.floor(times/60/60);
		divs[0].innerHTML=hours;
		let min=Math.floor(times/60%60);
		divs[1].innerHTML=min;
		let sec=Math.floor(times%60);
		divs[2].innerHTML=sec;

	},1000)
}
