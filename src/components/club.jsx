import React from "react";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

const SocialMediaLogos = {
    whatsApp: <WhatsAppIcon style={{ fontSize: 40 }} className="social" />,
    twitter: <XIcon style={{ fontSize: 40 }} className="social" />,
    linkedIn: <LinkedInIcon style={{ fontSize: 40 }} className="social" />,
    youtube: <YouTubeIcon style={{ fontSize: 40 }} className="social" />,
    instagram: <InstagramIcon style={{ fontSize: 40 }} className="social" />
};

function Club({ clubData }) {
    return (
        <div className="min-h-0 rounded-xl sm:min-h-[200px] md:min-h-[300px] min-w-0 sm:min-w-[200px] md:min-w-[400px] xl:min-w-content relative bg-transparent group">
            <img
                className="w-full h-full rounded-3xl border-2 border-transparent"
                src={clubData.logo}
                alt="Club logo"
            />

            <div className="absolute bottom-0 left-0 right-0 h-4/5 bg-gradient-to-t from-SGreen to-transparent rounded-3xl flex flex-col justify-end items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="hidden sm:block w-full text-center font-bold text-sm sm:text-base md:text-lg">
                    {clubData.description}
                </p>
                <div className="flex flex-row justify-center items-end w-full">
                    {Object.entries(clubData.socials).map(([platform, link]) => (
                        <a href={link} key={platform}>
                            {SocialMediaLogos[platform]}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Club;
