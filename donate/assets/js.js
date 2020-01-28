/* 刷新后执行的函数 */
function refersh(){
	var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
	var deviceWidth = document.documentElement.clientWidth;
	if (deviceWidth > 580) {
	    if(scrollTop < 930){
	        document.getElementById("menu1").className = "menuLinkContainer activeMenu";
	        document.getElementById("link1").className = "activeLink menuLink";
	        document.getElementById("menu2").className = "menuLinkContainer";
	        document.getElementById("link2").className = "menuLink";
	        document.getElementById("menu3").className = "menuLinkContainer";
	        document.getElementById("link3").className = "menuLink";
	        document.getElementById("menu4").className = "menuLinkContainer";
	        document.getElementById("link4").className = "menuLink";
	    }
	    if(930< scrollTop && scrollTop < 2180){
	        document.getElementById("menu2").className = "menuLinkContainer activeMenu";
	        document.getElementById("link2").className = "activeLink menuLink";
	        document.getElementById("menu1").className = "menuLinkContainer";
	        document.getElementById("link1").className = "menuLink";
	        document.getElementById("menu3").className = "menuLinkContainer";
	        document.getElementById("link3").className = "menuLink";
	        document.getElementById("menu4").className = "menuLinkContainer";
	        document.getElementById("link4").className = "menuLink";     
	    }
	    if(2180< scrollTop && scrollTop < 2840){
	        document.getElementById("menu3").className = "menuLinkContainer activeMenu";
	        document.getElementById("link3").className = "activeLink menuLink";
	        document.getElementById("menu1").className = "menuLinkContainer";
	        document.getElementById("link1").className = "menuLink";
	        document.getElementById("menu2").className = "menuLinkContainer";
	        document.getElementById("link2").className = "menuLink";
	        document.getElementById("menu4").className = "menuLinkContainer";
	        document.getElementById("link4").className = "menuLink"; 
	    }
	    if(2840< scrollTop){
	        document.getElementById("menu4").className = "menuLinkContainer activeMenu";
	        document.getElementById("link4").className = "activeLink menuLink";
	        document.getElementById("menu1").className = "menuLinkContainer";
	        document.getElementById("link1").className = "menuLink";
	        document.getElementById("menu2").className = "menuLinkContainer";
	        document.getElementById("link2").className = "menuLink";
	        document.getElementById("menu3").className = "menuLinkContainer";
	        document.getElementById("link3").className = "menuLink";
	    }
	}
}

// 网页刷新后加载
window.onload = function() {
	refersh();
	
// 四合一-服务器
	document.getElementById("MgpayS1").onclick = function() {
		document.getElementById("qrcodeMgpayS1").className = "qrcode show showIn";
	};
	document.getElementById("qrcodeMgpayS1").onclick = function() {
		document.getElementById("qrcodeMgpayS1").className = "qr";
	}
	
	// 刷新后判断位置
		// 判断位置 
		// if()还有↑这里 ID 和类选择器都可以用
		if(cardForDev.scrollLeft > 0){
			document.getElementById("toLeft1").removeAttribute('disabled');
		}
		if(cardForDev.scrollLeft == 0){
			document.getElementById("toLeft1").setAttribute("disabled", true);
		}
		if(cardForDev.scrollLeft == cardForDev.scrollWidth - cardForDev.clientWidth){
			 document.getElementById("toRight1").setAttribute("disabled", true);
		}
		if(cardForDev.scrollLeft != cardForDev.scrollWidth - cardForDev.clientWidth){
			 document.getElementById("toRight1").removeAttribute('disabled');
		}
		
		//CDN
		if(cardForAliCDN.scrollLeft > 0){
			document.getElementById("toLeft2").removeAttribute('disabled');
		}
		if(cardForAliCDN.scrollLeft == 0){
			document.getElementById("toLeft2").setAttribute("disabled", true);
		}
		if(cardForAliCDN.scrollLeft == cardForAliCDN.scrollWidth - cardForAliCDN.clientWidth){
			 document.getElementById("toRight2").setAttribute("disabled", true);
		}
		if(cardForAliCDN.scrollLeft != cardForAliCDN.scrollWidth - cardForAliCDN.clientWidth){
			 document.getElementById("toRight2").removeAttribute('disabled');
		}
		
		//捐赠人
		if(cardForCtrlist.scrollLeft > 0){
			document.getElementById("toLeft3").removeAttribute('disabled');
		}
		if(cardForCtrlist.scrollLeft == 0){
			document.getElementById("toLeft3").setAttribute("disabled", true);
		}
		if(cardForCtrlist.scrollLeft == cardForCtrlist.scrollWidth - cardForCtrlist.clientWidth){
			 document.getElementById("toRight3").setAttribute("disabled", true);
		}
		if(cardForCtrlist.scrollLeft != cardForCtrlist.scrollWidth - cardForCtrlist.clientWidth){
			 document.getElementById("toRight3").removeAttribute('disabled');
		}
	
}

// 滚动时菜单栏效果
function nav(obj,type,fn){
    if( obj.attachEvent){
        obj.attachEvent('on'+type,function(){
            fn.call(obj);
        })
    }
else{
        obj.addEventListener(type,fn,false);
    }
}
	// 菜单栏
nav(window,'scroll',function(){
	var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
	var deviceWidth = document.documentElement.clientWidth;
	if (deviceWidth > 580) {
	    if( scrollTop < 780){
	        document.getElementById("menu1").className = "menuLinkContainer activeMenu";
	        document.getElementById("link1").className = "activeLink menuLink";
	        document.getElementById("menu2").className = "menuLinkContainer";
	        document.getElementById("link2").className = "menuLink";
	        document.getElementById("menu3").className = "menuLinkContainer";
	        document.getElementById("link3").className = "menuLink";
	        document.getElementById("menu4").className = "menuLinkContainer";
	        document.getElementById("link4").className = "menuLink";
	    }
	    if(780< scrollTop && scrollTop < 2050){
	        document.getElementById("menu2").className = "menuLinkContainer activeMenu";
	        document.getElementById("link2").className = "activeLink menuLink";
	        document.getElementById("menu1").className = "menuLinkContainer";
	        document.getElementById("link1").className = "menuLink";
	        document.getElementById("menu3").className = "menuLinkContainer";
	        document.getElementById("link3").className = "menuLink";
	        document.getElementById("menu4").className = "menuLinkContainer";
	        document.getElementById("link4").className = "menuLink";     
	    }
	    if(2050< scrollTop && scrollTop < 2840){
	        document.getElementById("menu3").className = "menuLinkContainer activeMenu";
	        document.getElementById("link3").className = "activeLink menuLink";
	        document.getElementById("menu1").className = "menuLinkContainer";
	        document.getElementById("link1").className = "menuLink";
	        document.getElementById("menu2").className = "menuLinkContainer";
	        document.getElementById("link2").className = "menuLink";
	        document.getElementById("menu4").className = "menuLinkContainer";
	        document.getElementById("link4").className = "menuLink"; 
	    }
	    if(2840< scrollTop){
	        document.getElementById("menu4").className = "menuLinkContainer activeMenu";
	        document.getElementById("link4").className = "activeLink menuLink";
	        document.getElementById("menu1").className = "menuLinkContainer";
	        document.getElementById("link1").className = "menuLink";
	        document.getElementById("menu2").className = "menuLinkContainer";
	        document.getElementById("link2").className = "menuLink";
	        document.getElementById("menu3").className = "menuLinkContainer";
	        document.getElementById("link3").className = "menuLink";
	    }
	}
	if (deviceWidth < 580) {
		if( scrollTop < 1000 ){
			document.getElementById("menu1").className = "menuLinkContainer activeMenu";
			document.getElementById("link1").className = "activeLink menuLink";
			document.getElementById("menu2").className = "menuLinkContainer";
			document.getElementById("link2").className = "menuLink";
			document.getElementById("menu3").className = "menuLinkContainer";
			document.getElementById("link3").className = "menuLink";
			document.getElementById("menu4").className = "menuLinkContainer";
			document.getElementById("link4").className = "menuLink";
		}
		if(1000 < scrollTop && scrollTop < 2480){
			document.getElementById("menu2").className = "menuLinkContainer activeMenu";
			document.getElementById("link2").className = "activeLink menuLink";
			document.getElementById("menu1").className = "menuLinkContainer";
			document.getElementById("link1").className = "menuLink";
			document.getElementById("menu3").className = "menuLinkContainer";
			document.getElementById("link3").className = "menuLink";
			document.getElementById("menu4").className = "menuLinkContainer";
			document.getElementById("link4").className = "menuLink";     
		}
		if(2480< scrollTop && scrollTop < 3550){
			document.getElementById("menu3").className = "menuLinkContainer activeMenu";
			document.getElementById("link3").className = "activeLink menuLink";
			document.getElementById("menu1").className = "menuLinkContainer";
			document.getElementById("link1").className = "menuLink";
			document.getElementById("menu2").className = "menuLinkContainer";
			document.getElementById("link2").className = "menuLink";
			document.getElementById("menu4").className = "menuLinkContainer";
			document.getElementById("link4").className = "menuLink"; 
		}
		if(3550< scrollTop){
			document.getElementById("menu4").className = "menuLinkContainer activeMenu";
			document.getElementById("link4").className = "activeLink menuLink";
			document.getElementById("menu1").className = "menuLinkContainer";
			document.getElementById("link1").className = "menuLink";
			document.getElementById("menu2").className = "menuLinkContainer";
			document.getElementById("link2").className = "menuLink";
			document.getElementById("menu3").className = "menuLinkContainer";
			document.getElementById("link3").className = "menuLink";
		}
	}
});
// 监听滚轮
	// 卡片翻页触发效果 // 开发者
	function cardSwitch1(obj,type,fn){
		if( obj.attachEvent){
			obj.attachEvent('on'+type,function(){
				fn.call(obj);
			})
		}
	else{
			obj.addEventListener(type,fn,false);
		}
	}
		// 判断位置 
	cardSwitch1(cardForDev,'scroll',function(){
		// if()还有↑这里 ID 和类选择器都可以用
		if(cardForDev.scrollLeft > 0){
			document.getElementById("toLeft1").removeAttribute('disabled');
		}
		if(cardForDev.scrollLeft == 0){
			document.getElementById("toLeft1").setAttribute("disabled", true);
		}
		if(cardForDev.scrollLeft == cardForDev.scrollWidth - cardForDev.clientWidth){
			 document.getElementById("toRight1").setAttribute("disabled", true);
		}
		if(cardForDev.scrollLeft != cardForDev.scrollWidth - cardForDev.clientWidth){
			 document.getElementById("toRight1").removeAttribute('disabled');
		}
	});
	
	//CDN
	function cardSwitch2(obj,type,fn){
		if( obj.attachEvent){
			obj.attachEvent('on'+type,function(){
				fn.call(obj);
			})
		}
	else{
			obj.addEventListener(type,fn,false);
		}
	}
		// 判断位置 
	cardSwitch2(cardForAliCDN,'scroll',function(){
		if(cardForAliCDN.scrollLeft > 0){
			document.getElementById("toLeft2").removeAttribute('disabled');
		}
		if(cardForAliCDN.scrollLeft == 0){
			document.getElementById("toLeft2").setAttribute("disabled", true);
		}
		if(cardForAliCDN.scrollLeft == cardForAliCDN.scrollWidth - cardForAliCDN.clientWidth){
			 document.getElementById("toRight2").setAttribute("disabled", true);
		}
		if(cardForAliCDN.scrollLeft != cardForAliCDN.scrollWidth - cardForAliCDN.clientWidth){
			 document.getElementById("toRight2").removeAttribute('disabled');
		}
	});
	
	//捐赠人
	function cardSwitch3(obj,type,fn){
		if( obj.attachEvent){
			obj.attachEvent('on'+type,function(){
				fn.call(obj);
			})
		}
	else{
			obj.addEventListener(type,fn,false);
		}
	}
		// 判断位置 
	cardSwitch3(cardForCtrlist,'scroll',function(){
		if(cardForCtrlist.scrollLeft > 0){
			document.getElementById("toLeft3").removeAttribute('disabled');
		}
		if(cardForCtrlist.scrollLeft == 0){
			document.getElementById("toLeft3").setAttribute("disabled", true);
		}
		if(cardForCtrlist.scrollLeft == cardForCtrlist.scrollWidth - cardForCtrlist.clientWidth){
			 document.getElementById("toRight3").setAttribute("disabled", true);
		}
		if(cardForCtrlist.scrollLeft != cardForCtrlist.scrollWidth - cardForCtrlist.clientWidth){
			 document.getElementById("toRight3").removeAttribute('disabled');
		}
	});
	
	
	// 监听窗口宽度
	window.addEventListener('resize', function() {
		// 判断位置
		// if()还有↑这里 ID 和类选择器都可以用
		if(cardForDev.scrollLeft > 0){
			document.getElementById("toLeft1").removeAttribute('disabled');
		}
		if(cardForDev.scrollLeft == 0){
			document.getElementById("toLeft1").setAttribute("disabled", true);
		}
		if(cardForDev.scrollLeft == cardForDev.scrollWidth - cardForDev.clientWidth){
			 document.getElementById("toRight1").setAttribute("disabled", true);
		}
		if(cardForDev.scrollLeft != cardForDev.scrollWidth - cardForDev.clientWidth){
			 document.getElementById("toRight1").removeAttribute('disabled');
		}
		
		//CDN
		if(cardForAliCDN.scrollLeft > 0){
			document.getElementById("toLeft2").removeAttribute('disabled');
		}
		if(cardForAliCDN.scrollLeft == 0){
			document.getElementById("toLeft2").setAttribute("disabled", true);
		}
		if(cardForAliCDN.scrollLeft == cardForAliCDN.scrollWidth - cardForAliCDN.clientWidth){
			 document.getElementById("toRight2").setAttribute("disabled", true);
		}
		if(cardForAliCDN.scrollLeft != cardForAliCDN.scrollWidth - cardForAliCDN.clientWidth){
			 document.getElementById("toRight2").removeAttribute('disabled');
		}
		
		//捐赠人
		if(cardForCtrlist.scrollLeft > 0){
			document.getElementById("toLeft3").removeAttribute('disabled');
		}
		if(cardForCtrlist.scrollLeft == 0){
			document.getElementById("toLeft3").setAttribute("disabled", true);
		}
		if(cardForCtrlist.scrollLeft == cardForCtrlist.scrollWidth - cardForCtrlist.clientWidth){
			 document.getElementById("toRight3").setAttribute("disabled", true);
		}
		if(cardForCtrlist.scrollLeft != cardForCtrlist.scrollWidth - cardForCtrlist.clientWidth){
			 document.getElementById("toRight3").removeAttribute('disabled');
		}
});

// 载入点击翻页
window.addEventListener('load', function() {
	// 翻页
		var deviceWidth = document.documentElement.clientWidth;
		if ( deviceWidth < 650) {
			document.getElementById("toLeft1").onclick = function() {
				document.getElementById("cardForDev").scrollLeft -= 302 ;
			}
			document.getElementById("toRight1").onclick = function() {
				document.getElementById("cardForDev").scrollLeft += 302 ;
			}
			document.getElementById("toLeft2").onclick = function() {
				document.getElementById("cardForAliCDN").scrollLeft -= 302 ;
			}
			document.getElementById("toRight2").onclick = function() {
				document.getElementById("cardForAliCDN").scrollLeft += 302 ;
			}
			document.getElementById("toLeft3").onclick = function() {
				document.getElementById("cardForCtrlist").scrollLeft -= 356 ;
			}
			document.getElementById("toRight3").onclick = function() {
				document.getElementById("cardForCtrlist").scrollLeft += 356 ;
			}
		}
		if ( deviceWidth > 650) {
			document.getElementById("toLeft1").onclick = function() {
				document.getElementById("cardForDev").scrollLeft -= 604 ;
			}
			document.getElementById("toRight1").onclick = function() {
				document.getElementById("cardForDev").scrollLeft += 604 ;
			}
			document.getElementById("toLeft2").onclick = function() {
				document.getElementById("cardForAliCDN").scrollLeft -= 604 ;
			}
			document.getElementById("toRight2").onclick = function() {
				document.getElementById("cardForAliCDN").scrollLeft += 604 ;
			}
			document.getElementById("toLeft3").onclick = function() {
				document.getElementById("cardForCtrlist").scrollLeft -= 534 ;
			}
			document.getElementById("toRight3").onclick = function() {
				document.getElementById("cardForCtrlist").scrollLeft += 534 ;
			}
		}
		
	// 实时监听窗口宽度
    window.addEventListener('resize', function() {
        // 翻页
        	var deviceWidth = document.documentElement.clientWidth;
        	if ( deviceWidth < 650) {
        		document.getElementById("toLeft1").onclick = function() {
        			document.getElementById("cardForDev").scrollLeft -= 302 ;
        		}
        		document.getElementById("toRight1").onclick = function() {
        			document.getElementById("cardForDev").scrollLeft += 302 ;
        		}
				document.getElementById("toLeft2").onclick = function() {
					document.getElementById("cardForAliCDN").scrollLeft -= 302 ;
				}
				document.getElementById("toRight2").onclick = function() {
					document.getElementById("cardForAliCDN").scrollLeft += 302 ;
				}
				document.getElementById("toLeft3").onclick = function() {
					document.getElementById("cardForCtrlist").scrollLeft -= 356 ;
				}
				document.getElementById("toRight3").onclick = function() {
					document.getElementById("cardForCtrlist").scrollLeft += 356 ;
				}
        	}
        	if ( deviceWidth > 650) {
        		document.getElementById("toLeft1").onclick = function() {
        			document.getElementById("cardForDev").scrollLeft -= 604 ;
        		}
        		document.getElementById("toRight1").onclick = function() {
        			document.getElementById("cardForDev").scrollLeft += 604 ;
        		}
				document.getElementById("toLeft2").onclick = function() {
					document.getElementById("cardForAliCDN").scrollLeft -= 604 ;
				}
				document.getElementById("toRight2").onclick = function() {
					document.getElementById("cardForAliCDN").scrollLeft += 604 ;
				}
				document.getElementById("toLeft3").onclick = function() {
					document.getElementById("cardForCtrlist").scrollLeft -= 534 ;
				}
				document.getElementById("toRight3").onclick = function() {
					document.getElementById("cardForCtrlist").scrollLeft += 534 ;
				}
        	}
    })

})