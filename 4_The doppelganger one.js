// 4. The doppelganger one

const champs = ["Thomas", "Nancy", "Roger", "Thomas", "Lucy"];
const newChamps = Array.from(new Set(champs));
console.log(newChamps);


// alternatively, this works as well:

const champs = ["Thomas", "Nancy", "Roger", "Thomas", "Lucy"];
const pushSingles = (el, index) => {
  let position;
  if (champs.indexOf(el) !== champs.lastIndexOf(el)) {
    position = champs.lastIndexOf(el);
  }
  if (index === position) {
    return;
  } else {
    return el;
  }
};
const champsWithoutRep = champs.filter(pushSingles);
console.log(champsWithoutRep);