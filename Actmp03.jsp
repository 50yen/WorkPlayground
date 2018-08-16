<%@ page contentType="text/html;charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>
<%@ taglib prefix="sj" uri="/struts-jquery-tags"%>

<%-- 各画面定義 ----------------------------------------------------------------------%>
<%-- Bean定義 --%>
<s:set var="DispBeanName" value="actmp03DispBean" />

<%------------------------------------------------------------------------------------%>
<%-- 親画面(上部) --%>
<%@ include file="/jsp/includes/AmallContentsHeadParents.jsp"%>
<%-- 各画面実装 ----------------------------------------------------------------------%>
<s:form name="Actmp03Form" action="actmp03" method="post">
<s:token />
<div class="pt20">
	<br /><br />
	<br /><br /><br />
	Modal <br />
	<%---- DialogModal画面 ---%>
	子画面に送る：<s:textfield id="code" property="code" name="code" styleId="code" /><br />
	返却値：<s:textfield id="comment" property="comment" name="comment" styleId="comment"/>
	<%--ダイアログ表示ボタン--%>
	<input type="button" id="kensaku" value="検索" />
	<%---- DialogModal画面 ---%>
	<%-- PDF表示 --%>
	<br /><br /><br />
	PDF(同窓)
	<input type="button" id="button2" onclick="button1_click" value="embed PDF表示"/><br /><br />
	<div id="div_PDF" style="width:520px; height:470px; background:#ccc"></div><br />
	<input type="button" id="button3" onclick="window.open('./report/manual_help.pdf','_blank', 'width=800,height=600');"  value="別窓_相対パス" />
	<input type="button" id="button4" onclick="window.open('./report/manual_help.pdf','pdf');"  value="別タブ_相対パス" /><br /><br />
	<input type="button" id="button5" onclick="window.open('http://www.gakkai.ne.jp/jses/pdf/pdf.pdf','_blank', 'width=800,height=600');"  value="別窓_URL" />
	<input type="button" id="button6" onclick="window.open('http://www.gakkai.ne.jp/jses/pdf/pdf.pdf','pdf');"  value="別タブ_URL" />
</div>
</s:form>
<%------------------------------------------------------------------------------------%>
<%-- 親画面(下部) --%>
<%@ include file="/jsp/includes/AmallContentsFootParents.jsp"%>

