import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";

interface IFullScreenModal {
  trigger: React.ReactNode;
  title?: string;
  description?: string;
  children: React.ReactNode;
}

const FullScreenModal = (props: IFullScreenModal) => {
  const { trigger, title, description, children } = props;
  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <div className="cursor-pointer">{trigger}</div>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0" />
          {/* <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none text-black"> */}
          <Dialog.Content className="data-[state=open]:animate-contentShow fixed w-full h-full overflow-y-scroll top-0 left-0 bg-white shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none text-black pb-8">
            <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium text-black">
              {title}
            </Dialog.Title>
            <Dialog.Description className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal text-black">
              {description}
            </Dialog.Description>
            {children}
            <Dialog.Close asChild>
              <button
                className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[50px] w-[50px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
                aria-label="Close"
              >
                <X />
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
};

export { FullScreenModal };
