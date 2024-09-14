import {
  NAME,
  BIO,
  EXPERIENCE,
  SIDE_PROJECTS,
  ACHIEVEMENTS,
} from "@/components/data/profile";
import { ArrowUpCircleIcon } from "@heroicons/react/24/outline";
import {
  ArrowTopRightOnSquareIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

export default function Home() {
  return (
    <main className="flex flex-col gap-5 w-full px-5 sm:px-24 pt-5">
      <div className="absolute right-8 top-screen-bottom-1 bottom-0 contain-paint pointer-events-none">
        <a
          href="#"
          className="sticky p-2 top-[85vh] pointer-events-auto"
          aria-label="Back to top"
        >
          <ArrowUpCircleIcon className="size-10 opacity-50 hover:opacity-100 hover:fill-blue-300 hover:animate-pulse" />
        </a>
      </div>

      <Bio />
      <Experience />
      <SideProjects />
      <Achievement />
    </main>
  );
}

function SideProjects(): ReactNode {
  return (
    <Section title="Side Projects">
      {SIDE_PROJECTS.map((project) => (
        <div key={project.id} className="flex flex-col gap-3">
          <div className="flex flex-col">
            <span className="font-bold">{project.name}</span>
            <span className="text-sm">{project.description}</span>
          </div>
          <ul className="list-disc ml-4">
            {project.links.map((link) => (
              <li key={link.name}>
                <Link href={link.link} target="_blank">
                  {link.name}
                  <ArrowTopRightOnSquareIcon className="inline size-2 align-top" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </Section>
  );
}

function Achievement(): ReactNode {
  return <GenericCollapsibleSection title="Achievement" data={ACHIEVEMENTS} />;
}

function Experience(): ReactNode {
  return <GenericCollapsibleSection title="Experience" data={EXPERIENCE} />;
}

function Bio() {
  return (
    <div className="bio">
      <div className="flex flex-col gap-5 sm:flex-row-reverse items-center sm:items-start w-fit mx-auto">
        <div className="min-w-[100px] w-1/2 sm:min-w-[150px] sm:w-[150px] sm:pt-2">
          <Image
            src="images/photo.jpg"
            alt="photo"
            height={512}
            width={512}
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <span className="text-center sm:text-left font-bold text-xl sm:text-2xl">
              {NAME}
            </span>
            <hr />
            {BIO.map((bio, index) => (
              <span key={index} className="text-center h-fit sm:text-left">
                {bio}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}): ReactNode {
  return (
    <div className="flex flex-col gap-3">
      <span className="text-xl font-bold text-center sm:text-left">
        {title}
      </span>
      <hr />
      {children}
    </div>
  );
}

interface CollapsibleData {
  id: string;
  name: string;
  image: string;
  date: string;
  title?: string;
  sections?: { id: string; title?: string; date?: string; details: string[] }[];
}

function GenericCollapsibleSection({
  title,
  data,
}: {
  title: string;
  data: CollapsibleData[];
}): ReactNode {
  return (
    <Section title={title}>
      {data.map((datum) => (
        <div key={datum.id} className="flex flex-col">
          <input
            id={title + "-toggle-" + datum.id}
            type="checkbox"
            className="peer hidden"
          />
          <label
            htmlFor={title + "-toggle-" + datum.id}
            className={"group" + (datum.sections ? " cursor-pointer" : "")}
          >
            <div className="flex flex-row gap-3">
              <Image src={datum.image} alt={"exp.id"} width={75} height={75} />
              <div className="flex flex-col">
                <span className="font-bold">
                  {datum.name}
                  {datum.title ? ", " + datum.title : ""}
                </span>
                <span className="text-sm">{datum.date}</span>
              </div>
              {datum.sections && (
                <ChevronDownIcon className="size-10 self-center ml-auto transition-transform peer-checked:group-[]:rotate-180" />
              )}
            </div>
          </label>
          <div className="overflow-hidden scroll-m-0 transition-height duration-500 max-h-0 peer-checked:max-h-[3999px]">
            <div className="p-4 flex flex-col gap-5">
              {datum.sections?.map((section) => (
                <div key={section.id} className="flex flex-col">
                  {section.title && (
                    <p className="font-bold">{section.title}</p>
                  )}
                  {section.date && <p className="text-sm">{section.date}</p>}
                  <ul className="pt-3 list-disc ml-4 first:pt-0">
                    {section.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </Section>
  );
}
