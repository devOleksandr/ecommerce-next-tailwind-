"use client"
import {Breadcrumbs} from "@/modules/Products/Breadcrumbs";
import {Gallery} from "@/modules/SingleProduct/Gallery";
import {Rating} from "@/components/UI/Rating";
import {SizesRadioButton} from "@/components/UI/SizesRadioButton";
import {ColoredRadioButton} from "@/components/UI/ColoredRadioButton";
import {QuantityInput} from "@/components/UI/QuantityInput";
import {Information} from "@/modules/SingleProduct/Information";
import image1 from "@/public/product/1.webp";
import image2 from "@/public/product/2.webp";
import image3 from "@/public/product/3.webp";
import image4 from "@/public/product/4.webp";
import image5 from "@/public/product/5.webp";
import image6 from "@/public/product/6.webp";
import image7 from "@/public/product/7.webp";

const breadcrumbsData = {
  title: 'Shop',
  links: [
    {name: 'Home', value: '/'},
    {name: 'Shop', value: '/shop'},
  ]
}

const tempData = {

  images: [image1, image2, image3, image4, image5, image6, image7],
  name: 'Gore-Tex Salomon',
  shortDescription: 'Salomon',
  sku: '195751267335',
  review: {
    totalCount: 0,
    totalRating: 0,
  }

}

export const Page = () => {

  return (
    <section>
      <Breadcrumbs title={breadcrumbsData.title} links={breadcrumbsData.links}/>
      <div className="container">
        <div className="w-full grid grid-cols-2 gap-10 my-8">
          <Gallery data={tempData.images}/>
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