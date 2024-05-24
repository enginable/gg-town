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
    name: 'Hechika',
    character: 'f5',
    identity: 'Hechika is a reptilian, alien, low-level criminal who suffers from narcissistic personality disorder and whose ego is easily bruised. She is a bully and over-reacts to perceived slights. Hechika owes a lot of money to her brother, Sid.',
    plan: 'You want to earn the respect of your brother, Sid, and pay him back the money you owe by going to a collectible card convention, finding and stealing a rare collectible card called “The Shadowlands Card.”'
  },
  {
    name: 'Sid',
    character: 'f1',
    identity: 'Sid is a hefty, reptilian alien and gangster. He is Hechika’s brother and Hechika owes him a lot of money. He is charismatic, charming, and ruthless.',
    plan: 'You need to give Hechika an ultimatum. She has 2 days to get you a rare collectible card called “The Shadowlands Card,” or else you will remove your protection and let the Kingpin kill her.'
  },
  {
    name: 'The Kingpin',
    character: 'f1',
    identity: `A crafty, reptilian, alien mob-boss, who cracks jokes while ruling the local crime scene with an iron fist. Sid and Hechika work for him as mobsters. : The Kingpin wants to kill Hechika, but he hasn’t as a favor to Hechika’s brother, Sid. The Kingpin decides he will wait and see if Hechika can retrieve a rare collectible card he covets called “The Shadowland Card.” If Hechika brings him the Shadowlands Card, he will let her live. If she fails to bring him the “Shadowlands Card,” he plans on killing her.`,
    plan: `You are waiting to see what happens.`,
  },
  {
    name: 'Mateo',
    character: 'f1',
    identity: `Mateo is a 15-year-old kid from Earth, who is in the possession of a rare collectible card called, “The Shadowlands Card,” that opens a portal to the Shadowland dimension.`,
    plan: `You plan to attend an intergalactic collectible cards convention and hopes to trade the “Shadowland card,” for information on the whereabouts of your long-lost grandmother.`,
  },
  {
    name: 'Zormanax',
    character: 'f1',
    identity: `A cute, dog-like, alien creature that talks. Zormanax is loyal and helpful and protects Mateo from anybody trying to attack him.  `,
    plan: `You are looking for a friend to help you get back home to the Shadowlands.`,
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
