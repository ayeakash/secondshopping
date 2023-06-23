import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Img } from 'react-image';
import { useNavigate } from 'react-router-dom';



export default function Carousel(props){

    const navigate = useNavigate()
    const handleClick = (path)=>{
        navigate(path)
    }
    
    const handleDragStart = (e) => e.preventDefault();
    const items = [
        <Img src={props.first} onClick={()=>handleClick(props.path1)}  onDragStart={handleDragStart}  role='presentation'/>,
        <Img src={props.second} onClick={()=>handleClick(props.path2)} onDragStart={handleDragStart} role="presentation" />,
        <Img src= {props.third} onClick={()=>handleClick(props.path3)} onDragStart={handleDragStart} role="presentation" />,
        ];

        
        
    return (
        
        <AliceCarousel mouseTracking items={items} infinite keyboardNavigation disableButtonsControls/>
        
    );
}
