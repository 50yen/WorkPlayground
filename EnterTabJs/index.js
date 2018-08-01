// 移動先の対象とするDOMオブジェクト
var targetElm = "input[type=text],input[type=password],input[type=submit],select,input[type=button],input[type=checkbox],textarea,a,button";
$targetElm = $(targetElm);

// OnLoad処理
$(function() {
    // Enterが押されたときに動作する対象
    var elements = "input[type=text],input[type=password],select,input[type=checkbox]";

    // キー押下のイベントリスナー
    $(elements).keypress(function(e) {
        // キーコード取得
        var c = e.which ? e.which : e.keyCode; // クロスブラウザ対応

        // キーコード13(=Enter)のとき
        if (c == 13) {
            // 現在のタブインデックス番号を取得
            var tabindex = $( this ).attr( "tabindex" );
            if( typeof( tabindex ) != "undefined" && $( "[tabindex='" + ( tabindex - 0 + 1 ) + "']" ).length > 0 ){
                $( "[tabindex='" + ( tabindex - 0 + 1 ) + "']" ).focus();
            }else{
            var index = $(oObject).index(this); // indexは0～
            var cNext = "";
            var nLength = $(oObject).length;
            for (i = index; i < nLength; i++) {
                cNext = e.shiftKey ? ":lt(" + index + "):last" : ":gt(" + index + "):first";
                // ③ 止まってはいけいない属性 readonly
                if ($(oObject + cNext).attr("readonly") == "readonly") {
                    if (e.shiftKey) index--; // １つ前
                    else index++; // 次へ
                }
                // ③ 止まってはいけいない属性 disabled
                else if ($(oObject + cNext).prop("disabled") == true) {
                    if (e.shiftKey) index--; // １つ前
                    else index++; // 次へ
                } else break;
            }
            if (index == nLength - 1) {
                if (!e.shiftKey) {
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
            if ($(oObject).attr("type") == "button") {
                console.log("Button");
            } else {
                $(oObject + cNext).focus();
                console.log("TEST");
                e.preventDefault() //規定の動作をキャンセルするため、こちらのメソッドを呼ぶ。
            }
        }
    });
});

function disp() {

    window.alert('アラートの表示');

}
