const types = ['Bowman', 'Swordsman', 'Daemon', 'Magician', 'Undead', 'Zombie'];
class Character {
  health = 100;

  level = 1;

  constructor(name, type) {
    this.name = name;
    if (name.length < 2 || name.length > 10) {
      throw new Error('Длина имени должна быть от 2 до 10 символов');
    }
    this.type = type;
    if (!types.includes(this.type)) {
      throw new Error('Несуществующий класс');
    }
  }
}

export {
  Character, types,
};
