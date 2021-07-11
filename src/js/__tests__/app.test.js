import Team from '../Team';
import { Character, types } from '../Character';

const team = new Team();
const bowman = new Character('asd', 'Bowman');
const zombie = new Character('asd', 'Zombie');
const undead = new Character('asd', 'Undead');

test('add one person', () => {
  team.members.add(bowman);
  expect(team.members.size).toBe(1);
});

test('add same person twice', () => {
  team.members.add(bowman);
  expect(() => team.members.add(bowman)).toThrow('Боец уже добавлен');
});

test('multiple addition', () => {
  team.members.addAll(bowman, zombie, undead);
  expect(team.members.size).toBe(3);
});

test('multiple double addition', () => {
  team.members.addAll(bowman, zombie, undead, bowman);
  expect(team.members.size).toBe(3);
});

test('to array', () => {
  team.members.addAll(bowman, zombie, undead);
  team.members.toArray();
  expect(team.members).toHaveLength(3);
});
