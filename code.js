//***************************************************************//set default monster stats
var monster1 = new Monster("Monster A", 95, 95, 95, 95, 95, 500); //pow, def, mag, agi, spd, vit
var monster2 = new Monster("Monster B", 95, 95, 95, 95, 95, 500); //
//
base_acc = 80; //base acc
//
dmg_min = 10; //min max of dmg
dmg_max = 15; //
//
//def_min = 80; //min max of def
//def_max = 110; //
//
rune_per_attack = 2; //number of runes generated per attack
rune_per_pass = 3; //number of runes generated per pass
runes_per_poof = 1; //num runes per pass
//***************************************************************//
turn_counter = 0;
turn = true; //default to player monster
//////////////////////////////////////////////ignore this
curr_runes1 = [];
curr_runes2 = [];

output = document.getElementById("output");
rune1 = document.getElementById("rune1");
rune2 = document.getElementById("rune2");
rune_sel1 = document.getElementById("rune_selected1");
rune_sel2 = document.getElementById("rune_selected2");
hp1 = document.getElementById("hp1");
hp2 = document.getElementById("hp2");
rune_pass = document.getElementById("rune_pass");
force_spell = document.getElementById("force_spell");
rune_buttons = document.querySelectorAll(".rune_btn");
status_effect1 = document.getElementById("status_effect1");
status_effect2 = document.getElementById("status_effect2");
//////////////////////////////////////////////

for (i = 1; i < rune_per_pass + 1; i++) {
  form = document.createElement("form");
  form.style.display = "inline-block";
  sel = document.createElement("select");
  sel.id = "rune_pass" + i;
  sel.name = "rune_pass" + i;
  opt1 = document.createElement("option");
  opt1.value = "F";
  opt1.innerHTML = "Fire";
  opt2 = document.createElement("option");
  opt2.value = "E";
  opt2.innerHTML = "Earth";
  opt3 = document.createElement("option");
  opt3.value = "A";
  opt3.innerHTML = "Air";
  opt4 = document.createElement("option");
  opt4.value = "W";
  opt4.innerHTML = "Water";
  opt5 = document.createElement("option");
  opt5.value = "V";
  opt5.innerHTML = "Void";
  sel.appendChild(opt1);
  sel.appendChild(opt2);
  sel.appendChild(opt3);
  sel.appendChild(opt4);
  sel.appendChild(opt5);
  form.appendChild(sel);
  rune_pass.appendChild(form);
}

names_arr = [
  "Fireball",
  "Fireblast",
  "Firestorm",
  "Waterball",
  "Waterwhip",
  "Waterburst",
  "Airshot",
  "Airstinger",
  "Tornade",
  "Gaia Strike",
  "Gaia Edge",
  "Gaia Impact",
  "Eruption",
  "Cartharsis",
  "Fault Line",
  "Eldritch Blast",
  "Rock Roll",
  "Reckless Inferno",
  "Chill",
  "Deep Chill",
  "Steam",
  "Shadow Stream",
  "Sandstorm",
  "Ghostly Wounds",
  "Guard Crush",
  "Gamble",
  "Dark Bribe",
  "Shock",
  "4 Star Barrage",
  "Magic Missile",
  "Cyclone",
  "Overwhelm",
  "Brutal Strike",
  "Aeroveil",
  "Gaiaveil",
  "Pyroveil",
  "Hydroveil",
  "Aerosurge",
  "Gaiasurge",
  "Pyrosurge",
  "Hydrosurge",
  "Cleansing Waters",
  "Healing Water",
  "Healing Prayer",
  "Healing Field",
  "Life Sap",
  "Cleansing Fire",
  "Dark Fog",
  "Void's Call",
  "Runic Demise",
  "Reverse of Arms",
  "Sougenmu",
  "Arcane Crash",
  "Battle Dance",
  "Adrenal Surge",
  "Magical Dampener",
  "Quiet Hour",
  "Gaia Parry",
  "Gaia Counter",
  "Hard Read",
];
form = document.createElement("form");
form.style.display = "inline-block";
sel = document.createElement("select");
sel.id = "all_runes";
sel.name = "all_runes";
c = 0;
for (let [key, value] of magic_spells) {
  opt = document.createElement("option");
  opt.value = key;
  opt.innerHTML = names_arr[c];
  sel.appendChild(opt);
  form.appendChild(sel);
  force_spell.appendChild(form);
  c++;
}

function update_stats() {
  document.getElementById("name1").value = monster1.name;

  document.getElementById("pow1").value = monster1.pow;
  document.getElementById("def1").value = monster1.def;
  document.getElementById("mag1").value = monster1.mag;
  document.getElementById("agi1").value = monster1.agi;
  document.getElementById("spd1").value = monster1.spd;
  document.getElementById("vit1").value = monster1.vit;

  document.getElementById("air1").value = monster1.air_affinity;
  document.getElementById("earth1").value = monster1.earth_affinity;
  document.getElementById("fire1").value = monster1.fire_affinity;
  document.getElementById("water1").value = monster1.water_affinity;

  document.getElementById("name2").value = monster2.name;

  document.getElementById("pow2").value = monster2.pow;
  document.getElementById("def2").value = monster2.def;
  document.getElementById("mag2").value = monster2.mag;
  document.getElementById("agi2").value = monster2.agi;
  document.getElementById("spd2").value = monster2.spd;
  document.getElementById("vit2").value = monster2.vit;

  document.getElementById("air2").value = monster2.air_affinity;
  document.getElementById("earth2").value = monster2.earth_affinity;
  document.getElementById("fire2").value = monster2.fire_affinity;
  document.getElementById("water2").value = monster2.water_affinity;
}

function update_hp() {
  monster1.hp = monster1.hp > monster1.vit ? monster1.vit : monster1.hp;
  monster2.hp = monster2.hp > monster2.vit ? monster2.vit : monster2.hp;
  hp1.innerHTML = monster1.hp + " / " + monster1.vit;
  hp2.innerHTML = monster2.hp + " / " + monster2.vit;
}

function update() {
  monster1.name = document.getElementById("name1").value;
  (monster1.pow = document.getElementById("pow1").value), 10;
  (monster1.def = document.getElementById("def1").value), 10;
  (monster1.mag = document.getElementById("mag1").value), 10;
  (monster1.agi = document.getElementById("agi1").value), 10;
  (monster1.spd = document.getElementById("spd1").value), 10;
  (monster1.vit = document.getElementById("vit1").value), 10;
  (monster1.hp = document.getElementById("vit1").value), 10;
  (monster1.air_affinity = document.getElementById("air1").value), 10;
  (monster1.earth_affinity = document.getElementById("earth1").value), 10;
  (monster1.fire_affinity = document.getElementById("fire1").value), 10;
  (monster1.water_affinity = document.getElementById("water1").value), 10;

  monster2.name = document.getElementById("name2").value;
  (monster2.pow = document.getElementById("pow2").value), 10;
  (monster2.def = document.getElementById("def2").value), 10;
  (monster2.mag = document.getElementById("mag2").value), 10;
  (monster2.agi = document.getElementById("agi2").value), 10;
  (monster2.spd = document.getElementById("spd2").value), 10;
  (monster2.vit = document.getElementById("vit2").value), 10;
  (monster2.hp = document.getElementById("vit2").value), 10;
  (monster2.air_affinity = document.getElementById("air2").value), 10;
  (monster2.earth_affinity = document.getElementById("earth2").value), 10;
  (monster2.fire_affinity = document.getElementById("fire2").value), 10;
  (monster2.water_affinity = document.getElementById("water2").value), 10;
  turn = monster1.spd > monster2.spd ? true : false;

  document.getElementById("monster1_name").innerHTML = monster1.name;
  document.getElementById("monster2_name").innerHTML = monster2.name;
  update_hp();
  update_changed_stats();
}

function update_runes() {
  tmp = "";
  for (i = 0; i < curr_runes1.length; i++) {
    switch (curr_runes1[i]) {
      case "F":
        tmp += "Fire ";
        break;
      case "E":
        tmp += "Earth ";
        break;
      case "A":
        tmp += "Air ";
        break;
      case "W":
        tmp += "Water ";
        break;
      case "V":
        tmp += "Void ";
        break;
      default:
        break;
    }
  }
  rune_sel1.innerHTML = tmp;
  tmp = "";
  for (i = 0; i < curr_runes2.length; i++) {
    switch (curr_runes2[i]) {
      case "F":
        tmp += "Fire ";
        break;
      case "E":
        tmp += "Earth ";
        break;
      case "A":
        tmp += "Air ";
        break;
      case "W":
        tmp += "Water ";
        break;
      case "V":
        tmp += "Void ";
        break;
      default:
        break;
    }
  }
  rune_sel2.innerHTML = tmp;
}

function update_rune_count() {
  rune1.innerHTML =
    "Fire: " +
    monster1.fire +
    " Earth: " +
    monster1.earth +
    " Air: " +
    monster1.air +
    " Water: " +
    monster1.water +
    " Void: " +
    monster1.void;
  rune2.innerHTML =
    "Fire: " +
    monster2.fire +
    " Earth: " +
    monster2.earth +
    " Air: " +
    monster2.air +
    " Water: " +
    monster2.water +
    " Void: " +
    monster2.void;
}

function update_status_effect() {
  str1 = "";
  str2 = "";
  //status_effects_start = stun, freeze, guard crush (not shown), lucky, misfortune, veils, surges, clone, silence, parry, counter, bruised, keen
  //status_effects_stat = slow, sap, enfeeble, guard break, blind, adrenaline
  //status_effects_end = burn, ghostly wounds, blessing
  //unpurgeable_effects_start = rollout (not shown), reverse of arm, battle dance
  //unpurgeable_effects_end = void's call, runic demise (not shown)
  if(monster1.status_effects_start.filter((e) => e.name === "stun").length > 0){
    str1 += "stun, ";
  }
  if(monster1.status_effects_start.filter((e) => e.name === "freeze").length > 0){
    str1 += "freeze, ";
  }
  if(monster1.status_effects_start.filter((e) => e.name === "lucky").length - monster1.status_effects_start.filter((e) => e.name === "misfortune").length > 0){
    str1 += "lucky, ";
  }
  if(monster1.status_effects_start.filter((e) => e.name === "lucky").length - monster1.status_effects_start.filter((e) => e.name === "misfortune").length < 0){
    str1 += "misfortunate, ";
  }
  if(monster1.status_effects_start.filter((e) => e.name === "aeroveil").length > 0){
    str1 += "aeroveil, ";
  }
  if(monster1.status_effects_start.filter((e) => e.name === "pyroveil").length > 0){
    str1 += "pyroveil, ";
  }
  if(monster1.status_effects_start.filter((e) => e.name === "gaiaveil").length > 0){
    str1 += "gaiaveil, ";
  }
  if(monster1.status_effects_start.filter((e) => e.name === "hydroveil").length > 0){
    str1 += "hydroveil, ";
  }
  if(monster1.status_effects_start.filter((e) => e.name === "aerosurge").length > 0){
    str1 += "aerosurge, ";
  }
  if(monster1.status_effects_start.filter((e) => e.name === "pyrosurge").length > 0){
    str1 += "pyrosurge, ";
  }
  if(monster1.status_effects_start.filter((e) => e.name === "gaiasurge").length > 0){
    str1 += "gaiasurge, ";
  }
  if(monster1.status_effects_start.filter((e) => e.name === "hydrosurge").length > 0){
    str1 += "hydrosurge, ";
  }
  if(monster1.status_effects_start.filter((e) => e.name === "clone").length > 0){
    str1 += "clone, ";
  }
  if(monster1.status_effects_start.filter((e) => e.name === "silence").length > 0){
    str1 += "silence, ";
  }
  if(monster1.status_effects_start.filter((e) => e.name === "parry").length > 0){
    str1 += "parry, ";
  }
  if(monster1.status_effects_start.filter((e) => e.name === "counter").length > 0){
    str1 += "counter, ";
  }
  if(monster1.status_effects_start.filter((e) => e.name === "keen").length > 0){
    str1 += "keen, ";
  }
  if(monster1.status_effects_start.filter((e) => e.name === "bruised").length > 0){
    str1 += "bruised, ";
  }
  if(monster1.status_effects_stat.filter((e) => e.name === "slow").length >= 2){
    str1 += "strong slow, ";
  } else if (monster1.status_effects_stat.filter((e) => e.name === "slow").length >= 2){
    str1 += "slow, ";
  }
  if(monster1.status_effects_stat.filter((e) => e.name === "enfeeble").length >= 2){
    str1 += "strong enfeeble, ";
  } else if (monster1.status_effects_stat.filter((e) => e.name === "enfeeble").length >= 2){
    str1 += "enfeeble, ";
  }
  if(monster1.status_effects_stat.filter((e) => e.name === "sap").length >= 2){
    str1 += "strong sap, ";
  } else if (monster1.status_effects_stat.filter((e) => e.name === "sap").length >= 2){
    str1 += "sap, ";
  }
  if(monster1.status_effects_stat.filter((e) => e.name === "guard_break").length >= 2){
    str1 += "strong guard break, ";
  } else if (monster1.status_effects_stat.filter((e) => e.name === "guard_break").length >= 2){
    str1 += "guard break, ";
  }
  if(monster1.status_effects_stat.filter((e) => e.name === "blind").length >= 2){
    str1 += "strong blind, ";
  } else if (monster1.status_effects_stat.filter((e) => e.name === "blind").length >= 2){
    str1 += "blind, ";
  }
  if(monster1.status_effects_stat.filter((e) => e.name === "adrenaline").length > 0){
    str1 += "adrenaline, ";
  }
  if(monster1.status_effects_end.filter((e) => e.name === "burn").length > 0){
    str1 += "burn, ";
  }
  if(monster1.status_effects_end.filter((e) => e.name === "ghostly_wounds").length > 0){
    str1 += "ghostly wounds, ";
  }
  if(monster1.status_effects_end.filter((e) => e.name === "blessing").length > 0){
    str1 += "blessing, ";
  }
  if(monster1.unpurgeable_effects_start.filter((e) => e.name === "reverse_of_arms").length > 0){
    str1 += "reverse of arms, ";
  }
  if(monster1.unpurgeable_effects_start.filter((e) => e.name === "battle_dance").length > 0){
    str1 += "battle dance, ";
  }
  if(monster1.unpurgeable_effects_end.filter((e) => e.name === "voids_call").length > 0){
    str1 += "voids call, ";
  }
  
  if(monster2.status_effects_start.filter((e) => e.name === "stun").length > 0){
    str2 += "stun, ";
  }
  if(monster2.status_effects_start.filter((e) => e.name === "freeze").length > 0){
    str2 += "freeze, ";
  }
  if(monster2.status_effects_start.filter((e) => e.name === "lucky").length - monster2.status_effects_start.filter((e) => e.name === "misfortune").length > 0){
    str2 += "lucky, ";
  }
  if(monster2.status_effects_start.filter((e) => e.name === "lucky").length - monster2.status_effects_start.filter((e) => e.name === "misfortune").length < 0){
    str2 += "misfortunate, ";
  }
  if(monster2.status_effects_start.filter((e) => e.name === "aeroveil").length > 0){
    str2 += "aeroveil, ";
  }
  if(monster2.status_effects_start.filter((e) => e.name === "pyroveil").length > 0){
    str2 += "pyroveil, ";
  }
  if(monster2.status_effects_start.filter((e) => e.name === "gaiaveil").length > 0){
    str2 += "gaiaveil, ";
  }
  if(monster2.status_effects_start.filter((e) => e.name === "hydroveil").length > 0){
    str2 += "hydroveil, ";
  }
  if(monster2.status_effects_start.filter((e) => e.name === "aerosurge").length > 0){
    str2 += "aerosurge, ";
  }
  if(monster2.status_effects_start.filter((e) => e.name === "pyrosurge").length > 0){
    str2 += "pyrosurge, ";
  }
  if(monster2.status_effects_start.filter((e) => e.name === "gaiasurge").length > 0){
    str2 += "gaiasurge, ";
  }
  if(monster2.status_effects_start.filter((e) => e.name === "hydrosurge").length > 0){
    str2 += "hydrosurge, ";
  }
  if(monster2.status_effects_start.filter((e) => e.name === "clone").length > 0){
    str2 += "clone, ";
  }
  if(monster2.status_effects_start.filter((e) => e.name === "silence").length > 0){
    str2 += "silence, ";
  }
  if(monster2.status_effects_start.filter((e) => e.name === "parry").length > 0){
    str2 += "parry, ";
  }
  if(monster2.status_effects_start.filter((e) => e.name === "counter").length > 0){
    str2 += "counter, ";
  }
  if(monster2.status_effects_start.filter((e) => e.name === "keen").length > 0){
    str2 += "keen, ";
  }
  if(monster2.status_effects_start.filter((e) => e.name === "bruised").length > 0){
    str2 += "bruised, ";
  }
  if(monster2.status_effects_stat.filter((e) => e.name === "slow").length >= 2){
    str2 += "strong slow, ";
  } else if (monster2.status_effects_stat.filter((e) => e.name === "slow").length >= 2){
    str2 += "slow, ";
  }
  if(monster2.status_effects_stat.filter((e) => e.name === "enfeeble").length >= 2){
    str2 += "strong enfeeble, ";
  } else if (monster2.status_effects_stat.filter((e) => e.name === "enfeeble").length >= 2){
    str2 += "enfeeble, ";
  }
  if(monster2.status_effects_stat.filter((e) => e.name === "sap").length >= 2){
    str2 += "strong sap, ";
  } else if (monster2.status_effects_stat.filter((e) => e.name === "sap").length >= 2){
    str2 += "sap, ";
  }
  if(monster2.status_effects_stat.filter((e) => e.name === "guard_break").length >= 2){
    str2 += "strong guard break, ";
  } else if (monster2.status_effects_stat.filter((e) => e.name === "guard_break").length >= 2){
    str2 += "guard break, ";
  }
  if(monster2.status_effects_stat.filter((e) => e.name === "blind").length >= 2){
    str2 += "strong blind, ";
  } else if (monster2.status_effects_stat.filter((e) => e.name === "blind").length >= 2){
    str2 += "blind, ";
  }
  if(monster2.status_effects_stat.filter((e) => e.name === "adrenaline").length > 0){
    str2 += "adrenaline, ";
  }
  if(monster2.status_effects_end.filter((e) => e.name === "burn").length > 0){
    str2 += "burn, ";
  }
  if(monster2.status_effects_end.filter((e) => e.name === "ghostly_wounds").length > 0){
    str2 += "ghostly wounds, ";
  }
  if(monster2.status_effects_end.filter((e) => e.name === "blessing").length > 0){
    str2 += "blessing, ";
  }
  if(monster2.unpurgeable_effects_start.filter((e) => e.name === "reverse_of_arms").length > 0){
    str2 += "reverse of arms, ";
  }
  if(monster2.unpurgeable_effects_start.filter((e) => e.name === "battle_dance").length > 0){
    str2 += "battle dance, ";
  }
  if(monster1.unpurgeable_effects_end.filter((e) => e.name === "voids_call").length > 0){
    str2 += "voids call, ";
  }

  status_effect1.innerHTML = str1.substring(0, str1.length - 2);
  status_effect2.innerHTML = str2.substring(0, str2.length - 2);
}

rune_buttons.forEach(function (button, index) {
  button.addEventListener("click", function () {
    switch (button.id) {
      case "fire_up1":
        if (monster1.fire > 0) {
          curr_runes1.push("F");
          monster1.fire--;
        }
        break;
      case "earth_up1":
        if (monster1.earth > 0) {
          curr_runes1.push("E");
          monster1.earth--;
        }
        break;
      case "air_up1":
        if (monster1.air > 0) {
          curr_runes1.push("A");
          monster1.air--;
        }
        break;
      case "water_up1":
        if (monster1.water > 0) {
          curr_runes1.push("W");
          monster1.water--;
        }
        break;
      case "void_up1":
        if (monster1.void > 0) {
          curr_runes1.push("V");
          monster1.void--;
        }
        break;
      case "fire_down1":
        if (remove_element(curr_runes1, "F")) {
          monster1.fire++;
        }
        break;
      case "earth_down1":
        if (remove_element(curr_runes1, "E")) {
          monster1.earth++;
        }
        break;
      case "air_down1":
        if (remove_element(curr_runes1, "A")) {
          monster1.air++;
        }
        break;
      case "water_down1":
        if (remove_element(curr_runes1, "W")) {
          monster1.water++;
        }
        break;
      case "void_down1":
        if (remove_element(curr_runes1, "V")) {
          monster1.void++;
        }
        break;
      case "fire_up2":
        if (monster2.fire > 0) {
          curr_runes2.push("F");
          monster2.fire--;
        }
        break;
      case "earth_up2":
        if (monster2.earth > 0) {
          curr_runes2.push("E");
          monster2.earth--;
        }
        break;
      case "air_up2":
        if (monster2.air > 0) {
          curr_runes2.push("A");
          monster2.air--;
        }
        break;
      case "water_up2":
        if (monster2.water > 0) {
          curr_runes2.push("W");
          monster2.water--;
        }
        break;
      case "void_up2":
        if (monster2.void > 0) {
          curr_runes2.push("V");
          monster2.void--;
        }
        break;
      case "fire_down2":
        if (remove_element(curr_runes2, "F")) {
          monster2.fire++;
        }
        break;
      case "earth_down2":
        if (remove_element(curr_runes2, "E")) {
          monster2.earth++;
        }
        break;
      case "air_down2":
        if (remove_element(curr_runes2, "A")) {
          monster2.air++;
        }
        break;
      case "water_down2":
        if (remove_element(curr_runes2, "W")) {
          monster2.water++;
        }
        break;
      case "void_down2":
        if (remove_element(curr_runes2, "V")) {
          monster2.void++;
        }
        break;
      default:
        break;
    }
    update_runes();
    update_rune_count();
  });
});

function update_changed_stats() {
  values = status_effects_start_calc(monster1, monster2);
  document.getElementById("monster1_stats").innerHTML =
    "POW: " +
    values.get("pow1") +
    ", DEF: " +
    values.get("def1") +
    ", MAG: " +
    values.get("mag1") +
    "<br>AGI: " +
    values.get("agi1") +
    ", SPD: " +
    values.get("spd1") +
    "<br>air: " +
    values.get("air1") +
    ", earth: " +
    values.get("earth1") +
    ", fire: " +
    values.get("fire1") +
    ", water: " +
    values.get("water1");
  document.getElementById("monster2_stats").innerHTML =
    "POW: " +
    values.get("pow2") +
    ", DEF: " +
    values.get("def2") +
    ", MAG: " +
    values.get("mag2") +
    "<br>AGI: " +
    values.get("agi2") +
    ", SPD: " +
    values.get("spd2") +
    "<br>air: " +
    values.get("air2") +
    ", earth: " +
    values.get("earth2") +
    ", fire: " +
    values.get("fire2") +
    ", water: " +
    values.get("water2");
}

function update_turn() {
  values = status_effects_start_calc(monster1, monster2);
  turn_counter++;
  if (turn_counter % 2 == 1) {
    turn = values.get("spd1") >= values.get("spd2") ? true : false; //true = left monster, false = right monster
  } else {
    turn = !turn;
  }
  document.getElementById("turn_counter").innerHTML = "Turn: " + turn_counter;
}

update_stats();
update_changed_stats();
update_hp();
update_status_effect();
turn_color();
update_turn();

//////////////////////////////////////////////ignore these too

function get_random_int(max) {
  return Math.floor(Math.random() * max);
}

function get_random_range(min, max) {
  return get_random_int(max - min + 1) + min;
}

function get_acc_check(agi1, agi2, base_acc) {
  acc = (agi1 - agi2) / 2;
  acc = base_acc + acc;
  acc = Math.round(acc);
  acc_check = get_random_int(100);
  return acc_check < acc;
}

function get_crit_check(spd1, keen1) {
  crit = 9 + spd1 * 0.2;
  if (keen1) {
    crit += 11;
  }
  return get_random_int(100) < crit;
}

function spell_acc_dialogue(attacker) {
  var tmp = document.createElement("p");
  if (turn) {
    tmp.style.color = "green";
  } else {
    tmp.style.color = "blue";
  }
  tmp.innerHTML = attacker.name + "'s spell missed";
  output.appendChild(tmp);
}

function magic_damage_calc(attacker, defender, min_dmg, max_dmg, type, spell_name, values) {
  var tmp = document.createElement("p");
  dmg = get_random_range(min_dmg, max_dmg);
  luck = values.get("luck1") - values.get("luck2");
  if(luck >= 0){
    for (i = 1; i < luck; i++) {
      base_dmg = get_random_range(dmg_min, dmg_max);
      dmg = Math.max(
        dmg,
        Math.round((base_dmg * values.get("mag1")) / values.get("mag2"))
      );
    }
  } else {
    for (i = 1; i < Math.abs(luck); i++) {
      base_dmg = get_random_range(dmg_min, dmg_max);
      dmg = Math.min(
        dmg,
        Math.round((base_dmg * values.get("mag1")) / values.get("mag2"))
      );
    }
  }
  if (turn) {
    tmp.style.color = "green";
  } else {
    tmp.style.color = "blue";
  }
  if (dmg < 0) {
    tmp.innerHTML =
      attacker.name + " uses " + spell_name + " which heals for " + dmg * -1;
  } else if (dmg == 0) {
    tmp.innerHTML = attacker.name + " uses " + spell_name;
  } else {
    dmg = (dmg * values.get("mag1")) / values.get("mag2");
    switch (type) {
      case "A":
        dmg = dmg * (values.get("air1") / values.get("air2"));
        if (values.get("aeroveil2")) {
          dmg = dmg * 0.7;
        }
        dmg = (dmg * values.get("air1")) / values.get("air2");
        break;
      case "E":
        dmg = dmg * (values.get("earth1") / values.get("earth2"));
        if (values.get("gaiaveil2")) {
          dmg = dmg * 0.7;
        }
        dmg = (dmg * values.get("earth1")) / values.get("earth2");
        break;
      case "F":
        dmg = dmg * (values.get("fire1") / values.get("fire2"));
        if (values.get("pyroveil2")) {
          dmg = dmg * 0.7;
        }
        dmg = (dmg * values.get("fire1")) / values.get("fire2");
        break;
      case "W":
        dmg = dmg * (values.get("water1") / values.get("water2"));
        if (values.get("hydroveil2")) {
          dmg = dmg * 0.7;
        }
        dmg = (dmg * values.get("water1")) / values.get("water2");
        break;
      case "V":
        break;
      default:
        break;
    }
    dmg = Math.round(dmg);
    tmp.innerHTML =
      attacker.name + " uses " + spell_name + " which hits for " + dmg;
  }
  output.appendChild(tmp);
  return dmg;
}

function status_effects_end_calc(mon, defender) {
  i = mon.status_effects_end.length;
  while (i--) {
    if (
      mon.status_effects_end.filter((e) => e.name === "ghostly_wounds").length >
      0
    ) {
      if (mon.status_effects_end[i].name == "burn") {
        mon.status_effects_end[i].ghostly_wounds = true;
      }
    }
    mon.status_effects_end[i].use(mon);
    if (mon.status_effects_end[i].duration == 0) {
      mon.status_effects_end.splice(i, 1);
    }
  }
  i = mon.unpurgeable_effects_end.length;
  while (i--) {
    if (mon.unpurgeable_effects_end[i].name == "voids_call") {
      mon.unpurgeable_effects_end[i].use(mon, defender);
    } else {
      mon.unpurgeable_effects_end[i].use(mon);
    }
    if (mon.unpurgeable_effects_end[i].duration == 0) {
      mon.unpurgeable_effects_end.splice(i, 1);
    }
  }
  i = mon.status_effects_start.length;
  while (i--) {
    mon.status_effects_start[i].use(mon);
    if (mon.status_effects_start[i].duration == 0) {
      mon.status_effects_start.splice(i, 1);
    }
  }
  i = mon.status_effects_stat.length;
  while (i--) {
    mon.status_effects_stat[i].use(mon);
    if (mon.status_effects_stat[i].duration == 0) {
      mon.status_effects_stat.splice(i, 1);
    }
  }
  i = mon.unpurgeable_effects_start.length;
  while (i--) {
    mon.unpurgeable_effects_start[i].use(mon);
    if (mon.unpurgeable_effects_start[i].duration == 0) {
      mon.unpurgeable_effects_start.splice(i, 1);
    }
  }
  update_status_effect();
  update_hp();
  update_stats();
  update_changed_stats();
}
function status_effects_start_calc(attacker, defender) {
  tmp_pow1 = 1;
  tmp_def1 = 1;
  tmp_agi1 = 1;
  tmp_mag1 = 1;
  tmp_spd1 = 1;

  tmp_fire1 = attacker.fire_affinity;
  tmp_water1 = attacker.water_affinity;
  tmp_air1 = attacker.air_affinity;
  tmp_earth1 = attacker.earth_affinity;

  tmp_luck1 = 0;

  tmp_pow2 = 1;
  tmp_def2 = 1;
  tmp_agi2 = 1;
  tmp_mag2 = 1;
  tmp_spd2 = 1;

  tmp_fire2 = defender.fire_affinity;
  tmp_water2 = defender.water_affinity;
  tmp_air2 = defender.air_affinity;
  tmp_earth2 = defender.earth_affinity;

  tmp_luck2 = 0;

  tmp_aeroveil2 = false;
  tmp_gaiaveil2 = false;
  tmp_pyroveil2 = false;
  tmp_hydroveil2 = false;

  clone1 = 0;
  counter2 = false;
  parry2 = false;

  freeze_stun1 = false;
  silence1 = false;

  keen1 = false;
  bruised2 = false;

  if (
    attacker.status_effects_stat.filter((e) => e.name === "slow").length >= 2
  ) {
    tmp_spd1 -= 0.5;
  } else if (
    attacker.status_effects_stat.filter((e) => e.name === "slow").length == 1
  ) {
    tmp_spd1 -= 0.25;
  }
  if (
    attacker.status_effects_stat.filter((e) => e.name === "sap").length >= 2
  ) {
    tmp_mag1 -= 0.5;
  } else if (
    attacker.status_effects_stat.filter((e) => e.name === "sap").length == 1
  ) {
    tmp_mag1 -= 0.25;
  }
  if (
    attacker.status_effects_stat.filter((e) => e.name === "blind").length >= 2
  ) {
    tmp_agi1 -= 0.5;
  } else if (
    attacker.status_effects_stat.filter((e) => e.name === "blind").length == 1
  ) {
    tmp_agi1 -= 0.25;
  }
  if (
    attacker.status_effects_stat.filter((e) => e.name === "enfeeble").length >=
    2
  ) {
    tmp_pow1 -= 0.5;
  } else if (
    attacker.status_effects_stat.filter((e) => e.name === "enfeeble").length ==
    1
  ) {
    tmp_pow1 -= 0.25;
  }
  if (
    attacker.status_effects_stat.filter((e) => e.name === "guard_break")
      .length >= 2
  ) {
    tmp_def1 -= 0.5;
  } else if (
    attacker.status_effects_stat.filter((e) => e.name === "guard_break")
      .length == 1
  ) {
    tmp_def1 -= 0.25;
  }
  if (
    defender.status_effects_stat.filter((e) => e.name === "slow").length >= 2
  ) {
    tmp_spd2 -= 0.5;
  } else if (
    defender.status_effects_stat.filter((e) => e.name === "slow").length == 1
  ) {
    tmp_spd2 -= 0.25;
  }
  if (
    defender.status_effects_stat.filter((e) => e.name === "sap").length >= 2
  ) {
    tmp_mag2 -= 0.5;
  } else if (
    defender.status_effects_stat.filter((e) => e.name === "sap").length == 1
  ) {
    tmp_mag2 -= 0.25;
  }
  if (
    defender.status_effects_stat.filter((e) => e.name === "blind").length >= 2
  ) {
    tmp_agi2 -= 0.5;
  } else if (
    defender.status_effects_stat.filter((e) => e.name === "blind").length == 1
  ) {
    tmp_agi2 -= 0.25;
  }
  if (
    defender.status_effects_stat.filter((e) => e.name === "enfeeble").length >=
    2
  ) {
    tmp_pow2 -= 0.5;
  } else if (
    defender.status_effects_stat.filter((e) => e.name === "enfeeble").length ==
    1
  ) {
    tmp_pow2 -= 0.25;
  }
  if (
    defender.status_effects_stat.filter((e) => e.name === "guard_break")
      .length >= 2
  ) {
    tmp_def2 -= 0.5;
  } else if (
    defender.status_effects_stat.filter((e) => e.name === "guard_break")
      .length == 1
  ) {
    tmp_def2 -= 0.25;
  }
  if (
    attacker.status_effects_stat.filter((e) => e.name === "adrenaline")
      .length >= 1
  ) {
    tmp_pow1 += 1;
    tmp_def1 -= 0.5;
  }
  if (
    defender.status_effects_stat.filter((e) => e.name === "adrenaline")
      .length >= 1
  ) {
    tmp_pow2 += 1;
    tmp_def2 -= 0.5;
  }
  //////////////////////////////
  if (
    attacker.status_effects_start.filter((e) => e.name === "aerosurge")
      .length >= 1
  ) {
    tmp_air1++;
  }
  if (
    attacker.status_effects_start.filter((e) => e.name === "pyrosurge")
      .length >= 1
  ) {
    tmp_fire1++;
  }
  if (
    attacker.status_effects_start.filter((e) => e.name === "hydrosurge")
      .length >= 1
  ) {
    tmp_water1++;
  }
  if (
    attacker.status_effects_start.filter((e) => e.name === "gaiasurge")
      .length >= 1
  ) {
    tmp_earth1++;
  }
  if (
    defender.status_effects_start.filter((e) => e.name === "aerosurge")
      .length >= 1
  ) {
    tmp_air2++;
  }
  if (
    defender.status_effects_start.filter((e) => e.name === "pyrosurge")
      .length >= 1
  ) {
    tmp_fire2++;
  }
  if (
    defender.status_effects_start.filter((e) => e.name === "hydrosurge")
      .length >= 1
  ) {
    tmp_water2++;
  }
  if (
    defender.status_effects_start.filter((e) => e.name === "gaiasurge")
      .length >= 1
  ) {
    tmp_earth2++;
  }
  if (
    defender.status_effects_start.filter((e) => e.name === "aeroveil").length >=
    1
  ) {
    tmp_aeroveil2 = true;
  }
  if (
    defender.status_effects_start.filter((e) => e.name === "pyroveil").length >=
    1
  ) {
    tmp_pyroveil2 = true;
  }
  if (
    defender.status_effects_start.filter((e) => e.name === "hydroveil")
      .length >= 1
  ) {
    tmp_hydroveil2 = true;
  }
  if (
    defender.status_effects_start.filter((e) => e.name === "gaiaveil").length >=
    1
  ) {
    tmp_gaiaveil2 = true;
  }
  //////////////////////////////
  if (
    attacker.status_effects_start.filter((e) => e.name === "lucky").length -
      attacker.status_effects_start.filter((e) => e.name === "misfortune")
        .length >
    0
  ) {
    tmp_luck1 = 1;
  } else if (
    attacker.status_effects_start.filter((e) => e.name === "lucky").length -
      attacker.status_effects_start.filter((e) => e.name === "misfortune")
        .length <
    0
  ) {
    tmp_luck1 = -1;
  } else {
    tmp_luck1 = 0;
  }
  if (
    defender.status_effects_start.filter((e) => e.name === "lucky").length -
      defender.status_effects_start.filter((e) => e.name === "misfortune")
        .length >
    0
  ) {
    tmp_luck2 = 1;
  } else if (
    defender.status_effects_start.filter((e) => e.name === "lucky").length -
      defender.status_effects_start.filter((e) => e.name === "misfortune")
        .length <
    0
  ) {
    tmp_luck2 = -1;
  } else {
    tmp_luck2 = 0;
  }
  if (
    attacker.status_effects_start.filter((e) => e.name === "clone").length >= 1
  ) {
    clone1 = attacker.status_effects_start.filter(
      (e) => e.name === "clone"
    ).length;
  }
  if (
    defender.status_effects_start.filter((e) => e.name === "parry").length >= 1
  ) {
    parry2 = true;
  }
  if (
    defender.status_effects_start.filter((e) => e.name === "counter").length >=
    1
  ) {
    counter2 = true;
  }
  //////////////////////////////
  if (
    attacker.unpurgeable_effects_start.filter((e) => e.name === "battle_dance")
      .length >= 1
  ) {
    tmp_pow1 += 0.5;
  }
  if (
    defender.unpurgeable_effects_start.filter((e) => e.name === "battle_dance")
      .length >= 1
  ) {
    tmp_pow2 += 0.5;
  }
  //////////////////////////////
  if (
    attacker.status_effects_start.filter((e) => e.name === "freeze_stun")
      .length >= 1
  ) {
    freeze_stun1 = true;
  }
  if (
    attacker.status_effects_start.filter((e) => e.name === "silence").length >=
    1
  ) {
    silence1 = true;
  }
  if (
    attacker.status_effects_start.filter((e) => e.name === "keen").length >= 1
  ) {
    keen1 = true;
  }
  if (
    defender.status_effects_start.filter((e) => e.name === "bruised").length >=
    1
  ) {
    bruised2 = true;
  }
  //////////////////////////////
  tmp_pow1 *= attacker.pow;
  tmp_def1 *= attacker.def;
  tmp_agi1 *= attacker.agi;
  tmp_mag1 *= attacker.mag;
  tmp_spd1 *= attacker.spd;

  tmp_pow2 *= defender.pow;
  tmp_def2 *= defender.def;
  tmp_agi2 *= defender.agi;
  tmp_mag2 *= defender.mag;
  tmp_spd2 *= defender.spd;

  if (
    attacker.unpurgeable_effects_start.filter(
      (e) => e.name === "reverse_of_arms"
    ).length >= 1
  ) {
    tmp = tmp_pow1;
    tmp_pow1 = tmp_def1;
    tmp_def1 = tmp;
  }
  if (
    defender.unpurgeable_effects_start.filter(
      (e) => e.name === "reverse_of_arms"
    ).length %
      2 ==
    1
  ) {
    tmp = tmp_pow2;
    tmp_pow2 = tmp_def2;
    tmp_def2 = tmp;
  }

  ret = new Map();
  ret.set("pow1", tmp_pow1);
  ret.set("def1", tmp_def1);
  ret.set("agi1", tmp_agi1);
  ret.set("mag1", tmp_mag1);
  ret.set("spd1", tmp_spd1);
  ret.set("pow2", tmp_pow2);
  ret.set("def2", tmp_def2);
  ret.set("agi2", tmp_agi2);
  ret.set("mag2", tmp_mag2);
  ret.set("spd2", tmp_spd2);
  ret.set("fire1", tmp_fire1);
  ret.set("water1", tmp_water1);
  ret.set("air1", tmp_air1);
  ret.set("earth1", tmp_earth1);
  ret.set("fire2", tmp_fire2);
  ret.set("water2", tmp_water2);
  ret.set("air2", tmp_air2);
  ret.set("earth2", tmp_earth2);
  ret.set("luck1", tmp_luck1);
  ret.set("luck2", tmp_luck2);
  ret.set("aeroveil2", tmp_aeroveil2);
  ret.set("hydroveil2", tmp_hydroveil2);
  ret.set("pyroveil2", tmp_pyroveil2);
  ret.set("gaiaveil2", tmp_gaiaveil2);
  ret.set("clone1", clone1);
  ret.set("counter2", counter2);
  ret.set("parry2", parry2);
  ret.set("freeze_stun1", freeze_stun1);
  ret.set("silence1", silence1);
  ret.set("keen1", keen1);
  ret.set("bruised2", bruised2);
  return ret;
}

function remove_element(arr, ele) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] == ele) {
      arr.splice(i, 1);
      return true;
    }
  }
  return false;
}

function get_runes(mon, n, p) {
  /*var tmp = document.createElement("p");
  if (turn) {
    tmp.style.color = "green";
  } else {
    tmp.style.color = "blue";
  }*/
  for (i = 0; i < n; i++) {
    switch (get_random_int(5)) {
      case 0:
        mon.fire++;
        p.innerHTML += mon.name + " got a fire rune<br>";
        break;
      case 1:
        mon.earth++;
        p.innerHTML += mon.name + " got a earth rune<br>";
        break;
      case 2:
        mon.air++;
        p.innerHTML += mon.name + " got a air rune<br>";
        break;
      case 3:
        mon.water++;
        p.innerHTML += mon.name + " got a water rune<br>";
        break;
      case 4:
        mon.void++;
        p.innerHTML += mon.name + " got a void rune<br>";
        break;
      default:
        break;
    }
    output.appendChild(p);
  }
  update_rune_count();
}

function cull_output() {
  for (i = 0; i < output.childNodes.length - 8; i++) {
    output.childNodes[i].style.display = "none";
  }
}

function show_log() {
  for (i = 0; i < output.childNodes.length; i++) {
    output.childNodes[i].style.display = "block";
  }
}

function turn_color() {
  if (turn) {
    document.getElementById("monster1_name").style.color = "orange";
    document.getElementById("monster2_name").style.color = "black";
  } else {
    document.getElementById("monster2_name").style.color = "orange";
    document.getElementById("monster1_name").style.color = "black";
  }
}
//////////////////////////////////////////////ignore up to here
