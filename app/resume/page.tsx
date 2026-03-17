import ResumeViewer from "@/components/resume/ResumeViewer";
import CoverLetterViewer from "@/components/resume/CoverLetterViewer";
import Credentials from "@/components/resume/Credentials";

export default function ResumePage() {
  return (
    <>
      <ResumeViewer />
      <Credentials />
      <CoverLetterViewer />
    </>
  );
}