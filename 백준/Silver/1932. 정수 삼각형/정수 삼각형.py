import sys

N = int(input())

nlist = []

for i in range(N):
    nlist.append(list(map(int,sys.stdin.readline().split())))
    if i==0:
        continue
    for j in range(i+1):
        if j==0:
            nlist[i][j] += nlist[i-1][0]
        elif j==i:
            nlist[i][j] += nlist[i-1][j-1]
        else:
            nlist[i][j] += max(nlist[i-1][j-1],nlist[i-1][j])

print(max(nlist[N-1]))

