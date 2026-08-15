import os
import pymupdf

pdf_path = "booklet .pdf"
output_dir = "assets/images"

if not os.path.exists(output_dir):
    os.makedirs(output_dir)

doc = pymupdf.open(pdf_path)

print(f"Extracting images from {pdf_path}...")
img_count = 0
for i in range(len(doc)):
    page = doc[i]
    image_list = page.get_images()
    for img_index, img in enumerate(image_list):
        xref = img[0]
        base_image = doc.extract_image(xref)
        image_bytes = base_image["image"]
        image_ext = base_image["ext"]
        image_name = f"img_p{i}_{img_index}.{image_ext}"
        with open(os.path.join(output_dir, image_name), "wb") as f:
            f.write(image_bytes)
        img_count += 1
print(f"Extracted {img_count} images to {output_dir}")
