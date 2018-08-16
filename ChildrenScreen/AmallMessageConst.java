/*
 * ----------------------------------------------------
 * Ass Customer Online System
 *
 * @(#) AmallMessageConst.java
 *
 * ----------------------------------------------------
 * 2018.08.01 新規作成
 * ----------------------------------------------------
 */
package jp.co.hitachi.a.m.all;

/*****************************************************************************************
 * メッセージ定数クラス<br>
 *****************************************************************************************/
public class AmallMessageConst {

	/*************************************************************************************
	 * システム共通メッセージ定数
	 ************************************************************************************/
	/** 画面遷移アクセスキー不正 */
	public static final String MSG_COM_SCREEN_MOVE_ACCESS_ERROR = "screenMoveAccessError";
	/** セッションタイムアウト */
	public static final String MSG_COM_SESSION_TIMEOUT_ERROR = "sessionTimeOutError";
	/** トークン生成エラー */
	public static final String MSG_COM_TOKEN_CREATE_ERROR = "tokenCreateError";
	/** cookieが有効ではありません */
	public static final String MSG_COM_INVALID_COOKIE_ERROR = "invalidCookieError";
	/** HttpSession取得エラー(null) */
	public static final String MSG_COM_SESSION_GET_ERROR = "sessionGetError";
	/** DTO管理データ取得エラー:{0} */
	public static final String MSG_COM_DTO_MNG_DATA_GET_ERROR = "dtoMngDataGetError";
	/** DTO管理データクリアエラー */
	public static final String MSG_COM_MNG_DATA_CLEAR_ERROR = "dtoMngDataClearError";
	/** 当画面へのアクセス権限がありません */
	public static final String MSG_COM_INVALID_ACCESS_AUTH_ERROR = "invalidAccessAuthError";
	/** DBアクセス メンバ変数エラー:m_Connection(null) */
	public static final String MSG_COM_DB_MEM_CON_ERROR = "dbMemberConnectError";
	/** DBアクセス メンバ変数エラー:m_PreparedStatement(null) */
	public static final String MSG_COM_DB_MEM_PRE_ERROR = "dbMemberPreparedError";
	/** DBアクセス メンバ変数エラー:m_CallableStatement(null) */
	public static final String MSG_COM_DB_MEM_CAL_ERROR = "dbMemberCallableError";
	/** DBアクセス 引数エラー:sqlQuery(null) */
	public static final String MSG_COM_DB_ARG_QRY_ERROR = "dbArgQueryError";
	/** DBアクセス 引数エラー:sqlCall(null) */
	public static final String MSG_COM_DB_ARG_CAL_ERROR = "dbArgCallError";
	/** 画面イベント処理 : 画面イベント取得エラー(event={0}) */
	public static final String MSG_COM_SCREEN_EVENT_GET_ERROR = "screenEventGetError";
	/** 画面イベント処理 : 画面イベント処理エラー */
	public static final String MSG_COM_SCREEN_EVENT_PROC_ERROR = "screenEventProcError";
	/** チェック処理：入力値チェック処理エラー {0} */
	public static final String MSG_COM_INPUT_CHECK_PROC_ERROR = "inputCheckProcError";
	/** チェック処理：{0}は必須入力です。入力して下さい。 */
	public static final String MSG_COM_INPUT_CHECK_REQUIRD_ERROR = "inputCheckRequireError";
	/** 処理が正常に終了しました。*/
	public static final String MSG_COM_COMPLETE_INFO = "Mapi001";

	/*************************************************************************************
	 * 業務メッセージ定数
	 ************************************************************************************/
	/** ログイン情報取得エラー */
	public static final String MSG_GYO_LOGIN_INFO_GET_ERROR = "loginInfoGetError";
	/** ログイン管理(DB)更新エラー {0} */
	public static final String MSG_GYO_LOGIN_DB_UPDATE_ERROR = "loginDbUpdateError";
	/** ログイン処理エラー */
	public static final String MSG_GYO_LOGIN_PROC_ERROR = "loginProcError";
	/** ログイン処理エラー ： 入力されたログインＩＤ、又はパスワードが間違っています。再度入力して下さい。 */
	public static final String MSG_GYO_LOGIN_COLLECT_ERROR = "loginCollectError";
	/** ログイン処理エラー ： パスワードを続けて間違えたためロックされました。 */
	public static final String MSG_GYO_LOGIN_LOCK_ERROR = "loginLockError";


	/*************************************************************************************
	 * エラーログファイル出力文字列定数
	 ************************************************************************************/
	/** 発生日時 */
	public static final String ERR_LOG_H_DATE = "発生日時";
	/** ログインID */
	public static final String ERR_LOG_H_LOGIN_ID = "ログインID";
	/** 区分 */
	public static final String ERR_LOG_H_KBN = "区分";
	/** 業務名 */
	public static final String ERR_LOG_H_GYOMU_NM = "業務名";
	/** ログ情報ヘッダ */
	public static final String ERR_LOG_H_LOG_HEAD = "ログ情報ヘッダ";
	/** ログ情報 */
	public static final String ERR_LOG_H_LOG_INFO = "ログ情報";
	/** 発生した例外 */
	public static final String ERR_LOG_H_EXCEPTION = "発生した例外";
	/** 例外が発生したクラス名称 */
	public static final String ERR_LOG_H_CLASS_NM = "例外が発生したクラス名称";
	/** 例外が発生したメソッド名称 */
	public static final String ERR_LOG_H_METHOD_NM = "例外が発生したメソッド名称";
	/** メッセージID */
	public static final String ERR_LOG_H_MESSAGE_ID = "メッセージID";
	/** メッセージ内容 */
	public static final String ERR_LOG_H_MESSAGE = "メッセージ内容";
	/** メッセージ種別 */
	public static final String ERR_LOG_H_MESSAGE_KIND = "メッセージ種別";
	/** ログ開始 */
	public final static String ERR_LOG_STATUS_START = "開始";
	/** ログ終了 */
	public final static String ERR_LOG_STATUS_END = "終了";
	/** ログ異常終了 */
	public final static String ERR_LOG_STATUS_ERROR = "異常終了";

}
