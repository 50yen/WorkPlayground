<%@ page contentType="text/html;charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>
<%@ taglib prefix="sj" uri="/struts-jquery-tags"%>

<%----------------------------------------------------------------------
	共通include サイドバー情報
-----------------------------------------------------------------------%>
			<s:if test="%{#gidLogin == -1}">
				<div class="menu">
					<ul>
					<s:iterator value="#DispBeanName.owdScreenList">
						<s:if test="m_DispPattern == 0">
						<%-- サブメニュー有り --%>
						<li>
							<img src="<s:property value="m_SideImgPath"/>" width="30" height="30" alt="<s:property value="m_CategoryName"/>">
							<div><s:property value="m_CategoryName"/></div>
							<div class="submenu">
								<ul>
								<s:iterator value="m_MenuList">
									<li>
										<div class="middleMenu"><s:property value="m_MenuName"/></div>
										<div class="submenu">
											<ul>
											<s:iterator value="m_ScreenList">
												<li>
													<div class="smallMenu" onclick="amallSubmit(0,'<s:property value="m_FowardData"/>');"><s:property value="m_ScreenName"/></div>
												</li>
											</s:iterator>
											</ul>
										</div>
									</li>
								</s:iterator>
								</ul>
							</div>
						</li>
						</s:if>
						<s:if test="m_DispPattern == 1">
						<%-- サブメニュー無し --%>
						<li>
							<img src="<s:property value="m_SideImgPath"/>" width="30" height="30" alt="<s:property value="m_CategoryName"/>">
							<s:iterator value="m_MenuList">
								<s:iterator value="m_ScreenList">
									<s:if test="m_FowardData.length() > 0">
										<div class="categoryLink" onclick="amallSubmit(0,'<s:property value="m_FowardData"/>');"><s:property value="m_ScreenName"/></div>
									</s:if>
									<s:else>
										<div class="categoryLink" onclick="manualOpen('<s:property value="m_LinkPath"/>');"><s:property value="m_ScreenName"/></div>
									</s:else>
								</s:iterator>
							</s:iterator>
						</li>
						</s:if>
					</s:iterator>
					</ul>
				</div>
			</s:if>