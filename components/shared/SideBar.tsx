import Image from "next/image";
import Link from "next/link";

const SideBar = () => {
  return (
    <aside className="sidebar">
      <div className="flex size-full flex-col gap-4">
        <Link href="/" className="sidebar-logo">
          <Image
            src="/assets/images/Pixo_Craft__3.png"
            alt="Logo"
            height={65}
            width={280}
          />
        </Link>
      </div>
    </aside>
  );
};

export default SideBar;
