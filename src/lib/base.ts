/**
 * put some common function here
 */
export class BaseService {
  cthrow(errCode: number, errMsg: string) {
    throw new Error(JSON.stringify({ errCode, errMsg }));
  }
}
