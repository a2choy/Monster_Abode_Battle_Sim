function attack_helper(attacker, defender) {
  //***************************************************************//
  //acc = (attacker.agi - defender.agi) / 2; //accuracy formula
  //***************************************************************//
  //acc = base_acc + acc;
  //acc = Math.round(acc);

  //acc_check = get_random_int(100) + 1; //check if hit //this might be wrong actually
  values = status_effects_start_calc(attacker, defender);

  acc_bool = false; //for lucky testing tbd
  luck = values.get("luck1") - values.get("luck2");
  for (i = 1; i < luck; i++) {
    acc_bool =
      acc_bool ||
      get_acc_check(values.get("agi1"), values.get("agi2"), base_acc);
  }

  if (!acc_bool) {
    var tmp = document.createElement("p");
    if (turn) {
      tmp.style.color = "green";
    } else {
      tmp.style.color = "blue";
    }
    tmp.innerHTML = attacker.name + " missed";
    output.appendChild(tmp);
  } else {
    /*dmg = get_random_int(dmg_max - dmg_min + 1) + dmg_min;
      def = get_random_int(def_max - def_min + 1) + def_min;*/

    //***************************************************************//
    //dmg = (attacker.pow / 100) * dmg - defender.def / 2; //the dmg formula you can change
    //***************************************************************//

    //dmg = Math.round(dmg);
    crit = get_crit_check(values.get("spd1"), values.get("keen1"));

    if (values.get("parry2")) {
      if (get_acc_check(0, 0, 60)) {
        var tmp = document.createElement("p");
        if (turn) {
          tmp.style.color = "green";
        } else {
          tmp.style.color = "blue";
        }
        tmp.innerHTML = attacker.name + "'s attack was parried<br>";
        if (values.get("air2") >= 2.0) {
          get_runes(defender, 1, tmp);
        }
        output.appendChild(tmp);
        status_effects_end_calc(attacker, defender);
        return;
      }
    }

    base_dmg = get_random_range(dmg_min, dmg_max);
    dmg = Math.round((base_dmg * values.get("pow1")) / values.get("def2"));
    if (luck >= 0) {
      for (i = 1; i < luck; i++) {
        base_dmg = get_random_range(dmg_min, dmg_max);
        dmg = Math.max(
          dmg,
          Math.round((base_dmg * values.get("pow1")) / values.get("def2"))
        );
      }
    } else {
      for (i = 1; i < Math.abs(luck); i++) {
        base_dmg = get_random_range(dmg_min, dmg_max);
        dmg = Math.min(
          dmg,
          Math.round((base_dmg * values.get("pow1")) / values.get("def2"))
        );
      }
    }
    if (crit) {
      if (values.get("bruised2")) {
        dmg *= 2.0;
      } else {
        dmg *= 1.5;
      }
      dmg = Math.round(dmg);
    }

    if (values.get("counter2")) {
      if (get_acc_check(0, 0, 20)) {
        var tmp = document.createElement("p");
        if (turn) {
          tmp.style.color = "green";
        } else {
          tmp.style.color = "blue";
        }
        if (crit) {
          tmp.innerHTML =
            attacker.name +
            "'s attack was critically countered for " +
            dmg +
            " dmg<br>";
        } else {
          tmp.innerHTML =
            attacker.name + "'s attack was countered for " + dmg + " dmg<br>";
        }
        if (values.get("air2") >= 2.0) {
          get_runes(defender, 1, tmp);
        }
        output.appendChild(tmp);
        attacker.hp -= dmg;
        update_hp();
        if (attacker.hp <= 0) {
          tmp = document.createElement("p");
          tmp.style.color = "yellow";
          tmp.innerHTML = defender.name + " wins!";
          output.appendChild(tmp);
        }
        status_effects_end_calc(attacker, defender);
        return;
      }
    }

    var tmp = document.createElement("p");
    if (turn) {
      tmp.style.color = "green";
    } else {
      tmp.style.color = "blue";
    }
    if (crit) {
      tmp_text = attacker.name + " critically hits for " + dmg + " dmg<br>";
    } else {
      tmp_text = attacker.name + " hits for " + dmg + " dmg<br>";
    }
    clone_dmg = Math.round(dmg * (0.4 * values.get("clone1")));
    if (values.get("clone1") > 0) {
      tmp_text +=
        values.get("clone1") + " clone(s) hit for " + clone_dmg + " dmg<br>";
    }
    tmp.innerHTML = tmp_text;
    get_runes(attacker, rune_per_attack, tmp);

    defender.hp -= dmg + clone_dmg;
    update_hp();
    if (defender.hp <= 0) {
      tmp = document.createElement("p");
      tmp.style.color = "yellow";
      tmp.innerHTML = attacker.name + " wins!";
      output.appendChild(tmp);
    }
  }

  status_effects_end_calc(attacker, defender);
}

function attack() {
  if (turn) {
    attack_helper(monster1, monster2);
  } else {
    attack_helper(monster2, monster1);
  }

  update_turn();
  turn_color();
  cull_output();
}

function magic_helper(attacker, defender, cur) {
  values = status_effects_start_calc(attacker, defender);

  if (values.get("silence1")) {
    tmp = document.createElement("p");
    tmp.style.color = "red";
    tmp.innerHTML = attacker.name + " is silenced";
    output.appendChild(tmp);
    return;
  }

  str = "";
  for (i = 0; i < cur.length; i++) {
    str += cur[i];
  }
  str = str
    .split("")
    .sort((a, b) => a.localeCompare(b))
    .join("");

  if (!magic_spells.has(str)) {
    var tmp = document.createElement("p");
    tmp.style.color = "red";
    tmp.innerHTML = "Wrong combination... poof!<br>";
    get_runes(attacker, runes_per_poof, tmp);
    len = cur.length;
    for (i = 0; i < len; i++) {
      cur.pop();
    }
    return;
  }
  magic_spells.get(str)(attacker, defender, values);

  len = cur.length;
  for (i = 0; i < len; i++) {
    cur.pop();
  }

  update_runes();
  status_effects_end_calc(attacker, defender);
  update_turn();
}

function magic() {
  if (turn) {
    if (curr_runes1.length < 3) {
      var tmp = document.createElement("p");
      tmp.style.color = "red";
      tmp.innerHTML = "Must use at least 3 runes";
      output.appendChild(tmp);
      return;
    }
    magic_helper(monster1, monster2, curr_runes1);
  } else {
    if (curr_runes2.length < 3) {
      var tmp = document.createElement("p");
      tmp.style.color = "red";
      tmp.innerHTML = "Must use at least 3 runes";
      output.appendChild(tmp);
      return;
    }
    magic_helper(monster2, monster1, curr_runes2);
  }
  update_hp();

  turn_color();
  cull_output();
}

function pass_helper(mon, defender) {
  var tmp = document.createElement("p");
  if (turn) {
    tmp.style.color = "green";
  } else {
    tmp.style.color = "blue";
  }
  for (i = 1; i < rune_per_pass + 1; i++) {
    switch (document.getElementById("rune_pass" + i).value) {
      case "F":
        mon.fire++;
        tmp.innerHTML += mon.name + " got a fire rune<br>";
        break;
      case "E":
        mon.earth++;
        tmp.innerHTML += mon.name + " got a earth rune<br>";
        break;
      case "A":
        mon.air++;
        tmp.innerHTML += mon.name + " got a air rune<br>";
        break;
      case "W":
        mon.water++;
        tmp.innerHTML += mon.name + " got a water rune<br>";
        break;
      case "V":
        mon.void++;
        tmp.innerHTML += mon.name + " got a void rune<br>";
        break;
      default:
        break;
    }
  }
  output.appendChild(tmp);
  update_rune_count();

  status_effects_end_calc(mon, defender);
}

function pass() {
  if (turn) {
    pass_helper(monster1, monster2);
  } else {
    pass_helper(monster2, monster1);
  }

  update_turn();
  turn_color();
  cull_output();
}

function force_helper(attacker, defender, runes) {
  values = status_effects_start_calc(attacker, defender);
  magic_spells.get(runes)(attacker, defender, values);

  status_effects_end_calc(attacker, defender);
}

function force() {
  if (turn) {
    force_helper(
      monster1,
      monster2,
      document.getElementById("all_runes").value
    );
  } else {
    force_helper(
      monster2,
      monster1,
      document.getElementById("all_runes").value
    );
  }
  update_hp();
  update_turn();
  turn_color();
  cull_output();
}
