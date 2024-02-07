type props = {
  title: string;
}
const SectionTitle = ({ title }: props) => {
  const firstLetter = title.slice(0, 1);
  const otherLetter = title.slice(1)
  return (
      <>
          <h3 className="flex justify-center items-end relative py-10 font-bold text-2xl tracking-widest after:w-40 after:h-0.5 after:bg-font-color after:absolute after:bottom-6">
            <span className="text-4xl text-red-400 align-bottom">{ firstLetter }</span>{ otherLetter }
          </h3>
      </>
  )
}

export default SectionTitle