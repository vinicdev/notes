"use client";

import AuthButton from "@/components/AuthButton";
import RegisterNote from "@/components/RegisterNote";
import { useState } from "react";

export default function NavBar() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className="w-full">
        <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
          <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
            <button
              type="button"
              onClick={openModal}
              className="text-xl py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
            >
              &#43;
            </button>
            {/* <AuthButton /> */}
          </div>
        </nav>
      </div>

      <RegisterNote isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
