<%@ page contentType="text/html;charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>
<%@ taglib prefix="sj" uri="/struts-jquery-tags"%>

<%----------------------------------------------------------------------
	共通include 子画面 上部
-----------------------------------------------------------------------%>

<!DOCTYPE html>
<html>
	<head>
		<%-- メタタグ定義 --%>
		<%@ include file="/jsp/includes/AmallMetaTag.jsp" %>
		<%-- タイトル --%>
		<title><s:property value="#DispBeanName.h_systemName" /></title>
		<%-- CSS定義 --%>
	 	<%@ include file="/jsp/includes/AmallCss.jsp" %>
	 	<%-- Jquery UI Plugin --%>
	 	<sj:head locale="ja" jqueryui="true" jquerytheme="css" customBasepath="jsp" />
	 	<script src="jsp/js/loadingoverlay.min.js"></script>
	</head>
	<body>
		<div class="container">
			<div class="main">
				<div class="mainWrap">
					<div>
						<%-- メッセージ表示エリア--%>
						<%@ include file="/jsp/includes/AmallMessageArea.jsp" %>
