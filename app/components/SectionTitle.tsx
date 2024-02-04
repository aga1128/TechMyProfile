type props = {
  title: string;
}
const SectionTitle = ({ title }: props) => {
  return (
      <>
          <h3 className="flex justify-center items-center relative py-10 font-bold text-2xl tracking-widest after:w-40 after:h-0.5 after:bg-font-color after:absolute after:bottom-6">
            { title }
          </h3>
      </>
  )
}

export default SectionTitle