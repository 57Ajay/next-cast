import { Link } from "lucide-react";
import Image from "next/image";

const LeftSidebar = () => {
  return (
    <section className="left_sidebar">
        <nav className="flex flex-col gap-6">
            <Link href="/">
                <Image src={} alt="logo"/>
            </Link>
        </nav>
    </section>
  );
};

export default LeftSidebar;