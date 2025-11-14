
import type { NodeType } from './types';

export const COLORS = {
  softWarmYellow: '#FFEFC2',
  warmPeach: '#FFD9C8',
  lightSand: '#FFF7E8',
  softBlushPink: '#FFE4E1',
  calmBeige: '#F7EDD4',
  warmBrownText: '#5A4632',
  neutralGraphLines: '#C8B9A6',
  white: '#FFFFFF',
};

export const NODE_STYLES: { [key in NodeType]: { bg: string; border: string } } = {
  user: { bg: COLORS.softWarmYellow, border: '#FFD77A' },
  classifier: { bg: COLORS.warmPeach, border: '#FFC0A3' },
  sql: { bg: COLORS.softBlushPink, border: '#FFC4C1' },
  python: { bg: COLORS.calmBeige, border: '#EADDAF' },
  output: { bg: COLORS.softWarmYellow, border: '#FFD77A' },
  monitor: { bg: COLORS.warmPeach, border: '#FFC0A3' },
};
