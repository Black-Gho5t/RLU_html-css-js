import os
from PIL import Image

def convert_jpg_to_webp(input_folder, output_folder="optimized"):
    """
    Convierte imágenes JPG a WebP y las guarda en una carpeta optimizada.
    
    Args:
        input_folder: Ruta de la carpeta con las imágenes JPG
        output_folder: Nombre de la carpeta de salida (default: "optimized")
    """
    # Crear carpeta de salida si no existe
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)
    
    # Obtener lista de archivos en la carpeta
    files = sorted(os.listdir(input_folder))
    
    # Filtrar solo archivos JPG/JPEG
    image_files = [f for f in files if f.lower().endswith(('.jpg', '.jpeg'))]
    
    print(f"Encontradas {len(image_files)} imágenes para convertir...")
    
    # Convertir cada imagen
    for i, filename in enumerate(image_files, 1):
        input_path = os.path.join(input_folder, filename)
        
        # Crear nombre de salida con extensión .webp
        output_filename = os.path.splitext(filename)[0] + '.webp'
        output_path = os.path.join(output_folder, output_filename)
        
        try:
            # Abrir y convertir imagen
            img = Image.open(input_path)
            img.save(output_path, 'WEBP', quality=85)
            print(f"{i}/{len(image_files)}: {filename} -> {output_filename}")
        except Exception as e:
            print(f"Error al convertir {filename}: {e}")
    
    print(f"\n✓ Conversión completada. Imágenes guardadas en '{output_folder}'")

# Uso del script
if __name__ == "__main__":
    # Cambia esta ruta por la carpeta con tus imágenes
    carpeta_imagenes = input("Ingresa la ruta de la carpeta con imágenes: ")
    convert_jpg_to_webp(carpeta_imagenes)