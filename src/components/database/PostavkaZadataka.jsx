export const Zadaci = [
  {
    zadatakID: "1",
    imeZadatka: "Paran ili Neparan",
    tekstZadatka:
      "Napisi program koji ispituje da li je broj paran ili neparan",
    usloviZadatka: "Zabranjeno koristiti % za testiranje parnosti",
    slika: "",
    podudarnost: "ispravna",
    vidljivost: "vidljiv",
    vremeskoOgranicenje: "2000", //ms
    istekZadatka: "10-05-2023",
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
    zadatakID: "6",
    imeZadatka: "Hello world",
    tekstZadatka: "Napisi program koji ispisuje poruku Hello World!",
    usloviZadatka: "U kodu mora biti komentar FIT-Mostar",
    slika: "",
    podudarnost: "ispravna",
    vidljivost: "vidljiv",
    vremeskoOgranicenje: "2000", //ms
    istekZadatka: "10-05-2023",
    testPrimjeri: [
      { ulaz: "", izlaz: "Hello World!" },
      { ulaz: "", izlaz: "Hello World!" },
      { ulaz: "", izlaz: "Hello World!" },
    ],
    skriveniTestPrimjeri: [
      { ulaz: "", izlaz: "Hello World!" },
      { ulaz: "", izlaz: "Hello World!" },
      { ulaz: "", izlaz: "Hello World!" },
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
    vremeskoOgranicenje: "2000", //ms
    istekZadatka: "10-05-2023",
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
    vidljivost: "vidljiv",
    vremeskoOgranicenje: "2000", //ms
    istekZadatka: "10-05-2023",
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
    imeZadatka: "Procenat prostih",
    tekstZadatka: `Traziti od korisnika da u niz spremi 100 nasumicnih brojeva od 1-100000 koji imaju nepran broj cifara, te ispisati koliko je procenat generisanja prostih brojeva`,
    usloviZadatka:
      "Mora postojati logika koja omogućuje ponavljanje generisanja brojeva sve dok nemaju neparan broj cifara",
    slika: "",
    podudarnost: "ispravna",
    vidljivost: "vidljiv",
    vremeskoOgranicenje: "2000", //ms
    istekZadatka: "10-05-2023",
    testPrimjeri: [
      {
        ulaz: "",
        izlaz: "",
      },
      {
        ulaz: "",
        izlaz: "",
      },
      {
        ulaz: "",
        izlaz: "",
      },
    ],
    skriveniTestPrimjeri: [
      {
        ulaz: ".",
        izlaz: ".",
      },
      {
        ulaz: ".",
        izlaz: ".",
      },
      {
        ulaz: ".",
        izlaz: ".",
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
    vremeskoOgranicenje: "2000", //ms
    istekZadatka: "10-05-2023",
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
];
//kodovi
/*

zadatak 4: fibbonaci
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
zadatak 4 (sa neispravnim uslovima):
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
zadatak 5: trougao
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

zadatak: prosti brojevi
#include<iostream>
#include<ctime>
using namespace std;
bool sito[100001];
void eratostenovoSito()
{
    for(int i=0;i<100000;i++)sito[i]=true;
    for (int p = 2; p * p <=100000 ; p++)
		if (sito[p] == true)
			for (int i = p * p; i <= 100000; i += p)
				sito[i] = false;
}
int main()
{
  srand(time(NULL));
  eratostenovoSito();
  int *niz= new int[100];
  for(int i=0;i<100;i++)
  {
      int r;
      do{
          r=rand()%100000+1;
      }while(to_string(r).length()%2==0);
      niz[i] = r;
  }
  int brojac=0;
  for(int i=0;i<100;i++)
  if(sito[niz[i]]){
      brojac++;
      cout<<niz[i]<<endl;
  }
  cout<<"Postotak generisanja prostih brojeva: "<<brojac<<endl;
  return 0;
}


*/
