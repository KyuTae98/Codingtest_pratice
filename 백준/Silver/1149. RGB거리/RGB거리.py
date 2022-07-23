import sys

N = int(input())

nlist = [list(map(int, sys.stdin.readline().split())) for _ in range(N)]

for i in range(1,N):
    nlist[i][0] += min(nlist[i-1][1],nlist[i-1][2])
    nlist[i][1] += min(nlist[i-1][0],nlist[i-1][2])
    nlist[i][2] += min(nlist[i-1][1],nlist[i-1][0])

print(min(nlist[N-1][0],nlist[N-1][1],nlist[N-1][2]))
