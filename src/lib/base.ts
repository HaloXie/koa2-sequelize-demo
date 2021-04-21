/**
 * put some common function here
 */
export class BaseService {
  cthrow(errCode: number, errMsg: string) {
    throw new Error(`
      code: ${errCode}
      errMsg: ${errCode}
    `);
  }
}
