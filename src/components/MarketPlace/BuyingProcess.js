import React from 'react'
import "../../components/MarketPlace/compo.css";

const projectTimeLineData = [
  {
    date: 'September 3, 2023',
    boldText: 'Property put under contract by DAO LLC',
    para: 'SPV paperwork is complete and DAO LLC is tokenized.'
  },
  {
    date: 'September 2, 2023',
    boldText: 'Token Offering',
    para: "Lofty tokens are available to purchase. Once purchased, tokens will automatically be sent to the Algorand wallet address you've provided."
  },
  {
    date: 'TBD',
    boldText: 'Token Offering Complete',
    para: 'The fair-market-value (FMV) of the property over time is determined by taking the rate-of-change of the HouseCanary Automated Valuation Model (AVM) on a monthly basis, then applying that same rate-of-change to your token’s Principle Value on a monthly basis.'
  },
]




const BuyingProcess = () => {
  return (
    <>
      <div className='buying-process-main-container'>
        <div className='buying-process-container'>
          <h5 className='buying-process-heading'>Project Timeline</h5>
          <nav>
            <ol className='buying-ol'>
              {projectTimeLineData.map(({ boldText, date, para }, index) => (
                <li key={index} className="buying-li">
                  {!(index === projectTimeLineData.length - 1) && <div className="done-tick -ml-0.5 absolute mt-0.5 top-4 left-4 w-1 h-full bg-lofty-lightest dark:bg-lofty-purple" aria-hidden="true">
                  </div>}
                  <div className="buying-content relative flex items-start group">
                    <span className="buying-content-circle h-9 flex items-center">
                      <span className="buying-tick-svg relative z-10 w-8 h-8 flex items-center justify-center bg-lofty-lightest dark:bg-lofty-purple rounded-full group-hover:bg-themeBlue-800 dark:group-hover:bg-themeBlue-dark">
                        <svg className="buying-svg" width={'20px'} height={'20px'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                        </svg>
                      </span>
                    </span>
                    <span className="buying-text-container ml-4 min-w-0 flex flex-col">
                      <span className="buying-text-sub-container text-md tracking-wide text-lofty-dark opacity-70 dark:text-lofty-gray">{date}</span>
                      <span className="buying-text-sub-container-two text-md mb-2 md:text-lg font-semibold tracking-wide text-lofty-dark dark:text-white">{boldText}</span>
                      <span className="buying-text-sub-container-three text-md text-lofty-dark opacity-80 dark:text-lofty-gray">{para}</span>
                    </span>
                  </div>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </div>
    </>
  )
}

export default BuyingProcess