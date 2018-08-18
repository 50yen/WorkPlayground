<%@ page contentType="text/html;charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<%@ taglib prefix="sj" uri="/struts-jquery-tags"%>

<!DOCTYPE html>
<head>
<%-- メタタグ定義 --%>
<%@ include file="jsp/includes/AmallMetaTag.jsp"%>
<title></title>
</head>
<body>
	<s:form method="post">
		<s:hidden name="modalType" id="modalType" value=""/>
		<s:hidden name="modalData" id="modalData" value=""/>
		<s:token  />
	</s:form>
</body>
</html>
