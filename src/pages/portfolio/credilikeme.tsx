import { FullScreenModal } from "../../components/FullscreenModal";
import { FacebookIcon } from "lucide-react";
import { Badge } from "../../components/Badge";

const Credilikeme = () => {
  return (
    <>
      <FullScreenModal
        trigger={
          <img
            alt="Credilikeme"
            width={200}
            height={200}
            src={"/credi.webp"}
            className="rounded-xl mx-2"
          />
        }
      >
        <div className="text-center m-auto w-[640px] pt-20">
          <h1 className="text-5xl font-bold">CuidaMiMascota</h1>
          <hr className="h-1 my-8 bg-gray-200 border-0 dark:bg-gray-700 w-[300px] m-auto" />

          <img
            alt="Credilikeme"
            width={200}
            height={200}
            src={"/credi.webp"}
            className="rounded-xl m-auto"
          />
          <p className="font-sans text-lg mt-8">
            Credilikeme is one of the first startup of Mexico in lending money
            through and online application form. Since 2012 have give more than
            20,000 loans.
          </p>

          <h2 className="text-lg font-bold uppercase mt-4">As a developer: </h2>
          <p className="text-justify font-sans mt-4 text-lg">
            I was one of three developers in charge of changes and new features
            in the main app which consisted in an AngularJS application for a
            credit application form, collecting basic information from the
            client from personal data to bank credit card details, to be
            processed for a specific credit rate and credit amount. Also was in
            charge of developing a internal tool for getting a big picture of
            every new application in the system called &apos;Checklist&apos;
            where every user was able to track easily each application form and
            help the client finish they application. And lastly was the
            developer of the new version of the new website made with AngularJs.
          </p>
          <p className="uppercase text-sans font-bold text-lg mt-6">
            technology stack i used
          </p>
          {/* add grid */}
          <div className="mt-4 w-[640px] flex flex-wrap justify-center">
            <Badge>AngularJS</Badge>
            <Badge>NodeJS</Badge>
            <Badge>Yii 1.0 PHP Framework</Badge>
            <Badge>PHP 5</Badge>
            <Badge>Android Java</Badge>
            <Badge>MSSQL 2012</Badge>
            <Badge>JQuery</Badge>
          </div>
          <div className="inline-flex mt-6 w-full justify-center">
            <p className="text-md font-sans">Client: </p>
            <a
              className="underline font-bold text-md text-teal-700 ml-2"
              href="https://kobra.red"
              target="_blank"
            >
              CONFIANZA DIGITAL SAPI DE CV SOFOM ENR
            </a>

            <p className="ml-4">Date:</p>
            <p className="text-teal-700 font-bold ml-1">2014-2016</p>
          </div>
          <div className="inline-flex justify-center w-full mt-1">
            <p className="text-md font-sans">Service:</p>
            <p className="font-bold text-md text-teal-700 ml-2">
              Full stack development
            </p>
            <p className="text-md font-sans ml-2">Website:</p>
            <a
              className="underline font-bold text-md text-teal-700 ml-2"
              href="https://credilike.me"
              target="_blank"
            >
              https://credilike.me
            </a>
          </div>

          <div className="w-full inline-flex justify-center mt-1">
            <p className="text-md font-sans">Socials:</p>
            <a
              className="underline font-bold text-md text-teal-700 ml-2"
              href="https://www.facebook.com/credilikeme"
              target="_blank"
            >
              <FacebookIcon />
            </a>
          </div>
        </div>
      </FullScreenModal>
    </>
  );
};

export { Credilikeme };
