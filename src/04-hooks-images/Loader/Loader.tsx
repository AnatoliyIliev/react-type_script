import { TailSpin } from 'react-loader-spinner';
import '../ImageFinderHooks.css';

function Loader() {
  return (
    <TailSpin
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperClass="Loader"
      visible={true}
    />
  );
}

export default Loader;
