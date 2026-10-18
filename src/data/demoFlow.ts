export const homeReadingEntrance = { text: '人际与合作是今天的关键词。\n沟通表达状态在线，适合推进合作，拓展关系。', delayMs: 150, characterMs: 25 };
import { useEffect, useReducer } from 'react';
export const drawMotion = { shakeMs: 1900, revealMs: 650 };
export type Page = 'home'|'daily'|'chart'|'year'|'love';
export type Modal = null|'profile'|'wallpapers'|'gallery'|'draw'|'membership';
export type Profile = {name:string;gender:string;birth:string;place:string};
export const profileDefault:Profile={name:'蔡澎',gender:'男',birth:'2001-01-05T12:30',place:'江苏省 宿迁市'};
export const metrics=[{name:'事业',title:'事业发展',score:71,status:'平稳',icon:'briefcase',text:'沟通表达状态在线，适合推进合作。明确分工，把想法说清楚，更容易获得支持。'},{name:'感情',title:'感情关系',score:75,status:'升温',icon:'heart',text:'主动分享近况，也认真倾听对方。一次真诚交流，会让关系更进一步。'},{name:'财富',title:'财富机会',score:84,status:'较旺',icon:'diamond',text:'适合整理收支，关注熟悉领域的机会。做决定前多核实，保持自己的节奏。'}];
export const features:{page?:Page;modal?:Modal;title:string;subtitle:string;icon:string}[]=[{page:'chart',title:'本命星盘',subtitle:'解读你的性格',icon:'planet'},{page:'year',title:'年度运势',subtitle:'把握全年趋势',icon:'calendar'},{page:'love',title:'缘分分析',subtitle:'看感情关系',icon:'heart'},{modal:'wallpapers',title:'幸运壁纸',subtitle:'领取专属好运',icon:'wallpaper'}];
export const keywords=['合作','表达','贵人'];
export const titles:Record<Page,string>={home:'AI命理',daily:'今日解读',chart:'本命星盘',year:'年度运势',love:'缘分分析'};
export const tabs:Record<'chart'|'year'|'love',string[]>={chart:['命主信息','命盘分析','五行能量','五行喜用','八字十神'],year:['生肖太岁','开运建议','命盘分析','五行分析','事业机遇'],love:['命主信息','姻缘总结','情感特质','配偶特征','缘分生肖']};
export const chartRows=[['干神','食神','劫财','日主','比肩'],['天干','庚','己','戊','戊'],['地支','辰','丑','辰','午'],['藏干','戊\n乙\n癸','己\n癸\n辛','戊\n乙\n癸','丁\n己'],['支神','比肩\n正官\n正财','劫财\n正财\n伤官','比肩\n正官\n正财','正印\n劫财'],['纳音','白蜡金','霹雳火','大林木','天上火'],['空亡','申酉','午未','戌亥','子丑'],['地势','冠带','养','冠带','帝旺'],['自坐','养','墓','冠带','帝旺']];
export const spirits={chart:['太极贵人\n红艳\n月德贵人\n天德贵人\n国印','太极贵人\n天乙贵人\n寡宿\n国印\n披麻','太极贵人\n童子煞\n红艳\n华盖\n国印','福星贵人\n丧门\n羊刃\n童子煞\n血刃'],love:['天德贵人\n红艳\n月德贵人\n太极贵人\n国印','寡宿\n太极贵人\n披麻\n国印\n天乙贵人','红艳\n太极贵人\n国印\n华盖\n童子煞','福星贵人\n灾煞\n血刃\n羊刃\n丧门']};
export const yearText='属龙，午年无犯太岁，本命地支与流年太岁关系平稳和谐。这一年整体运势较为顺畅，但仍需保持谨慎乐观的心态。事业上可稳步发展，感情关系融洽，健康方面注意劳逸结合。建议把握有利时机，同时保持谦逊低调，避免因大意而错失良机。';
export const suggestions=[{title:'宜：主动联系，推进合作',text:'先完成一件重要的小事，让行动带来改变。',symbol:'✓'},{title:'留意：避免急于求成',text:'给沟通留出空间，确认细节后再做决定。',symbol:'−'}];
export const supplementary:Record<string,{title:string;text:string}[]>={
 '命盘分析':[{title:'稳定中寻找自己的方向',text:'把长期目标拆成可完成的小事，比急于看到结果更有帮助。'},{title:'表达，让合作更顺畅',text:'说清自己的期待，也给他人表达的空间。'}],
 '五行能量':[{title:'五行的平衡',text:'金、木、水、火、土是传统文化中的五种象征。此 Demo 展示交互，不进行真实命盘计算。'}],
 '五行喜用':[{title:'给生活留一点余地',text:'规律休息、亲近自然，为忙碌的日常找到平衡。'}],
 '八字十神':[{title:'认识十神',text:'比肩、劫财、食神等名称是传统命理中的关系符号，可结合命主信息查看对应位置。'}],
 '姻缘总结':[{title:'真诚表达，慢慢靠近',text:'关系需要双方共同经营。主动表达感受，同时尊重彼此的边界。'}],
 '情感特质':[{title:'倾听与回应',text:'理解比猜测更有效。用一次耐心的对话代替对对方心意的推断。'}],
 '配偶特征':[{title:'关注相处中的感受',text:'共同的价值观、尊重与信任，比预设的条件更能帮助你了解一个人。'}],
 '缘分生肖':[{title:'缘分不止于生肖',text:'生肖是传统文化的一种表达，真实的关系来自了解、沟通与共同经历。'}],
 '开运建议':[{title:'今日幸运色 · 浅紫',text:'用一抹喜欢的颜色，为日常带来好心情。'},{title:'行动建议 · 主动沟通',text:'联系一位朋友，或为一项合作迈出第一步。'},{title:'生活建议 · 规律休息',text:'为自己安排一段不被打扰的休息时间。'}],
 '五行分析':[{title:'循序渐进，保持平衡',text:'在工作与生活之间留出空间，关注自己的实际需要。'}],
 '事业机遇':[{title:'把准备做在机会之前',text:'梳理近期的工作成果，与伙伴明确下一步分工。'}]
};
export const wallpapers=[{id:'lotus',title:'全年鸿运',subtitle:'把美好的期许，留在每一天',colors:['#d9ecf4','#d8c8fb'],kind:'lotus'},{id:'mountain',title:'步步高升',subtitle:'心有山海，步履从容',colors:['#d5e9ff','#9695d8'],kind:'mountain'},{id:'blossom',title:'缘来是你',subtitle:'愿每一份真心，都有回应',colors:['#ffe4ef','#e7d4fa'],kind:'blossom'},{id:'stars',title:'好运相随',subtitle:'星光与你，一路同行',colors:['#29225c','#9c78e8'],kind:'stars'}];
export const fortunes=[{rank:'上上签',title:'春风得意',poem:'春风拂面花开早\n心有所向皆可期',text:'今天适合主动表达，向期待已久的事情迈出一小步。保持真诚，好消息会在行动中慢慢靠近。',keyword:'主动 · 合作'},{rank:'上吉签',title:'静待花开',poem:'细雨润物悄无声\n好事自会如期至',text:'把注意力放在眼前能完成的小事上。给自己一些耐心，也给美好的变化一点时间。',keyword:'耐心 · 积累'},{rank:'吉签',title:'顺心而行',poem:'云开月明风正好\n从容一步见新程',text:'放松心情，整理思绪。一次轻松的交流，可能为今天带来新的灵感。',keyword:'从容 · 表达'}];
export type State={page:Page;modal:Modal;tab:number;chartMode:number;profile:Profile;wallpaper:number;drawAsset:'loading'|'ready'|'error';draw:'idle'|'shaking'|'result';fortune:number;saved:boolean;unlocked:boolean;toast:string};
export const initialState:State={page:'home',modal:null,tab:0,chartMode:0,profile:profileDefault,wallpaper:0,drawAsset:'loading',draw:'idle',fortune:0,saved:false,unlocked:false,toast:''};
export type Action={type:'navigate';page:Page}|{type:'modal';modal:Modal}|{type:'tab';value:number}|{type:'chartMode';value:number}|{type:'profile';value:Profile}|{type:'wallpaper';value:number}|{type:'drawAsset';value:State['drawAsset']}|{type:'draw'}|{type:'result'}|{type:'save'}|{type:'unlock'}|{type:'toast';value:string};
export function reducer(s:State,a:Action):State {switch(a.type){case'navigate':return {...s,page:a.page,modal:null,tab:0,chartMode:0};case'modal':return {...s,modal:a.modal,draw:a.modal==='draw'?'idle':s.draw};case'tab':return {...s,tab:a.value};case'chartMode':return {...s,chartMode:a.value};case'profile':return {...s,profile:a.value,modal:null,toast:'资料已保存（演示数据不重新排盘）'};case'wallpaper':return {...s,wallpaper:(a.value+wallpapers.length)%wallpapers.length};case'drawAsset':return {...s,drawAsset:a.value};case'draw':return s.drawAsset==='ready'?{...s,draw:'shaking'}:s;case'result':return {...s,draw:'result',fortune:(s.fortune+1)%fortunes.length};case'save':return {...s,saved:!s.saved,toast:s.saved?'已取消收藏':'已收藏今日解读'};case'unlock':return {...s,unlocked:true,modal:null,toast:'已开启演示报告，无需付费'};case'toast':return {...s,toast:a.value};}}
function restore():State{try{const saved=JSON.parse(localStorage.getItem('mingli-demo')||'null');return saved?{...initialState,saved:!!saved.saved,profile:{...profileDefault,...saved.profile}}:initialState;}catch{return initialState;}}
export function useDemoFlow(){const [state,dispatch]=useReducer(reducer,initialState,restore);useEffect(()=>{try{localStorage.setItem('mingli-demo',JSON.stringify({profile:state.profile,saved:state.saved}));}catch{}},[state.profile,state.saved]);useEffect(()=>{if(!state.toast)return;const t=setTimeout(()=>dispatch({type:'toast',value:''}),2800);return()=>clearTimeout(t);},[state.toast]);useEffect(()=>{if(state.draw!=='shaking'||state.modal!=='draw')return;const t=setTimeout(()=>dispatch({type:'result'}),drawMotion.shakeMs);return()=>clearTimeout(t);},[state.draw,state.modal]);return {state,dispatch};}

// Pixel bounds of illustration-only regions in the 750 × 1639 reference.
export const homeArtwork = {avatar:[32,180,78,79],hero:[413,363,299,201],briefcase:[87,617,65,65],heart:[308,617,65,65],diamond:[529,617,65,65],natal:[68,1206,145,101],annual:[247,1206,122,101],relationship:[397,1206,122,101],wallpaper:[546,1206,122,101],lucky:[72,1531,100,100]} as const;


export const dailyArtwork={avatar:[38,203,86,88],planet:[479,373,320,205],briefcase:[73,851,95,96],heart:[73,1020,95,96],diamond:[73,1190,95,95],check:[97,1467,61,62],minus:[97,1587,61,62],sparkle:[78,1738,61,63]} as const;
export const dailyReading=metrics.map(m=>({...m,lines:m.text.match(/[^。]+。/g)||[m.text]}));

export const natalArtwork={avatar:[60,173,95,100],planet:[615,155,211,128]} as const;
export const elementColors:Record<string,string>={金:"#f4b62f",木:"#119b76",水:"#1974f6",火:"#ff5779",土:"#cd8427",庚:"#ffb931",己:"#cc862f",戊:"#cc862f",辰:"#cc862f",丑:"#cc862f",午:"#ff5779",乙:"#119b76",癸:"#1974f6",辛:"#ffb931",丁:"#ff5779",白蜡金:"#f4aa21",霹雳火:"#ff5779",大林木:"#119b76",天上火:"#ff5779"};

export const yearArtwork={avatar:[52,223,96,102],horse:[548,187,270,175],dragon:[66,748,126,126]} as const;
export const yearTags=["运程平稳","顺遂之年","机遇当前","低调为好"];

export const loveArtwork={avatar:[54,159,102,106],heart:[616,151,264,140]} as const;
