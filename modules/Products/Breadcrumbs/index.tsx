import Link from "next/link";
import ArrowIcon from "@/public/icons/svg/dashicons_arrow-down-alt2.svg"
import Image from "next/image";
import bannerPic from "@/public/home/banner/bg.png";

interface IBreadcrumbs {
  title: string,
  links: Array<{ name: string, value: string }>
}


export const Breadcrumbs = (props: IBreadcrumbs) => {
  const {title, links} = props


  return (
    <div className="relative min-h-[240px] flex justify-center items-center">
      <Image src={bannerPic} alt={'banner pic'} quality={100}
             className="absolute w-full left-0 top-0 -z-10 object-cover h-[100%] blur-sm"/>
      <div>
        <h2 className="mb-2 text-center">{title}</h2>
        <ul className="flex items-center">
          {
            links.map((item, index) => (
              <li className="flex items-center mr-3 grop group">
                <Link href={item.value} className="pr-2 group-hover:underline">{item.name}</Link>
                {(links.length !== index + 1) && (<ArrowIcon className=""/>)}
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}