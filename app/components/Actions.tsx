import {Button} from "@nextui-org/button";
import {JSX} from "react";

type ActionsProps = {
  text: string;
  src: string;
  size?: 'sm' | 'md' | 'lg';
  children?: JSX.Element;
}
export default function UActions({text, size, src, children}: ActionsProps) {
  return (
    <div>
      <Button variant={'bordered'} size={size ?? 'sm'}>{text} {children}</Button>
    </div>
  )
}
