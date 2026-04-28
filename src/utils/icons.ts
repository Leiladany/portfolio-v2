import type { LucideIcon } from "lucide-react";
import {
  BriefcaseBusiness,
  Code2,
  FileText,
  Globe2,
  Mail,
  Palette,
  Sparkles,
} from "lucide-react";
import type { IconName } from "../data/types";

const iconMap = {
  briefcase: BriefcaseBusiness,
  code: Code2,
  fileText: FileText,
  globe: Globe2,
  mail: Mail,
  palette: Palette,
  sparkles: Sparkles,
} satisfies Record<IconName, LucideIcon>;

export function getIcon(iconName: IconName) {
  return iconMap[iconName];
}
