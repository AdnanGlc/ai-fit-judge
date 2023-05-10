export const Zadaci = [
  {
    imeZadatka: "Paran ili Neparan",
    tekstZadatka:
      "Napisi program koji ispituje da li je broj paran ili neparan",
    usloviZadatka: "Zabranjeno koristiti %\nZabranjeno koristiti for petlju",
    slika: "",
    podudarnost: "identicna",
    vidljivost: "vidljiv",
    vremeskoOgranicenje: "2000", //ms
    istekZadatka: "10-05-2023",
    testPrimjeri: [
      { ulaz: "Unesite broj:\n12", izlaz: "Paran" },
      { ulaz: "-1", izlaz: "Neparan" },
      { ulaz: "12412", izlaz: "Paran" },
    ],
    skriveniTestPrimjeri: [
      { ulaz: "1", izlaz: "Neparan" },
      { ulaz: "5", izlaz: "Paran" },
      { ulaz: "-4", izlaz: "Paran" },
    ],
  },
  {
    imeZadatka: "Najveci broj",
    tekstZadatka:
      "Napisi program koji trazi od korisnika unos 3 broja i ispisuje najveci broj",
    usloviZadatka: "Zabranjeno koristiti funkciju max()",
    slika: "",
    podudarnost: "identicna",
    vidljivost: "vidljiv",
    vremeskoOgranicenje: "2000", //ms
    istekZadatka: "10-05-2023",
    testPrimjeri: [
      { ulaz: "Unesite brojeve:\n12 23 33", izlaz: "33" },
      { ulaz: "-1 -123 -124", izlaz: "-1" },
      { ulaz: "0 0 0", izlaz: "0" },
    ],
    skriveniTestPrimjeri: [
      { ulaz: "4.7 5 5.5", izlaz: "5.5" },
      { ulaz: "5.51 5.50 5", izlaz: "5.51" },
      { ulaz: "1 2 3", izlaz: "3" },
    ],
  },
  {
    imeZadatka: "Fibbonaci",
    tekstZadatka:
      "Napisi program koji trazi od korisnika unos broja n, zatim ispisuje n-ti fibbunacijev broj",
    usloviZadatka:
      "Mora se koristiti rkurzija\nUkoliko se desio owerflow nad intom vratiti '0'",
    slika: "",
    podudarnost: "identicna",
    vidljivost: "vidljiv",
    vremeskoOgranicenje: "2000", //ms
    istekZadatka: "10-05-2023",
    testPrimjeri: [
      { ulaz: "1", izlaz: "1" },
      { ulaz: "5", izlaz: "5" },
      { ulaz: "9", izlaz: "34" },
    ],
    skriveniTestPrimjeri: [
      { ulaz: "70", izlaz: "0" },
      { ulaz: "2", izlaz: "1" },
      { ulaz: "42", izlaz: "267914296" },
    ],
  },
  {
    imeZadatka: "Palindromni zbir",
    tekstZadatka:
      "Omogučiti unos dva broja X i Y iz intervala od 10 do 5000. Kreirati program koji će pronaći i ispisati sve brojeve od X do Y (uključujući granične vrijednosti) za koje važi da je obrnuti broj djeljiv sa njegovom sumom cifara. Za olakšanje rješenja zadataka napraviri funkcije za obrtanje poretka cifara i za sumu cifara. Npr. Za broj 144 vrijedi da mu je suma cifara 9 i da je broj koji se dobije nakon što se njegove cifre obrnu 441, djeljiv sa 9.",
    usloviZadatka:
      "Zabranjeno koristiti pomocne biblioteke\nZabranjeno obrnuti broj uz pomoc stringova",
    slika: "",
    podudarnost: "identicna",
    vidljivost: "vidljiv",
    vremeskoOgranicenje: "2000", //ms
    istekZadatka: "10-05-2023",
    testPrimjeri: [
      { ulaz: "11 150", izlaz: "18 20 21 24 27" },
      { ulaz: "11 150", izlaz: "18 20 21 24 27" },
      { ulaz: "11 150", izlaz: "18 20 21 24 27" },
    ],
    skriveniTestPrimjeri: [
      { ulaz: "11 150", izlaz: "18 20 21 24 27" },
      { ulaz: "11 150", izlaz: "18 20 21 24 27" },
      { ulaz: "11 150", izlaz: "18 20 21 24 27" },
    ],
  },
];
