import React, { useEffect, useState } from "react";
import {
    Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, DropdownItem, Dropdown, DropdownToggle, DropdownMenu } from 'reactstrap';
import { bankdemodata } from "../bankdemodata";
import { apiurl } from "../datacrud/datacrud";
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
                                    <img alt="kredi.com.tr logo" title="kredi.com.tr" src={require("../assets/images/lg2.png").default} style={{ width: "100%" }}></img>

                                </a>

                            </div>
                            <div className="col-lg-9 col-md-10 " style={{ float: "right" }}>
                                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                                    <a style={{ fontSize: 13, fontWeight: "normal", textDecoration: "underline" }} className="nav-link" href="/">Aylık Ne Kadar Kredi Ödeyebilirim?</a>
                                </div>
                                <Nav style={{ float: "right" }}>
                                    <NavItem onMouseLeave={toggle} onMouseEnter={toggle}>
                                        <span className="nav-link drop-nav-link" title="Kredi" >Kredi </span>

                                        {
                                            dropdownOpen &&
                                            <div className="drop-content ">

                                                <Nav className="row drop-nav-ul" style={{}}>

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
                                                            <NavItem key={key} title={item.bankName} className="drop-item col-12"><a href={"/bankalar/" + item.bankUrlName} ><img alt={item.bankName +" kredi.com.tr" } style={{ width: "80%", padding: 3, marginBottom: 5 }} src={apiurl + item.logoUrl}></img> </a></NavItem>

                                                        )

                                                    })}
                                                </Nav>
                                            </div>
                                        }
                                    </NavItem>

                                    <NavItem>
                                        <a title="Kredi Hesaplama" className="nav-link" href="/">Hesaplama</a>

                                    </NavItem>
                                    <NavItem>
                                        <a title="Kredi Notu" className="nav-link" href="/users">Kredi Notu</a>
                                    </NavItem>
                                    <NavItem>
                                        <a title="blog" className="nav-link" href="/About">Blog</a>
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
                                                            <a href={"/bankalar/" + item.bankUrlName} ><img  alt={"bankalar "+item.bankName+" kredi.com.tr"}  style={{ width: 170, padding: 3, marginBottom: 5 }} src={apiurl + item.logoUrl}></img> </a>                                                        </div>

                                                    )
                                                })}

                                            </>
                                        </Collapse>
                                    </NavItem>
                                    <NavItem>
                                        <a className="mobil-nav-link" href="/">Hesaplama</a>
                                    </NavItem>
                                    <NavItem>
                                        <a className="mobil-nav-link" href="/users">Kredi Notu</a>
                                    </NavItem>
                                    <NavItem>
                                        <a className="mobil-nav-link" href="/about">Blog</a>
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

