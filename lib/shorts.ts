export interface ShortCaption { t: number; who: string; text: string; }
export interface ShortClip { id: string; topicId: string; topicTitle: string; topicShort: string; topicIcon: string; strand: string; episodeNum: number; episodeTitle: string; index: number; totalInTopic: number; title: string; summary: string; startSec: number; endSec: number; durationSec: number; src: string; poster: string; captions: ShortCaption[]; }
export const SHORTS: ShortClip[] = [];
export function shortsForTopic(topicId: string): ShortClip[] { return SHORTS.filter((s) => s.topicId === topicId); }
