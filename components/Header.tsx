"use client";

import RegisterNote from "./RegisterNote";

interface HeaderProps {
  dataUser: string;
}

export default async function Header(props: HeaderProps) {
  return (
    <>
      <div className="w-full flex flex-col gap-16 items-center">
        <RegisterNote user={props.dataUser} />

        <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" />
      </div>
    </>
  );
}
