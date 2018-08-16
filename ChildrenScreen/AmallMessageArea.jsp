<%@ page contentType="text/html;charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>
<%@ taglib prefix="sj" uri="/struts-jquery-tags"%>

<%@ page import="static jp.co.hitachi.a.m.all.AmallJspControl.*" %>

<%----------------------------------------------------------------------
	共通include メッセージエリア情報
-----------------------------------------------------------------------%>

<s:if test="%{#DispBeanName.messageType != 0}">
	<s:if test="#DispBeanName.messageType==1">
		<div class="alertblink errorMessage mt20 clear">
			<s:iterator value="#DispBeanName.message" status="st">
				<p class="mb5"><s:property /></p>
			</s:iterator>
		</div>
  	</s:if>
	<s:if test="#DispBeanName.messageType==2">
		<div class="alertblink warningMessage mt20 clear">
			<s:iterator value="#DispBeanName.message" status="st">
				<p class="mb5"><s:property /></p>
			</s:iterator>
		</div>
	</s:if>
	<s:if test="#DispBeanName.messageType==9">
		<div class="alertblink message02 mt10">
			<s:iterator value="#DispBeanName.message" status="st">
				<p class="mb5"><s:property /></p>
			</s:iterator>
		</div>
	</s:if>
	<script src="<%= appendFileUpdateDt("jsp/js/message.js", request) %>"></script>
</s:if>