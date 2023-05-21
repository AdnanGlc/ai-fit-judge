import React from "react";
import { Configuration, OpenAIApi } from "openai";
import { useState } from "react";

const Testiranje = () => {
  const configuration = new Configuration({
    apiKey: `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`,
  });
  const openai = new OpenAIApi(configuration);
  const [storedValues, setStoredValues] = useState([]);
  const [newQuestion, setNewQuestion] = useState("");
  const copyText = (text) => {
    navigator.clipboard.writeText(text);
  };
  const generateResponse = async (newQuestion, setNewQuestion) => {
    let options = {
      model: "text-davinci-003",
      temperature: 0,
      max_tokens: 100,
      top_p: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      stop: ["/"],
    };

    let completeOptions = {
      ...options,
      prompt: `Kao da si sudija za programske zadatke i mozes odgovoriti samo sa "da" ili "ne", odgovori sa "ne" ako kod ne ispunjava uslove ili ako nije ispravan
      zadatak: traziti od korisnika da unese broj te ispisati da li je broj paran ili neparan\n
      uslovi: zabranjeno koristenje % za ispitivanje parnosti\n
      kod:\n${newQuestion}`,
    };

    const response = await openai.createCompletion(completeOptions);

    if (response.data.choices) {
      setStoredValues([
        {
          question: newQuestion,
          answer: response.data.choices[0].text,
        },
        ...storedValues,
      ]);
      setNewQuestion("");
    }
  };
  return (
    <div>
      <div className="w-1/2">
        <p>
          zadatak: traziti od korisnika da unese broj te ispisati da li je broj
          paran ili neparan <br></br>uslovi: zabranjeno koristenje %
        </p>
        <textarea
          className="w-full h-8 m-10"
          placeholder="Ask me anything..."
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
        ></textarea>
        <button
          className="ml-10"
          onClick={() => generateResponse(newQuestion, setNewQuestion)}
        >
          Generate Response 🤖
        </button>
      </div>
      <div className="answer-container">
        {storedValues.map((value, index) => {
          return (
            <div className="w-1/2 m-10 bg-slate-200" key={index}>
              <p className="question">{value.question}</p>
              <p className="answer">{value.answer}</p>
              <div className="copy-icon" onClick={() => copyText(value.answer)}>
                <i className="fa-solid fa-copy"></i>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testiranje;
