import {Breadcrumbs} from "@/modules/Products/Breadcrumbs";
import {HeadActions} from "@/modules/Products/HeadActions";
import {Card} from "@/modules/Products/Card";

const breadcrumbsData = {
  title: 'Shop',
  links: [
    {name: 'Home', value: '/'},
    {name: 'Shop', value: '/shop'},
  ]
}

export const Page = () => {

  return (
    <section>
      <Breadcrumbs title={breadcrumbsData.title} links={breadcrumbsData.links}/>
      {/*<HeadActions/>*/}
      <div className="container flex my-8">
        <aside className="min-w-[300px]"></aside>
        <div className="w-full grid grid-cols-3 gap-4">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
      </div>
    </section>
  )
}