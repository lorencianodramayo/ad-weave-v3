import { FlippingCubeLoader } from 'react-loaders-kit';

const loaderProps = {
  loading: true,
  colors: ['#fce24a', '#f16179', '#38a7c8', '#25275e'],
};

export default function Loader() {
  return (
    <div
      style={{
        position: 'absolute',
        backgroundColor: '#ffffff94',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <FlippingCubeLoader {...loaderProps} />
    </div>
  );
}
