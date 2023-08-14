import React, {useState, useRef} from 'react'
import Card from './Card'
import { styled } from 'styled-components'
import {AiOutlineLeft, AiOutlineRight} from 'react-icons/ai'

export default React.memo(function MovieSlider ({ data, title }) {

    const [controlsVisibility, setControlsVisibility] = useState(false)
    const listRef = useRef()
    const [sliderPosition, setsliderPosition] = useState(0)

    const handleDirection =(direction)=>{
        let distante = listRef.current.getBoundingClientRect().x -70;
        if(direction === 'left' && sliderPosition > 0 ){
            listRef.current.style.transform = `translateX(${230 + distante}px)`
            setsliderPosition(sliderPosition - 1)
        }
        if(direction === 'right' && sliderPosition < 4 ){
            listRef.current.style.transform = `translateX(${-230 + distante}px)`
            setsliderPosition(sliderPosition + 1)
        }
    }

    return (
        <Container
        controlsVisibility = {controlsVisibility}
        onMouseEnter={() => setControlsVisibility(true)}
        onMouseLeave={()=>setControlsVisibility(false)}
        >
            <h1>{title}</h1>
            <div className="wrapper">
                <div className={`slider-action left ${!controlsVisibility ? 'none' : ''} `}>
                    <AiOutlineLeft
                    onClick={()=> handleDirection('left')}
                    />
                </div>
                <div className="slider" ref={listRef}>
                    {
                        data.map((movie, index) => {
                            return <Card movieData={movie} index={index} key={movie.id} />
                        })
                    }
                </div>
                <div className={`slider-action right ${!controlsVisibility ? 'none' : ''} `}>
                    <AiOutlineRight
                    onClick={()=> handleDirection('right')}
                    />
                </div>
            </div>
        </Container>
    )
})

const Container = styled.div`
gap: 0.7rem;
position: relative;
padding: 0.75rem 0;
h1{
    margin-left: 15px;
    font-size: 25;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, Helvetica, sans-serif;
    color: white;
}
.wrapper{
    .slider{
        display: flex;
        width: max-content;
        gap: 0.6rem;
        transform: translateX(0px);
        transition: 1s ease-in-out;
        margin-left: 10px;
    }
    .slider-action{
        display: flex;
        width: max-contentx;
        align-items: center;
        position: absolute;
        z-index: 99;
        height: 100%;
        top: 2rem;
        bottom: 0;
        width: 50px;
        transition: 0.4s ease-in-out;
        svg{
            font-size: 2rem;
            cursor: pointer;
            color: white;
        }
    }
    .left{
        left: 0;
    }
    .right{
        right: 0;
    }
    .none{
        display: none;
    }
}
`
