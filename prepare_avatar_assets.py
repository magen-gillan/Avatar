from pathlib import Path
from PIL import Image

source = Path('/home/ubuntu/webdev-static-assets')
repo = Path('/home/ubuntu/repo-audit/konofan-live2d')
target = Path('/home/ubuntu/avatar/client/public/avatar-assets')
target.mkdir(parents=True, exist_ok=True)

jobs = {
    'avatar-mark.png': ('avatar-mark.png', 256, 'PNG'),
    'paper.webp': ('avatar-paper-texture.png', 1600, 'WEBP'),
    'stage.webp': ('avatar-stage.png', 1600, 'WEBP'),
    'accent.webp': ('avatar-accent-card.png', 900, 'WEBP'),
    'aqua.webp': ('avatar-models/aqua.png', 900, 'WEBP'),
    'darkness.webp': ('avatar-models/darkness.png', 900, 'WEBP'),
    'megumin.webp': (repo / '102 - Megumin/4 star fes megumin/textures/texture_00.png', 900, 'WEBP'),
    'wiz.webp': (repo / '105 - Wiz/4 star fes wiz/textures/texture_00.png', 900, 'WEBP'),
}

for output_name, (input_name, max_width, fmt) in jobs.items():
    image = Image.open(input_name if isinstance(input_name, Path) else source / input_name)
    image.thumbnail((max_width, max_width), Image.Resampling.LANCZOS)
    output = target / output_name
    if fmt == 'PNG':
        image.save(output, format=fmt, optimize=True)
    else:
        if image.mode not in ('RGB', 'RGBA'):
            image = image.convert('RGBA')
        image.save(output, format=fmt, quality=82, method=6)
    print(f'{output_name}: {image.size} -> {output.stat().st_size} bytes')
