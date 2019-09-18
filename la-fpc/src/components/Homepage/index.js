import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import {HomeDiv, 
        Tiles, 
        TileDiv,
        HeaderDiv,
        DescripDiv,
        Descrip} from './style'
import afford from "./img/Afford.png"
import fair from "./img/Fair.png"
import health from "./img/Health.png"
import sus from "./img/Sus.png"


class Home extends Component {
    render() {
        return (
                <HomeDiv>
                    <HeaderDiv>
                        <h1>Food System Dashboard</h1>
                        <p>LAFPC takes great pride at the positive changes we affect in our communities. See below for our in-depth statistics and data on how much our programs improve the loves of those around us.</p>
                    </HeaderDiv>
                    <TileDiv>
                        <Tiles src={sus} alt={"logo"} />
                        <Tiles src={health} alt={"logo"} />
                        <Tiles src={afford} alt={"logo"} />
                        <Tiles src={fair} alt={"logo"} />
                    </TileDiv>
                    <DescripDiv>
                        <Descrip>
                            <h1>What</h1>
                            <p>The Los Angeles Food System Dashboard is a tool for the Good Food Movement to better understand the local and regional food supply chain, from farm to compost bin, and its impacts on the health and quality of life of all Angelenos.</p>
                        </Descrip>
                        <Descrip>
                            <h1>Why</h1>
                            <p>The Dashboard strives to assist all Los Angeles food system stakeholders—residents, community organizers, government officials and staff, practitioners, nonprofits, and businesses—with metrics to
                            evaluate the efficacy of current initiatives and to advance transformative policy and systems changes. Indicators included in this Dashboard are organized by our Good Food values.</p>
                        </Descrip>
                        <Descrip>
                            <h1>How</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                        </Descrip>
                    </DescripDiv>
                </HomeDiv>
        )
    }
}

export default Home