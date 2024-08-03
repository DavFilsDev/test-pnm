with open("Data/ValidedData.txt", "w") as fichier:
  idMax = 160

  for i in range(1, 10):
    fichier.write(f"00{i}FRS1A2B3A4C5D6A7B8C9A10D\n")
    fichier.write(f"00{i}LOG1B2B3A4C5D6A7B8C9A10D\n")
    fichier.write(f"00{i}CUL1C2B3A4C5D6A7B8C9A10D\n")
    
  for i in range(10, 100):
    fichier.write(f"0{i}FRS1A2B3A4C5D6A7B8C9A10D\n")
    fichier.write(f"0{i}LOG1A2B3A4C5D6A7B8C9A10D\n")
    fichier.write(f"0{i}CUL1A2B3A4C5D6A7B8C9A10D\n")

  for i in range(100, idMax+1):
    fichier.write(f"{i}FRS1A2B3A4C5D6A7B8C9A10D\n")
    fichier.write(f"{i}LOG1A2B3A4C5D6A7B8C9A10D\n")
    fichier.write(f"{i}CUL1A2B3A4C5D6A7B8C9A10D\n")
    
  fichier.write(f"{idMax+1}FRS1A2B3A4C5D6A7B8C9A10D\n")
  fichier.write(f"{idMax+1}LOG1A2B3A4C5D6A7B8C9A10D\n")
  fichier.write(f"{idMax+1}FRS1A2B3A4C5D6A7B8C9A10D\n")


print("Les nombres ont été écrits dans le fichier 'nombres.txt'.")
