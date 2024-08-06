import random

caracteres = ['A', 'B', 'C', 'D']
r = random.choice(caracteres)
  
with open("Data/ValidedData.txt", "w") as fichier:
  idMax = 160

  for i in range(1, 10):
   fichier.write(f"00{i}FRS1{random.choice(caracteres)}2{random.choice(caracteres)}3{random.choice(caracteres)}4{random.choice(caracteres)}5{random.choice(caracteres)}6{random.choice(caracteres)}7{random.choice(caracteres)}8{random.choice(caracteres)}9{random.choice(caracteres)}10{random.choice(caracteres)}\n")
   fichier.write(f"00{i}LOG1{random.choice(caracteres)}2{random.choice(caracteres)}3{random.choice(caracteres)}4{random.choice(caracteres)}5{random.choice(caracteres)}6{random.choice(caracteres)}7{random.choice(caracteres)}8{random.choice(caracteres)}9{random.choice(caracteres)}10{random.choice(caracteres)}\n")
   fichier.write(f"00{i}CUL1{random.choice(caracteres)}2{random.choice(caracteres)}3{random.choice(caracteres)}4{random.choice(caracteres)}5{random.choice(caracteres)}6{random.choice(caracteres)}7{random.choice(caracteres)}8{random.choice(caracteres)}9{random.choice(caracteres)}10{random.choice(caracteres)}\n")
  
  for i in range(10, 100):
    fichier.write(f"0{i}FRS1{random.choice(caracteres)}2{random.choice(caracteres)}3{random.choice(caracteres)}4{random.choice(caracteres)}5{random.choice(caracteres)}6{random.choice(caracteres)}7{random.choice(caracteres)}8{random.choice(caracteres)}9{random.choice(caracteres)}10{random.choice(caracteres)}\n")
    fichier.write(f"0{i}LOG1{random.choice(caracteres)}2{random.choice(caracteres)}3{random.choice(caracteres)}4{random.choice(caracteres)}5{random.choice(caracteres)}6{random.choice(caracteres)}7{random.choice(caracteres)}8{random.choice(caracteres)}9{random.choice(caracteres)}10{random.choice(caracteres)}\n")
    fichier.write(f"0{i}CUL1{random.choice(caracteres)}2{random.choice(caracteres)}3{random.choice(caracteres)}4{random.choice(caracteres)}5{random.choice(caracteres)}6{random.choice(caracteres)}7{random.choice(caracteres)}8{random.choice(caracteres)}9{random.choice(caracteres)}10{random.choice(caracteres)}\n")
  for i in range(100, idMax + 1):
   fichier.write(f"{i}FRS1{random.choice(caracteres)}2{random.choice(caracteres)}3{random.choice(caracteres)}4{random.choice(caracteres)}5{random.choice(caracteres)}6{random.choice(caracteres)}7{random.choice(caracteres)}8{random.choice(caracteres)}9{random.choice(caracteres)}10{random.choice(caracteres)}\n")
   fichier.write(f"{i}LOG1{random.choice(caracteres)}2{random.choice(caracteres)}3{random.choice(caracteres)}4{random.choice(caracteres)}5{random.choice(caracteres)}6{random.choice(caracteres)}7{random.choice(caracteres)}8{random.choice(caracteres)}9{random.choice(caracteres)}10{random.choice(caracteres)}\n")
   fichier.write(f"{i}CUL1{random.choice(caracteres)}2{random.choice(caracteres)}3{random.choice(caracteres)}4{random.choice(caracteres)}5{random.choice(caracteres)}6{random.choice(caracteres)}7{random.choice(caracteres)}8{random.choice(caracteres)}9{random.choice(caracteres)}10{random.choice(caracteres)}\n")

print("Les nombres ont ete ecrits dans le fichier 'nombres.txt'.")
