import AuthButton from "@/components/AuthButton";

export default function NavBar() {
  return (
    <>
      <div className="w-full">
        <nav className="flex justify-end border-b border-b-foreground/10 h-16">
          <div className="max-w-4xl flex justify-between items-center p-3 text-sm">
            <AuthButton />
          </div>
        </nav>
      </div>
    </>
  );
}
