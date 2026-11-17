import { abilities } from "../constants";
import TitleHeader from "../components/TitleHeader";

const FeatureCards = () => (
    <div className="w-full padding-x-lg">
        <TitleHeader
            title="Mis habilidades blandas"
            sub="🤝 Lo que aporto al equipo"
        />

        <div className="mx-auto flex flex-wrap justify-center gap-6 mt-16">
            {abilities.map(({ icon, title, desc }) => (
                <div
                    key={title}
                    className="card-border rounded-xl p-8 flex flex-col gap-4 w-full md:w-[calc(50%-12px)] xl:w-[calc(33.333%-16px)]"
                >
                    <div className="size-14 flex items-center justify-center rounded-full">
                        <span className="text-5xl">{icon}</span>
                    </div>
                    <h3 className="text-white text-2xl font-semibold mt-2">{title}</h3>
                    <p className="text-white-50 text-lg">{desc}</p>
                </div>
            ))}
        </div>
    </div>
);

export default FeatureCards;