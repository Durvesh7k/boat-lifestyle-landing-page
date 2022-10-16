import React from 'react'
import ImageComp from "./ImageComp"
import DragSlider from './DragSlider'
import './DragSlider.css'

class Drag extends React.Component {


    render() {
  
      const items = [
      {
        src : "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Gifting-1.jpg?v=1665491728",
        alt : "boat-img"
      },
      {
        src : "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Daily-deals-2.jpg?v=1665491727",
        alt : "boat-img"
      },
      {
        src : "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Newsletter.jpg?v=1665491728",
        alt : "boat-img"
      },
      {
        src : "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Gifting-1.jpg?v=1665491728",
        alt : "boat-img"
      },
  
    ]
  
      const setting = {
        dragSpeed: 1.25,
        itemWidth: 450,
        itemHeight: 300,
        itemSideOffsets: 15,
      }
  
      const itemStyle = {
        width: `${setting.itemWidth}px`,
        height: `${setting.itemHeight}px`,
        margin: `0px ${setting.itemSideOffsets}px`
      }
  
      return(
        <div className='drag__container'>
          <DragSlider _data={items} {...setting}>
            {
              items.map((i, _i) => (
                <div
                  key={_i}
                    className="image__slider"
                  style={{ ...itemStyle }}>
                    <ImageComp
                    src = {i.src}
                    alt = {i.alt}
                    />
                </div>
              ))
            }
          </DragSlider>
        </div>
      )
    }
  }
  
  export default Drag;