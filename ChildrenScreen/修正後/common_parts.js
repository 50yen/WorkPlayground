/****************************************************************
 * @name 子画面起動ボタン押下処理
 *
 * @description
 * 子画面起動を実行するボタンイベントを監視する
 * 押下後に共通のモーダル画面起動処理を実施する
 * OnLoadに設定
 *
 * @param なし
 * @return なし
 ****************************************************************/
function setChidlBtnEvent() {

    // IDのSearchBtnの後方一致検索
    $('[id$=SearchBtn]').on('click', function() {

        // iframeのsrc要素にパラメータを付加したURLを設定
        // モーダルダミーに飛ぶ
        var srcStr = "jsp/ac/modaldummy.jsp?";

		// 

        // GET パラメータの文字列を作成する
        var srcParam = document.getElementById("code").value;
        // デコード
        srcParam = decodeURI(srcParam);

        srcStr = srcStr + srcParam;

        // ダイアログ表示
        // width,heightは固定値にすること（モーダルを中心に配置するため）
        $("#dialog-iframe").dialog({
            modal: true,
            height: "450",
            width: "650px",
            closeOnEscape: true,
            hide: null,
            position: {
                my: "center",
                at: "center",
                of: window
            },
            resizable: false,
            show: null,
            open: function() {
                $('<iframe />').attr({
                    src: srcStr,
                    name: 'iframe_test',
                    id: 'iframe_test',
                    width: "600px",
                    height: "400px",
                    scrolling: "no",
                }).appendTo('#dialog-iframe');
            },
            close: function() {
                $("#iframe_test").remove();
            }
        });
    });
}

/****************************************************************
 * @name ModalDummy OnLoad処理
 *
 * @description
 * ModalDummy OnLoad処理を以下に記載する
 * ダミーからアクションへの遷移
 *
 * @param flg 正規サブミットチェックフラグ
 * @return なし
 ****************************************************************/
function jump(flg) {
    // 親画面からの値をhiddenにセット
    var param = paramWrite();
    document.getElementById("code").value = param;


    // 正規サブミットチェック
    if (flg === undefined) {
        // 登録系のサブミットでない場合
        if (isChanged == true) {
            // 修正が発生している場合はサブミット違反(=false)
            isSubmit == false;
        } else {
            // 修正が発生していなければ問題なし
            isSubmit = true;
        }
    } else {
        // 正規サブミットが設定されている場合はその値を設定
        isSubmit = flg;
    }

    // 二重送信抑止
    $.LoadingOverlay("show", {
        background: "rgba(0, 0, 0, 0.4)",
        imageResizeFactor: 0.8,
        imageColor: "#ffffff",
    });

    // TODO 親画面から複数引数を持ってこれた場合formbean,action修正する
    window.document.forms["Actmp03Form"].target = "_self";
    window.document.forms["Actmp03Form"].action = "actmp03SEARCH";
    window.document.forms["Actmp03Form"].submit();

    if (isSubmit == false) {
        // 確認ダイアログでキャンセルの可能性があるため消去処理を入れる
        setTimeout(function() {
            $.LoadingOverlay("hide");
        }, 3000);
    }
}

/****************************************************************
 * @name 引数処理
 *
 * @description
 * 引数処理を以下に記載する
 *
 * @param なし
 * @return pram
 ****************************************************************/
function paramWrite() {
    /* アドレスの「?」以降の引数(パラメータ)を取得 */
    var pram = location.search;
    /* 引数がない時は処理しない */
    if (!pram) return "";
    /* 先頭の?をカット */
    pram = pram.substring(1);
    return pram;
}


/****************************************************************
 * @name 共通OnLoad処理
 *
 * @description
 * 共通で設定するOnLoad処理を以下に記載する
 *
 * @param なし
 * @return なし
 ****************************************************************/
$(function() {
    // オートコンプリート機能OFF
    $('form').attr('autocomplete', 'off');
    // Enterキー押下時Tab処理
    enterTabBind();
    // パスワードコピペ抑止
    cancelCopyPastPass();
    // サイドバーメニュー設定
    amallSideMenu();
    // ブラウザバック&ページ更新抑止
    onBeforeunloadHandler();
    // 初期フォーカス処理
    setFirstFocus();
});
