<%@ page contentType="text/html;charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>
<%@ taglib prefix="sj" uri="/struts-jquery-tags"%>

<%----------------------------------------------------------------------
	共通include メタタグ設定(キャッシュ設定)
-----------------------------------------------------------------------%>

		<%
			// キャッシュ不可
			response.setHeader( "Pragma", "no-cache");
			response.setHeader( "Cache-Control", "no-cache");
			response.setHeader( "If-Modified-Since", "Thu, 01 Jun 1970 00:00:00 GMT");
		%>
		<meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=980" />
		<meta name="description" content="">
		<meta name="keywords" content="">