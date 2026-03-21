import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdDownload, MdOpenInNew } from "react-icons/md";
import { HiDocumentText } from "react-icons/hi";
import { IconType } from "react-icons";

export const actionIcons: Record<string, IconType> = {
  github: FaGithub,
  linkedin: FaLinkedin,
  email: MdEmail,
  
  download: MdDownload,
  view: MdOpenInNew,
  document: HiDocumentText,
}