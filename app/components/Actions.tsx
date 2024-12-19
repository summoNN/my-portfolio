import {Button} from "@nextui-org/button";
import {JSX} from "react";
import { redirect } from 'next/navigation'

type ActionsProps = {
  text: string;
  src: string;
  size?: 'sm' | 'md' | 'lg';
  children?: JSX.Element;
}

function handleClick(src: string) {
  redirect(src)
}

export default function UActions({text, size, src, children}: ActionsProps) {
  return (
    <div>
      <Button onClick={() => handleClick(src)} variant={'bordered'} size={size ?? 'sm'}>{text} {children}</Button>
    </div>
  )
}
