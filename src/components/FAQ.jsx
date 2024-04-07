import React from "react";
import Accordion from "./Accordion";

const FAQ = () => {
  return (
    <div className="my-10">
    <h1 className="text-center text-second text-xl lg:text-4xl">FAQ's</h1>
    <div className="px-4 py-3  bg-second text-white">
      <Accordion
        title="How can I get involved with the Better Life Social Organization?"
        answer="You can get involved with the Better Life Social Organization by volunteering, donating, or joining one of our fundraising campaigns. You can also follow us on social media to stay updated on our work and learn about opportunities to get involved."
      />
      <Accordion
        title="Where does the Better Life Social Organization operate?"
        answer="The Better Life Social Organization operates in communities around the world, where we work with local partners to provide essential resources to those in need."
      />
      <Accordion title="How can I support the Better Life Social Organization?" answer="There are many ways to support the Better Life Social Organization. You can donate money, volunteer your time, or raise awareness about our work. You can also join one of our fundraising campaigns or organize your own event to raise funds for our cause." />
      <Accordion title=" How does the Better Life Social Organization help communities in need?" answer="Thk with local partners to identify communities in need and then provide them with the resources they need to improve their lives. This may include providing access to clean water, building schools or healthcare facilities, or supporting local programs that provide education and healthcare services." />
      <Accordion title="What is the mission of the Better Life Social Organization?" answer=" The mission of the Better Life Social Organization is to empower communities in need by providing them with the resources they need to live healthy, happy lives. We believe that access to clean water, education, and healthcare are fundamental human rights, and we work to ensure that everyone has access to these essentials." />
      <Accordion title="What is the Better Life Social Organization?" answer=" Better Life Social Organization is a non-profit organization dedicated to improving the lives of communities in need. We work to provide essential resources, such as clean water, education, and healthcare, to those who may not have access to these basic necessities." />
    </div>
    </div>
  );
};

export default FAQ;