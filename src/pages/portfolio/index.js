import React, { Suspense } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { meta } from "../../content_option";
import { GLTFViewer } from "../../components/GLTFViewer";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { AguapunteraModel, Model } from "../../assets/stlsFiles/Aguapunteras";
import { Pieza1 } from "../../assets/stlsFiles/Pieza1";
import { Pieza2 } from "../../assets/stlsFiles/Pieza2";
import { Pieza3 } from "../../assets/stlsFiles/Pieza3";
import { Pieza4 } from "../../assets/stlsFiles/Pieza4";
import { Pieza5 } from "../../assets/stlsFiles/Pieza5";
import { Pieza6 } from "../../assets/stlsFiles/Pieza6";
import { Pieza7 } from "../../assets/stlsFiles/Pieza7";
import { Pieza8 } from "../../assets/stlsFiles/Pieza8";
import { Pieza9 } from "../../assets/stlsFiles/Pieza9";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
          <Canvas style={{ width: 300, height: 300, borderColor: '#fff' }} camera={{ position: [100, 500, -200], fov: 30 }}>
            <ambientLight intensity={1} />
            <directionalLight position={[0, 10, 5]} intensity={30} />
            <Suspense fallback={null}>
              <AguapunteraModel />
            </Suspense>
            <OrbitControls/>
          </Canvas>
          <Canvas style={{ width: 300, height: 300, borderColor: '#fff' }} camera={{ position: [100, 100, -300], fov: 30 }}>
            <ambientLight intensity={1} />
            <directionalLight position={[0, 10, 5]} intensity={30} />
            <Suspense fallback={null}>
              <Pieza1 />
            </Suspense>
            <OrbitControls/>
          </Canvas>
          <Canvas style={{ width: 300, height: 300, borderColor: '#fff' }} camera={{ position: [180, 200, -300], fov: 30 }}>
            <ambientLight intensity={1} />
            <directionalLight position={[0, 10, 5]} intensity={30} />
            <Suspense fallback={null}>
              <Pieza2 />
            </Suspense>
            <OrbitControls/>
          </Canvas>
          <Canvas style={{ width: 300, height: 300, borderColor: '#fff' }} camera={{ position: [100, 300, -100], fov: 30 }}>
            <ambientLight intensity={1} />
            <directionalLight position={[0, 10, 5]} intensity={30} />
            <Suspense fallback={null}>
              <Pieza3 />
            </Suspense>
            <OrbitControls/>
          </Canvas>
          <Canvas style={{ width: 300, height: 300, borderColor: '#fff' }} camera={{ position: [150, 50, -100], fov: 30 }}>
            <ambientLight intensity={1} />
            <directionalLight position={[0, 10, 5]} intensity={30} />
            <Suspense fallback={null}>
              <Pieza4 />
            </Suspense>
            <OrbitControls/>
          </Canvas>
          <Canvas style={{ width: 300, height: 300, borderColor: '#fff' }} camera={{ position: [150, 100, -400], fov: 30 }}>
            <ambientLight intensity={1} />
            <directionalLight position={[0, 10, 5]} intensity={30} />
            <Suspense fallback={null}>
              <Pieza5 />
            </Suspense>
            <OrbitControls/>
          </Canvas>
          <Canvas style={{ width: 300, height: 300, borderColor: '#fff' }} camera={{ position: [100, 55, -300], fov: 30 }}>
            <ambientLight intensity={1} />
            <directionalLight position={[0, 10, 5]} intensity={30} />
            <Suspense fallback={null}>
              <Pieza6 />
            </Suspense>
            <OrbitControls/>
          </Canvas>
          <Canvas style={{ width: 300, height: 300, borderColor: '#fff' }} camera={{ position: [500, 200, -600], fov: 8 }}>
            <ambientLight intensity={1} />
            <directionalLight position={[0, 10, 5]} intensity={30} />
            <Suspense fallback={null}>
              <Pieza7 />
            </Suspense>
            <OrbitControls/>
          </Canvas>
          <Canvas style={{ width: 300, height: 300, borderColor: '#fff' }} camera={{ position: [200, 500, -200], fov: 35 }}>
            <ambientLight intensity={1} />
            <directionalLight position={[0, 10, 5]} intensity={30} />
            <Suspense fallback={null}>
              <Pieza8 />
            </Suspense>
            <OrbitControls/>
          </Canvas>
          <Canvas style={{ width: 300, height: 300, borderColor: '#fff' }} camera={{ position: [100, 500, -200], fov: 40 }}>
            <ambientLight intensity={1} />
            <directionalLight position={[0, 10, 5]} intensity={30} />
            <Suspense fallback={null}>
              <Pieza9 />
            </Suspense>
            <OrbitControls/>
          </Canvas>
        </div>
      </Container>
    </HelmetProvider>
  );
};
