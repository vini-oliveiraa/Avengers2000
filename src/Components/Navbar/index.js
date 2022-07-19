import React from 'react'

const Navbar = () => {
  return (
    <div>
       
<nav className="bg-black border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-800">
  <div className="container flex flex-wrap justify-between items-center mx-auto">
      <img src="https://gm1.ggpht.com/E4acAYP2_VDQbwVGB_9-tEOnDTOi9bSZSfwNcVLnPmrGOwKVJoAiePur0OSGfYK_uCG0dRhhRC2Llw2d7hcu1ByXI0yURDDMrs0URMle4wLWYrq2pBPieQs0V86CrXdqBNKKovLMd2fvR0tOOoyiLM7mgyd5Wf6bjcASy8efmoPaJP7xwkNqFNAl0-9d1wnGvSnxaTyLP2fXOJuwax-rBpDfNZ65AzLMIHZPuLI2zpYd4m146WgG2_iCNlNGBrUc2g78bU5KkkkQ_55X_66gC-qqcc3RXDxf_EkMcxendqv_0MQf_LTekje3cgNjApKSD6DFGEA_vjJxTqobPsX43VlinZrGjYyEnHWcOpTqzF44DfY-UOqO5HKamNyGASAd1oAVYHKSSAGFP3HnXqoxCkhi4khGX-1NBOcWb86eqsOVceg-FxMVwJ5dl7dSTr4LziOR32SICg86gtNgdXXYGQtnet_RYw6z3krgGTAsVR4SWzDOlQWfRNBUa503TAj3GvE1pxH_OnNnvkawxXXynq1X6w35bambMhiTeZY9xWidF_wQUt9mBY_wLKknlCupH3rwQd3enpmqfX4guciV6iV8ZcW4Ysw2L60dXnszJ1lSZfGS0_LOEwDPd-xUWuZePrhijn1qDu85y1RyosxSNKwEKUvglj4bzQ1ABB8Yfecjrerq7umJf5xQgCzFMDftdINDZhmaY5AIZwV2idQ7SJ_dyrI8cGnNO0jhu3saixfhF3YUMQYmNEpsZl07DCf4wmW0EAcsi4aqVaAaNywOL96jDPWaz9E969LU9ONCKxUKgrYUCA=s0-l75-ft-l75-ft" 
      className="mr-6 h-12 sm:h-18" alt="Avengers Logo" />
      <span className="self-center text-red-500 font-semibold whitespace-nowrap">Em um dia como nenhum outro...</span>
  <div className="flex md:order-2">
    <button type="button" data-collapse-toggle="mobile-menu-3" aria-controls="mobile-menu-3" aria-expanded="false" className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1">
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
    </button>
    <div className="hidden relative md:block">
      <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
        <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
      </div>
      <input type="text" id="search-navbar" className="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" placeholder="Search..."/>
    </div>
    <button data-collapse-toggle="mobile-menu-3" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-3" aria-expanded="false">
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
  </div>
    <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-3">
      <div className="relative mt-3 md:hidden">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        </div>
        <input type="text" id="search-navbar" className="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" placeholder="Search..."/>
      </div>
      <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
        <li>
          <a href="#" className="block py-2 pr-4 pl-3 text-white bg-red-700 rounded md:bg-transparent md:text-red-700 md:p-0 dark:text-white" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Sobre</a>
        </li>
        <li>
          <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Capítulos</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar