<%@ page contentType="text/html;charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>
<%@ taglib prefix="sj" uri="/struts-jquery-tags"%>

<%@ page import="static jp.co.hitachi.a.m.all.AmallJspControl.*" %>


<%----------------------------------------------------------------------
	共通include JavaScript設定
-----------------------------------------------------------------------%>
			<%-- システム共通(Const) --%>
			<script>const MESSAGE = {<s:iterator value="#DispBeanName.jsMessageMap">'<s:property value="key" />' : '<s:property value="value" />',</s:iterator>};</script>
			<%-- システム共通 --%>
			<script src="<%= appendFileUpdateDt("jsp/js/common.js", request) %>"></script>

			<%-- 個別 --%>
			<script src="<%= appendFileUpdateDt_ScreenUniqJs("jsp/js", request) %>"></script>
