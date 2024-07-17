import { ReactNode } from "react";
import Image from "next/image";
import meCircle from "../../public/images/me-circle.png";

const P: React.FC<{ children?: ReactNode }> = ({children}) => <p className="text-base md:text-lg mb-4">{children}</p>
const H2: React.FC<{ children?: ReactNode }> = ({children}) => <h2 className="text-base md:text-lg mb-4 text-bright-purple font-bold">{children}</h2>

const ExpItem: React.FC<{ companyName: string, tag: string, description: string, url: string }> = ({ companyName, tag, description, url }) => (
  <li className="text-base font-bold md:text-lg pl-[1ch]">
    <div className="font-bold"><a href={url} target="_blank">{companyName}</a>&nbsp;<span className="text-bright-green">[{tag}]</span></div>
    <p className="font-normal">{description}</p>
  </li>
)

export default function Home() {
  return (
    <div className="px-6">
      <div className="max-w-[1150px] mx-auto">
        <header className="pt-9 md:pt-[72px] mb-6 md:mb-8">
          <div className="flex items-center">
            <Image src={meCircle} alt="Profile picture for Chris Ingram" className="w-[96px] md:w-[124px] mr-5" />
            <div className="">
              <h1 className="font-extrabold text-2xl md:text-3xl">Chris Ingram</h1>
              <p className="text-base md:text-xl">Entrepreneur & full-stack engineer</p>
            </div>
          </div>
        </header>
        <main className="flex flex-col md:flex-row">
          <article className="md:w-[58%] mr-20">
            <P>Hey 👋</P>
            <P>I’m an entrepreneur and software engineer based in London, UK. Since 2015 I’ve built digital products and led technical teams at early-stage startups.</P>
            <P>I’ve been coding since I was 12, when I built my first website and online game, SquaresGame, using Macromedia Flash MX and PHP 4  ❤️️</P>
            <H2>What do you do?</H2>
            <P>I co-run Basejam, a platform for finding and booking company retreat venues.</P>
            <P><strong>I help startups and indie businesses</strong> improve their technical architecture, confidently hire a technical team, and automate their marketing processes.</P>
            <H2>Who do you work with?</H2>
            <P>My freelance clients are usually angel-funded startups or bootstrapped indie businesses.</P>
            <H2>Experience</H2>
            <ul className="list-style-terminal pl-[1ch] space-y-2">
              <ExpItem companyName="Basejam" tag="co-founded" description="The go-to platform for company retreat venues." url="https://basejam.com" />
              <ExpItem companyName="Saint Storage" tag="freelance/contract" description="Summer storage platform for students." url="https://saintstorage.com" />
              <ExpItem companyName="Greenpixie" tag="founding team" description="Carbon measurement for the cloud." url="https://greenpixie.com" />
              <ExpItem companyName="HeyMirza" tag="head of engineering" description="Childcare access platform for workplaces" url="https://heymirza.com" />
              <ExpItem companyName="MadeBySphere" tag="co-founded" description="Ecommerce design and build agency" url="https://madebysphere.com" />
              <ExpItem companyName="Boxmove" tag="freelance/contract" description="Ecommerce platform for charity shops" url="https://boxmove.com" />
              <ExpItem companyName="inCase" tag="senior engineer" description="White-label client communication app for law firms" url="https://in-case.co.uk" />
              <ExpItem companyName="University of Sheffield / Public Health England" tag="software engineer" description="Active10 walking app for government health initiative" url="https://apps.apple.com/gb/app/nhs-active-10-walking-tracker/id1204295312" />
            </ul>
          </article>
          <aside className="md:flex-1">
            <P>I’m currently providing free 1-hour consultancy sessions on technical architecture, AWS, or marketing automation.</P>
          </aside>
        </main>
      </div>
    </div>
  );
}
