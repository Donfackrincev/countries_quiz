import React from "react";
interface PropsReponse {
  title?: string;
  action: () => void;
  active?: boolean;
}

const Reponse: React.FC<PropsReponse> = (props) => {
  const { action, title, active } = props;

  return (
    <div className={`texte ${active ? "active" : ""} `} onClick={action}>
      {" "}
      {title ? title : "Reponse"}{" "}
    </div>
  );
};

export default Reponse
