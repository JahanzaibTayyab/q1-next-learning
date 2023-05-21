import Link from "next/link";
const DashBoardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <div className="flex flex-col gap-6 py-4 px-5 bg-red-950 text-white">
        <Link href="/dashboard/settings">Settings</Link>
        <Link href="/dashboard/analytics">Analytics</Link>
      </div>
      <div className="flex flex-col">{children}</div>
    </div>
  );
};
export default DashBoardLayout;
