<%@ page contentType="text/html;charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>
<%@ taglib prefix="sj" uri="/struts-jquery-tags"%>

<%----------------------------------------------------------------------
	共通include ヘッダー情報
-----------------------------------------------------------------------%>
<s:if test="#DispBeanName.h_dispFlg">
						<div>
							<div class="title mb10">
								<h1><s:property value="#DispBeanName.h_screenName" />　<s:property value="#DispBeanName.h_screenNameAddData" /></h1>
							</div>
							<div class="title-id"><s:property value="#DispBeanName.h_screenRefId" />　<s:property value="#DispBeanName.h_systemDate" /></div>
						</div>
</s:if>
