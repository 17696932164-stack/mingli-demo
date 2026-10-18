import type { CSSProperties, Dispatch } from 'react';
import { dailyArtwork, dailyReading, keywords, suggestions } from '../data/demoFlow';
import type { State, Action } from '../data/demoFlow';

function Art({name,className=''}:{name:keyof typeof dailyArtwork;className?:string}) {
 const [x,y,width,height]=dailyArtwork[name];
 return <span aria-hidden="true" className={`detail-art ${className}`} style={{'--x':x,'--y':y,'--w':width,'--h':height} as CSSProperties}/>;
}

export default function DailyDetail({state,dispatch}:{state:State;dispatch:Dispatch<Action>}) {
 return <div className="detail-screen"><div className="detail-canvas">
  <div className="detail-profile"><Art name="avatar"/><div><strong>{state.profile.name.slice(0,1)}先生的今日解读</strong><p>今日已更新 · 10月17日</p></div></div>
  <section className="detail-hero daily-hero">
   <span className="detail-eyebrow">今日主题</span><h1>主动沟通<br/>好运相随</h1><Art name="planet" className="detail-planet"/>
   <p className="detail-theme">人际与合作，是今天的关键词。</p>
   <div className="detail-keywords">{keywords.map(k=><span key={k}>{k}</span>)}</div><div className="detail-score"><span>综合运势</span><b>76</b><small>分</small></div>
  </section>
  <section className="detail-readings"><h2>运势详解</h2><div className="detail-reading-list">{dailyReading.map(m=><article className="detail-reading" key={m.name}>
   <Art name={m.icon as 'briefcase'|'heart'|'diamond'}/><div className="detail-reading-copy"><h3>{m.title}</h3><p>{m.lines.map((line,i)=><span key={i}>{line}</span>)}</p></div><div className={'detail-metric-value '+m.icon}><b>{m.score}</b><span> · </span><em>{m.status}</em></div>
  </article>)}</div></section>
  <section className="detail-actions"><h2>今日行动建议</h2><div>{suggestions.map((s,i)=><article key={s.title}><Art name={i===0?'check':'minus'}/><div><h3>{s.title}</h3><p>{s.text}</p></div></article>)}</div></section>
  <section className="detail-quote"><Art name="sparkle"/><div><small>给今天的你</small><h3>真诚表达，自有回应。</h3></div><button aria-label={state.saved?'取消收藏':'收藏今日解读'} aria-pressed={state.saved} onClick={()=>dispatch({type:'save'})}><svg viewBox="0 0 24 28" fill={state.saved?'#8c63ed':'none'} aria-hidden="true"><path d="M4 3h16v23l-8-7-8 7Z" stroke={state.saved?'#8c63ed':'#7486a4'} strokeWidth="2.5" strokeLinejoin="round"/></svg></button></section>
 </div></div>;
}
