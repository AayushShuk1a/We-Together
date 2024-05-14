import React, { useState } from "react";
import { Typography } from "@material-tailwind/react";

const faqs = [
  {
    title: "How do I create an account and start participating in the community?",
    desc: "To create an account, simply click on the 'Sign Up' or 'Join Us' button on the website's homepage. Follow the prompts to provide your email address, choose a username, and set a password. Once your account is created, you can start participating by logging in and exploring the various sections of the community."
  },
  {
    title: "Are there any guidelines or rules for posting content and interacting with others?",
    desc: "Yes, we have community guidelines in place to ensure a safe and respectful environment for all members. These guidelines outline expectations for behavior, such as being respectful and supportive, refraining from posting harmful or offensive content, and respecting others' privacy. You can find the full guidelines in the 'Community Rules' section of the website."
  },
  {
    title: "Can I share resources or articles with the community that I find helpful?",
    desc: "Absolutely! We encourage members to share resources, articles, and other helpful information with the community. You can do this by creating a new post or thread in the appropriate section of the website and providing a brief description or summary of the resource you're sharing."
  },
  {
    title: "How do I book a therapy session with a therapist?",
    desc: "To book a therapy session, visit the 'Therapy Services' section, choose a therapist, select a time slot, and complete the booking process. Payment options will be available during booking, and you'll receive confirmation via email. For assistance, contact our support team."
  },
  {
    title: "How can I contribute to making the community a welcoming and supportive space for everyone?",
    desc: "You can contribute to making the community a welcoming and supportive space by being respectful and empathetic towards others, offering support and encouragement, and actively participating in discussions and activities. Your contributions help create a sense of belonging and camaraderie within the community."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div className="">
    <section className="px-8 py-20">
      <div className="container mx-auto">
        <div className="mb-14 text-center ">
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-4 text-4xl !leading-snug lg:text-[40px]"
          >
            Common Queries Answered
          </Typography>
        
        </div>
        <div className="max-w-3xl mx-auto grid gap-10 ">
          {faqs.map(({ title, desc }, index) => (
            <div className="p-4  bg-white rounded-lg shadow-lg md:max-w-2xl" key={title}>
              <div
                className="cursor-pointer"
                onClick={() => toggleAccordion(index)}
              >
                <Typography
                  color="blue-gray"
                  className=" text-[20px] font-bold"
                >
                  {title}
                </Typography>
              </div>
              {openIndex === index && (
                <div className="border-t border-gray-200 pt-4">
                  <Typography className="font-normal !text-gray-500">
                    {desc}
                  </Typography>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
}

export default FAQ;
