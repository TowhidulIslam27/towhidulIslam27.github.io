// All portfolio copy lives here. Edit this file to update the site without touching layout code.

// Prefix for anything in /public — respects Vite's `base` config, so every public asset path
// below goes through this (the site is served from the domain root, towhidulislam27.github.io).
const BASE = import.meta.env.BASE_URL;
const asset = (path) =>
  `${BASE}${path
    .replace(/^\//, "")
    .split("/")
    .map(encodeURIComponent)
    .join("/")}`;

export const profile = {
  name: "Towhidul Islam",
  role: "Geospatial Consultant, Developer & Researcher",
  tagline:
    "Being a Geospatial Enthusiast, I contribute to harness the power of earth observation for real world applications. My work spans leading a multi-departmental geospatial research lab, building AI-native spatial analysis tools, and advancing SAR/InSAR research to transform raw satellite data into actionable decisions—from radar signal processing to full-stack applications.",
  location: "Chittagong, Bangladesh",
  email: "m.towhid92@gmail.com",
  phone: "+8801632211582",
  linkedin: "https://www.linkedin.com/in/towhidullslam/",
  github: "https://github.com/TowhidulIslam27",
  resumeUrl: asset("/resume.pdf"), // public/resume.pdf — replace this file to update the downloadable CV
  photo: asset("/ti.jpg"),
};

export const stats = [
  { label: "Team members led", value: "35+" },
  { label: "Research project coordinated", value: "3+" },
  { label: "Personnel trained", value: "100+" },
  { label: "Research paper contribution", value: "5" },
  { label: "Full-stack software developed", value: "2" },
  { label: "Geospatial tools developed", value: "90+" },
];

export const about = {
  paragraphs: [
    "I am the founder and CEO of SAR.Sense Geointelligence Lab, where I lead research on XAI and SAR/InSAR deformation monitoring and build the software that makes complex satellite data directly usable for planners, agencies, and fellow scientists.",
    "My background bridges geography, earth observation, and urban management, with degrees from ITC (University of Twente), IHS (Erasmus University Rotterdam), and the University of Chittagong, complemented by hands-on full-stack development of BanGIS Pro—a platform I designed and built from the ground up.",
    "At the core of my work is a strong belief in Science for Society. Whenever I conduct research, I run into the real-world friction of data sourcing, tedious preprocessing, and fragmented analysis pipelines. Rather than working around those bottlenecks, I leverage my software developing skills to build intuitive tools that solve those exact problems, smoothing the path for future researchers. Through tailored training programs and workshops, I pass those tools and insights directly to planners, students, and practitioners—turning academic research into practical, accessible knowledge for everyone.",
  ],
};

export const researchInterests = {
  intro:
    "I study how a changing climate becomes hazard and risk on the ground — and how Earth observation, InSAR and explainable AI can measure that risk early enough to act on it. I am seeking a PhD that connects satellite-derived evidence with the people and infrastructure exposed to climate-driven hazards, particularly in data-scarce, high-risk deltas such as Bangladesh.",
  areas: [
    {
      icon: "waves",
      title: "Climate-driven hazards & compound risk",
      text: "How floods, cyclones, extreme heat and land subsidence interact and amplify one another in deltaic and coastal cities — and how multi-hazard, compound-risk models can guide climate adaptation.",
      tags: ["Compound flooding", "Multi-hazard risk", "Climate adaptation", "Deltas"],
    },
    {
      icon: "mountain",
      title: "Geohazards & ground deformation with InSAR",
      text: "Measuring land subsidence, slow-moving landslides and infrastructure deformation with PS-InSAR and SBAS time series, validated against GNSS, in regions where ground monitoring is sparse.",
      tags: ["PS-InSAR", "SBAS", "Land subsidence", "Landslides"],
    },
    {
      icon: "brain",
      title: "Explainable AI for hazard susceptibility",
      text: "Machine-learning models whose drivers can be understood and trusted — using SHAP and LIME to rank the causes of landslide, deformation and drought susceptibility for planners and decision-makers.",
      tags: ["XAI", "SHAP / LIME", "Susceptibility mapping"],
    },
    {
      icon: "thermometer",
      title: "Urban climate risk & extreme heat",
      text: "Urban heat islands, heat thresholds and pluvial flooding in rapidly growing South Asian cities, and their consequences for health, mobility and vulnerable communities.",
      tags: ["Urban heat island", "Heat thresholds", "Pluvial flooding", "Urban mobility"],
    },
    {
      icon: "cloud",
      title: "Hydro-climatic extremes & drought",
      text: "Rainfall anomalies, thunderstorm and lightning intensity, and agricultural drought under a changing climate — combining long climate records with satellite land-surface observations.",
      tags: ["Climate anomalies", "Agricultural drought", "Extreme weather"],
    },
    {
      icon: "users",
      title: "Coupled human–environment risk modelling",
      text: "Linking remote sensing with agent-based models of household vulnerability to test adaptation measures — drainage upgrades, groundwater management — before they are built.",
      tags: ["Agent-based modelling", "Vulnerability", "Scenario analysis", "Policy"],
    },
  ],
  cta: {
    title: "Open to PhD opportunities",
    text: "I am looking for funded PhD positions in climate risk, geohazards and Earth observation. If my interests align with your group, I would be glad to talk.",
  },
};

export const softwareProjects = [
  {
    id: "bangis-pro",
    name: "BanGIS Pro",
    subtitle: "GIS Made Simple — an AI-integrated geospatial & SAR platform",
    org: "SAR.Sense Geointelligence Lab",
    period: "2025 – Present",
    description:
      "A full-stack desktop GIS — FastAPI backend, React/TypeScript/MapLibre GL client in a Tauri shell — with Hiron, a native ReAct-style AI agent that understands your project and runs multi-step GIS and SAR workflows from plain-language instructions. No code required.",
    facts: [
      { value: "800+", label: "geospatial tools" },
      { value: "16", label: "specialised domain toolboxes" },
      { value: "1,568+", label: "automated backend tests" },
      { value: "254", label: "documented methods" },
    ],
    highlights: [
      {
        title: "Hiron — a native AI agent",
        text: "A project-aware AI agent, not a chatbot — plus an AI button in every tool that explains parameters, live previews and results using your own layers.",
      },
      {
        title: "Automatic data fetcher",
        text: "Spatial data of every kind from Google Earth Engine, OpenStreetMap, GADM, Natural Earth, STAC, ArcGIS Online, AWS S3, PostGIS and web services — clipped to your area and loaded automatically.",
      },
      {
        title: "SAR/InSAR from first principles",
        text: "Radiometric calibration (β⁰/σ⁰/γ⁰), Lee/Frost/Gamma-MAP filtering, Range-Doppler terrain correction and a full InSAR chain, in a SAR Studio built around DInSAR, PS-InSAR, SBAS, PolSAR and TomoSAR.",
      },
      {
        title: "Reports with academic references",
        text: "Every tool exports a reproducible report — inputs, parameters, outputs and CRS — citing the literature behind the method from a library of 254 documented methods.",
      },
      {
        title: "16 specialised domain toolboxes",
        text: "Disaster, agriculture, urban planning, utilities, water, forestry, coastal, health and more — plus GeoAI, machine & deep learning, a Digital Twin workspace and a 20-tool surveying module.",
      },
      {
        title: "Built for coders",
        text: "An integrated Python console and a Python-scriptable layout manager (matplotlib, cartopy, geopandas, rasterio) for publication-ready maps.",
      },
      {
        title: "Universal ingest, tested at scale",
        text: "Shapefile, GeoTIFF, GeoPackage, NetCDF, HDF5 and KML/GML with automatic CRS and geometry checks; vector tiling renders 250k+ vertices in-browser. Validated by 1,568+ automated backend tests.",
      },
      {
        title: "Freemium model",
        text: "Core tools free; advanced tools offered in paid tiers based on their complexity and licensing requirements.",
      },
    ],
    stack: [
      "FastAPI",
      "React",
      "TypeScript",
      "MapLibre GL",
      "Tauri",
      "NumPy",
      "SciPy",
      "GDAL",
      "Python",
      "Groq LLM",
    ],
    video: {
      src: asset("/videos/BanGIS_Pro_Showcase_v3.mp4"),
      poster: asset("/videos/bangis-pro-poster.jpg"),
    },
    images: [
      asset("/images/bangis-pro-1.jpg"),
      asset("/images/bangis-pro-2.jpg"),
      asset("/images/bangis-pro-3.jpg"),
    ],
    // TODO: point this at the real repo once it's public, e.g. `${profile.github}/bangis-pro`
    github: "https://github.com/TowhidulIslam27",
    links: [
      // { label: "Live demo", href: "#" },
    ],
    featured: true,
  },
  {
    id: "gridemy-lms",
    name: "Gridemy LMS",
    subtitle: "The LMS built for how institutions actually run",
    org: "SAR.Sense Geointelligence Lab",
    period: "2025 – Present",
    description:
      "A full-stack learning management system with Arshi, a built-in bilingual AI assistant — designed from the ground up for Bangladeshi universities rather than adapted from a global template. Live in the Department of Geography and Environmental Studies, University of Chittagong, and under institutional review for procurement by the Centre for Climate Change and Environmental Health (3CEH), Asian University for Women.",
    facts: [
      { value: "Live", label: "in active departmental use" },
      { value: "3", label: "role-based dashboards" },
      { value: "9", label: "integrated core modules" },
      { value: "EN · BN", label: "bilingual AI assistant" },
    ],
    highlights: [
      {
        title: "Arshi — AI built into the workflow",
        text: "Drafts complete courses from a syllabus PDF, builds assignments with rubrics and marks, and writes notices and reference letters in English or Bengali — faculty review everything before it is published.",
      },
      {
        title: "Outcome-based curriculum",
        text: "Courses with CLOs mapped to PLOs, syllabi, readings and teaching strategies — structured natively the way accreditation bodies expect, with no plugins required.",
      },
      {
        title: "Smart attendance",
        text: "GPS, rotating-QR or combined self-check-in with a configurable radius, live present/late/absent summaries and automatic 75% threshold alerts.",
      },
      {
        title: "Assignments with integrity checks",
        text: "Timestamped digital submissions screened for AI-generated text and similarity, with AI-suggested grades and feedback; students can self-check drafts, which are never stored.",
      },
      {
        title: "Early warning for at-risk students",
        text: "Engagement signals from the first weeks of term surface students at risk of dropping out while there is still time to intervene.",
      },
      {
        title: "Endorsements & AI recommendation letters",
        text: "Five-domain student endorsements feed AI-drafted Letters of Recommendation grounded in grades, attendance and conduct — faculty keep full editorial control.",
      },
      {
        title: "Faculty performance & research",
        text: "A transparent, AI-explained 100-point performance score across teaching, research and endorsements, plus a board where faculty post research opportunities for students.",
      },
      {
        title: "Department governance",
        text: "Dashboards for admins, faculty and students, chairman terms, requests, notices, an events calendar, forums and messaging — replacing WhatsApp groups and paper registers.",
      },
    ],
    stack: ["React", "TypeScript", "FastAPI", "AI assistant", "GPS / QR attendance"],
    links: [{ label: "Visit Gridemy", href: "https://sarsense.com/gridemy" }],
    featured: true,
  },
];

export const researchProjects = [
  {
    name: "Modelling Deformation Susceptibility Using InSAR & XAI",
    role: "Research Lead",
    period: "May 2025 – Present",
    description:
      "Explainable susceptibility models fusing multi-temporal InSAR with geophysical, geological, and anthropogenic features; SHAP/LIME rank risk drivers for planners across an end-to-end pipeline from Sentinel-1 ingest to susceptibility maps and APIs.",
  },
  {
    name: "Nationwide Land Deformation Map of Bangladesh",
    role: "Research Lead",
    period: "May 2025 – Present",
    description:
      "A national SAR archive (Sentinel-1, ALOS-2) generating millimeter-level subsidence/uplift estimates via PSI/SBAS for 2015–2025, validated against GNSS and field data, published as an interactive deformation atlas for planning, water, and transport agencies.",
  },
  {
    name: "InSAR–ABM Compound-Risk Framework for Chittagong",
    role: "Research Lead",
    period: "Jun. 2025 – Present",
    description:
      "An integrated framework combining multi-temporal InSAR with rainfall/flood characterization and an agent-based model of household vulnerability, simulating drainage and groundwater interventions and reducing modeled flood–subsidence risk by up to 40%.",
  },
];

export const academicProjects = [
  {
    name: "Deformation Pattern Analysis of a Slow-moving Landslide",
    period: "Sep. 2023 – Apr. 2024",
    description:
      "PSInSAR with multi-sensor SAR data (Envisat, Sentinel-1) integrated with GRASS GIS geomorphological mapping to identify critical deformation zones in a data-sparse region — showing multi-temporal Sentinel-1 captures finer-scale deformation than Envisat.",
  },
  {
    name: "Soil-Plant Digital Twin Simulation using PySTEMMUS-SCOPE",
    period: "Nov. 2023 – Feb. 2024",
    description:
      "Simulated land-surface energy fluxes and soil-moisture dynamics at the Harvard Forest EMS Tower, analysing seasonal responses to climate extremes; processed visualizations and code submitted to the CRIB research infrastructure.",
  },
  {
    name: "Physically-based Flood Modelling",
    period: "Feb. 2023 – Mar. 2023",
    description:
      "LISEM modelling of sequential levee breaches on the Maas and Waal, evaluating flood arrival, depth, and velocity in compound scenarios to inform mitigation and evacuation planning.",
  },
];

export const experience = [
  {
    org: "SAR.Sense Geointelligence Lab",
    role: "Founder & Co-ordinator",
    location: "Chittagong, Bangladesh",
    period: "May 2025 – Present",
    bullets: [
      "Established a research-driven lab with 3 specialized units (Disaster & Hazard Intelligence, Sustainable Agriculture & Forestry, Water & Environmental Intelligence), attracting 35+ team members and 5 external collaborators.",
      "Coordinating 3 research projects as lead researcher, spanning explainable AI for landslide susceptibility, a nationwide deformation atlas, and a compound-risk framework for Chittagong.",
      "Architected and developed BanGIS Pro (95% individual contribution).",
      "Developed Gridemy LMS, now in active use by the Dept. of Geography and Environmental Studies, University of Chittagong, and under review for procurement by 3CEH, Asian University for Women.",
      "Launched the SAR.Sense Academy to connect science with society through training and workshops on remote sensing, geospatial AI, and climate-risk modeling.",
      "Grow and coach a cross-functional team; run code reviews, documentation standards, and data-governance practices.",
    ],
  },
  {
    org: "icddr,b — Nutrition Research Division",
    role: "GIS Consultant (National)",
    location: "Dhaka, Bangladesh",
    period: "Jan. 2025 – May 2025",
    bullets: [
      "Designed the spatial sampling framework for the One Nutrition Coverage Survey with IFPRI & Johns Hopkins, covering 64 enumeration areas across 4 districts.",
      "Built interactive survey maps integrated with Kobo, improving field data accuracy by 30%.",
      "Trained 15 researchers on GIS workflows for the survey.",
    ],
  },
  {
    org: "Red Cross Red Crescent Climate Centre",
    role: "Junior Researcher",
    location: "The Hague, Netherlands",
    period: "Feb. 2021 – Jul. 2021",
    bullets: [
      "Analyzed 30 years of meteorological data to establish Rajshahi's heat threshold and led RS/GIS analysis (Landsat, NDVI/NDWI, UHI mapping) to identify ward-level heat hotspots.",
      "Supported field validation and stakeholder interviews, integrating local data with satellite analysis for robust ground-truthing.",
      "Co-authored a study commissioned under the ARRCC programme and UK Met Office; findings adopted into Rajshahi City Corporation's climate resilience strategy.",
    ],
  },
  {
    org: "Halishahar School of Artillery",
    role: "GIS Training Instructor",
    location: "Chittagong, Bangladesh",
    period: "Jan. 2017 – Aug. 2019",
    bullets: [
      "Designed and led ArcGIS training on military intelligence and counter-bombardment applications for 20 army officers, with a 100% completion rate.",
      "Used real-world case studies and active learning, leading to a 40% improvement in practical application of learned skills.",
      "Observed a 60% rise in trainee ArcGIS competency across the program.",
    ],
  },
  {
    org: "University of Chittagong — Dept. of Geography and Environmental Studies",
    role: "Research Assistant",
    location: "Chittagong, Bangladesh",
    period: "Apr. 2017 – Aug. 2019",
    bullets: [
      "Contributed to formulating the research proposal and a comprehensive project report.",
      "Collected, processed, and analyzed data on Bangladesh's lightning disaster trends, impacts, and management.",
      "Guided and monitored 6 undergraduate students on the project.",
    ],
  },
];

// Field/work photos shown at the end of the Experience section. Missing files are skipped
// silently, so it's safe to add or rename these — just keep the filename in `src` matching
// what's actually in /public/images/experience/.
export const experiencePhotos = [
  { src: asset("/images/experience/Lecturing on Spatial Data.JPG"), caption: "Lecturing on spatial data fundamentals" },
  { src: asset("/images/experience/Lecturing on remote sensing.JPG"), caption: "Introducing remote sensing concepts" },
  { src: asset("/images/experience/Conducting session on remote sensing.JPG"), caption: "Running a GIS training session" },
  { src: asset("/images/experience/Lecturing on projections .JPG"), caption: "Teaching map projections" },
  { src: asset("/images/experience/lecturing on vector vs raster data.jpg"), caption: "Explaining vector vs. raster data" },
  { src: asset("/images/experience/Explaining geographic layers.JPG"), caption: "Breaking down geographic data layers" },
  { src: asset("/images/experience/During a lecture on flood susceptibility modelling.jpg"), caption: "Walking through flood susceptibility modelling" },
  { src: asset("/images/experience/On a GIS for defense session.jpg"), caption: "Delivering a GIS-for-defense training" },
  { src: asset("/images/experience/Helping out a hands on GIS session.jpg"), caption: "Hands-on support during a GIS workshop" },
  { src: asset("/images/experience/At the end of a fundamental GIS course.jpg"), caption: "Wrapping up a GIS fundamentals course" },
  { src: asset("/images/experience/A busy day as a trainer.JPG"), caption: "Another full day of training" },
  { src: asset("/images/experience/Happy moment with students.JPG"), caption: "A proud moment with the trainees" },
];

export const education = [
  {
    school: "University of Twente (ITC)",
    degree: "PgD, Geo-Information Science and Earth Observation",
    period: "Aug. 2021 – Apr. 2024",
    location: "Enschede, The Netherlands",
    note: "Research: Assessing Spatiotemporal Deformation Pattern of a Slow-Moving Landslide in a Data-Sparse Region",
  },
  {
    school: "Erasmus University Rotterdam",
    degree: "MSc, Urban Management and Development",
    period: "Sept. 2019 – Jan. 2021",
    location: "Rotterdam, The Netherlands",
    note: "Research: Effects of Pluvial Urban Flood on Intracity Travel Behavior — Chittagong City, Bangladesh",
  },
  {
    school: "University of Chittagong",
    degree: "MS, Geography and Environmental Studies",
    period: "Jan. 2017 – Oct. 2018",
    location: "Chittagong, Bangladesh",
    note: "Research: Climatic Anomalies and Thunderstorm Intensity Over Bangladesh",
  },
  {
    school: "University of Chittagong",
    degree: "BSc, Geography and Environmental Studies",
    period: "Feb. 2012 – May 2016",
    location: "Chittagong, Bangladesh",
  },
];

export const skills = [
  {
    group: "SAR / InSAR Tools & Methodologies",
    icon: "satellite",
    items: [
      "SNAP",
      "LiCSBAS",
      "PyGMT SAR",
      "SARscape",
      "PSInSAR / SBAS",
      "Radiometric Calibration",
      "Speckle Filtering",
      "Range-Doppler Terrain Correction",
    ],
  },
  {
    group: "Geospatial Development & Web GIS",
    icon: "code",
    items: ["React", "TypeScript", "FastAPI", "Tauri", "MapLibre GL", "JavaScript", "PostGIS", "LaTeX"],
  },
  {
    group: "Data Science & Spatial Analytics",
    icon: "database",
    items: ["Python", "GeoPandas", "Rasterio", "NumPy", "Shapely", "Open3D", "laspy", "MATLAB", "R", "PostgreSQL"],
  },
  {
    group: "GIS & Earth Observation Platforms",
    icon: "globe",
    items: ["ArcGIS Pro", "QGIS", "Google Earth Engine", "ENVI", "ERDAS IMAGINE", "ILWIS", "GRASS GIS", "LISEM"],
  },
];

export const training = [
  { name: "Turing MLxDL — Machine & Deep Learning", org: "Turing Students Rotterdam", date: "Jun. 2020" },
  { name: "Using the UN Biodiversity Lab", org: "NASA ARSET", date: "Mar. – Apr. 2020" },
  { name: "Studying Cities: Social Science Methods for Urban Research (MOOC)", org: "IHS, Erasmus University Rotterdam", date: "Dec. 2019" },
  { name: "SAR for Landcover Applications", org: "NASA ARSET", date: "Aug. – Sep. 2019" },
  { name: "RS for Monitoring Land Degradation and Sustainable Cities SDGs", org: "NASA ARSET", date: "Jul. 2019" },
  { name: "Investigating Time Series of Satellite Imagery", org: "NASA ARSET", date: "Apr. 2019" },
  { name: "Invited Talk — ICCBSA-2018", org: "Assam Agricultural University, Jorhat, India", date: "Dec. 2018" },
  { name: "Spatial Analysis Using R", org: "Institute of Remote Sensing, Jahangirnagar University", date: "Dec. 2017" },
  { name: "Google Earth Engine Workshop", org: "IRS-JU & ICIMOD (NASA/SERVIR-HKH)", date: "Aug. 2017" },
];

export const languages = [
  { name: "English", detail: "IELTS Academic 7.0 (CEFR C1) — Aug. 2026" },
];

export const publications = [
  {
    citation:
      "Uddin, M.S., Mitra, B., Rahman, M.S., Mahmud, K., Islam, T., Rahman, S.M., & Rahman, M.M. (2026). Integrating shared socioeconomic pathways and deep learning for future CO₂ emission forecasts in major European Union economies. Environment, Development and Sustainability.",
    tag: "Accepted with minor corrections",
  },
  {
    citation:
      "Uddin, M.S., Mahmud, K., Islam, T., & Rahman, M.A. (2026). Explainable machine learning assessment of hydroclimatic and land-surface controls on agricultural drought in North-Western Bangladesh. Journal of Hydrology.",
    tag: "Under review",
  },
  {
    citation:
      "Uddin, M.S., Mahmud, K., Rahaman, M.A., Mitra, B., Rahman, S.M., Islam, T., Rahman, M.M., & Rahman, M.S. Hands-on geomatics for marine conservation. In Marine biodiversity dynamics in the Arabian Peninsula. Springer.",
    tag: "Under review",
  },
  {
    citation:
      "Subedi, A., Islam, T., Khan, R., Hassan, A., Hoogesteger, S. (2022). Identification of heat threshold and heat hotspot in Rajshahi, Bangladesh. Red Cross Red Crescent Climate Centre.",
    href: "https://southasia.iclei.org",
    tag: "Published",
  },
  {
    citation:
      "Sultana, N.N., Jabeed, A., Rahman, M.A., Hasan, S., Islam, T., Podder, S., Mallick, S.S., Akter, H., Nath, T.K., Ullah, M.S., & Paul, A. (2021). COVID-19 in Bangladeshi Daily Newspapers: A Thematic Analysis of Media Coverage. Journal of Global Communication, 14(2), 70–84.",
    href: "https://indianjournals.com/article/jgc-14-2-002",
    tag: "Published",
  },
];

export const awards = [
  { name: "ITC Excellence Scholarship", year: "2021 - 2023", body: "Faculty of Geo-Information Science and Earth Observation, University of Twente" },
  { name: "OKP Scholarship (Nuffic)", year: "2019 - 2020", body: "MSc in Urban Management and Development, Erasmus University Rotterdam" },
  { name: "Fulbright Master's Fellowship", year: "2016 - 2017", body: "University of Chittagong" },
];
