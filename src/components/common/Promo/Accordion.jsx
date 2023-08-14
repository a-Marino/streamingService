import { Accordion as Acc, AccordionItem } from "@nextui-org/react";

export const Accordion = () => {
  return (
    <div className="mb-5 mt-10">
      <Acc
        variant="splitted"
        itemClasses={{
          title: "self-start",
          trigger: " focus:outline-none",
        }}
      >
        <AccordionItem
          key="1"
          aria-label="Subscribe"
          title="Subscribe"
          className="rounded-lg bg-lightGray px-5 py-2"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
          architecto!
        </AccordionItem>
        <AccordionItem
          key="2"
          aria-label="Account"
          title="Account"
          className="rounded-lg bg-lightGray px-5 py-2"
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Necessitatibus repudiandae fugit eveniet delectus aspernatur, quis
          nemo illum numquam libero soluta.
        </AccordionItem>
        <AccordionItem
          key="3"
          aria-label="Library"
          title="Library"
          className="rounded-lg bg-lightGray px-5 py-2"
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Necessitatibus repudiandae fugit eveniet delectus aspernatur, quis
          nemo illum numquam libero soluta.
        </AccordionItem>
        <AccordionItem
          key="4"
          aria-label="Support"
          title="Support"
          className="rounded-lg bg-lightGray px-5 py-2"
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Necessitatibus repudiandae fugit eveniet delectus aspernatur, quis
          nemo illum numquam libero soluta.
        </AccordionItem>
      </Acc>
    </div>
  );
};
