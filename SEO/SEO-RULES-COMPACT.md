# CLAUDE CLI SEO RULES - 3-STAR HOTEL SOUTHERN SWEDEN

## EVERY PAGE MUST HAVE:
```
meta_title:       50-60 chars | {keyword} | Hotel Name - Southern Sweden
meta_description: 150-160 chars | Include: 3-star, breakfast/dinner included, book direct
h1_tag:          Exactly 1 | With primary keyword + location
canonical_url:   Required
hreflang:        sv-SE (/sv/) and en-SE (/en/)
schema:          Hotel type with 3-star rating
internal_links:  Minimum 3
mobile_viewport: width=device-width, initial-scale=1
```

## URL FORMAT:
```
/{sv|en}/{category}/{keyword-slug}
lowercase only, use-hyphens, no_underscores
```

## IMAGES:
```
max_size:  200KB (500KB for hero)
format:    .webp preferred
filename:  keyword-description-hotel.webp
alt_text:  Required with keywords
```

## KEYWORDS:
```
Swedish:  hotell {city}, 3 stjärnor, frukost middag ingår
English:  hotel {city} Sweden, 3-star, breakfast dinner included
Density:  1-2% max
Place in: H1, first paragraph, title, alt text
```

## PAGE SPEED:
```
LCP: <2.5s | FID: <100ms | CLS: <0.1
```

## DIRECT BOOKING:
```
CTA Required: "Save 10% - Book Direct"
Placement:    Above fold, end of content, sidebar
```

## VALIDATION:
```bash
# Check file against rules
grep -c '<title>' file.html          # Must be 1
grep -c '<h1' file.html              # Must be 1  
grep -c 'schema.org' file.html       # Must exist
grep -c 'href="/' file.html          # Must be 3+
grep -c 'viewport' file.html         # Must exist
```

## CRITICAL FAILURES (Don't publish if missing):
- No meta title/description
- No H1 tag
- No mobile viewport
- No schema markup
- No SSL
- Page speed fails

## USE:
```bash
# When creating any page/content:
claude "create page" --seo-check seo-rules.json
```