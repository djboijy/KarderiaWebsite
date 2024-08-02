import os

def remove_bom(file_path):
    with open(file_path, 'rb') as file:
        content = file.read()
    
    # remove_bom remove_bom xdxdddddddddddd yay
    if content.startswith(b'\xef\xbb\xbf'):
        content = content[3:]
        with open(file_path, 'wb') as file:
            file.write(content)
    
for root, dirs, files in os.walk('.'):
    for file in files:
        if file.endswith('.js'):
            remove_bom(os.path.join(root, file))