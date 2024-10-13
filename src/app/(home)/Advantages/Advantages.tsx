import { advantagesList, detailedAdvantagesList } from "./consts"
import { OurAdvantage } from "./OurAdvantage"
import "./Advantages.scss"

export const Advantages = () => {

    return (
        <div className="Advantages">
            <h2 className="text-center page__titles">
               Наши преимущества
            </h2>
            <div className="Advantages__list">
               {[
                  ...advantagesList,
                  ...detailedAdvantagesList
               ].map(
                  (item, index) => (
                     <OurAdvantage key={index} {...item} />
                  )
               )}
            </div>
        </div>
    )
}
