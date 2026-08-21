const COLORS = ['#d8552f', '#f2c46d', '#8fa382', '#f6d9c4', '#ffffff']

export function burstConfetti(pieceCount = 24) {
  for (let i = 0; i < pieceCount; i++) {
    const piece = document.createElement('div')
    piece.className = 'confetti-piece'
    piece.style.position = 'fixed'
    piece.style.top = '-10px'
    piece.style.width = '8px'
    piece.style.height = '14px'
    piece.style.zIndex = '50'
    piece.style.pointerEvents = 'none'
    piece.style.borderRadius = '2px'
    piece.style.left = `${40 + Math.random() * 20}vw`
    piece.style.background = COLORS[i % COLORS.length]
    piece.style.transform = `rotate(${Math.random() * 360}deg)`
    document.body.appendChild(piece)

    const duration = 1200 + Math.random() * 900
    piece.animate(
      [
        { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
        {
          transform: `translateY(${400 + Math.random() * 300}px) rotate(${360 + Math.random() * 360}deg)`,
          opacity: 0,
        },
      ],
      { duration, easing: 'ease-in' }
    )

    setTimeout(() => piece.remove(), duration)
  }
}
