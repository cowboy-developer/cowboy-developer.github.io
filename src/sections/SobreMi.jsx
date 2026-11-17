import { aboutCards } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

const SobreMi = () => {
    return (
        <section id="about" className="flex-center section-padding">
            <div className="w-full h-full md:px-10 px-5">
                <TitleHeader
                    title="Sobre mí"
                    sub="👋 Quién soy y qué hago"
                />

                <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
                    {aboutCards.map((card, index) => (
                        <GlowCard
                            card={card}
                            key={card.name}
                            index={index}
                            showStars={false}
                            reviewAtBottom
                        >
                            <div className="flex items-center gap-3">
                                <span className="text-4xl">{card.icon}</span>
                                <div>
                                    <p className="font-bold">{card.name}</p>
                                    <p className="text-white-50">{card.mentions}</p>
                                </div>
                            </div>
                        </GlowCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SobreMi;