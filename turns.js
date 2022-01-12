function attack_helper(attacker, defender) {
  //***************************************************************//
  //acc = (attacker.agi - defender.agi) / 2; //accuracy formula
  //***************************************************************//
  //acc = base_acc + acc;
  //acc = Math.round(acc);

  //acc_check = get_random_int(100) + 1; //check if hit //this might be wrong actually
  values = status_effects_start_calc(attacker, defender);

  acc_bool = false; //for lucky testing tbd

  if (!get_acc_check(values.get("agi1"), values.get("agi2"), base_acc)) {
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
    if (values.get("parry2")) {
      if (get_acc_check(0, 0, 60)) {
        var tmp = document.createElement("p");
        if (turn) {
          tmp.style.color = "green";
        } else {
          tmp.style.color = "blue";
        }
        tmp.innerHTML = attacker.name + "'s attack was parried<br>";
        output.appendChild(tmp);
        status_effects_end_calc(attacker);
        return;
      }
    }

    dmg = Math.round(
      (get_random_range(dmg_min, dmg_max) * values.get("pow1")) /
        values.get("def1")
    );

    if (values.get("counter2")) {
      if (get_acc_check(0, 0, 20)) {
        var tmp = document.createElement("p");
        if (turn) {
          tmp.style.color = "green";
        } else {
          tmp.style.color = "blue";
        }
        tmp.innerHTML = attacker.name + "'s attack was countered for " + dmg + " dmg<br>";
        output.appendChild(tmp);
        attacker.hp -= dmg;
        update_hp();
        if (attacker.hp <= 0) {
          tmp = document.createElement("p");
          tmp.style.color = "yellow";
          tmp.innerHTML = defender.name + " wins!";
          output.appendChild(tmp);
        }
        status_effects_end_calc(attacker);
        return;
      }
    }
    

    var tmp = document.createElement("p");
    if (turn) {
      tmp.style.color = "green";
    } else {
      tmp.style.color = "blue";
    }
    tmp_text = attacker.name + " hits for " + dmg + " dmg<br>";
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

  status_effects_end_calc(attacker);
}

function attack() {
  if (turn) {
    attack_helper(monster1, monster2);
  } else {
    attack_helper(monster2, monster1);
  }
  turn = !turn;
  cull_output();
}

function magic_helper(attacker, defender, cur) {
  values = status_effects_start_calc(attacker, defender);

  if (cur.length < 3) {
    var tmp = document.createElement("p");
    tmp.style.color = "red";
    tmp.innerHTML = "Must use at least 3 runes";
    output.appendChild(tmp);
    turn = !turn;
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
    turn = !turn;
    return;
  }
  magic_spells.get(str)(attacker, defender, values);

  len = cur.length;
  for (i = 0; i < len; i++) {
    cur.pop();
  }

  update_runes();

  status_effects_end_calc(attacker);
}

function magic() {
  if (turn) {
    magic_helper(monster1, monster2, curr_runes1);
  } else {
    magic_helper(monster2, monster1, curr_runes2);
  }
  update_hp();
  turn = !turn;
  cull_output();
}

function pass_helper(mon) {
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

  status_effects_end_calc(mon);
}

function pass() {
  if (turn) {
    pass_helper(monster1);
  } else {
    pass_helper(monster2);
  }
  turn = !turn;
  cull_output();
}

function force_helper(attacker, defender, runes) {
  values = status_effects_start_calc(attacker, defender);
  magic_spells.get(runes)(attacker, defender, values);

  status_effects_end_calc(attacker);
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
  turn = !turn;
  cull_output();
}
