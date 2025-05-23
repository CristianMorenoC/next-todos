// Admin Dashboard https://tailwindcomponents.com/component/dashboard-12
import Sidebar from '@/components/sidebar';
import TopMenu from '@/components/topmenu';
import { CiBookmarkCheck } from 'react-icons/ci';


export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Sidebar/>
      <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] min-h-screen">
        <TopMenu />
        <div className="px-6 pt-6">
          {children}
        </div>
      </div>
    </>
  );
}