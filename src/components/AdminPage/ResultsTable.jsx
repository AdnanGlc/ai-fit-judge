import { Editor } from "@monaco-editor/react";
import React, { useState } from "react";
import { Zadaci } from "../database/PostavkaZadataka";

const ResultsTable = () => {
  const [StudentData, setStudentData] = useState([
    {
      ib: "ib220016",
      password: "123456",
      kodovi: [
        {
          kodID: "1",
          bodovi: 100,
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
          bodovi: 0,
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
          bodovi: 100,
          kod: `#include<iostream>using namespace std;int main(){int a,b,c;cin>>a>>b>>c; cout<<max(a,max(b,c)); return 0;}`,
          rezultati: ["", "", ""],
          tacnost: "3", //3-tacno, 0-netacno, 1-2-polutacno
        },
        {
          kodID: "1",
          bodovi: 100,
          kod: `#include<iostream>using namespace std;int main(){int a,b,c;cin>>a>>b>>c; cout<<max(a,max(b,c)); return 0;}`,
          rezultati: ["", "", ""],
          tacnost: "3", //3-tacno, 0-netacno, 1-2-polutacno
        },
        {
          kodID: "1",
          bodovi: 100,
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
  ]);

  const [message, setMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [bonusBodovi, setBonousBodovi] = useState(0);
  const setBodovi = (studentIndex, taskIndex, bodovi) => {
    setStudentData((prevStudentData) => {
      const updatedStudentData = [...prevStudentData];
      updatedStudentData[studentIndex].kodovi[taskIndex].bodovi =
        bodovi === 0
          ? bodovi
          : parseInt(
              updatedStudentData[studentIndex].kodovi[taskIndex].bodovi
            ) + parseInt(bodovi);
      return updatedStudentData;
    });
    setMessage(`Bodovi ažurirani`);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  const [index, setIndex] = useState([0, 0]);
  const [studentCode, setStudentCode] = useState();
  const loadCode = (i, j) => {
    if (i != 0) return;
    let tempIndex = [i, j];
    setIndex(tempIndex);
    setStudentCode(StudentData[0].kodovi[j].kod);
  };
  const studenti = [];
  for (let i = 0; i < 100; i++) {
    studenti.push(
      <tr key={i}>
        <td
          className="pl-2 border-t-2 w-[20%] min-w-[100px] right-0 sticky"
          key={-1000 + i}
        >
          IB: 2200{i < 10 ? "0" : ""}
          {i}
        </td>
        {Zadaci.map((zadatak, j) => {
          return (
            <td className="text-center border-2 min-w-[150px]" key={1231 + j}>
              <button
                className="w-full h-full hover:bg-[#404040] hover:text-white"
                onClick={() => loadCode(i, j)}
              >
                {i == 0 ? StudentData[0].kodovi[j].bodovi : 0}
              </button>
            </td>
          );
        })}
      </tr>
    );
  }
  return (
    <div className="w-full h-screen bg-white flex flex-wrap space-x-8">
      <h1 className="w-full max-h-[100px] text-center mb-5 p-5 text-2xl font-bold bg-[#353535] text-white">
        Tabela rezultata
      </h1>
      <div className="w-[50%]">
        <p className="m-2 text-[#284B63]">Pretrazi:</p>
        <input
          className="ml-2 pl-1 border-2 border-[#353535] rounded-md"
          placeholder="pretrazite po indeksu"
        ></input>
        <button
          className="float-right bg-[#353535] border-2 border-white text-white p-1 mb-2 
        hover:opacity-90 hover:border-[#353535] hover:bg-[#d9d9d9] hover:text-[#353535]"
        >
          sortiraj po IB/Ukupno bodova
        </button>
        <div className="w-full m-2 h-[86vh] overflow-scroll relative">
          <table className="w-[100%] bg-[#d9d9d9] border-2 border-[#353535]">
            <thead className="h-12 bg-[#353535] text-white sticky top-0 z-50">
              <tr>
                <td className="p-2 w-[200px]">Zadaci:</td>
                {Zadaci.map((zadatak) => {
                  return (
                    <td className="p-2 w-[200px] text-center">
                      {zadatak.imeZadatka}
                    </td>
                  );
                })}
              </tr>
            </thead>
            <tbody>{studenti}</tbody>
          </table>
        </div>
      </div>
      {/* editor */}
      <div className="w-[40%]">
        <div className="flex flex-wrap">
          <button
            className="w-32 h-8 z-50 ml-[10%] bg-red-500 
          text-white hover:opacity-80 font-semibold border-2 border-white"
            onClick={() => setBodovi(index[0], index[1], 0)}
          >
            Ponisti zadatak
          </button>
          <input
            placeholder="Dodaj bodove"
            className="ml-2 pl-2 w-[62%] mb-2 h-8 border-2 border-[#353535] rounded-md"
            type="number"
            min={-100}
            max={100}
            onChange={(e) => setBonousBodovi(e.target.value)}
          ></input>
          <button
            className="w-32 h-8 z-50 ml-[calc(100%-160px)] bg-[#353535] 
          font-semibold text-white hover:opacity-80 border-2 border-white"
            onClick={() => setBodovi(index[0], index[1], bonusBodovi)}
          >
            Dodaj
          </button>
        </div>
        <Editor
          language="cpp"
          theme="light"
          defaultValue=" //kod studenata          
          //mogucnost dodavanja bodova ili
          //ponistavanja zadatka ukoliko uslovi nisu ispunjeni
          //kod studenta se ucitava prilikom klika 
          //na bodove zadatka"
          className="h-[600px] w-[400px] p-1 ml-[10%] m-5 bg-[#353535]"
          value={studentCode}
        ></Editor>
      </div>
      {showAlert && (
        <div className="w-[400px] left-[calc(50%-200px)] z-50 absolute top-1/2 text-center pt-2 bg-[#353535] opacity-95 h-10 text-white ">
          {message}
        </div>
      )}
    </div>
  );
};

export default ResultsTable;
