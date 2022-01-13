/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import {
  Bowman,
  Swordsman,
  Magician,
  Daemon,
  Undead,
  Zombie,
} from './Characters';
import Team from './Team';

const bowman = new Bowman('Игорь', 'Bowman'),
  swordsman = new Swordsman('Федот', 'Swordsman'),
  magician = new Magician('Тарас', 'Magician'),
  daemon = new Daemon('Дима', 'Daemon'),
  undead = new Undead('Константин', 'Undead'),
  zombie = new Zombie('Кристинка', 'Zombie');

const team = new Team();
team.addAll(bowman, swordsman, magician, daemon, undead, zombie);
for (let i of team) console.log(i);
