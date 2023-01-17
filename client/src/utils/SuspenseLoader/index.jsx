// React
import { useEffect } from 'react';
// Components
import NProgress from 'nprogress';

const SuspenseLoader = () => {
  useEffect(() => {
    NProgress.start();

    return () => {
      NProgress.done();
    };
  }, []);

  return <></>;
};

export default SuspenseLoader;
