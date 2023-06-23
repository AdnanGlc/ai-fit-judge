
import { atom } from 'jotai'
export const Zadaci = atom([
  {
    zadatakID: "1",
    imeZadatka: "Paran ili Neparan",
    tekstZadatka:
      "Napisi program koji ispituje da li je broj paran ili neparan",
    usloviZadatka: "Zabranjeno koristiti % za testiranje parnosti",
    slika: "",
    podudarnost: "ispravna",
    vidljivost: "vidljiv",
    vremenskoOgranicenje: "2000", //ms
    istekZadatka: "2019-06-11T00:00",
    testPrimjeri: [
      { ulaz: "12", izlaz: "Paran" },
      { ulaz: "-1", izlaz: "Neparan" },
      { ulaz: "12412", izlaz: "Paran" },
    ],
    skriveniTestPrimjeri: [
      { ulaz: "1", izlaz: "Neparan" },
      { ulaz: "5", izlaz: "Neparan" },
      { ulaz: "-4", izlaz: "Paran" },
    ],
  },
  {
    zadatakID: "2",
    imeZadatka: "Najveci broj",
    tekstZadatka:
      "Napisi program koji trazi od korisnika unos 3 broja i ispisuje najveci broj",
    usloviZadatka: "Zabranjeno koristiti funkciju max()",
    slika: "",
    podudarnost: "ispravna",
    vidljivost: "vidljiv",
    vremenskoOgranicenje: "2000", //ms
    istekZadatka: "2019-06-11T00:00",
    testPrimjeri: [
      { ulaz: "12 23 33", izlaz: "33" },
      { ulaz: "-1 -123 -124", izlaz: "-1" },
      { ulaz: "0 0 0", izlaz: "0" },
    ],
    skriveniTestPrimjeri: [
      { ulaz: "1 2 3", izlaz: "3" },
      { ulaz: "5 5 5", izlaz: "5" },
      { ulaz: "5.51 5.50 5", izlaz: "5.51" },
    ],
  },
  {
    zadatakID: "3",
    imeZadatka: "Fibbonaci",
    tekstZadatka:
      "Napisi program koji trazi od korisnika unos broja n, zatim ispisuje n-ti fibbunacijev broj",
    usloviZadatka:
      "Mora se koristiti rekurzija\nUkoliko se desio owerflow nad intom vratiti '0'",
    slika: "",
    podudarnost: "ispravna",
    vidljivost: "nevidljiv",
    vremenskoOgranicenje: "2000", //ms
    istekZadatka: "2019-07-11T00:00",
    testPrimjeri: [
      { ulaz: "1", izlaz: "1" },
      { ulaz: "0", izlaz: "1" },
      { ulaz: "9", izlaz: "55" },
    ],
    skriveniTestPrimjeri: [
      { ulaz: "70", izlaz: "0" },
      { ulaz: "2", izlaz: "2" },
      { ulaz: "42", izlaz: "433494437" },
    ],
  },
  {
    zadatakID: "4",
    imeZadatka: "Palindromni zbir",
    tekstZadatka:
      "Omogučiti unos dva broja X i Y iz intervala od 10 do 5000. Kreirati program koji će pronaći i ispisati sve brojeve od X do Y (uključujući granične vrijednosti) za koje važi da je obrnuti broj djeljiv sa njegovom sumom cifara. Za olakšanje rješenja zadataka napraviri funkcije za obrtanje poretka cifara i za sumu cifara. Npr. Za broj 144 vrijedi da mu je suma cifara 9 i da je broj koji se dobije nakon što se njegove cifre obrnu 441, djeljiv sa 9.",
    usloviZadatka:
      "Zabranjeno koristiti pomocne biblioteke\nZabranjeno obrnuti broj uz pomoc stringova",
    kodZadatka:"",
    slika: "",
    podudarnost: "identicna",
    vidljivost: "vidljiv",
    vremenskoOgranicenje: "2000", //ms
    istekZadatka: "2019-06-11T00:00",
    testPrimjeri: [
      {
        ulaz: "11 150",
        izlaz:
          "12 18 20 21 24 27 30 36 40 42 45 48 50 54 60 63 70 72 80 81 84 90 100 102 108 111 115 117 120 126 135 144 ",
      },
      {
        ulaz: "11 150",
        izlaz:
          "12 18 20 21 24 27 30 36 40 42 45 48 50 54 60 63 70 72 80 81 84 90 100 102 108 111 115 117 120 126 135 144 ",
      },
      {
        ulaz: "11 150",
        izlaz:
          "12 18 20 21 24 27 30 36 40 42 45 48 50 54 60 63 70 72 80 81 84 90 100 102 108 111 115 117 120 126 135 144 ",
      },
    ],
    skriveniTestPrimjeri: [
      {
        ulaz: "11 150",
        izlaz:
          "12 18 20 21 24 27 30 36 40 42 45 48 50 54 60 63 70 72 80 81 84 90 100 102 108 111 115 117 120 126 135 144 ",
      },
      {
        ulaz: "11 150",
        izlaz:
          "12 18 20 21 24 27 30 36 40 42 45 48 50 54 60 63 70 72 80 81 84 90 100 102 108 111 115 117 120 126 135 144 ",
      },
      {
        ulaz: "11 150",
        izlaz:
          "12 18 20 21 24 27 30 36 40 42 45 48 50 54 60 63 70 72 80 81 84 90 100 102 108 111 115 117 120 126 135 144 ",
      },
    ],
  },
  {
    zadatakID: "5",
    imeZadatka: "Trougao",
    tekstZadatka:
      "Traziti od korisnika da unese broj n, zatim iscrtati trougao visine n",
    usloviZadatka: 'Iskljucivo koristiti znak "#"',
    slika: "",
    podudarnost: "identicna",
    vidljivost: "vidljiv",
    vremenskoOgranicenje: "2000", //ms
    istekZadatka: "2019-06-11T00:00",
    testPrimjeri: [
      {
        ulaz: "3",
        izlaz: `  #
 # #
#####`,
      },
      {
        ulaz: "4",
        izlaz: `   #
  # #
 #   #
#######`,
      },
      {
        ulaz: "1",
        izlaz: `#`,
      },
    ],
    skriveniTestPrimjeri: [
      {
        ulaz: "0",
        izlaz: "",
      },
      {
        ulaz: "-1",
        izlaz: "",
      },
      {
        ulaz: "7",
        izlaz: `      #
     # #
    #   #
   #     #
  #       #
 #         #
#############`,
      },
    ],
  },
]);

export const odabraniZadatak = atom({});
//kodovi
/*

zadatak 4:
#include<iostream>
using namespace std;
int fibo(int a)
{
  if(a==1 || a==0)return 1;
  else{
    int temp= fibo(a-1) + fibo(a-2);
    if(temp<0)return 0;
    else return temp;
  }
}
int main()
{
  int a;cin>>a;
  cout<<fibo(a);
  return 0;
}
zadatak 4 (bez sa neispravnim uslovima):
#include<iostream>
using namespace std;
int main()
{
  int n;cin>>n;
  int a=1,b=1,c=1;
  for(int i=2;i<=n;i++)
  {
      a=b+c;
      c=b;
      b=a;
  }
  cout<<a;
  return 0;
}
zadatak 5:
#include <iostream>

using namespace std;

int main()
{
    int n,k=0;cin>>n;
    for(int i=0;i<n-1;i++)
    {
        for(int j=0;j<n-k-1;j++)cout<<" ";
        cout<<"#";
        if(i)
        {
            for(int j=0;j<k*2-1;j++)cout<<" ";
            cout<<"#";
        }
        cout<<endl;
        k++;
    }
    for(int i=0;i<2*n-1;i++)cout<<"#";
    return 0;
}


*/
