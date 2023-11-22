import { FullScreenModal } from "../../components/FullscreenModal";
import { Badge } from "../../components/Badge";
import { FacebookIcon } from "lucide-react";

const KobraRed = () => {
  return (
    <>
      <FullScreenModal
        trigger={
          <img
            alt="KobraRed"
            width={200}
            height={200}
            src={"/kobra.webp"}
            className="rounded-xl mx-2"
          />
        }
      >
        <div className="text-center m-auto w-[640px] pt-20">
          <h1 className="text-5xl font-bold">Kobra</h1>
          <hr className="h-1 my-8 bg-gray-200 border-0 dark:bg-gray-700 w-[300px] m-auto" />

          <img
            alt="KobraRed"
            width={200}
            height={200}
            src={"/kobra.webp"}
            className="rounded-xl m-auto"
          />
          <p className="font-sans text-lg mt-8">
            Kobra is the first debt collection software in Mexico, where you can
            collect debt from different bussines and make money in your own
            times. You only need to download the app from the market, sign up
            and complete the mandatory courses.
          </p>

          <h2 className="text-lg font-bold uppercase mt-4">As a developer: </h2>
          <p className="text-justify font-sans mt-4 text-lg">
            I was the lead software of this project, in charge of the
            development of the app from scratch, including the main site,
            configuring server and domain. Everything from Frontend to Backend.
          </p>
          <p className="uppercase text-sans font-bold text-lg mt-6">
            technology stack i used
          </p>
          {/* add grid */}
          <div className="mt-4 w-[640px] flex flex-wrap justify-center">
            <Badge>PHP Yii</Badge>
            <Badge>Android JAVA</Badge>
            <Badge>MSSQL</Badge>
          </div>
          <div className="inline-flex mt-6 w-full justify-center">
            <p className="text-md font-sans">Client: </p>
            <a
              className="underline font-bold text-md text-teal-700 ml-2"
              href="https://kobra.red"
              target="_blank"
            >
              Kobrared
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
              href="https://kobra.red"
              target="_blank"
            >
              https://kobra.red
            </a>
          </div>

          <div className="w-full inline-flex justify-center mt-1">
            <p className="text-md font-sans">Socials:</p>
            <a
              className="underline font-bold text-md text-teal-700 ml-2"
              href="https://www.facebook.com/kobrared"
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

export { KobraRed };
