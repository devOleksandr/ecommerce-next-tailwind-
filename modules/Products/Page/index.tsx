import {Breadcrumbs} from "@/modules/Products/Breadcrumbs";
import {HeadActions} from "@/modules/Products/HeadActions";
import {Card} from "@/modules/Products/Card";

export const Page = () => {

  return (
    <section>
      <Breadcrumbs/>
      <HeadActions/>
      <div className="w-full">
        <aside className="min-w-[200px]"></aside>
        <div className="w-full grid grid-cols-4">
          <Card/>
        </div>
      </div>
    </section>
  )
}