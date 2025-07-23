import React from 'react'
import {RiAtLine, RiInstagramLine, RiTelegramLine, RiWhatsappLine} from "react-icons/ri";

const SocialsView = () => {
    return (
        <div className="flex space-x-4">
            <a
                href="https://wa.me/972502218465"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400 transition-colors"
            >
                <RiWhatsappLine size={24} />
            </a>
            <a
                href="https://t.me/eitanlevi"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-300 transition-colors"
            >
                <RiTelegramLine size={24} />
            </a>
            <a
                href="https://instagram.com/artelberg"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 transition-colors"
            >
                <RiInstagramLine size={24} />
            </a>
            <a
                href="mailto:artelberg@gmail.com"
                className="hover:text-purple-400 transition-colors"
            >
                <RiAtLine size={24} />
            </a>

        </div>
    )
}
export default SocialsView
