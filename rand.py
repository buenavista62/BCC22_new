import random as rd
arr = []
for i in range(101):
    arr.append(rd.randint(100000,999999))

len(arr) == len(set(arr))