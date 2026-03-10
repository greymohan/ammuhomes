import requests
import time

images = {
    "hero_main_home.jpg": "https://www.genspark.ai/api/files/s/AyeaYfEX?cache_control=3600",
    "hero_aerial_sunset.jpg": "https://www.genspark.ai/api/files/s/kCw7hIZq?cache_control=3600",
    "value_prop_custom_design.jpg": "https://www.genspark.ai/api/files/s/90JzAA5y?cache_control=3600",
    "value_prop_family_home.jpg": "https://www.genspark.ai/api/files/s/sGRGXbuA?cache_control=3600",
    "value_prop_lifestyle.jpg": "https://www.genspark.ai/api/files/s/hnmQoUCJ?cache_control=3600",
    "construction_quality.jpg": "https://www.genspark.ai/api/files/s/W6npuTUj?cache_control=3600",
    "blueprints_planning.jpg": "https://www.genspark.ai/api/files/s/TL0VRO8m?cache_control=3600",
    "client_consultation.jpg": "https://www.genspark.ai/api/files/s/UtOQXXy4?cache_control=3600",
    "model_starter_200sqm.jpg": "https://www.genspark.ai/api/files/s/34XSJde5?cache_control=3600",
    "model_executive_320sqm.jpg": "https://www.genspark.ai/api/files/s/E4pjWWUA?cache_control=3600",
    "model_prestige_450sqm.jpg": "https://www.genspark.ai/api/files/s/UIN6g5nl?cache_control=3600",
    "detail_craftsmanship.jpg": "https://www.genspark.ai/api/files/s/s98lPEHV?cache_control=3600"
}

headers = {
    'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
    'Accept-Language': 'en-US,en;q=0.9',
    'Referer': 'https://www.genspark.ai/',
    'Connection': 'keep-alive'
}

success_count = 0
for filename, url in images.items():
    try:
        print(f"Downloading {filename}...")
        response = requests.get(url, headers=headers, timeout=30)
        if response.status_code == 200:
            with open(filename, 'wb') as f:
                f.write(response.content)
            print(f"✓ {filename} downloaded ({len(response.content)} bytes)")
            success_count += 1
        else:
            print(f"✗ {filename} failed with status {response.status_code}")
        time.sleep(0.5)  # Be polite
    except Exception as e:
        print(f"✗ {filename} error: {e}")

print(f"\nDownloaded {success_count}/{len(images)} images successfully")
