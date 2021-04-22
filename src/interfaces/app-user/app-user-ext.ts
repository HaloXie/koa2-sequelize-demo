export interface ICreateIn {
  appUserId: string;
  reference: string;
  description?: string;
}
export interface IUpdateIn {
  id: string;
  reference?: string;
  description?: string;
}
