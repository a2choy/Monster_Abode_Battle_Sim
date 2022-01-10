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
    this.status_effects_end = [];
    this.fire_affinity = 1;
    this.earth_affinity = 1;
    this.air_affinity = 1;
    this.water_affinity = 1;
  }
}

class Status_Effect {
  constructor(duration) {
    this.name = "default";
    this.duration = duration;
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
  start_of_turn = true;
  use(x) {
    super.use(x);
  }
}
class Lucky extends Status_Effect {
  name = "lucky";
  start_of_turn = true;
  use(x) {
    super.use(x);
  }
}
class Misfortune extends Status_Effect {
  name = "misfortune";
  start_of_turn = true;
  use(x) {
    super.use(x);
  }
}
class Enfeeble extends Status_Effect {
  name = "enfeeble";
  start_of_turn = true;
  constructor(duration, change) {
    super(duration);
    this.change = change;
  }
  use(x) {
    super.use(x);
  }
}
class Guard_Break extends Status_Effect {
  name = "guard_break";
  start_of_turn = true;
  constructor(duration, change) {
    super(duration);
    this.change = change;
  }
  use(x) {
    super.use(x);
  }
}
class Blind extends Status_Effect {
  name = "blind";
  start_of_turn = true;
  constructor(duration, change) {
    super(duration);
    this.change = change;
  }
  use(x) {
    super.use(x);
  }
}
class Slow extends Status_Effect {
  name = "slow";
  start_of_turn = true;
  constructor(duration, change) {
    super(duration);
    this.change = change;
  }
  use(x) {
    super.use(x);
  }
}
class Sap extends Status_Effect {
  name = "sap";
  start_of_turn = true;
  constructor(duration, change) {
    super(duration);
    this.change = change;
  }
  use(x) {
    super.use(x);
  }
}
class Silence extends Status_Effect {
  name = "silence";
  start_of_turn = true;
  use(x) {
    super.use(x);
  }
}
class Clone extends Status_Effect {
  name = "clone";
  start_of_turn = true;
  constructor(duration) {
    super(duration);
  }
  use(x) {
    super.use(x);
  }
}
class Parry extends Status_Effect {
  name = "parry";
  start_of_turn = true;
  use(x) {
    super.use(x);
  }
}
class Counter extends Status_Effect {
  name = "counter";
  start_of_turn = true;
  use(x) {
    super.use(x);
  }
}
class Protection extends Status_Effect {
  name = "protection";
  start_of_turn = true;
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
  start_of_turn = true;
  constructor(duration, change) {
    super(duration);
    this.change = change;
  }
  use(x) {
    super.use(x);
  }
}
class Guard_Up extends Status_Effect {
  name = "guard_up";
  start_of_turn = true;
  constructor(duration, change) {
    super(duration);
    this.change = change;
  }
  use(x) {
    super.use(x);
  }
}
class Keen extends Status_Effect {
  name = "keen";
  start_of_turn = true;
  constructor(duration, change) {
    super(duration);
    this.change = change;
  }
  use(x) {
    super.use(x);
  }
}
class Bruised extends Status_Effect {
  name = "bruised";
  start_of_turn = true;
  constructor(duration, change) {
    super(duration);
    this.change = change;
  }
  use(x) {
    super.use(x);
  }
}

//F=fire, E=earth, A=air, W=water, V=arcane
//list of spells and what they do
magic_spells = new Map();
magic_spells.set("FFF", function cast(attacker, defender) {
  min = 30;
  max = 50;
  acc = 80;
  burn_acc = 100;
  if (get_acc_check(attacker.agi, defender.agi, acc)) {
    dmg = magic_damage_calc(
      attacker,
      defender,
      get_random_range(min, max),
      "F",
      "Fireball"
    );
    defender.hp -= dmg;
    if (get_acc_check(attacker.agi, defender.agi, burn_acc)) {
      defender.status_effects_end.push(new Burn(3, 10));
    }
  } else {
    spell_acc_dialogue(attacker);
  }
});
magic_spells.set("FFFF", function cast(attacker, defender) {
  min = 40;
  max = 60;
  acc = 80;
  burn_chance = 20;
  burn_duration = 3;
  burn_damage = 10;
  if (get_acc_check(attacker.agi, defender.agi, acc)) {
    dmg = magic_damage_calc(
      attacker,
      defender,
      get_random_range(min, max),
      "F",
      "Fireblast"
    );
    defender.hp -= dmg;
    if (get_acc_check(0, 0, burn_chance)) {
      defender.status_effects.push(
        new Burn("burn", burn_duration, burn_damage)
      );
    }
  } else {
    spell_acc_dialogue(attacker);
  }
});
magic_spells.set("FFFFF", function cast(attacker, defender) {
  min = 50;
  max = 75;
  acc = 85;
  burn_chance = 60;
  burn_duration = 3;
  burn_damage = 15;
  if (get_acc_check(attacker.agi, defender.agi, acc)) {
    dmg = magic_damage_calc(
      attacker,
      defender,
      get_random_range(min, max),
      "F",
      "Firestorm"
    );
    defender.hp -= dmg;
    if (get_acc_check(0, 0, burn_chance)) {
      defender.status_effects.push(
        new Burn("burn", burn_duration, burn_damage)
      );
    }
  } else {
    spell_acc_dialogue(attacker);
  }
});
magic_spells.set("WWW", function cast(attacker, defender) {
  min = 25;
  max = 45;
  acc = 90;
  if (get_acc_check(attacker.agi, defender.agi, acc)) {
    dmg = magic_damage_calc(
      attacker,
      defender,
      get_random_range(min, max),
      "W",
      "Waterball"
    );
    defender.hp -= dmg;
  } else {
    spell_acc_dialogue(attacker);
  }
});
magic_spells.set("WWWW", function cast(attacker, defender) {
  min = 35;
  max = 60;
  acc = 80;
  if (get_acc_check(attacker.agi, defender.agi, acc)) {
    dmg = magic_damage_calc(
      attacker,
      defender,
      get_random_range(min, max),
      "W",
      "Waterwhip"
    );
    defender.hp -= dmg;
  } else {
    spell_acc_dialogue(attacker);
  }
});
magic_spells.set("WWWWW", function cast(attacker, defender) {
  min = 35;
  max = 60;
  acc = 95;
  if (get_acc_check(attacker.agi, defender.agi, acc)) {
    dmg = magic_damage_calc(
      attacker,
      defender,
      get_random_range(min, max),
      "W",
      "Waterburst"
    );
    defender.hp -= dmg;
  } else {
    spell_acc_dialogue(attacker);
  }
});
magic_spells.set("AAA", function cast(attacker, defender) {
  min = 10;
  max = 50;
  acc = 999;
  if (get_acc_check(attacker.agi, defender.agi, acc)) {
    dmg = magic_damage_calc(
      attacker,
      defender,
      get_random_range(min, max),
      "A",
      "Airshot"
    );
    defender.hp -= dmg;
  } else {
    spell_acc_dialogue(attacker);
  }
});
magic_spells.set("AAAA", function cast(attacker, defender) {
  min = 10;
  max = 70;
  acc = 999;
  if (get_acc_check(attacker.agi, defender.agi, acc)) {
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
});
magic_spells.set("AAAAA", function cast(attacker, defender) {
  min = 2;
  max = 20;
  acc = 999;
  multi_hit = 5;
  if (get_acc_check(attacker.agi, defender.agi, acc)) {
    for (i = 0; i < multi_hit; i++) {
      dmg = magic_damage_calc(
        attacker,
        defender,
        get_random_range(min, max),
        "A",
        "Tornade"
      );
      defender.hp -= dmg;
    }
  } else {
    spell_acc_dialogue(attacker);
  }
});
magic_spells.set("EEE", function cast(attacker, defender) {
  min = 45;
  max = 45;
  acc = 75;
  if (get_acc_check(attacker.agi, defender.agi, acc)) {
    dmg = magic_damage_calc(
      attacker,
      defender,
      get_random_range(min, max),
      "E",
      "Stone Strike"
    );
    defender.hp -= dmg;
  } else {
    spell_acc_dialogue(attacker);
  }
});
magic_spells.set("EEEE", function cast(attacker, defender) {
  min = 55;
  max = 55;
  acc = 65;
  slow_chance = 20;
  slow_duration = 2;
  slow_amount = 10;
  if (get_acc_check(attacker.agi, defender.agi, acc)) {
    dmg = magic_damage_calc(
      attacker,
      defender,
      get_random_range(min, max),
      "E",
      "Stone Edge"
    );
    defender.hp -= dmg;
    if (get_acc_check(0, 0, slow_chance)) {
      defender.status_effects.push(
        new Slow("slow", slow_duration, slow_amount)
      );
    }
  } else {
    spell_acc_dialogue(attacker);
  }
});
magic_spells.set("EEEEE", function cast(attacker, defender) {
  min = 65;
  max = 65;
  acc = 55;
  stun_chance = 50;
  stun_duration = 1;
  if (get_acc_check(attacker.agi, defender.agi, acc)) {
    dmg = magic_damage_calc(
      attacker,
      defender,
      get_random_range(min, max),
      "E",
      "Stone Assault"
    );
    defender.hp -= dmg;
    if (get_acc_check(0, 0, stun_chance)) {
      defender.status_effects.push(new Freeze_Stun("stun ", stun_duration));
    }
  } else {
    spell_acc_dialogue(attacker);
  }
});
magic_spells.set("EEEFF", function cast(attacker, defender) {
  return "Eruption";
});
magic_spells.set("FFVVV", function cast(attacker, defender) {
  return "Cartharsis";
});
magic_spells.set("EEEFW", function cast(attacker, defender) {
  return "Earthquake";
});
magic_spells.set("FVVVV", function cast(attacker, defender) {
  return "Eldritch Blast";
});
magic_spells.set("AEE", function cast(attacker, defender) {
  return "Rollout";
});
magic_spells.set("AAF", function cast(attacker, defender) {
  return "Rising Wind";
});
magic_spells.set("AFFV", function cast(attacker, defender) {
  return "Reckless Inferno";
});
magic_spells.set("AWW", function cast(attacker, defender) {
  return "Chill";
});
magic_spells.set("AAWWW", function cast(attacker, defender) {
  return "Deep Chill";
});
magic_spells.set("FFW", function cast(attacker, defender) {
  return "Steam";
});
magic_spells.set("AAV", function cast(attacker, defender) {
  return "Shadow Stream";
});
magic_spells.set("AAAEE", function cast(attacker, defender) {
  return "Sandstorm";
});
magic_spells.set("FFFV", function cast(attacker, defender) {
  return "Ghostly Embers";
});
magic_spells.set("EFFV", function cast(attacker, defender) {
  return "Guard Crush";
});
magic_spells.set("AAAV", function cast(attacker, defender) {
  return "Gamble";
});
magic_spells.set("AVVVV", function cast(attacker, defender) {
  return "Dark Bribe";
});
magic_spells.set("AFF", function cast(attacker, defender) {
  return "Shock";
});
magic_spells.set("AEFW", function cast(attacker, defender) {
  return "4 Star Barrage";
});
magic_spells.set("AAFV", function cast(attacker, defender) {
  return "Magic Missile";
});
magic_spells.set("AAAWW", function cast(attacker, defender) {
  return "Cyclone";
});
magic_spells.set("AAAFF", function cast(attacker, defender) {
  return "Overwhelm";
});
magic_spells.set("AAFFF", function cast(attacker, defender) {
  return "Brutal Strike";
});
magic_spells.set("AVV", function cast(attacker, defender) {
  return "Aeroveil";
});
magic_spells.set("EVV", function cast(attacker, defender) {
  return "Gaiaveil";
});
magic_spells.set("FVV", function cast(attacker, defender) {
  return "Pyroveil";
});
magic_spells.set("WVV", function cast(attacker, defender) {
  return "Hydroveil";
});
magic_spells.set("AAVV", function cast(attacker, defender) {
  return "Aerosurge";
});
magic_spells.set("EEVV", function cast(attacker, defender) {
  return "Gaiasurge";
});
magic_spells.set("FFVV", function cast(attacker, defender) {
  return "Pyrosurge";
});
magic_spells.set("WWVV", function cast(attacker, defender) {
  return "Hydrosurge";
});
magic_spells.set("WWWWV", function cast(attacker, defender) {
  return "Cleansing Waters";
});
magic_spells.set("WWV", function cast(attacker, defender) {
  return "Healing Water";
});
magic_spells.set("AWV", function cast(attacker, defender) {
  return "Healing Prayer";
});
magic_spells.set("EEV", function cast(attacker, defender) {
  return "Healing Field";
});
magic_spells.set("AWVV", function cast(attacker, defender) {
  return "Life Sap";
});
magic_spells.set("FFFFV", function cast(attacker, defender) {
  return "Cleansing Fire";
});
magic_spells.set("VVVVV", function cast(attacker, defender) {
  return "Dark Fog";
});
magic_spells.set("AVVV", function cast(attacker, defender) {
  return "Void's Call";
});
magic_spells.set("AFV", function cast(attacker, defender) {
  return "Runic Demise";
});
magic_spells.set("FWV", function cast(attacker, defender) {
  return "Reverse of Arms";
});
magic_spells.set("EFVV", function cast(attacker, defender) {
  return "Sougenmu";
});
magic_spells.set("AEFWV", function cast(attacker, defender) {
  return "Arcane Crash";
});
magic_spells.set("AEEV", function cast(attacker, defender) {
  return "Battle Dance";
});
magic_spells.set("EFV", function cast(attacker, defender) {
  return "Adrenal Surge";
});
magic_spells.set("VVV", function cast(attacker, defender) {
  return "Magical Dampener";
});
magic_spells.set("VVVV", function cast(attacker, defender) {
  return "Quiet Hour";
});
magic_spells.set("AAE", function cast(attacker, defender) {
  return "Gaia Parry";
});
magic_spells.set("AEEE", function cast(attacker, defender) {
  return "Gaia Counter";
});
magic_spells.set("AEVV", function cast(attacker, defender) {
  return "Hard Read";
});
