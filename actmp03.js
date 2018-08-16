$(function() {


	$("#kensaku").click(function() {

		// iframeのsrc要素にパラメータを付加したURLを設定
		// モーダルダミーに飛ぶ
		var srcStr = "./modaldummy.jsp?";

		// GET パラメータの文字列を作成する
		 var srcParam = document.getElementById("code").value;
		 // デコード
		 srcParam = decodeURI(srcParam);

		 srcStr = srcStr + srcParam;

		// ダイアログ表示
		// width,heightは固定値にすること（モーダルを中心に配置するため）
		$("#dialog-iframe").dialog({
			modal : true,
			height : "450",
			width : "650px",
			closeOnEscape : true,
			hide : null,
			position : {
				my : "center",
				at : "center",
				of : window
			},
			resizable : false,
			show : null,
			open : function() {
				$('<iframe />').attr({
					src : srcStr,
					name : 'iframe_test',
					id : 'iframe_test',
					width: "600px",
					height : "400px",
					scrolling: "no",
				}).appendTo('#dialog-iframe');
			},
			close : function() {
				$("#iframe_test").remove();
			}
		});
	});

	// PDF 表示（同画面プレビュー）
	var btn2 = document.getElementById("button2");
    btn2.onclick = function () {
      //Divの中身をクリア
      var element = document.getElementById("div_PDF").childNodes[0];
      if (element != undefined) {
        document.getElementById("div_PDF").removeChild(element);
      }

      var emb = document.createElement('embed');
      emb.setAttribute('width', '500');
      emb.setAttribute('height', '450');
      emb.src = "./report/manual_help.pdf";

      //作成したOBJECTタグをDIVタグの中にセット
      var div = document.getElementById("div_PDF");
      div.appendChild(emb);
    }
});
