import React, { Component } from 'react';
import ImageBox from './ImageBox'
import { Row,Col } from 'antd';
import './App.css';

class App extends Component {
  render() {
    return (
    <div className="App">
        <header className="App-header">
          <img
            src="http://res.cloudinary.com/dpaqr329p/image/upload/ar_1:1,b_rgb:262c35,bo_5px_solid_rgb:ff0000,c_fill,g_auto,r_max/v1532143526/iamfootball/logo_iamfootball.jpg" 
            className="App-logo" 
            alt="logo" 
          />
          <h1 className="App-title">Iamfootball</h1>
        </header>
      <div style={{ background: '#ECECEC', padding: '30px' }}>
          <Row gutter={16}>
            <Col span={6}>
              <ImageBox 
                src="http://res.cloudinary.com/dpaqr329p/image/upload/v1532143526/iamfootball/1.jpg"
                title="ราคา 1550"
                description="เสื้อเหย้าเมืองทอง ปี2012 แชมป์ไร้พ่าย
                ของใหม่ ป้ายหลุด ก้านป้ายยังอยู่
                Size M อก 39 ยาว 28 นิ้ว 
                ชื่อเบอร์แท้ๆ"
              />
            </Col>
            <Col span={6}>
              <ImageBox 
                src="http://res.cloudinary.com/dpaqr329p/image/upload/v1532143526/iamfootball/2.jpg"
                title="ราคา 1100"
                description="เสื้อเยือน เมืองทอง ปี2012 แชมป์ไร้พ่าย
                ดาวปักมาแท้ๆจากสโมสรนะครับ
                เสื้อมือสอง ของแท้ มีตำหนิ ดูได้ในคอมเม้นท์
                Size M อก 39 ยาว 28 นิ้ว 
                ชื่อเบอร์แท้ๆ"
              />
            </Col>
            <Col span={6}>
              <ImageBox 
                src="https://res.cloudinary.com/dpaqr329p/image/upload/v1532143526/iamfootball/3.jpg"
                title="ราคา 1000"
                description="เสื้อเยือน เมืองทอง ปี2012 แชมป์ไร้พ่าย
                เสื้อมือสอง ของแท้ๆ มีตำหนิดูได้ในคอมเม้นท์
                Size M อก 39 ยาว 28 นิ้ว "
              />
            </Col>
            <Col span={6}>
              <ImageBox 
                src="https://res.cloudinary.com/dpaqr329p/image/upload/v1532143525/iamfootball/4.jpg"
                title="ราคา 600"
                description="เสื้อโกล เมืองทอง ปี2016 
                เสื้อมือสอง ของแท้ๆ ไม่มีตำหนิใดๆ
                Size M อก 39 ยาว 28 นิ้ว "
              />
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={6}>
              <ImageBox 
                src="https://res.cloudinary.com/dpaqr329p/image/upload/v1532143526/iamfootball/5.jpg"
                title="ราคา 930"
                description="เสื้อเยือน เมืองทอง ปี2013
                เสื้อมือสอง ของแท้ๆ ไม่มีตำหนิ
                Size M อก 39 ยาว 28 นิ้ว"
              />
            </Col>
            <Col span={6}>
              <ImageBox 
                src="https://res.cloudinary.com/dpaqr329p/image/upload/v1532143526/iamfootball/6.jpg"
                title="ราคา 870 "
                description="เสื้อโกล เมืองทอง ปี2012 แชมป์ไร้พ่าย
                เสื้อมือสอง ของแท้ๆ ไม่มีตำหนิ
                ชื่อเบอร์แชมป์เปี้ยน 12 แบบทรานเฟอร์
                Size M อก 39 ยาว 28 นิ้ว "
              />
            </Col>
            <Col span={6}>
              <ImageBox 
                src="https://res.cloudinary.com/dpaqr329p/image/upload/v1532143525/iamfootball/7.jpg"
                title="ราคา 490 "
                description="เสื้อซ้อม เมืองทอง ปี2017 
                เสื้อมือสอง ของแท้ๆ มีตำหนิด้ายรันเล็กๆดูได้ในคอมเม้นท์
                Size M อก 39 ยาว 28 นิ้ว "
              />
            </Col>
            <Col span={6}>
              <ImageBox 
                src="https://res.cloudinary.com/dpaqr329p/image/upload/v1532143525/iamfootball/8.jpg"
                title="ราคา 1550 "
                description="เสื้อเยือน เมืองทอง ปี2016 แชมป์ล่าสุด
                เสื้อใหม่ ของแท้ๆ ป้ายห้อย ดาวแชมป์ปักจากสโมสร ชื่อเบอร์แท้ๆ
                Size S อก 38 ยาว 27 นิ้ว"
              />
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={6}>
              <ImageBox 
                src="https://res.cloudinary.com/dpaqr329p/image/upload/v1532143526/iamfootball/9.jpg"
                title="ราคา 950"
                description="เสื้อเยือน เมืองทอง ปี2016 แชมป์ล่าสุด
                เสื้อใหม่ ของแท้ๆ ป้ายห้อย ดาวแชมป์ปักจากสโมสร 
                Size S อก 38 ยาว 27 นิ้ว "
              />
            </Col>
            <Col span={6}>
              <ImageBox 
                src="https://res.cloudinary.com/dpaqr329p/image/upload/v1532143524/iamfootball/10.jpg"
                title="ราคา 1200 "
                description="เสื้อเยือน เมืองทอง ปี2016 แชมป์ล่าสุด
                เสื้อมือสอง ไม่มีตำหนิ ของแท้ๆ ชื่อเบอร์ทรานเฟอรแบบเฟลี่ยมเหมือนนักเตะ
                Size S อก 38 ยาว 27 นิ้ว "
              />
            </Col>
            <Col span={6}>
              <ImageBox 
                src="https://res.cloudinary.com/dpaqr329p/image/upload/v1532143524/iamfootball/11.jpg"
                title="ราคา 550 "
                description="สื้อเยือน ทีมชาติไทยปี2017
                เสื้อมือสอง ของแท้ๆ มีตำหนิ ดูได้ในคอมเมนท์
                Size M อก 39 ยาว 28 นิ้ว"
              />
            </Col>
            <Col span={6}>
              <ImageBox 
                src="https://res.cloudinary.com/dpaqr329p/image/upload/v1532143525/iamfootball/12.jpg"
                title="ราคา 370"
                description="เสื้อเหย้า ทีมชาติไทยปี2016 
                เสื้อมือสอง ของแท้ๆ ไม่มีตำหนิ
                Size M อก 39 ยาว 28 นิ้ว"
              />
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={6}>
              <ImageBox 
                src="https://res.cloudinary.com/dpaqr329p/image/upload/v1532143525/iamfootball/13.jpg"
                title="ราคา 600"
                description="เสื้อ ศักดิ์ศรี ปฐพีไทย งานรีเมค จากแกรนสปอร์ต 
                เสื้อมือสอง ของแท้ๆ ไม่มีตำหนิ พร้อมกล่อง Boxset
                Size M อก 39 ยาว 28 นิ้ว"
              />
            </Col>
            <Col span={6}>
              <ImageBox 
                src="https://res.cloudinary.com/dpaqr329p/image/upload/v1532143524/iamfootball/14.jpg"
                title="ราคา 600"
                description="เสื้อ ศักดิ์ศรี ปฐพีไทย งานรีเมค จากแกรนสปอร์ต 
                เสื้อมือสอง ของแท้ๆ ไม่มีตำหนิ พร้อมกล่อง Boxset
                Size S อก 37-38 ยาว 27 นิ้ว"
              />
            </Col>
            <Col span={6}>
              <ImageBox 
                src="https://res.cloudinary.com/dpaqr329p/image/upload/v1532143524/iamfootball/15.jpg"
                title="ราคา 230"
                description="เสื้อเชียร์ทีมชาติไทย ปี2014
                เสื้อมือสอง ของแท้ๆ ไม่มีตำหนิ 
                Size M อก 39 ยาว 28 นิ้ว"
              />
            </Col>
            <Col span={6}>
              <ImageBox 
                src="https://res.cloudinary.com/dpaqr329p/image/upload/v1532143523/iamfootball/16.jpg"
                title="ราคา 230"
                description="เสื้อเชียร์ทีมชาติไทย ปี2014
                เสื้อมือสอง ของแท้ๆ ไม่มีตำหนิ 
                Size M อก 39 ยาว 28 นิ้ว"
              />
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={6}>
              <ImageBox 
                src="https://res.cloudinary.com/dpaqr329p/image/upload/v1532143523/iamfootball/17.jpg"
                title="ราคา 330"
                description="เสื้อโปโล ทีมชาติไทย 
                เสื้อใหม่ ของแท้ ป้ายห้อย
                Size S อก 37-38 ยาว 27 นิ้ว"
              />
            </Col>
            <Col span={6}>
              <ImageBox 
                src="https://res.cloudinary.com/dpaqr329p/image/upload/v1532143523/iamfootball/18.jpg"
                title="ราคา 350 "
                description="เสื้อโปโล ทีมชาติไทย 
                เสื้อใหม่ ของแท้ ป้ายห้อย
                Size M อก 39-40 ยาว 28 นิ้ว"
              />
            </Col>
            <Col span={6}>
              <ImageBox 
                src="https://res.cloudinary.com/dpaqr329p/image/upload/v1532146005/iamfootball/19.jpg"
                title="ราคา 300 "
                description="เสื้อยืด งานเรโทร ทีมชาติอังกฤษ 
                เสื้อมือสอง ของแท้ จากไนกี้ ไม่มีตำหนิ เสื้อสีเริ่มซีดเล็กน้อย
                Size S อก 37-38 ยาว 28 นิ้ว"
              />
            </Col>
            <Col span={6}>
              <ImageBox 
                src="https://res.cloudinary.com/dpaqr329p/image/upload/v1532146005/iamfootball/20.jpg"
                title="ราคา 450 "
                description="เสื้อทีมชาติอังกฤษ ปี
                เสื้อมือสอง ของแท้ๆ มีตำหนิ ดูได้ในคอมเมนท์
                Size L อก 38 ยาว 28 นิ้ว"
              />
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={6}>
              <ImageBox 
                src="https://res.cloudinary.com/dpaqr329p/image/upload/v1532146005/iamfootball/21.jpg"
                title="ราคา 400 "
                description="เสื้อเยือน ทีมชาติ ฮอลแลนด์ ปี
                เสื้อมือสอง ของแท้ๆ มีตำหนิ ดูได้ในคอมเมนท์
                Size S อก 38-39 ยาว 28 นิ้ว"
              />
            </Col>
            <Col span={6}>
              <ImageBox 
                src="https://res.cloudinary.com/dpaqr329p/image/upload/v1532146005/iamfootball/22.jpg"
                title="ราคา 450"
                description="เสื้อเยือน ฮัมบูรก์ ปี
                เสื้อมือสอง ของแท้ๆ มีตำหนิ ดูได้ในคอมเมนท์
                Size M อก 39 ยาว 28 นิ้ว"
              />
            </Col>
            <Col span={6}>
              <ImageBox 
                src="https://res.cloudinary.com/dpaqr329p/image/upload/v1532146005/iamfootball/23.jpg"
                title="ราคา 650 "
                description="เสื้อเหย้า นิวคลาสเซิ่ล ปี
                เสื้อมือสอง ของแท้ๆ มีตำหนิ ดูได้ในคอมเมนท์
                Size S อก 39 ยาว 28 นิ้ว"
              />
            </Col>
            <Col span={6}>
              <ImageBox 
                src="https://res.cloudinary.com/dpaqr329p/image/upload/v1532146004/iamfootball/24.jpg"
                title="ราคา 550 "
                description="เสื้อเยือน เยอรมัน ปี 2014 ชุดแชมป์โลก
                เสื้อมือสอง ของแท้ สภาพมีรอยเปื้อนที่ชายเสื้อ และ ป้ายบอกไซส์ลอก Size XL Boy อก 38 ยาว 26 นิ้ว"
              />
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={6}>
              <ImageBox 
                src="https://res.cloudinary.com/dpaqr329p/image/upload/v1532146005/iamfootball/25.jpg"
                title="ราคา 350 "
                description="เสื้อเยือน เทโร ปี2017 
                เสื้อใหม่ ของแท้ ป้ายห้อย
                Size M อก 39 ยาว 28 นิ้ว"
              />
            </Col>
            <Col span={6}>
              <ImageBox 
                src="https://res.cloudinary.com/dpaqr329p/image/upload/v1532146005/iamfootball/26.jpg"
                title="ราคา 230"
                description="เสื้อลำลอง เมืองทอง 
                มีรอยเกี่ยวและด้ายรัยนิดนห่อย ไม่น่าเกลียด
                Size S อก 39 ยาว 27 นิ้ว"
              />
            </Col>
            <Col span={6}>
              <ImageBox 
                src="https://res.cloudinary.com/dpaqr329p/image/upload/v1532146004/iamfootball/27.jpg"
                title="ราคา 250"
                description="เสื้อเหย้า ขอนแก่น ปี2018
                เสื้อมือสอง ของแท้ ไม่มีตำหนิ
                Size M อก 38 ยาว 27 นิ้ว"
              />
            </Col>
            <Col span={6}>
              <ImageBox 
                src="https://res.cloudinary.com/dpaqr329p/image/upload/v1532146004/iamfootball/28.jpg"
                title="ราคา 650 "
                description="เสื้อ 1860 มิวนิค 
                เสื้อของแท้ มือสอง สภาพมีขุยบริเวณด้านหน้า ชื่อเบอร์ Jeremies 16 กำมะหยี่
                Size S อก 42 ยาว 29 นิ้ว"
              />
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={6}>
              <ImageBox 
                src="https://res.cloudinary.com/dpaqr329p/image/upload/v1532146004/iamfootball/29.jpg"
                title="ราคา 200"
                description="เสื้อเหย้า ชาลเก้ ปี
                เสื้อมือสอง ของแท้ๆ มีตำหนิดูได้ในคอมเม้นท์
                Size L Boy อก 38 ยาว 26 "
              />
            </Col>
            <Col span={6}>
            </Col>
            <Col span={6}>
            </Col>
            <Col span={6}>
            </Col>
          </Row>
        </div>
    </div>
    );
  }
}

export default App;
