import { useId } from 'react';
import type { CSSProperties } from 'react';
import { wallpaperMotion } from '../data/demoFlow';

export default function LotusWallpaper() {
  const id = useId().replace(/:/g, '');
  const source = './assets/wallpaper-lotus-preview.webp';
  return <svg className="wallpaper-art lotus-wallpaper" viewBox="0 0 555 1200" preserveAspectRatio="xMidYMid slice" role="img" aria-label="全年鸿运壁纸，荷花轻摇、水滴落下、水面泛起涟漪" style={{'--water-cycle':`${wallpaperMotion.cycleMs}ms`} as CSSProperties}>
    <defs>
      <radialGradient id={`${id}-feather`}><stop offset="65%" stopColor="white"/><stop offset="100%" stopColor="black"/></radialGradient>
      <mask id={`${id}-flower`}><ellipse cx="302" cy="380" rx="260" ry="242" fill={`url(#${id}-feather)`}/></mask>
      <linearGradient id={`${id}-drop`} x2="1" y2="1"><stop stopColor="white"/><stop offset=".5" stopColor="#e5faff"/><stop offset="1" stopColor="#79b6c7"/></linearGradient>
    </defs>
    <image href={source} width="555" height="1200"/>
    <g className="lotus-bloom" mask={`url(#${id}-flower)`}><image href={source} width="555" height="1200"/></g>
    {wallpaperMotion.delaysMs.map(delay => <g key={delay}>
      <g className="lotus-drop" style={{animationDelay:`${delay}ms`}}><path d="M171 552c-1 4-5 9-5 13a5 5 0 0 0 10 0c0-4-4-9-5-13Z" fill={`url(#${id}-drop)`}/><ellipse cx="169" cy="562" rx="1" ry="3" fill="white"/></g>
      <g className="lotus-ripple" style={{animationDelay:`${delay+wallpaperMotion.impactMs}ms`}}><ellipse cx="162" cy="974" rx="70" ry="17" fill="none" stroke="#f2ffff" strokeWidth="2.5"/><ellipse cx="162" cy="974" rx="50" ry="12" fill="none" stroke="#a1d3dd" strokeWidth="1.5"/></g>
    </g>)}
  </svg>;
}
