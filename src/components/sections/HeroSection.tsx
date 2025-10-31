import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";


const navigationLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Support", href: "#support" },
  { label: "Download", href: "#download" },
];

const userAvatars = [
  {
    src: "/photo-by-devi-firdaus.png",
    alt: "Photo by devi",
    className: "absolute top-0 left-0",
  },
  {
    src: "/photo-by-dias.png",
    alt: "Photo by dias",
    className: "absolute top-0 left-[15px]",
  },
  {
    src: "/photo-by-aiony-haust.png",
    alt: "Photo by aiony haust",
    className: "absolute top-0 left-[31px]",
  },
];

export const HeroSection = () => {
  return (
    <main className="overflow-hidden bg-[linear-gradient(183deg,rgba(240,240,240,1)_0%,rgba(107,71,193,1)_100%)] w-full min-w-[1440px] min-h-[1024px] relative">
      <nav className="flex w-[829px] items-center justify-between px-3.5 py-2.5 absolute top-11 left-[calc(50.00%_-_415px)] bg-[#303030] rounded-[50px] border border-solid border-white shadow-[0px_4px_9px_#00000033,0px_16px_16px_#0000002b,0px_36px_22px_#0000001a,0px_64px_26px_#00000008,0px_101px_28px_transparent]">
        <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
          <img
            className="relative w-[26px] h-[26px]"
            alt="Logo"
            src="/logo.svg"
          />
          <div className="relative w-fit [font-family:'Inria_Sans',Helvetica] font-normal italic text-white text-xl tracking-[0] leading-[normal] whitespace-nowrap">
            GreenLeaf
          </div>
        </div>

        <ul className="inline-flex items-center gap-[26px] relative flex-[0_0_auto] list-none">
          {navigationLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-white text-lg tracking-[0] leading-[normal] hover:opacity-80 transition-opacity"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <Button className="inline-flex items-center justify-center gap-2.5 px-5 py-2.5 relative flex-[0_0_auto] bg-white rounded-[50px] hover:bg-white/90 h-auto">
          <span className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-black text-lg tracking-[0] leading-[normal]">
            Login
          </span>
        </Button>
      </nav>

      <section className="flex flex-col w-[595px] items-center gap-[26px] absolute top-[161px] left-[calc(50.00%_-_297px)]">
        <div className="flex flex-col items-center gap-5 relative self-stretch w-full flex-[0_0_auto]">
          <Badge className="inline-flex items-center gap-1.5 px-[13.5px] py-[7.5px] relative flex-[0_0_auto] bg-white rounded-[75px] shadow-[0px_6px_13px_#0000000d,0px_24px_24px_#0000000a,0px_53px_32px_#00000008,0px_95px_38px_#00000003,0px_149px_42px_transparent] hover:bg-white border-0">
            <div className="relative w-[53.25px] h-[22.5px]">
              {userAvatars.map((avatar, index) => (
                <Avatar
                  key={index}
                  className={`${avatar.className} w-[22px] h-[22px] rounded-[11.25px] border-[0.75px] border-solid border-white`}
                >
                  <AvatarImage
                    src={avatar.src}
                    alt={avatar.alt}
                    className="object-cover"
                  />
                </Avatar>
              ))}
            </div>
            <span className="relative w-fit [font-family:'Inter',Helvetica] font-normal text-black text-[13.5px] tracking-[0] leading-[normal] whitespace-nowrap">
              60000+ Users Worldwide
            </span>
          </Badge>

          <header className="flex flex-col items-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
            <h1 className="relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-[#25232c] text-[80px] text-center tracking-[-2.40px] leading-[normal]">
              Streamline Your Writing Journey
            </h1>
            <p className="relative w-[491px] [font-family:'Inter',Helvetica] font-normal text-black text-lg text-center tracking-[-0.54px] leading-[normal]">
              From concept to completion, we simplify the entire process of
              writing and printing your essays.
            </p>
          </header>
        </div>

        <Button className="inline-flex items-center justify-center gap-2.5 px-4 py-3 relative flex-[0_0_auto] bg-[#6d47bd] rounded-[50px] hover:bg-[#6d47bd]/90 h-auto">
          <span className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-white text-xl text-center tracking-[-0.60px] leading-[normal] whitespace-nowrap">
            Schedule a Demo
          </span>
        </Button>
      </section>

      <div className="absolute top-[636px] left-[1022px] w-[726px] h-[629px] rounded-[363px/314.5px] blur-[100px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(241,169,230,1)_22%,rgba(109,71,189,1)_100%)]" />

      <div className="absolute top-[672px] left-[calc(50.00%_-_422px)] w-[866px] h-[520px]">
        <img
          className="absolute top-0 left-0 w-[866px] h-[352px] rounded-[20px] object-cover"
          alt="Dashboard navigation"
          src="/dashboard---navigation-1.png"
        />
        <img
          className="absolute top-3 left-[5px] w-[25px] h-[23px]"
          alt="Vector"
          src="/vector-1.svg"
        />
        <img
          className="absolute top-[7px] left-1.5 w-[98px] h-[31px]"
          alt="Vector"
          src="/vector-2.svg"
        />
        <div className="rounded-[20px] flex w-[63px] h-[13px] items-center gap-2 absolute top-[13px] left-5">
          <img
            className="relative w-[26px] h-[26px] mt-[-6.37px] mb-[-6.37px]"
            alt="Logo"
            src="/logo.svg"
          />
          <div className="relative w-fit mt-[-2.87px] mb-[-0.87px] mr-[-33.60px] [font-family:'Inria_Sans',Helvetica] font-normal italic text-black text-sm tracking-[0] leading-[normal]">
            GreenLeaf
          </div>
        </div>
      </div>

      <div className="absolute top-[607px] left-[calc(50.00%_-_620px)] w-[1239px] h-[580px]">
        <div className="absolute top-[51px] left-0 w-[1239px] h-[529px]">
          <img
            className="absolute top-0 left-[155px] w-[485px] h-[332px]"
            alt="Polygon"
            src="/polygon-2.svg"
          />
          <img
            className="absolute top-0 left-[599px] w-[485px] h-[332px]"
            alt="Polygon"
            src="/polygon-1.svg"
          />
          <img
            className="absolute top-[139px] left-[169px] w-[904px] h-[193px]"
            alt="Polygon"
            src="/polygon-3.svg"
          />
        </div>

        <div className="absolute top-0 left-[173px] w-[893px] h-[573px] flex justify-center bg-[#ffffff4c] rounded-[30px]">
          <div className="mt-[13px] w-[866px] h-[520px] ml-px relative">
            <img
              className="absolute top-0 left-0 w-[866px] h-[404px] rounded-[30px] object-cover"
              alt="Dashboard navigation"
              src="/dashboard---navigation-1.png"
            />
            <img
              className="absolute top-3 left-[5px] w-[25px] h-[23px]"
              alt="Vector"
              src="/vector-1.svg"
            />
            <img
              className="absolute top-[7px] left-1.5 w-[98px] h-[31px]"
              alt="Vector"
              src="/vector-2.svg"
            />
            <div className="rounded-[30px] flex w-[63px] h-[13px] items-center gap-2 absolute top-[13px] left-5">
              <img
                className="relative w-[26px] h-[26px] mt-[-6.37px] mb-[-6.37px]"
                alt="Logo"
                src="/logo.svg"
              />
              <div className="relative w-fit mt-[-2.87px] mb-[-0.87px] mr-[-33.60px] [font-family:'Inria_Sans',Helvetica] font-normal italic text-black text-sm tracking-[0] leading-[normal]">
                GreenLeaf
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
