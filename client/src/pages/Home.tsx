/* Ink Console design: the studio is a tactile archive sheet with a dominant stage, avatar filmstrip, and focused settings column. */
import { useMemo, useState } from "react";
import {
  Activity,
  AudioLines,
  Check,
  ChevronDown,
  CircleHelp,
  Eye,
  Gauge,
  Github,
  Grid2X2,
  Headphones,
  Library,
  MessageCircle,
  Moon,
  MousePointer2,
  Play,
  RotateCcw,
  Settings2,
  SlidersHorizontal,
  Sparkles,
  Sun,
  Volume2,
} from "lucide-react";

const ASSETS = {
  mark: "/manus-storage/avatar-mark_79d7eca4.png",
  paper: "/manus-storage/avatar-paper-texture_3c768008.png",
  stage: "/manus-storage/avatar-stage_a5e8806e.png",
  accent: "/manus-storage/avatar-accent-card_7427c749.png",
  aqua: "/manus-storage/aqua_06be60f2.png",
  darkness: "/manus-storage/darkness_a35bed53.png",
};

type Avatar = {
  id: string;
  name: string;
  className: string;
  source: string;
  palette: string;
  image?: string;
  description: string;
  status: string;
};

const avatars: Avatar[] = [
  { id: "aqua-fantasy", name: "Aqua", className: "Fantasy Fes", source: "101 / Aqua", palette: "#92b8ec", image: ASSETS.aqua, description: "Blue-haired Live2D texture set with water-toned accents.", status: "Texture atlas ready" },
  { id: "darkness-fantasy", name: "Darkness", className: "Fantasy Fes", source: "103 / Darkness", palette: "#d8a05d", image: ASSETS.darkness, description: "Warm gold and ink-black texture set with expressive details.", status: "Texture atlas ready" },
  { id: "wiz-archive", name: "Wiz", className: "Archive", source: "105 / Wiz", palette: "#a99ad4", image: ASSETS.accent, description: "A soft archive placeholder for the next imported model package.", status: "Manifest pending" },
  { id: "megumin-collab", name: "Megumin", className: "Collab", source: "102 / Megumin", palette: "#e45b4c", image: ASSETS.paper, description: "A coral-led collection slot reserved for a verified model.", status: "Manifest pending" },
];

function StatusDot({ tone = "green" }: { tone?: "green" | "coral" | "muted" }) {
  return <span className={`status-dot status-dot-${tone}`} aria-hidden="true" />;
}

export default function Home() {
  const [selectedId, setSelectedId] = useState("aqua-fantasy");
  const [tab, setTab] = useState<"studio" | "settings">("studio");
  const [background, setBackground] = useState("Ink stage");
  const [voice, setVoice] = useState("Aqua · Azure Neural");
  const [motion, setMotion] = useState(true);
  const [autoBlink, setAutoBlink] = useState(true);
  const [volume, setVolume] = useState(72);
  const selected = useMemo(() => avatars.find((avatar) => avatar.id === selectedId) ?? avatars[0], [selectedId]);

  return (
    <main className="app-shell">
      <aside className="side-rail">
        <div className="brand-lockup">
          <img src={ASSETS.mark} alt="Avatar mark" className="brand-mark" />
          <div><span className="eyebrow">CHARACTER STUDIO</span><strong>Avatar</strong></div>
        </div>
        <div className="rail-rule" />
        <nav className="rail-nav" aria-label="Main navigation">
          <button className={tab === "studio" ? "rail-link active" : "rail-link"} onClick={() => setTab("studio")}><Grid2X2 size={18} /><span>Studio</span><kbd>01</kbd></button>
          <button className={tab === "settings" ? "rail-link active" : "rail-link"} onClick={() => setTab("settings")}><Settings2 size={18} /><span>Settings</span><kbd>02</kbd></button>
          <button className="rail-link" onClick={() => setTab("settings")}><Library size={18} /><span>Model archive</span><kbd>03</kbd></button>
        </nav>
        <div className="rail-footer">
          <div className="rail-note"><span className="eyebrow">SESSION</span><div className="session-line"><StatusDot /><span>Local workspace</span></div></div>
          <a className="github-link" href="https://github.com/HaiKonofanDesu/konofan-live2d" target="_blank" rel="noreferrer"><Github size={15} /> Source archive <span>↗</span></a>
        </div>
      </aside>

      <section className="workspace" style={{ backgroundImage: `url(${ASSETS.paper})` }}>
        <header className="topbar">
          <div><span className="eyebrow">LIVE2D / AVATAR CONTROL</span><h1>{tab === "studio" ? "Choose the presence for this session." : "Tune the room around your avatar."}</h1></div>
          <div className="topbar-actions"><button className="icon-button" aria-label="Help"><CircleHelp size={18} /></button><button className="avatar-user">A<span>local</span></button></div>
        </header>

        <div className="studio-layout">
          <section className="stage-column">
            <div className="section-kicker"><span>01 / STAGE</span><span className="live-state"><StatusDot /> LIVE PREVIEW</span></div>
            <div className="stage-card" style={{ backgroundImage: `linear-gradient(135deg, rgba(8, 23, 42, .12), rgba(8, 23, 42, .74)), url(${ASSETS.stage})` }}>
              <div className="stage-corner stage-corner-tl">AVATAR / {selected.source}</div><div className="stage-corner stage-corner-tr">{autoBlink ? "BLINK ON" : "BLINK OFF"}</div>
              <div className="stage-grid" aria-hidden="true" />
              <div className="stage-copy"><span className="stage-index">0{avatars.findIndex((avatar) => avatar.id === selected.id) + 1}</span><span className="eyebrow">CURRENT MODEL</span><h2>{selected.name}</h2><p>{selected.description}</p></div>
              <div className="stage-avatar-orbit"><div className="orbit-ring" /><div className="stage-avatar-portrait" style={{ backgroundImage: `url(${selected.image})`, borderColor: selected.palette }}><div className="portrait-overlay" /><Sparkles size={26} /></div></div>
              <div className="stage-bottom"><span><StatusDot tone="coral" /> {selected.status}</span><button className="stage-play" onClick={() => setMotion(!motion)}><Play size={14} fill="currentColor" /> {motion ? "Preview motion" : "Motion paused"}</button></div>
            </div>

            <div className="filmstrip-header"><div><span className="eyebrow">02 / AVATAR ARCHIVE</span><h3>Select a model package</h3></div><span className="archive-count">{avatars.length} packages</span></div>
            <div className="avatar-filmstrip">
              {avatars.map((avatar, index) => <button key={avatar.id} className={`avatar-card ${selected.id === avatar.id ? "selected" : ""}`} onClick={() => setSelectedId(avatar.id)} aria-pressed={selected.id === avatar.id}>
                <span className="card-index">0{index + 1}</span><div className="card-image" style={{ backgroundImage: `url(${avatar.image})`, backgroundColor: avatar.palette }}><span className="card-sheen" /></div><div className="card-meta"><strong>{avatar.name}</strong><span>{avatar.className}</span></div>{selected.id === avatar.id && <span className="selected-check"><Check size={13} /></span>}
              </button>)}
            </div>
          </section>

          <aside className="settings-panel">
            <div className="panel-heading"><div><span className="eyebrow">03 / SETTINGS</span><h3>Session controls</h3></div><SlidersHorizontal size={18} /></div>
            <div className="selected-summary"><div className="summary-thumb" style={{ backgroundImage: `url(${selected.image})`, backgroundColor: selected.palette }} /><div><span className="eyebrow">SELECTED</span><strong>{selected.name}</strong><span>{selected.source}</span></div><StatusDot tone="coral" /></div>
            <div className="control-group"><label><span><Eye size={15} /> Stage background</span><span className="control-value">{background}</span></label><div className="segmented"><button className={background === "Ink stage" ? "chosen" : ""} onClick={() => setBackground("Ink stage")}>Ink stage</button><button className={background === "Paper" ? "chosen" : ""} onClick={() => setBackground("Paper")}>Paper</button></div></div>
            <div className="control-group"><label><span><AudioLines size={15} /> Voice profile</span><span className="control-value">{voice.includes("Azure") ? "Cloud" : "Local"}</span></label><select value={voice} onChange={(event) => setVoice(event.target.value)}><option>Aqua · Azure Neural</option><option>Neutral · Edge TTS</option><option>Local · Chatterbox</option></select></div>
            <div className="control-group"><label><span><Volume2 size={15} /> Output volume</span><span className="control-value">{volume}%</span></label><input type="range" min="0" max="100" value={volume} onChange={(event) => setVolume(Number(event.target.value))} /></div>
            <div className="control-group toggles"><label><span><Activity size={15} /> Motion mapping</span><button className={`toggle ${motion ? "on" : ""}`} onClick={() => setMotion(!motion)} aria-label="Toggle motion mapping"><span /></button></label><label><span><Sparkles size={15} /> Auto expressions</span><button className={`toggle ${autoBlink ? "on" : ""}`} onClick={() => setAutoBlink(!autoBlink)} aria-label="Toggle auto expressions"><span /></button></label></div>
            <div className="panel-callout"><Gauge size={17} /><div><strong>Ready for local preview</strong><p>Switching updates the stage immediately. Full model rendering will use the approved Live2D manifest.</p></div></div>
            <button className="primary-button" onClick={() => setTab("studio")}><MousePointer2 size={16} /> Load {selected.name} into the stage</button>
            <button className="secondary-button" onClick={() => { setSelectedId("aqua-fantasy"); setBackground("Ink stage"); setVoice("Aqua · Azure Neural"); setMotion(true); setAutoBlink(true); setVolume(72); }}><RotateCcw size={15} /> Reset session controls</button>
            <div className="panel-footer"><span><Headphones size={14} /> Voice: {voice.split(" · ")[0]}</span><span><MessageCircle size={14} /> LLM ready</span></div>
          </aside>
        </div>

        <footer className="workspace-footer"><span>Avatar v0.1 / local-first control surface</span><span><Sun size={13} /> Light paper theme <span className="footer-divider">·</span> <Moon size={13} /> Dark stage preview</span></footer>
      </section>
    </main>
  );
}
