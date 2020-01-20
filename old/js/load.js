//根据设备加载不同的样式
        var setStyle = function(cssArr){
            var i= 0,len = cssArr.length;
            for(i;i<len;i++){
                document.write('<link href="'+cssArr[i]+'" type="text/css" rel=stylesheet>');
            }
        };
        // 判断是否移动端
        function goPAGE() {
            if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
                // window.location.href="移动端url";
                //判断访问环境是 移动端 则加载以下样式
                setStyle(['./css/style_mobile.css?ver=19.12.2']);
				window.ontouchstart = function(e) { e.preventDefault(); };
            }
            
        }
        goPAGE();        // 调用function
		
	
		
//禁止浏览器窗口过窄
/*没用 暂留
$(window).resize(function(){
	if(document.body.clientWidth<800){
		window.resizeTo(document.body.clientWidth,800);
	}
});
*/

/*index头文件备份
<!--
<script>
			//根据设备加载不同的样式
			        var setStyle = function(cssArr){
			            var i= 0,len = cssArr.length;
			            for(i;i<len;i++){
			                document.write('<link href="'+cssArr[i]+'" type="text/css" rel=stylesheet>');
			            }
			        };
			        // 判断是否移动端
			        function goPAGE() {
			            if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
			                // window.location.href="移动端url";
			                //判断访问环境是 移动端 则加载以下样式
			                setStyle(['css/style_mobile.css']);
			            }
			            else {
			                // window.location.href="pc端url"; 
							setStyle(["css/master.css"]);
			            }
			        }
					goPAGE();
</script>
-->
*/