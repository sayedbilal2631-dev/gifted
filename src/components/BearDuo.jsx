// export default function BearDuo({ style }) {
//   return (
//     <svg
//       style={style}
//       viewBox="0 0 220 170"
//       xmlns="http://www.w3.org/2000/svg"
//       role="img"
//       aria-label="Two cartoon bears sharing a snack"
//     >
//       {/* soft ground shadow */}
//       <ellipse cx="110" cy="156" rx="70" ry="10" fill="#00000012" />

//       {/* --- tan bear (left) --- */}
//       <g>
//         <ellipse cx="72" cy="150" rx="16" ry="8" fill="#c79a63" />
//         <ellipse cx="112" cy="150" rx="16" ry="8" fill="#c79a63" />
//         <rect x="55" y="90" width="70" height="66" rx="30" fill="var(--tan)" />
//         <circle cx="52" cy="70" r="17" fill="var(--tan)" />
//         <circle cx="118" cy="70" r="17" fill="var(--tan)" />
//         <circle cx="52" cy="70" r="8" fill="#b98d55" />
//         <circle cx="118" cy="70" r="8" fill="#b98d55" />
//         <circle cx="85" cy="86" r="34" fill="var(--tan)" />
//         <circle cx="70" cy="88" r="4.5" fill="var(--ink)" />
//         <circle cx="100" cy="88" r="4.5" fill="var(--ink)" />
//         <ellipse cx="85" cy="100" rx="9" ry="6" fill="#fbeee0" />
//         <circle cx="85" cy="98" r="2.6" fill="var(--ink)" />
//         <circle cx="63" cy="96" r="5.5" fill="#f2a97f" opacity="0.6" />
//         <circle cx="107" cy="96" r="5.5" fill="#f2a97f" opacity="0.6" />
//         {/* arm reaching toward the snack */}
//         <path d="M118 118 Q140 122 138 138" stroke="var(--tan)" strokeWidth="14" fill="none" strokeLinecap="round" />
//       </g>

//       {/* --- mint bear (right) --- */}
//       <g>
//         <ellipse cx="150" cy="150" rx="16" ry="8" fill="#93c9b8" />
//         <ellipse cx="188" cy="150" rx="16" ry="8" fill="#93c9b8" />
//         <rect x="132" y="86" width="68" height="70" rx="30" fill="var(--mint)" />
//         <circle cx="130" cy="64" r="16" fill="var(--mint)" />
//         <circle cx="192" cy="64" r="16" fill="var(--mint)" />
//         <circle cx="130" cy="64" r="7" fill="#78ab99" />
//         <circle cx="192" cy="64" r="7" fill="#78ab99" />
//         <circle cx="161" cy="80" r="33" fill="var(--mint)" />
//         <path d="M148 78 q4 -6 8 0" stroke="var(--ink)" strokeWidth="2.6" fill="none" strokeLinecap="round" />
//         <path d="M166 78 q4 -6 8 0" stroke="var(--ink)" strokeWidth="2.6" fill="none" strokeLinecap="round" />
//         <ellipse cx="161" cy="94" rx="8" ry="6" fill="#fbfffb" />
//         <circle cx="161" cy="92" r="2.4" fill="var(--ink)" />
//         <circle cx="141" cy="90" r="5" fill="#f2a97f" opacity="0.5" />
//         <circle cx="181" cy="90" r="5" fill="#f2a97f" opacity="0.5" />
//         {/* arm holding the snack */}
//         <path d="M132 116 Q112 120 112 134" stroke="var(--mint)" strokeWidth="14" fill="none" strokeLinecap="round" />
//       </g>

//       {/* shared snack between them */}
//       <g transform="translate(100,118)">
//         <path
//           d="M12 24 C-4 24 -6 4 12 2 C18 -8 34 -6 36 4 C46 4 48 20 34 24 Z"
//           fill="#e7a765"
//           stroke="#c8823f"
//           strokeWidth="1.5"
//         />
//         <circle cx="14" cy="12" r="2" fill="#c8823f" />
//         <circle cx="24" cy="8" r="2" fill="#c8823f" />
//         <circle cx="30" cy="16" r="2" fill="#c8823f" />
//       </g>
//     </svg>
//   )
// }


import { useEffect, useRef } from 'react'

/**
 * BearDuo — looping kawaii animation:
 * brown boy bear walks up with a rose bouquet, offers it shyly,
 * white girl bear accepts it and blushes, hearts/sparkles/petals float around them.
 *
 * Self-contained: styles are scoped under .bd-root so this drops in anywhere
 * (e.g. <Box sx={{ width: 180 }}><BearDuo /></Box>) without leaking CSS.
 */
export default function BearDuo() {
  const particleLayerRef = useRef(null)

  useEffect(() => {
    const layer = particleLayerRef.current
    if (!layer) return

    const HEARTS = ['💗', '💕', '💖']
    const SPARKLES = ['✨', '⭐']
    const LOOP_MS = 8000
    const start = performance.now()
    let rafId

    const makeHeart = (x, y) => {
      const el = document.createElement('div')
      el.className = 'bd-heart'
      el.textContent = HEARTS[Math.floor(Math.random() * HEARTS.length)]
      el.style.left = x + 'px'
      el.style.top = y + 'px'
      layer.appendChild(el)
      setTimeout(() => el.remove(), 2700)
    }
    const makeSparkle = (x, y) => {
      const el = document.createElement('div')
      el.className = 'bd-sparkle'
      el.textContent = SPARKLES[Math.floor(Math.random() * SPARKLES.length)]
      el.style.left = x + 'px'
      el.style.top = y + 'px'
      layer.appendChild(el)
      setTimeout(() => el.remove(), 1700)
    }
    const makePetal = (x, y) => {
      const el = document.createElement('div')
      el.className = 'bd-petal'
      el.style.left = x + 'px'
      el.style.top = y + 'px'
      el.style.background = Math.random() > 0.5 ? '#FFA8C5' : '#E84A5F'
      layer.appendChild(el)
      setTimeout(() => el.remove(), 3500)
    }

    const tick = (now) => {
      const t = (now - start) % LOOP_MS

      if (t > 4600 && t < 7900 && Math.random() < 0.18) {
        makeHeart(250 + Math.random() * 140, 90 + Math.random() * 120)
      }
      if (t > 4600 && t < 7900 && Math.random() < 0.14) {
        makeSparkle(220 + Math.random() * 220, 60 + Math.random() * 180)
      }
      if (Math.random() < 0.05) {
        makePetal(180 + Math.random() * 260, 20 + Math.random() * 60)
      }

      rafId = requestAnimationFrame(tick)
    }
    rafId = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(rafId)
      layer.innerHTML = ''
    }
  }, [])

  return (
    <div className="bd-root">
      <style>{bearDuoCss}</style>

      <div className="bd-stage">
        <div className="bd-bg-cloud" style={{ width: 220, height: 220, top: '6%', left: '6%' }} />
        <div className="bd-bg-cloud" style={{ width: 160, height: 160, top: '10%', right: '10%' }} />
        <div className="bd-bg-cloud" style={{ width: 120, height: 120, bottom: '8%', left: '20%' }} />

        <div className="bd-scene">
          <div className="bd-ground" />

          {/* BOY BEAR */}
          <div className="bd-boy-walker">
            <div className="bd-boy-bob">
              <div className="bd-boy-lean">
                <div className="bd-boy-leg bd-left" />
                <div className="bd-boy-leg bd-right" />
                <div className="bd-boy-body" />
                <div className="bd-boy-tummy" />
                <div className="bd-boy-arm-back" />

                <div className="bd-boy-head-wrap">
                  <div className="bd-boy-ear bd-l"><div className="bd-boy-ear-inner" /></div>
                  <div className="bd-boy-ear bd-r"><div className="bd-boy-ear-inner" /></div>
                  <div className="bd-boy-head" />
                  <div className="bd-boy-muzzle" />
                  <div className="bd-boy-nose" />
                  <div className="bd-boy-mouth" />
                  <div className="bd-boy-eye bd-l" />
                  <div className="bd-boy-eye bd-r" />
                  <div className="bd-boy-cheek bd-l" />
                  <div className="bd-boy-cheek bd-r" />
                </div>

                <div className="bd-boy-arm-front" />

                <div className="bd-bouquet bd-bouquet-boy">
                  <div className="bd-wrap-paper" />
                  <div className="bd-stem" />
                  <div className="bd-rose bd-r1"><div className="bd-rose-dot" /></div>
                  <div className="bd-rose bd-r2"><div className="bd-rose-dot" /></div>
                  <div className="bd-rose bd-r3"><div className="bd-rose-dot" /></div>
                  <div className="bd-rose bd-r4"><div className="bd-rose-dot" /></div>
                </div>
              </div>
            </div>
          </div>

          {/* GIRL BEAR */}
          <div className="bd-girl">
            <div className="bd-girl-bob">
              <div className="bd-girl-foot bd-l" />
              <div className="bd-girl-foot bd-r" />
              <div className="bd-girl-dress" />
              <div className="bd-girl-dress-trim" />
              <div className="bd-girl-body" />
              <div className="bd-girl-tummy" />
              <div className="bd-girl-arm-back" />

              <div className="bd-girl-head-wrap">
                <div className="bd-girl-ear bd-l"><div className="bd-girl-ear-inner" /></div>
                <div className="bd-girl-ear bd-r"><div className="bd-girl-ear-inner" /></div>
                <div className="bd-girl-head" />
                <div className="bd-girl-muzzle" />
                <div className="bd-girl-nose" />
                <div className="bd-girl-mouth" />
                <div className="bd-girl-eye bd-l" />
                <div className="bd-girl-eye bd-r" />
                <div className="bd-girl-eye-happy bd-l" />
                <div className="bd-girl-eye-happy bd-r" />
                <div className="bd-girl-cheek bd-l" />
                <div className="bd-girl-cheek bd-r" />
                <div className="bd-girl-bow">
                  <div className="bd-bow-wing bd-l" />
                  <div className="bd-bow-wing bd-r" />
                  <div className="bd-bow-center" />
                </div>
              </div>

              <div className="bd-girl-arm-front" />

              <div className="bd-bouquet bd-bouquet-girl">
                <div className="bd-wrap-paper" />
                <div className="bd-stem" />
                <div className="bd-rose bd-r1"><div className="bd-rose-dot" /></div>
                <div className="bd-rose bd-r2"><div className="bd-rose-dot" /></div>
                <div className="bd-rose bd-r3"><div className="bd-rose-dot" /></div>
                <div className="bd-rose bd-r4"><div className="bd-rose-dot" /></div>
              </div>
            </div>
          </div>

          <div className="bd-particle-layer" ref={particleLayerRef} />
        </div>
      </div>
    </div>
  )
}

const bearDuoCss = `
.bd-root {
  --boy-fur:#B5793F;
  --boy-fur-dark:#9A6531;
  --boy-muzzle:#F2D9B0;
  --girl-fur:#FFFBF6;
  --girl-fur-shade:#F5E9E0;
  --pink-bow:#FF8FAE;
  --pink-bow-dark:#F26D93;
  --pink-dress:#FFC1D6;
  --pink-dress-dark:#FF9EBF;
  --blush:#FF9FB0;
  --rose-red:#E84A5F;
  --rose-pink:#FFA8C5;
  --stem-green:#8FBF7F;
  --outline:#5B4636;
  width: 100%;
}
.bd-stage{
  position:relative;
  width:100%;
  display:flex;
  align-items:center;
  justify-content:center;
  overflow:hidden;
}
.bd-bg-cloud{
  position:absolute;
  border-radius:50%;
  background:rgba(255,255,255,0.5);
  filter:blur(1px);
}
.bd-scene{
  position:relative;
  width:640px;
  height:420px;
  max-width:100%;
  aspect-ratio: 640 / 420;
}
.bd-ground{
  position:absolute;
  bottom:6%;
  left:0;
  right:0;
  height:2px;
  background:rgba(180,140,120,0.25);
}

/* ================= BOY BEAR ================= */
.bd-boy-walker{
  position:absolute;
  bottom:8%;
  left:2%;
  width:170px;
  height:230px;
  transform-origin:bottom center;
  animation:bd-boyWalkPath 8s infinite ease-in-out;
}
@keyframes bd-boyWalkPath{
  0%   { left:0%; }
  22%  { left:29%; }
  28%  { left:31%; }
  100% { left:31%; }
}
.bd-boy-bob{
  width:100%;
  height:100%;
  position:relative;
  animation:bd-boyBob 8s infinite ease-in-out;
}
@keyframes bd-boyBob{
  0%,20%   { transform:translateY(0px) rotate(0deg); }
  5%       { transform:translateY(-6px) rotate(-1deg); }
  10%      { transform:translateY(0px) rotate(1deg); }
  15%      { transform:translateY(-6px) rotate(-1deg); }
  22%,100% { transform:translateY(0px) rotate(0deg); }
}
.bd-boy-lean{
  width:100%;
  height:100%;
  animation:bd-boyLean 8s infinite ease-in-out;
  transform-origin:bottom center;
}
@keyframes bd-boyLean{
  0%,22%   { transform:rotate(0deg) translateX(0); }
  30%      { transform:rotate(2deg) translateX(4px); }
  48%      { transform:rotate(2deg) translateX(4px); }
  55%      { transform:rotate(0deg) translateX(0); }
  100%     { transform:rotate(0deg) translateX(0); }
}

.bd-boy-leg{
  position:absolute;
  bottom:0;
  width:34px;
  height:52px;
  background:var(--boy-fur);
  border:4px solid var(--outline);
  border-radius:16px;
  transform-origin:top center;
}
.bd-boy-leg.bd-left{ left:38px; animation:bd-legSwingA 8s infinite ease-in-out; }
.bd-boy-leg.bd-right{ left:88px; animation:bd-legSwingB 8s infinite ease-in-out; }
@keyframes bd-legSwingA{
  0%,20%{ transform:rotate(18deg); }
  5%{ transform:rotate(-18deg); }
  10%{ transform:rotate(18deg); }
  15%{ transform:rotate(-18deg); }
  22%,100%{ transform:rotate(0deg); }
}
@keyframes bd-legSwingB{
  0%,20%{ transform:rotate(-18deg); }
  5%{ transform:rotate(18deg); }
  10%{ transform:rotate(-18deg); }
  15%{ transform:rotate(18deg); }
  22%,100%{ transform:rotate(0deg); }
}

.bd-boy-body{
  position:absolute;
  bottom:38px;
  left:22px;
  width:120px;
  height:110px;
  background:var(--boy-fur);
  border:4px solid var(--outline);
  border-radius:50% 50% 46% 46%;
}
.bd-boy-tummy{
  position:absolute;
  bottom:44px;
  left:44px;
  width:76px;
  height:66px;
  background:var(--boy-muzzle);
  border-radius:50%;
  opacity:0.9;
}

.bd-boy-arm-back{
  position:absolute;
  bottom:70px;
  left:14px;
  width:26px;
  height:66px;
  background:var(--boy-fur-dark);
  border:4px solid var(--outline);
  border-radius:16px;
  transform-origin:top center;
  transform:rotate(20deg);
}

.bd-boy-arm-front{
  position:absolute;
  bottom:70px;
  left:118px;
  width:28px;
  height:70px;
  background:var(--boy-fur);
  border:4px solid var(--outline);
  border-radius:16px;
  transform-origin:top center;
  animation:bd-boyArmExtend 8s infinite ease-in-out;
}
@keyframes bd-boyArmExtend{
  0%,24%   { transform:rotate(35deg); }
  32%      { transform:rotate(-55deg); }
  48%      { transform:rotate(-55deg); }
  58%      { transform:rotate(-20deg); }
  100%     { transform:rotate(-20deg); }
}

.bd-boy-head-wrap{
  position:absolute;
  bottom:130px;
  left:20px;
  width:130px;
  height:110px;
  animation:bd-boyHeadTilt 8s infinite ease-in-out;
  transform-origin:bottom center;
}
@keyframes bd-boyHeadTilt{
  0%,28%  { transform:rotate(0deg); }
  34%     { transform:rotate(-6deg); }
  50%     { transform:rotate(-4deg); }
  58%     { transform:rotate(0deg); }
  100%    { transform:rotate(0deg); }
}
.bd-boy-ear{
  position:absolute;
  top:-14px;
  width:38px;
  height:38px;
  background:var(--boy-fur);
  border:4px solid var(--outline);
  border-radius:50%;
}
.bd-boy-ear.bd-l{ left:-6px; }
.bd-boy-ear.bd-r{ right:-6px; }
.bd-boy-ear-inner{
  position:absolute;
  top:9px;
  left:9px;
  width:16px;
  height:16px;
  background:var(--boy-muzzle);
  border-radius:50%;
}
.bd-boy-head{
  position:absolute;
  top:0;
  left:5px;
  width:120px;
  height:104px;
  background:var(--boy-fur);
  border:4px solid var(--outline);
  border-radius:50%;
}
.bd-boy-muzzle{
  position:absolute;
  bottom:14px;
  left:32px;
  width:58px;
  height:44px;
  background:var(--boy-muzzle);
  border-radius:50%;
}
.bd-boy-nose{
  position:absolute;
  bottom:44px;
  left:52px;
  width:16px;
  height:12px;
  background:var(--outline);
  border-radius:50% 50% 60% 60%;
}
.bd-boy-mouth{
  position:absolute;
  bottom:20px;
  left:47px;
  width:26px;
  height:14px;
  border-bottom:4px solid var(--outline);
  border-radius:0 0 50% 50%;
}
.bd-boy-eye{
  position:absolute;
  top:36px;
  width:9px;
  height:12px;
  background:var(--outline);
  border-radius:50%;
  animation:bd-boyBlink 8s infinite;
}
.bd-boy-eye.bd-l{ left:34px; }
.bd-boy-eye.bd-r{ left:70px; }
@keyframes bd-boyBlink{
  0%,46%,52%,100%{ transform:scaleY(1); }
  49%{ transform:scaleY(0.1); }
}
.bd-boy-cheek{
  position:absolute;
  top:52px;
  width:20px;
  height:12px;
  background:var(--blush);
  border-radius:50%;
  opacity:0;
  animation:bd-boyBlush 8s infinite ease-in-out;
}
.bd-boy-cheek.bd-l{ left:16px; }
.bd-boy-cheek.bd-r{ left:88px; }
@keyframes bd-boyBlush{
  0%,26%   { opacity:0; }
  34%,72%  { opacity:0.85; }
  100%     { opacity:0.5; }
}

/* bouquet held by boy, transfers to girl via crossfade */
.bd-bouquet{
  position:absolute;
  width:70px;
  height:80px;
}
.bd-bouquet-boy{
  bottom:118px;
  left:150px;
  transform-origin:bottom left;
  animation:bd-bouquetBoy 8s infinite ease-in-out;
}
@keyframes bd-bouquetBoy{
  0%,24%  { opacity:1; transform:rotate(10deg) scale(1); }
  32%     { opacity:1; transform:rotate(-30deg) scale(1.05); }
  48%     { opacity:1; transform:rotate(-30deg) scale(1.05); }
  58%     { opacity:0; transform:rotate(-30deg) scale(1.05); }
  100%    { opacity:0; }
}
.bd-bouquet-girl{
  bottom:150px;
  left:20px;
  opacity:0;
  transform:scale(1.02);
  animation:bd-bouquetGirl 8s infinite ease-in-out;
}
@keyframes bd-bouquetGirl{
  0%,54%  { opacity:0; }
  62%     { opacity:1; }
  100%    { opacity:1; }
}
.bd-rose{
  position:absolute;
  width:22px;
  height:22px;
  border-radius:50%;
  border:2.5px solid var(--outline);
}
.bd-rose.bd-r1{ background:var(--rose-red); top:0; left:8px; }
.bd-rose.bd-r2{ background:var(--rose-pink); top:10px; left:26px; }
.bd-rose.bd-r3{ background:var(--rose-red); top:14px; left:0px; }
.bd-rose.bd-r4{ background:var(--rose-pink); top:0px; left:32px; }
.bd-rose-dot{
  position:absolute;
  width:6px;
  height:6px;
  background:rgba(255,255,255,0.55);
  border-radius:50%;
  top:5px;
  left:5px;
}
.bd-stem{
  position:absolute;
  bottom:0;
  left:22px;
  width:8px;
  height:46px;
  background:var(--stem-green);
  border:2.5px solid var(--outline);
  border-radius:4px;
}
.bd-wrap-paper{
  position:absolute;
  bottom:-2px;
  left:6px;
  width:44px;
  height:26px;
  background:#FFF3E0;
  border:2.5px solid var(--outline);
  clip-path:polygon(0% 0%, 100% 0%, 85% 100%, 15% 100%);
}

/* ================= GIRL BEAR ================= */
.bd-girl{
  position:absolute;
  bottom:8%;
  right:6%;
  width:180px;
  height:250px;
}
.bd-girl-bob{
  width:100%;
  height:100%;
  position:relative;
  animation:bd-girlBob 8s infinite ease-in-out;
  transform-origin:bottom center;
}
@keyframes bd-girlBob{
  0%,50%  { transform:translateY(0) scale(1); }
  56%     { transform:translateY(-4px) scale(1.03); }
  64%     { transform:translateY(0) scale(1); }
  75%     { transform:translateY(-2px) scale(1.015) translateX(-6px); }
  100%    { transform:translateY(0) scale(1) translateX(-6px); }
}

.bd-girl-dress{
  position:absolute;
  bottom:0;
  left:20px;
  width:140px;
  height:110px;
  background:var(--pink-dress);
  border:4px solid var(--outline);
  border-radius:20% 20% 50% 50%;
}
.bd-girl-dress-trim{
  position:absolute;
  bottom:0;
  left:20px;
  width:140px;
  height:16px;
  background:var(--pink-dress-dark);
  border-top:3px solid var(--outline);
  border-radius:0 0 40% 40%;
}
.bd-girl-foot{
  position:absolute;
  bottom:-6px;
  width:26px;
  height:16px;
  background:var(--girl-fur-shade);
  border:3.5px solid var(--outline);
  border-radius:40%;
}
.bd-girl-foot.bd-l{ left:38px; }
.bd-girl-foot.bd-r{ left:112px; }

.bd-girl-body{
  position:absolute;
  bottom:66px;
  left:34px;
  width:112px;
  height:104px;
  background:var(--girl-fur);
  border:4px solid var(--outline);
  border-radius:50%;
}
.bd-girl-tummy{
  position:absolute;
  bottom:70px;
  left:56px;
  width:68px;
  height:60px;
  background:#FFF3EA;
  border-radius:50%;
}

.bd-girl-arm-back{
  position:absolute;
  bottom:98px;
  right:8px;
  width:26px;
  height:60px;
  background:var(--girl-fur-shade);
  border:4px solid var(--outline);
  border-radius:16px;
  transform-origin:top center;
  transform:rotate(-16deg);
}
.bd-girl-arm-front{
  position:absolute;
  bottom:98px;
  left:8px;
  width:26px;
  height:64px;
  background:var(--girl-fur);
  border:4px solid var(--outline);
  border-radius:16px;
  transform-origin:top center;
  animation:bd-girlArmReach 8s infinite ease-in-out;
}
@keyframes bd-girlArmReach{
  0%,50%  { transform:rotate(-30deg); }
  58%     { transform:rotate(60deg); }
  75%     { transform:rotate(50deg); }
  100%    { transform:rotate(50deg); }
}

.bd-girl-head-wrap{
  position:absolute;
  bottom:158px;
  left:24px;
  width:132px;
  height:114px;
  animation:bd-girlHeadTilt 8s infinite ease-in-out;
  transform-origin:bottom center;
}
@keyframes bd-girlHeadTilt{
  0%,52%  { transform:rotate(0deg); }
  60%     { transform:rotate(4deg); }
  70%     { transform:rotate(2deg); }
  100%    { transform:rotate(3deg); }
}
.bd-girl-ear{
  position:absolute;
  top:-12px;
  width:36px;
  height:36px;
  background:var(--girl-fur);
  border:4px solid var(--outline);
  border-radius:50%;
}
.bd-girl-ear.bd-l{ left:-4px; }
.bd-girl-ear.bd-r{ right:-4px; }
.bd-girl-ear-inner{
  position:absolute;
  top:8px;
  left:8px;
  width:15px;
  height:15px;
  background:#FFDDE6;
  border-radius:50%;
}
.bd-girl-head{
  position:absolute;
  top:2px;
  left:6px;
  width:120px;
  height:104px;
  background:var(--girl-fur);
  border:4px solid var(--outline);
  border-radius:50%;
}
.bd-girl-muzzle{
  position:absolute;
  bottom:14px;
  left:32px;
  width:56px;
  height:42px;
  background:#FFF6EE;
  border-radius:50%;
}
.bd-girl-nose{
  position:absolute;
  bottom:42px;
  left:52px;
  width:15px;
  height:11px;
  background:var(--outline);
  border-radius:50% 50% 60% 60%;
}
.bd-girl-mouth{
  position:absolute;
  bottom:20px;
  left:46px;
  width:26px;
  height:14px;
  border-bottom:4px solid var(--outline);
  border-radius:0 0 50% 50%;
}
.bd-girl-eye{
  position:absolute;
  top:34px;
  width:10px;
  height:13px;
  background:var(--outline);
  border-radius:50%;
  animation:bd-girlEyeHide 8s infinite ease-in-out;
}
.bd-girl-eye.bd-l{ left:33px; }
.bd-girl-eye.bd-r{ left:71px; }
.bd-girl-eye-happy{
  position:absolute;
  top:38px;
  width:14px;
  height:8px;
  border-top:4px solid var(--outline);
  border-radius:50%;
  opacity:0;
  animation:bd-girlHappyEyes 8s infinite ease-in-out;
}
.bd-girl-eye-happy.bd-l{ left:30px; }
.bd-girl-eye-happy.bd-r{ left:70px; }
@keyframes bd-girlHappyEyes{
  0%,56%  { opacity:0; }
  62%,100%{ opacity:1; }
}
@keyframes bd-girlEyeHide{
  0%,56%  { opacity:1; }
  62%,100%{ opacity:0; }
}

.bd-girl-bow{
  position:absolute;
  top:-30px;
  left:38px;
  width:56px;
  height:34px;
}
.bd-bow-wing{
  position:absolute;
  top:2px;
  width:26px;
  height:26px;
  background:var(--pink-bow);
  border:3.5px solid var(--outline);
  border-radius:50% 50% 50% 4px;
}
.bd-bow-wing.bd-l{ left:0; transform:rotate(-18deg); }
.bd-bow-wing.bd-r{ right:0; transform:rotate(18deg) scaleX(-1); }
.bd-bow-center{
  position:absolute;
  top:9px;
  left:22px;
  width:14px;
  height:14px;
  background:var(--pink-bow-dark);
  border:3px solid var(--outline);
  border-radius:40%;
}

.bd-girl-cheek{
  position:absolute;
  top:50px;
  width:20px;
  height:12px;
  background:var(--blush);
  border-radius:50%;
  opacity:0.3;
  animation:bd-girlBlush 8s infinite ease-in-out;
}
.bd-girl-cheek.bd-l{ left:14px; }
.bd-girl-cheek.bd-r{ left:86px; }
@keyframes bd-girlBlush{
  0%,50%   { opacity:0.15; }
  60%,100% { opacity:0.9; }
}

/* ================ PARTICLES ================ */
.bd-particle-layer{
  position:absolute;
  inset:0;
  pointer-events:none;
}
.bd-heart{
  position:absolute;
  font-size:20px;
  opacity:0;
  color:var(--pink-bow-dark);
  animation:bd-heartFloat 2.6s ease-out forwards;
}
@keyframes bd-heartFloat{
  0%   { opacity:0; transform:translateY(0) scale(0.4) rotate(0deg); }
  15%  { opacity:1; transform:translateY(-10px) scale(1) rotate(-6deg); }
  100% { opacity:0; transform:translateY(-120px) scale(1.1) rotate(8deg); }
}
.bd-sparkle{
  position:absolute;
  font-size:14px;
  opacity:0;
  color:#FFD873;
  animation:bd-sparkleTwinkle 1.6s ease-in-out forwards;
}
@keyframes bd-sparkleTwinkle{
  0%   { opacity:0; transform:scale(0) rotate(0deg); }
  30%  { opacity:1; transform:scale(1.2) rotate(90deg); }
  60%  { opacity:1; transform:scale(0.9) rotate(180deg); }
  100% { opacity:0; transform:scale(0) rotate(260deg); }
}
.bd-petal{
  position:absolute;
  width:12px;
  height:8px;
  background:var(--rose-pink);
  border-radius:60% 20% 60% 20%;
  opacity:0;
  animation:bd-petalDrift 3.4s ease-in-out forwards;
}
@keyframes bd-petalDrift{
  0%   { opacity:0; transform:translate(0,0) rotate(0deg); }
  12%  { opacity:0.9; }
  100% { opacity:0; transform:translate(30px,140px) rotate(200deg); }
}
`
