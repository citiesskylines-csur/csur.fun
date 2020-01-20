
			//判断语言
				var type=navigator.appName ;
				if (type=="Netscape") 
				var lang = navigator.language ;
				else 
				var lang = navigator.userLanguage ;
				
				//cut down to first 2 chars of country code 
				var lang = lang.substr(0,5) ;
				
				// 英语
				if (lang == "en") 
				window.location.replace('./en/') ;
				
				// 日文
				else if (lang == "ja") 
				window.location.replace('./jp/') ;

				