import { useId } from 'react';
import { drawAssetUrl } from '../drawAssets';

// All layers reuse the original artwork; masks only separate the three sticks.
const sticks = [
  'M210 205H440L483 605H337L216 351Z',
  'M440 45H696L655 605H479Z',
  'M680 232H913V353L794 605H650Z',
];
export default function FortuneCylinder({ shaking }: { shaking: boolean }) {
  const id = useId().replace(/:/g, '');
  const source = drawAssetUrl;
  return <span className="fortune-artwork">
    <img className="fortune-original" src={source} alt="紫金色幸运签筒" />
    {<svg className={`fortune-separated ${shaking ? 'is-shaking' : ''}`} viewBox="0 0 1122 1402" aria-hidden="true">
      <defs>
        {sticks.map((d, i) => <clipPath key={i} id={`${id}-stick-${i}`}><path d={d}/></clipPath>)}
        {[{x:337,w:142},{x:480,w:174},{x:655,w:140}].map((r,i) => <clipPath key={i} id={`${id}-tail-${i}`}><rect x={r.x} y="560" width={r.w} height="44"/></clipPath>)}
        <mask id={`${id}-body`} maskUnits="userSpaceOnUse" x="0" y="0" width="1122" height="1402">
          <rect width="1122" height="1402" fill="white"/>
          {sticks.map((d, i) => <path key={i} d={d} fill="black"/>)}
        </mask>
        <clipPath id={`${id}-front`}><rect y="605" width="1122" height="797"/></clipPath>
        <linearGradient id={`${id}-inside`} x2="0" y2="1"><stop stopColor="#5d2a1c"/><stop offset="1" stopColor="#d99630"/></linearGradient>
      </defs>
      <image href={source} width="1122" height="1402" mask={`url(#${id}-body)`}/>
      <ellipse cx="562" cy="594" rx="244" ry="28" fill={`url(#${id}-inside)`}/>
      {[0,2,1].map(i => <g key={i} className={`fortune-stick fortune-stick-${i}`}>
        <g transform="translate(0 560) scale(1 3) translate(0 -560)"><image href={source} width="1122" height="1402" clipPath={`url(#${id}-tail-${i})`}/></g>
        <image href={source} width="1122" height="1402" clipPath={`url(#${id}-stick-${i})`}/>
      </g>)}
      <image href={source} width="1122" height="1402" clipPath={`url(#${id}-front)`}/>
    </svg>}
  </span>;
}
