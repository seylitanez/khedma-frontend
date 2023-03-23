import "./footer.scss" ;
import { BsTelephoneFill, BsFacebook, BsLinkedin } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { AiFillTwitterCircle } from "react-icons/ai";
import {Logo} from '@image'
import {Input,Buttun} from '@p-components';
import { Link} from "react-router-dom";
import {LangueContext} from "@context/langue";
import { useContext ,useState } from 'react';
const Footer = () => {
    const {lang} = useContext(LangueContext);
    const {lien,accueil,trouver_emploi,blog,a_propos}=lang.footer.menu;
    const {contact,tel,mail}=lang.footer.contact;
    const {slogon,copyRight,terms,cockie,privatep,license}=lang.footer.police;
    return ( 
        <div className="footer">
            <div className="footer_info">
                <div className="app_name">
                    <div className='logo'>
                        <img src={Logo}/>
                    </div>
                    <div className="slogo">
                        <p>{slogon}</p>
                    </div>
                    <div className="sub">
                        <Input type="email" id="emails" placeholder="email@exemple.com"/>
                        <Buttun id="subscribe">{lang.footer.btn}</Buttun>
                    </div>
                </div>
                <div className="link">
                    <h3>{lien}</h3>
                    <ul>
                        <li><Link to='./home'>{accueil}</Link></li>
                        <li><Link to='./jobSearch'>{trouver_emploi}</Link></li>
                        <li><Link to='./blog'>{blog}</Link></li>
                        <li><Link to='./a_propos'>{a_propos}</Link></li>
                    </ul>
                </div>
                <div className="contact">
                    <h3>{contact}</h3>
                    <ul>
                        <li><BsTelephoneFill size={15}/> {tel}</li>
                        <li><HiMail size={20}/> {mail}</li>
                        <li><div className="social-links">
                            <AiFillTwitterCircle className="tw"size={25}/>
                            <BsLinkedin className="li"size={25}/>
                            <BsFacebook className="fb"size={25}/>
                        </div></li>
                   </ul>
                </div>
            </div>
            <div className="policy">
                <div className="copy">
                    <p>{copyRight}</p>
                </div>
                <div className="policy_link">
                    <Link to="#">{terms}</Link>
                    <Link to="#">{cockie}</Link>
                    <Link to="#">{privatep}</Link>
                    {/* <Link to="#">{license}</Link>   */}
                </div>  
            </div>
        </div>
    );
}
export default Footer;