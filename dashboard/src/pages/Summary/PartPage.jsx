import * as React from 'react';
import SummaryPage from './SummaryPage';
import './PartPage.scss';
const PartPage = () => {
  

  return (
    <div className='partPage'>
      <SummaryPage/>
      <div className='container'>
        <div className='barChart'>
          barchart
        </div>
        <div className='progressBar'>
          progressbar
        </div>
        <div className='table'>
          table
        </div>
        <div className='graph'>
          graph
        </div>
        <div className='exportButton'>
          export
        </div>

      </div>
    </div>
  );
};

export default PartPage;
