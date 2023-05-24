export const StudentData = [
  {
    ib: "ib220016",
    password: "123456",
    kodovi: [
      {
        kodID: "1",
        bodovi: "100",
        kod: `
#include<iostream>
using namespace std;
int main()
{
  int a;cin>>a;
  cout<<(a&1?"Neparan":"Paran"); 
  return 0;
}`,
        rezultati: ["Nepran", "Nepran", "Paran"],
        tacnost: "3", //3-tacno, 0-netacno, 1-2-polutacno
      },
      {
        kodID: "1",
        bodovi: "0",
        kod: `
#include<iostream>
using namespace std;
int main()
{
  int a,b,c;cin>>a>>b>>c;
  cout<<max(a,max(b,c));
  return 0;
}`,
        rezultati: ["", "", ""],
        tacnost: "3", //3-tacno, 0-netacno, 1-2-polutacno
      },
      {
        kodID: "1",
        bodovi: "100",
        kod: `#include<iostream>using namespace std;int main(){int a,b,c;cin>>a>>b>>c; cout<<max(a,max(b,c)); return 0;}`,
        rezultati: ["", "", ""],
        tacnost: "3", //3-tacno, 0-netacno, 1-2-polutacno
      },
      {
        kodID: "1",
        bodovi: "100",
        kod: `#include<iostream>using namespace std;int main(){int a,b,c;cin>>a>>b>>c; cout<<max(a,max(b,c)); return 0;}`,
        rezultati: ["", "", ""],
        tacnost: "3", //3-tacno, 0-netacno, 1-2-polutacno
      },
      {
        kodID: "1",
        bodovi: "100",
        kod: `
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
}`,
        rezultati: ["", "", ""],
        tacnost: "3", //3-tacno, 0-netacno, 1-2-polutacno
      },
    ],
  },
];
