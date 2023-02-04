import { Timestamp } from "./timestamp";

export type TinyUrl = Timestamp & {
  id: string;
  label: string;
  url: string;
}