interface IBasicInfo {
  /**
   * 生日
   */
  birthday?: string;
  /**
   * 描述
   */
  description?: string;
  /**
   * 邮箱地址
   */
  email?: string;
  /**
   * 性别
   */
  gender?: number;
  /**
   * 身份证号
   */
  idCard?: string;
  /**
   * 用户名
   */
  name: string;
  /**
   * 手机号
   */
  phone?: string;
  /**
   * 真实姓名
   */
  realName: string;
}
interface IBasicOut {
  id: string;
  /**
   * true：操作成功，false：操作失败
   */
  state: boolean;
  errorMsg?: string;
}

export interface IFindListIn {
  where?: any;
  extWhere?: any;
  limit?: number;
  offset?: number;
}

export interface IFindOneOut extends IBasicInfo {
  id: string;
  extendInfo: {
    id: string;
    address: string;
    appUserId: string;
    reference: string;
  };
}

export interface IFindUserMappingOut {
  phone: string;
  localAddress: string;
  originAddress: string;
}

/**
 * 输出用户信息包含对应的 token 数量
 */
export interface IFindOneFullOut extends IBasicInfo {
  id: string;
  extendInfo: {
    id: string;
    address: string;
    appUserId: string;
    reference: string;
  };
  balanceInfo: Array<{
    appUserId: string;
    appUserExtId: string;
    tokenId: string;
    amount: number;
  }>;
}

export interface ICreateIn extends IBasicInfo {
  /**
   * 因为从中台同步, 保留中台的 app-user-id
   */
  id: string;
}
export interface ICreateOut extends IBasicOut {
  address: string;
}

export interface IUpdateIn extends IBasicInfo {
  id: string;
}
export interface IUpdateOut extends IBasicOut {}

export interface IFindUserInfoOut {
  address: string;
  /**
   * true：操作成功，false：操作失败
   */
  state: boolean;
  errorMsg?: string;
  info: string;
}

export interface IFindAppUserBalanceIn {
  address: string;
  tokenId?: string;
}
export interface IFindAppUserBalanceOut {
  // appUserId: string;
  address: string;
  balances: Array<{
    tokenId: string;
    name: string;
    symbol: string;
    amount: number;
  }>;
}
