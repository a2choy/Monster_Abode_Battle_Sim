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
    this.arcane = 0;
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
}
class Burn extends Status_Effect {
  name = "burn";
  start_of_turn = false;
  constructor(duration, damage) {
    super(duration);
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
    tmp.innerHTML = x.name + " takes  " + this.damage + " burn dmg";
    output.appendChild(tmp);
  }
}
class Poison extends Status_Effect {
  name = "poison";
  start_of_turn = false;
  constructor(duration, damage) {
    super(duration);
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
}
class Freeze_Stun extends Status_Effect {
  name = "freeze_stun";
  use(x) {
    super.use(x);
  }
}
class Lucky extends Status_Effect {
  name = "lucky";
  use(x) {
    super.use(x);
  }
}
class Misfortune extends Status_Effect {
  name = "misfortune";
  use(x) {
    super.use(x);
  }
}
class Enfeeble extends Status_Effect {
  name = "enfeeble";
  constructor(duration) {
    super(duration);
    this.change = 25;
  }
  use(x) {
    super.use(x);
  }
}
class Guard_Break extends Status_Effect {
  name = "guard_break";
  constructor(duration) {
    super(duration);
    this.change = 25;
  }
  use(x) {
    super.use(x);
  }
}
class Blind extends Status_Effect {
  name = "blind";
  constructor(duration) {
    super(duration);
    this.change = 25;
  }
  use(x) {
    super.use(x);
  }
}
class Slow extends Status_Effect {
  name = "slow";
  constructor(duration) {
    super(duration);
    this.change = 25;
  }
  use(x) {
    super.use(x);
  }
}
class Sap extends Status_Effect {
  name = "sap";
  constructor(duration) {
    super(duration);
    this.change = 25;
  }
  use(x) {
    super.use(x);
  }
}
class Silence extends Status_Effect {
  name = "silence";
  use(x) {
    super.use(x);
  }
}
class Clone extends Status_Effect {
  name = "clone";
  dmg = 40;
  constructor(duration) {
    super(duration);
  }
  use(x) {
    super.use(x);
  }
}
class Parry extends Status_Effect {
  name = "parry";
  chance = 60;
  use(x) {
    super.use(x);
  }
}
class Counter extends Status_Effect {
  name = "counter";
  chance = 20;
  use(x) {
    super.use(x);
  }
}
class Protection extends Status_Effect {
  name = "protection";
  use(x) {
    super.use(x);
  }
}
class Blessing extends Status_Effect {
  name = "blessing";
  start_of_turn = false;
  constructor(duration, heal) {
    super(duration);
    this.heal = heal;
  }
  use(x) {
    super.use(x);
    x.vit += this.heal;
  }
}
class Adrenaline extends Status_Effect {
  name = "adrenaline";
  constructor(duration) {
    super(duration);
    this.change = 25;
  }
  use(x) {
    super.use(x);
  }
}
class Guard_Up extends Status_Effect {
  name = "guard_up";
  constructor(duration) {
    super(duration);
    this.change = 25;
  }
  use(x) {
    super.use(x);
  }
}
class Keen extends Status_Effect {
  name = "keen";
  constructor(duration) {
    super(duration);
    this.change = 25;
  }
  use(x) {
    super.use(x);
  }
}
class Bruised extends Status_Effect {
  name = "bruised";
  constructor(duration) {
    super(duration);
    this.change = 25;
  }
  use(x) {
    super.use(x);
  }
}
class Battle_Dance extends Status_Effect {
  name = "battle_dance";
  purgeable = false;
  constructor(duration) {
    super(duration);
    this.change = 25;
  }
  use(x) {
    super.use(x);
  }
}
class Voids_Call extends Status_Effect {
  name = "voids_call";
  purgeable = false;
  start_of_turn = false;
  damage_min = 4;
  damage_max = 6;
  recoil = 20;
  use(x) {
    super.use(x);
    x.hp -= this.damage;
    var tmp = document.createElement("p");
    if (turn) {
      tmp.style.color = "green";
    } else {
      tmp.style.color = "blue";
    }
    tmp.innerHTML = x.name + " takes  " + this.damage + " Void's Call dmg";
    output.appendChild(tmp);
  }
}

class Reverse_Of_Arms extends Status_Effect {
  name = "reverse_of_arms";
  purgeable = false;
  use(x) {
    super.use(x);
  }
}

class Rollout extends Status_Effect {
  name = "rollout";
  purgeable = false;
}

class Ghostly_Wounds extends Status_Effect {
  name = "ghostly_wounds";
}

class Guard_Crush extends Status_Effect {
  name = "guard_crush";
  constructor(duration, damage) {
    super(duration);
    this.damage = damage;
  }
  use(x) {
    super.use(x);
    x.hp -= this.damage;
    x.status_effects_stat.push(new Guard_Break(3));
  }
}

class Aeroveil extends Status_Effect {
  name = "aeroveil";
}

class Gaiaveil extends Status_Effect {
  name = "gaiaveil";
}

class Pyroveil extends Status_Effect {
  name = "pyroveil";
}

class Hydroveil extends Status_Effect {
  name = "hydroveil";
}

class Aerosurge extends Status_Effect {
  name = "aerosurge";
}

class Gaiasurge extends Status_Effect {
  name = "gaiasurge";
}

class Pyrosurge extends Status_Effect {
  name = "pyrosurge";
}

class Hydrosurge extends Status_Effect {
  name = "hydrosurge";
}

//F=fire, E=earth, A=air, W=water, V=arcane
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
      get_random_range(min, max),
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
  burn_duration = 3;
  if (get_acc_check(values.get("agi1"), values.get("agi2"), acc)) {
    dmg = magic_damage_calc(
      attacker,
      defender,
      get_random_range(min, max),
      "F",
      "Fireblast",
      values
    );
    defender.hp -= dmg;
    if (get_acc_check(0, 0, burn_chance)) {
      if (
        defender.status_effects_end.filter((e) => e.name === "burn").length > 0
      ) {
        defender.status_effects_end.splice(
          defender.status_effects_end.findIndex((e) => e.name === "burn"),
          1
        );
      }
      defender.status_effects_end.push(
        new Burn(burn_duration, Math.round(dmg * 0.1))
      );
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
  burn_duration = 3;
  if (get_acc_check(values.get("agi1"), values.get("agi2"), acc)) {
    dmg = magic_damage_calc(
      attacker,
      defender,
      get_random_range(min, max),
      "F",
      "Firestorm",
      values
    );
    defender.hp -= dmg;
    if (get_acc_check(0, 0, burn_chance)) {
      if (
        defender.status_effects_end.filter((e) => e.name === "burn").length > 0
      ) {
        defender.status_effects_end.splice(
          defender.status_effects_end.findIndex((e) => e.name === "burn"),
          1
        );
      }
      defender.status_effects_end.push(
        new Burn(burn_duration, Math.round(dmg * 0.1))
      );
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
      get_random_range(min, max),
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
      get_random_range(min, max),
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
      get_random_range(min, max),
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
      get_random_range(min, max),
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
      get_random_range(min, max),
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
  if (get_acc_check(values.get("agi1"), values.get("agi2"), acc)) {
    for (i = 0; i < multi_hit; i++) {
      dmg = magic_damage_calc(
        attacker,
        defender,
        get_random_range(min, max),
        "A",
        "Tornade",
        values
      );
      defender.hp -= dmg;
    }
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
      get_random_range(min, max),
      "E",
      "Stone Strike",
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
  slow_duration = 2;
  if (get_acc_check(values.get("agi1"), values.get("agi2"), acc)) {
    dmg = magic_damage_calc(
      attacker,
      defender,
      get_random_range(min, max),
      "E",
      "Stone Edge",
      values
    );
    defender.hp -= dmg;
    if (get_acc_check(0, 0, slow_chance)) {
      defender.status_effects_stat.push(new Slow(slow_duration));
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
  stun_duration = 1;
  if (get_acc_check(values.get("agi1"), values.get("agi2"), acc)) {
    dmg = magic_damage_calc(
      attacker,
      defender,
      get_random_range(min, max),
      "E",
      "Stone Assault",
      values
    );
    defender.hp -= dmg;
    if (get_acc_check(0, 0, stun_chance)) {
      defender.status_effects_stat.push(new Freeze_Stun(stun_duration));
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
  burn_duration = 3;
  if (get_acc_check(values.get("agi1"), values.get("agi2"), acc)) {
    dmg = magic_damage_calc(
      attacker,
      defender,
      get_random_range(min, max),
      "E",
      "Eruption",
      values
    );
    defender.hp -= dmg;
    if (get_acc_check(0, 0, burn_chance)) {
      if (
        defender.status_effects_end.filter((e) => e.name === "burn").length > 0
      ) {
        defender.status_effects_end.splice(
          defender.status_effects_end.findIndex((e) => e.name === "burn"),
          1
        );
      }
      defender.status_effects_end.push(
        new Burn(burn_duration, Math.round(dmg * 0.1))
      );
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
      get_random_range(min + attacker.stress, max + attacker.stress),
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
  stun_duration = 1;
  slow_chance = 50;
  slow_duration = 2;
  if (get_acc_check(values.get("agi1"), values.get("agi2"), acc1)) {
    dmg = magic_damage_calc(
      attacker,
      defender,
      get_random_range(min, max),
      "E",
      "Fault Line",
      values
    );
    defender.hp -= dmg;
    if (get_acc_check(0, 0, slow_chance)) {
      defender.status_effects_stat.push(new Slow(slow_duration));
    }
  } else {
    spell_acc_dialogue(attacker);
  }
  if (get_acc_check(values.get("agi1"), values.get("agi2"), acc2)) {
    dmg = magic_damage_calc(
      attacker,
      defender,
      get_random_range(min, max),
      "E",
      "Fault Line",
      values
    );
    defender.hp -= dmg;
    if (get_acc_check(0, 0, stun_chance)) {
      defender.status_effects_start.push(new Freeze_Stun(stun_duration));
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
      get_random_range(min, max),
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
      get_random_range(min * multiplier, max * multiplier),
      "E",
      "Rollout",
      values
    );
    defender.hp -= dmg;
  } else {
    spell_acc_dialogue(attacker);
  }
  attacker.unpurgeable_effects_start.push(new Rollout(5));
});
magic_spells.set("AFFV", function cast(attacker, defender, values) {
  min = 26;
  max = 36;
  acc = 90;
  if (get_acc_check(values.get("agi1"), values.get("agi2"), acc)) {
    dmg = magic_damage_calc(
      attacker,
      defender,
      get_random_range(min, max),
      "F",
      "Reckless Inferno",
      values
    );
    defender.hp -= dmg;
  } else {
    spell_acc_dialogue(attacker);
  }
  switch (get_random_int(5)) {
    case 0:
      attacker.status_effects_stat.push(new Slow(3));
      break;
    case 1:
      attacker.status_effects_stat.push(new Sap(3));
      break;
    case 2:
      attacker.status_effects_stat.push(new Enfeeble(3));
      break;
    case 3:
      attacker.status_effects_stat.push(new Guard_Break(3));
      break;
    case 4:
      attacker.status_effects_stat.push(new Blind(3));
      break;
    default:
      break;
  }
  switch (get_random_int(5)) {
    case 0:
      attacker.status_effects_stat.push(new Slow(3));
      break;
    case 1:
      attacker.status_effects_stat.push(new Sap(3));
      break;
    case 2:
      attacker.status_effects_stat.push(new Enfeeble(3));
      break;
    case 3:
      attacker.status_effects_stat.push(new Guard_Break(3));
      break;
    case 4:
      attacker.status_effects_stat.push(new Blind(3));
      break;
    default:
      break;
  }
});
magic_spells.set("AWW", function cast(attacker, defender, values) {
  min = 6;
  max = 9;
  acc = 100;
  freeze_chance = 30;
  freeze_duration = 1;
  if (get_acc_check(values.get("agi1"), values.get("agi2"), acc)) {
    dmg = magic_damage_calc(
      attacker,
      defender,
      get_random_range(min, max),
      "W",
      "Chill",
      values
    );
    defender.hp -= dmg;
    if (get_acc_check(0, 0, freeze_chance)) {
      defender.status_effects_start.push(new Freeze_Stun(freeze_duration));
    }
  } else {
    spell_acc_dialogue(attacker);
  }
});
magic_spells.set("AAWWW", function cast(attacker, defender, values) {
  freeze_duration = 1;
  magic_damage_calc(
    attacker,
    defender,
    get_random_range(0, 0),
    "W",
    "Deep Chill",
    values
  );
  defender.status_effects_start.push(new Freeze_Stun(freeze_duration));
});
magic_spells.set("FFW", function cast(attacker, defender, values) {
  min = 5;
  max = 10;
  acc = 85;
  blind_chance = 30;
  blind_duration = 3;
  if (get_acc_check(values.get("agi1"), values.get("agi2"), acc)) {
    dmg = magic_damage_calc(
      attacker,
      defender,
      get_random_range(min, max),
      "W",
      "Steam",
      values
    );
    defender.hp -= dmg;
    if (get_acc_check(0, 0, blind_chance)) {
      defender.status_effects_stat.push(new Blind(blind_duration));
    }
  } else {
    spell_acc_dialogue(attacker);
  }
});
magic_spells.set("AAV", function cast(attacker, defender, values) {
  blind_duration = 3;
  magic_damage_calc(
    attacker,
    defender,
    get_random_range(0, 0),
    "A",
    "Shadow Stream",
    values
  );
  defender.status_effects_stat.push(new Blind(blind_duration));
});
magic_spells.set("AAAEE", function cast(attacker, defender, values) {
  min = 10;
  max = 20;
  acc = 60;
  slow_chance = 100;
  slow_duration = 3;
  defender.status_effects_stat.push(new Slow(slow_duration));
  if (get_acc_check(values.get("agi1"), values.get("agi2"), acc)) {
    dmg = magic_damage_calc(
      attacker,
      defender,
      get_random_range(min, max),
      "A",
      "Sandstorm",
      values
    );
    defender.hp -= dmg;
    if (get_acc_check(0, 0, slow_chance)) {
      defender.status_effects_stat.push(new Slow(slow_duration));
    }
  } else {
    spell_acc_dialogue(attacker);
  }
});
magic_spells.set("FFFV", function cast(attacker, defender, values) {
  acc = 85;
  if (get_acc_check(0, 0, acc)) {
    if (
      !defender.status_effects_start.filter((e) => e.name === "ghostly_wounds")
        .length > 0
    ) {
      defender.status_effects_start.push(new Ghostly_Wounds(2));
    }
  }
  magic_damage_calc(
    attacker,
    defender,
    get_random_range(0, 0),
    "F",
    "Ghostly Embers",
    values
  );
});
magic_spells.set("EFFV", function cast(attacker, defender, values) {
  dmg = 20;
  acc = 100;
  if (get_acc_check(values.get("agi1"), values.get("agi2"), acc)) {
    dmg = magic_damage_calc(
      attacker,
      defender,
      get_random_range(0, 0),
      "V",
      "Guard Crush",
      values
    );
    defender.status_effects.push(new Guard_Crush(1, dmg));
  } else {
    spell_acc_dialogue(attacker);
  }
});
magic_spells.set("AAAV", function cast(attacker, defender, values) {
  switch (get_random_int(4)) {
    case 0:
      attacker.status_effects_start.push(new Lucky(3));
      break;
    case 1:
      attacker.status_effects_start.push(new Misfortune(3));
      break;
    case 2:
      defender.status_effects_start.push(new Lucky(3));
      break;
    case 3:
      defender.status_effects_start.push(new Misfortune(3));
      break;
    default:
      break;
  }
  magic_damage_calc(attacker, defender, 0, "V", "Gamble", values);
});
magic_spells.set("AVVVV", function cast(attacker, defender, values) {
  attacker.status_effects_start.push(new Lucky(3));
  attacker.hp -= Math.floor(attacker.vit / 10);
  magic_damage_calc(attacker, defender, 0, "V", "Dark Bribe", values);
});
magic_spells.set("AFF", function cast(attacker, defender, values) {
  min = 2;
  max = 9;
  acc = 90;
  stun_chance = 75;
  stun_duration = 1;
  if (get_acc_check(values.get("agi1"), values.get("agi2"), acc)) {
    dmg = magic_damage_calc(
      attacker,
      defender,
      get_random_range(min, max),
      "A",
      "Shock",
      values
    );
    defender.hp -= dmg;
    if (get_acc_check(0, 0, stun_chance)) {
      defender.status_effects_start.push(new Freeze_Stun(stun_duration));
    }
  } else {
    spell_acc_dialogue(attacker);
  }
});
magic_spells.set("AEFW", function cast(attacker, defender, values) {
  min = 3;
  max = 5;
  acc = 80;
  if (get_acc_check(values.get("agi1"), values.get("agi2"), acc)) {
    dmg = magic_damage_calc(
      attacker,
      defender,
      get_random_range(min, max),
      "A",
      "4 Star Barrage",
      values
    );
    defender.hp -= dmg;
  } else {
    spell_acc_dialogue(attacker);
  }
  if (get_acc_check(values.get("agi1"), values.get("agi2"), acc)) {
    dmg = magic_damage_calc(
      attacker,
      defender,
      get_random_range(min, max),
      "E",
      "4 Star Barrage",
      values
    );
    defender.hp -= dmg;
  } else {
    spell_acc_dialogue(attacker);
  }
  if (get_acc_check(values.get("agi1"), values.get("agi2"), acc)) {
    dmg = magic_damage_calc(
      attacker,
      defender,
      get_random_range(min, max),
      "F",
      "4 Star Barrage",
      values
    );
    defender.hp -= dmg;
  } else {
    spell_acc_dialogue(attacker);
  }
  if (get_acc_check(values.get("agi1"), values.get("agi2"), acc)) {
    dmg = magic_damage_calc(
      attacker,
      defender,
      get_random_range(min, max),
      "W",
      "4 Star Barrage",
      values
    );
    defender.hp -= dmg;
  } else {
    spell_acc_dialogue(attacker);
  }
});
magic_spells.set("AAFV", function cast(attacker, defender, values) {
  min = 6;
  max = 8;
  acc = 999;
  multi_hit = 3;
  if (get_acc_check(values.get("agi1"), values.get("agi2"), acc)) {
    for (i = 0; i < multi_hit; i++) {
      dmg = magic_damage_calc(
        attacker,
        defender,
        get_random_range(min, max),
        "V",
        "Magic Missile",
        values
      );
      defender.hp -= dmg;
    }
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

  for (
    i = 0;
    i < get_random_range(multi_hit_range_min, multi_hit_range_max);
    i++
  ) {
    if (get_acc_check(values.get("agi1"), values.get("agi2"), acc)) {
      dmg = magic_damage_calc(
        attacker,
        defender,
        get_random_range(min, max),
        "W",
        "Cyclone",
        values
      );
      defender.hp -= dmg;
    } else {
      spell_acc_dialogue(attacker);
    }
  }
});
magic_spells.set("AAAFF", function cast(attacker, defender, values) {
  min = 3;
  max = 5;
  acc = 75;
  multi_hit_range = 5;
  c = 0;
  for (i = 0; i < multi_hit_range; i++) {
    if (get_acc_check(values.get("agi1"), values.get("agi2"), acc)) {
      dmg = magic_damage_calc(
        attacker,
        defender,
        get_random_range(min, max),
        "A",
        "Overwhelm",
        values
      );
      defender.hp -= dmg;
      c++;
    } else {
      spell_acc_dialogue(attacker);
    }
  }
  if (c >= 4) {
    defender.status_effects_start.push(new Enfeeble(3));
  }
});
magic_spells.set("AAFFF", function cast(attacker, defender, values) {
  min = 3;
  max = 5;
  acc = 75;
  multi_hit_range = 5;
  c = 0;
  for (i = 0; i < multi_hit_range; i++) {
    if (get_acc_check(values.get("agi1"), values.get("agi2"), acc)) {
      dmg = magic_damage_calc(
        attacker,
        defender,
        get_random_range(min, max),
        "F",
        "Brutal Strike",
        values
      );
      defender.hp -= dmg;
      c++;
    } else {
      spell_acc_dialogue(attacker);
    }
  }
  if (c >= 4) {
    defender.status_effects_start.push(new Bruised(3));
  }
});
magic_spells.set("AVV", function cast(attacker, defender, values) {
  magic_damage_calc(attacker, defender, 0, "A", "Aeroveil", values);
  attacker.status_effects_start.push(new Aeroveil(4));
});
magic_spells.set("EVV", function cast(attacker, defender, values) {
  magic_damage_calc(attacker, defender, 0, "E", "Gaiaveil", values);
  attacker.status_effects_start.push(new Gaiaveil(4));
});
magic_spells.set("FVV", function cast(attacker, defender, values) {
  magic_damage_calc(attacker, defender, 0, "F", "Pyroveil", values);
  attacker.status_effects_start.push(new Pyroveil(4));
});
magic_spells.set("WVV", function cast(attacker, defender, values) {
  magic_damage_calc(attacker, defender, 0, "W", "Hydroveil", values);
  attacker.status_effects_start.push(new Hydroveil(4));
});
magic_spells.set("AAVV", function cast(attacker, defender, values) {
  magic_damage_calc(attacker, defender, 0, "A", "Aerosurge", values);
  attacker.status_effects_start.push(new Aerosurge(4));
});
magic_spells.set("EEVV", function cast(attacker, defender, values) {
  magic_damage_calc(attacker, defender, 0, "E", "Gaiasurge", values);
  attacker.status_effects_start.push(new Gaiasurge(4));
});
magic_spells.set("FFVV", function cast(attacker, defender, values) {
  magic_damage_calc(attacker, defender, 0, "F", "Pyrosurge", values);
  attacker.status_effects_start.push(new Pyrosurge(4));
});
magic_spells.set("WWVV", function cast(attacker, defender, values) {
  magic_damage_calc(attacker, defender, 0, "W", "Hydrosurge", values);
  attacker.status_effects_start.push(new Hydrosurge(4));
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
    get_random_range(min, max) * -1,
    "W",
    "Healing Water",
    values
  );
  attacker.hp -= dmg;
});
magic_spells.set("AWV", function cast(attacker, defender, values) {
  blessing_duration = 3;
  heal = 5;
  defender.status_effects.push(new Blessing(blessing_duration, heal));
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
  amount = get_random_range(min, max);
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
      get_random_range(min, max),
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
  magic_damage_calc(attacker, defender, 0, "v", "Dark Fog", values);
});
magic_spells.set("AVVV", function cast(attacker, defender, values) {
  magic_damage_calc(attacker, defender, 0, "v", "Void's Call", values);
  attacker.unpurgeable_effects_end.push(new Voids_Call(999));
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
  magic_damage_calc(attacker, defender, 0, "v", "Runic Demise", values);
  turn = !turn;
});
magic_spells.set("FWV", function cast(attacker, defender, values) {
  magic_damage_calc(attacker, defender, 0, "V", "Reverse of Arms", values);
  attacker.unpurgeable_effects_start.push(new Reverse_Of_Arms(999));
});
magic_spells.set("EFVV", function cast(attacker, defender, values) {
  magic_damage_calc(attacker, defender, 0, "V", "Sougenmu", values);
  attacker.status_effects_start.push(new Clone(4));
});
magic_spells.set("AEFWV", function cast(attacker, defender, values) {
  num_runes =
    attacker.fire +
    attacker.water +
    attacker.air +
    attacker.earth +
    attacker.arcane;
  attacker.fire = 0;
  attacker.water = 0;
  attacker.air = 0;
  attacker.earth = 0;
  attacker.arcane = 0;
  dmg = magic_damage_calc(
    attacker,
    defender,
    num_runes * 5,
    "V",
    "Arcane Crash",
    values
  );
});
magic_spells.set("AEEV", function cast(attacker, defender, values) {
  magic_damage_calc(attacker, defender, 0, "V", "Battle Dance", values);
  attacker.unpurgeable_effects_start.push(new Battle_Dance(4));
});
magic_spells.set("EFV", function cast(attacker, defender, values) {
  magic_damage_calc(attacker, defender, 0, "V", "Adrenal Surge", values);
  attacker.status_effects_stat.push(new Adrenaline(4));
});
magic_spells.set("VVV", function cast(attacker, defender, values) {
  magic_damage_calc(attacker, defender, 0, "V", "Magical Dampener", values);
  defender.status_effects_stat.push(new Sap(4));
});
magic_spells.set("VVVV", function cast(attacker, defender, values) {
  magic_damage_calc(attacker, defender, 0, "V", "Quiet Hour", values);
  defender.status_effects_start.push(new Silence(4));
});
magic_spells.set("AAE", function cast(attacker, defender, values) {
  magic_damage_calc(attacker, defender, 0, "E", "Gaia Parry", values);
  attacker.status_effects_start.push(new Parry(4));
});
magic_spells.set("AEEE", function cast(attacker, defender, values) {
  magic_damage_calc(attacker, defender, 0, "E", "Gaia Counter", values);
  attacker.status_effects_start.push(new Counter(4));
});
magic_spells.set("AEVV", function cast(attacker, defender, values) {
  magic_damage_calc(attacker, defender, 0, "V", "Hard Read", values);
  attacker.status_effects_start.push(new Keen(4));
});
/*magic_spells.set("AAF", function cast(attacker, defender, values) {
  min = 4;
  max = 18;
  acc = 999;
  if (get_acc_check(values.get("agi1"), values.get("agi2"), acc)) {
    dmg = magic_damage_calc(
      attacker,
      defender,
      get_random_range(min, max),
      "A",
      "Airstinger"
    );
    defender.hp -= dmg;
  } else {
    spell_acc_dialogue(attacker);
  }
  return "Rising Wind";
});*/
