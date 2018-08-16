<%@ page contentType="text/html;charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<%@ taglib prefix="sj" uri="/struts-jquery-tags"%>

<%-- 各画面定義 ----------------------------------------------------------------------%>
<%-- XXX Bean名 --%>
<%-- Bean定義 --%>
<s:set var="DispBeanName" value="actmp03DispBean" />


<%-------------------------------------------------------------------------------------%>
<%-- 親画面(上部) --%>

<!DOCTYPE html>
<head>
<%-- メタタグ定義 --%>
<%@ include file="jsp/includes/AmallMetaTag.jsp"%>
<%-- タイトル --%>
<title><s:property value="#DispBeanName.h_systemName" /></title>
<%-- CSS定義 --%>
<%-- 共通CSS --%>
<link href="<%=appendFileUpdateDt("jsp/css/ass_navi2.css", request)%>" rel="stylesheet" media="all">
<link href="<%=appendFileUpdateDt("jsp/css/print.css", request)%>" rel="stylesheet" media="print">
<link href="<%=appendFileUpdateDt("jsp/css/common.css", request)%>" rel="stylesheet">
<%-- 個別CSS --%>
<link href="<%=appendFileUpdateDt_ScreenUniqCss("jsp/css", request)%>" rel="stylesheet">
<%-- Jquery UI Plugin --%>
<sj:head locale="ja" jqueryui="true" jquerytheme="css" customBasepath="jsp" />
<script src="jsp/js/loadingoverlay.min.js"></script>
<script src="<%=appendFileUpdateDt("jsp/js/common.js", request)%>"></script>
<script>
	window.onload = jump;
</script>
</head>
<body>
	<div class="container">
		<%-- ログイン画面ではナビゲーションなどは表示しない --%>
		<s:set var="gidLogin" value="gid.indexOf('log')" />
		<div class="main">
			<div class="mainWrap">
				<div>
					<s:if test="%{#gidLogin == -1}">
						<%-- メッセージ表示エリア--%>
						<%@ include file="jsp/includes/AmallMessageArea.jsp"%>
						<%-- ヘッダー表示エリア--%>
					</s:if>

<%-- 各画面実装 ----------------------------------------------------------------------%>
<%-- XXX Form名 --%>
<s:form name="Actmp03Form" action="actmp03" method="post" target="modal">
<s:hidden name="code" id="code" value="anx"/>
<s:token  />
</s:form>
<%-------------------------------------------------------------------------------------%>
					<%-- 親画面(下部) --%>
				</div>
			</div>
		</div>
		<%-- 共通機能エリア --%>
		<%@ include file="jsp/includes/AmallFunc.jsp"%>
		<%-- フッター表示エリア --%>
		<%-- Javascript表示 --%>
		<%-- システム共通 --%>

	</div>
</body>
</html>
