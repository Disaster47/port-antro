import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-4 px-4 bg-card relavtive border-t border-border mt-12 pt-9 flex flex-wrap justify-between items-center ">
      {""}
      <p className="text-sm text-muted-forground mx-auto">
        {" "}
        &copy; {new Date().getFullYear()} Portfolio by Antro, All rights
        reserved.
      </p>
      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowUp />
      </a>
    </footer>
  );
};
