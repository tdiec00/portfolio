import Resume from "../../images/Resume.pdf"

export default function AboutMePage() {
  return (
    <div id="about" className=" text-white text-xl text-center flex flex-col justify-center h-1/2">
      <h1 className="text-4xl ">About Me</h1>
      <div className=" flex flex-wrap break-normal">
        <p className="mx-28 break-normal md:mx-44">
          Trung was born and raised in Boston Massachusetts, and has served as a healthcare professional for over a decade at two of the most prestigious hospitals in Massachusetts (Massachusetts
          General Hospital and Boston Medical Center). In November of 2020, Trung made one of the biggest decisions in his life, leaving behind his pharmacy career, and enrolling in General Assembly's
          12-week Software Engineering Immersive bootcamp. During his time with General Assembly, Trung gained knowledge of various languages and databases, along with the tools and understanding to
          continue growing his knowledge in the software development industry.
        </p>
        <br />
        <a className="font-medium text-white font-mono text-xs ... p-5 hover:scale-125 hover:text-stone-400" href={Resume} target="_blank" rel="noreferrer">
          ~ CD Resume
        </a>
      </div>
    </div>
  )
}
