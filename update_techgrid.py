with open('src/components/TechGridBackground.tsx', 'r') as f:
    text = f.read()

text = text.replace(
    'const COLORS = ["#00f0ff", "#7b2dff", "#00a8b3", "#10b981"];',
    'const COLORS = ["#ff4500", "#ffae42", "#d9534f", "#888888"];'
)
text = text.replace(
    'ctx!.strokeStyle = `rgba(0, 240, 255, ${LINE_ALPHA})`;',
    'ctx!.strokeStyle = `rgba(255, 69, 0, ${LINE_ALPHA})`;'
)
text = text.replace(
    'ctx!.fillStyle = `rgba(0, 240, 255, ${NODE_ALPHA})`;',
    'ctx!.fillStyle = `rgba(255, 69, 0, ${NODE_ALPHA})`;'
)

with open('src/components/TechGridBackground.tsx', 'w') as f:
    f.write(text)

