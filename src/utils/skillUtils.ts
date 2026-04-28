import { skillGroups } from "../data/skills";
import type { SkillGroup } from "../data/types";

type SkillGroupId = (typeof skillGroups)[number]["id"];

export function getSkillItems(groupId: SkillGroupId) {
  return skillGroups.find((group) => group.id === groupId)?.items ?? [];
}

export function getPreviewSkillGroups() {
  return skillGroups.filter((group) => getPreviewSkillItems(group).length > 0);
}

export function getPreviewSkillItems(group: SkillGroup) {
  return group.previewLimit ? group.items.slice(0, group.previewLimit) : [];
}
