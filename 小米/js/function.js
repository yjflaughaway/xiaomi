//透明度轮播
//参数1 轮播点元素集合
//参数2 图片元素集合
//参数3 banner盒子元素
//参数4 左箭头元素
//参数5 右箭头元素
//参数6 轮播点选中时类名 （string）
//参数7 自动轮播时间间隔（number）ms

//透明度轮播
function banner_oi(dot,imgs,banner,lbtn,rbtn,hot,second){
	let num=0;
	let t;
//	imgs[0].style.zIndex="2";
	imgs[0].style.opacity="1"
	dot[0].classList.add(hot);
	console.log(dot,imgs);
	for (let i=0;i<dot.length;i++) {
		dot[i].onmouseover=function(){
			for (let j=0;j<imgs.length;j++) {
//			imgs[j].style.zIndex="1";
			imgs[j].style.opacity="0";
//			dot[j].style.background="#333";
			dot[j].classList.remove(hot);
		}

//			imgs[i].style.zIndex="2";
			imgs[i].style.opacity="1";
//			dot[i].style.background="#fff";
			dot[i].classList.add(hot);
			//当鼠标移走后继续轮播
			num=i;
		}
	}
	
	//自动轮播
	
	t=setInterval(move,second);
	function move(){
		num++;
		if (num==imgs.length) {
			num=0;
		}
		for (let j=0;j<imgs.length;j++) {
//			imgs[j].style.zIndex="1";
			imgs[j].style.opacity="0";
//			dot[j].style.background="#333";
			dot[j].classList.remove(hot);
		}
//		imgs[num].style.zIndex="2";
		imgs[num].style.opacity="1";
//		dot[num].style.background="#fff";
		dot[num].classList.add(hot);
	}
	banner.onmouseover=function(){
		clearInterval(t);
	}
	banner.onmouseout=function(){
		t=setInterval(move,second);
	}
	//点击右键头，同move函数
	rbtn.onclick=function(){
		move();
	}
	lbtn.onclick=function(){
		movel();
	}
	function movel(){
		num--;
		if (num<0) {
			num=imgs.length-1;
		}
		for (let j=0;j<imgs.length;j++) {
//			imgs[j].style.zIndex="1";
			imgs[j].style.opacity="0";
//			dot[j].style.background="#333";
			dot[j].classList.remove(hot);
		}
//		imgs[num].style.zIndex="2";
		imgs[num].style.opacity="1";
//		dot[num].style.background="#fff";
		dot[num].classList.add(hot);
	}
	
	window.onblur=function(){
		clearInterval(t);
	}
	window.onfocus=function(){
		t=setInterval(move,second);
	}
}
//左右轮播
function bannerlr(dot,imgs,widths,lbtn,rbtn,hot){
	let t;
	let now=0;
	let next=0;
//	let widths=getComputedStyle(banner,null).width;
//	console.log(widths);
	//2.初始值
	imgs[0].style.left=0;
	dot[0].classList.add(hot);
	//3.鼠标移入
	for (let i=0;i<imgs.length;i++) {
		dot[i].onmouseover=function(){
			for (let j=0;j<dot.length;j++) {
				imgs[j].style.left=widths+"px";
				dot[j].classList.remove(hot);
			}
			imgs[i].style.left=0;
			dot[i].classList.add(hot);
			now=i;
			next=i;
		}
	}
	function move(){
		next++;
		if (next==imgs.length) {
			next=imgs.length-1;
			return;
		}
		//初始位置
		imgs[now].style.left=0;
		imgs[next].style.left=widths+"px";
		animate(imgs[now],{left:-widths},function(){
			dot[now].classList.remove(hot);
		});
		animate(imgs[next],{left:0},function(){
			for (let j=0;j<dot.length;j++) {
				dot[j].classList.remove(hot);
			}
			dot[next].classList.add(hot);
		});
		
		now=next;
	}
//	//7 左箭头
	lbtn.onclick=function(){
		
		moveL();
	}
	function moveL(){
		next--;
		if (next<0) {
			next=0;
			return;
		}
		imgs[now].style.left=0;
		imgs[next].style.left=-widths+"px";
		animate(imgs[now],{left:widths},function(){
			dot[now].classList.remove(hot);
		});
		animate(imgs[next],{left:0},function(){
			for (let j=0;j<dot.length;j++) {
				dot[j].classList.remove(hot);
			}
			dot[next].classList.add(hot);
		});
		now=next;
	}
	//8 右箭头
	rbtn.onclick=function(){
		move();
	}
}
//平移轮播
function banner_translate(leftb,rightb,widths,numbers,con){
	let num=0;
	rightb.onclick=function(){
		num++;
		if (num==numbers) {
//			rightb.style.background="red";
			num=numbers-1;
			return;
		}
//		console.log(num);
		con.style.transform="translateX("+(-widths*num)+"px)";
	}
	//点击左箭头
	leftb.onclick=function(){
		num--;
		if (num==-1) {
//			leftb.style.background="red";
			num=0;
			return;
		}
		con.style.transform="translateX("+(-widths*num)+"px)";
	}
}