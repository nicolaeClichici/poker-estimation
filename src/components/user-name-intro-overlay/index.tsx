import { createRef, useEffect } from "react";
import { useAtom } from "jotai";
import { userAtom } from "@/atoms";
import {
  StyledUserNameInput,
  StyledInput,
  StyledSaveButton,
} from "./styled.ts";

export const UserNameIntroOverlay = () => {
  const [, setUser] = useAtom(userAtom);
  const inputRef = createRef<HTMLInputElement>();
  useEffect(() => {
    inputRef.current?.focus();
  }, [inputRef]);

  return (
    <StyledUserNameInput>
      <span>User name</span>
      <StyledInput type="text" ref={inputRef} />
      <StyledSaveButton onClick={() => setUser(inputRef.current?.value)}>
        Submit
      </StyledSaveButton>
    </StyledUserNameInput>
  );
};
