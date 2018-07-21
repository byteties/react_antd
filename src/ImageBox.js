import React from 'react';
import { Card } from 'antd';
import './ImageBox.css';

const ImageBox = ({src,title,description}) => (
  <Card>
    <div className="custom-image">
      <img alt="example" width="100%" src={src} />
    </div>
    <div className="custom-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </Card>
)

export default ImageBox