import { FullScreenModal } from "../../components/FullscreenModal";
import { Badge } from "../../components/Badge";
import { FacebookIcon, InstagramIcon } from "lucide-react";

const CuidaMiMascota = () => {
  return (
    <>
      <FullScreenModal
        trigger={
          <img
            alt="CuidaMiMascota"
            width={200}
            height={200}
            src={"/cmmlogo.svg"}
            className="bg-black rounded-xl p-6 mx-2"
          />
        }
      >
        <div className="text-center m-auto w-[640px] pt-20">
          <h1 className="text-5xl font-bold">CuidaMiMascota</h1>
          <hr className="h-1 my-8 bg-gray-200 border-0 dark:bg-gray-700 w-[300px] m-auto" />

          <img
            alt="CuidaMiMascota"
            width={200}
            height={200}
            src={"/cmmlogo.svg"}
            className="bg-black rounded-xl p-6 m-auto"
          />
          <p className="font-sans text-lg mt-8">
            Largest marketplace in Mexico to find your next pet sitter for your
            next trip.
          </p>

          <h2 className="text-lg font-bold uppercase mt-4">As a developer: </h2>
          <p className="text-justify font-sans mt-4 text-lg">
            I&apos;ve been working remotely the entire time for CMM alongside
            CEO, CTO, and founders. My main work here was develop and maintain
            APP website, we transitioned from PHP to NextJS, develop a NodeJS
            API restful to enable services for both WEB and mobile apps,
            implemented several third party payment services(Stripe, Paypal,
            Conekta), email services, sockets for Chat services, sms services,
            push notifications for user engagement, developed several test with
            Jest for our API service endpoints and code base. React native
            development and maintenance on our APP for all the stores (Apple,
            Huawei, Google). AWS tools development like SQS, Lamda, S3 storage
            and Clusters.
          </p>
          <p className="uppercase text-sans font-bold text-lg mt-6">
            technology stack i used
          </p>
          {/* add grid */}
          <div className="mt-4 w-[640px] flex flex-wrap justify-center">
            <Badge>PHP</Badge>
            <Badge>ReactJs</Badge>
            <Badge>NodeJS</Badge>
            <Badge>AWS</Badge>
            <Badge>MySQL</Badge>
            <Badge>React Native</Badge>
            <Badge>AWS EC2</Badge>
            <Badge>Redux</Badge>
            <Badge>Paypal API</Badge>
            <Badge>Conekta API</Badge>
            <Badge>AWS SQS</Badge>
            <Badge>Mailchimp</Badge>
            <Badge>AWS API Gateway</Badge>
            <Badge>AWS S3</Badge>
            <Badge>AWS Lambda</Badge>
          </div>
          <div className="inline-flex mt-6 w-full justify-center">
            <p className="text-md font-sans">Client: </p>
            <a
              className="underline font-bold text-md text-teal-700 ml-2"
              href="https://cuidamimascota.com.mx"
              target="_blank"
            >
              CuidaMiMascota
            </a>

            <p className="ml-4">Date:</p>
            <p className="text-teal-700 font-bold ml-1">2016-2022</p>
          </div>
          <div className="inline-flex justify-center w-full mt-1">
            <p className="text-md font-sans">Service:</p>
            <p className="font-bold text-md text-teal-700 ml-2">
              Full stack development
            </p>
            <p className="text-md font-sans ml-2">Website:</p>
            <a
              className="underline font-bold text-md text-teal-700 ml-2"
              href="https://cuidamimascota.com.mx"
              target="_blank"
            >
              https://cuidamimascota.com.mx
            </a>
          </div>

          <div className="w-full inline-flex justify-center mt-1">
            <p className="text-md font-sans">Socials:</p>
            <a
              className="underline font-bold text-md text-teal-700 ml-2"
              href="https://www.facebook.com/cuidamimascota"
              target="_blank"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://www.instagram.com/cuidamimascota"
              className="underline font-bold text-md text-teal-700 ml-2"
              target="_blank"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>
      </FullScreenModal>
    </>
  );
};

export { CuidaMiMascota };
