import { MutatingDots } from 'react-loader-spinner';

export default function Loader(props) {
  const { loading } = props;
  return (
    loading && (
      <MutatingDots
        height="150"
        width="150"
        color="#4fa94d"
        secondaryColor="#4fa94d"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    )
  );
}
