#!/bin/bash

echo "🚀 Starting comprehensive image optimization..."

# Function to optimize a single image
optimize_image() {
    local input="$1"
    local target_size="$2"  # in KB

    if [ ! -f "$input" ]; then
        echo "❌ File not found: $input"
        return 1
    fi

    original_size=$(stat -f%z "$input")
    original_size_kb=$((original_size / 1024))

    echo "📸 Optimizing: $(basename "$input") (${original_size_kb}KB → target: ${target_size}KB)"

    # Create backup
    cp "$input" "${input}.backup"

    # Try different quality settings to hit target size
    for quality in 75 70 65 60; do
        sips -s format jpeg -s formatOptions $quality "$input.backup" --out "$input.tmp" &>/dev/null
        if [ -f "$input.tmp" ]; then
            new_size=$(stat -f%z "$input.tmp")
            new_size_kb=$((new_size / 1024))

            if [ $new_size_kb -le $target_size ] || [ $quality -eq 60 ]; then
                mv "$input.tmp" "$input"
                echo "✅ Optimized to ${new_size_kb}KB (${quality}% quality)"
                rm "$input.backup"
                return 0
            fi
            rm "$input.tmp"
        fi
    done

    # If optimization failed, restore original
    mv "$input.backup" "$input"
    echo "❌ Could not optimize to target size"
    return 1
}

# Hero images (target: 500KB)
echo "🎯 Optimizing Hero Images..."
for img in public/images/hero/*.jpeg public/images/hero/*.jpg; do
    [ -f "$img" ] && optimize_image "$img" 500
done

# Large room images (target: 300KB)
echo "🏠 Optimizing Room Images..."
for img in $(find public/images/rooms -name "*.jpeg" -o -name "*.jpg" | head -20); do
    [ -f "$img" ] && optimize_image "$img" 300
done

echo "🎉 Optimization complete!"
echo "📊 Before/After comparison:"
find public/images -name "*.jpeg" -o -name "*.jpg" | head -10 | while read img; do
    size=$(stat -f%z "$img" 2>/dev/null || echo "0")
    size_kb=$((size / 1024))
    echo "  $(basename "$img"): ${size_kb}KB"
done