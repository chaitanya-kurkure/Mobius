import Image from "next/image"

export default function Footer() {
  return(
    <>
      <footer>
        <div className="w-90 centered">
          <div>
            <Image
              src="/images/footers-logo.png"
              alt="Footer logo"
              width={150}
              height={90}
            />
          </div>
          <hr className="mt-30 mb-20 w-20"/>
          <div className="color-blue flex-center flex-wrap gap-40">
            <div className="pr-60 mr-60">
              <p className="pb-10 underline">Address</p>
              <p>1875 Mission St Ste 103 #450 <br />
              San Francisco, CA 94103</p>
            </div>
            <div className="pr-60 mr-60">
              <p className="pb-10 underline">Email</p>
              <a href="mailto:finance@mobiusengine.ai" target="_blank" className="color-blue underline">finance@mobiusengine.ai</a>
            </div>
            <div>
              <p className="pb-10 underline">Telephone</p>
              <a href="tel:650-889-6026" target="_blank" className="color-blue ">650-889-6026</a>
            </div>
            <div className="spacer"></div>
            <div className="socials-links">
              <p className="pb-10 underline">Socials</p>
              <a href="" className="color-blue mr-10" ><i className="bi bi-linkedin"></i></a><a href="" className="color-blue "><i className="bi bi-instagram"></i></a>
            </div>
          </div>
        </div>
        <div className="divider-3"></div>
        <div className="flex-center footer-bottom flex-wrap">
          <p>© 2023 Mobiusservices LLC</p>
          <div className="spacer"></div>
          <div className="flex-center gap-30">
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </footer>
    </>
  )
}