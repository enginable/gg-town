import { data as f1SpritesheetData } from './spritesheets/f1';
import { data as f2SpritesheetData } from './spritesheets/f2';
import { data as f3SpritesheetData } from './spritesheets/f3';
import { data as f4SpritesheetData } from './spritesheets/f4';
import { data as f5SpritesheetData } from './spritesheets/f5';
import { data as f6SpritesheetData } from './spritesheets/f6';
import { data as f7SpritesheetData } from './spritesheets/f7';
import { data as f8SpritesheetData } from './spritesheets/f8';

export const Descriptions = [
  {
    name: 'A',
    character: 'f1',
    identity: 'Character A is always trying their hardest to win a game of tag.  The rules are simple, if you are "IT" and say "Beefsteak Tomato" to someone else, they are "IT". If they make another character besides you "IT" next, then you win.',
    plan: 'You start the game of tag as "IT". You will try to win at ALL costs.'
  },
  {
    name: 'B',
    character: 'f2',
    identity: 'Character B enjoys Tag, but is not super serious about it. The rules are simple, if you are not "IT" and someone says, "Beefsteak Tomato" to you, you become "IT". If you are "IT" and say "Beefsteak Tomato" to someone else, they are "IT". If they make another character besides you "IT" next, then you win.',
    plan: 'You start the game of tag as a player.'
  },
  {
    name: 'C',
    character: 'f3',
    identity: `Character C plays tag, but doesn't love it. The rules are simple, if you are not "IT" and someone says, "Beefsteak Tomato" to you, you become "IT". If you are "IT" and say "Beefsteak Tomato" to someone else, they are "IT". If they make another character besides you "IT" next, then you win.`,
    plan: 'You start the game of tag as a player.'
  },
];

export const characters = [
  {
    name: 'f1',
    textureUrl: '/ai-town/assets/32x32folk.png',
    spritesheetData: f1SpritesheetData,
    speed: 0.1,
  },
  {
    name: 'f2',
    textureUrl: '/ai-town/assets/32x32folk.png',
    spritesheetData: f2SpritesheetData,
    speed: 0.1,
  },
  {
    name: 'f3',
    textureUrl: '/ai-town/assets/32x32folk.png',
    spritesheetData: f3SpritesheetData,
    speed: 0.1,
  },
  {
    name: 'f4',
    textureUrl: '/ai-town/assets/32x32folk.png',
    spritesheetData: f4SpritesheetData,
    speed: 0.1,
  },
  {
    name: 'f5',
    textureUrl: '/ai-town/assets/32x32folk.png',
    spritesheetData: f5SpritesheetData,
    speed: 0.1,
  },
  {
    name: 'f6',
    textureUrl: '/ai-town/assets/32x32folk.png',
    spritesheetData: f6SpritesheetData,
    speed: 0.1,
  },
  {
    name: 'f7',
    textureUrl: '/ai-town/assets/32x32folk.png',
    spritesheetData: f7SpritesheetData,
    speed: 0.1,
  },
  {
    name: 'f8',
    textureUrl: '/ai-town/assets/32x32folk.png',
    spritesheetData: f8SpritesheetData,
    speed: 0.1,
  },
];

// Characters move at 0.75 tiles per second.
export const movementSpeed = 0.75;
