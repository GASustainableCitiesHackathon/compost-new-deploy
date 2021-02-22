import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Footer1() {
    return (
        <FooterWrapper>
            <GridWrapper>
                <Grid1>
                    <ImageWrapper>
                        <img src="/icons/logo.png" alt="Logo" />
                    </ImageWrapper>
                    <HomeAndAboutWrapper>
                        <HomeDiv>
                            <h5> HOME </h5>
                            <Link to="/">Map</Link>
                            <Link to="/">Our Story</Link>
                            <Link to="/">FAQ</Link>
                        </HomeDiv>
                        <AboutDiv>
                            <h5> ABOUT </h5>
                            <Link to="/">Our Mission</Link>
                            <Link to="/">Why Compost?</Link>
                            <Link to="/">More Resources</Link>
                        </AboutDiv>
                    </HomeAndAboutWrapper>
                </Grid1>
                <Grid2>
                    <div >
                        <h5>Join the Compost Conversation</h5>
                        <p> Subscribe Below</p>
                    </div>
                    <FormWithButton>
                        <div className="fixedDiv">
                            <form autoComplete="off" action="/" method="get">
                                <input placeholder="Email" type="text" id="lname" name="lname" /><span><button type="submit" value="submit"> <img src="/icons/right-arrow.png" alt="Right Arrow" width="46px" /></button></span>

                            </form>
                        </div>
                    </FormWithButton>
                </Grid2>
                <Grid3>
                    <div>
                        <h5>FOLLOW US</h5>
                        <IconsGalore>
                            <Link to="/facebook"><img src="/icons/facebook.svg" alt="Facebook" /></Link>
                            <Link to="/linkedin"> <img src="/icons/linkedin.svg" alt="LinkedIn" /></Link>
                            <Link to="/twitter"><img src="/icons/twitter.svg" alt="Twitter" /></Link>
                            <Link to="/instagram"><img src="/icons/instagram.svg" alt="Instagram" /></Link>
                            <Link to="/tiktok">  <img src="/icons/tiktok.svg" alt="Tiktok" /></Link>
                        </IconsGalore>
                    </div>
                </Grid3>
            </GridWrapper>
            <EndingStatement>
                <p>
                    Website Policies | Accesibility Statement | Site Map All Rights Reserved | Site Last Updated on 02/22/2021 Copyright
                </p>
                <p> COMPOSTRACK USA </p>
            </EndingStatement>
        </FooterWrapper >
    )
}

const backgroundColour = "#DEF6E5"

const FooterWrapper = styled.div`
    background-color: ${backgroundColour};
    padding: 2rem 2rem;
`

const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    @media (max-width: 800px ){
        display: flex;
        justify-content:center;
        flex-direction: column;
        margin-bottom: 5rem;
    }
`
const Grid1 = styled.div`
    display: flex;
    flex-direction: column;
    @media (max-width: 768px ){
        display: flex;
        text-align: center
    }
`
const ImageWrapper = styled.div`
    padding-bottom: 3rem;
    img {
        width:70%; 
    }
`
const HomeAndAboutWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    h5{
        font-weight: bolder;
        padding-bottom: 1rem;
    }
    a{
    color: grey;
        padding-bottom: 1rem;
    }
`
const HomeDiv = styled.div`
    /* text-align:center; */
    display: flex;
    flex-direction: column;
`
const AboutDiv = styled.div`
    display: flex;
    flex-direction: column;
`
const Grid2 = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    padding: 15px;
    form{
        margin: 0;
        padding: 0;
        vertical-align: middle;
    }
`
const FormWithButton = styled.div`
    display: flex;
    justify-content:center;
    .fixedDiv{
        width: 225px;
        position: relative;
    }
    input{
        border: none;
        padding: 15px 20px;
        width: 100%;
        border-radius: 2rem;
        outline: none;
        transform: translateX(-5px);
    }
    button{
        width:0;
        height: 0;
        position: absolute;
        right: 0px;
        z-index: 2;
        top: 0;
        transform: translateX(-35px);
        cursor: pointer;
        border: none;
        border-radius: 5rem;
        /* background-color:${backgroundColour}; */
        background-color: white;
    }

`

const Grid3 = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    padding: 15px 0 5px 0;
    /* width: 50px; */
    div{
        width: 18vh;
    }
    h5{
        font-weight: bolder;
    }
    @media (max-width: 768px ){
        div{
            width: 30vh;
        }
        
    }
`
const EndingStatement = styled.div`
    text-align: center;
    p{
        padding: 0;
        margin: 0;
    }
    @media (max-width: 768px ){
        
    }
`

const IconsGalore = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    img{
        padding: 5px;
    }
`

export default Footer1


/*
Main Headers: Domine Regular 65 pt, color #1E8E00 (edited)
3:14 AM
Body Text in Our Story: Lato Regular, 25 pt, color: #989898 (edited)
3:16 AM
Same for FAQ body text Lato Regular 25 pt, color: #070707 (edited)
3:16 AM
FAQ drop down answers: Lato Regular, 19 pt, color: #808080
3:17 AM
Show more button in FAQ: Lato Regular, 20 pt, color #3A9166
3:18 AM
Footer Link Text: Lato Bold, 20 pt - Home & About, in #000000, and the rest in ##707070
3:20 AM
Nav Bar Unselected text: Lato Regular, 30 pt. #000000 @ 50% transparency
3:20 AM
Nav Bar Selected Text: Lato Bold, 30 pt. color: #1E8E00
3:22 AM
Our Mission (Headers same as rest): Body text Lato Regular 25 pt. color: #989898
3:23 AM
Why Compost? - Same main Header; Subheaders: Lato Bold 25 pt, color: #3A9166
3:24 AM
Why Compost? - Body Text: Lato Bold 16 pt, color #000000
3:25 AM
Benefits of composting - Same main Header; Subheaders: Lato Bold 25 pt, color: #3A9166
3:25 AM
Benefits of composting - Body text: Lato Regular, 20 pt, color #000000
3:26 AM
Meet the team - same main header style; Name text: Lato Regular, 19 pt, color #808080
3:27 AM
Footer credit description: Lato Regular, 20 pt, color #000000
3:27 AM
Footer: “Join the Compost Conversation” - Lato Regular 30 pt, #000000 (edited)
3:29 AM
Footer: “Subscribe Below” - Lato Regular 27 pt, #000000 (edited)
3:29 AM
Footer: “Follow Us” - Lato Bold, 20 pt, #000000
*/