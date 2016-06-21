var db = {};

db.schedule = {
  'day1': [
    {
      type: 'dayTitle',
      img: require('../images/oldMain.png'),
      text: 'June 20 2016'
    },
    {
      type: 'generalEvent',
      header: 'REGISTRATION:',
      time: '4:00pm - 6:00pm',
      location: 'Maple Hill Dorm',
      locationType: 0,
      url: 'https://www.google.com/maps/place/601-699+Hall+Ave,+Fayetteville,+AR+72701/@36.0737391,-94.1787355,18z/data=!3m1!4b1!4m12!1m6!3m5!1s0x87c96eef21d2b8ad:0xc933e1f806a9d35b!2sMaple+Hill+West!8m2!3d36.073621!4d-94.17822!3m4!1s0x87c96eef27e716cf:0x55cbd58dfbc692ae!8m2!3d36.0737369!4d-94.1776412',
      text: ["During this time registration will take place at the Maple Hill Dorm."]
    },
    {
      type: 'note',
      text: ''
    },
    {
      type: 'generalEvent',
      time: '6:00pm - 8:00pm',
      header: 'WELCOME RECEPTION:',
      location: 'University House',
      locationType: 0,
      url: 'https://www.google.com/maps/place/University+House,+Fayetteville,+AR+72701/@36.070719,-94.1768836,17z/data=!3m1!4b1!4m5!3m4!1s0x87c96ee62c24a06f:0x1f0f5c49bfca2aa!8m2!3d36.0707192!4d-94.1747029',
      text: ['The welcome reception will be hosted at Univerisity House. Registration will be available inside during the event.']
    },
    {
      type: 'note',
      text: ''
    },
    {
      type: 'dayTitle',
      img: require('../images/reynolds.png'),
      text: 'June 21 2016'
    },
    {
      type: 'generalEvent',
      time: '7:00am - 8:00am',
      header: 'BREAKFAST/POSTER SETUP:',
      location: 'Reynolds Center',
      locationType: 0,
      url: 'https://www.google.com/maps/place/Donald+W.+Reynolds+Center+for+Enterprise+Development,+Fayetteville,+AR+72701/@36.0646598,-94.1758924,17z/data=!3m1!4b1!4m5!3m4!1s0x87c96ee0c3154f37:0xd8640a84ff183658!8m2!3d36.0646619!4d-94.1736775',
      text: ['Breakfast will be held in the Reynolds Center (RCED 103-107).', 'Setup posters in RCED 111.', 'Registration will take place all day in the Reynolds Center atrium.']
    },
    {
      type: 'note',
      text: ''
    },
    {
      type: 'generalEvent',
      time: '8:00am - 8:20am',
      header: 'OPENING REMARKS:',
      location: 'RCED 120',
      locationType: 1,
      url: '',
      text: ['Prof. Jim Rankin, Vice Provost for Research & Development', 'Prof. Julio Gea-Banacloche, Chair of the Physics Department', 'Prof. Paul Thibado, Local PEC Chair']
    },
    {
      type: 'note',
      text: ''
    },
    {
      type: 'generalEvent',
      time: '8:20am - 9:40am',
      header: 'SESSION 1:',
      location: 'RCED 120',
      locationType: 1,
      url: '',
      text: ['Moderator: Prof. Pat Thiel, Iowa State University']
    },
    {
      type: 'talk',
      time: '8:20AM - 8:40AM',
      title: 'Density Functional Theory of Chemical Functionalization of Two-dimensional Materials',
      url: 'http://www.uark.edu/ua/pec76/files/T_Mou.pdf',
      labs: [
        {
          name: 'School of Chemical, Biological and Materials Engineering, University of Oklahoma, Norman, OK',
          authors: ['TONG MOU']
        }
      ]
    },
    {
      type: 'talk',
      time: '8:40AM - 9:00AM',
      title: 'SAD-GLAD Pt-Ni @Ni nanorods as Highly Active Oxygen Reduction Reaction Electrocatalysts',
      url: 'http://www.uark.edu/ua/pec76/files/M_Begum.pdf',
      labs: [
        {
          name: 'Department of Physics and Astronomy, University of Arkansas at Little Rock, Little Rock, AR',
          authors: ['MAHBUBA BEGUM']
        }
      ]
    },
    {
      type: 'talk',
      time: '9:00AM - 9:20AM',
      title: 'Spatially Resolved Scanning Tunneling Spectroscopy of Single Layer Steps on Si(100) Surfaces: Experiment and Simulation',
      url: 'http://www.uark.edu/ua/pec76/files/X_Wang.pdf',
      labs: [
        {
          name: 'Chemical Physics Program, University of Maryland, College Park, MD',
          authors: ['X. WANG']
        }
      ]
    },
    {
      type: 'talk',
      time: '9:20AM - 9:40AM',
      title: 'Interrogating the Superconductor Ca\u2081\u2080(Pt\u2084As\u2088)(Fe\u2082\u2093Pt\u2093As\u2082)\u2085 Layer-by-layer',
      url: 'http://www.uark.edu/ua/pec76/files/J_Kim.pdf',
      labs: [
        {
          name: 'Department of Physics and Astronomy, Louisiana State University, Baton Rouge, LA',
          authors: ['JISUN KIM']
        }
      ]
    },
    {
      type: 'sessionnote',
      time: '9:40AM - 10:00AM',
      title: 'Coffee will be available in the Reynolds Center Atrium',
      url: 0,
      labs: [
        {
          name: '',
          authors: ['COFFEE BREAK']
        }
      ]
    },
    {
      type: 'generalEvent',
      time: '10:00am - 12:00pm',
      header: 'SESSION 2:',
      location: 'RCED 120',
      locationType: 1,
      url: '',
      text: ['Moderator: Prof. Jak Chakhalian, University of Arkansas']
    },
    {
      type: 'talk',
      time: '10:00AM - 10:20AM',
      title: 'Revealing Previously Unknown Intracellular Organization of Bacterial Plasmids using Super‐Resolution Microscopy',
      url: 'http://www.uark.edu/ua/pec76/files/Y_Wang.pdf',
      labs: [
        {
          name: 'Department of Physics, University of Arkansas, 825 Dickson St, Fayetteville, AR',
          authors: ['Y. WANG']
        }
      ]
    },
    {
      type: 'talk',
      time: '10:20AM - 10:40AM',
      title: 'The 2D Selfassembly of Benzimidazole and its Co‐crystallization',
      url: 'http://www.uark.edu/ua/pec76/files/P_Costa.pdf',
      labs: [
        {
          name: 'Department of Physics and Astronomy, University of Nebraska‐Lincoln, Lincoln, NE',
          authors: ['P.S. COSTA']
        }
      ]
    },
    {
      type: 'talk',
      time: '10:40AM - 11:00AM',
      title: 'Formation of bulk-like, two-dimensional CuSe on Cu(111) at ultra-low selenium coverage',
      url: 'http://www.uark.edu/ua/pec76/files/P_Thiel.pdf',
      labs: [
        {
          name: 'Department of Chemistry, Iowa State University, Ames, IA',
          authors: ['P.A. THIEL']
        }
      ]
    },
    {
      type: 'talk',
      time: '11:00AM - 11:20AM',
      title: 'Avoiding polar catastrophe in materials with high polar mismatch LaNiO\u2083/SrTiO\u2083(111)*',
      url: 'http://www.uark.edu/ua/pec76/files/M_Saghayezhian.pdf',
      labs: [
        {
          name: 'Department of Physics, Louisiana State University, Baton Rouge, LA',
          authors: ['M. SAGHAYEZHIAN']
        }
      ]
    },
    {
      type: 'talk',
      time: '11:20AM - 12:00PM',
      title: 'New Device Frontiers for Electronic Nano‐Materials',
      url: 'http://www.uark.edu/ua/pec76/files/J_Mannhart.pdf',
      labs: [
        {
          name: 'Max Planck Institute for Solid State Research, 70569 Stuttgart, Germany',
          authors: ['INVITED TALK:\nJOCHEN MANNHART']
        }
      ]
    },
    {
      type: 'sessionnote',
      time: '12:00PM - 1:00PM',
      title: 'Lunch will be available in RCED 103-107.',
      url: 0,
      labs: [
        {
          name: '',
          authors: ['LUNCH']
        }
      ]
    },
    {
      type: 'generalEvent',
      time: '1:00pm - 2:40pm',
      header: 'SESSION 3:',
      location: 'RCED 120',
      locationType: 1,
      url: '',
      text: ['Moderator: Prof. Jiali Li, University of Arkansas']
    },
    {
      type: 'talk',
      time: '1:00PM - 1:20PM',
      title: 'Understanding the Role of Electrons in Chemical Bond Breaking and Phase Transition',
      url: 'http://www.uark.edu/ua/pec76/files/B_Wang.pdf',
      labs: [
        {
          name: 'School of Chemical, Biological and Materials Engineering, University of Oklahoma, Norman, OK',
          authors: ['B. WANG']
        }
      ]
    },
    {
      type: 'talk',
      time: '1:20PM - 1:40PM',
      title: 'Assembly and stability of metallic nanoclusters on metal(100) surfaces: Predictive atomistic modeling with ab‐initio kinetics',
      url: 'http://www.uark.edu/ua/pec76/files/J_Evans.pdf',
      labs: [
        {
          name: 'Department of Physics & Astronomy, Iowa State University, Ames, IA',
          authors: ['JIM EVANS']
        }
      ]
    },
    {
      type: 'talk',
      time: '1:40PM - 2:00PM',
      title: 'Spin‐Lattice Coupling: the Essence in Magnetoelectric Digital Superlattices',
      url: 'http://www.uark.edu/ua/pec76/files/H_Guo.pdf',
      labs: [
        {
          name: 'Department of Physical and Astronomy, Louisiana State University, Tower Dr., Baton Rouge, LA',
          authors: ['HANGWEN GUO']
        }
      ]
    },
    {
      type: 'talk',
      time: '2:00PM - 2:40PM',
      title: 'Ferroelectric‐based heterostructures',
      url: 'http://www.uark.edu/ua/pec76/files/A_Barthelemy.pdf',
      labs: [
        {
          name: 'Unité Mixte de Physique CNRS / Thales, 1 av. Fresnel, 91767 Palaiseau & Université Paris‐Sud, 91405 Orsay , France',
          authors: ['INVITED TALK:\nA. BARTH\u00C9L\u00C9MY']
        }
      ]
    },
    {
      type: 'sessionnote',
      time: '2:40PM - 3:00PM',
      title: 'Coffee will be available in the Reynolds Center Atrium',
      url: 0,
      labs: [
        {
          name: '',
          authors: ['COFFEE BREAK']
        }
      ]
    },
    {
      type: 'generalEvent',
      time: '3:00pm - 5:00pm',
      header: 'POSTER SESSION:',
      location: 'RCED 111',
      locationType: 1,
      url: '',
      text: []
    },
    {
      type: 'talk',
      time: 'POSTER 1',
      title: 'Cholesterol Influence on Arginine‐Containing Transmembrane Peptides',
      url: 'http://www.uark.edu/ua/pec76/files/J_K_Thibado.pdf',
      labs: [
        {
          name: 'Department of Chemistry and Biochemistry, University of Arkansas, Fayetteville, AR',
          authors: ['JORDANA K. THIBADO']
        }
      ]
    },
    {
      type: 'talk',
      time: 'POSTER 2',
      title: 'Determination of the Effect of Maillard Products on the Taxonomic Composition on the Gut Microbiota',
      url: 'http://www.uark.edu/ua/pec76/files/N_Aljahdali.pdf',
      labs: [
        {
          name: 'Cellular and Microbiology Program; University of Arkansas, Fayetteville, AR',
          authors: ['N. ALJAHDALI']
        }
      ]
    },
    {
      type: 'talk',
      time: 'POSTER 3',
      title: 'Synthesis and characterization of nickel oxide thin film and nanoparticles for hole transport in an all‐inorganic colloidal quantum dot LED',
      url: 'http://www.uark.edu/ua/pec76/files/R_Vasan.pdf',
      labs: [
        {
          name: 'Department of Electrical Engineering, University of Arkansas, Fayetteville, AR',
          authors: ['R. VASAN']
        }
      ]
    },
    {
      type: 'talk',
      time: 'POSTER 4',
      title: 'Measuring functional implications of inhomogeneous Acetylcholine distribution in cerebral cortex',
      url: 'http://www.uark.edu/ua/pec76/files/T_Nur.pdf',
      labs: [
        {
          name: 'Department of Microelectronics and Photonics, University of Arkansas, Fayetteville, AR',
          authors: ['T. NUR']
        }
      ]
    },
    {
      type: 'talk',
      time: 'POSTER 5',
      title: 'Revealing Bacterial Responses to Environmental Changes using Super‐Resolution Microscopy',
      url: 'http://www.uark.edu/ua/pec76/files/S_Challapalli.pdf',
      labs: [
        {
          name: 'Department of Micro Electronics & Photonics, University of Arkansas, Fayetteville, AR',
          authors: ['SAI DIVYA CHALLAPALLI']
        }
      ]
    },
    {
      type: 'talk',
      time: 'POSTER 6',
      title: 'Understanding electron energy loss mechanisms in EUV resists using photoemission and electron energy loss spectroscopies',
      url: 'http://www.uark.edu/ua/pec76/files/J_Horwath.pdf',
      labs: [
        {
          name: 'Department of Physics and Astronomy, Rutgers University, 136 Frelinghuysen, Piscataway, NJ',
          authors: ['JAMES P. HORWATH']
        }
      ]
    },
    {
      type: 'talk',
      time: 'POSTER 7',
      title: 'Measuring Nonlinear properties of Graphene Thin Films Using Z‐Scan Technique',
      url: 'http://www.uark.edu/ua/pec76/files/A_Alabdulaal.pdf',
      labs: [
        {
          name: 'Microelectronics Photonics Program, Department of Physics Institute for Nanoscience and Engineering, University of Arkansas, Fayetteville, AR',
          authors: ['A. ALABDULAAL']
        }
      ]
    },
    {
      type: 'talk',
      time: 'POSTER 8',
      title: 'Transport Properties of Cobalt Doped ZnO/p‐Si Heterojunction Using Impedance Analysis and Exciton Lifetime Measurement',
      url: 'http://www.uark.edu/ua/pec76/files/R_Tiwari.pdf',
      labs: [
        {
          name: 'Department of Physics, University of Tulsa, 800 S Tucker Dr, Tulsa, OK',
          authors: ['R. TIWARI']
        }
      ]
    },
    {
      type: 'talk',
      time: 'POSTER 9',
      title: 'Direct Two‐photon Absorption Induced Emission of InAs/GaAs Quantum dots',
      url: 'http://www.uark.edu/ua/pec76/files/X_Hu.pdf',
      labs: [
        {
          name: 'Department of Physics, University of Arkansas, 825 W. Dickson St., Fayetteville, AR',
          authors: ['X. HU']
        }
      ]
    },
    {
      type: 'talk',
      time: 'POSTER 10',
      title: 'Investigating the conditions of the conformal shell layers formed by different types of PVD techniques on different aspect ratio nanorods arrays',
      url: 'http://www.uark.edu/ua/pec76/files/M_Yurukcu.pdf',
      labs: [
        {
          name: 'Department of Physics and Astronomy, University of Arkansas at Little Rock, Little Rock, AR',
          authors: ['M. YURUKCU']
        }
      ]
    },
    {
      type: 'talk',
      time: 'POSTER 11',
      title: 'Dual‐width plasmonic gratings with tunable optical enhancement for Raman spectroscopy substrates',
      url: 'http://www.uark.edu/ua/pec76/files/S_Bauman.pdf',
      labs: [
        {
          name: 'Microelectronics‐Photonics Graduate Program, University of Arkansas, Fayetteville, AR',
          authors: ['S. J. BAUMAN']
        }
      ]
    },
    {
      type: 'talk',
      time: 'POSTER 12',
      title: 'Digitization and Additive Manufacturing of Natural Surfaces',
      url: 'http://www.uark.edu/ua/pec76/files/M_Afshar-Mohajer.pdf',
      labs: [
        {
          name: 'Department of Mechanical Engineering, University of Arkansas, Fayetteville, AR',
          authors: ['M. AFSHAR-MOHAJER']
        }
      ]
    },
    {
      type: 'talk',
      time: 'POSTER 13',
      title: 'Photoluminescence study of InN/GaN multi‐quantum well under biaxial strain',
      url: 'http://www.uark.edu/ua/pec76/files/Y_Wu.pdf',
      labs: [
        {
          name: 'Microelectronics and Photonics Program, University of Arkansas, Fayetteville, AR',
          authors: ['Y. WU']
        }
      ]
    },
    {
      type: 'talk',
      time: 'POSTER 14',
      title: 'Electrochemical‐STM Investigation of Silver Halide Monolayers On a Au(111) Surface',
      url: 'http://www.uark.edu/ua/pec76/files/J_Phillips.pdf',
      labs: [
        {
          name: 'Department of Chemistry and Biochemistry, University of Tulsa, 800 S. Tucker Dr., Tulsa, OK',
          authors: ['J.A. PHILLIPS']
        }
      ]
    },
    {
      type: 'talk',
      time: 'POSTER 15',
      title: 'Surface Texturing for Friction Reduction via 3D Printing',
      url: 'http://www.uark.edu/ua/pec76/files/R_Araujo_Borges.pdf',
      labs: [
        {
          name: 'Department of Mechanical Engineering, University of Arkansas, 863 West Dickson Street, Fayetteville, AR',
          authors: ['R. ARAUJO BORGES']
        }
      ]
    },
    {
      type: 'talk',
      time: 'POSTER 16',
      title: 'The nature of metal‐insulator transition in ultrathin SrVO\u2083 films',
      url: 'http://www.uark.edu/ua/pec76/files/G_Wang.pdf',
      labs: [
        {
          name: 'Department of Physics and Astronomy, Louisiana State University, Baton Rouge, LA',
          authors: ['GAOMIN WANG']
        }
      ]
    },
    {
      type: 'talk',
      time: 'POSTER 17',
      title: 'Engineered Surfaces with Deformation‐Resistant Core‐Shell Nanostructures',
      url: 'http://www.uark.edu/ua/pec76/files/R_Fleming.pdf',
      labs: [
        {
          name: 'Department of Mechanical Engineering, University of Arkansas, Fayetteville, AR',
          authors: ['R. FLEMING']
        }
      ]
    },
    {
      type: 'talk',
      time: 'POSTER 18',
      title: 'SrRu0\u2083 (111) thin films with persistent (\u221A3x\u221A3)R30\u00B0 surface reconstruction',
      url: 'http://www.uark.edu/ua/pec76/files/W_Xie.pdf',
      labs: [
        {
          name: 'Collaborative Innovation Center of Advanced Microstructures, Lab of Solid State Microstructures, School of Physics, Nanjing University, Nanjing 210093, China',
          authors: ['WEIMEI XIE']
        }
      ]
    },
    {
      type: 'talk',
      time: 'POSTER 19',
      title: 'Surface structural phase transition of IrTe2 studied by LEED',
      url: 'http://www.uark.edu/ua/pec76/files/Y_Yang.pdf',
      labs: [
        {
          name: 'Department of Physics & Astronomy, Louisiana State University, Baton Rouge, Louisiana',
          authors: ['YIFAN YANG']
        }
      ]
    },
    {
      type: 'talk',
      time: 'POSTER 20',
      title: 'Bias‐dependent rotation of thiol‐tethered molecules on Au(111)',
      url: 'http://www.uark.edu/ua/pec76/files/L_Rios.pdf',
      labs: [
        {
          name: 'Department of Chemistry, University of California Irvine, 1120 Natural Sciences, Irvine, CA',
          authors: ['L. RIOS']
        }
      ]
    },
    {
      type: 'talk',
      time: 'POSTER 21',
      title: 'Real‐Space Analysis of Scanning Tunneling Microscope Images: Accurate measurements of local structure and disorder',
      url: 'http://www.uark.edu/ua/pec76/files/M_Yothers.pdf',
      labs: [
        {
          name: 'Homer L. Dodge Department of Physics & Astronomy, The University of Oklahoma, Norman, OK',
          authors: ['MITCHELL P. YOTHERS']
        }
      ]
    },
    {
      type: 'talk',
      time: 'POSTER 22',
      title: 'Local Dynamics and Disorder of the Terminal Methyl Groups in n‐Alkanethiol Self‐Assembled Monolayers on Au(111):  A molecular dynamics study',
      url: 'http://www.uark.edu/ua/pec76/files/S_Bhattacharya.pdf',
      labs: [
        {
          name: 'Homer L. Dodge Department of Physics & Astronomy, The University of Oklahoma, Norman, OK',
          authors: ['S. BHATTACHARYA']
        }
      ]
    },
    {
      type: 'talk',
      time: 'POSTER 23',
      title: 'Exploring Macro Porous Silicon as a Substrate for Heterojunction Solar Cells',
      url: 'http://www.uark.edu/ua/pec76/files/N_Shahabi_sani.pdf',
      labs: [
        {
          name: 'Homer L. Dodge Department of Physics & Astronomy, The University of Oklahoma, Norman, OK',
          authors: ['N. SHAHABI SANI']
        }
      ]
    },
    {
      type: 'talk',
      time: 'POSTER 24',
      title: 'Electronic states and optical transitions in the semiconductor layered biconical quantum dot',
      url: 'http://www.uark.edu/ua/pec76/files/A_A_Tshantshapanyan.pdf',
      labs: [
        {
          name: 'Department of Mathematics and Physics, North Carolina Central University, 1801 Fayetteville St., Durham, NC',
          authors: ['A. A. TSHANTSHAPANYAN']
        }
      ]
    },
    {
      type: 'talk',
      time: 'POSTER 25',
      title: 'Vertical electrical field induced monolayer island growth on TiSe\u2082',
      url: 'http://www.uark.edu/ua/pec76/files/C_Tao.pdf',
      labs: [
        {
          name: 'Department of Physics, Virginia Tech, Blacksburg, Virginia',
          authors: ['C. TAO']
        }
      ]
    },
    {
      type: 'talk',
      time: 'POSTER 26',
      title: 'Ordering of Organics on (111) Coinage Metals: Substrates Matter',
      url: 'http://www.uark.edu/ua/pec76/files/A_Deloach.pdf',
      labs: [
        {
          name: 'Department of Physics, North Carolina State University, Raleigh, NC',
          authors: ['ANDREW S. DELOACH']
        }
      ]
    },
    {
      type: 'talk',
      time: 'POSTER 27',
      title: 'Electronic States and the Size‐Quantized Stark Effect in the Semiconductor Semi‐Ellipsoidal Quantum Dot',
      url: 'http://www.uark.edu/ua/pec76/files/K_Dvoyan.pdf',
      labs: [
        {
          name: 'Department of Mathematics and Physics, North Carolina Central University, 1801 Fayetteville St., Durham, NC',
          authors: ['K. G. DVOYAN']
        }
      ]
    },
    {
      type: 'talk',
      time: 'POSTER 28',
      title: 'Surface Transport Study of Doped Ultra‐Thin Sb Quantum Wells',
      url: 'http://www.uark.edu/ua/pec76/files/K_S_Wickramasinghe.pdf',
      labs: [
        {
          name: 'Homer L. Dodge Department of Physics and Astronomy, University of Oklahoma, 440 W. Brooks St., Norman, OK',
          authors: ['K. S. WICKRAMASINGHE']
        }
      ]
    },
    {
      type: 'talk',
      time: 'POSTER 29',
      title: 'First Principles Calculations of Charge Density Waves in 2H‐TaSe\u2082: Dependence on Layer Number and Temperature',
      url: 'http://www.uark.edu/ua/pec76/files/S_Chowdhury.pdf',
      labs: [
        {
          name: 'National Institute of Standards and Technology Gaithersburg, MD',
          authors: ['SUGATA CHOWDHURY']
        }
      ]
    },
    {
      type: 'sessionnote',
      time: '5:00PM - 6:00PM',
      title: 'PEC General Committee Meeting (RCED 232)',
      url: 0,
      labs: [
        {
          name: '',
          authors: ['BREAK']
        }
      ]
    },
    {
      type: 'generalEvent',
      time: '6:00pm - 8:00pm',
      header: 'PICNIC:',
      location: 'Hawkins Family Terrace',
      locationType: 0,
      url: 'https://www.google.com/maps/place/Agriculture+Food+and+Life+Sciences,+Fayetteville,+AR+72701/@36.0710907,-94.1780215,18z/data=!3m1!4b1!4m12!1m6!3m5!1s0x87c96ee669858e27:0x4f5d338a16315f7f!2sJim+and+Joyce+Faulkner+Performing+Arts+Center!8m2!3d36.0694197!4d-94.1761309!3m4!1s0x87c96ee8aabda847:0xc8caacea13af1da9!8m2!3d36.0710033!4d-94.1769942',
      text: ['Picnic at Hawkins Family Terrace']
    },
    {
      type: 'note',
      text: ''
    },
  ],
  'day3': [
    {
      type: 'dayTitle',
      img: require('../images/dicksonst.jpeg'),
      text: 'June 22 2016'
    },
    {
      type: 'generalEvent',
      time: '7:00am - 8:00am',
      header: 'BREAKFAST:',
      location: 'Reynolds Center',
      locationType: 0,
      url: 'https://www.google.com/maps/place/Donald+W.+Reynolds+Center+for+Enterprise+Development,+Fayetteville,+AR+72701/@36.0646598,-94.1758924,17z/data=!3m1!4b1!4m5!3m4!1s0x87c96ee0c3154f37:0xd8640a84ff183658!8m2!3d36.0646619!4d-94.1736775',
      text: ['Breakfast will be held in the Reynolds Center (RCED 103-107).', 'Registration will take place all day in the Reynolds Center atrium.']
    },
    {
      type: 'note',
      text: ''
    },
    {
      type: 'generalEvent',
      time: '8:00am - 9:40pm',
      header: 'SESSION 4:',
      location: 'RCED 120',
      locationType: 1,
      url: '',
      text: ['Moderator: Prof. Arun Nair, University of Arkansas']
    },
    {
      type: 'note',
      text: '*NOTTINGHAM CONTESTANT'
    },
    {
      type: 'talk',
      time: '8:00AM - 8:20AM',
      title: 'Sensing the binding sites of RNAP Holoenzyme on λ phage DNA attached to a probe tip with Solid State Nanopores',
      url: 'http://www.uark.edu/ua/pec76/files/H_Kaur.pdf',
      labs: [
        {
          name: 'Department of Physics, University of Arkansas, 825 W Dickson Street, Fayetteville, AR',
          authors: ['H. KAUR*']
        }
      ]
    },
    {
      type: 'talk',
      time: '8:20AM - 8:40AM',
      title: 'Atomically Precise Design, Synthesis, and Characterization of 2D Material Interfaces',
      url: 'http://www.uark.edu/ua/pec76/files/B_Kiraly.pdf',
      labs: [
        {
          name: 'Department of Materials Science and Engineering, Northwestern University, Evanston, Illinois',
          authors: ['B. KIRALY*']
        }
      ]
    },
    {
      type: 'talk',
      time: '8:40AM - 9:00AM',
      title: 'Xe Irradiation of Graphene on Ir(111): From Trapping to Blistering',
      url: 'http://www.uark.edu/ua/pec76/files/C_Herbig.pdf',
      labs: [
        {
          name: 'II. Physikalisches Institut, University of Cologne, Zuelpicher Str. 77, Cologne, 50937, Germany',
          authors: ['C. HERBIG*']
        }
      ]
    },
    {
      type: 'talk',
      time: '9:00AM - 9:20AM',
      title: 'Interfacial Engineering of Electronic and Magnetic States in Complex Oxide Heterostructures by Pulsed Laser Deposition Technique',
      url: 'http://www.uark.edu/ua/pec76/files/X_Liu.pdf',
      labs: [
        {
          name: 'Department of Physics, University of Arkansas, 825 W. Dickson Street, Fayetteville, AR',
          authors: ['XIAORAN LIU*']
        }
      ]
    },
    {
      type: 'talk',
      time: '9:20AM - 9:40AM',
      title: 'Electronic structure and first order structural transition of LuFeO\u2083',
      url: 'http://www.uark.edu/ua/pec76/files/S_Cao.pdf',
      labs: [
        {
          name: 'Department of Physics and Astronomy, Nebraska Center for Materials and Nanoscience University of Nebraska‐Lincoln, Lincoln, NE',
          authors: ['SHI CAO*']
        }
      ]
    },
    {
      type: 'sessionnote',
      time: '9:40AM - 10:00AM',
      title: 'Coffee will be available in the Reynolds Center Atrium',
      url: 0,
      labs: [
        {
          name: '',
          authors: ['COFFEE BREAK']
        }
      ]
    },
    {
      type: 'generalEvent',
      time: '10:00am - 12:00pm',
      header: 'SESSION 5:',
      location: 'RCED 120',
      locationType: 1,
      url: '',
      text: ['Moderator: Prof. Paul Thibado, University of Arkansas']
    },
    {
      type: 'note',
      text: '*NOTTINGHAM CONTESTANT'
    },
    {
      type: 'talk',
      time: '10:00AM - 10:20AM',
      title: 'Hidden Phases of Double‐layered Sr\u2083(Ru\u2081‐\u2093Mn\u2093)\u2082O\u2087 Exposed at the Surface',
      url: 'http://www.uark.edu/ua/pec76/files/C_Chen.pdf',
      labs: [
        {
          name: 'Department of Physical and Astronomy, Louisiana State University, Tower Dr., Baton Rouge, LA',
          authors: ['CHEN CHEN*']
        }
      ]
    },
    {
      type: 'talk',
      time: '10:20AM - 10:40AM',
      title: 'Electronic Phase Control in Electrolyte‐Gated Correlated Oxides',
      url: 'http://www.uark.edu/ua/pec76/files/Y_Zhou.pdf',
      labs: [
        {
          name: 'John A. Paulson School of Engineering and Applied Sciences, Harvard University, Cambridge, MA',
          authors: ['Y. ZHOU*']
        }
      ]
    },
    {
      type: 'talk',
      time: '10:40AM - 11:00AM',
      title: 'Effect of Ligand Exchange with Mercaptoacetic Acid on the Photoresponsivity of Near‐IR Photodetectors Based on PbSe Nanocrystals',
      url: 'http://www.uark.edu/ua/pec76/files/A_Nusir.pdf',
      labs: [
        {
          name: 'Department of Electrical Engineering, University of Arkansas, Fayetteville, AR',
          authors: ['AHMAD NUSIR*']
        }
      ]
    },
    {
      type: 'talk',
      time: '11:00AM - 11:20AM',
      title: 'Exploring Intermolecular Interactions by Imaging Single Bonds with the Scanning Tunneling Microscope',
      url: 'http://www.uark.edu/ua/pec76/files/Z_Han.pdf',
      labs: [
        {
          name: 'Department of Physics and Astronomy, University of California, Irvine, California',
          authors: ['ZHUMIN HAN*']
        }
      ]
    },
    {
      type: 'talk',
      time: '11:20AM - 12:00PM',
      title: 'Mechanical engineering considerations for advanced application CPUs',
      url: 'http://www.uark.edu/ua/pec76/files/J_Thibado.pdf',
      labs: [
        {
          name: 'PMCI Manager, Principal Engineer, Intel Corporation',
          authors: ['INVITED TALK:\nJONATHAN W. THIBADO']
        }
      ]
    },
    {
      type: 'sessionnote',
      time: '12:00PM - 1:00PM',
      title: 'Lunch will be available in RCED 103-107',
      url: 0,
      labs: [
        {
          name: '',
          authors: ['LUNCH']
        }
      ]
    },
    {
      type: 'generalEvent',
      time: '1:00pm - 2:40pm',
      header: 'SESSION 6:',
      location: 'RCED 120',
      locationType: 1,
      url: '',
      text: ['Moderator: Prof. Omar Manasreh, University of Arkansas']
    },
    {
      type: 'note',
      text: '*NOTTINGHAM CONTESTANT'
    },
    {
      type: 'talk',
      time: '1:00PM - 1:20PM',
      title: 'Core level shifts of doped graphene',
      url: 'http://www.uark.edu/ua/pec76/files/U_A_Schroder.pdf',
      labs: [
        {
          name: 'Physikalisches Institut, Universität zu Köln, Zülpicher Str. 77, 50937 Köln, Germany',
          authors: ['U. A. SCHR\u00D6DER*']
        }
      ]
    },
    {
      type: 'talk',
      time: '1:20PM - 1:40PM',
      title: 'Coupling Organic Molecules to Topological Insulators',
      url: 'http://www.uark.edu/ua/pec76/files/A_Hewitt.pdf',
      labs: [
        {
          name: 'Department of Physics, University of North Carolina State University, Raleigh, NC',
          authors: ['ANDREW S. HEWITT*']
        }
      ]
    },
    {
      type: 'talk',
      time: '1:40PM - 2:00PM',
      title: 'Surface Reactivity of Pt‐Cu(111) Single Atom Alloys: Model Studies that Guide the Design of Atom Efficient Pt Nanoparticle Catalysis',
      url: 'http://www.uark.edu/ua/pec76/files/F_R_Lucci.pdf',
      labs: [
        {
          name: 'Department of Chemistry, Tufts University, 62 Talbot Avenue, Medford, MA',
          authors: ['F.R. LUCCI*']
        }
      ]
    },
    {
      type: 'talk',
      time: '2:00PM - 2:20PM',
      title: 'Synthesis and Characterization of MoS\u2082 thin films by Pulsed Laser Deposition for Electronic Applications',
      url: 'http://www.uark.edu/ua/pec76/files/M_Serna.pdf',
      labs: [
        {
          name: 'Materials Science and Engineering Department, The University of Texas at Dallas, Richardson, TX',
          authors: ['MARTHA I. SERNA*']
        }
      ]
    },
    {
      type: 'talk',
      time: '2:20PM - 2:40PM',
      title: 'Zinc(II) Tetraphenylporphyrin on Ag(100) and Ag(111): Multilayer Desorption and Dehydrogenation',
      url: 'http://www.uark.edu/ua/pec76/files/C_Ruggieri.pdf',
      labs: [
        {
          name: 'Department of Physics and Astronomy, Rutgers, The State University of New Jersey, Piscataway, NJ',
          authors: ['C. RUGGIERI*']
        }
      ]
    },
    {
      type: 'sessionnote',
      time: '2:40PM - 3:00PM',
      title: 'Coffee will be available in the Reynolds Center Atrium',
      url: 0,
      labs: [
        {
          name: '',
          authors: ['COFFEE BREAK']
        }
      ]
    },
    {
      type: 'generalEvent',
      time: '3:00pm - 5:00pm',
      header: 'SESSION 7:',
      location: 'RCED 120',
      locationType: 1,
      url: '',
      text: ['Moderator: Prof. Robert Coridan, University of Arkansas']
    },
    {
      type: 'note',
      text: '*NOTTINGHAM CONTESTANT'
    },
    {
      type: 'talk',
      time: '3:00PM - 3:20PM',
      title: 'Electrical Control of Chiral Phases in Electrotoroidic Nanocomposites',
      url: 'http://www.uark.edu/ua/pec76/files/R_Walter.pdf',
      labs: [
        {
          name: 'Physics Department and Institute for Nanoscience and Engineering, University of Arkansas, Fayetteville, AR',
          authors: ['R. WALTER*']
        }
      ]
    },
    {
      type: 'talk',
      time: '3:20PM - 3:40PM',
      title: 'Spin‐Polarized Interfacial Hybridization between different 8‐hydroxyquinolates and Cr(001) surface',
      url: 'http://www.uark.edu/ua/pec76/files/J_Wang.pdf',
      labs: [
        {
          name: 'Department of Physics, North Carolina State University, Raleigh, NC',
          authors: ['J. WANG*']
        }
      ]
    },
    {
      type: 'talk',
      time: '3:40PM - 4:00PM',
      title: 'Low‐dimensional Organics for Electronics Applications',
      url: 'http://www.uark.edu/ua/pec76/files/S_Beniwal.pdf',
      labs: [
        {
          name: 'Department of Physics & Astronomy, University of Nebraska, Lincoln, NE',
          authors: ['S. BENIWAL*']
        }
      ]
    },
    {
      type: 'talk',
      time: '4:00PM - 4:20PM',
      title: 'Van der Waals Epitaxy of WSe\u2082 Based Heterostructures: A Study of Controlled Nucleation and Grain Morphology',
      url: 'http://www.uark.edu/ua/pec76/files/R_Yue.pdf',
      labs: [
        {
          name: 'Department of Materials Science and Engineering, University of Texas at Dallas, Richardson, TX',
          authors: ['RUOYU YUE*']
        }
      ]
    },
    {
      type: 'talk',
      time: '4:20PM - 4:40PM',
      title: 'Layer‐by‐layer interrogation of La\u2082/\u2083Sr\u2081/\u2083MnO\u2083 films on SrTiO\u2083 (001)',
      url: 'http://www.uark.edu/ua/pec76/files/L_Chen.pdf',
      labs: [
        {
          name: 'Department of Physics and Astronomy, Louisianan State University, Tower Dr. , Baton Rouge, La',
          authors: ['LINA CHEN*']
        }
      ]
    },
    {
      type: 'talk',
      time: '4:40PM - 5:00PM',
      title: 'Characterization of a gate‐defined double quantum dot in a Si/SiGe nanomembrane',
      url: 'http://www.uark.edu/ua/pec76/files/T_J_Knapp.pdf',
      labs: [
        {
          name: 'Wisconsin Institute for Quantum Information, University of Wisconsin-Madison, Madison, WI',
          authors: ['T.J. KNAPP*']
        }
      ]
    },
    {
      type: 'sessionnote',
      time: '5:00PM - 6:00PM',
      title: 'Break before banquet',
      url: 0,
      labs: [
        {
          name: '',
          authors: ['BREAK']
        }
      ]
    },
    {
      type: 'generalEvent',
      time: '6:00pm - 8:00pm',
      header: 'BANQUET:',
      location: 'Raymond Miller Hall of Champions',
      locationType: 0,
      url: 'https://www.google.com/maps/place/Frank+Broyles+Athletics+Center/@36.0678324,-94.1758491,17z/data=!4m12!1m6!3m5!1s0x87c96ee610f0f62f:0x10a2f93b787e2367!2sUniversity+of+Arkansas!8m2!3d36.0678324!4d-94.1736551!3m4!1s0x0000000000000000:0x5cf30da56934e945!8m2!3d36.0689343!4d-94.1789755',
      text: ['The banquet will be held in the Raymond Miller Hall of Champions.']
    },
    {
      type: 'note',
      text: ''
    },
    {
      type: 'generalEvent',
      time: '8:00pm - 10:00pm',
      header: 'NOTTINGHAM PRIZE CELEBRATION:',
      location: 'Dickson Street',
      locationType: 0,
      url: 'https://www.google.com/maps/place/Hog+Haus+Brewing+Co/@36.0665486,-94.1674428,17z/data=!3m1!4b1!4m5!3m4!1s0x87c96edbdc69fed1:0x7a2fb065d1a0b848!8m2!3d36.0665443!4d-94.1652541',
      text: ['Nottingham Prize Celebration on Dickson Street at Hog Haus Brewing Co.']
    },
    {
      type: 'note',
      text: ''
    },
  ],
  'day4': [
    {
      type: 'dayTitle',
      img: require('../images/crystalbridges.jpeg'),
      text: 'June 23 2016'
    },
    {
      type: 'generalEvent',
      time: '6:30am - 8:00am',
      header: 'CHECK OUT/BREAKFAST',
      location: 'Reynolds Center',
      locationType: 0,
      url: 'https://www.google.com/maps/place/Donald+W.+Reynolds+Center+for+Enterprise+Development,+Fayetteville,+AR+72701/@36.0646598,-94.1758924,17z/data=!3m1!4b1!4m5!3m4!1s0x87c96ee0c3154f37:0xd8640a84ff183658!8m2!3d36.0646619!4d-94.1736775',
      text: ['Check out of Maple Hill Dorm (Take luggage to Reynolds Center).', 'Breakfast will be available from 7:00am - 8:00am in RCED 103-107.']
    },
    {
      type: 'note',
      text: ''
    },
    {
      type: 'generalEvent',
      time: '8:00am - 9:40am',
      header: 'SESSION 8:',
      location: 'RCED 120',
      locationType: 1,
      url: '',
      text: ['Moderator: Prof. Nicholas Materer, Oklahoma State University']
    },
    {
      type: 'talk',
      time: '8:00AM - 8:20AM',
      title: 'Synthesis of Two‐Dimensional MoS\u2082 by a CVD Process',
      url: 'http://www.uark.edu/ua/pec76/files/Y_Jiang.pdf',
      labs: [
        {
          name: 'Department of Physics and Materials Science, University of Memphis, 216 Manning Hall, Memphis, TN',
          authors: ['YAN JIANG']
        }
      ]
    },
    {
      type: 'talk',
      time: '8:20AM - 8:40AM',
      title: 'Reaction of Dysprosium with Graphite Surface: Competition between Carbide Formation and Surface Intercalation',
      url: 'http://www.uark.edu/ua/pec76/files/A_Lii-Rosales.pdf',
      labs: [
        {
          name: 'Department of Chemistry, Iowa State University, Ames, IA',
          authors: ['ANN LII-ROSALES']
        }
      ]
    },
    {
      type: 'talk',
      time: '8:40AM - 9:00AM',
      title: 'Elucidating the mechanism of heterogeneous acetaldehyde oxidation on polycrystalline platinum through flow cell studies',
      url: 'http://www.uark.edu/ua/pec76/files/S_C_Edington.pdf',
      labs: [
        {
          name: 'Department of Chemistry, Princeton University, Frick Laboratory, Washington Road, Princeton, NJ',
          authors: ['S. C. EDINGTON']
        }
      ]
    },
    {
      type: 'talk',
      time: '9:00AM - 9:20AM',
      title: 'Adsorption of Ammonia and Water on Metal‐supported Iron Phthalocyanine',
      url: 'http://www.uark.edu/ua/pec76/files/R_Bababrik.pdf',
      labs: [
        {
          name: 'Center for Interfacial Reaction Engineering and School of Chemical, Biological and Materials Engineering, the University of Oklahoma, Norman, 73019‐1004 Oklahoma',
          authors: ['REDA BABABRIK']
        }
      ]
    },
    {
      type: 'talk',
      time: '9:20AM - 9:40AM',
      title: 'Anomalously Deep Polarization in SrTiO\u2083(001) Interfaced with an Epitaxial Ultrathin Manganite Film',
      url: 'http://www.uark.edu/ua/pec76/files/Z_Wang.pdf',
      labs: [
        {
          name: 'Department of Physics & Astronomy, Louisiana State University, Baton Rouge, LA',
          authors: ['ZHEN WANG']
        }
      ]
    },
    {
      type: 'sessionnote',
      time: '9:40AM - 10:00AM',
      title: 'Coffee will be available in the Reynolds Center Atrium.',
      url: 0,
      labs: [
        {
          name: '',
          authors: ['COFFEE BREAK']
        }
      ]
    },
    {
      type: 'generalEvent',
      time: '10:00am - 10:30am',
      header: 'SESSION 9:',
      location: 'RCED 120',
      locationType: 1,
      url: '',
      text: ['Moderator: Prof. Ryan Tian, University of Arkansas']
    },
    {
      type: 'talk',
      time: '10:00AM - 10:20AM',
      title: 'Titania Containing Thin Films for the Detection of TATP and Peroxide Vapors',
      url: 'http://www.uark.edu/ua/pec76/files/N_Materer.pdf',
      labs: [
        {
          name: 'Department of Chemistry, Oklahoma State University, Stillwater, Oklahoma',
          authors: ['NICHOLAS F. MATERER']
        }
      ]
    },
    {
      type: 'talk',
      time: '10:20AM - 10:40AM',
      title: 'Epitaxial Growth of Graphene Nanoribbons on Cu(111)',
      url: 'http://www.uark.edu/ua/pec76/files/J_Teeter.pdf',
      labs: [
        {
          name: 'Department of Chemistry, University of Nebraska ‐ Lincoln, Lincoln, Nebraska',
          authors: ['J. TEETER']
        }
      ]
    },
    {
      type: 'talk',
      time: '10:40AM - 11:00AM',
      title: 'Enhanced Photoresponsivity by HIPS‐GLAD and SAD‐GLAD core/shell nanorod array photodetectors',
      url: 'http://www.uark.edu/ua/pec76/files/F_Keles.pdf',
      labs: [
        {
          name: 'Department of Physics and Astronomy, University of Arkansas at Little Rock, Little Rock, AR',
          authors: ['F. KELES']
        }
      ]
    },
    {
      type: 'talk',
      time: '11:00AM - 11:20AM',
      title: 'The Manipulation and Analysis of ZnO Nanorods with Applications for Photovoltaic Devices',
      url: 'http://www.uark.edu/ua/pec76/files/E_Smith.pdf',
      labs: [
        {
          name: 'Department of Chemistry, University of Tulsa, 800 S. Tucker, Tulsa, OK',
          authors: ['E. ADCOCK SMITH']
        }
      ]
    },
    {
      type: 'sessionnote',
      time: '11:20AM - 11:30AM',
      title: 'Thank you for attending the 2016 Physical Electronics Conference!',
      url: 0,
      labs: [
        {
          name: '',
          authors: ['CLOSING REMARKS']
        }
      ]
    },
    {
      type: 'sessionnote',
      time: '11:30AM - 12:30PM',
      title: 'Box lunches will be available in RCED 103-107.',
      url: 0,
      labs: [
        {
          name: '',
          authors: ['LUNCH']
        }
      ]
    },
    {
      type: 'generalEvent',
      time: '12:00pm -  --',
      header: 'FREE SHUTTLE:',
      location: 'Reynolds Center',
      locationType: 0,
      url: 'https://www.google.com/maps/place/Donald+W.+Reynolds+Center+for+Enterprise+Development,+Fayetteville,+AR+72701/@36.0646598,-94.1758924,17z/data=!3m1!4b1!4m5!3m4!1s0x87c96ee0c3154f37:0xd8640a84ff183658!8m2!3d36.0646619!4d-94.1736775',
      text: ['Free shuttle to XNA, Crystal Bridges, 21C Hotel (last stop)']
    },
    {
      type: 'note',
      text: ''
    }
  ]
};

db.exhibitors = [
  {
    name: 'Scienta Omicron',
    url: 'http://www.scientaomicron.com',
    phone: '720-350-5000',
    details: 'The prestigious Nottingham Prize is provided by Scienta Omicron. Scienta Omicron brings together the two leading innovators in Surface Science – the former VG Scienta and Omicron NanoTechnology. This exciting new company creates new capabilities for the research community by combining the technology leaders in electron spectroscopy (E-spec), scanning probe microscopy (SPM) and thin film deposition. These capabilities are now available in custom tailored systems from one source with sales and service groups located in all major markets around the world.\n\nWith the new DA30-L, we are proud to present the world’s first hemispherical analyzer using deflectors that enables angular scans in two dimensions in k-space without tilting the sample. The HiPP-3 analyzer features a newly developed patent pending technology for outstanding imaging XPS at ambient conditions with a spatial resolution of better than 10 μm. In addition, the newly developed Swift Acceleration Mode enables unparalleled transmission, with count rates improved by up to a factor of 10.'
  },
  {
    name: 'SPECS',
    url: 'http://www.specs.com',
    phone: '49-30-46-78-24-0',
    details: 'Poster awards provided by SPECS. SPECS manufactures cutting-edge systems and components for surface analysis in UHV, based on methods like XPS, UPS, AES, ISS, STM, LEEM/PEEM, LEED, SIMS, SNMS, and HREELS. SPECS offers a variety of sources for depostiion, exicitation and charge neutralization as well as analyzers, monochromators and reserach microscopes like LEEM and STM. A strong focus of our work is on customized systems combining thin film preparation (e.g. MBE) with spectroscopic and microscopic options.'
  },
  {
    name: 'Physical Electronics (PHI)',
    url: 'https://www.phi.com',
    phone: '952-828-6100',
    details: 'Physical Electronics (PHI) is a subsidiary of ULVAC-PHI, the world\'s leading supplier of UHV surface analysis instrumentation used for research and development of advanced materials in a number of high technology fields including: nanotechnology, microelectronics, storage media, bio-medical, and basic materials such as metals, polymers, and coatings. PHI’s innovative XPS, AES, and SIMS technologies provide our customers with unique tools to solve challenging materials problems and accelerate the development of new materials and products.'
  },
  {
    name: 'Mantis/Sigma Surface Science',
    url: 'http://www.sigma-surface-science.com',
    phone: '49-6128-85-90-50',
    details: 'In 2014 the major shareholder of Sigma acquired a majority shareholding in MANTIS Deposition Ltd a specialized thin film company offering a wide range of cutting edge deposition solutions (PVD, PLD, MBE and Nanoparticle Deposition). Besides dedicated thin film system solutions from Mantis and surface science systems from Sigma the entrepreneurial strategic partnership between Sigma and Mantis enables us to offer Multitechnique Systems combining a wide variety of thin film and surface science techniques in a common system solution.'
  },
  {
    name: 'J. William Fulbright College of Arts & Sciences - Physics',
    url: 'http://www.cavern.uark.edu/depts/physics/apps',
    phone: '479-575-2506',
    details: 'The Physics Department at the University of Arkansas is internationally known for research in nanoscience, condensed matter physics, computational physics, quantum optics and quantum information, and physics education. We are a relatively small group (20 regular faculty), yet we bring about $6.5 million a year in external support. Our roster includes several Fellows of the American Physical Society and the Optical Society of America, an associate editor for Physical Review A, an editor of the Einstein Papers Project, and the current vice-president of the American Association of Physics Teachers! Faculty and graduate students publish consistently in leading scientific journals, and are regularly invited to present their work at national and international meetings.'
  },
  {
    name: 'J. William Fulbright College of Arts & Sciences - Chemistry & Biochemistry',
    url: 'http://www.fulbright.uark.edu/departments/chemistry',
    phone: '479-575-4601',
    details: 'The department of chemistry and biochemistry at the University of Arkansas strives for excellence in research, teaching and service in chemistry—the central science. We aspire to positions of leadership regarding the discovery of new scientific knowledge, the training of students, and the economic development of the State of Arkansas. We seek to recruit and retain a diverse group of the best faculty, students and staff to address the challenges of the future through interdisciplinary and multidisciplinary research and education.'
  },
  {
    name: 'College of Engineering - Mechanical Engineering',
    url: 'http://www.mechanical-engineering.uark.edu',
    phone: '479-575-3153',
    details: 'At the U of A, mechanical engineering students study aircraft design, design nanosurfaces that reduce friction and wear of mechanical parts, and research “lab on a chip” technologies that allow doctors to perform medical tests on tiny samples, like a single bacterium. U of A students have interned with Continental Airlines, Lockheed Martin and the Stanford Linear Accelerator Center, and U of A graduates have gone on to work for NASA, Boeing and Toyota.'
  }
];

db.speakers = [
  {
    name: 'PROF. JOCHEN MANNHART',
    bio: 'Jochen Mannhart is a director at the Max Planck Institute of Solid State Research in Stuttgart, Germany, leading the department of Solid State Quantum Electronics. He studied Physics at the University of Tübingen, receiving his diploma in 1986 and his Ph.D. in 1987. Subsequently, he worked as a visiting scientist at the IBM T.J. Watson Research Center in Yorktown Heights and as a Research Staff Member and Manager at the IBM Zurich Research Laboratory in Rüschlikon, Switzerland. From 1996 to 2011, he was a chaired professor at the Center for Electronic Correlations and Magnetism at the University of Augsburg. Jochen has received numerous awards for his research, including the Gottfried Wilhelm Leibniz-Preis of the German Science Foundation and the Europhysics Prize 2014.',
    img: require('../images/jochen.jpeg'),
    abstractNum: 0,
    url: 'http://www.uark.edu/ua/pec76/files/J_Mannhart.pdf'
  },
  {
    name: 'PROF. AGN\u00C8S BARTH\u00C9L\u00C9MY',
    bio: 'Agnès Barthélémy is a Professor at the University Paris-Sud XI and a Senior Member of the Institut Universitaire de France since 2008. She received the Ancel prize of the French Physical Society in 2008 and the Silver Medal of CNRS in 2010. She is the laureate of an ERC Advanced Grant “FEMMES” focusing on ferroelectric tunnel junctions and magnetoelectric interfaces.',
    img: require('../images/agnes.jpeg'),
    abstractNum: 1,
    url: 'http://www.uark.edu/ua/pec76/files/A_Barthelemy.pdf'
  },
  {
    name: 'JONATHAN W. THIBADO',
    bio: 'Jonathan Thibado is a Principal Engineer at Intel and leads the mechanical development of data centers (High Performance Computers, Servers, Enterprise, and Cloud). He has more than 21 years of experience with Intel’s Portland Technology Development (PTD) group designing processes and manufacturing aspects of the silicon central processor, from the first Pentium to the modern Core. Jon is currently leading teams in developing mechanical components for server systems to be released in 2020 and beyond. In addition, he is leading efforts to revolutionize the industry’s approach in the designs and methods for semiconductor packaging and systems.',
    img: require('../images/jThib.png'),
    abstractNum: 2,
    url: 'http://www.uark.edu/ua/pec76/files/J_Thibado.pdf'
  }
];

db.abstracts = [
  {
    title: 'New Device Frontiers for Electronic Nano‐Materials',
    url: ''
  },
  {
    title: 'Ferroelectric Heterostructures',
    url: ''
  },
  {
    title: 'Mechanical Engineering Considerations for Advanced Application CPUs',
    url: ''
  }
];

export default db;
