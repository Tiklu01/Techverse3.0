"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/web-tooltip";
const people = [
  {
    id: 1,
    name: "Shampurna Rakshit",
    designation: "Convener",
    image:
      "/coreTeam/Shampurna.png"
    },
  {
    id: 2,
    name: "Arijit Nandi",
    designation: "Convener",
    image:
      "/coreTeam/Arijit.png",
  },
  {
    id: 3,
    name: "Sudipta Sen",
    designation: "Media Head",
    image:
      "/coreTeam/Sudipta.png",
  },
  {
    id: 4,
    name: "Riya Banerjee",
    designation: "SPOC",
    image:
      "/coreTeam/Riya.png"
    },
  {
    id: 5,
    name: "Tiyasha Kuri",
    designation: "Decoration",
    image:
      "/coreTeam/Triyasha.png",
  },
  {
    id: 6,
    name: "Arghyadip Roy",
    designation: "Co-ordinator",
    image:
      "/coreTeam/Arghyadip.png",
  },
  {
    id: 7,
    name: "Nanda Lal Das",
    designation: "Tech Lead",
    image:
      "/coreTeam/Nanda4.png",
  },
];

export function CoreTeamProfilePicLeft() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
