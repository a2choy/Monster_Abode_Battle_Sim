//***************************************************************//set default monster stats
var monster1 = new Monster("Monster A", 95, 95, 95, 95, 95, 500); //pow, def, mag, agi, spd, vit
var monster2 = new Monster("Monster B", 95, 95, 95, 95, 95, 500); //
//
base_acc = 100; //base acc
//
dmg_min = 30; //min max of dmg
dmg_max = 50; //
//
def_min = 80; //min max of def
def_max = 110; //
//
rune_per_attack = 2; //number of runes generated per attack
rune_per_pass = 3; //number of runes generated per pass
runes_per_poof = 1; //num runes per pass
//***************************************************************//

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
  opt5.innerHTML = "Arcane";
  sel.appendChild(opt1);
  sel.appendChild(opt2);
  sel.appendChild(opt3);
  sel.appendChild(opt4);
  sel.appendChild(opt5);
  form.appendChild(sel);
  rune_pass.appendChild(form);
}

form = document.createElement("form");
form.style.display = "inline-block";
sel = document.createElement("select");
sel.id = "all_runes";
sel.name = "all_runes";
for (let [key, value] of magic_spells) {
  opt = document.createElement("option");
  opt.value = key;
  opt.innerHTML = key;
  sel.appendChild(opt);
  form.appendChild(sel);
  force_spell.appendChild(form);
}

function update_stats() {
  document.getElementById("pow1").value = monster1.pow;
  document.getElementById("def1").value = monster1.def;
  document.getElementById("mag1").value = monster1.mag;
  document.getElementById("agi1").value = monster1.agi;
  document.getElementById("spd1").value = monster1.spd;
  document.getElementById("vit1").value = monster1.vit;
  document.getElementById("pow2").value = monster2.pow;
  document.getElementById("def2").value = monster2.def;
  document.getElementById("mag2").value = monster2.mag;
  document.getElementById("agi2").value = monster2.agi;
  document.getElementById("spd2").value = monster2.spd;
  document.getElementById("vit2").value = monster2.vit;
}
turn = monster1.spd >= monster2.spd ? true : false; //true = left monster, false = right monster
update_stats();

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
      case "arcane_up1":
        if (monster1.arcane > 0) {
          curr_runes1.push("V");
          monster1.arcane--;
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
      case "arcane_down1":
        if (remove_element(curr_runes1, "V")) {
          monster1.arcane++;
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
      case "arcane_up2":
        if (monster2.arcane > 0) {
          curr_runes2.push("V");
          monster2.arcane--;
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
      case "arcane_down2":
        if (remove_element(curr_runes2, "V")) {
          monster2.arcane++;
        }
        break;
      default:
        break;
    }
    update_runes();
    update_rune_count();
  });
});

update_hp();
update_status_effect();

//////////////////////////////////////////////ignore these too
function update_hp() {
  hp1.innerHTML = monster1.hp + " / " + monster1.vit;
  hp2.innerHTML = monster2.hp + " / " + monster2.vit;
}

function get_random_int(max) {
  return Math.floor(Math.random() * max);
}

function get_random_range(min, max) {
  return get_random_int(max - min + 1) + min;
}

function get_acc_check(attacker, defender, base_acc) {
  acc = (attacker - defender) / 2;
  acc = base_acc + acc;
  acc = Math.round(acc);
  acc_check = get_random_int(100);
  return acc_check < acc;
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

function magic_damage_calc(attacker, defender, dmg, type, spell_name) {
  var tmp = document.createElement("p");
  if (turn) {
    tmp.style.color = "green";
  } else {
    tmp.style.color = "blue";
  }
  if(dmg < 0){
    tmp.innerHTML =
      attacker.name + " uses " + spell_name + " which heals for " + dmg * (-1);
  } else if (dmg == 0) {
    tmp.innerHTML =
      attacker.name + " uses " + spell_name;
  } else {
    tmp.innerHTML =
      attacker.name + " uses " + spell_name + " which hits for " + dmg;
  }
  output.appendChild(tmp);
  return dmg;
}

function status_effects_end_calc(mon) {
  i = mon.status_effects_end.length;
  while (i--) {
    mon.status_effects_end[i].use(mon);
    if (mon.status_effects_end[i].duration == 0) {
      mon.status_effects_end.splice(i, 1);
    }
  }
  update_status_effect();
  update_hp();
}
function status_effects_start_calc(mon) {
  i = mon.status_effects_start.length;
  while (i--) {
    mon.status_effects_start[i].use(mon);
    if (mon.status_effects_start[i].duration == 0) {
      mon.status_effects_start.splice(i, 1);
    }
  }
  update_status_effect();
  update_hp();
}

function update() {
  monster1.pow = parseInt(document.getElementById("pow1").value, 10);
  monster1.def = parseInt(document.getElementById("def1").value, 10);
  monster1.mag = parseInt(document.getElementById("mag1").value, 10);
  monster1.agi = parseInt(document.getElementById("agi1").value, 10);
  monster1.spd = parseInt(document.getElementById("spd1").value, 10);
  monster1.vit = parseInt(document.getElementById("vit1").value, 10);
  monster2.pow = parseInt(document.getElementById("pow2").value, 10);
  monster2.def = parseInt(document.getElementById("def2").value, 10);
  monster2.mag = parseInt(document.getElementById("mag2").value, 10);
  monster2.agi = parseInt(document.getElementById("agi2").value, 10);
  monster2.spd = parseInt(document.getElementById("spd2").value, 10);
  monster2.vit = parseInt(document.getElementById("vit2").value, 10);
  turn = monster1.spd > monster2.spd ? true : false;
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
        tmp += "Arcane ";
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
        tmp += "Arcane ";
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
    " Arcane: " +
    monster1.arcane;
  rune2.innerHTML =
    "Fire: " +
    monster2.fire +
    " Earth: " +
    monster2.earth +
    " Air: " +
    monster2.air +
    " Water: " +
    monster2.water +
    " Arcane: " +
    monster2.arcane;
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
        mon.arcane++;
        p.innerHTML += mon.name + " got a arcane rune<br>";
        break;
      default:
        break;
    }
    output.appendChild(p);
  }
  update_rune_count();
}

function update_status_effect() {
  str1 = "";
  str2 = "";
  monster1.status_effects_start.forEach((e) => {
    str1 += e.name + ", ";
  });
  monster1.status_effects_stat.forEach((e) => {
    str1 += e.name + ", ";
  });
  monster1.status_effects_end.forEach((e) => {
    str1 += e.name + ", ";
  });
  monster2.status_effects_start.forEach((e) => {
    str2 += e.name + ", ";
  });
  monster2.status_effects_stat.forEach((e) => {
    str2 += e.name + ", ";
  });
  monster2.status_effects_end.forEach((e) => {
    str2 += e.name + ", ";
  });
  status_effect1.innerHTML = str1.substring(0, str1.length - 2);
  status_effect2.innerHTML = str2.substring(0, str2.length - 2);
}

function cull_output() {
  //if(output.childNodes.length > 6){
  //  output.removeChild(output.firstChild);
  //}
  for (i = 0; i < output.childNodes.length - 6; i++) {
    output.childNodes[i].style.display = "none";
  }
}

function show_log() {
  for (i = 0; i < output.childNodes.length; i++) {
    output.childNodes[i].style.display = "block";
  }
}
//////////////////////////////////////////////ignore up to here
