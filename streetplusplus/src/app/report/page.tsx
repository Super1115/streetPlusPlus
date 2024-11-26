import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import ReportPage from "@/components/ReportPage"; // The client component
import { NextPage } from "next";



const Report: NextPage = withPageAuthRequired(
  async () => {
    return <ReportPage />;
  },
  { returnTo: "/api/auth/login" },
);

export default Report;