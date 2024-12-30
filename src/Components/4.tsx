<<<<<<< HEAD
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import Image from "next/image";

export default function Download() {
  return (
    <>
      <section className="w-full overflow-hidden flex justify-center flex-wrap bg-gradient-to-r from-orange-500 to-yellow-500 items-center h-auto calLastSection px-3 md:px-[72px] pb-10 md:pb-[72px] pt-10 md:pt-[155px] mq450:gap-5 mt-10 md:mt-[100px]">
        <div className="bg-[#171717] p-10 flex-col md:flex-row md:relative md:h-[600px] md:max-h-[600px] max-h-auto w-full flex justify-center items-center px-4 md:px-10 mq450:py-7 rounded-[32px]">
          <div
            className="flex-1 w-full flex flex-col justify-start items-start"
            data-aos="fade-up"
          >
            <h4 className="text-[34px] md:text-[45px] text-[#D4D4D4] font-black leading-normal">
              Download Swasthi: Your
            </h4>
            <h1 className="text-[36px] md:text-[48px] text-[#F5F5F5] font-black leading-normal break-words">
              <span className="mr-3 block md:inline bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
                Health Companion
              </span>
            </h1>

            <h4 className="text-[16px] md:text-[18px] max-w-[484px] text-[#D4D4D4] font-normal leading-[22px] mt-3">
              Get Swasthi now on your Android or iOS device. Start your journey
              to a healthier you with just one click!
            </h4>
            <div className="flex gap-2 md:gap-6 mt-6 md:mt-12 mq450:mb-7">
              {/* App Store Button */}
              <Dialog>
                <DialogTrigger asChild>
                  <button className="relative inline-flex h-auto overflow-hidden bg-gradient-to-r from-orange-600 to-yellow-500 border-2 border-white rounded-[8px]">
                    <span className="inline-flex h-[61px] w-full gap-1 md:gap-[14px] cursor-pointer items-center justify-center rounded-[8px]  py-2 md:py-[15px] px-3 md:px-[21px] text-sm font-medium text-white backdrop-blur-3xl">
                      <span>
                        <Image
                          src="/apple.png"
                          alt="App Store"
                          width={24}
                          height={24}
                          className="w-6 h-6"
                        />
                      </span>
                      <div className="text-left">
                        <span className="block text-xs font-bold leading-tight">
                          Download on the
                        </span>
                        <span className="block text-lg font-semibold leading-tight">
                          App Store
                        </span>
                      </div>
                    </span>
                  </button>
                </DialogTrigger>
                <DialogContent className="download-btn-modal-card w-[300px] md:w-full sm:max-w-[495px] flex flex-col justify-center items-center pb-8">
                  <h6>Coming Soon</h6>
                  <h4 className="w-[240px] md:w-[300px] text-[#E5E5E5] text-[24px] md:text-[33px] text-center leading-normal">
                    Scan & Download{" "}
                    <span className="mid-heading bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent font-bold text-[28px] md:text-[38px]">
                      SWASTHI
                    </span>{" "}
                    App
                  </h4>
                </DialogContent>
              </Dialog>

              {/* Google Play Button */}
              <Dialog>
                <DialogTrigger asChild>
                  <button className="relative inline-flex h-auto bg-gradient-to-r from-orange-600 to-yellow-500 overflow-hidden border-2 border-white rounded-[8px]">
                    <span className="inline-flex h-[61px] w-full gap-1 md:gap-[14px] cursor-pointer items-center justify-center rounded-[8px] py-2 md:py-[15px] px-3 md:px-[21px] text-sm font-medium text-white">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="27"
                          height="29"
                          className="w-[22px] md:w-[27px] h-[25px] md:h-[29px]"
                          viewBox="0 0 27 29"
                          fill="none"
                        >
                          <path
                            d="M4.91987 28.0649C4.28691 28.4735 3.52669 28.5971 2.81348 28.4288L15.3455 15.9102L19.4071 19.9674L4.91987 28.0649Z"
                            fill="#F5F5F5"
                          />
                          <path
                            d="M1.2577 27.4095C0.908256 26.9453 0.707031 26.3754 0.707031 25.7724V3.47296C0.707031 2.87003 0.908256 2.30009 1.2577 1.83594L14.0581 14.6226L1.2577 27.4095Z"
                            fill="#F5F5F5"
                          />
                          <path
                            d="M24.7073 17.004L21.057 19.0442L16.6318 14.6238L21.0573 10.2031L24.708 12.2436C25.5825 12.733 26.1047 13.6228 26.1047 14.6238C26.1047 15.6248 25.5825 16.5144 24.7073 17.004Z"
                            fill="#F5F5F5"
                          />
                          <path
                            d="M15.3446 13.3383L2.81348 0.820392C3.01887 0.772034 3.228 0.746094 3.43703 0.746094C3.95382 0.746094 4.46869 0.892876 4.91912 1.18356L19.4064 9.28092L15.3446 13.3383Z"
                            fill="#F5F5F5"
                          />
                        </svg>
                      </span>
                      <div className="text-left">
                        <span className="block text-xs font-bold leading-tight">
                          Get it on
                        </span>
                        <span className="block text-lg font-semibold leading-tight">
                          Google Play
                        </span>
                      </div>
                    </span>
                  </button>
                </DialogTrigger>
                <DialogContent className="download-btn-modal-card w-[300px] md:w-full sm:max-w-[495px] flex flex-col justify-center items-center pb-8">
                  <Image
                    src="/qrcode.png"
                    alt="Swasthi QR Code"
                    width={200}
                    height={200}
                    className="w-[200px] h-[200px] md:w-[300px] md:h-[300px]"
                  />
                  <h4 className="w-[240px] md:w-[300px] text-[#E5E5E5] text-[24px] md:text-[33px] text-center leading-normal">
                    Scan & Download{" "}
                    <span className="mid-heading bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent font-bold text-[28px] md:text-[38px]">
                      SWASTHI
                    </span>{" "}
                    App
                  </h4>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          <div className="relative sm:-top-28 md:-top-28 lg:-top-28 top-2 animate-floating">
            <Image
              src="/Mockup Mobile.png"
              alt="Mobile Mockup"
              width={400}
              height={400}
              className="sm:mt-10"
            />
          </div>
        </div>
      </section>
    </>
  );
}
=======
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import Image from "next/image";

export default function Download() {
  return (
    <>
      <section className=" w-full overflow-hidden flex justify-center flex-wrap bg-gradient-to-r from-orange-500 to-yellow-500 items-center h-auto calLastSection px-3 md:px-[72px] pb-10 md:pb-[72px] pt-10 md:pt-[155px] mq450:gap-5 mt-10 md:mt-[100px]">
        <div className="bg-[#171717] p-10 flex-col md:flex-row md:relative md:h-[600px] md:max-h-[600px] max-h-auto w-full flex justify-center items-center px-4 md:px-10 mq450:py-7 rounded-[32px]">
          <div
            className="flex-1 w-full flex flex-col justify-start items-start"
            data-aos="fade-up"
          >
            <h4 className="text-[36px] md:text-[48px] text-[#D4D4D4] font-black leading-normal">
              Download Swasthi: Your
            </h4>
            <h1 className="text-[36px] md:text-[48px] text-[#F5F5F5] font-black leading-normal break-words">
              <span className="mr-3 block md:inline bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
                Health Companion
              </span>
            </h1>

            <h4 className="text-[16px] md:text-[18px] max-w-[484px] text-[#D4D4D4] font-normal leading-[22px] mt-3">
              Get Swasthi now on your Android or iOS device. Start your journey
              to a healthier you with just one click!
            </h4>
            <div className="flex gap-2 md:gap-6 mt-6 md:mt-12 mq450:mb-7">
              {/* App Store Button */}
              <Dialog>
                <DialogTrigger asChild>
                  <button className="relative inline-flex h-auto overflow-hidden bg-gradient-to-r from-orange-600 to-yellow-500 border-2 border-white rounded-[8px]">
                    <span className="inline-flex h-[61px] w-full gap-1 md:gap-[14px] cursor-pointer items-center justify-center rounded-[8px]  py-2 md:py-[15px] px-3 md:px-[21px] text-sm font-medium text-white backdrop-blur-3xl">
                      <span>
                        <Image
                          unoptimized={true}
                          quality={100}
                          width={50}
                          height={50}
                          src="/apple.png"
                          alt="App Store"
                          className="w-6 h-6"
                        />
                      </span>
                      <div className="text-left">
                        <span className="block text-xs font-bold leading-tight">
                          Download on the
                        </span>
                        <span className="block text-lg font-semibold leading-tight">
                          App Store
                        </span>
                      </div>
                    </span>
                  </button>
                </DialogTrigger>
                <DialogContent className="download-btn-modal-card w-[300px] md:w-full sm:max-w-[495px] flex flex-col justify-center items-center pb-8">
                  <h6>Coming Soon</h6>
                  <h4 className="w-[240px] md:w-[300px] text-[#E5E5E5] text-[24px] md:text-[33px] text-center leading-normal">
                    Scan & Download{" "}
                    <span className="mid-heading bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent font-bold text-[28px] md:text-[38px]">
                      SWASTHI
                    </span>{" "}
                    App
                  </h4>
                </DialogContent>
              </Dialog>

              {/* Google Play Button */}
              <Dialog>
                <DialogTrigger asChild>
                  <button className="relative inline-flex h-auto bg-gradient-to-r from-orange-500 to-yellow-500 overflow-hidden border-2 border-white rounded-[8px]">
                    <span className="inline-flex h-[61px] w-full gap-1 md:gap-[14px] cursor-pointer items-center justify-center rounded-[8px]  py-2 md:py-[15px] px-3 md:px-[21px] text-sm font-medium text-white">
                      <span>
                        <Image
                          unoptimized={true}
                          quality={100}
                          width={50}
                          height={50}
                          src="/playstore.png"
                          alt="Google Play"
                          className="w-6 h-6"
                        />
                      </span>
                      <div className="text-left">
                        <span className="block text-xs font-bold leading-tight">
                          Get it on
                        </span>
                        <span className="block text-lg font-semibold leading-tight">
                          Google Play
                        </span>
                      </div>
                    </span>
                  </button>
                </DialogTrigger>
                <DialogContent className="download-btn-modal-card w-[300px] md:w-full sm:max-w-[495px] flex flex-col justify-center items-center pb-8">
                  <h6>Coming Soon</h6>
                  <h4 className="w-[240px] md:w-[300px] text-[#E5E5E5] text-[24px] md:text-[33px] text-center leading-normal">
                    Scan & Download{" "}
                    <span className="mid-heading bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent font-bold text-[28px] md:text-[38px]">
                      SWASTHI
                    </span>{" "}
                    App
                  </h4>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          <div className="relative sm:-top-28 md:-top-28 lg:-top-28 top-2 animate-floating">
            <Image
              unoptimized={true}
              quality={100}
              width={50}
              height={50}
              src="/Mockup Mobile.png"
              alt="none"
              className="sm:mt-10 w-auto h-auto"
            />
          </div>
        </div>
      </section>
    </>
  );
}
>>>>>>> 2b8ec70e367b15bdf5d40f299968819c031792d9
