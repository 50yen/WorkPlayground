// input項目をEnter キー、Shift+Enterキーでtab移動 without(button, hidden)
function fEnterChangeTab(){

  // ② input要素の選択。但し、ボタンとhidden型は除く。
  var oObject = ":input:not(:hidden)";

  $(oObject).keypress(function(e) {
    var c = e.which ? e.which : e.keyCode; // クロスブラウザ対応
    if (c == 13) {
        var index = $(oObject).index(this); // indexは0～
        var cNext = "";
        var nLength = $(oObject).length;
        for(i=index;i<nLength;i++){
            cNext = e.shiftKey ? ":lt(" + index + "):last" : ":gt(" + index + "):first";
            // ③ 止まってはいけいない属性 readonly
            if ($(oObject + cNext).attr("readonly") == "readonly") {
                if (e.shiftKey) index--; // １つ前
                else index++;            // 次へ
            }
            // ③ 止まってはいけいない属性 disabled
            else if ($(oObject + cNext).prop("disabled") == true) {
                if (e.shiftKey) index--; // １つ前
                else index++;            // 次へ
            }
            else break;
        }
        if (index == nLength - 1) {
            if (! e.shiftKey){
                // 最後の項目なら、最初に移動。
                cNext = ":eq(0)";
            }
        }
        if (index == 0) {
            if (e.shiftKey) {
                // 最初の項目なら、最後に移動。
                cNext = ":eq(" + (nLength - 1) + ")";
            }
        }
        if($(oObject).attr("type") == "button"){
			console.log("Button");
		} else {
			$(oObject + cNext).focus();
			console.log("TEST");
			e.preventDefault()    //規定の動作をキャンセルするため、こちらのメソッドを呼ぶ。
		}
    }
  });
}

// ④onloadのタイミングでこの関数を実行
if(window.attachEvent){
    // IE用
    window.attachEvent('onload',fEnterChangeTab);
}
else if (window.opera){
    // opera用
    window.addEventListener('load',fEnterChangeTab,false);
}
else {
    // Mozilla用
    window.addEventListener('load',fEnterChangeTab,false);
}
function disp(){

	window.alert('アラートの表示');

}
