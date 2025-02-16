import {Breadcrumbs} from "@/modules/Products/Breadcrumbs";

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
      <div className="container">
        <h1>single</h1>
      </div>
    </section>
  )
}