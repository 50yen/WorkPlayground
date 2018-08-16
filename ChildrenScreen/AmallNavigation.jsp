<%@ page contentType="text/html;charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>
<%@ taglib prefix="sj" uri="/struts-jquery-tags"%>

<%----------------------------------------------------------------------
	共通include ナビゲーション情報
-----------------------------------------------------------------------%>
			<div class="header">
				<div class="mainWrap">
					<div class="header-logo" onclick="amallSubmit(0,'actop01DISP');">
						<s:property value="#DispBeanName.h_systemName" />
					</div>
					<div class="header-login">
						<ul>
							<li>
								<img src="jsp/images/icon_login.png" class="mr5" width="28" height="28" alt="">
							</li>
							<li>(株)アサヒ商事様</li>
							<li class="pl10">
								<input class="btnStyle02 ml5" value="マニュアル" type="button" onclick="manualOpen('<s:property value="#DispBeanName.h_screenManualPath" />');"></li>
							<li class="pl10">
								<input class="btnStyle02 ml5" value="ログアウト" type="button" onclick="amallSubmit(0,'actop01LOGOUT');">
							</li>
						</ul>
					</div>
				</div>
			</div>
