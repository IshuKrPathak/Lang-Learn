import { FeedWrapper } from "@/components/FeedWrapper";
import { StickyWrapper } from "@/components/StickyWrapper";
import React from "react";
import { Header } from "./header";
import { UserProgress } from "@/components/UserProgress";

const LearnPage = () => {
  return (
    <div className="  flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <UserProgress 
        activeCourse = {{ title:"India",imageSrc:"/flag.png"}}
        hearts={5}
        points={100}
        hasActiveSubscription = {false}

        />
        
        </StickyWrapper>
      <FeedWrapper>
        <Header title="spanish" />
      </FeedWrapper>
    </div>
  );
};

export default LearnPage;
