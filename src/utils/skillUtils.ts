import { skillGroups } from "../data/skills";

type SkillGroupId = (typeof skillGroups)[number]["id"];

export function getSkillItems(groupId: SkillGroupId) {
  return skillGroups.find((group) => group.id === groupId)?.items ?? [];
}
