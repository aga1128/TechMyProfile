type props = {
    title: string;
  }
  const FlexItemBox = ({ title }: props) => {
    return (
        <>
            <h3 className="
            flex justify-center items-center relative text-string-black font-bold text-2xl tracking-widest
            after:w-40 after:h-0.5 after:bg-black after:absolute after:-bottom-1.5
            ">
              { title }
            </h3>
        </>
    )
  }
  
  export default FlexItemBox