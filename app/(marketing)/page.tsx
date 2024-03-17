import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className=" p-4 space-y-4 flex flex-col max-w-[200px]">
      <Button variant="default">default </Button>
      <Button variant="primary">primary </Button>
      <Button variant="primaryOutline">primary outline</Button>

      <Button variant="secondary">secondary </Button>
      <Button variant="secondaryOutline">secondary</Button>

      <Button variant="danger">danger </Button>
      <Button variant="dangerOutline">danger</Button>

      <Button variant="super">super </Button>
      <Button variant="superOutline">super</Button>

      <Button variant="ghost">ghost</Button>

      <Button variant="sidebar">sidebar </Button>
      <Button variant="sidebarOutline">sidebar</Button>


    </div>
  );
}
