<%@ page contentType="text/html;charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>
<%@ taglib prefix="sj" uri="/struts-jquery-tags"%>

<%@ page import="static jp.co.hitachi.a.m.all.AmallJspControl.*" %>

<%----------------------------------------------------------------------
	共通include CSS設定
-----------------------------------------------------------------------%>

		<%-- 共通CSS --%>
		<link href="<%= appendFileUpdateDt("jsp/css/ass_navi2.css", request) %>" rel="stylesheet" media="all">
		<link href="<%= appendFileUpdateDt("jsp/css/print.css", request) %>" rel="stylesheet" media="print">
		<link href="<%= appendFileUpdateDt("jsp/css/common.css", request) %>" rel="stylesheet">
		<%-- 個別CSS --%>
		<link href="<%= appendFileUpdateDt_ScreenUniqCss("jsp/css", request) %>" rel="stylesheet">
