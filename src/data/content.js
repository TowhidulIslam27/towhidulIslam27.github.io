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
    "I turn satellite data into decisions on climate and hazard risk — leading a geospatial research lab, advancing SAR/InSAR research and building AI-powered tools that make Earth observation usable.",
  location: "Chittagong, Bangladesh",
  email: "m.towhid92@gmail.com",
  phone: "+8801632211582",
  linkedin: "https://www.linkedin.com/in/towhidullslam/",
  github: "https://github.com/TowhidulIslam27",
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
    "I am the founder and CEO of SAR.Sense Geointelligence Lab, where I lead research on SAR/InSAR deformation monitoring and explainable AI, and build software that makes satellite data directly usable for planners, agencies and scientists.",
    "Trained in geography, Earth observation and urban management at ITC (University of Twente), IHS (Erasmus University Rotterdam) and the University of Chittagong, I believe in Science for Society: when research hits friction — data sourcing, preprocessing, fragmented pipelines — I build the tools that remove it, and teach others to use them.",
  ],
};

export const researchInterests = {
  intro:
    "How a changing climate becomes hazard and risk on the ground — and how Earth observation, InSAR and explainable AI can measure it early enough to act, especially in data-scarce deltas like Bangladesh.",
  areas: [
    {
      icon: "waves",
      title: "Climate hazards & compound risk",
      text: "How floods, cyclones, heat and subsidence amplify one another in deltaic cities.",
      tags: ["Compound flooding", "Multi-hazard risk", "Adaptation"],
    },
    {
      icon: "mountain",
      title: "Geohazards with InSAR",
      text: "Subsidence, landslides and infrastructure deformation from PS-InSAR and SBAS, validated with GNSS.",
      tags: ["PS-InSAR", "SBAS", "Subsidence", "Landslides"],
    },
    {
      icon: "brain",
      title: "Explainable AI for susceptibility",
      text: "Trustworthy ML that shows planners what drives landslide, deformation and drought risk.",
      tags: ["XAI", "SHAP / LIME", "Susceptibility"],
    },
    {
      icon: "thermometer",
      title: "Urban heat & flooding",
      text: "Heat islands, heat thresholds and pluvial floods in fast-growing South Asian cities.",
      tags: ["Urban heat", "Pluvial flooding", "Mobility"],
    },
    {
      icon: "cloud",
      title: "Hydro-climatic extremes",
      text: "Rainfall anomalies, lightning and agricultural drought under a changing climate.",
      tags: ["Climate anomalies", "Drought", "Extremes"],
    },
    {
      icon: "users",
      title: "Human–environment risk modelling",
      text: "Coupling remote sensing with agent-based models to test adaptation before it is built.",
      tags: ["Agent-based models", "Vulnerability", "Policy"],
    },
  ],
  cta: {
    title: "Open to PhD opportunities",
    text: "Seeking funded PhD positions in climate risk, geohazards and Earth observation.",
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
      "A full-stack desktop GIS with Hiron, a native AI agent that runs multi-step GIS and SAR workflows from plain-language instructions — no code required.",
    facts: [
      { value: "800+", label: "geospatial tools" },
      { value: "16", label: "specialised domain toolboxes" },
      { value: "1,568+", label: "automated backend tests" },
      { value: "254", label: "documented methods" },
    ],
    highlights: [
      { title: "Hiron — a native AI agent", text: "A project-aware agent, plus an AI button in every tool." },
      { title: "Automatic data fetcher", text: "Earth Engine, OSM, STAC, ArcGIS Online, S3, PostGIS and more — fetched and clipped for you." },
      { title: "SAR/InSAR from first principles", text: "Calibration, speckle filtering, terrain correction and full InSAR, PolSAR and TomoSAR workflows." },
      { title: "Reports with academic references", text: "Every tool exports a reproducible report citing the method behind it." },
      { title: "16 specialised domain toolboxes", text: "Plus GeoAI, ML & DL, a Digital Twin workspace and a surveying module." },
      { title: "Built for coders", text: "Integrated Python console and a Python-scriptable layout manager." },
      { title: "Tested at scale", text: "Universal ingest and in-browser vector tiling, validated by 1,568+ backend tests." },
      { title: "Freemium model", text: "Core tools free; advanced tools in paid tiers." },
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
      "A learning management system with Arshi, a bilingual AI assistant, built for Bangladeshi universities. Live at the University of Chittagong and under procurement review at Asian University for Women.",
    facts: [
      { value: "Live", label: "in active departmental use" },
      { value: "3", label: "role-based dashboards" },
      { value: "9", label: "integrated core modules" },
      { value: "EN · BN", label: "bilingual AI assistant" },
    ],
    highlights: [
      { title: "Arshi — AI in the workflow", text: "Drafts courses, assignments, rubrics and reference letters in English or Bengali." },
      { title: "Outcome-based curriculum", text: "CLOs mapped to PLOs, natively — the way accreditation bodies expect." },
      { title: "Smart attendance", text: "GPS and rotating-QR check-in with automatic threshold alerts." },
      { title: "Integrity checks", text: "Submissions screened for AI-generated text and similarity before grading." },
      { title: "Endorsements & recommendation letters", text: "Five-domain endorsements feed AI-drafted letters faculty can edit." },
      { title: "Early warning & governance", text: "Flags at-risk students early; runs notices, requests and messaging in one place." },
    ],
    stack: ["React", "TypeScript", "FastAPI", "AI assistant", "GPS / QR attendance"],
    links: [{ label: "Visit Gridemy", href: "https://sarsense.com/gridemy" }],
    featured: true,
  },
];

export const researchProjects = [
  {
    name: "Deformation Susceptibility with InSAR & XAI",
    role: "Research Lead",
    period: "May 2025 – Present",
    description: "Explainable models that fuse InSAR with geological and human drivers to show planners where — and why — the ground is moving.",
  },
  {
    name: "Nationwide Land Deformation Map of Bangladesh",
    role: "Research Lead",
    period: "May 2025 – Present",
    description: "Millimetre-level subsidence and uplift for 2015–2025 from Sentinel-1 and ALOS-2, validated against GNSS.",
  },
  {
    name: "InSAR–ABM Compound-Risk Framework for Chittagong",
    role: "Research Lead",
    period: "Jun. 2025 – Present",
    description: "InSAR, flood data and an agent-based model test drainage and groundwater interventions — cutting modelled flood–subsidence risk by up to 40%.",
  },
];

export const academicProjects = [
  {
    name: "Slow-moving Landslide Deformation",
    period: "Sep. 2023 – Apr. 2024",
    description: "Multi-sensor PSInSAR (Envisat, Sentinel-1) with geomorphological mapping in a data-sparse region.",
  },
  {
    name: "Soil–Plant Digital Twin (PySTEMMUS-SCOPE)",
    period: "Nov. 2023 – Feb. 2024",
    description: "Simulated energy fluxes and soil moisture at Harvard Forest under seasonal climate extremes.",
  },
  {
    name: "Physically-based Flood Modelling",
    period: "Feb. 2023 – Mar. 2023",
    description: "LISEM modelling of sequential levee breaches on the Maas and Waal rivers.",
  },
];

export const experience = [
  {
    org: "SAR.Sense Geointelligence Lab",
    role: "Founder & Co-ordinator",
    location: "Chittagong, Bangladesh",
    period: "May 2025 – Present",
    bullets: [
      "Built a research lab of 35+ members and 5 external collaborators across three units: hazards, agriculture & forestry, and water & environment.",
      "Lead three InSAR and XAI research projects; built BanGIS Pro and Gridemy LMS.",
      "Launched SAR.Sense Academy for training in remote sensing, geospatial AI and climate-risk modelling.",
    ],
  },
  {
    org: "icddr,b — Nutrition Research Division",
    role: "GIS Consultant (National)",
    location: "Dhaka, Bangladesh",
    period: "Jan. 2025 – May 2025",
    bullets: [
      "Designed the spatial sampling framework for a national nutrition survey with IFPRI and Johns Hopkins (64 areas, 4 districts).",
      "Built Kobo-integrated survey maps that improved field data accuracy by 30%, and trained 15 researchers.",
    ],
  },
  {
    org: "Red Cross Red Crescent Climate Centre",
    role: "Junior Researcher",
    location: "The Hague, Netherlands",
    period: "Feb. 2021 – Jul. 2021",
    bullets: [
      "Set Rajshahi's heat threshold from 30 years of climate data and mapped ward-level heat hotspots with Landsat.",
      "Co-authored the ARRCC / UK Met Office study adopted into Rajshahi City Corporation's climate resilience strategy.",
    ],
  },
  {
    org: "Halishahar School of Artillery",
    role: "GIS Training Instructor",
    location: "Chittagong, Bangladesh",
    period: "Jan. 2017 – Aug. 2019",
    bullets: [
      "Trained 20 army officers in GIS for military intelligence, raising measured ArcGIS competency by 60%.",
    ],
  },
  {
    org: "University of Chittagong — Dept. of Geography and Environmental Studies",
    role: "Research Assistant",
    location: "Chittagong, Bangladesh",
    period: "Apr. 2017 – Aug. 2019",
    bullets: [
      "Analysed lightning-disaster trends in Bangladesh and supervised 6 undergraduate researchers.",
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
