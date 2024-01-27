import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";

import Nav from "./Nav";
import Logo from "./Logo";
import Socials from "./Socials";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify cursor-pointer />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col items-center justify-between h-full py-8">
          <div className="flex flex-col items-center gap-y-32">
            <Logo />
            <Nav
          
              containerStyles="flex flex-col items-center gap-y-8"
              linkStyles="text-2xl hover:text-primary active:text-primary"
            />
          </div>
          <Socials containerStyles="flex  gap-x-6" iconsStyles="text-3xl" />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
