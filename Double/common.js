/*
 * ----------------------------------------------------
 * Ass Customer Online System
 *
 * @(#) common.js
 *
 * ----------------------------------------------------
 * 2018.08.01 新規作成
 * ----------------------------------------------------
 */
/****************************************************************
 * @name サイドバーメニュー
 *
 * @description
 * サイドバーメニューをマウスオーバーで表示非表示を切り替える
 * OnLoadに設定
 *
 * @param なし
 * @return なし
 * @author Hitachi Document
 ****************************************************************/
function amallSideMenu() {
	$(".menu").hover(function(){
		$(this).stop().animate({'width':'200px'}, 'fast', 'linear', function(){
			$(this).css('overflow', 'visible');
		});
	}, function(){
		$(this).css('overflow', 'hidden');
		$(this).stop().animate({'width':'60px'}, 'fast');
	});

	$(".menu li").hover(function(){
		$(this).find(">.submenu").show();
	}, function(){
		$(this).find(">.submenu").hide();
	});

	$(".accordion .ac-content label").click(function(){
		$(this).toggleClass('open');
		$(this).next().slideToggle("fast")
	}).next().hide();
}
/****************************************************************
 * @name ページ離脱防止処理
 *
 * @description
 * 通常の移動以外の処理の場合にアラートを表示する
 * onLoadに設定
 *
 * @param なし
 * @return なし
 ****************************************************************/
//フォームの入力欄が更新されたかどうかを表すフラグです。
var isChanged = false;
//サブミット処理の場合の処理を表すフラグです。
var isSubmit = false;
function onBeforeunloadHandler() {
	$(window).bind("beforeunload", function(e) {
		if (isSubmit == false) {
			// TODO メッセージIDを修正すること
			var errMsg = MESSAGE['Mapi001']
			// Chrome
			e.returnValue = errMsg;

			// IE
			return errMsg;
		}
	});
};
/****************************************************************
 * @name 画面更新検知
 *
 * @description
 * 画面項目が変更された場合に正規サブミット処理以外を警告出力する
 * 必要な場合のみonLoadに設定
 *
 * @param なし
 * @return なし
 ****************************************************************/
function discoverChangeForm(){
	$("form input, form select, form textarea").change(function() {
		// 入力内容が更新されている場合は、isChangedフラグをtrueにします。
		isChanged = true;
	});
}
/****************************************************************
 * @name サブミット処理
 *
 * @description
 * サブミット処理を行う。
 * 二重送信を抑止する機能があり，
 * JSPの再構築までは再度ボタンは押せない。
 * 正規サブミットフラグがundefinedの場合は
 * isChangedフラグをチェックして修正がある場合に値を設定する
 * (修正がない場合通常はtrue)
 *
 * @param formName サブミット対象Form名
 * @param action サブミットアクション名
 * @param flg 正規サブミットチェックフラグ
 * @return なし
 ****************************************************************/
function amallSubmit(formName, action, flg) {

	// 正規サブミットチェック
	if(flg === undefined){
		// 登録系のサブミットでない場合
		if(isChanged == true){
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
	$.LoadingOverlay("show",{
		background  : "rgba(0, 0, 0, 0.4)",
		imageResizeFactor : 0.8,
		imageColor : "#ffffff",
	});

	// サブミット処理
	window.document.forms[formName].target = "_self";
	window.document.forms[formName].action = action;
	window.document.forms[formName].submit();

	if(isSubmit == false){
		// 確認ダイアログでキャンセルの可能性があるため消去処理を入れる
		setTimeout(function(){
			$.LoadingOverlay("hide");
		}, 3000);
	}

}
/****************************************************************
 * @name サブミット処理(二重送信チェックなし)
 *
 * @description
 * サブミット処理を行う。
 * 二重送信を抑止する機能はない
 * CSVダウンロードなどの自画面遷移時のみ使用する
 *
 * @param formName サブミット対象Form名
 * @param action サブミットアクション名
 * @return なし
 ****************************************************************/
function amallSubmitWithoutDupcheck(formName, action) {

	// 正規サブミットフラグをON
	isSubmit = true;

	// サブミット処理
	window.document.forms[formName].target = "_self";
	window.document.forms[formName].action = action;
	window.document.forms[formName].submit();

	// 別スレッドで正規サブミットフラグをOFFに戻す。
	setTimeout(function(){
		isSubmit = false;
	},1);
}
/****************************************************************
 * @name マニュアル起動(ウィンドウオープン)
 *
 * @description
 * マニュアル(PDF)起動を実行する
 * パスが存在する場合のみ別タブに開く
 *
 * @param path 対象PDFパス
 * @return なし
 ****************************************************************/
function manualOpen(path) {

	// パスの存在チェック
	if(path !== undefined){
		if(path.length > 0){
			// 別タブオープン
			window.open(path,'pdf');
		}
	}
}
/****************************************************************
 * @name パスワードエリアコピペ抑止
 *
 * @description
 * パスワードエリアのみコピペ(カット含む)を抑止する
 * onLoadに設定
 *
 * @param なし
 * @return なし
 ****************************************************************/
function cancelCopyPastPass() {
	$(document).on('copy cut paste','input[type=password]',function(){
		return false;
	});
}
/****************************************************************
 * @name 初期フォーカス設定処理
 *
 * @description
 * 画面上のフォーム内の最初の入力可能項目にフォーカスをあてる
 * onLoadに設定
 *
 * @param なし
 * @return なし
 ****************************************************************/
function setFirstFocus() {
	// 画面が読み込まれる前に動かないように遅延処理
	setTimeout(function(){
		var df = document.forms[0];
		// フォーム内で検索
		var wAry = $(df).find('input:enabled:visible:not([readonly]),textarea:enabled:visible:not([readonly]),select:enabled:visible');
		if(wAry.length > 0){
			wAry.first().focus;
		}
	}, 300);
}

/****************************************************************
 * @name Enterキー押下処理
 *
 * @description
 * Enterキー押下時にTabと同等の動きにする。
 * 以下の内容に対応
 * ・Enter : 次のフォーカス対象に遷移(targetElm)に定義したもの
 * 			 自フォーカスにtabindexが設定されている場合はその値よりも大きいtabindexに遷移
 * 			 最大値の場合は、tabindexの最小値に遷移
 * ・Shift+Enter：逆順の次のフォーカスに移動
 * ・aおよびbuttonの場合は onclickイベントを優先する
 * onLoadに設定
 *
 * @param なし
 * @return なし
 ****************************************************************/
//移動先の対象
var targetElm = "input[type=text],input[type=password],input[type=submit],select,input[type=button],input[type=checkbox],textarea,a,button";
$targetElm = $( targetElm );

function enterTabBind() {

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
				var pos = e.shiftKey ? -1 : 1;
				// 最大と最初は位置探索しない
				do {
					// 次のタブインデックス番号の取得
					var nextTabIdx = tabIdxLst[currentPos + pos];
					if (nextTabIdx === undefined) {
						// 位置が最初または最後の場合
						break;
					} else {
						// 止まってはいけいない属性 readonly
						if ($("[tabindex=" + nextTabIdx + "]").attr("readonly") == "readonly") {
							if (e.shiftKey) {
								pos--; // １つ前
							} else {
								pos++; // 次へ
							}
						}
						// 止まってはいけいない属性 disabled
						else if ($("[tabindex=" + nextTabIdx + "]").prop("disabled") == true) {
							if (e.shiftKey) {
								pos--; // １つ前
							} else {
								pos++; // 次へ
							}
						} else {
							// 次のタブインデックス番号の位置を決定し、フォーカス移動
							$("[tabindex=" + nextTabIdx + "]").focus();
							e.preventDefault();
							return;
						}
					}
				} while (currentPos + pos > 0 && currentPos + pos <= tabIdxAllCnt);
				// タブインデックスの移動先が存在しない場合
				var index = $(targetElm).index(this); // indexは0～
				var cNext = "";
				var nLength = $(targetElm).length;
				for (i = index; i < nLength; i++) {
					cNext = e.shiftKey ? ":lt(" + index + "):last" : ":gt(" + index + "):first";
					// 止まってはいけいない属性 readonly
					if ($(targetElm).filter(cNext).attr("readonly") == "readonly") {
						if (e.shiftKey) {
							index--; // １つ前
						} else {
							index++; // 次へ
						}
					}
					// 止まってはいけいない属性 disabled
					else if ($(targetElm).filter(cNext).prop("disabled") == true) {
						if (e.shiftKey) {
							index--; // １つ前
						} else {
							index++; // 次へ
						}
					} // 止まってはいけいない属性 tabindex あり
					else if ($(targetElm).filter(cNext).attr("tabindex") !== undefined) {
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
						for (i = 0; i < nLength; i++) {
							cNext = ":eq(" + (i) + ")";
							// 最初の要素もチェック
							if ($(targetElm).filter(cNext).attr("readonly") == "readonly" ||
									$(targetElm).filter(cNext).prop("disabled") == true ||
									$(targetElm).filter(cNext).attr("tabindex") !== undefined) {
								// 最初の要素から1つ後に
							} else {
								// 問題なければ移動
								break;
							}
						}
					}
				}
				if (index == 0) {
					if (e.shiftKey) {
						// 最初の項目なら、最後に移動。
						for (i = 1; i < nLength; i++) {
							cNext = ":eq(" + (nLength - i) + ")";
							// 最後の要素もチェック
							if ($(targetElm).filter(cNext).attr("readonly") == "readonly" ||
									$(targetElm).filter(cNext).prop("disabled") == true ||
									$(targetElm).filter(cNext).attr("tabindex") !== undefined) {
								// 最後の要素から1つ前に
							} else {
								// 問題なければ移動
								break;
							}
						}
					}
				}
				$(targetElm).filter(cNext).focus();
				e.preventDefault;
			} else {
				var index = $(targetElm).index(this); // indexは0～
				var cNext = "";
				var nLength = $(targetElm).length;
				for (i = index; i < nLength; i++) {
					cNext = e.shiftKey ? ":lt(" + index + "):last" : ":gt(" + index + "):first";
					// 止まってはいけいない属性 readonly
					if ($(targetElm).filter(cNext).attr("readonly") == "readonly") {
						if (e.shiftKey) {
							index--; // １つ前
						} else {
							index++; // 次へ
						}
					}
					// 止まってはいけいない属性 disabled
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
						for (i = 0; i < nLength; i++) {
							cNext = ":eq(" + (i) + ")";
							// 最初の要素もチェック
							if ($(targetElm).filter(cNext).attr("readonly") == "readonly" ||
									$(targetElm).filter(cNext).prop("disabled") == true) {
								// 最初の要素から1つ後に
							} else {
								// 問題なければ移動
								break;
							}
						}
					}
				}
				if (index == 0) {
					if (e.shiftKey) {
						// 最初の項目なら、最後に移動。
						for (i = 1; 1 < nLength; i++) {
							cNext = ":eq(" + (nLength - i) + ")";
							// 最後の要素もチェック
							if ($(targetElm).filter(cNext).attr("readonly") == "readonly" ||
									$(targetElm).filter(cNext).prop("disabled") == true) {
								// 最後の要素から1つ前に
							} else {
								// 問題なければ移動
								break;
							}
						}
					}
				}
				$(targetElm).filter(cNext).focus();
				e.preventDefault() //規定の動作をキャンセルするため、こちらのメソッドを呼ぶ。
			}
		}
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
	if(flg === undefined){
		// 登録系のサブミットでない場合
		if(isChanged == true){
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
	$.LoadingOverlay("show",{
		background  : "rgba(0, 0, 0, 0.4)",
		imageResizeFactor : 0.8,
		imageColor : "#ffffff",
	});

	// TODO 親画面から複数引数を持ってこれた場合formbean,action修正する
	window.document.forms["Actmp03Form"].target = "_self";
	window.document.forms["Actmp03Form"].action = "actmp03SEARCH";
	window.document.forms["Actmp03Form"].submit();

	if(isSubmit == false){
		// 確認ダイアログでキャンセルの可能性があるため消去処理を入れる
		setTimeout(function(){
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
	var pram=location.search;
	/* 引数がない時は処理しない */
	if (!pram) return "";
	/* 先頭の?をカット */
	pram=pram.substring(1);
	return pram;
}
function check(){
	// ボタンエリアの位置
	var btnAreaPos = $('#childrenBtnAreaId').offset();
	// テーブルエリアの位置
	var tableAreaPos = $('#childrenTableAreaId').offset();

	// テーブルの高さ
	var tableHeight = btnAreaPos.top - tableAreaPos.top;

	// 対象のCSSを書き換え
	$('.table-children-area').css('height',tableHeight - 33);
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
$(function () {
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
