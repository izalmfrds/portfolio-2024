import React from "react";
import { Tabs, Tab } from "@nextui-org/react";
// import {GalleryIcon} from "./GalleryIcon";
// import {MusicIcon} from "./MusicIcon";
import { VideoIcon } from "../Assets/Icon/VideoIcon";

export function Tablist() {
  return (
    <div className="flex w-full flex-col">
      <Tabs aria-label="Options" color="primary" variant="bordered">
        <Tab
          key="photos"
          title={
            <div className="flex items-center space-x-2">
              <VideoIcon />
              <span>UI/UX Designer</span>
            </div>
          }
        />
        <Tab
          key="music"
          title={
            <div className="flex items-center space-x-2">
              <VideoIcon />
              <span>Project Manager</span>
            </div>
          }
        />
        <Tab
          key="videos"
          title={
            <div className="flex items-center space-x-2">
              <VideoIcon />
              <span>Front-End Developer</span>
            </div>
          }
        />
      </Tabs>
    </div>
  );
}
