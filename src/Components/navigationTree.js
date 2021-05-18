import React, { useEffect, useState } from "react";
import {
    Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, DropdownItem, Dropdown, DropdownToggle, DropdownMenu } from 'reactstrap';
import { bankdemodata } from "../bankdemodata";
const NavigationTree = (props) => {
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [mobilDropdownOpen, setMobilDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(!dropdownOpen);
    const toggleMobil = () => setMobilDropdownOpen(!mobilDropdownOpen);

    const [dropdownOpenBank, setDropdownOpenBank] = useState(false);
    const [mobilDropdownOpenBank, setMobilDropdownOpenBank] = useState(false);
    const toggleBank = () => setDropdownOpenBank(!dropdownOpenBank);
    const toggleMobilBank = () => setMobilDropdownOpenBank(!mobilDropdownOpenBank);


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
                                <Link title="kredi.com.tr" to="/">
                                    <img alt="kredi.com.tr logo" src={require("../assets/images/lg.png").default} style={{ width: "100%" }}></img>

                                </Link>

                            </div>
                            <div className="col-lg-9 col-md-10 " style={{ float: "right" }}>
                                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                                    <Link style={{ fontSize: 13, fontWeight: "normal", textDecoration: "underline" }} className="nav-link" to="/">Aylık Ne Kadar Kredi Ödeyebilirim?</Link>
                                </div>
                                <Nav style={{ float: "right" }}>
                                    <NavItem onMouseLeave={toggle} onMouseEnter={toggle}>
                                        <span className="nav-link drop-nav-link" title="Kredi" >Kredi </span>

                                        {
                                            dropdownOpen &&
                                            <div className="drop-content ">

                                                <Nav className="row drop-nav-ul" style={{}}>
                                                    <NavItem title="İhtiyaç Kredisi" className="drop-item col-12"><Link to="/users">İhtiyaç Kredisi</Link></NavItem>
                                                    <NavItem title="Taşıt Kredisi" className="drop-item col-12" ><Link to="/users">Taşıt Kredisi</Link></NavItem>
                                                    <NavItem title="Konut Kredisi" className="drop-item col-12"><Link to="/users">Konut Kredisi</Link></NavItem>
                                                    <NavItem title="Kobi Kredisi" className="drop-item col-12"><Link to="/users">Kobi Kredisi</Link></NavItem>
                                                </Nav>
                                            </div>
                                        }
                                    </NavItem>
                                    <NavItem>
                                        <Link title="Kredi Kartı" className="nav-link" to="/kredi-karti">Kredi Kartı</Link>
                                    </NavItem>
                                    <NavItem onMouseLeave={toggleBank} onMouseEnter={toggleBank}>


                                        <span className="nav-link drop-nav-link" title="Bankalar" >Bankalar </span>

                                        {
                                            dropdownOpenBank &&
                                            <div className="drop-content ">

                                                <Nav className="row drop-nav-ul" style={{}}>
                                                    {props.BankNavigation.map((item, key) => {
                                                        return (
                                                            <NavItem key={key} title={item.bankName} className="drop-item col-12"><Link to={"/bankalar/" + item.bankUrlName} >{item.bankName}</Link></NavItem>

                                                        )

                                                    })}
                                                </Nav>
                                            </div>
                                        }
                                    </NavItem>

                                    <NavItem>
                                        <Link title="Kredi Hesaplama" className="nav-link" to="/">Hesaplama</Link>

                                    </NavItem>
                                    <NavItem>
                                        <Link title="Kredi Notu" className="nav-link" to="/users">Kredi Notu</Link>
                                    </NavItem>
                                    <NavItem>
                                        <Link title="blog" className="nav-link" to="/About">Blog</Link>
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
                                <Nav navbar>
                                    <Dropdown nav isOpen={mobilDropdownOpen} onMouseLeave={toggleMobil} onMouseEnter={toggleMobil}>
                                        <DropdownToggle nav caret>
                                            Kredi
                                     </DropdownToggle>
                                        <DropdownMenu style={{ marginTop: -5 }}>
                                            <DropdownItem ><Link to="/users">İhtiyaç Kredisi</Link></DropdownItem>
                                            <DropdownItem ><Link to="/users">Taşıt Kredisi</Link></DropdownItem>
                                            <DropdownItem><Link to="/users">Konut Kredisi</Link></DropdownItem>
                                            <DropdownItem><Link to="/users">Kobi Kredisi</Link></DropdownItem>

                                        </DropdownMenu>
                                    </Dropdown>

                                    <NavItem>
                                        <Link to="/users">Kredi Kartı</Link>
                                    </NavItem>
                                    <NavItem>
                                        <Dropdown nav isOpen={mobilDropdownOpenBank} onMouseLeave={toggleMobilBank} onMouseEnter={toggleMobilBank}>
                                            <DropdownToggle nav caret>
                                                Bankalar
                                     </DropdownToggle>
                                            <DropdownMenu style={{ marginTop: -5 }}>
                                                <DropdownItem ><Link to="/users">İhtiyaç Kredisi</Link></DropdownItem>
                                                <DropdownItem ><Link to="/users">Taşıt Kredisi</Link></DropdownItem>
                                                <DropdownItem><Link to="/users">Konut Kredisi</Link></DropdownItem>
                                                <DropdownItem><Link to="/users">Kobi Kredisi</Link></DropdownItem>

                                            </DropdownMenu>
                                        </Dropdown>
                                    </NavItem>
                                    <NavItem>
                                        <Link to="/">Hesaplama</Link>
                                    </NavItem>
                                    <NavItem>
                                        <Link to="/users">Kredi Notu</Link>
                                    </NavItem>
                                    <NavItem>
                                        <Link to="/about">Blog</Link>
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

