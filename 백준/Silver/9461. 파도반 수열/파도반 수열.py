N = int(input())

num = [int(input()) for _ in range(N)]

nlist=[1,1,1]

for i in range(3,max(num)):
    nlist.append(nlist[i-2] + nlist[i-3])


for j in num:
    print(nlist[j-1])
