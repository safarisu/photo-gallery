# Get all image files (filtering by common image extensions)
$imageFiles = Get-ChildItem -File -Filter *.jpg

# Loop through each image file and rename it based on the pattern
$count = 1
foreach ($imageFile in $imageFiles) {
    # Define the new file name with the pattern photo1.jpg, photo2.jpg, etc.
    $newName = "photo$count.jpg"
    
    # Rename the file
    Rename-Item -Path $imageFile.FullName -NewName $newName
    
    # Increment the counter
    $count++
}

Write-Host "Renaming complete. Total files renamed: $count"