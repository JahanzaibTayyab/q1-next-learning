import Link from "next/link";
const Name = () => {
  return (
    <div>
      <div className="flex gap-6 py-4 px-5">
        <Link href="/dashboard/settings">Settings</Link>
        <Link href="/dashboard/analytics">Analytics</Link>
      </div>
      Dashbaord
    </div>
  );
};

export default Name;
