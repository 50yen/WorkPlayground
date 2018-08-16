/*
 * ----------------------------------------------------
 * Ass Customer Online System
 *
 * @(#) Actmp03DispBean.java
 *
 * ----------------------------------------------------
 * 2018.08.07 新規作成
 * ----------------------------------------------------
 */
package jp.co.hitachi.a.c.tmp.business;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import jp.co.hitachi.a.c.tmp.action.Actmp03Action;
import jp.co.hitachi.a.c.tmp.bean.Actmp03DispBean;
import jp.co.hitachi.a.m.all.AmallDbAccess;
import jp.co.hitachi.a.m.all.AmallException;
import jp.co.hitachi.a.m.all.AmallMessageConst;

/*****************************************************************************************
 * Actmp03Businessクラス<br>
 *****************************************************************************************/
public class Actmp03Business extends ActmpBusinessBase {

	/** メンバ定数 */
	/** 表示用画面Bean名 */
	private static final String DISP_BEAN = "Actmp03DispBean";

	/**
	 * FOWARD 定義
	 */
	/** 画面表示 */
	public static final String FORWARD_DISP = "DISP";
	/** 処理01 */
	public static final String FORWARD_TEMP01 = "TEMP01";
	/** 処理02 */
	public static final String FORWARD_TEMP02 = "TEMP02";
	/** モーダルでのacion */
	public static final String FORWARD_SEARCH = "SEARCH";

	/**
	 * 画面項目ID
	 */
	/** TEMP01 */
	public static final String ITEM_ID_TEMP01 = "temp01";
	/** TEMP01 */
	public static final String ITEM_ID_TEMP02 = "temp02";

	/** メンバ変数 */
	/** アクションフォーム */
	private Actmp03Action m_Actmp03Form = null;
	/** 表示用画面Bean */
	private Actmp03DispBean m_Actmp03DispBean = null;

	/*************************************************************************************
	 * コンストラクタ
	 * <p>
	 * コンストラクタを行う
	 * </p>
	 * @param mapping アクションマッピング
	 * @param　form　　　アクションフォーム
	 * @param request　リクエスト
	 * @param response　レスポンス
	 * @param context　コンテキスト
	 * @param inGid　画面ID
	 * @param inActionMode　イベント
	 * @return 無し
	 ************************************************************************************/
	public Actmp03Business(
			Actmp03Action form,
			HttpServletRequest request,
			HttpServletResponse response,
			String gid,
			String event)
			throws AmallException {
		super(request, response, gid, event);

		m_ClassName = Actmp03Business.class.getName();
		m_Actmp03Form = form;
		m_Actmp03DispBean = new Actmp03DispBean();
		setErrString(gid, m_Actmp03Form.getM_systemKind(request));
	}

	/*************************************************************************************
	 * 画面イベント処理実行
	 * <p>
	 * 画面イベント処理を実行する
	 * </p>
	 * @param  無し
	 * @return ActionForward名称
	 ************************************************************************************/
	public String execute() throws AmallException {

		// ログ用メソッド名
		String methodName = "execute()";
		// 返却ActionForward名
		String forwardStr = FORWARD_DISP;

		try {

			// GETﾊﾟﾗﾒｰﾀ値のﾁｪｯｸ
			if (m_Event.length() <= 0) {
				AmallException ee = new AmallException();
				ee.addException(m_ClassName, methodName, AmallMessageConst.MSG_SYS_SCREEN_EVENT_GET_ERROR, "");
				throw ee;
			}
			// システム共通情報の作成
			createSystemCommonInfo(m_Gid, m_Actmp03DispBean);

			// DB接続
			m_DbAccess = new AmallDbAccess(m_Actmp03Form.getM_systemKind());
			m_DbAccess.initDB();

			// 画面ｲﾍﾞﾝﾄ判定
			if (FORWARD_DISP.equals(m_Event)) {
				// 画面表示処理の場合
				forwardStr = disp();
			} else if (FORWARD_TEMP01.equals(m_Event)) {

			} else if (FORWARD_TEMP02.equals(m_Event)) {

			} else if (FORWARD_SEARCH.equals(m_Event)) {
				// モーダル画面処理の場合
				forwardStr = search();
			} else {

				// 上記以外のイベントの場合
				AmallException ee = new AmallException();
				ee.addException(m_ClassName, methodName, AmallMessageConst.MSG_SYS_SCREEN_EVENT_GET_ERROR, m_Event);
				throw ee;
			}

			// 正常終了
			return forwardStr;

		} catch (AmallException e) {
			e.addException(m_ClassName, methodName, AmallMessageConst.MSG_SYS_SCREEN_EVENT_PROC_ERROR);
			setAmallException(e);
			throw e;

		} catch (Exception e) {
			AmallException ee = new AmallException();
			ee.addException(m_ClassName, methodName, e);
			setAmallException(ee);
			throw ee;

		} finally {
			// リクエストスコープにDispBean 登録
			setReqScopeAttribute(DISP_BEAN, m_Actmp03DispBean);
		}
	}

	/*************************************************************************************
	 * 初期表示処理
	 * <p>
	 * 初期表示処理を行う
	 * </p>
	 * @param  無し
	 * @return ActionForward名称
	 ************************************************************************************/
	private String disp() throws AmallException {

		if (m_DbAccess != null) {
			m_DbAccess.exitDB();
		}
		return FORWARD_DISP;
	}

	/*************************************************************************************
	 * モーダル画面処理
	 * <p>
	 * モーダル画面処理を行う
	 * </p>
	 * @param  無し
	 * @return ActionForward名称
	 ************************************************************************************/
	private String search() throws AmallException {

		m_Actmp03DispBean.setSend(m_Actmp03Form.getReceive());

		return FORWARD_SEARCH;
	}


}