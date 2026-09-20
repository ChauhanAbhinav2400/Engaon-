import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { SectionLeaf } from './Icons';
import {
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  RefreshCw,
  Play,
  Pause,
  Info,
  CheckCircle2,
  XCircle,
  Activity
} from 'lucide-react';

export default function Purity3DSection() {
  const mountRef = useRef(null);
  const [substance, setSubstance] = useState('sugar'); // 'sugar' | 'jaggery'
  const [selectedOrgan, setSelectedOrgan] = useState('all'); // 'all' | 'lungs' | 'liver' | 'stomach' | 'heart'
  const [isSimulating, setIsSimulating] = useState(true);

  // Refs for 3D objects to update them dynamically in animation loop
  const sceneRef = useRef(null);
  const organsRef = useRef({});
  const particlesRef = useRef(null);
  const substanceStateRef = useRef('sugar');
  const isSimulatingRef = useRef(true);
  const humanGroupRef = useRef(null);
  const isDraggingRef = useRef(false);
  const previousMousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    substanceStateRef.current = substance;
  }, [substance]);

  useEffect(() => {
    isSimulatingRef.current = isSimulating;
  }, [isSimulating]);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const width = currentMount.clientWidth || 450;
    const height = currentMount.clientHeight || 520;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 1.4, 5.0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentMount.appendChild(renderer.domElement);

    // Master Human Group
    const humanGroup = new THREE.Group();
    humanGroupRef.current = humanGroup;
    scene.add(humanGroup);

    // -------------------------------------------------------------
    // PROCEDURAL 3D HUMAN ANATOMICAL SILHOUETTE (Transparent Hologram)
    // -------------------------------------------------------------
    const bodyMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x93b7be,
      transparent: true,
      opacity: 0.22,
      roughness: 0.35,
      transmission: 0.6,
      thickness: 0.8,
      wireframe: false,
    });

    const bodyWireMaterial = new THREE.MeshBasicMaterial({
      color: 0x5a8a95,
      transparent: true,
      opacity: 0.18,
      wireframe: true,
    });

    const addBodyPart = (geom, pos, scale = [1, 1, 1], rot = [0, 0, 0]) => {
      const mesh = new THREE.Mesh(geom, bodyMaterial);
      mesh.position.set(...pos);
      mesh.scale.set(...scale);
      mesh.rotation.set(...rot);
      humanGroup.add(mesh);

      const wire = new THREE.Mesh(geom, bodyWireMaterial);
      wire.position.set(...pos);
      wire.scale.set(scale[0] * 1.01, scale[1] * 1.01, scale[2] * 1.01);
      wire.rotation.set(...rot);
      humanGroup.add(wire);
      return mesh;
    };

    // Head & Neck
    addBodyPart(new THREE.SphereGeometry(0.38, 24, 24), [0, 2.65, 0]);
    addBodyPart(new THREE.CylinderGeometry(0.14, 0.17, 0.3, 16), [0, 2.25, 0]);

    // Torso / Chest & Abdomen
    addBodyPart(new THREE.CylinderGeometry(0.48, 0.38, 1.0, 20), [0, 1.62, 0], [1.1, 1, 0.72]);
    addBodyPart(new THREE.CylinderGeometry(0.38, 0.44, 0.85, 20), [0, 0.78, 0], [1.05, 1, 0.75]);

    // Shoulders & Arms
    addBodyPart(new THREE.SphereGeometry(0.16, 16, 16), [-0.58, 2.05, 0]);
    addBodyPart(new THREE.SphereGeometry(0.16, 16, 16), [0.58, 2.05, 0]);
    addBodyPart(new THREE.CylinderGeometry(0.12, 0.1, 0.75, 12), [-0.64, 1.55, 0], [1, 1, 1], [0, 0, 0.15]);
    addBodyPart(new THREE.CylinderGeometry(0.12, 0.1, 0.75, 12), [0.64, 1.55, 0], [1, 1, 1], [0, 0, -0.15]);
    addBodyPart(new THREE.CylinderGeometry(0.09, 0.08, 0.65, 12), [-0.75, 0.88, 0], [1, 1, 1], [0, 0, 0.25]);
    addBodyPart(new THREE.CylinderGeometry(0.09, 0.08, 0.65, 12), [0.75, 0.88, 0], [1, 1, 1], [0, 0, -0.25]);

    // Legs / Pelvis base
    addBodyPart(new THREE.CylinderGeometry(0.18, 0.14, 1.1, 16), [-0.26, -0.25, 0], [1, 1, 1], [0, 0, -0.04]);
    addBodyPart(new THREE.CylinderGeometry(0.18, 0.14, 1.1, 16), [0.26, -0.25, 0], [1, 1, 1], [0, 0, 0.04]);

    // -------------------------------------------------------------
    // INTERNAL VITAL ORGANS (LUNGS, HEART, LIVER/PANCREAS, STOMACH/GUT)
    // -------------------------------------------------------------
    const createOrganMaterial = (defaultColor) =>
      new THREE.MeshStandardMaterial({
        color: defaultColor,
        roughness: 0.35,
        metalness: 0.1,
        emissive: defaultColor,
        emissiveIntensity: 0.35,
        transparent: true,
        opacity: 0.92,
      });

    // 1. Trachea & Lungs
    const lungsMat = createOrganMaterial(0x38a169);
    const lungGeom = new THREE.SphereGeometry(0.24, 18, 18);
    const leftLung = new THREE.Mesh(lungGeom, lungsMat);
    leftLung.position.set(-0.21, 1.68, 0.06);
    leftLung.scale.set(0.75, 1.35, 0.6);
    humanGroup.add(leftLung);

    const rightLung = new THREE.Mesh(lungGeom, lungsMat);
    rightLung.position.set(0.21, 1.68, 0.06);
    rightLung.scale.set(0.75, 1.35, 0.6);
    humanGroup.add(rightLung);

    // 2. Heart
    const heartMat = createOrganMaterial(0xe53e3e);
    const heartGeom = new THREE.SphereGeometry(0.13, 16, 16);
    const heart = new THREE.Mesh(heartGeom, heartMat);
    heart.position.set(-0.06, 1.62, 0.16);
    heart.scale.set(0.9, 1.1, 0.9);
    humanGroup.add(heart);

    // 3. Liver & Pancreas
    const liverMat = createOrganMaterial(0xd48b28);
    const liverGeom = new THREE.SphereGeometry(0.2, 16, 16);
    const liver = new THREE.Mesh(liverGeom, liverMat);
    liver.position.set(0.18, 1.18, 0.12);
    liver.scale.set(1.2, 0.75, 0.75);
    humanGroup.add(liver);

    // 4. Stomach & Digestive Tract
    const stomachMat = createOrganMaterial(0x27ae60);
    const stomachGeom = new THREE.TorusGeometry(0.14, 0.08, 14, 24, Math.PI * 1.4);
    const stomach = new THREE.Mesh(stomachGeom, stomachMat);
    stomach.position.set(-0.12, 1.15, 0.14);
    stomach.rotation.set(0, 0, -0.6);
    humanGroup.add(stomach);

    // 5. Intestines (Lower Abdomen)
    const gutMat = createOrganMaterial(0x2d8a55);
    const gutGeom = new THREE.SphereGeometry(0.24, 16, 16);
    const gut = new THREE.Mesh(gutGeom, gutMat);
    gut.position.set(0, 0.68, 0.11);
    gut.scale.set(1.1, 0.7, 0.65);
    humanGroup.add(gut);

    organsRef.current = {
      lungs: { meshes: [leftLung, rightLung], mat: lungsMat },
      heart: { meshes: [heart], mat: heartMat },
      liver: { meshes: [liver], mat: liverMat },
      stomach: { meshes: [stomach, gut], mat: stomachMat },
    };

    // -------------------------------------------------------------
    // PARTICLES: INGESTION & DIGESTION STREAM (Mouth -> Organs)
    // -------------------------------------------------------------
    const particleCount = 80;
    const particleGeom = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const particleProgress = new Float32Array(particleCount);

    // Pathway waypoints: Mouth -> Throat -> Stomach -> Radiate to organs
    const path = [
      new THREE.Vector3(0, 2.52, 0.32), // Mouth
      new THREE.Vector3(0, 2.25, 0.15), // Throat
      new THREE.Vector3(0, 1.85, 0.1),  // Chest
      new THREE.Vector3(-0.06, 1.4, 0.12), // Mid-chest
      new THREE.Vector3(-0.1, 1.12, 0.14), // Stomach
      new THREE.Vector3(0, 0.75, 0.11),    // Gut
    ];

    const curve = new THREE.CatmullRomCurve3(path);

    for (let i = 0; i < particleCount; i++) {
      particleProgress[i] = Math.random();
      const pt = curve.getPoint(particleProgress[i]);
      positions[i * 3] = pt.x + (Math.random() - 0.5) * 0.06;
      positions[i * 3 + 1] = pt.y;
      positions[i * 3 + 2] = pt.z + (Math.random() - 0.5) * 0.06;
    }

    particleGeom.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const particleMaterial = new THREE.PointsMaterial({
      color: 0xff3b30,
      size: 0.09,
      transparent: true,
      opacity: 0.95,
      blending: THREE.AdditiveBlending,
    });

    const particleSystem = new THREE.Points(particleGeom, particleMaterial);
    humanGroup.add(particleSystem);
    particlesRef.current = { system: particleSystem, mat: particleMaterial, curve, progress: particleProgress };

    // -------------------------------------------------------------
    // LIGHTING SETUP
    // -------------------------------------------------------------
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffeedd, 2.0);
    keyLight.position.set(3, 4, 4);
    scene.add(keyLight);

    const backLight = new THREE.DirectionalLight(0x66bb6a, 1.8);
    backLight.position.set(-3, 1, -3);
    scene.add(backLight);

    // Initial slight rotation
    humanGroup.rotation.y = 0.25;

    // -------------------------------------------------------------
    // MOUSE / TOUCH DRAG ROTATION
    // -------------------------------------------------------------
    const onPointerDown = (e) => {
      isDraggingRef.current = true;
      previousMousePosition.current = {
        x: e.clientX || (e.touches && e.touches[0].clientX) || 0,
        y: e.clientY || (e.touches && e.touches[0].clientY) || 0,
      };
    };

    const onPointerMove = (e) => {
      if (!isDraggingRef.current || !humanGroupRef.current) return;
      const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
      const clientY = e.clientY || (e.touches && e.touches[0].clientY) || 0;

      const deltaX = clientX - previousMousePosition.current.x;
      const deltaY = clientY - previousMousePosition.current.y;

      humanGroupRef.current.rotation.y += deltaX * 0.009;
      humanGroupRef.current.rotation.x = Math.max(-0.4, Math.min(0.4, humanGroupRef.current.rotation.x + deltaY * 0.005));

      previousMousePosition.current = { x: clientX, y: clientY };
    };

    const onPointerUp = () => {
      isDraggingRef.current = false;
    };

    const dom = renderer.domElement;
    dom.addEventListener('mousedown', onPointerDown);
    window.addEventListener('mousemove', onPointerMove);
    window.addEventListener('mouseup', onPointerUp);

    dom.addEventListener('touchstart', onPointerDown, { passive: true });
    window.addEventListener('touchmove', onPointerMove, { passive: true });
    window.addEventListener('touchend', onPointerUp);

    // -------------------------------------------------------------
    // ANIMATION & DIGESTION LOOP
    let animId;
    const startTime = performance.now();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const time = (performance.now() - startTime) * 0.001;
      const currentSubstance = substanceStateRef.current;
      const isSugar = currentSubstance === 'sugar';

      // 1. Subtle idle breathing sway
      if (!isDraggingRef.current && humanGroupRef.current) {
        humanGroupRef.current.rotation.y += 0.003;
      }
      humanGroup.position.y = Math.sin(time * 1.8) * 0.03;

      // 2. Heartbeat rhythm
      if (organsRef.current.heart) {
        const heartPulseRate = isSugar ? 9.0 : 4.5; // rapid racing heart with sugar vs calm steady heart with gud
        const heartScale = 1 + Math.sin(time * heartPulseRate) * (isSugar ? 0.18 : 0.07);
        organsRef.current.heart.meshes[0].scale.set(0.9 * heartScale, 1.1 * heartScale, 0.9 * heartScale);
      }

      // 3. Dynamic Organ Colors & Glowing Warning/Healing Feedback
      if (organsRef.current.lungs) {
        if (isSugar) {
          // Lungs inflamed red/purple
          const flash = (Math.sin(time * 5.0) + 1) * 0.5;
          organsRef.current.lungs.mat.color.setRGB(0.9 + flash * 0.1, 0.18, 0.18);
          organsRef.current.lungs.mat.emissive.setRGB(0.7, 0.1, 0.1);
          organsRef.current.lungs.mat.emissiveIntensity = 0.5 + flash * 0.4;
        } else {
          // Lungs healthy emerald green & pure airway glow
          const breath = (Math.sin(time * 2.2) + 1) * 0.5;
          organsRef.current.lungs.mat.color.setRGB(0.18, 0.68, 0.35);
          organsRef.current.lungs.mat.emissive.setRGB(0.1, 0.55, 0.25);
          organsRef.current.lungs.mat.emissiveIntensity = 0.35 + breath * 0.25;
        }
      }

      if (organsRef.current.liver) {
        if (isSugar) {
          // Liver stressed under fructose/glycemic overload
          organsRef.current.liver.mat.color.setHex(0xb83232);
          organsRef.current.liver.mat.emissive.setHex(0x991b1b);
          organsRef.current.liver.mat.emissiveIntensity = 0.6;
        } else {
          // Liver relaxed, unbleached healthy metabolism
          organsRef.current.liver.mat.color.setHex(0xd98218);
          organsRef.current.liver.mat.emissive.setHex(0xc07010);
          organsRef.current.liver.mat.emissiveIntensity = 0.3;
        }
      }

      if (organsRef.current.stomach) {
        if (isSugar) {
          // Acidic burning fermentation & gut distress
          const acid = (Math.sin(time * 6.0) + 1) * 0.5;
          organsRef.current.stomach.mat.color.setRGB(0.85 + acid * 0.15, 0.2, 0.15);
          organsRef.current.stomach.mat.emissive.setRGB(0.8, 0.1, 0.1);
        } else {
          // Warm nourishing prebiotic digestion
          organsRef.current.stomach.mat.color.setRGB(0.15, 0.65, 0.32);
          organsRef.current.stomach.mat.emissive.setRGB(0.1, 0.5, 0.25);
        }
      }

      // 4. Animate Digestive Particle Flow
      if (particlesRef.current && isSimulatingRef.current) {
        const { system, mat, curve: pathCurve, progress } = particlesRef.current;
        const pos = system.geometry.attributes.position.array;

        // Particle colors: Harsh red/white for Sugar vs Golden Amber & Emerald for Jaggery
        if (isSugar) {
          mat.color.setHex(0xff3b30); // Toxic red chemical alert
          mat.size = 0.085;
        } else {
          mat.color.setHex(0xffbe2e); // Golden mineral vitality
          mat.size = 0.095;
        }

        const flowSpeed = isSugar ? 0.009 : 0.005; // rapid chemical rush vs gentle bio-absorption

        for (let i = 0; i < particleCount; i++) {
          progress[i] = (progress[i] + flowSpeed) % 1.0;
          const p = pathCurve.getPoint(progress[i]);

          // Dispersion into body organs as particles travel past stomach
          const scatter = progress[i] > 0.6 ? (progress[i] - 0.6) * 0.6 : 0.04;
          const jitter = (Math.sin(time * 10 + i) * scatter);

          pos[i * 3] = p.x + jitter;
          pos[i * 3 + 1] = p.y;
          pos[i * 3 + 2] = p.z + jitter * 0.5;
        }

        system.geometry.attributes.position.needsUpdate = true;
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!currentMount) return;
      const newW = currentMount.clientWidth;
      const newH = currentMount.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      dom.removeEventListener('mousedown', onPointerDown);
      window.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('mouseup', onPointerUp);
      dom.removeEventListener('touchstart', onPointerDown);
      window.removeEventListener('touchmove', onPointerMove);
      window.removeEventListener('touchend', onPointerUp);
      if (currentMount.contains(renderer.domElement)) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  // Diagnostic Data for Organs
  const organDetails = {
    all: {
      name: 'Full Body Diagnostic Impact',
      sugarEffect:
        'Bleached using toxic Sulphur Dioxide (SO₂), refined sugar triggers rapid insulin surges, widespread systemic inflammation, and rapid leeching of internal calcium and iron reserves.',
      jaggeryEffect:
        'Engaon Jaggery is completely unbleached and chemical-free. Rich in intact plant molasses, it nourishes internal organs with natural iron, potassium, and magnesium without cellular stress.',
      organStats: {
        bloodPurity: 'Sugar: -65% | Gud: +92%',
        toxinLoad: 'Sugar: HIGH (SO₂ + Phosphoric) | Gud: ZERO',
        energyRelease: 'Sugar: 20 min Crash | Gud: 3-4 Hours Sustained',
      },
    },
    lungs: {
      name: '🫁 Lungs & Respiratory Tract',
      sugarEffect:
        'Refined sugar increases mucus thickness, triggers airway hyper-responsiveness, and depresses macrophage immune activity against dust and pollutants.',
      jaggeryEffect:
        'Ayurvedic and modern clinical observations prove jaggery acts as a natural bronchodilator. It relaxes bronchial muscles and facilitates the expulsion of trapped dust and soot particles.',
      organStats: {
        airwayResistance: 'Sugar: Inflamed & Constricted | Gud: Cleared & Relaxed',
        detoxCapacity: 'Sugar: Inhibited | Gud: Actively Enhanced',
      },
    },
    liver: {
      name: '🩺 Liver & Pancreatic Metabolism',
      sugarEffect:
        'Industrial white sugar delivers a violent flood of isolated sucrose directly to the liver, causing immediate insulin surges, pancreatic exhaustion, and non-alcoholic fatty liver build-up.',
      jaggeryEffect:
        'Jaggery contains complex sucrose bonded with plant fibers and trace minerals. It is absorbed gradually, sparing the pancreas and supporting natural liver detoxification enzymes.',
      organStats: {
        insulinShock: 'Sugar: SEVERE SPIKE | Gud: Gentle & Stable',
        fattyDepositRisk: 'Sugar: High | Gud: Zero Added Stress',
      },
    },
    stomach: {
      name: '🌿 Gut Microbiome & Digestion',
      sugarEffect:
        'Feeds aggressive Candida albicans fungal strains, triggers acid reflux, degrades the mucosal gut lining, and causes chronic post-meal bloating.',
      jaggeryEffect:
        'Activates digestive enzymes (Jatharagni) in the stomach wall, facilitates gentle bowel motility, and feeds healthy probiotic gut flora.',
      organStats: {
        gutDysbiosis: 'Sugar: Promoted | Gud: Prevented',
        enzymeActivation: 'Sugar: Suppressed | Gud: Stimulated',
      },
    },
    heart: {
      name: '❤️ Heart & Blood Oxygenation',
      sugarEffect:
        'Causes arterial stiffness and leeches vital magnesium and calcium ions from heart muscle tissue, leading to blood pressure volatility and fatigue.',
      jaggeryEffect:
        'Provides 11mg of natural non-heme iron per 100g along with natural potassium, assisting hemoglobin synthesis and maintaining steady cardiovascular rhythm.',
      organStats: {
        hemoglobinSupport: 'Sugar: Depleting | Gud: Nourishing (+11mg Fe)',
        bloodPressureBalance: 'Sugar: Erratic | Gud: Potassium-Supported',
      },
    },
  };

  const currentDetail = organDetails[selectedOrgan] || organDetails.all;

  return (
    <section id="purity" className="purity-3d-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header center-header">
          <div className="section-title-wrap center-text">
            <span className="purity-tagline-badge font-serif">
              <Sparkles size={14} />
              <span>3D Anatomical Organ Simulation</span>
            </span>
            <h2 className="section-title">
              <SectionLeaf />
              <span>How Your Organs React: Sugar vs. Engaon Gud</span>
            </h2>
            <p className="section-subtitle">
              Rotate the 3D human body and switch between substances to see the real cellular impact on internal organs.
            </p>
          </div>
        </div>

        {/* Master 3D Comparison Dashboard */}
        <div className="organ-sim-dashboard">
          
          {/* Top Substance Selector Banner */}
          <div className="substance-toggle-bar">
            <button
              type="button"
              className={`substance-btn btn-danger-mode ${substance === 'sugar' ? 'active-sugar' : ''}`}
              onClick={() => setSubstance('sugar')}
            >
              <div className="substance-btn-indicator">
                <span className="dot-sugar"></span>
              </div>
              <div className="substance-text-box">
                <span className="substance-label">Mode 1: Consuming</span>
                <strong className="substance-title">Chemically Refined White Sugar</strong>
              </div>
              <span className="substance-tag tag-damage">Cellular Damage Active</span>
            </button>

            <button
              type="button"
              className={`substance-btn btn-pure-mode ${substance === 'jaggery' ? 'active-jaggery' : ''}`}
              onClick={() => setSubstance('jaggery')}
            >
              <div className="substance-btn-indicator">
                <span className="dot-jaggery"></span>
              </div>
              <div className="substance-text-box">
                <span className="substance-label">Mode 2: Consuming</span>
                <strong className="substance-title">Engaon Pure Dhampur Jaggery</strong>
              </div>
              <span className="substance-tag tag-healthy">100% Organ Healing</span>
            </button>
          </div>

          {/* 3D Simulation & Organ Diagnostic Split View */}
          <div className="sim-main-grid">
            
            {/* 3D Human Body Canvas Container */}
            <div className={`canvas-3d-container ${substance === 'sugar' ? 'canvas-sugar-alert' : 'canvas-jaggery-heal'}`}>
              
              {/* Overlay Interactive Controls */}
              <div className="canvas-header-controls">
                <div className="sim-status-chip">
                  <span className={`status-blip ${substance === 'sugar' ? 'blip-red' : 'blip-green'}`}></span>
                  <span>{substance === 'sugar' ? 'Toxin Influx Active' : 'Pure Mineral Assimilation'}</span>
                </div>

                <div className="canvas-interaction-tools">
                  <button
                    type="button"
                    className="tool-btn"
                    onClick={() => setIsSimulating(!isSimulating)}
                    title={isSimulating ? 'Pause Flow' : 'Play Flow'}
                  >
                    {isSimulating ? <Pause size={14} /> : <Play size={14} />}
                    <span>{isSimulating ? 'Pause Stream' : 'Start Stream'}</span>
                  </button>
                </div>
              </div>

              {/* Three.js Canvas Mount */}
              <div className="three-viewport" ref={mountRef}>
                <div className="viewport-drag-tag">
                  <RefreshCw size={12} className="spin-slow" />
                  <span>Drag to rotate 3D human body</span>
                </div>
              </div>

              {/* Floating 3D Organ Diagnostic Markers */}
              <div className="canvas-organ-quickbar">
                <span className="quickbar-label">Focus Organ:</span>
                {[
                  { id: 'all', label: 'Whole Body' },
                  { id: 'lungs', label: '🫁 Lungs' },
                  { id: 'heart', label: '❤️ Heart' },
                  { id: 'liver', label: '🩺 Liver' },
                  { id: 'stomach', label: '🌿 Gut' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className={`quickbar-pill ${selectedOrgan === item.id ? 'active-pill' : ''}`}
                    onClick={() => setSelectedOrgan(item.id)}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

            </div>

            {/* Right Side: Real-Time Cellular Diagnostic Panel */}
            <div className="diagnostic-panel">
              
              {/* Panel Header */}
              <div className="diag-header">
                <div className="diag-title-wrap">
                  <span className="diag-badge font-serif">Internal Organ Diagnostic</span>
                  <h3 className="diag-organ-name font-serif">{currentDetail.name}</h3>
                </div>
                <div className={`diag-condition-badge ${substance === 'sugar' ? 'badge-danger' : 'badge-safe'}`}>
                  {substance === 'sugar' ? (
                    <>
                      <XCircle size={15} />
                      <span>Chemical Stress</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle2 size={15} />
                      <span>Zero Damage • Nourished</span>
                    </>
                  )}
                </div>
              </div>

              {/* Dynamic Organ Reaction Description */}
              <div className={`diag-reaction-card ${substance === 'sugar' ? 'reaction-danger' : 'reaction-healing'}`}>
                <div className="reaction-card-top">
                  <span className="reaction-label">
                    {substance === 'sugar' ? 'Cellular Damage Report' : 'Healing & Protection Mechanism'}
                  </span>
                </div>
                <p className="reaction-text">
                  {substance === 'sugar' ? currentDetail.sugarEffect : currentDetail.jaggeryEffect}
                </p>
              </div>

              {/* Vital Statistics Meter */}
              <div className="vital-stats-box">
                <h4 className="vital-stats-title font-serif">
                  <Activity size={15} />
                  <span>Clinical Bio-Markers Comparison</span>
                </h4>
                <div className="vital-stats-list">
                  {Object.entries(currentDetail.organStats).map(([statKey, statVal]) => (
                    <div key={statKey} className="stat-row">
                      <span className="stat-key">
                        {statKey.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}:
                      </span>
                      <strong className={`stat-val ${substance === 'sugar' ? 'val-danger' : 'val-safe'}`}>
                        {statVal}
                      </strong>
                    </div>
                  ))}
                </div>
              </div>

              {/* Summary Conclusion Box */}
              <div className={`diag-verdict-box ${substance === 'sugar' ? 'verdict-sugar' : 'verdict-jaggery'}`}>
                {substance === 'sugar' ? (
                  <div className="verdict-inner">
                    <ShieldAlert size={22} className="verdict-icon-danger" />
                    <div className="verdict-copy">
                      <strong>The White Sugar Verdict:</strong>
                      <p>Stripped of all 64 vital sugarcane minerals. Forces your body to leach its own iron, calcium, and magnesium just to process the chemical crystals.</p>
                    </div>
                  </div>
                ) : (
                  <div className="verdict-inner">
                    <ShieldCheck size={22} className="verdict-icon-safe" />
                    <div className="verdict-copy">
                      <strong>The Engaon Purity Verdict:</strong>
                      <p>Zero sulphur, zero bone-char filtering. Retains 100% natural molasses, leaving your lungs, liver, gut, and heart completely undamaged and energized.</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Call to action */}
              <div className="diag-cta-row">
                <a href="#products" className="btn btn-whatsapp diag-cta-btn">
                  <span>Switch Your Family to Pure Jaggery</span>
                  <span>→</span>
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
