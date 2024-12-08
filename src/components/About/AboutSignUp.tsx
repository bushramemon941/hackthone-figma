const AboutSignUp = () => {
    return (
      <div className="relative w-[390px] top-[50rem] md:top-[27.5rem] h-[292px] md:w-[1440px] md:h-[481px] md:mt-[8rem] md:border-[3.5rem] md:border-[#F9F9F9] bg-white p-4 bottom-[5rem]">
        <div className="relative top-[4rem] flex flex-col md:items-center gap-[16px]">
          <h4 className="font-clash text-xl font-normal leading-[28px] md:text-5xl text-[#2a254b]">
            Join the club and get the benefits
          </h4>
          <p className="font-satoshi leading-[21px] font-normal text-[#2A254B] text-[14px] md:text-xl md:w-[540px] text-center">
            Sign up for our newsletter and receive exclusive offers on new ranges,
            sales, pop up stores and more
          </p>
        </div>
        <div className="md:relative mt-[6rem] flex md:justify-center">
          <input
            type="email"
            placeholder="your@email.com"
            className="bg-[#F9F9F9] placeholder:font-satoshi focus:outline-none py-4 px-5 md:w-[400px]"
          />
          <button className="px-[32px] py-[16px] bg-darkPrimary text-white font-satoshi font-normal leading-6 hover:bg-[#726E8D] hover:text-[#2A254B]">
            Sign up
          </button>
        </div>
      </div>
    );
  };
  
  export default AboutSignUp;