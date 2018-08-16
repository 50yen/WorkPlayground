<%@ page contentType="text/html;charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<%@ taglib prefix="sj" uri="/struts-jquery-tags"%>

<%-- 各画面定義 ----------------------------------------------------------------------%>
<%-- Bean定義 --%>
<s:set var="DispBeanName" value="actmp03DispBean" />


<%------------------------------------------------------------------------------------%>
<%-- 子画面(上部) --%>
<%@ include file="/jsp/includes/AmallContentsHeadChildren.jsp"%>
<script>
	//dialog画面クローズ処理
	function closeDialog2() {
		// 親画面に値を渡す
		window.parent.document.getElementById("comment").value = document.getElementById("send").value;
		window.parent.document.getElementsByName("token")[0].value = document.getElementsByName("token")[0].value;
		// モーダルクローズ
		window.parent.jQuery('#dialog-iframe').dialog('close');
	}
</script>
<%-- 各画面実装 ----------------------------------------------------------------------%>
<s:form name="Actmp03Form" action="actmp03" method="post">
	<s:token />
Receive： <s:textfield id="receive" size="30" property="comment" name="receive" /><br />
Send：    <s:textfield id="send" size="30" property="comment" name="send" value="%{#DispBeanName.send}" />
<br /><br />
<%--検索ボタン等（省略）--%>
<s:submit type="buttontype" value="実行" onclick="amallSubmit('Actmp03Form','actmp03SEARCH');" />
<s:submit type="buttontype" value="閉じる" id="test2" onclick="closeDialog2()" />
</s:form>
<%------------------------------------------------------------------------------------%>
<%-- 子画面(下部) --%>
<%@ include file="/jsp/includes/AmallContentsFootChildren.jsp"%>
