import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { Fragment } from "react";
import clsx from "clsx";

interface IPropsTabs {
    className?: string;
    tabHeader: React.ReactNode[] | string[];
    tabContent: React.ReactNode[];
}

export const Tabs = ({
    className,
    tabHeader,
    tabContent
}:IPropsTabs) => {
    return (
        <TabGroup as="div" className={clsx("flex flex-col gap-[13px]", className)}>
            <TabList className="flex max-[767px]:justify-between md:gap-[93px] items-center border-b border-dashed border-[#C9C9C9] pb-[18px]">
                {tabHeader.map((item, index) => (
                    <Tab as={Fragment} key={index}>
                        {({ selected }) => (
                            <div
                                className={clsx("outline-none", {
                                    "text-black/[.66]": selected
                                })}
                            >
                                {item}
                            </div>
                        )}
                    </Tab>
                ))}
            </TabList>
            <TabPanels className="relative">
                {tabContent.map((content, index) => (
                    <TabPanel key={index} className="">
                        {content}
                    </TabPanel>
                ))}
            </TabPanels>
        </TabGroup>
    )
}