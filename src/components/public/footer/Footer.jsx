import "./footer.scss" ;
import {} from "react-icons/fa";
import {Logo} from '@image'
import {Input,Buttun} from '@p-components';
import { Link,useNavigate } from "react-router-dom";
import {LangueContext} from "@context/langue";
import { useContext ,useState } from 'react';
const Footer = () => {
    const {lang} = useContext(LangueContext);
    const nav=useNavigate()
    const {lien,accueil,trouver_emploi,blog,a_propos}=lang.footer.menu;
    const {contact,tel,mail}=lang.footer.contact;
    const {slogon,copyRight,terms,cockie,privatep,license}=lang.footer.police;
    return ( 
        <div className="footer">
            <div className="footer_info">
                <div className="app_name">
                    .logo
                    <ul>
                        <li><img src={Logo}/></li>
                        <li><h4 >{slogon}</h4></li>
                        <li>
                            <Input type="email" id="emails" placeholder="email@exemple.com"/>
                            <Buttun name="subscribeFooter" id="subscribe">{lang.footer.btn}</Buttun>
                        </li>
                    </ul>
                </div>
                <div className="link">
                    <h4>{lien}</h4>
                    <ul>
                        <li><Link to='./home'>{accueil}</Link></li>
                        <li><Link to='./jobSearch'>{trouver_emploi}</Link></li>
                        <li><Link to='./blog'>{blog}</Link></li>
                        <li><Link to='./a_propos'>{a_propos}</Link></li>
                    </ul>
                </div>
                <div className="col3">
                <h4>{contact}</h4>
                <ul>
                    <li>{tel}</li>
                    <li>{mail}</li>
                    <li><div className="social-links"></div></li>
                   </ul>
                </div>
            </div>
            <div className="policy">
                <div className="col1">
                    <p>{copyRight}</p>
                </div>
                <div className="col2">
                    <Link to="#">{terms}</Link>
                    <Link to="#">{cockie}</Link>
                    <Link to="#">{privatep}</Link>
                    <Link to="#">{license}</Link>  
                </div>  
            </div>
        </div>
    );
}
export default Footer;