import { AnchorHTMLAttributes, ReactNode } from "react";
import Image from "next/image";
import meCircle from "../../public/images/me-circle.png";
import PHE from "../svg/phe.svg";
import Greenpixie from "../svg/greenpixie.svg";
import InCase from "../svg/in-case.svg";
import Boxmove from "../svg/boxmove.svg";
import Bankuet from "../images/bankuet.png";
import Habitude from "../images/habitude.png";
import cx from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faSquareTwitter, faTwitter, IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { faAt, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const P: React.FC<{ className?: string, children?: ReactNode }> = ({className, children}) => <p className={cx("text-base md:text-lg m-0 mb-4", className)}>{children}</p>
const H2: React.FC<{ children?: ReactNode }> = ({children}) => <h2 className="text-lg md:text-xl mb-4 text-bright-purple font-bold">{children}</h2>
const A: React.FC<AnchorHTMLAttributes<HTMLAnchorElement>> = ({children, ...props}) => <a className="text-bright-purple underline hover:text-bright-purple-light transition-colors duration-200" {...props}>{children}</a>

const ExpItem: React.FC<{ companyName: string, tag: string, description: string, url: string }> = ({ companyName, tag, description, url }) => (
  <li className="text-base font-bold md:text-lg pl-[1ch]">
    <div className="font-bold"><a href={url} target="_blank">{companyName}</a>&nbsp;<span className="text-bright-green">[{tag}]</span></div>
    <p className="font-normal">{description}</p>
  </li>
)

const HelpItem: React.FC<{ title: string, children?: ReactNode }> = ({ title, children }) => (
  <li className="text-base font-bold md:text-lg pl-[1ch]">
    <div className="font-bold">{title}</div>
    <div>{children}</div>
  </li>
)

const GetInTouchItem: React.FC<{ icon: IconDefinition, name: string, url: string }> = ({ icon, name, url }) => (
  <li className="flex items-center">
    <FontAwesomeIcon icon={icon} className="w-6 !h-auto mr-2 text-slate-700" />
    <div className="flex-1 text-base">
      <a target="_blank" href={url}>{name}</a>
    </div>
  </li>
)

export default function Home() {
  return (
    <div className="px-6">
      <div className="max-w-[1150px] mx-auto mb-8">
        <header className="pt-9 md:pt-[72px] mb-6 md:mb-8">
          <div className="flex items-center">
            <Image src={meCircle} alt="Profile picture for Chris Ingram" className="w-[96px] md:w-[124px] mr-5" />
            <div className="">
              <h1 className="font-extrabold text-2xl md:text-3xl">Chris Ingram</h1>
              <p className="text-base md:text-xl">Entrepreneur & full-stack engineer</p>
            </div>
          </div>
        </header>
        <main className="flex flex-col md:flex-row items-start">
          <article className="md:w-[56%] mb-8 md:mb-0 md:mr-20">
            <P>I’m an entrepreneur and software engineer based in London, UK. Since 2015 I’ve built digital products and led technical teams at early-stage startups.</P>
            <P className="mb-8">I’ve been coding since I was 12, when I built my first website and online game, SquaresGame, using Macromedia Flash MX and PHP 4  ❤️️</P>
            <H2>What do you do?</H2>
            <P>I co-run <A href="https://basejam.com">Basejam</A>, a platform for finding and booking company retreat venues.</P>
            <P className="mb-8"><strong>I help startups and indie businesses</strong> improve their technical architecture, confidently hire a technical team, and automate their marketing processes.</P>
            <H2>Who do you work with?</H2>
            <P className="mb-8">My freelance clients are usually angel-funded startups or bootstrapped indie businesses.</P>
            <H2>Experience</H2>
            <ul className="list-style-terminal pl-[1ch] space-y-2 mb-8">
              <ExpItem companyName="Basejam" tag="co-founded" description="The go-to platform for company retreat venues" url="https://basejam.com" />
              <ExpItem companyName="Saint Storage" tag="freelance/contract" description="Summer storage platform for students" url="https://saintstorage.com" />
              <ExpItem companyName="Greenpixie" tag="founding team" description="Carbon measurement for the cloud" url="https://greenpixie.com" />
              <ExpItem companyName="HeyMirza" tag="head of engineering" description="Childcare access platform for workplaces" url="https://heymirza.com" />
              <ExpItem companyName="MadeBySphere" tag="co-founded" description="Ecommerce design and build agency" url="https://madebysphere.com" />
              <ExpItem companyName="Boxmove" tag="freelance/contract" description="Ecommerce platform for charity shops" url="https://boxmove.com" />
              <ExpItem companyName="inCase" tag="senior engineer" description="White-label client communication app for law firms" url="https://in-case.co.uk" />
              <ExpItem companyName="Public Health England" tag="software engineer" description="Active10 walking app for government health initiative with University of Sheffield" url="https://apps.apple.com/gb/app/nhs-active-10-walking-tracker/id1204295312" />
            </ul>
            <H2>How I can help 🚀</H2>
            <ul className="list-style-terminal pl-[1ch] space-y-2 mb-4">
              <HelpItem title="Technical architecture">
                <p className="font-normal">Reaching the limits of your no-code platform? Or just unsure on the best next step? I help clients to plan and execute their vision, without over-engineering.</p>
              </HelpItem>
              <HelpItem title="AWS for startups">
                <p className="font-normal">Diagnose issues, connect to external platforms, improve reliability, reduce unnecessary costs.</p>
              </HelpItem>
              <HelpItem title="Building an initial technical team">
                <p className="font-normal">Help hiring the right people for an initial technical team.</p>
              </HelpItem>
              <HelpItem title="Marketing automation">
                <p className="font-normal">Writing and running highly targeted cold email campaigns and follow ups.</p>
              </HelpItem>
              <HelpItem title="Automation of internal processes">
                <p className="font-normal">Calendar full of recurring manual tasks? Let’s write some scripts to automate that.</p>
              </HelpItem>
            </ul>
            <P>If we work together we’ll usually start with an audit of your current setup. Based on your goals, we’ll choose the best way for me to help.</P>
            <P className="mb-8">I’m currently providing <strong>free 1-hour consultancy</strong> sessions on any of the above areas.</P>
            <H2>Software engineering 🛠️</H2>
            <P>With experience in many languages and architectures, I’ve mainly built products and platforms from the ground up using: <strong>Ruby on Rails, Typescript, React, Node.js and Postgres.</strong></P>
            {/* <P>I’m particularly experienced at parachuting into existing setups and getting up to speed quickly.</P> */}
            <P className="mb-0">I’m particularly experienced in connecting new architectures to legacy systems, to quickly get new versions in front of users.</P>
          </article>
          <aside className="md:flex-1 md:sticky md:top-8">
            {/* <div className="flex flex-wrap items-center gap-x-5 gap-y-3 mb-12">
              <PHE />
              <Greenpixie />
              <InCase />
              <Boxmove />
              <Image src={Bankuet} alt="Bankuet logo" className="w-[107px] h-full mb-5" />
              <Image src={Habitude} alt="Habitude logo" className="w-[119px] h-full" />
            </div> */}
            <H2>Availability</H2>
            <P className="mb-4">🟢 Short-term freelance/consultancy</P>
            <P className="mb-4">🟢 <strong>Free 1-hour consultancy sessions</strong> on technical architecture, AWS, or marketing automation. <A href="#">Book a call</A></P>
            {/* <P className="mb-8"><button className="bg-bright-purple hover:bg-bright-purple-light transition-colors duration-200 text-white rounded-md px-4 py-0.5">Book here &rarr;</button></P> */}
            {/* <P>🟢 I also currently have <strong>availability for longer-term software engineering projects.</strong></P> */}
            <P className="mb-8">🟢 Longer-term software engineering projects</P>
            <H2>Get in touch ⬇️</H2>
            <ul className="space-y-1">
              <GetInTouchItem icon={faLinkedin} name="chris-james-ingram" url="https://www.linkedin.com/in/chris-james-ingram/" />
              <GetInTouchItem icon={faSquareTwitter} name="chrisjingram" url="https://twitter.com/chrisjingram" />
              <GetInTouchItem icon={faAt} name="chris@chrisingram.me" url="mailto:chris@chrisingram.me" />
            </ul>
          </aside>
        </main>
      </div>
    </div>
  );
}
