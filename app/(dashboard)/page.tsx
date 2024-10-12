import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

const MainPage = () => {
  return (
    <div className="items-center justify-center h-full flex">
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default MainPage;
