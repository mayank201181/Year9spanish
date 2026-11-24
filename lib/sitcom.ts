export interface SitcomEpisode { num: number; topicId: string; topicShort: string; title: string; logline: string; durationSec: number; src: string; poster: string; }
export const SHOW_TITLE = "Totally Raotional: Year 9 Spanish";
export const SITCOM_EPISODES: SitcomEpisode[] = [];
export function sitcomEpisodeFor(topicId: string): SitcomEpisode | undefined { return SITCOM_EPISODES.find((e) => e.topicId === topicId); }
