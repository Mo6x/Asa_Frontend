'use client';
import React, { useState } from "react";
import Image from "next/image";
import { Phone, Mail, X } from "lucide-react";
import { Instagram, Youtube } from "lucide-react";
import { Facebook, Twitter, Menu } from "lucide-react";
import Logo from "@/../../public/logo.png"
import Styled from "./navbars.module.css";


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={Styled.navbarContainer}>
      <div className={Styled.topBar}>
        <Image src={Logo} alt="Logo Icon" className={Styled.LogoIcons}/>
        <button
          className={Styled.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className={`${Styled.menuContent} ${menuOpen ? Styled.show : ""}`}>
        <div className={Styled.contacts}>
          <h1 className={Styled.H1contact}>
            <Phone className={Styled.Icons} />
            (225) 555-0118
          </h1>
          <p className={Styled.Gmail}>
            <Mail className={Styled.Icons} />
            michelle.rivera@example.com
          </p>
        </div>

        <div className={Styled.follow}>
          <h1>Follow Us and get a chance to win 80% off</h1>
        </div>

        <div className={Styled.MediaIcons}>
          <span className={Styled.followSpan}>Follow Us :</span>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <Instagram className={Styled.Icons} />
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
            <Youtube className={Styled.Icons} />
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <Facebook className={Styled.Icons} />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <Twitter className={Styled.Icons} />
          </a>
        </div>
      </div>
    </div>
  );
}

