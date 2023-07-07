

import PageLayout from 'components/PageLayout.js';
import CircleMenu from 'components/CircleMenu';
import { useEffect } from 'react';
export default function ShitInTheRiver() {


  useEffect(async () => {
    async function getGuage() {
      fetch('https://www.portlandoregon.gov/bes/bigpipe/gauge.cfm', {
        mode: "no-cors"
      })
        .then(response => console.log(response))
        .catch(e => console.log(e))
        fetch('https://www.portland.gov/bes/big-pipe-tracker')
          .then(response => console.log(response))
          .catch(e => console.log(e))
        
      }
    await getGuage();
  }, []);


  return (
    <PageLayout>
      <iframe style={{border: 'none'}}width="300px" height="300px" src="https://www.portlandoregon.gov/bes/bigpipe/gauge.cfm"></iframe>
      <iframe width="854" height="480" frameBorder="0" allowFullscreen="" style={{border:'0'}} src="https://www.portlandoregon.gov/bes/bigpipe/chart.cfm"></iframe>
    </PageLayout>
  );
}
