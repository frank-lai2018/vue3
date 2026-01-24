// 定義一個接口，用於限制person物件的特定屬性
export interface PersonInter {
  id: string;
  name: string;
  age: number;
}

// 一個自訂類型
// export type Persons = Array<PersonInter>
export type Persons = PersonInter[];
