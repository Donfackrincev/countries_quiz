import Button from "@/components/Button/Button";
import Reponse from "@/components/Button/Reponse";
import { app } from "@/configs/app";
import React from "react";

const QuickModule = () => {
  return (
    <>
      <div className="contenaire">
        <div className="title">
          <p className="contry">Contry quick</p>
        </div>

        {app.questionsList.map((question) => (
          <Button action={() => {}} title={question.title} />
        ))}

        <div className="question">
          <p>Quel est la capitale du cameroun</p>
        </div>

        <button className="texte">
          <p>Yaounde</p>
        </button>

        <button className="texte">
          <p>Yaounde</p>
        </button>

        <button className="texte">
          <p>Yaounde</p>
        </button>

        <button className="texte">
          <p>Yaounde</p>
        </button>
        
       
      </div>
    </>
  );
};

export default QuickModule;
