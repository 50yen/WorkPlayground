<%@ page contentType="text/html;charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<%@ taglib prefix="sj" uri="/struts-jquery-tags"%>

<%-- 各画面定義 ----------------------------------------------------------------------%>
<%-- Bean定義 --%>
<s:set var="DispBeanName" value="accom01DispBean" />

<%------------------------------------------------------------------------------------%>
<%-- 子画面(上部) --%>
<%@ include file="/jsp/includes/AmallContentsHeadChildren.jsp"%>

<%-- 各画面実装 ----------------------------------------------------------------------%>
<s:form name="Accom01Form" action="accom01" method="post">
	<s:token />
<%-- ↓テスト実装 このまま使うの禁止 --%>
Receive： <s:textfield id="receive" size="30" property="comment" name="receive" /><br />
Send：    <s:textfield id="send" size="30" property="comment" name="send" value="%{#DispBeanName.send}" />
<br /><br />
<s:submit type="buttontype" value="実行" onclick="amallSubmit('Accom01Form','accom01SEARCH');" />
<s:submit type="buttontype" value="閉じる" id="test2" onclick="closeDialog('%{#DispBeanName.type}')" />
<%-- ↑テスト実装 このまま使うの禁止 --%>

</s:form>
<%------------------------------------------------------------------------------------%>
<%-- 子画面(下部) --%>
<%@ include file="/jsp/includes/AmallContentsFootChildren.jsp"%>
