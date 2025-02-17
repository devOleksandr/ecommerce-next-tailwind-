"use client"
import {Breadcrumbs} from "@/modules/Products/Breadcrumbs";
import {Gallery} from "@/modules/SingleProduct/Gallery";
import {Rating} from "@/components/UI/Rating";
import {SizesRadioButton} from "@/components/UI/SizesRadioButton";
import {ColoredRadioButton} from "@/components/UI/ColoredRadioButton";
import {QuantityInput} from "@/components/UI/QuantityInput";
import {Information} from "@/modules/SingleProduct/Information";

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
        <div className="w-full grid grid-cols-2 gap-10 my-8">
          <Gallery/>
          <div>
            <h2 className="mb-2">Asgaard sofa</h2>
            <Rating value={3} action={() => console.log("action")}/>
            <p className="mt-4 mb-5 max-w-[420px]">Setting the bar as one of the loudest speakers in its class, the
              Kilburn is a compact,
              stout-hearted hero
              with a well-balanced audio which boasts a clear midrange and extended highs for a sound. </p>
            <div className="mb-4">
              <SizesRadioButton title={'Size'} data={[{label: 'L', value: 'L'}, {label: 'XL', value: 'XL'}]}/>
            </div>
            <div className="mb-4">
              <ColoredRadioButton title={'Color'} data={[{label: 'blue', colorVariable: 'bg-gold'}, {
                label: 'gold',
                colorVariable: 'bg-gray'
              }]}/>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <button className="button-small mr-4" type="button">Add To Cart</button>
                <QuantityInput quantity={0} quantityHandler={() => console.log("quantity")}/>
              </div>
              <h4 className="text-black-main">2200$</h4>
            </div>
          </div>
        </div>
        <Information/>
      </div>
    </section>
  )
}