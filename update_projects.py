import re

with open('src/sections/Projects.tsx', 'r') as f:
    content = f.read()

content = content.replace(
    'import RevealOnScroll from "@/components/RevealOnScroll";',
    'import RevealOnScroll from "@/components/RevealOnScroll";\nimport { motion } from "framer-motion";'
)

# replace div with motion.div
content = content.replace(
    '<div\n        className={`group relative overflow-hidden rounded-2xl border border-white/5 bg-surface transition-all duration-500 hover:border-accent/20 hover:shadow-xl hover:shadow-accent/5 ${',
    '<motion.div\n        whileHover={{ y: -8, scale: 1.01 }}\n        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}\n        className={`group relative overflow-hidden border border-surface-light bg-surface transition-all duration-500 hover:border-accent/80 hover:shadow-[0_0_30px_rgba(255,69,0,0.15)] ${'
)

content = content.replace(
    '        </div>\n      </div>\n    </RevealOnScroll>',
    '        </div>\n      </motion.div>\n    </RevealOnScroll>'
)

with open('src/sections/Projects.tsx', 'w') as f:
    f.write(content)

