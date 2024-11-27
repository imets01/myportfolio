"use client";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function AboutMe({ forEveryone, forRecruiters, forEngineers }) {
  const [activeTab, setActiveTab] = useState("everyone");

  return (
    <section className="mt-8 mb-16">
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="flex justify-start mb-2 w-fit pl-0 bg-background">
          <TabsTrigger
            value="everyone"
            className="px-2 py-2 text-md md:text-lg font-medium pl-0 data-[state=active]:shadow-none"
          >
            for everyone
          </TabsTrigger>
          <TabsTrigger
            value="recruiters"
            className="px-2 py-2 text-sm font-medium data-[state=active]:shadow-none"
          >
            for recruiters
          </TabsTrigger>
          <TabsTrigger
            value="engineers"
            className="px-2 py-2 text-sm font-medium data-[state=active]:shadow-none"
          >
            for engineers
          </TabsTrigger>
        </TabsList>
        <TabsContent value="everyone">
          <p>{forEveryone}</p>
        </TabsContent>
        <TabsContent value="recruiters">
          <p>{forRecruiters}</p>
        </TabsContent>
        <TabsContent value="engineers">
          <p>{forEngineers}</p>
        </TabsContent>
      </Tabs>
    </section>
  );
}
