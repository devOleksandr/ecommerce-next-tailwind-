"use client"

import {informationEnums} from "@/modules/SingleProduct/Information/informationEnums";
import {useState} from "react";
import {Review} from "@/modules/SingleProduct/Review";


const tabs = [informationEnums.spec, informationEnums.description, informationEnums.review]

export const Information = () => {
  const [activeTab, setActiveTab] = useState<string>(informationEnums.spec)

  return (
    <div className="w-full">
      <div className="flex justify-center items-center py-3 bg-gray-light-3 mb-8">
        {
          tabs.map((item, index) => {
            return (
              <button
                key={index}
                onClick={() => setActiveTab(item)}
                className={`text-h6  mr-8 last:mr-0 hover:text-black-main ${activeTab === item ? 'text-black-main' : 'text-gray-light-2'}`}>{item}</button>
            )
          })
        }
      </div>
      <div className="w-full pb-8">
        <div className={`${activeTab === informationEnums.spec ? "block" : "hidden"}`}>
          <p><span>Specification</span>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active
            stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on
            the road.
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the
            bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a
            well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and
            pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the
            guitar-influenced leather strap enables easy and stylish travel.</p>
        </div>
        <div className={`${activeTab === informationEnums.description ? "block" : "hidden"}`}>
          <p><span>Description</span>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active
            stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on
            the road.
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the
            bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a
            well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and
            pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the
            guitar-influenced leather strap enables easy and stylish travel.</p>
        </div>
        <div className={`${activeTab === informationEnums.review ? "block" : "hidden"}`}>
          <Review/>
        </div>
      </div>
    </div>
  )
}