import dynamic from 'next/dynamic';

const DynamicComponentWithNoSSR = dynamic(() => import('./dashboard'), {
  ssr: false,
});

export default DynamicComponentWithNoSSR;
