import os
from PIL import Image

src_dir = r"d:\startup solvia\ehub-landing\src\assets\import"
out_dir = r"d:\startup solvia\ehub-landing\public\assets\books"
os.makedirs(out_dir, exist_ok=True)

books_map = [
    {
        "id": "book1_beginners",
        "file": "8f31d877-d7fa-478e-9119-aab26db916f1.jpg",
        "title": "English for Beginners (Book 1)"
    },
    {
        "id": "book2_intermediate",
        "file": "0de5b4d2-a874-4a25-bee3-1a9c471070d2.jpg",
        "title": "English for Intermediate (Book 2)"
    },
    {
        "id": "book3_communication",
        "file": "6a69c097-abac-42e4-b865-c6c0a72a777e.jpg",
        "title": "English for Communication Skill (Book 3)"
    },
    {
        "id": "book4_ielts",
        "file": "dae9491b-8f21-4c0f-895c-238d9bd3154d.jpg",
        "title": "IELTS for 45 Days"
    }
]

for item in books_map:
    img_path = os.path.join(src_dir, item["file"])
    im = Image.open(img_path)
    W, H = im.size
    print(f"Processing {item['file']}: size = {W}x{H}")

    # The image has two book covers side by side with some margin.
    # Left book is from ~9% to ~48% width, ~6% to ~93% height
    # Right book is from ~52% to ~91% width, ~6% to ~93% height
    # Let's crop dynamically by bounding box of colored area or precise coordinates:
    
    # Left cover
    left_box = (int(W * 0.08), int(H * 0.04), int(W * 0.49), int(H * 0.94))
    # Right cover
    right_box = (int(W * 0.51), int(H * 0.04), int(W * 0.92), int(H * 0.94))
    
    front_img = im.crop(left_box)
    back_img = im.crop(right_box)
    
    front_path = os.path.join(out_dir, f"{item['id']}_front.jpg")
    back_path = os.path.join(out_dir, f"{item['id']}_back.jpg")
    
    front_img.save(front_path, quality=95)
    back_img.save(back_path, quality=95)
    print(f"Saved {front_path} and {back_path}")

print("All books split successfully!")
