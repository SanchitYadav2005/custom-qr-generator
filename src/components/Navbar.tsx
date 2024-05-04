import { Button } from "./Button";

type Props = {};

export const Navbar = ({}: Props) => {
  return (
    <nav className="flex justify-between px-16 py-5 container mx-auto">
      <h1 className="text-xl font-mono">
        Custom<span className="italic font-black text-blue-600">Qr</span>
        Generator
      </h1>
      <Button />
    </nav>
  );
};
