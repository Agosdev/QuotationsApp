import React from "react";
import { Button, ButtonCon, ButtonInnerCon, ButtonText } from "./GenericButtonElements";

interface IGenericButton {
    text: string;
    onClick: (e: React.SyntheticEvent) => void;
}

const GenericButton = ({text, onClick}: IGenericButton) => {

  return (     
    <ButtonCon>
      <ButtonInnerCon>
        <Button onClick={onClick}>
          <ButtonText>
            {text}
          </ButtonText>
        </Button>
      </ButtonInnerCon>
    </ButtonCon>
)};

export default GenericButton;
