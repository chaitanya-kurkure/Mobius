import Image from "next/image";
import Cards from "./_components/cards";
import Footer from "./_components/footer";

const howItWorksSection = [
  {id: 1 , data: "Submit Intake Form"},
  {id: 2 , data: "We do the search and curation for list of jobs"},
  {id: 3 , data: "You approve, we do the tedious part (applying)"},
  {id: 4 , data: "You get the interviews"}
]

const aboutUsSection = [
  { src: "/images/about-us-img1.png", descriptionText: "<p><strong>Ashwin</strong> is the founder of mobiusengine.ai. He is an accomplished senior executive with over 20 years of experience in cloud infrastructure and financial services. With over 2 decades of experience at Google and JP Morgan, Ashwin held various product and GTM roles. Ashwin is an MBA holder from Yale University.</p> <p>Ashwin's vision with Mobius is to give job seekers a significant advantage in securing the roles of their dreams.</p>"},
  { src: "/images/about-us-img2.png", descriptionText: "<p><strong>Nicole</strong> is an Executive coach at Mobius specializing in resume builds and career advisory.</p><p>With a B.S. in Business Administration from UC Berkeley and 7+ years of experience in AI-driven product strategy, she has seen firsthand how the proper positioning opens doors. She takes a targeted, results-driven approach to help clients confidently stand out and land roles that truly match their skills and potential.</p>" },
]

const testimonialsSection = [
  { src: "https://www.youtube.com/embed/-qf14SRRTAg?si=Z-wxoM9Ln-_V4VXT", descriptionText: "Holly is a <strong>senior executive</strong> who got over <strong>10 job interviews</strong> and an offer she accepted", redirectLink: "/" },
  { src: "https://www.youtube.com/embed/-qf14SRRTAg?si=Z-wxoM9Ln-_V4VXT", descriptionText: "Holly is a <strong>senior executive</strong> who got over <strong>10 job interviews</strong> and an offer she accepted", redirectLink: "/" },
  { src: "https://www.youtube.com/embed/-qf14SRRTAg?si=Z-wxoM9Ln-_V4VXT", descriptionText: "Holly is a <strong>senior executive</strong> who got over <strong>10 job interviews</strong> and an offer she accepted", redirectLink: "/" },
]

const whyChooseUsSection = [
  { src: "/images/why-choose-us-img1.png", headingText: "Tried, Tested, Trusted", subHeadingtext: "Built by folks with 40+ years in tech and hiring — we know the game, and we’ve got your back." },
  { src: "/images/why-choose-us-img2.png", headingText: "Real People, Real Help", subHeadingtext: "A hands-on team that actually cares — guiding you through every twist in your career path." },
  { src: "/images/why-choose-us-img3.png", headingText: "Beat the Line", subHeadingtext: "We search, shortlist, and apply for you, so your name shows up first — every single day." },
]

const cardsData1 = [
  {
    planName: "April Promo",
    cta: "",
    pricing: "$35",
    pricingText: "/week",
    includeHeader: "",
    includeText: [
      "Curated jobs from 1M+ listings, refreshed every 48 hours",
      "Up to 20 human-applied roles per week (no bots, no fluff — just real company sites)",
      "Need more? Add extra apps for just $1.5 each",
      "Your own dedicated application analyst",
      "Personalized with up to 10 filters & 5 job titles",
    ]
  },
  {
    planName: "Starter",
    cta: "<span class='popular_cta'>popular</span>",
    pricing: "$50",
    pricingText: "/week",
    includeHeader: "All the perks of the Promo Plan, plus:",
    includeText: [
      "Resume review & story-focused feedback",
      "Dedicated search specialist",
      "Up to 50 job apps/week",
      "Extra apps at $1.5 each",
      "Analyst support within 6 hours (SLA/PST hours)",
    ]
  },
  {
    planName: "Plus",
    cta: "",
    pricing: "$100",
    pricingText: "/week",
    includeHeader: "Everything in Starter, with more muscle:",
    includeText: [
      "Up to 75 apps/week",
      "Apply to 15 job titles",
      "Analyst + full application team on Pacific hours",
    ]
  }
];

const advanceCardSection = [
  { data: "Everything in Plus" },
  { data: "Custom Resumes & Cover Letters" },
  { data: "20 fully customized applications/week" },
  { data: "Help with complex job searches" },
  { data: "Access to senior resume experts, Founder & Exec Coaches" },
]

const cardsData2 = [
  {
    planName: "Resume Rebuild<br/><span class='normal fs-14 lh-14 inline-block'>Crafted for senior to VP-level professionals ready for their next big step.</span>",
    cta: "",
    pricing: "$1000",
    pricingText: " one time",
    includeHeader: "",
    includeText: [
      "3× 30-min coaching ",
      "Focused on storytelling, not just formatting",
      "Analyst + full application team on Pacific hours",
      "Tailored to your target industry, company, or role",
      "Direct work with our co-founder (ex-Google, JP Morgan)",
      "Executive coaching from UC Berkeley alum with 10+ yrs experience",
      "Resume Rebuild portfolio available upon request",
    ]
  },
  {
    planName: "Interview Prep<br/><span class='normal fs-14 lh-14 inline-block'>Two sessions to sharpen your story, confidence, and clarity — fast.</span>",
    cta: "",
    pricing: "$500",
    pricingText: " one time",
    includeHeader: "",
    includeText: [
      "2× 45-min live coaching with our co-founder",
      "Real-time, practical feedback",
      "Build clarity, empathy & executive presence",
      "For senior and leadership roles — technical & non-technical",
    ]
  },
];

export default function Home() {
  return (
    <>
      <div className="home-page-wrapper">
        <div className="main-section">
          <div className="w-70 w-medium-80 w-small-90  centered flex-center flex-justify-center main-container">
            <div className="flex-start main-sub-container">
              <div>
                <h1 className="pb-30 sora-font">Land job interviews <br /> <span className="color-blue">10x</span> faster</h1>
                <p className="pb-30">Custom-built resumes that match your goals, keywords, and <br /> recruiter expectations.</p>
                <div>
                  <a href="/" className="button-white">Get Started <i className="bi bi-arrow-right"></i></a>
                </div>
              </div>
              <div className="pl-60 ml-40 pl-medium-0 ml-medium-0">
                <Image
                  src="/images/main-section-visual.png"
                  alt="main section visual"
                  width={350}
                  height={444}
                />
              </div>
            </div>
          </div>
        </div>

        <section className="how-it-works-section w-70 w-medium-80 w-small-90  centered pt-40">
          <h2 className="color-blue normal">How we work?</h2>
          <div className="divider-5"></div>
          <div className="how-it-works-section-cards-container flex-wrap">
            {howItWorksSection.map(( howItWorksSectionData) => (
            <div  key={howItWorksSectionData.id} className="how-it-works-section-card pb-small-30">
              <div className="how-it-works-section-card-top mb-20">{ howItWorksSectionData.id }</div>
              <hr />
              <div className="pt-20 color-blue">{ howItWorksSectionData.data }</div>
            </div>
            ))}
          </div>
          <div className="divider-5"></div>
        </section>

        <section className="about-section">
          <div className="w-70 w-medium-80 w-small-90  centered">
            <div className="divider-5"></div>
            <h2 className="normal">About Us</h2>
            <div className="divider-3"></div>            
            <div className="w-80 w-small-90 centered pb-60 pb-medium-0">
            {aboutUsSection.map(( aboutUsSectionData, index ) => (
              <div className="about-us-container flex-wrap pb-30" key={index}>
                <div>
                  <Image
                    src= { aboutUsSectionData.src }
                    alt="about us linkedin visual"
                    width={260}
                    height={260}
                  />
                </div>
                <div className="w-50 w-medium-100 pl-small-0 pl-60" key={index}>
                  <div dangerouslySetInnerHTML={{ __html: aboutUsSectionData.descriptionText }} />
                </div>
              </div>
            ))}
            <div className="about-us-cta">
              <div className="w-57 w-medium-100">
              <div><a href="">Learn more about our Board of Advisors</a><i className="bi bi-arrow-up-right"></i></div>
              <div><a href="">Follow us on our Linkedin page</a><i className="bi bi-arrow-up-right"></i></div>
              </div>
            </div>
            </div>            
          </div>      
          <div className="divider-5"></div>    
        </section>

        <section className="client-testimonials-section w-70 w-medium-80 w-small-90  centered">
          <div className="divider-5"></div>
          <h2 className="color-blue normal">What our clients have to say</h2>
          <div className="divider-7"></div>
          <div className="client-testimonial-card-container">
          {testimonialsSection.map(( testimonialsSectionData, index ) => (
            <div key={index} className="client-testimonial-card">
              <div className="video-container">
                <video 
                  className="video"
                  src={ testimonialsSectionData.src } 
                  controls>
                </video>
                <div className="gradient-overlay">
                <Image
                    src="/images/play-button.png"
                    alt="play button"
                    width={45}
                    height={45}
                  />
                </div>
              </div>
              <div className="p-20">
                <p dangerouslySetInnerHTML={{ __html: testimonialsSectionData.descriptionText }} />
                <div className="flex-justify-end pt-30">
                  <a href= { testimonialsSectionData.redirectLink } className="color-blue"><i className="bi bi-arrow-up-right"></i></a>
                </div>
              </div>
            </div>
          ))}
          </div>

          <div className="divider-5"></div>

          <div className="client-testimonial-cta flex-center gap-50 flex-justify-center flex-wrap">
            <a href="" className="color-blue button-white">More customer testimonials <i className="bi bi-arrow-up-right"></i></a>
            <a href="" className="button-blue">Get Started <i className="bi bi-arrow-right"></i></a>
          </div>
        </section>

        <div className="divider-5"></div>

        <section className="why-choose-us-section w-75 w-medium-90 centered">
          <h2 className="color-blue normal">Why Choose Us?</h2>
          <div className="divider-3"></div>
          <div className="why-choose-us-container flex-wrap">
          {whyChooseUsSection.map(( whyChooseUsSectionData, index ) => (
            <div key={index} className="why-choose-us-card">
              <div className="pb-40">
                <Image
                  src= { whyChooseUsSectionData.src }
                  alt="why choose us section visual"
                  width={65}
                  height={55}
                />
              </div>
              <p className="pb-20 bold"> { whyChooseUsSectionData.headingText } </p>
              <p> { whyChooseUsSectionData.subHeadingtext } </p>
            </div>
          ))}
          </div>
        </section>

        <section className="w-70 w-medium-80 w-small-90  centered">
          <div className="divider-5"></div>
          <h2 className="color-blue normal">Job Application Service Plans</h2>
          <div className="divider-3"></div>
          <Cards cards={cardsData1}></Cards>
          <div className="divider-3"></div>
          <div className="advance-card">
            <div>
              <div className="flex-center">
                <div className="bold">
                  <p className="fs-24">Advance</p>
                  <p>Top-tier support for serious job hunters:</p>
                  <hr className="mt-35 mb-25"/>
                </div>
                <div className="spacer"></div>
                <div className="bold"><span className="fs-48">$150</span>/week</div>
              </div>
              <div className="flex-center">
              <div className="w-60 flex-wrap">
              {advanceCardSection.map(( advCardSectionData, index ) => (                
                  <div key={index} className="pb-15 flex items-center flex-start pr-20" style={{display: "inline-block"}}>
                    <Image
                      src="/images/green_tick.png"
                      alt="green tick"
                      width={15}
                      height={15}
                    />
                    <span className="pl-5">{ advCardSectionData.data }</span>
                  </div>
              ))}
              </div>
              <div className="spacer"></div>
              <div><a href="" className="button-white color-blue">Get Started <i className="bi bi-arrow-right"></i></a></div>
              </div>
            </div>
          </div>

          <div className="divider-5"></div>
          <hr />
          <div className="divider-5"></div>
          <h2 className="color-blue normal">Resume Building & Coaching</h2>
          <p className="color-blue fs-14 medium">Let&apos;s talk about where you&apos;re headed — and how your resume can get you there. <br /><strong>Schedule a call to get started.</strong></p>
          <div className="divider-3"></div>
          <Cards cards={cardsData2}></Cards>
          <div className="divider-5"></div>
        </section>

        <section className="w-70 w-medium-80 w-small-90  centered contact-us-section">
          <div className="contact-us flex-center w-100 flex-wrap gap-30">
            <div className="uppercase fs-32">STILL have <br />doubts?</div>
            <div className="spacer"></div>
            <div className="bold fs-48">Contact us</div>
            <div className="spacer"></div>
            <div className="redirect_cta"><a href="" className="button-white color-blue"><i className="bi bi-arrow-right"></i></a></div>
          </div>
        </section>
        <div className="divider-5"></div>

        <Footer></Footer>

      </div>
    </>
  );
}
