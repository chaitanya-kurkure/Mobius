import Image from "next/image";

interface CardData {
  planName: string;
  cta: string;
  pricing: string;
  pricingText: string;
  includeText: string[];
  includeHeader: string;
}

export default function Cards({ cards }: { cards: CardData[] }) {
  return (
    <div className="cards-container-wrapper">
      <div className="cards-container color-blue">
        {cards.map((card, index) => (
          <div className="cards-container-card" key={index}>
            <div className="pb-30 flex-center">
              <span className="fs-24 bold" dangerouslySetInnerHTML={{ __html: card.planName }} />
              <div className="spacer"></div>
              <span dangerouslySetInnerHTML={{ __html: card.cta }} />
            </div>
            <div className="mb-30 bold">
              <span className="fs-48">{card.pricing}</span>
              <span>{card.pricingText}</span>
            </div>
            <hr />
            <div className="mt-20 pb-30 medium">
              <div className="pl-30 pb-15">{card.includeHeader}</div>
              {card.includeText.map((text, idx) => (
                <div className="pb-15 flex items-center flex-start" key={idx}>
                  <div className="img-wrapper">
                    <Image
                      src="/images/green_tick.png"
                      alt="green tick"
                      width={20}
                      height={20}
                    />
                  </div>
                  <div className="pl-10 color-blue">{text}</div>
                </div>
              ))}
            </div>
            <div className="spacer"></div>
            <div>
              <a href="#" className="button-blue">
                Get Started <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
