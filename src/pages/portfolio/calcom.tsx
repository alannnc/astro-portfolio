import { FullScreenModal } from "../../components/FullscreenModal";
import { Badge } from "../../components/Badge";
import { Twitter } from "lucide-react";

const Calcom = () => {
  return (
    <>
      <FullScreenModal
        trigger={
          <img
            alt="Calcom"
            width={200}
            height={200}
            src={"/calcom_logo.webp"}
            className="rounded-xl mx-2"
            onClick={() => {
              console.log("clicked");
            }}
          />
        }
      >
        <div className="text-center m-auto w-[640px] pt-20">
          <h1 className="text-5xl font-bold">Cal.com</h1>
          <hr className="h-1 my-8 bg-gray-200 border-0 dark:bg-gray-700 w-[300px] m-auto" />

          <img
            alt="Calcom"
            width={200}
            height={200}
            src={"/calcom_logo.webp"}
            className="rounded-xl m-auto"
          />
          <p className="font-sans text-lg mt-8">
            Startup with the goal of being the #1 open source scheduling
            platform.
          </p>

          <h2 className="text-lg font-bold uppercase mt-4">As a developer: </h2>
          <p className="text-justify font-sans mt-4 text-lg">
            Full stack development for the main app and for the self hosted
            product. Worked in many things, most important features Billing,
            Insights/Analytics, custom Apps, bookings, timezones, Webhooks,
            Automated test. Open source mindset. Serverless and self hosted
            oriented development. Subscriptions and different payment provider
            integrations. Insights with heavy focus on performance and tooling.
            NextJs. Tailwind. Playwright for e2e. Performance.
          </p>
          <p className="uppercase text-sans font-bold text-lg mt-6">
            technology stack i used
          </p>
          {/* add grid */}
          <div className="mt-4 w-[640px] flex flex-wrap justify-center">
            <Badge>NextJs</Badge>
            <Badge>ReactJs</Badge>
            <Badge>Typescript</Badge>
            <Badge>Prisma</Badge>
            <Badge>Postgres</Badge>
            <Badge>NodeJs</Badge>
            <Badge>Zod</Badge>
            <Badge>React Hook Form</Badge>
            <Badge>Stripe Api</Badge>
            <Badge>Paypal Api</Badge>
          </div>
          <div className="inline-flex mt-6 w-full justify-center">
            <p className="text-md font-sans">Client: </p>
            <a
              className="underline font-bold text-md text-teal-700 ml-2"
              href="https://cal.com"
              target="_blank"
            >
              Cal.com
            </a>

            <p className="ml-4">Date:</p>
            <p className="text-teal-700 font-bold ml-1">2022-2023</p>
          </div>
          <div className="inline-flex justify-center w-full mt-1">
            <p className="text-md font-sans">Service:</p>
            <p className="font-bold text-md text-teal-700 ml-2">
              Full stack development
            </p>
            <p className="text-md font-sans ml-2">Website:</p>
            <a
              className="underline font-bold text-md text-teal-700 ml-2"
              href="https://cal.com"
              target="_blank"
            >
              https://cal.com
            </a>
          </div>

          <div className="w-full inline-flex justify-center mt-1">
            <p className="text-md font-sans">Socials:</p>
            <a
              className="underline font-bold text-md text-teal-700 ml-2"
              href="https://x.com/calcom"
              target="_blank"
            >
              <Twitter />
            </a>
          </div>
        </div>
      </FullScreenModal>
    </>
  );
};

export { Calcom };
