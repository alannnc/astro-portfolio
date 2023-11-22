import { FullScreenModal } from "../../components/FullscreenModal";
import { Badge } from "../../components/Badge";
import { Facebook } from "lucide-react";

const Vendorplace = () => {
  return (
    <>
      <FullScreenModal
        trigger={
          <img
            alt="Vendorplace"
            width={200}
            height={200}
            src={"/vendorplace.svg"}
            className="rounded-xl mx-2 bg-indigo-800"
          />
        }
      >
        <div className="text-center m-auto w-[640px] pt-20">
          <h1 className="text-5xl font-bold">Yaydoo/Vendorplace</h1>
          <hr className="h-1 my-8 bg-gray-200 border-0 dark:bg-gray-700 w-[300px] m-auto" />

          <img
            alt="Vendorplace"
            width={200}
            height={200}
            src={"/vendorplace.svg"}
            className="rounded-xl m-auto"
          />
          <p className="font-sans text-lg mt-8">
            Latam Startup with the goal of changing the small business economy
            of the region with b2b payments and collections.
          </p>

          <h2 className="text-lg font-bold uppercase mt-4">As a developer: </h2>
          <p className="text-justify font-sans mt-4 text-lg">
            Full stack development on the Vendorplace product, using NestJs,
            Gatsby, Docker, TypeOrm, AWS, Kafka, Postgresql, mongodb, and
            sequelize. Deployment tasks and mentoring to other developers in the
            team.
          </p>
          <p className="uppercase text-sans font-bold text-lg mt-6">
            technology stack i used
          </p>
          {/* add grid */}
          <div className="mt-4 w-[640px] flex flex-wrap justify-center">
            <Badge>Gatsby</Badge>
            <Badge>ReactJs</Badge>
            <Badge>Typescript</Badge>
            <Badge>MongoDB</Badge>
            <Badge>Postgres</Badge>
            <Badge>NodeJS</Badge>
            <Badge>AWS</Badge>
            <Badge>NestJS</Badge>
            <Badge>Stripe Api</Badge>
            <Badge>Kafka</Badge>
            <Badge>Sequelize</Badge>
            <Badge>TypeORM</Badge>
            <Badge>Docker</Badge>
          </div>
          <div className="inline-flex mt-6 w-full justify-center">
            <p className="text-md font-sans">Client: </p>
            <a
              className="underline font-bold text-md text-teal-700 ml-2"
              href="https://yaydoo.com"
              target="_blank"
            >
              Cal.com
            </a>

            <p className="ml-4">Date:</p>
            <p className="text-teal-700 font-bold ml-1">2021-2022</p>
          </div>
          <div className="inline-flex justify-center w-full mt-1">
            <p className="text-md font-sans">Service:</p>
            <p className="font-bold text-md text-teal-700 ml-2">
              Full stack development
            </p>
            <p className="text-md font-sans ml-2">Website:</p>
            <a
              className="underline font-bold text-md text-teal-700 ml-2"
              href="https://yaydoo.com"
              target="_blank"
            >
              https://yaydoo.com
            </a>
          </div>

          <div className="w-full inline-flex justify-center mt-1">
            <p className="text-md font-sans">Socials:</p>
            <a
              className="underline font-bold text-md text-teal-700 ml-2"
              href="https://www.facebook.com/Yaydoo"
              target="_blank"
            >
              <Facebook />
            </a>
          </div>
        </div>
      </FullScreenModal>
    </>
  );
};

export { Vendorplace };
