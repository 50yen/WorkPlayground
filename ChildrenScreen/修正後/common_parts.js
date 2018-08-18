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

	// IDのSearchChildBtnの後方一致イベント監視
	$('[id$=SearchChildBtn]').on('click', function() {

		// iframeのsrc要素にパラメータを付加したURLを設定
		// モーダルダミーに飛ぶ
		var srcStr = "jsp/ac/modaldummy.jsp";

		// 押されたボタンに応じて取得先を変更
		var btnId = $(this).attr("id");
		var typeParam = "";
		var dataParam = "";
		switch (btnId) {
			case 'customerSearchChildBtn':
				// 顧客検索
				typeParam = "customer";
				dataParam = decodeURI($('customerSearch').value);
				break;
			case 'shopSearchChildBtn':
				// 店舗検索
				typeParam = "shop";
				dataParam = decodeURI($('shopSearch').value);
				break;
			case 'userSearchChildBtn':
				// ユーザー検索
				typeParam = "user";
				dataParam = decodeURI($('userSearch').value);
				break;
			case 'shopBranchSearchChildBtn':
				// 店舗枝番検索
				typeParam = "shopBranch";
				dataParam = decodeURI($('shopBranchSearch').value);
				break;
			default:
				break;
		}

		// GET パラメータの文字列を作成する
		srcStr = srcStr + "?type=" + typeParam + "&data=" + dataParam;

		// ダイアログ表示
		// width,heightは固定値にすること（モーダルを中心に配置するため）
		$("#dialog-iframe").dialog({
			modal: true,
			height: "450px",
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
				$('#iframe_contents').attr({
					src: srcStr,
					height: "400px",
					width: "600px",
					scrolling: "no",
				});
				$('#iframe_contents').load(function(){
					// モーダルオンロード処理
					modalDummy();
				});
			},
			close: function() {
				$("#iframe_contents").remove();
			}
		});
	});
}

/****************************************************************
 * @name モーダルOnLoad処理
 *
 * @description
 * ModalDummy OnLoad処理を以下に記載する
 * ダミーからアクションへの遷移
 *
 * @return なし
 ****************************************************************/
function modalDummy() {
	// 親画面からの値をhiddenにセット
	var param = paramWrite();

	// 引数をセット
	$('modalType').value = param['type'];
	$('modalData').value = param['data'];

	// サブミット処理
	amallSubmitWithoutDupcheck(0,'accom01DISP');
}

/****************************************************************
 * @name 引数処理
 *
 * @description
 * URL解析して、クエリ文字列を返す
 *
 * @param なし
 * @return {Array} クエリ文字列
 ****************************************************************/
function paramWrite() {
	// 返却用配列
	var vars = [];

	// URLのクエリ文字列を取得
	var url = window.location.search;
	// 引数がない時は処理しない
	if (!url) {
		return vars;
	}

	// ?を取り除くため、1から始める。複数のクエリ文字列に対応するため、&で区切る
	var hash  = url.slice(1).split('&');
	var max = hash.length;
	for (var i = 0; i < max; i++) {
		// keyと値に分割
		var array = hash[i].split('=');
		// 末尾にクエリ文字列のkeyを挿入
		vars.push(array[0]);
		// 先ほど確保したkeyに、値を代入
		vars[array[0]] = array[1];
	}
	return vars;
}
/****************************************************************
 * @name ダイアログクローズ処理
 *
 * @description
 * ダイアログを閉じる処理とともに、選択値を親画面に返却する
 *
 * @param type 起動種別：顧客,店舗,ユーザー,店舗枝番
 * @return なし
 ****************************************************************/
function closeDialog(type) {
	// 返却先表示名称のID
	var dispNmId = "";
	switch (type) {
		case 'customer':
			// 顧客検索
			dispNmId = "customerSearchNm";
			break;
		case 'shop':
			// 店舗検索
			dispNmId = "shopSearchNm";
			break;
		case 'user':
			// ユーザー検索
			dispNmId = "userSearchNm";
			break;
		case 'shopBranch':
			// 店舗枝番検索
			dispNmId = "shopBranchSearchNm";
			break;
		default:
			break;
	}
	// 親画面に値を渡す
	$("#" + dispNmId , parent.document).value = $("#send").value;
	// トークンを親画面に設定
	$("[name=token]", parent.document).get(0).value = $("[name=token]").get(0).value;
	// モーダルクローズ
	$("#dialog-iframe", parent.document).dialog('close');
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
	// 子画面起動処理設定
	setChidlBtnEvent();
});
