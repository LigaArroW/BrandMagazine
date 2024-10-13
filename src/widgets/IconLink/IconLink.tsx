import { Icon } from '@/shared/ui/icon'
import Link from 'next/link'
import './IconLink.scss'

const IconLink = ({href, stroke, icon, count = 0}: any) => {
   return (
      <Link className="IconLink" {...{href}}>
         <Icon
            src={`/icon/${icon}.svg`}
            {...{stroke}}
         />
         {count > 0 &&
            <div className="IconLink__label">
               <span>
                  {count > 99 ? '++' : count}
               </span>
            </div>
         }
      </Link>
   )
}

export default IconLink