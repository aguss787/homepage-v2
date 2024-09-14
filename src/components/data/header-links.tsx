import { ReactNode } from "react";
import {
  AdjustmentsVerticalIcon,
  BriefcaseIcon,
  CodeBracketIcon,
  DocumentIcon,
} from "@heroicons/react/24/solid";

interface HeaderLink {
  key: string;
  label: string;
  sidebarIcon: ReactNode;
  target: string;
}

export const HEADER_LINK: HeaderLink[] = [
  {
    key: "resume",
    label: "Resume",
    sidebarIcon: <DocumentIcon className="size-5 inline-block" />,
    target: "https://cdn.agus.dev/resume.pdf",
  },
  {
    key: "github",
    label: "Github",
    sidebarIcon: <CodeBracketIcon className="size-5 inline-block" />,
    target: "https://github.com/aguss787",
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    sidebarIcon: <BriefcaseIcon className="size-5 inline-block" />,
    target: "https://www.linkedin.com/in/aguss787",
  },
  {
    key: "url-shortener",
    label: "URL Shortener",
    sidebarIcon: <AdjustmentsVerticalIcon className="size-5 inline-block" />,
    target: "https://admin.s.agus.dev",
  },
];
