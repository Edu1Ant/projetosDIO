let nome = "Kojima";
let xp = 6000;
let niveis = [
  "Ferro",
  "Bronze",
  "Prata",
  "Ouro",
  "Platina",
  "Ascendente",
  "Imortal",
  "Radiante",
];

if (xp <= 1000) {
  console.log(`O Herói de nome ${nome} está no nível de ${niveis[0]}`);
} else if (xp > 1000 && xp <= 2000) {
  console.log(`O Herói de nome ${nome} está no nível de ${niveis[1]}`);
} else if (xp > 2000 && xp <= 5000) {
  console.log(`O Herói de nome ${nome} está no nível de ${niveis[2]}`);
} else if (xp > 6000 && xp <= 7000) {
  console.log(`O Herói de nome ${nome} está no nível de ${niveis[3]}`);
} else if (xp > 7000 && xp <= 8000) {
  console.log(`O Herói de nome ${nome} está no nível de ${niveis[4]}`);
} else if (xp > 8000 && xp <= 9000) {
  console.log(`O Herói de nome ${nome} está no nível de ${niveis[5]}`);
} else if (xp > 9000 && xp <= 10000) {
  console.log(`O Herói de nome ${nome} está no nível de ${niveis[6]}`);
} else if (xp > 10000) {
  console.log(`O Herói de nome ${nome} está no nível de ${niveis[7]}`);
}
