//features/search/UseCase/ItemRepositoryInterface.ts

import { GeneralApiProblem } from "../Adapter/apiProblem";
import { Item } from "../Adapter/types";

export interface ItemRepositoryInterface {
  searchItemName(nome: string): Promise<
    | { kind: "ok"; item: Item }
    | GeneralApiProblem
  >
}