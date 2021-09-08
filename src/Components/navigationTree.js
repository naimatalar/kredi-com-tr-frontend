import React, { useEffect, useState } from "react";
import {
    Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, DropdownItem, Dropdown, DropdownToggle, DropdownMenu } from 'reactstrap';
import { bankdemodata } from "../bankdemodata";
import { apiurl } from "../datacrud/datacrud";
import Image from "react-image-webp";
const NavigationTree = (props) => {
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [mobilDropdownOpen, setMobilDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(!dropdownOpen);
    const toggleMobil = () => { setMobilDropdownOpen(!mobilDropdownOpen); setMobilDropdownOpenBank(false); }

    const [dropdownOpenBank, setDropdownOpenBank] = useState(false);
    const [mobilDropdownOpenBank, setMobilDropdownOpenBank] = useState(false);
    const toggleBank = () => { setDropdownOpenBank(!dropdownOpenBank); }
    const toggleMobilBank = () => { setMobilDropdownOpenBank(!mobilDropdownOpenBank); setMobilDropdownOpen(false) }


    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
            width,
            height
        };
    }

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);

    }, [])

    return (
        <>
            <div className="pcontent">
                <div className="navlink-dsk">
                    {windowDimensions.width > 800 &&
                        <div className="row" style={{ height: 90, alignItems: "center" }}>
                            <div className="col-lg-3 col-md-2" style={{ paddingBottom: 6 }}>
                                <a title="kredi.com.tr" href="/">
                                    <Image alt="kredi.com.tr logo" title="kredi.com.tr"
                                        src={require("../assets/images/lg.png").default}
                                        webp={require("../assets/images/lg.webp").default}

                                        style={{ width: "100%" }}></Image>

                                </a>

                            </div>
                            <div className="col-lg-9 col-md-10  nav-container" style={{ float: "right" }}>
                                <div className="row justify-content-end mb-1" >


                                    <div style={{ display: "flex", justifyContent: "flex-end" }}>

                                        <a style={{
                                            fontSize: 13,
                                            fontWeight: "normal",
                                            border: "none",
                                            fontFamily: "sans-serif",

                                            borderRadius: 6,
                                            padding: "3px 9px 2px 10px",
                                            color: "#c55600"
                                        }} className="nav-link" href="/kredi-karti-kampanyalari">Kredi Kartı Kampanyaları</a>


                                    </div>
                                    <div style={{ display: "flex", justifyContent: "flex-end" }}>
                                        <a style={{
                                            fontSize: 13,
                                            fontWeight: "normal",
                                            border: "none",
                                            fontFamily: "sans-serif",
                                            border: "1px solid #077a68",
                                            borderRadius: 6,
                                            padding: "3px 9px 2px 10px",

                                        }} className="nav-link" href="/hesaplama/aylik-ne-kadar-odeyebilirim">Ne Kadar Kredi Çekebilirim?</a>

                                    </div>
                                    <div style={{ display: "flex", justifyContent: "flex-end", marginLeft: 30 }}>

                                        <a class="social-media" href="https://www.facebook.com/groups/4272638979483202">
                                            <Image src={require("../assets/images/facebook.png").default}
                                                webp={require("../assets/images/facebook.webp").default} />
                                        </a>
                                        <a class="social-media" href="https://www.instagram.com/kredicomtr">
                                            <Image webp={require("../assets/images/instagram.png").default}
                                                src={require("../assets/images/instagram.webp").default} />
                                        </a>
                                        <a class="social-media" href="https://www.linkedin.com/company/74042232">

                                            <Image src={require("../assets/images/linkedin.png").default}
                                                webp={require("../assets/images/linkedin.webp").default}
                                            />
                                        </a>
                                    </div>
                                </div>
                                <Nav style={{ float: "right" }}>
                                    <NavItem onMouseLeave={toggle} onMouseEnter={toggle}>
                                        <span className="nav-link drop-nav-link" title="Kredi" >Kredi </span>
                                        {
                                            dropdownOpen &&
                                            <div className="drop-content ">
                                                <Nav className="row drop-nav-ul" style={{ width: 189, marginLeft: "-53px" }} >
                                                    {props.LoanNavigation.map((item, key) => {
                                                        return (
                                                            <NavItem key={key} title={item.loanName} className="drop-item col-12">
                                                                <a href={"/" + item.urlName}>{item.loanName}</a>
                                                            </NavItem>
                                                        )
                                                    })}

                                                </Nav>
                                            </div>
                                        }
                                    </NavItem>
                                    <NavItem>
                                        <a title="Kredi Kartı" className="nav-link" href="/kredi-karti">Kredi Kartı</a>

                                    </NavItem>


                                    <NavItem>
                                        <a title="Mevduat Hesapları" className="nav-link" href="/vadeli-mevduat-sorgulama">Mevduat</a>

                                    </NavItem>

                                    <NavItem onMouseLeave={toggleBank} onMouseEnter={toggleBank}>


                                        <span className="nav-link drop-nav-link" title="Bankalar" >Bankalar </span>

                                        {
                                            dropdownOpenBank &&
                                            <div className="drop-content ">

                                                <Nav className="row drop-nav-ul" style={{}}>
                                                    {props.BankNavigation.map((item, key) => {
                                                        return (
                                                            <NavItem key={key} title={item.bankName} className="drop-item col-6"><a href={"/bankalar/" + item.bankUrlName} ><img alt={item.bankName + " kredi.com.tr"} style={{ width: "80%", padding: 3, marginBottom: 5 }} src={apiurl + item.logoUrl}></img> </a></NavItem>

                                                        )

                                                    })}
                                                </Nav>
                                            </div>
                                        }
                                    </NavItem>

                                    <NavItem>
                                        <a title="Kredi Hesaplama" className="nav-link" href="/hesaplama">Hesaplama</a>

                                    </NavItem>

                                    <NavItem>
                                        <a title="blog" className="nav-link" href="/haberler-bilgiler">Haberler</a>
                                    </NavItem>
                                </Nav>
                            </div>
                        </div>
                    }





                </div>
                <div style={{ clear: "both" }}></div>
                {windowDimensions.width < 800 &&
                    <div>
                        <Navbar color="faded" light>
                            <NavbarBrand href="/" className="mr-auto">

                                <img alt="kredi.com.tr logo" src={require("../assets/images/lg.png").default} style={{ width: 180 }}></img>

                            </NavbarBrand>
                            <NavbarToggler onClick={toggleNavbar} className="mr-2" />

                            <Collapse isOpen={!collapsed} navbar>
                                <Nav navbar className="mobil-nav-bar">
                                    <NavItem>
                                        <a className="mobil-nav-link arrow-bottom" onClick={toggleMobil} >
                                            Kredi
                                        </a>
                                    </NavItem>
                                    <NavItem>
                                        <Collapse isOpen={mobilDropdownOpen} >

                                            <>

                                                {props.LoanNavigation.map((item, key) => {
                                                    return (
                                                        <div key={key} >
                                                            <a href={"/" + item.urlName}>{item.loanName}</a>
                                                        </div>

                                                    )
                                                })}

                                            </>
                                        </Collapse>
                                    </NavItem>
                                    <NavItem>
                                        <a className="mobil-nav-link" href="/kredi-karti">Kredi Kartı</a>
                                    </NavItem>
                                    <NavItem>
                                        <a className="mobil-nav-link arrow-bottom" onClick={toggleMobilBank} >
                                            Banka
                                        </a>
                                    </NavItem>
                                    <NavItem>
                                        <Collapse isOpen={mobilDropdownOpenBank} >

                                            <>

                                                {props.BankNavigation.map((item, key) => {
                                                    return (
                                                        <div key={key} >
                                                            <a href={"/bankalar/" + item.bankUrlName} ><img alt={"bankalar " + item.bankName + " kredi.com.tr"} style={{ width: 170, padding: 3, marginBottom: 5 }} src={apiurl + item.logoUrl}></img> </a>                                                        </div>

                                                    )
                                                })}

                                            </>
                                        </Collapse>
                                    </NavItem>
                                    <NavItem>
                                        <a className="mobil-nav-link" href="/hesaplama">Hesaplama</a>
                                    </NavItem>
                                    <NavItem>
                                        <a title="Mevduat Hesapları" className="mobil-nav-link" href="/vadeli-mevduat-sorgulama">Mevduat</a>

                                    </NavItem>
                                    <NavItem>
                                        <a title="blog" className="mobil-nav-link" href="/haberler-bilgiler">Haberler</a>
                                    </NavItem>



                                </Nav>
                            </Collapse>
                        </Navbar>

                    </div>

                }


            </div>
        </>
    );
}
export default NavigationTree

