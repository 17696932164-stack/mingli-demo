import type { CSSProperties, Dispatch } from 'react';
import { features, homeArtwork, keywords, metrics, homeReadingEntrance } from '../data/demoFlow';
import type { State, Action } from '../data/demoFlow';
import { Chevron } from './Primitives';
// The atlas supplies illustration regions only. Text and controls remain DOM.
function Artwork({ name, className = '' }: { name: keyof typeof homeArtwork; className?: string }) {
 const [x,y,width,height]=homeArtwork[name];
 return <span aria-hidden="true" className={`home-art ${className}`} style={{'--art-x':x,'--art-y':y,'--art-width':width,'--art-height':height} as CSSProperties}/>;
}
export default function Home({state,dispatch}:{state:State;dispatch:Dispatch<Action>}) {return <div className="home-screen"><div className="home-canvas">
 <div className="home-profile"><Artwork name="avatar"/><div className="home-profile-copy"><strong>{state.profile.name.slice(0,1)}先生的今日运势</strong><p>今日已更新 · 10月17日</p></div><button className="home-switch" onClick={()=>dispatch({type:'modal',modal:'profile'})}>切换 <Chevron/></button></div>
 <section className="home-fortune"><h1>今日综合运势</h1><span className="home-date">10.17 周五</span><div className="home-score">76<span>/100</span></div><Artwork name="hero" className="home-planet"/><p className="home-summary">状态不错，适合主动出击</p>
 <div className="home-metrics">{metrics.map(m=><div className="home-metric" key={m.name}><Artwork name={m.icon as 'briefcase'|'heart'|'diamond'}/><span><b>{m.name}</b><strong>{m.score}</strong></span></div>)}</div>
 <button className="home-interpret" onClick={()=>dispatch({type:'navigate',page:'daily'})}><strong>今日解读</strong><p aria-label={homeReadingEntrance.text}><span aria-hidden="true">{Array.from(homeReadingEntrance.text).map((char,i)=>char==='\n'?<br key={i}/>:<span className="reading-character" key={i} style={{animationDelay:`${homeReadingEntrance.delayMs+i*homeReadingEntrance.characterMs}ms`}}>{char}</span>)}</span></p><span className="home-round-arrow"><Chevron/></span></button>
 <div className="home-keywords"><h2>今日关键词</h2><div>{keywords.map(k=><span key={k}>{k}</span>)}</div></div></section>
 <section className="home-features"><h2>命理解读</h2><button className="home-more" onClick={()=>dispatch({type:'navigate',page:'chart'})}>更多 <Chevron/></button><div className="home-feature-grid">{features.map((f,i)=><button key={f.title} onClick={()=>f.page?dispatch({type:'navigate',page:f.page}):dispatch({type:'modal',modal:f.modal!})}><Artwork name={(['natal','annual','relationship','wallpaper'] as const)[i]}/><strong>{f.title}</strong><small>{f.subtitle}</small></button>)}</div></section>
 <section className="home-explore"><h2>探索更多</h2><button onClick={()=>dispatch({type:'modal',modal:'draw'})}><Artwork name="lucky"/><span className="home-lucky-copy"><strong>今日幸运签</strong><small>获取今天的幸运提示</small><Chevron/></span></button></section>
 </div></div>;}
