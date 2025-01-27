import {Breadcrumbs} from "@/modules/Products/Breadcrumbs";
import {HeadActions} from "@/modules/Products/HeadActions";
import {Card} from "@/modules/Products/Card";

const breadcrumbsData = {
  title: 'Shop',
  links: [
    {name: 'Home', value: '/'},
    {name: 'Shop', value: '/shop'},
    {name: 'Shop', value: '/shop'},
    {name: 'Shop', value: '/shop'},
  ]
}

export const Page = () => {

  return (
    <section>
      <Breadcrumbs title={breadcrumbsData.title} links={breadcrumbsData.links}/>
      {/*<HeadActions/>*/}
      {/*<div className="w-full">*/}
      {/*  <aside className="min-w-[200px]"></aside>*/}
      {/*  <div className="w-full grid grid-cols-4">*/}
      {/*    <Card/>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </section>
  )
}