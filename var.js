class Monster {
  constructor(name, pow, def, mag, agi, spd, vit) {
    this.name = name;
    this.pow = pow; //power
    this.def = def; //defence
    this.mag = mag; //magic
    this.agi = agi; //agility
    this.spd = spd; //speed
    this.vit = vit; //vitality
    this.hp = vit;
    this.fire = 0;
    this.earth = 0;
    this.air = 0;
    this.water = 0;
    this.void = 0;
    this.status_effects_start = [];
    this.status_effects_stat = [];
    this.status_effects_end = [];
    this.unpurgeable_effects_start = [];
    this.unpurgeable_effects_end = [];
    this.fire_affinity = 1;
    this.earth_affinity = 1;
    this.air_affinity = 1;
    this.water_affinity = 1;
    this.stress = 10;
  }
}
class Status_Effect {
  constructor(duration) {
    this.name = "default";
    this.duration = duration;
    this.start_of_turn = true;
    this.purgeable = true;
  }
  use(x) {
    this.duration--;
  }
  print(x) {}
}
class Burn extends Status_Effect {
  name = "burn";
  start_of_turn = false;
  ghostly_wounds = false;
  constructor(damage) {
    super(2);
    this.damage = damage;
  }
  use(x) {
    super.use(x);
    let tmp_dmg = this.damage;
    if (this.ghostly_wounds) {
      tmp_dmg *= 2;
    }
    x.hp -= tmp_dmg;
    var tmp = document.createElement("p");
    if (turn) {
      tmp.style.color = "green";
    } else {
      tmp.style.color = "blue";
    }
    tmp.innerHTML = x.name + " takes  " + tmp_dmg + " burn dmg";
    output.appendChild(tmp);
  }
  print(x) {
    var tmp = document.createElement("p");
    if (turn) {
      tmp.style.color = "green";
    } else {
      tmp.style.color = "blue";
    }
    tmp.innerHTML = x.name + " burns the enemy";
    output.appendChild(tmp);
  }
}
class Poison extends Status_Effect {
  name = "poison";
  start_of_turn = false;
  constructor(damage) {
    super(2);
    this.damage = damage;
  }
  use(x) {
    super.use(x);
    x.hp -= this.damage;
    var tmp = document.createElement("p");
    if (turn) {
      tmp.style.color = "green";
    } else {
      tmp.style.color = "blue";
    }
    tmp.innerHTML = x.name + " takes  " + this.damage + " poison dmg";
    output.appendChild(tmp);
  }
  print(x) {
    var tmp = document.createElement("p");
    if (turn) {
      tmp.style.color = "green";
    } else {
      tmp.style.color = "blue";
    }
    tmp.innerHTML = x.name + " poisons the enemy";
    output.appendChild(tmp);
  }
}
class Freeze extends Status_Effect {
  name = "freeze";
  constructor() {
    super(1);
  }
  use(x) {
    super.use(x);
  }
  print(x) {
    var tmp = document.createElement("p");
    if (turn) {
      tmp.style.color = "green";
    } else {
      tmp.style.color = "blue";
    }
    tmp.innerHTML = x.name + " freezes the enemy";
    output.appendChild(tmp);
  }
}
class Stun extends Status_Effect {
  name = "stun";
  constructor() {
    super(1);
  }
  use(x) {
    super.use(x);
  }
  print(x) {
    var tmp = document.createElement("p");
    if (turn) {
      tmp.style.color = "green";
    } else {
      tmp.style.color = "blue";
    }
    tmp.innerHTML = x.name + " stuns the enemy";
    output.appendChild(tmp);
  }
}
class Lucky extends Status_Effect {
  name = "lucky";
  constructor() {
    super(3);
  }
  use(x) {
    super.use(x);
  }
  print(x) {
    var tmp = document.createElement("p");
    if (turn) {
      tmp.style.color = "green";
    } else {
      tmp.style.color = "blue";
    }
    tmp.innerHTML = x.name + " feels lucky";
    output.appendChild(tmp);
  }
}
class Misfortune extends Status_Effect {
  name = "misfortune";
  constructor() {
    super(3);
  }
  use(x) {
    super.use(x);
  }
  print(x) {
    var tmp = document.createElement("p");
    if (turn) {
      tmp.style.color = "green";
    } else {
      tmp.style.color = "blue";
    }
    tmp.innerHTML = x.name + " feels unlucky";
    output.appendChild(tmp);
  }
}
class Enfeeble extends Status_Effect {
  name = "enfeeble";
  constructor() {
    super(3);
    this.change = 25;
  }
  use(x) {
    super.use(x);
  }
  print(x) {
    var tmp = document.createElement("p");
    if (turn) {
      tmp.style.color = "green";
    } else {
      tmp.style.color = "blue";
    }
    tmp.innerHTML = x.name + " enfeebles the enemy";
    output.appendChild(tmp);
  }
}
class Guard_Break extends Status_Effect {
  name = "guard_break";
  constructor() {
    super(3);
    this.change = 25;
  }
  use(x) {
    super.use(x);
  }
  print(x) {
    var tmp = document.createElement("p");
    if (turn) {
      tmp.style.color = "green";
    } else {
      tmp.style.color = "blue";
    }
    tmp.innerHTML = x.name + " breaks the enemy's guard";
    output.appendChild(tmp);
  }
}
class Blind extends Status_Effect {
  name = "blind";
  constructor() {
    super(3);
    this.change = 25;
  }
  use(x) {
    super.use(x);
  }
  print(x) {
    var tmp = document.createElement("p");
    if (turn) {
      tmp.style.color = "green";
    } else {
      tmp.style.color = "blue";
    }
    tmp.innerHTML = x.name + " blinds the enemy";
    output.appendChild(tmp);
  }
}
class Slow extends Status_Effect {
  name = "slow";
  constructor() {
    super(3);
    this.change = 25;
  }
  use(x) {
    super.use(x);
  }
  print(x) {
    var tmp = document.createElement("p");
    if (turn) {
      tmp.style.color = "green";
    } else {
      tmp.style.color = "blue";
    }
    tmp.innerHTML = x.name + " slows the enemy";
    output.appendChild(tmp);
  }
}
class Sap extends Status_Effect {
  name = "sap";
  constructor() {
    super(3);
    this.change = 25;
  }
  use(x) {
    super.use(x);
  }
  print(x) {
    var tmp = document.createElement("p");
    if (turn) {
      tmp.style.color = "green";
    } else {
      tmp.style.color = "blue";
    }
    tmp.innerHTML = x.name + " saps the enemy";
    output.appendChild(tmp);
  }
}
class Silence extends Status_Effect {
  name = "silence";
  constructor() {
    super(2);
  }
  use(x) {
    super.use(x);
  }
  print(x) {
    var tmp = document.createElement("p");
    if (turn) {
      tmp.style.color = "green";
    } else {
      tmp.style.color = "blue";
    }
    tmp.innerHTML = x.name + " silences the enemy";
    output.appendChild(tmp);
  }
}
class Clone extends Status_Effect {
  name = "clone";
  dmg = 40;
  constructor() {
    super(2);
  }
  use(x) {
    super.use(x);
  }
  print(x) {
    var tmp = document.createElement("p");
    if (turn) {
      tmp.style.color = "green";
    } else {
      tmp.style.color = "blue";
    }
    tmp.innerHTML = x.name + " summons a clone";
    output.appendChild(tmp);
  }
}
class Parry extends Status_Effect {
  name = "parry";
  chance = 60;
  constructor() {
    super(3);
  }
  use(x) {
    super.use(x);
  }
  print(x) {
    var tmp = document.createElement("p");
    if (turn) {
      tmp.style.color = "green";
    } else {
      tmp.style.color = "blue";
    }
    tmp.innerHTML = x.name + " takes a parry stance";
    output.appendChild(tmp);
  }
}
class Counter extends Status_Effect {
  name = "counter";
  chance = 20;
  dmg = 60;
  constructor() {
    super(2);
  }
  use(x) {
    super.use(x);
  }
  print(x) {
    var tmp = document.createElement("p");
    if (turn) {
      tmp.style.color = "green";
    } else {
      tmp.style.color = "blue";
    }
    tmp.innerHTML = x.name + " takes a counter stance";
    output.appendChild(tmp);
  }
}
class Protection extends Status_Effect {
  name = "protection";
  use(x) {
    super.use(x);
  }
  print(x) {
    var tmp = document.createElement("p");
    if (turn) {
      tmp.style.color = "green";
    } else {
      tmp.style.color = "blue";
    }
    tmp.innerHTML = x.name + " is protected";
    output.appendChild(tmp);
  }
}
class Blessing extends Status_Effect {
  name = "blessing";
  start_of_turn = false;
  constructor(heal) {
    super(3);
    this.heal = heal;
  }
  use(x) {
    super.use(x);
    x.hp += this.heal;
    var tmp = document.createElement("p");
    if (turn) {
      tmp.style.color = "green";
    } else {
      tmp.style.color = "blue";
    }
    tmp.innerHTML = x.name + " heals for  " + this.heal;
    output.appendChild(tmp);
  }
  print(x) {
    var tmp = document.createElement("p");
    if (turn) {
      tmp.style.color = "green";
    } else {
      tmp.style.color = "blue";
    }
    tmp.innerHTML = x.name + " feels blessed";
    output.appendChild(tmp);
  }
}
class Adrenaline extends Status_Effect {
  name = "adrenaline";
  constructor() {
    super(3);
    this.change = 25;
  }
  use(x) {
    super.use(x);
  }
  print(x) {
    var tmp = document.createElement("p");
    if (turn) {
      tmp.style.color = "green";
    } else {
      tmp.style.color = "blue";
    }
    tmp.innerHTML = x.name + " is pumped with adrenaline";
    output.appendChild(tmp);
  }
}
class Guard_Up extends Status_Effect {
  name = "guard_up";
  constructor() {
    super(3);
    this.change = 25;
  }
  use(x) {
    super.use(x);
  }
  print(x) {
    var tmp = document.createElement("p");
    if (turn) {
      tmp.style.color = "green";
    } else {
      tmp.style.color = "blue";
    }
    tmp.innerHTML = x.name + " has their guard up";
    output.appendChild(tmp);
  }
}
class Keen extends Status_Effect {
  name = "keen";
  constructor() {
    super(3);
    this.change = 25;
  }
  use(x) {
    super.use(x);
  }
  print(x) {
    var tmp = document.createElement("p");
    if (turn) {
      tmp.style.color = "green";
    } else {
      tmp.style.color = "blue";
    }
    tmp.innerHTML = x.name + " is keen";
    output.appendChild(tmp);
  }
}
class Bruised extends Status_Effect {
  name = "bruised";
  constructor() {
    super(3);
    this.change = 25;
  }
  use(x) {
    super.use(x);
  }
  print(x) {
    var tmp = document.createElement("p");
    if (turn) {
      tmp.style.color = "green";
    } else {
      tmp.style.color = "blue";
    }
    tmp.innerHTML = x.name + " bruises the enemy";
    output.appendChild(tmp);
  }
}
class Battle_Dance extends Status_Effect {
  name = "battle_dance";
  purgeable = false;
  constructor() {
    super(3);
    this.change = 25;
  }
  use(x) {
    super.use(x);
  }
  print(x) {
    var tmp = document.createElement("p");
    if (turn) {
      tmp.style.color = "green";
    } else {
      tmp.style.color = "blue";
    }
    tmp.innerHTML = x.name + " is in a fervorous battle dance";
    output.appendChild(tmp);
  }
}
class Voids_Call extends Status_Effect {
  name = "voids_call";
  purgeable = false;
  start_of_turn = false;
  damage_min = 4;
  damage_max = 6;
  recoil = 20;
  damage = 0;
  constructor() {
    super(999);
  }
  use(x, y) {
    super.use(x);
    if (x.void == 0) {
      x.hp = x.vit * 0.75;
      this.duration = 0;
      var tmp = document.createElement("p");
      if (turn) {
        tmp.style.color = "green";
      } else {
        tmp.style.color = "blue";
      }
      tmp.innerHTML = x.name + " takes recoil dmg";
      output.appendChild(tmp);
    } else {
      this.damage = get_random_range(this.damage_min, this.damage_max);
      y.hp -= this.damage;
      var tmp = document.createElement("p");
      if (turn) {
        tmp.style.color = "green";
      } else {
        tmp.style.color = "blue";
      }
      tmp.innerHTML = y.name + " takes  " + this.damage + " Void's Call dmg";
      output.appendChild(tmp);
      x.void--;
      update_rune_count();
    }
  }
  print(x) {
    var tmp = document.createElement("p");
    if (turn) {
      tmp.style.color = "green";
    } else {
      tmp.style.color = "blue";
    }
    tmp.innerHTML = x.name + " summons a mysterious void object";
    output.appendChild(tmp);
  }
}
class Reverse_Of_Arms extends Status_Effect {
  name = "reverse_of_arms";
  purgeable = false;
  constructor() {
    super(999);
  }
  use(x) {
    super.use(x);
  }
  print(x) {
    var tmp = document.createElement("p");
    if (turn) {
      tmp.style.color = "green";
    } else {
      tmp.style.color = "blue";
    }
    tmp.innerHTML = x.name + " swaps their stance";
    output.appendChild(tmp);
  }
}
class Rollout extends Status_Effect {
  name = "rollout";
  purgeable = false;
  constructor() {
    super(5);
  }
  print(x) {
    var tmp = document.createElement("p");
    if (turn) {
      tmp.style.color = "green";
    } else {
      tmp.style.color = "blue";
    }
    tmp.innerHTML = x.name + " is gaining momentum";
    output.appendChild(tmp);
  }
}
class Ghostly_Wounds extends Status_Effect {
  name = "ghostly_wounds";
  constructor() {
    super(4);
  }
  print(x) {
    var tmp = document.createElement("p");
    if (turn) {
      tmp.style.color = "green";
    } else {
      tmp.style.color = "blue";
    }
    tmp.innerHTML = x.name + " inflicts ghostly wounds";
    output.appendChild(tmp);
  }
}
class Guard_Crush extends Status_Effect {
  name = "guard_crush";
  constructor(damage) {
    super(1);
    this.damage = damage;
  }
  use(x) {
    super.use(x);
    x.hp -= this.damage;
    x.status_effects_stat.push(new Guard_Break());
    var tmp = document.createElement("p");
    if (turn) {
      tmp.style.color = "green";
    } else {
      tmp.style.color = "blue";
    }
    tmp.innerHTML = x.name + " takes " + this.damage + " dmg from guard crush";
    output.appendChild(tmp);
  }
}
class Aeroveil extends Status_Effect {
  name = "aeroveil";
  constructor() {
    super(4);
  }
  print(x) {
    var tmp = document.createElement("p");
    if (turn) {
      tmp.style.color = "green";
    } else {
      tmp.style.color = "blue";
    }
    tmp.innerHTML = x.name + " is shielded from air damage";
    output.appendChild(tmp);
  }
}
class Gaiaveil extends Status_Effect {
  name = "gaiaveil";
  constructor() {
    super(4);
  }
  print(x) {
    var tmp = document.createElement("p");
    if (turn) {
      tmp.style.color = "green";
    } else {
      tmp.style.color = "blue";
    }
    tmp.innerHTML = x.name + " is shielded from earth damage";
    output.appendChild(tmp);
  }
}
class Pyroveil extends Status_Effect {
  name = "pyroveil";
  constructor() {
    super(4);
  }
  print(x) {
    var tmp = document.createElement("p");
    if (turn) {
      tmp.style.color = "green";
    } else {
      tmp.style.color = "blue";
    }
    tmp.innerHTML = x.name + " is shielded from fire damage";
    output.appendChild(tmp);
  }
}
class Hydroveil extends Status_Effect {
  name = "hydroveil";
  constructor() {
    super(4);
  }
  print(x) {
    var tmp = document.createElement("p");
    if (turn) {
      tmp.style.color = "green";
    } else {
      tmp.style.color = "blue";
    }
    tmp.innerHTML = x.name + " is shielded from water damage";
    output.appendChild(tmp);
  }
}
class Aerosurge extends Status_Effect {
  name = "aerosurge";
  constructor() {
    super(3);
  }
  print(x) {
    var tmp = document.createElement("p");
    if (turn) {
      tmp.style.color = "green";
    } else {
      tmp.style.color = "blue";
    }
    tmp.innerHTML = x.name + " surges with the power of the wind";
    output.appendChild(tmp);
  }
}
class Gaiasurge extends Status_Effect {
  name = "gaiasurge";
  constructor() {
    super(3);
  }
  print(x) {
    var tmp = document.createElement("p");
    if (turn) {
      tmp.style.color = "green";
    } else {
      tmp.style.color = "blue";
    }
    tmp.innerHTML = x.name + " surges with the power of the earth";
    output.appendChild(tmp);
  }
}
class Pyrosurge extends Status_Effect {
  name = "pyrosurge";
  constructor() {
    super(3);
  }
  print(x) {
    var tmp = document.createElement("p");
    if (turn) {
      tmp.style.color = "green";
    } else {
      tmp.style.color = "blue";
    }
    tmp.innerHTML = x.name + " surges with the power of the flames";
    output.appendChild(tmp);
  }
}
class Hydrosurge extends Status_Effect {
  name = "hydrosurge";
  constructor() {
    super(3);
  }
  print(x) {
    var tmp = document.createElement("p");
    if (turn) {
      tmp.style.color = "green";
    } else {
      tmp.style.color = "blue";
    }
    tmp.innerHTML = x.name + " surges with the power of the water";
    output.appendChild(tmp);
  }
}
class Runic_Demise extends Status_Effect {
  name = "runic_demise";
  constructor() {
    super(2);
  }
  use(x) {
    super.use(x);
    if (this.duration == 0) {
      x.fire = 0;
      x.water = 0;
      x.earth = 0;
      x.air = 0;
      x.void = 0;
      update_rune_count();
    }
  }
}
//F=fire, E=earth, A=air, W=water, V=void
//list of spells and what they do
magic_spells = new Map();
magic_spells.set("FFF", function cast(attacker, defender, values) {
  min = 9;
  max = 15;
  acc = 80;
  if (get_acc_check(values.get("agi1"), values.get("agi2"), acc)) {
    dmg = magic_damage_calc(
      attacker,
      defender,
      min, max,
      "F",
      "Fireball",
      values
    );
    defender.hp -= dmg;
  } else {
    spell_acc_dialogue(attacker);
  }
});
magic_spells.set("FFFF", function cast(attacker, defender, values) {
  min = 12;
  max = 22;
  acc = 80;
  burn_chance = 20;
  if (get_acc_check(values.get("agi1"), values.get("agi2"), acc)) {
    dmg = magic_damage_calc(
      attacker,
      defender,
      min, max,
      "F",
      "Fireblast",
      values
    );
    defender.hp -= dmg;
    if (get_acc_check(0, 0, burn_chance)) {
      burn = new Burn(Math.round(dmg * 0.1));
      if (values.get("fire1") >= 1.5 && values.get("fire1") < 2.0) {
        burn.duration++;
      } else if (values.get("fire1") == 2.0) {
        burn.duration += 2;
      }
      burn.print(attacker);
      if (
        defender.status_effects_end.filter((e) => e.name === "burn").length > 0 && defender.status_effects_end.filter((e) => e.name === "burn")[0].duration < burn.duration
      ) {
        defender.status_effects_end.splice(
          defender.status_effects_end.findIndex((e) => e.name === "burn"),
          1
        );
      }
      defender.status_effects_end.push(burn);
    }
  } else {
    spell_acc_dialogue(attacker);
  }
});
magic_spells.set("FFFFF", function cast(attacker, defender, values) {
  min = 16;
  max = 27;
  acc = 85;
  burn_chance = 60;
  if (get_acc_check(values.get("agi1"), values.get("agi2"), acc)) {
    dmg = magic_damage_calc(
      attacker,
      defender,
      min, max,
      "F",
      "Firestorm",
      values
    );
    defender.hp -= dmg;
    if (get_acc_check(0, 0, burn_chance)) {
      burn = new Burn(Math.round(dmg * 0.1));
      burn.duration++;
      if (values.get("fire1") >= 1.5 && values.get("fire1") < 2.0) {
        burn.duration++;
      } else if (values.get("fire1") == 2.0) {
        burn.duration += 2;
      }
      burn.print(attacker);
      if (
        defender.status_effects_end.filter((e) => e.name === "burn").length > 0 && defender.status_effects_end.filter((e) => e.name === "burn")[0].duration < burn.duration
      ) {
        defender.status_effects_end.splice(
          defender.status_effects_end.findIndex((e) => e.name === "burn"),
          1
        );
      }
      defender.status_effects_end.push(burn);
    }
  } else {
    spell_acc_dialogue(attacker);
  }
});
magic_spells.set("WWW", function cast(attacker, defender, values) {
  min = 6;
  max = 12;
  acc = 90;
  if (get_acc_check(values.get("agi1"), values.get("agi2"), acc)) {
    dmg = magic_damage_calc(
      attacker,
      defender,
      min, max,
      "W",
      "Waterball",
      values
    );
    defender.hp -= dmg;
  } else {
    spell_acc_dialogue(attacker);
  }
});
magic_spells.set("WWWW", function cast(attacker, defender, values) {
  min = 11;
  max = 25;
  acc = 80;
  if (get_acc_check(values.get("agi1"), values.get("agi2"), acc)) {
    dmg = magic_damage_calc(
      attacker,
      defender,
      min, max,
      "W",
      "Waterwhip",
      values
    );
    defender.hp -= dmg;
  } else {
    spell_acc_dialogue(attacker);
  }
});
magic_spells.set("WWWWW", function cast(attacker, defender, values) {
  min = 14;
  max = 29;
  acc = 95;
  if (get_acc_check(values.get("agi1"), values.get("agi2"), acc)) {
    dmg = magic_damage_calc(
      attacker,
      defender,
      min, max,
      "W",
      "Waterburst",
      values
    );
    defender.hp -= dmg;
  } else {
    spell_acc_dialogue(attacker);
  }
});
magic_spells.set("AAA", function cast(attacker, defender, values) {
  min = 4;
  max = 12;
  acc = 999;
  if (get_acc_check(values.get("agi1"), values.get("agi2"), acc)) {
    dmg = magic_damage_calc(
      attacker,
      defender,
      min, max,
      "A",
      "Airshot",
      values
    );
    defender.hp -= dmg;
  } else {
    spell_acc_dialogue(attacker);
  }
});
magic_spells.set("AAAA", function cast(attacker, defender, values) {
  min = 4;
  max = 18;
  acc = 999;
  if (get_acc_check(values.get("agi1"), values.get("agi2"), acc)) {
    dmg = magic_damage_calc(
      attacker,
      defender,
      min, max,
      "A",
      "Airstinger",
      values
    );
    defender.hp -= dmg;
  } else {
    spell_acc_dialogue(attacker);
  }
});
magic_spells.set("AAAAA", function cast(attacker, defender, values) {
  min = 2;
  max = 4;
  acc = 999;
  multi_hit = 5;
  total_dmg = 0;
  if (get_acc_check(values.get("agi1"), values.get("agi2"), acc)) {
    for (i = 0; i < multi_hit; i++) {
      dmg = magic_damage_calc(
        attacker,
        defender,
        min, max,
        "A",
        "Tornade",
        values
      );
      defender.hp -= dmg;
      total_dmg += dmg;
    }
    var tmp = document.createElement("p");
    if (turn) {
      tmp.style.color = "green";
    } else {
      tmp.style.color = "blue";
    }
    tmp.innerHTML = attacker.name + " dealt a total of " + total_dmg + " dmg";
    output.appendChild(tmp);
  } else {
    spell_acc_dialogue(attacker);
  }
});
magic_spells.set("EEE", function cast(attacker, defender, values) {
  min = 18;
  max = 18;
  acc = 75;
  if (get_acc_check(values.get("agi1"), values.get("agi2"), acc)) {
    dmg = magic_damage_calc(
      attacker,
      defender,
      min, max,
      "E",
      "Gaia Strike",
      values
    );
    defender.hp -= dmg;
  } else {
    spell_acc_dialogue(attacker);
  }
});
magic_spells.set("EEEE", function cast(attacker, defender, values) {
  min = 25;
  max = 25;
  acc = 65;
  slow_chance = 20;
  if (get_acc_check(values.get("agi1"), values.get("agi2"), acc)) {
    dmg = magic_damage_calc(
      attacker,
      defender,
      min, max,
      "E",
      "Gaia Edge",
      values
    );
    defender.hp -= dmg;
    if (get_acc_check(0, 0, slow_chance)) {
      slow = new Slow();
      slow.print(attacker);
      defender.status_effects_stat.push(slow);
    }
  } else {
    spell_acc_dialogue(attacker);
  }
});
magic_spells.set("EEEEE", function cast(attacker, defender, values) {
  min = 50;
  max = 50;
  acc = 55;
  stun_chance = 50;
  if (get_acc_check(values.get("agi1"), values.get("agi2"), acc)) {
    dmg = magic_damage_calc(
      attacker,
      defender,
      min, max,
      "E",
      "Gaia Assault",
      values
    );
    defender.hp -= dmg;
    if (get_acc_check(0, 0, stun_chance)) {
      stun = new Stun();
      if (values.get("earth1") >= 2.0) {
        stun.duration++;
      }
      stun.print(attacker);
      defender.status_effects_start.push(stun);
    }
  } else {
    spell_acc_dialogue(attacker);
  }
});
magic_spells.set("EEEFF", function cast(attacker, defender, values) {
  min = 22;
  max = 22;
  acc = 70;
  burn_chance = 30;
  if (get_acc_check(values.get("agi1"), values.get("agi2"), acc)) {
    dmg = magic_damage_calc(
      attacker,
      defender,
      min, max,
      "E",
      "Eruption",
      values
    );
    defender.hp -= dmg;
    if (get_acc_check(0, 0, burn_chance)) {
      burn = new Burn(Math.round(dmg * 0.1));
      if (values.get("fire1") >= 1.5 && values.get("fire1") < 2.0) {
        burn.duration++;
      } else if (values.get("fire1") == 2.0) {
        burn.duration += 2;
      }
      burn.print(attacker);
      if (
        defender.status_effects_end.filter((e) => e.name === "burn").length > 0 && defender.status_effects_end.filter((e) => e.name === "burn")[0].duration < burn.duration
      ) {
        defender.status_effects_end.splice(
          defender.status_effects_end.findIndex((e) => e.name === "burn"),
          1
        );
      }
      defender.status_effects_end.push(burn);
    }
  } else {
    spell_acc_dialogue(attacker);
  }
});
magic_spells.set("FFVVV", function cast(attacker, defender, values) {
  min = 15;
  max = 22;
  acc = 90;
  if (get_acc_check(values.get("agi1"), values.get("agi2"), acc)) {
    dmg = magic_damage_calc(
      attacker,
      defender,
      min + attacker.stress, max + attacker.stress,
      "V",
      "Cartharsis",
      values
    );
    defender.hp -= dmg;
  } else {
    spell_acc_dialogue(attacker);
  }
});
magic_spells.set("EEEFW", function cast(attacker, defender, values) {
  min = 17;
  max = 17;
  acc1 = 95;
  acc2 = 85;
  stun_chance = 50;
  slow_chance = 50;
  if (get_acc_check(values.get("agi1"), values.get("agi2"), acc1)) {
    dmg = magic_damage_calc(
      attacker,
      defender,
      min, max,
      "E",
      "Fault Line",
      values
    );
    defender.hp -= dmg;
    if (get_acc_check(0, 0, slow_chance)) {
      slow = new Slow();
      slow.print(attacker);
      defender.status_effects_stat.push(slow);
    }
  } else {
    spell_acc_dialogue(attacker);
  }
  if (get_acc_check(values.get("agi1"), values.get("agi2"), acc2)) {
    dmg = magic_damage_calc(
      attacker,
      defender,
      min, max,
      "E",
      "Fault Line",
      values
    );
    defender.hp -= dmg;
    if (get_acc_check(0, 0, stun_chance)) {
      stun = new Stun();
      if (values.get("earth1") >= 2.0) {
        stun.duration++;
      }
      stun.print(attacker);
      defender.status_effects_start.push(stun);
    }
  } else {
    spell_acc_dialogue(attacker);
  }
});
magic_spells.set("FVVVV", function cast(attacker, defender, values) {
  min = 66;
  max = 66;
  acc = 999;
  if (get_acc_check(values.get("agi1"), values.get("agi2"), acc)) {
    dmg = magic_damage_calc(
      attacker,
      defender,
      min, max,
      "V",
      "Eldritch Blast",
      values
    );
    defender.hp -= dmg;
  } else {
    spell_acc_dialogue(attacker);
  }
});
magic_spells.set("AEE", function cast(attacker, defender, values) {
  min = 4;
  max = 8;
  acc = 70;
  multiplier =
    attacker.unpurgeable_effects_start.filter((e) => e.name === "rollout")
      .length + 1;
  if (get_acc_check(values.get("agi1"), values.get("agi2"), acc)) {
    dmg = magic_damage_calc(
      attacker,
      defender,
      min * multiplier, max * multiplier,
      "E",
      "Rock Roll",
      values
    );
    defender.hp -= dmg;
  } else {
    spell_acc_dialogue(attacker);
  }
  rollout = new Rollout();
  rollout.print(attacker);
  attacker.unpurgeable_effects_start.push(rollout);
});
magic_spells.set("AFFV", function cast(attacker, defender, values) {
  min = 26;
  max = 36;
  acc = 90;
  if (get_acc_check(values.get("agi1"), values.get("agi2"), acc)) {
    dmg = magic_damage_calc(
      attacker,
      defender,
      min, max,
      "F",
      "Reckless Inferno",
      values
    );
    defender.hp -= dmg;
    switch (get_random_int(5)) {
      case 0:
        slow = new Slow();
        attacker.status_effects_stat.push(slow);
        break;
      case 1:
        sap = new Sap();
        attacker.status_effects_stat.push(sap);
        break;
      case 2:
        enfeeble = new Enfeeble();
        attacker.status_effects_stat.push(enfeeble);
        break;
      case 3:
        guard_break = new Guard_Break();
        guard_break.print(attacker);
        attacker.status_effects_stat.push(guard_break);
        break;
      case 4:
        blind = new Blind();
        attacker.status_effects_stat.push(blind);
        break;
      default:
        break;
    }
    switch (get_random_int(5)) {
      case 0:
        slow = new Slow();
        attacker.status_effects_stat.push(slow);
        break;
      case 1:
        sap = new Sap();
        attacker.status_effects_stat.push(sap);
        break;
      case 2:
        enfeeble = new Enfeeble();
        attacker.status_effects_stat.push(enfeeble);
        break;
      case 3:
        guard_break = new Guard_Break();
        attacker.status_effects_stat.push(guard_break);
        break;
      case 4:
        blind = new Blind();
        attacker.status_effects_stat.push(blind);
        break;
      default:
        break;
    }
    var tmp = document.createElement("p");
    if (turn) {
      tmp.style.color = "green";
    } else {
      tmp.style.color = "blue";
    }
    tmp.innerHTML = attacker.name + " loses two stats";
    output.appendChild(tmp);
  } else {
    spell_acc_dialogue(attacker);
  }
});
magic_spells.set("AWW", function cast(attacker, defender, values) {
  min = 6;
  max = 9;
  acc = 100;
  freeze_chance = 30;
  if (get_acc_check(values.get("agi1"), values.get("agi2"), acc)) {
    dmg = magic_damage_calc(
      attacker,
      defender,
      min, max,
      "W",
      "Chill",
      values
    );
    defender.hp -= dmg;
    if (get_acc_check(0, 0, freeze_chance)) {
      freeze = new Freeze();
      if (values.get("water1") >= 2.0) {
        freeze.duration++;
      }
      freeze.print(attacker);
      defender.status_effects_start.push(freeze);
    }
  } else {
    spell_acc_dialogue(attacker);
  }
});
magic_spells.set("AAWWW", function cast(attacker, defender, values) {
  magic_damage_calc(
    attacker,
    defender,
    0, 0,
    "W",
    "Deep Chill",
    values
  );
  freeze = new Freeze();
  if (values.get("water1") >= 2.0) {
    freeze.duration++;
  }
  freeze.print(attacker);
  defender.status_effects_start.push(freeze);
});
magic_spells.set("FFW", function cast(attacker, defender, values) {
  min = 5;
  max = 10;
  acc = 85;
  blind_chance = 30;
  if (get_acc_check(values.get("agi1"), values.get("agi2"), acc)) {
    dmg = magic_damage_calc(
      attacker,
      defender,
      min, max,
      "W",
      "Steam",
      values
    );
    defender.hp -= dmg;
    if (get_acc_check(0, 0, blind_chance)) {
      blind = new Blind();
      blind.print(attacker);
      defender.status_effects_stat.push(blind);
    }
  } else {
    spell_acc_dialogue(attacker);
  }
});
magic_spells.set("AAV", function cast(attacker, defender, values) {
  magic_damage_calc(
    attacker,
    defender,
    0, 0,
    "A",
    "Shadow Stream",
    values
  );
  blind = new Blind();
  blind.print(attacker);
  defender.status_effects_stat.push(blind);
});
magic_spells.set("AAAEE", function cast(attacker, defender, values) {
  min = 10;
  max = 20;
  acc = 60;
  slow_chance = 100;
  slow = new Slow();
  slow.print(attacker);
  defender.status_effects_stat.push(slow);
  if (get_acc_check(values.get("agi1"), values.get("agi2"), acc)) {
    dmg = magic_damage_calc(
      attacker,
      defender,
      min, max,
      "A",
      "Sandstorm",
      values
    );
    defender.hp -= dmg;
    if (get_acc_check(0, 0, slow_chance)) {
      slow = new Slow();
      slow.print(attacker);
      defender.status_effects_stat.push(slow);
    }
  } else {
    spell_acc_dialogue(attacker);
  }
});
magic_spells.set("FFFV", function cast(attacker, defender, values) {
  acc = 85;
  if (get_acc_check(0, 0, acc)) {
    if (
      !defender.status_effects_end.filter((e) => e.name === "ghostly_wounds")
        .length > 0
    ) {
      gw = new Ghostly_Wounds();
      gw.print(attacker);
      defender.status_effects_end.push(gw);
    }
  }
  magic_damage_calc(
    attacker,
    defender,
    0, 0,
    "F",
    "Ghostly Embers",
    values
  );
});
magic_spells.set("EFFV", function cast(attacker, defender, values) {
  crush_dmg = 20;
  acc = 100;
  if (get_acc_check(values.get("agi1"), values.get("agi2"), acc)) {
    dmg = magic_damage_calc(
      attacker,
      defender,
      0, 0,
      "V",
      "Guard Crush",
      values
    );
    defender.status_effects_start.push(new Guard_Crush(crush_dmg));
  } else {
    spell_acc_dialogue(attacker);
  }
});
magic_spells.set("AAAV", function cast(attacker, defender, values) {
  switch (get_random_int(4)) {
    case 0:
      luck = new Lucky();
      luck.print(attacker);
      attacker.status_effects_start.push(luck);
      break;
    case 1:
      misfortune = new Misfortune();
      misfortune.print(attacker);
      attacker.status_effects_start.push(misfortune);
      break;
    case 2:
      luck = new Lucky();
      luck.print(defender);
      defender.status_effects_start.push(luck);
      break;
    case 3:
      misfortune = new Misfortune();
      misfortune.print(defender);
      defender.status_effects_start.push(misfortune);
      break;
    default:
      break;
  }
  magic_damage_calc(attacker, defender, 0, "V", "Gamble", values);
});
magic_spells.set("AVVVV", function cast(attacker, defender, values) {
  luck = new Lucky();
  luck.print(attacker);
  attacker.status_effects_start.push(luck);
  attacker.hp -= Math.floor(attacker.vit / 10);
  magic_damage_calc(attacker, defender, 0, "V", "Dark Bribe", values);
});
magic_spells.set("AFF", function cast(attacker, defender, values) {
  min = 2;
  max = 9;
  acc = 90;
  stun_chance = 75;
  if (get_acc_check(values.get("agi1"), values.get("agi2"), acc)) {
    dmg = magic_damage_calc(
      attacker,
      defender,
      min, max,
      "A",
      "Shock",
      values
    );
    defender.hp -= dmg;
    if (get_acc_check(0, 0, stun_chance)) {
      stun = new Stun();
      if (values.get("earth1") >= 2.0) {
        stun.duration++;
      }
      stun.print(attacker);
      defender.status_effects_start.push(stun);
    }
  } else {
    spell_acc_dialogue(attacker);
  }
});
magic_spells.set("AEFW", function cast(attacker, defender, values) {
  min = 3;
  max = 5;
  acc = 80;
  total_dmg = 0;
  if (get_acc_check(values.get("agi1"), values.get("agi2"), acc)) {
    dmg = magic_damage_calc(
      attacker,
      defender,
      min, max,
      "A",
      "4 Star Barrage",
      values
    );
    defender.hp -= dmg;
    total_dmg += dmg;
  } else {
    spell_acc_dialogue(attacker);
  }
  if (get_acc_check(values.get("agi1"), values.get("agi2"), acc)) {
    dmg = magic_damage_calc(
      attacker,
      defender,
      min, max,
      "E",
      "4 Star Barrage",
      values
    );
    defender.hp -= dmg;
    total_dmg += dmg;
  } else {
    spell_acc_dialogue(attacker);
  }
  if (get_acc_check(values.get("agi1"), values.get("agi2"), acc)) {
    dmg = magic_damage_calc(
      attacker,
      defender,
      min, max,
      "F",
      "4 Star Barrage",
      values
    );
    defender.hp -= dmg;
    total_dmg += dmg;
  } else {
    spell_acc_dialogue(attacker);
  }
  if (get_acc_check(values.get("agi1"), values.get("agi2"), acc)) {
    dmg = magic_damage_calc(
      attacker,
      defender,
      min, max,
      "W",
      "4 Star Barrage",
      values
    );
    defender.hp -= dmg;
    total_dmg += dmg;
  } else {
    spell_acc_dialogue(attacker);
  }
  if (total_dmg > 0) {
    var tmp = document.createElement("p");
    if (turn) {
      tmp.style.color = "green";
    } else {
      tmp.style.color = "blue";
    }
    tmp.innerHTML = attacker.name + " dealt a total of " + total_dmg + " dmg";
    output.appendChild(tmp);
  }
});
magic_spells.set("AAFV", function cast(attacker, defender, values) {
  min = 6;
  max = 8;
  acc = 999;
  multi_hit = 3;
  total_dmg = 0;
  if (get_acc_check(values.get("agi1"), values.get("agi2"), acc)) {
    for (i = 0; i < multi_hit; i++) {
      dmg = magic_damage_calc(
        attacker,
        defender,
        min, max,
        "V",
        "Magic Missile",
        values
      );
      defender.hp -= dmg;
      total_dmg += dmg;
    }
    var tmp = document.createElement("p");
    if (turn) {
      tmp.style.color = "green";
    } else {
      tmp.style.color = "blue";
    }
    tmp.innerHTML = attacker.name + " dealt a total of " + total_dmg + " dmg";
    output.appendChild(tmp);
  } else {
    spell_acc_dialogue(attacker);
  }
});
magic_spells.set("AAAWW", function cast(attacker, defender, values) {
  min = 2;
  max = 6;
  acc = 85;
  multi_hit_range_min = 4;
  multi_hit_range_max = 6;
  total_dmg = 0;
  for (
    i = 0;
    i < multi_hit_range_min, multi_hit_range_max;
    i++
  ) {
    if (get_acc_check(values.get("agi1"), values.get("agi2"), acc)) {
      dmg = magic_damage_calc(
        attacker,
        defender,
        min, max,
        "W",
        "Cyclone",
        values
      );
      defender.hp -= dmg;
      total_dmg += dmg;
    } else {
      spell_acc_dialogue(attacker);
    }
  }
  if (total_dmg > 0) {
    var tmp = document.createElement("p");
    if (turn) {
      tmp.style.color = "green";
    } else {
      tmp.style.color = "blue";
    }
    tmp.innerHTML = attacker.name + " dealt a total of " + total_dmg + " dmg";
    output.appendChild(tmp);
  }
});
magic_spells.set("AAAFF", function cast(attacker, defender, values) {
  min = 3;
  max = 5;
  acc = 75;
  multi_hit_range = 5;
  total_dmg = 0;
  c = 0;
  for (i = 0; i < multi_hit_range; i++) {
    if (get_acc_check(values.get("agi1"), values.get("agi2"), acc)) {
      dmg = magic_damage_calc(
        attacker,
        defender,
        min, max,
        "A",
        "Overwhelm",
        values
      );
      defender.hp -= dmg;
      total_dmg += dmg;
      c++;
    } else {
      spell_acc_dialogue(attacker);
    }
  }
  if (c >= 4) {
    enfeeble = new Enfeeble();
    enfeeble.print(attacker);
    defender.status_effects_stat.push(enfeeble);
  }
  if (total_dmg > 0) {
    var tmp = document.createElement("p");
    if (turn) {
      tmp.style.color = "green";
    } else {
      tmp.style.color = "blue";
    }
    tmp.innerHTML = attacker.name + " dealt a total of " + total_dmg + " dmg";
    output.appendChild(tmp);
  }
});
magic_spells.set("AAFFF", function cast(attacker, defender, values) {
  min = 3;
  max = 5;
  acc = 75;
  multi_hit_range = 5;
  total_dmg = 0;
  c = 0;
  for (i = 0; i < multi_hit_range; i++) {
    if (get_acc_check(values.get("agi1"), values.get("agi2"), acc)) {
      dmg = magic_damage_calc(
        attacker,
        defender,
        min, max,
        "F",
        "Brutal Strike",
        values
      );
      defender.hp -= dmg;
      total_dmg += dmg;
      c++;
    } else {
      spell_acc_dialogue(attacker);
    }
  }
  if (c >= 4) {
    bruised = new Bruised();
    bruised.print(attacker);
    defender.status_effects_start.push(bruised);
  }
  if (total_dmg > 0) {
    var tmp = document.createElement("p");
    if (turn) {
      tmp.style.color = "green";
    } else {
      tmp.style.color = "blue";
    }
    tmp.innerHTML = attacker.name + " dealt a total of " + total_dmg + " dmg";
    output.appendChild(tmp);
  }
});
magic_spells.set("AVV", function cast(attacker, defender, values) {
  magic_damage_calc(attacker, defender, 0, "A", "Aeroveil", values);
  veil = new Aeroveil();
  veil.print(attacker);
  attacker.status_effects_start.push(veil);
});
magic_spells.set("EVV", function cast(attacker, defender, values) {
  magic_damage_calc(attacker, defender, 0, "E", "Gaiaveil", values);
  veil = new Gaiaveil();
  veil.print(attacker);
  attacker.status_effects_start.push(veil);
});
magic_spells.set("FVV", function cast(attacker, defender, values) {
  magic_damage_calc(attacker, defender, 0, "F", "Pyroveil", values);
  veil = new Pyroveil();
  veil.print(attacker);
  attacker.status_effects_start.push(veil);
});
magic_spells.set("WVV", function cast(attacker, defender, values) {
  magic_damage_calc(attacker, defender, 0, "W", "Hydroveil", values);
  veil = new Hydroveil();
  veil.print(attacker);
  attacker.status_effects_start.push(veil);
});
magic_spells.set("AAVV", function cast(attacker, defender, values) {
  magic_damage_calc(attacker, defender, 0, "A", "Aerosurge", values);
  surge = new Aerosurge();
  surge.print(attacker);
  attacker.status_effects_start.push(surge);
});
magic_spells.set("EEVV", function cast(attacker, defender, values) {
  magic_damage_calc(attacker, defender, 0, "E", "Gaiasurge", values);
  surge = new Gaiasurge();
  surge.print(attacker);
  attacker.status_effects_start.push(surge);
});
magic_spells.set("FFVV", function cast(attacker, defender, values) {
  magic_damage_calc(attacker, defender, 0, "F", "Pyrosurge", values);
  surge = new Pyrosurge();
  surge.print(attacker);
  attacker.status_effects_start.push(surge);
});
magic_spells.set("WWVV", function cast(attacker, defender, values) {
  magic_damage_calc(attacker, defender, 0, "W", "Hydrosurge", values);
  surge = new Hydrosurge();
  surge.print(attacker);
  attacker.status_effects_start.push(surge);
});
magic_spells.set("WWWWV", function cast(attacker, defender, values) {
  attacker.status_effects_start = [];
  attacker.status_effects_end = [];
  attacker.status_effects_stat = [];
  magic_damage_calc(attacker, defender, 0, "W", "Cleansing Waters", values);
});
magic_spells.set("WWV", function cast(attacker, defender, values) {
  min = 9;
  max = 12;
  dmg = magic_damage_calc(
    attacker,
    defender,
    min, max * -1,
    "W",
    "Healing Water",
    values
  );
  attacker.hp -= dmg;
});
magic_spells.set("AWV", function cast(attacker, defender, values) {
  heal = 5;
  if (values.get("water1") >= 1.5) {
    heal = 7;
  }
  bless = new Blessing(heal);
  if (values.get("air1") >= 1.5) {
    bless.duration++;
  }
  bless.print(attacker);
  defender.status_effects_end.push(bless);
  magic_damage_calc(
    attacker,
    defender,
    heal * -1,
    "W",
    "Healing Prayer",
    values
  );
});
magic_spells.set("EEV", function cast(attacker, defender, values) {
  heal = 12;
  heal_atk = Math.floor((attacker.vit * 12) / 100);
  heal_def = Math.floor((defender.vit * 12) / 100);
  magic_damage_calc(
    attacker,
    defender,
    heal_atk * -1,
    "W",
    "Healing Field",
    values
  );
  attacker.hp += heal_atk;
  defender.hp += heal_def;
});
magic_spells.set("AWVV", function cast(attacker, defender, values) {
  min = 10;
  max = 15;
  acc = 65;
  amount = min, max;
  if (get_acc_check(values.get("agi1"), values.get("agi2"), acc)) {
    dmg = magic_damage_calc(
      attacker,
      defender,
      amount,
      "V",
      "Life Sap",
      values
    );
    defender.hp -= dmg;
    dmg = magic_damage_calc(
      attacker,
      defender,
      amount * -1,
      "V",
      "Life Sap",
      values
    );
    attacker.hp -= dmg;
  } else {
    spell_acc_dialogue(attacker);
  }
});
magic_spells.set("FFFFV", function cast(attacker, defender, values) {
  num_status =
    attacker.status_effects_start.length +
    attacker.status_effects_end.length +
    attacker.status_effects_stat.length;
  attacker.status_effects_start = [];
  attacker.status_effects_stat = [];
  attacker.status_effects_end = [];
  min = 3;
  max = 4;
  for (i = 0; i < num_status; i++) {
    dmg = magic_damage_calc(
      attacker,
      defender,
      min, max,
      "F",
      "Cleansing Fire",
      values
    );
    defender.hp -= dmg;
  }
});
magic_spells.set("VVVVV", function cast(attacker, defender, values) {
  attacker.status_effects_stat = [];
  defender.status_effects_stat = [];
  magic_damage_calc(attacker, defender, 0, "V", "Dark Fog", values);
});
magic_spells.set("AVVV", function cast(attacker, defender, values) {
  magic_damage_calc(attacker, defender, 0, "V", "Void's Call", values);
  if (
    attacker.unpurgeable_effects_end.filter((e) => e.name === "voids_call")
      .length == 0
  ) {
    vc = new Voids_Call();
    vc.print(attacker);
    attacker.unpurgeable_effects_end.push(vc);
  }
});
magic_spells.set("AFV", function cast(attacker, defender, values) {
  runes_to_get = 10;
  var tmp = document.createElement("p");
  if (turn) {
    tmp.style.color = "green";
  } else {
    tmp.style.color = "blue";
  }
  get_runes(attacker, runes_to_get, tmp);
  magic_damage_calc(attacker, defender, 0, "V", "Runic Demise", values);
  attacker.unpurgeable_effects_end.push(new Runic_Demise());
});
magic_spells.set("FWV", function cast(attacker, defender, values) {
  magic_damage_calc(attacker, defender, 0, "V", "Reverse of Arms", values);
  roa = new Reverse_Of_Arms();
  roa.print(attacker);
  attacker.unpurgeable_effects_start.push(roa);
});
magic_spells.set("EFVV", function cast(attacker, defender, values) {
  magic_damage_calc(attacker, defender, 0, "V", "Sougenmu", values);
  clone = new Clone();
  if (values.get("agi1") >= 100) {
    clone.duration++;
  }
  if (values.get("pow1") >= 100) {
    clone.damage = 60;
  }
  clone.print(attacker);
  attacker.status_effects_start.push(clone);
});
magic_spells.set("AEFWV", function cast(attacker, defender, values) {
  num_runes =
    attacker.fire +
    attacker.water +
    attacker.air +
    attacker.earth +
    attacker.void;
  attacker.fire = 0;
  attacker.water = 0;
  attacker.air = 0;
  attacker.earth = 0;
  attacker.void = 0;
  dmg = magic_damage_calc(
    attacker,
    defender,
    num_runes * 5,
    "V",
    "Arcane Crash",
    values
  );
  defender.hp -= dmg;
  update_rune_count();
});
magic_spells.set("AEEV", function cast(attacker, defender, values) {
  magic_damage_calc(attacker, defender, 0, "V", "Battle Dance", values);
  bd = new Battle_Dance();
  bd.print(attacker);
  attacker.unpurgeable_effects_start.push(bd);
});
magic_spells.set("EFV", function cast(attacker, defender, values) {
  magic_damage_calc(attacker, defender, 0, "V", "Adrenal Surge", values);
  ad = new Adrenaline();
  if (values.get("pow1") >= 100) {
    ad.duration++;
  }
  ad.print(attacker);
  attacker.status_effects_stat.push(ad);
});
magic_spells.set("VVV", function cast(attacker, defender, values) {
  magic_damage_calc(attacker, defender, 0, "V", "Magical Dampener", values);
  tmp = new Sap();
  tmp.print(attacker);
  defender.status_effects_stat.push(tmp);
});
magic_spells.set("VVVV", function cast(attacker, defender, values) {
  magic_damage_calc(attacker, defender, 0, "V", "Quiet Hour", values);
  tmp = new Silence();
  if (values.get("mag1") >= 100) {
    tmp.duration++;
  }
  tmp.print(attacker);
  defender.status_effects_start.push(tmp);
});
magic_spells.set("AAE", function cast(attacker, defender, values) {
  magic_damage_calc(attacker, defender, 0, "E", "Gaia Parry", values);
  tmp = new Parry();
  if (values.get("def1") >= 100) {
    tmp.chance = 60;
  }
  tmp.print(attacker);
  defender.status_effects_start.push(tmp);
});
magic_spells.set("AEEE", function cast(attacker, defender, values) {
  magic_damage_calc(attacker, defender, 0, "E", "Gaia Counter", values);
  tmp = new Counter();
  if (values.get("def1") >= 100) {
    tmp.chance = 40;
  }
  if (values.get("pow1") >= 100) {
    tmp.damage = 100;
  } 
  tmp.print(attacker);
  defender.status_effects_start.push(tmp);
});
magic_spells.set("AEVV", function cast(attacker, defender, values) {
  magic_damage_calc(attacker, defender, 0, "V", "Hard Read", values);
  tmp = new Keen();
  tmp.print(attacker);
  defender.status_effects_start.push(tmp);
});
/*magic_spells.set("AAF", function cast(attacker, defender, values) {
  min = 4;
  max = 18;
  acc = 999;
  if (get_acc_check(values.get("agi1"), values.get("agi2"), acc)) {
    dmg = magic_damage_calc(
      attacker,
      defender,
      min, max,
      "A",
      "Airstinger"
    );
    defender.hp -= dmg;
  } else {
    spell_acc_dialogue(attacker);
  }
  return "Rising Wind";
});*/
