import { Button } from "@/components/ui/button"
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="">
      <h2>Nem</h2>
      <Button
      variant='ghost'
      >Hello</Button>

      <UserButton />
    </div>
  );
}
