export interface ICreateIn {
  userId: string;
  reference: string;
  description?: string;
}
export interface IUpdateIn {
  id: string;
  reference?: string;
  description?: string;
}
