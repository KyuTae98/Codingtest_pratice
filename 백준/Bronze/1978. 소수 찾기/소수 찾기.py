import math

count = 0

n = input()
nlist = list(map(int,input().split()))

for i in nlist:
    flag = 0
    for j in range(2,int(math.sqrt(i)+1)):
        if i%j==0:
            flag = 1
            break
    if i==1:
        flag = 1
    if flag==0:
        count+=1
print(count)
