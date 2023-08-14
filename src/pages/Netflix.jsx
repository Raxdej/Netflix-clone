import React, { useState, useEffect } from "react";
import { styled } from "styled-components";

import { useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';

import TopNav from "../components/TopNav";
import Card from "../components/Card";
import { fetchMovies, getGenres } from "../store";
import SliderContainer from "../components/SliderContainer";

const Netflix = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    
    const navigate = useNavigate()

    const movies = useSelector((state)=> state.netflix.movies)

    const generesLoaded = useSelector((state)=>state.netflix.generesLoaded)

    const genresLoaded = useSelector((state)=>state.netflix.genresLoaded)
    
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getGenres())
    }, [])

    useEffect(()=>{
        if(generesLoaded){
            // console.log('chargingn Movies...')
            dispatch(fetchMovies({type: "all"}))
        }
    });



    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true)
        return () => (window.onscroll = null)
    }
    // console.log(isScrolled)

    // console.log(movies) INfinite loop

    return (
        <HeroContainer>
            <div className="hero">
                <TopNav isScrolled={isScrolled} />
                <img
                    className="bg-img"
                    src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1668267540/NetflixApp/avengers-age-of-ultron-team-together-poster-wallpaper-1600x600-92751_84_qvwbif.jpg"
                    alt="hero" />
                <div className="container">
                    <div className="title">
                        <h1>Avengers</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, id nemo. Neque nobis, dicta dolorum, explicabo, quaerat cum quae esse suscipit officia temporibus molestias. Accusantium!</p>
                    </div>
                    <div className="buttons">
                        <button onClick={()=>navigate('/player')} className="playBtn">play</button>
                        <button className="moreBtn">More</button>
                    </div>
                </div>
            </div>
            <SliderContainer movies={movies} />
        </HeroContainer>
    )
}

const HeroContainer = styled.div`
    background-color: black;

    .hero{
        position: relative;
        .bg-img{
            filter: brightness(45%);
        }
        img{
            height: 70vh;
            width: 100%;
        }
        .container{
            position: absolute;
            bottom: 1rem;
            .title{
                h1{
                    margin-left: 5rem;
                    text-transform: uppercase;
                    font-size: 73px;
                    background: -webkit-linear-gradient(#eee, rgb(128, 13, 13));
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                p{
                    margin-bottom: -50px;
                    width: 640px;
                    margin-left: 5rem;
                    font-family: "lexend Deca", sans-serif;
                    color: white;
                }
            }
            .buttons{
                display: flex;
                margin: 5rem;
                gap: 2rem;
            }
            .playBtn{
                display: flex;
                align-items: center;
                justify-content: center;
                color: red;
                border-radius: 1rem;
                font-size: 1.4rem;
                gap: 1rem;
                padding: 0.9rem;
                padding-left: 2rem;
                padding-right: 2.4rem;
                border: nonde;
                cursor: pointer;
            }
            .moreBtn{
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                background-color: black;
                border-radius: 1rem;
                font-size: 1.4rem;
                gap: 1rem;
                padding: 0.9rem;
                padding-left: 2rem;
                padding-right: 2.4rem;
                border: 0.1rem solid white;
                cursor: pointer;
            }
        }
    }
`

export default Netflix