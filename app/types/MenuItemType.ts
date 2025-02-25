import { IconProp } from "@fortawesome/fontawesome-svg-core";

export type menuItemType = {
  id: number;
  name: string;
  url: string;
  isSelected: boolean;
  icon: IconProp;
};
