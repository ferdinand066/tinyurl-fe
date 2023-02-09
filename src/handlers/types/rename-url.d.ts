import { Timestamp } from "./timestamp";

export type RenameUrl = Timestamp & {
  id: string;
  label: string;
  url: string;
}