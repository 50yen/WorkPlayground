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
            var tabindex = $(this).attr("tabindex");
            // 現在のタブインデックス番号が存在する
            if (typeof(tabindex) != "undefined") {
                var index = tabindex - 0; // indexは0～
                var nLength = $("[tabindex]'").length;
                for (i = index; i < nLength; i++) {
                    var j = 1;
                    var cNext;
                    while (j < 100) {
                        cNext = e.shiftKey ? $("[tabindex='" + (index - j) + "']") : $("[tabindex='" + (index + j) + "']");
                        if(cNext.length){
                            // ③ 止まってはいけいない属性 readonly
                            if (cNext.attr("readonly") == "readonly") {
                                j++;
                                continue;
                            }
                            // ③ 止まってはいけいない属性 disabled
                            else if (cNext.prop("disabled") == true) {
                                j++;
                                continue;
                            }
                            else {
                                cNext.focus();
                                break;
                            }
                        }
                    }
                }

            } else {

            }
        } else {
            var index = $(elements).index(this); // indexは0～
            var cNext = "";
            var nLength = $(elements).length;
            for (i = index; i < nLength; i++) {
                cNext = e.shiftKey ? ":lt(" + index + "):last" : ":gt(" + index + "):first";
                // ③ 止まってはいけいない属性 readonly
                if ($(elements + cNext).attr("readonly") == "readonly") {
                    if (e.shiftKey) index--; // １つ前
                    else index++; // 次へ
                }
                // ③ 止まってはいけいない属性 disabled
                else if ($(elements + cNext).prop("disabled") == true) {
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
            if ($(elements).attr("type") == "button") {
                console.log("Button");
            } else {
                $(elements + cNext).focus();
                console.log("TEST");
                e.preventDefault() //規定の動作をキャンセルするため、こちらのメソッドを呼ぶ。
            }
        }
    });
});

function disp() {

    window.alert('アラートの表示');

}
