/** @format */

import Icon from "@material-tailwind/react/Icon";
import Tab from "@material-tailwind/react/Tab";
import TabContent from "@material-tailwind/react/TabContent";
import TabItem from "@material-tailwind/react/TabItem";
import TabList from "@material-tailwind/react/TabList";
import TabPane from "@material-tailwind/react/TabPane";
import React, { useState } from "react";

export default function CountryHeadlines({
  headlinesAll,
  sports,
  health,
  business,
  science,
  techNews,
  entertainment,
}) {
  const [openTab, setOpenTab] = useState(1);
  return (
    <Tab className="w-10/12 mx-auto mt-12">
      <TabList color="cyan" className="flex flex-wrap">
        <TabItem
          onClick={(e) => {
            e.preventDefault();
            setOpenTab(1);
          }}
          ripple="light"
          active={openTab === 1 ? true : false}
          href="tabItem"
          className="text-xl font-serif text-gray-800">
          All
        </TabItem>
        <TabItem
          onClick={(e) => {
            e.preventDefault();
            setOpenTab(2);
          }}
          ripple="light"
          active={openTab === 2 ? true : false}
          href="tabItem"
          className="text-xl font-serif text-gray-800">
          <Icon name="movie" size="regular" />
          Entertainment
        </TabItem>
        <TabItem
          onClick={(e) => {
            e.preventDefault();
            setOpenTab(3);
          }}
          ripple="light"
          active={openTab === 3 ? true : false}
          href="tabItem"
          className="text-xl font-serif text-gray-800">
          <Icon name="health_and_safety" size="regular" />
          Health
        </TabItem>
        <TabItem
          onClick={(e) => {
            e.preventDefault();
            setOpenTab(4);
          }}
          ripple="light"
          active={openTab === 4 ? true : false}
          href="tabItem"
          className="text-xl font-serif text-gray-800">
          <Icon name="science" size="regular" />
          Science
        </TabItem>
        <TabItem
          onClick={(e) => {
            e.preventDefault();
            setOpenTab(5);
          }}
          ripple="light"
          active={openTab === 5 ? true : false}
          href="tabItem"
          className="text-xl font-serif text-gray-800">
          <Icon name="sports_tennis" size="regular" />
          Sports
        </TabItem>
        <TabItem
          onClick={(e) => {
            e.preventDefault();
            setOpenTab(6);
          }}
          ripple="light"
          active={openTab === 6 ? true : false}
          href="tabItem"
          className="text-xl font-serif text-gray-800">
          <Icon name="satellite_alt" size="regular" />
          Technology
        </TabItem>
        <TabItem
          onClick={(e) => {
            e.preventDefault();
            setOpenTab(7);
          }}
          ripple="light"
          active={openTab === 7 ? true : false}
          href="tabItem"
          className="text-xl font-serif text-gray-800">
          <Icon name="satellite_alt" size="regular" />
          Business News
        </TabItem>
      </TabList>

      <TabContent>
        <TabPane active={openTab === 1 ? true : false}>
          <marquee
            width="100%"
            className="text-lg font-serif"
            direction="up"
            height="300vh"
            scrollamount="3">
            {headlinesAll?.articles?.map((art) => (
              <p
                key={art.description}
                className="mt-10 hover:cursor-pointer hover:text-gray-700"
                onClick={() => {
                  window.location.href = art.url;
                }}>
                {art.description}
              </p>
            ))}
          </marquee>
        </TabPane>
        <TabPane active={openTab === 2 ? true : false}>
          <marquee
            width="100%"
            className="text-lg font-serif"
            direction="up"
            height="300vh"
            scrollamount="3">
            {entertainment?.articles?.map((art) => (
              <p
                key={art.description}
                className="mt-10 hover:cursor-pointer hover:text-gray-700"
                onClick={() => {
                  window.location.href = art.url;
                }}>
                {art.description}
              </p>
            ))}
          </marquee>
        </TabPane>
        <TabPane active={openTab === 3 ? true : false}>
          <marquee
            width="100%"
            className="text-lg font-serif"
            direction="up"
            height="300vh"
            scrollamount="3">
            {health?.articles?.map((art) => (
              <p
                key={art.description}
                className="mt-10 hover:cursor-pointer hover:text-gray-700"
                onClick={() => {
                  window.location.href = art.url;
                }}>
                {art.description}
              </p>
            ))}
          </marquee>
        </TabPane>
        <TabPane active={openTab === 4 ? true : false}>
          <marquee
            width="100%"
            className="text-lg font-serif"
            direction="up"
            height="300vh"
            scrollamount="3">
            {science?.articles?.map((art) => (
              <p
                key={art.description}
                className="mt-10 hover:cursor-pointer hover:text-gray-700"
                onClick={() => {
                  window.location.href = art.url;
                }}>
                {art.description}
              </p>
            ))}
          </marquee>
        </TabPane>
        <TabPane active={openTab === 5 ? true : false}>
          <marquee
            width="100%"
            className="text-lg font-serif"
            direction="up"
            height="300vh"
            scrollamount="3">
            {sports?.articles?.map((art) => (
              <p
                key={art.description}
                className="mt-10 hover:cursor-pointer hover:text-gray-700"
                onClick={() => {
                  window.location.href = art.url;
                }}>
                {art.description}
              </p>
            ))}
          </marquee>
        </TabPane>
        <TabPane active={openTab === 6 ? true : false}>
          <marquee
            width="100%"
            className="text-lg font-serif"
            direction="up"
            height="300vh"
            scrollamount="3">
            {techNews?.articles?.map((art) => (
              <p
                key={art.description}
                className="mt-10 hover:cursor-pointer hover:text-gray-700"
                onClick={() => {
                  window.location.href = art.url;
                }}>
                {art.description}
              </p>
            ))}
          </marquee>
        </TabPane>
        <TabPane active={openTab === 7 ? true : false}>
          <marquee
            width="100%"
            className="text-lg font-serif"
            direction="up"
            height="300vh"
            scrollamount="3">
            {business?.articles?.map((art) => (
              <p
                key={art.description}
                className="mt-10 hover:cursor-pointer hover:text-gray-700"
                onClick={() => {
                  window.location.href = art.url;
                }}>
                {art.description}
              </p>
            ))}
          </marquee>
        </TabPane>
      </TabContent>
    </Tab>
  );
}
