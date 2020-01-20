
    window.alert = alert;
    function alert(data, callback) { //回调函数
        var alert_bg = document.createElement('div');
        alert_box = document.createElement('div'),
            alert_text = document.createElement('div'),
            alert_btn = document.createElement('div'),
            textNode = document.createTextNode(data ? data : ''),
            btnText = document.createTextNode('确 定');

        // 控制样式
        css(alert_bg, {
            'position': 'fixed',
            'top': '0',
            'left': '0',
            'right': '0',
            'bottom': '0',
            'background-color': 'rgba(0, 0, 0, 0.1)',
            'z-index': '999999999'
        });

        css(alert_box, {
            'width': '270px',
            'max-width': '90%',
            'font-size': '16px',
            'text-align': 'center',
            'background-color': '#fff',
            'border-radius': '15px',
            'position': 'absolute',
            'top': '50%',
            'left': '50%',
            'transform': 'translate(-50%, -50%)',
			// 'border': '3px #ff6019 solid'
			'border': '0.5px #4a4a4a solid',
			'box-shadow': '#562400b8 0px 0px 5px 1px;'
        });

        css(alert_text, {
            'padding': '15px 15px',
            'border-bottom': '1px solid #ddd'
        });

        css(alert_btn, {
            'padding': '10px 0',
            // 'color': '#007aff',
			'color': '#FFFFFF',
            'font-weight': '600',
            'cursor': 'pointer',
			'background': 'linear-gradient(10deg, #e8800f, #dd4add) 0% 0% / 100% no-repeat, #05a6dd',
			'border-radius': '0 0 15px 15px'
        });

        // 内部结构套入
        alert_text.appendChild(textNode);
        alert_btn.appendChild(btnText);
        alert_box.appendChild(alert_text);
        alert_box.appendChild(alert_btn);
        alert_bg.appendChild(alert_box);

        // 整体显示到页面内
        document.getElementsByTagName('body')[0].appendChild(alert_bg);

        // 确定绑定点击事件删除标签
        alert_btn.onclick = function() {
            alert_bg.parentNode.removeChild(alert_bg);
            if (typeof callback === 'function') {
                callback(); //回调
            }
        }
    }

    function css(targetObj, cssObj) {
        var str = targetObj.getAttribute("style") ? targetObj.getAttribute('style') : '';
        for (var i in cssObj) {
            str += i + ':' + cssObj[i] + ';';
        }
        targetObj.style.cssText = str;
    }

    // alert('提示信息!', function() {
    //     window.location.href = 'https://csur.fun';
    // });
