import Image from 'next/image';
import Link from 'next/link';
import { CiBookmarkCheck, CiLogout } from 'react-icons/ci';
import SidebarItem from './sidebarItem';
import { IoCalendarOutline, IoCheckboxOutline, IoListOutline } from 'react-icons/io5';
const menuItems = [
  {
    icon: <IoCalendarOutline />,
    path: '/dashboard',
    title: 'Dashboard'
  },
  {
    icon: <IoCheckboxOutline />,
    path: '/dashboard/rest-todos',
    title: 'Rest TODOS'
  },
  {
    icon: <IoListOutline />,
    path: '/dashboard/server-todos',
    title: 'Server Actions'
  },
]


export default function Sidebar() {

  return (
    <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
    <div>
      <div className="-mx-6 px-6 py-4">
        <Link href="#" title="home">
          <Image src="https://tailus.io/sources/blocks/stats-cards/preview/images/logo.svg" width={128} height={32} alt="tailus logo" />
        </Link>
      </div>

      <div className="mt-8 text-center">
        <Image src="https://tailus.io/sources/blocks/stats-cards/preview/images/second_user.webp" width={40} height={40} alt="" className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28" />
          <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">Cynthia J. Watts</h5>
          <span className="hidden text-gray-400 lg:block">Admin</span>
      </div>

      <ul className="space-y-2 tracking-wide mt-8">
        {menuItems.map((item, index) => (
          <SidebarItem key={index} icon={item.icon} path={item.path} title={item.title} />
        ))}
      </ul>
    </div>

    <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
      <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
        <CiLogout />
        <span className="group-hover:text-gray-700">Logout</span>
      </button>
    </div>
  </aside>
  );
}
