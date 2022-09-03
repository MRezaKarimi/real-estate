"use strict";

export default function numToMoney(number) {
  var str = String(number);
  var money = "";
  var i = str.length;

  while (i > 0) {
    money = "," + str.substring(i - 3, i) + money;
    i -= 3;
  }

  return money.substring(1);
}
