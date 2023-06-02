import { Oval } from "react-loader-spinner";

const Spinner = () => {
  return (
    <div className="flex flex-col h-screen w-full items-center justify-center">
      <Oval
        height={80}
        width={80}
        color="white"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="blue"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
};

export default Spinner;
