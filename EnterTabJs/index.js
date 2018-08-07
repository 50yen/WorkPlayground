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
            var curentTabIdx = $(this).attr("tabindex");
            // 現在のタブインデックス番号が存在する
            if (typeof(curentTabIdx) != "undefined") {
                // タブインデックスのリストを作成
                var tabIdxAllCnt = $("[tabindex]").length; // 全体のタブインデックス数
                var tabIdxAllObj = $("[tabindex]"); // 全体のタブインデックスを持つオブジェクトの配列
                var tabIdxLst = []; // タブインデックスの番号リスト
                for (listCnt = 0; listCnt < tabIdxAllCnt; listCnt++) {
                    // タブインデックス番号のリストを生成
                    tabIdxLst.push(tabIdxAllObj[listCnt].tabIndex);
                }
                // ソートを行う
                tabIdxLst.sort(function(a, b) {
                    if (a < b) return -1;
                    if (a > b) return 1;
                    return 0;
                });
                // 現在のタブインデックス番号が全体の何番目か算出
                var currentPos = tabIdxLst.indexOf(curentTabIdx - 0);
                // 次のインデックス番号の位置を特定
                var nextPos = currentPos;
                var pos = e.shiftKey ? 1 : -1;
                // 最大と最初は位置探索しない
                while(nextPos > 0 && nextPos < tabIdxAllCnt - 1){
                    // 次のタブインデックス番号の取得
                    var nextTabIdx = tabIdxLst[currentPos + pos];
                    // ③ 止まってはいけいない属性 readonly
                    if ($("[tabindex=" + nextTabIdx + "]").attr("readonly") == "readonly") {
                        if (e.shiftKey) {
                            pos--; // １つ前
                        } else {
                            pos++; // 次へ
                        }
                    }
                    // ③ 止まってはいけいない属性 disabled
                    else if ($("[tabindex=" + nextTabIdx + "]").prop("disabled") == true) {
                        if (e.shiftKey) {
                            pos--; // １つ前
                        } else {
                            pos++; // 次へ
                        }
                    } else {
                        // 次のタブインデックス番号の位置を決定
                        nextPos = currentPos + pos;
                        break;
                    }
                }

                if (pos < tabIndexList.length - 1){

                }


                for (i = index; i < nLength; i++) {
                    cNext = e.shiftKey ? ":lt(" + index + "):last" : ":gt(" + index + "):first";

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
                $("[tabindex]").filter(cNext).focus();
                e.preventDefault()
            } else {
                var index = $(targetElm).index(this); // indexは0～
                var cNext = "";
                var nLength = $(targetElm).length;
                for (i = index; i < nLength; i++) {
                    cNext = e.shiftKey ? ":lt(" + index + "):last" : ":gt(" + index + "):first";
                    // ③ 止まってはいけいない属性 readonly
                    if ($(targetElm).filter(cNext).attr("readonly") == "readonly") {
                        if (e.shiftKey) {
                            index--; // １つ前
                        } else {
                            index++; // 次へ
                        }
                    }
                    // ③ 止まってはいけいない属性 disabled
                    else if ($(targetElm).filter(cNext).prop("disabled") == true) {
                        if (e.shiftKey) {
                            index--; // １つ前
                        } else {
                            index++; // 次へ
                        }
                    } else {
                        break;
                    }
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
                $(targetElm).filter(cNext).focus();
                e.preventDefault() //規定の動作をキャンセルするため、こちらのメソッドを呼ぶ。
            }
        }
    });
});

function disp() {

    window.alert('アラートの表示');

}
