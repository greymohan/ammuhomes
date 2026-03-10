from PIL import Image
import os

input_dir = "images"
output_dir = "images_optimized"

# Target sizes for different image types
sizes = {
    "hero": (1920, None),  # Max width for hero images
    "value_prop": (1600, None),  # Value proposition backgrounds
    "model": (800, None),  # Model cards
    "process": (1200, None),  # Process images
    "detail": (1024, None)  # Detail images
}

image_config = {
    "hero_main_home.jpg": ("hero", 85),
    "hero_aerial_sunset.jpg": ("hero", 85),
    "value_prop_custom_design.jpg": ("value_prop", 82),
    "value_prop_family_home.jpg": ("value_prop", 82),
    "value_prop_lifestyle.jpg": ("value_prop", 82),
    "construction_quality.jpg": ("process", 80),
    "blueprints_planning.jpg": ("process", 80),
    "client_consultation.jpg": ("process", 80),
    "model_starter_200sqm.jpg": ("model", 80),
    "model_executive_320sqm.jpg": ("model", 80),
    "model_prestige_450sqm.jpg": ("model", 80),
    "detail_craftsmanship.jpg": ("detail", 82)
}

total_original = 0
total_optimized = 0

for filename, (img_type, quality) in image_config.items():
    input_path = os.path.join(input_dir, filename)
    output_path = os.path.join(output_dir, filename)
    
    if os.path.exists(input_path):
        original_size = os.path.getsize(input_path)
        total_original += original_size
        
        # Open and optimize image
        img = Image.open(input_path)
        
        # Convert to RGB if necessary
        if img.mode in ('RGBA', 'P'):
            img = img.convert('RGB')
        
        # Resize if needed
        max_width = sizes[img_type][0]
        if img.width > max_width:
            ratio = max_width / img.width
            new_height = int(img.height * ratio)
            img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)
        
        # Save with optimization
        img.save(output_path, 'JPEG', quality=quality, optimize=True, progressive=True)
        
        optimized_size = os.path.getsize(output_path)
        total_optimized += optimized_size
        reduction = ((original_size - optimized_size) / original_size) * 100
        
        print(f"✓ {filename}")
        print(f"  Original: {original_size/1024:.1f}KB → Optimized: {optimized_size/1024:.1f}KB ({reduction:.1f}% reduction)")
    else:
        print(f"✗ {filename} not found")

print(f"\n{'='*60}")
print(f"Total Original Size: {total_original/1024:.1f}KB")
print(f"Total Optimized Size: {total_optimized/1024:.1f}KB")
print(f"Total Reduction: {((total_original - total_optimized) / total_original) * 100:.1f}%")
