//********************************************
// jquerySelecterEscape
// parameter : str(string)
// jqueryの予約語をエスケープして返す
//********************************************
function jquerySelecterEscape(str) {
	return str.replace(new RegExp("(#|;|&|,|\\.|\\+|\\*|~|'|:|\"|!|\\^|\\$|\\[|\\]|\\(|\\)|=|>|\\||\\/|\\\\)","g"),"\\$1");
}

//********************************************
// goPageTop
// parameter : none
// ページの先頭へスクロールさせる
//********************************************
function goPageTop() {
	window.scroll(0, 0);
}
//********************************************
// browserCheck
// parameter : none
// ブラウザのバージョンを返す(IE6～10)
//********************************************
function browserCheck() {
	var userAgent = window.navigator.userAgent.toLowerCase();
	var appVersion = window.navigator.appVersion.toLowerCase();
	var browserName;

	if (userAgent.indexOf("msie") > -1 || userAgent.match(/trident/)) {

		if (appVersion.indexOf("msie 6.") > -1) {
			browserName = 'IE6';
		}
		else if (appVersion.indexOf("msie 7.") > -1) {
			browserName = 'IE7';
		}
		else if (appVersion.indexOf("msie 8.") > -1) {
			browserName = 'IE8';
		}
		else if (appVersion.indexOf("msie 9.") > -1) {
			browserName = 'IE9';
		}
		else if (appVersion.indexOf("msie 10.") > -1) {
			browserName = 'IE10';
		}
		else if (userAgent.match(/(rv:)([\d\.]+)/)[2]) {
			browserName = 'IE11';
		}
		else {
			browserName = 'other';
		}
	}
	else {
		browserName = 'not IE';
	}

	return browserName;
}
window.onload = function ieSP(){
	var browserName = browserCheck();
	var useCSSName;
	if (browserName == 'IE10') {
		useCSSName = 'ie10';
	}
	else if (browserName == 'IE11') {
		useCSSName = 'ie11';
	}
	else {
		useCSSName = 'other';
	}
	if (browserName == 'IE10' || browserName == 'IE11') {
		var ieSP = document.createElement("LINK");
		if (outputFormat == 'HTML') {
			var pathHTML = 'common/css/' + useCSSName + '.css';
			ieSP.setAttribute("href", pathHTML);
		}
		else if (outputFormat == 'FAQ_Index') {
			var pathFAQIndex = 'common/css/' + useCSSName + '.css';
			ieSP.setAttribute("href", pathFAQIndex);
		}
		else if (outputFormat == 'FAQ_Topic') {
			var pathFAQTopic = '../common/css/' + useCSSName + '.css';
			ieSP.setAttribute("href", pathFAQTopic);
		}
		else {
			var pathSpec = '../common/css/' + useCSSName + '.css';
			ieSP.setAttribute("href", pathSpec);
		}
		ieSP.setAttribute("rel", "stylesheet");
		ieSP.setAttribute("type", "text/css");
		ieSP.setAttribute("media", "all");
		document.head.appendChild(ieSP);
	}
}