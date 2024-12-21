import {Button} from "@nextui-org/button";
import {JSX} from "react";
import { redirect } from 'next/navigation'

type ActionsProps = {
  text: string;
  size?: 'sm' | 'md' | 'lg';
  onButtonClick?: () => void;
  children?: JSX.Element;
}

export default function UActions({text, size, onButtonClick, children}: ActionsProps) {
  return (
    <div>
      <Button onClick={() => onButtonClick ? onButtonClick() : null} variant={'bordered'} size={size ?? 'sm'}>{text} {children}</Button>
    </div>
  )
}
