import { PositionLevel } from "./filters";

export interface Hero {
  id: number;
  name: string; /* TODO: DELETE THIS */
  position: string;
  company: string;
  salary: number;
  level: PositionLevel
}