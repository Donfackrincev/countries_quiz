import React from "react";
interface PropsButton {
  title?: string;
  action: () => void;
  active?: boolean;
}

const Button: React.FC<PropsButton> = (props) => {
  const { action, title, active } = props;

  return (
    <button className={`button ${active ? "active" : ""} `} onClick={action}>
      {" "}
      {title ? title : "Bouton"}{" "}
    </button>
  );
};

export default Button
