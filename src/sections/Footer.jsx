import { socialImgs } from "../constants";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="flex flex-col justify-center">
                    <p>Terminos y Condiciones</p>
                </div>
                <div className="socials">
                    {socialImgs.map((socialImg) => (
                        <a
                            key={socialImg.name}
                            href={socialImg.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={socialImg.name}
                            className="icon"
                        >
                            <img src={socialImg.imgPath} alt={socialImg.name} />
                        </a>
                    ))}
                </div>
                <div className="flex flex-col justify-center">
                    <p className="text-center md:text-end">
                        {new Date().getFullYear()}.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
