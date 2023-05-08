import React, { useState, useEffect } from "react";
import { Editor } from "@monaco-editor/react";

const ZadatakContent = ({ Zadaci, zadatakIndex }) => {
  //-------------- zadaci --------------//
  const [tpIndex, setTpIndex] = useState(0); //test primer index
  const [prikazContent, setPrikazContent] = useState(
    Zadaci[0].tekstZadatka || ""
  );
  const promijeniPrikaz = (p) => {
    if (p === "tekstZadatka")
      setPrikazContent(Zadaci[zadatakIndex].tekstZadatka || "");
    else setPrikazContent(Zadaci[zadatakIndex].usloviZadatka || "");
  };
  // //-------------- ai api --------------//
  // const [obrada, setObrada] = useState(false);
  // const [messages, setMessages] = useState([]);
  // const API_KEY = "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";

  // const handleSend = async (message) => {
  //   const newMessage = {
  //     message: message,
  //     sender: "user",
  //   };
  //   //upade messages state
  //   const newMessages = [...messages, newMessage];
  //   setMessages(newMessages);
  //   //process messages state
  //   await processMessageToChatGPT(newMessage);
  // };
  // async function processMessageToChatGPT(chatMessage) {
  //   let apiMessage = {
  //     role: chatMessage.sender === "ChatGPT" ? "asistant" : "user",
  //     content: chatMessage.message,
  //   };
  //   const systemMessage = {
  //     role: "system",
  //     content:
  //       "Ponasaj se kao sudija za pregledanje koda i mozes odgovoriti samo sa 'Da' ili 'Ne'\n" +
  //       "Za ovaj zadatak:" +
  //       Zadaci[zadatakIndex].tekstZadatka +
  //       "\nI za ovaj input:" +
  //       Zadaci[zadatakIndex].testPrimjeri[tpIndex].ulaz +
  //       "\nOvo je trazeni output: " +
  //       Zadaci[zadatakIndex].testPrimjeri[tpIndex].izlaz +
  //       "da li je ovaj kod daje ispravan ispis, ispis ne mora da bude identican: ",
  //   };
  //   const apiRequestBody = {
  //     model: "gpt-3.5-turbo",
  //     messages: [systemMessage, apiMessage],
  //   };
  //   await fetch("https://api.openai.com/v1/chat/completions", {
  //     method: "POST",
  //     headers: {
  //       Authorization: "Bearer " + API_KEY,
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(apiRequestBody),
  //   })
  //     .then((data) => {
  //       return data.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //     });
  // }
  //kod zadataka//
  useEffect(() => {
    promijeniPrikaz("tekstZadatka");
  }, [zadatakIndex]);
  const [kod, setKod] = useState("");
  return (
    <div className="w-[75%] bg-white h-auto min-h-[85%] pt-4 m-5 rounded-md flex flex-wrap">
      {console.log(Zadaci)}
      {console.log("Zadaci iz zadatak content")}
      <h3 className="w-full text-center text-xl">
        {Zadaci[zadatakIndex].imeZadatka}
      </h3>
      {/*---------------CODE EDITOR--------------- */}
      <div className="bg-slate-300 m-[1%] w-[30%] p-2 h-auto min-h-[700px] min-w-[350px] relative">
        <p className="pl-2">Kod zadatka:</p>
        <Editor language="cpp" className="h-[500px] w-[325px] p-1 " />
        <button className="w-[90%] left-[5%] bg-blue-100 border-2 border-slate-500 hover:opacity-70 absolute bottom-28">
          Testiraj kod
        </button>
        {/* ............rezultati............ */}
        <div className="w-[90%] left-[5%] h-[30px] bg-white mt-3 mb-4 flex absolute bottom-14 ">
          <div className="border-2 border-slate-500 h-full w-1/3 text-center bg-green-500">
            test primjer 1
          </div>
          <div className="border-2 border-slate-500 h-full w-1/3 text-center bg-green-500">
            test prijer 2
          </div>
          <div className="border-2 border-slate-500 h-full w-1/3 text-center bg-red-500">
            test prijer 3
          </div>
        </div>
      </div>
      {/* ---------------TEKST I POSTAVKA ZADATKA--------------- */}
      <div className="w-[65%] bg-slate-200 min-h-[88%] h-auto m-3">
        <button
          className="m-[1%] border-2 border-slate-500 p-2 rounded-md hover:opacity-80 hover:bg-blue-200"
          onClick={() => promijeniPrikaz("tekstZadatka")}
        >
          Tekst zadatka
        </button>
        <button
          className="m-[1%] border-2 border-slate-500 p-2 rounded-md hover:opacity-80 hover:bg-blue-200"
          onClick={() => promijeniPrikaz("usloviZadatka")}
        >
          Uslovi zadatka
        </button>
        <button
          className="m-[1%] border-2 border-slate-500 p-2 rounded-md hover:opacity-80 hover:bg-blue-200"
          onClick={() => promijeniPrikaz("slika")}
        >
          Slike
        </button>
        <textarea
          readOnly={true}
          value={prikazContent}
          className="ml-[1%] w-[98%] h-[54%]"
        ></textarea>
        {/* ..............Test primjeri.............. */}
        <div>
          <button
            className="ml-[19.5%] bg-blue-500 p-1 rounded-md w-[30%] text-white hover:opacity-90 hover:text-bold"
            onClick={() => setTpIndex((3 + tpIndex - 1) % 3)}
          >
            Prethodni test primjer
          </button>
          <button
            className="ml-[1%] bg-blue-500 p-1 rounded-md w-[30%] text-white hover:opacity-90"
            onClick={() => setTpIndex((tpIndex + 1) % 3)}
          >
            Slijedeci test primjer
          </button>
          <p className="pl-[1%]">Ulazni podaci:</p>
          <textarea
            readOnly={true}
            value={Zadaci[zadatakIndex].testPrimjeri[tpIndex].ulaz}
            className="w-[98%] m-1  bg-blue-200 rounded-md"
          ></textarea>
          <p className="pl-[1%]">Izlaz:</p>
          <textarea
            readOnly={true}
            value={Zadaci[zadatakIndex].testPrimjeri[tpIndex].izlaz}
            className="w-[98%] m-1 bg-blue-200 rounded-md"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default ZadatakContent;
