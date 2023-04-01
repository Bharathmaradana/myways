let strings = "";
let m = 0,
  d = 0;

const submit_1 = () => {
  console.log("something");
  let r = document.getElementById("inp3").innerText;
  console.log(r);
};
const submit = () => {
  let r = document.getElementById("inp3").value;
  r = parseInt(r);
  let sum = 0;
  while (r) {
    sum += r % 10;
    r = r / 10;
  }
  let p = "";
  for (let i = 1; i <= sum; i++) {
    m++;
    d++;
    if (m == 3) {
      strings += "fizz";
      m = 0;
    }
    if (d == 4) {
      strings += "Buzz";
      d = 0;
    }
    if (strings.length == 0) {
      p = p + i + 1;

      console.log(strings);
    } else {
      p = p + strings;
    }
    console.log(p);

    document.getElementById("inp4").innerHTML = p;

    strings = "";
  }
};
