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
						if (cNext.length) {
							// ③ 止まってはいけいない属性 readonly
							if (cNext.attr("readonly") == "readonly") {
								j++;
								continue;
							}
							// ③ 止まってはいけいない属性 disabled
							else if (cNext.prop("disabled") == true) {
								j++;
								continue;
							} else {
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
	var $menu = $('.menu'); //都道府県の要素を変数に入れます。
	var originalMenu = $menu.html(); //後のイベントで、不要なoption要素を削除するため、オリジナルをとっておく
	var $screen = $('.screen'); //都道府県の要素を変数に入れます。
	var originalScreen = $screen.html(); //後のイベントで、不要なoption要素を削除するため、オリジナルをとっておく

	//地方側のselect要素が変更になるとイベントが発生
	$('.category').change(function() {

		//選択された地方のvalueを取得し変数に入れる
		var val1 = $(this).val();

		//削除された要素をもとに戻すため.html(original)を入れておく
		$menu.html(originalMenu).find('option').each(function() {
			var val2 = $(this).data('val'); //data-valの値を取得

			//valueと異なるdata-valを持つ要素を削除
			if (val1 != val2) {
				$(this).not(':first-child').remove();
			}
            $screen.attr('disabled', 'disabled');
		});


		//地方側のselect要素が未選択の場合、都道府県をdisabledにする
		if ($(this).val() == "") {
			$menu.attr('disabled', 'disabled');
		} else {
			$menu.removeAttr('disabled');
		}
	});
	$('.menu').change(function() {

		//選択された地方のvalueを取得し変数に入れる
		var val1 = $(this).val();

		//削除された要素をもとに戻すため.html(original)を入れておく
		$screen.html(originalScreen).find('option').each(function() {
			var val2 = $(this).data('val'); //data-valの値を取得

			//valueと異なるdata-valを持つ要素を削除
			if (val1 != val2) {
				$(this).not(':first-child').remove();
			}

		});
        //地方側のselect要素が未選択の場合、都道府県をdisabledにする
		if ($(this).val() == "") {
			$screen.attr('disabled', 'disabled');
		} else {
			$screen.removeAttr('disabled');
		}
	});

	$('.dispOnOff').change(function() {
		var dispVal = $(this).val();
		var dispId = $(this).attr('id');
		var objId = dispId + "edit";
		console.log(dispVal);
		console.log(objId);

		if (dispVal == "0") {
			$("#" + objId).prop('disabled', true);
		} else {
			$("#" + objId).prop('disabled', false);
		}
	});
	var $dispObj = $('.dispOnOff');

	var dispFunc = function() {


		var dispVal = $dispObj.val();


		var dispId = $dispObj.attr('id');
		var objId = dispId + "edit";
		console.log(dispVal);
		console.log(dispId);
		console.log(objId);

		if (dispVal == "0") {
			$("#" + objId).prop('disabled', true);
		} else {
			$("#" + objId).prop('disabled', false);
		}
	};

	dispFunc();
});



function disp() {
	$.LoadingOverlay("show", {
		background: "rgba(0, 0, 0, 0.5)",
		imageResizeFactor: 0.8,
		imageColor: "#ffffff",
	});
	setTimeout(function() {
		$.LoadingOverlay("hide");
	}, 1000);
}
