import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Step } from './Step';
import { BackButton } from './BackButton';
import { DownloadButton } from './DownloadButton';
import data from '../data.json';
//should steps be able to be some sort of markdown or even html?

export function Walkthrough() {
  let params = useParams();
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState([]);

  useEffect(() => {
    //get data where id = params.id
    //set loading
    //fetch
    const thisItem = data.find((item) => item.id === parseInt(params.id, 10));
    setDetails(thisItem);
    setLoading(false);
  }, [params]);

  return (
    <>
      <div>
        <BackButton to={'/'} />
      </div>
      <div className='p-6'>
        <div className='font-bold'>{loading ? 'loading' : details.title} </div>
        {loading ? (
          <div>loading</div>
        ) : (
          <>
            <div className='pb-2 border-b'>{details.description}</div>
            {details.steps.map((step, index) => {
              return <Step key={step.step} details={step} />;
            })}
            <div className='py-4 float-right'>
              <DownloadButton disabled={loading} content={details} />
            </div>
          </>
        )}
      </div>
    </>
  );
}
