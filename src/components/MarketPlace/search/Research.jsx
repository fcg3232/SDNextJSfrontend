import React, { useState, useEffect } from 'react'
// import styled from "styled-components";
import CountryDropdown from './CountryDropdown';
import LocationDropdown from './LocationDropdown';
// import { RiSearch2Line } from "react-icons/ri";
import { Button, Dropdown, Nav, Tab } from 'react-bootstrap';
import ReactSlider from 'react-slider'
import { useAccount, useConnect, useDisconnect } from 'wagmi'
const Research = () => {
    const account = useAccount();
    const { connectors, connect, status, error } = useConnect();
    const { disconnect } = useDisconnect();
    const [headerFix, setheaderFix] = React.useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setheaderFix(window.scrollY > 50);
        });
    }, []);
    return (
        <div className="site-header mo-left "
            style={{
                backgroundColor: "white",
                zindex: "-1"
            }}
        >
            <div className={`sticky-header main-bar-wraper  navbar-expand-lg ${headerFix ? "is-fixed" : ""}`}>
                <div className=" clearfix">
                    <div className="container clearfix">
                        <ul className="nav navbar-nav navbar">
                            <li><CountryDropdown /></li>
                            <li><LocationDropdown /></li>
                            <li
                                style={{
                                    width: "130px"
                                }}
                            >
                                <ReactSlider
                                    min={5}
                                    max={99}
                                    defaultValue={27}
                                    className="progress-slider"
                                    renderThumb={(props, state) => <div {...props}>{state.valueNow}%</div>}
                                />
                                <span
                                    style={{
                                        fontStyle: "normal",
                                        fontWeight: "500",
                                        fontSize: "12px",
                                    }}
                                >Current Projected IRR</span>
                            </li>
                            {/* <li
                                style={{
                                    width: "130px"
                                }}
                            >
                                <ReactSlider
                                    min={5}
                                    max={99}
                                    defaultValue={27}
                                    className="progress-slider"
                                    renderThumb={(props, state) => <div {...props}>{state.valueNow}%</div>}
                                />
                                <span
                                    style={{
                                        fontStyle: "normal",
                                        fontWeight: "500",
                                        fontSize: "12px",
                                    }}
                                >Current CoC Return</span>
                            </li> */}
                            {/* <li>
                                <Tab.Container defaultActiveKey="Navbuy">
                                    <div className="buy-sell">
                                        <Nav className="nav nav-tabs" eventKey="nav-tab2" role="tablist">
                                            <Nav.Link as="button" className="nav-link" eventKey="Navbuy" type="button">All</Nav.Link>
                                            <Nav.Link as="button" className="nav-link" eventKey="Navsell" type="button">New</Nav.Link>
                                        </Nav>
                                        <Nav className="nav nav-tabs" role="tablist">
                                            <Nav.Link as="button" className="nav-link" type="button">All</Nav.Link>
                                            <Nav.Link as="button" className="nav-link" type="button">New</Nav.Link>
                                        </Nav>
                                    </div>
                                    <Tab.Content  >
															<Tab.Pane eventKey="Navbuy" >
																<Tab.Container defaultActiveKey="Navbuymarket">
																	<div className="limit-sell">
																	
																	</div>
																	<Tab.Content id="nav-tabContent1">
																		<Tab.Pane eventKey="Navbuymarket"></Tab.Pane>
																		<Tab.Pane eventKey="Navbuylimit"></Tab.Pane>
																	</Tab.Content>
																	<div className="sell-element">
																	</div>
																</Tab.Container>
															</Tab.Pane>
															<Tab.Pane eventKey="Navsell">
																<Tab.Container defaultActiveKey="Navsellmarket">
																	<div className="limit-sell">
																		<Nav className="nav nav-tabs">
																			<Nav.Link as="button" eventKey="Navsellmarket" type="button">market order</Nav.Link>
																			<Nav.Link as="button" eventKey="Navselllimit" type="button" >limit order</Nav.Link>
																		</Nav>
																	</div>
																	<Tab.Content id="nav-tabContent2">
																		<Tab.Pane id="Navsellmarket" ></Tab.Pane>
																		<Tab.Pane id="Navselllimit" ></Tab.Pane>
																	</Tab.Content>
																	<div className="sell-element">
																	</div>
																</Tab.Container>
															</Tab.Pane>
														</Tab.Content>

                                </Tab.Container>
                                </div>
										</div>
                            </li> */}
                            <li>
                                {(JSON.stringify(account.addresses))?.substring(0, 14) + " ...."}
                            </li>
                            <li>
                                {account.status === 'connected' && (
                                    <button type="button" onClick={() => disconnect()}
                                        className="btn space-lg btn-gradient btn-shadow btn-primary"
                                    >
                                        Disconnect
                                    </button>
                                )}
                            </li>
                            {/* <li className='mb-3'>
                                <div className="limit-sell"
                                    style={{
                                        width: "280px"
                                    }}
                                >
                                    <Nav className="nav nav-tabs" id="nav-tab3" role="tablist">
                                        <Nav.Link as="button" eventKey="Navbuymarket" type="button"  >market order</Nav.Link>
                                        <Nav.Link as="button" eventKey="Navbuylimit" type="button" >limit order</Nav.Link>
                                    </Nav>
                                </div>
                                <Tab.Content id="nav-tabContent2">
                                    <Tab.Pane id="Navsellmarket" ></Tab.Pane>
                                    <Tab.Pane id="Navselllimit" ></Tab.Pane>
                                </Tab.Content>
                            </li> */}

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Research;

// const Backgroundcolor = styled.div`
//   display: flex;
// `;