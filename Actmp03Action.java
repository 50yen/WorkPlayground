/*
 * ----------------------------------------------------
 * Ass Customer Online System
 *
 * @(#) Actmp03Action.java
 *
 * ----------------------------------------------------
 * 2038.08.07 新規作成
 * ----------------------------------------------------
 */
package jp.co.hitachi.a.c.tmp.action;

import jp.co.hitachi.a.c.tmp.bean.Actmp03DispBean;
import jp.co.hitachi.a.c.tmp.business.Actmp03Business;
import jp.co.hitachi.a.m.all.AmallException;
import jp.co.hitachi.a.m.cls.AmclsActionPcBase;

/*****************************************************************************************
 * Actionのスーパークラス<br>
 *****************************************************************************************/
public class Actmp03Action extends AmclsActionPcBase {

	/** メンバ変数 */
	/** 画面表示Bean */
	private Actmp03DispBean actmp03DispBean;

	/** TEMP01 */
	private String temp01 = null;
	/** TEMP02 */
	private String temp02 = null;
	/** modalで受け取る値 */
	private String receive = null;

	/*************************************************************************************
	 * execute処理
	 * <p>
	 * execute実行
	 * </p>
	 * @return ActionForward
	 ************************************************************************************/
	public String execute() throws Exception {

		// セッションやトークンのチェック等を実行し、callexecute処理を呼び出す
    	String forwardName = super.execute();
    	// 実行結果を画面表示Beanに登録
    	setActmp03DispBean((Actmp03DispBean)request.getAttribute("Actmp03DispBean"));
    	return forwardName;

	}

	/*************************************************************************************
	 * callexecute処理
	 * <p>
	 * callexecute実行
	 * </p>
	 * @return ActionForward
	 ************************************************************************************/
	public String callexecute() throws AmallException {

			// ビジネス層の生成
			Actmp03Business dao = new Actmp03Business(this, request, response, getGid(), getEvent());

			// ビジネス層の実行
			return dao.executeProc();


	}
	////////////////////////////////////////////////////////////////////
	// setter / getter の自動生成
	////////////////////////////////////////////////////////////////////

	public Actmp03DispBean getActmp03DispBean() {
		return actmp03DispBean;
	}

	public void setActmp03DispBean(Actmp03DispBean actmp03DispBean) {
		this.actmp03DispBean = actmp03DispBean;
	}

	public String getTemp01() {
		return temp01;
	}

	public void setTemp01(String temp01) {
		this.temp01 = temp01;
	}

	public String getTemp02() {
		return temp02;
	}

	public void setTemp02(String temp02) {
		this.temp02 = temp02;
	}

	public String getReceive() {
		return receive;
	}

	public void setReceive(String receive) {
		this.receive = receive;
	}


}
